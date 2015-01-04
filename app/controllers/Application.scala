package controllers

import core.TimeTrialLeaderboard

import scala.concurrent.duration._
import play.api.libs.concurrent.Execution.Implicits._
import play.api.mvc._
import play.api.Play.current
import akka.util.Timeout
import akka.pattern.ask
import reactivemongo.bson.BSONObjectID

import actors.{GetRace, RacesSupervisor}
import models.{TimeTrial, User, Race}

object Application extends Controller with Security {

  def index = PlayerAction.async() { implicit request =>
    for {
      finishedRaces     <- Race.listFinished(10)
      users             <- User.listByIds(finishedRaces.flatMap(_.tally.map(_.playerId)))
      timeTrials        <- TimeTrial.listCurrent
      trialsWithRanking <- TimeTrial.zipWithRankings(timeTrials)
      leaderboard       = TimeTrialLeaderboard.forTrials(trialsWithRanking)
      trialsUsers       <- User.listByIds(trialsWithRanking.flatMap(_._2.map(_.playerId)))
    }
    yield Ok(views.html.index(request.player, trialsWithRanking, trialsUsers, leaderboard, finishedRaces, users, Users.userForm))
  }

  implicit val timeout = Timeout(5.seconds)

  def playTimeTrial(timeTrialId: String) = PlayerAction.async() { implicit request =>
    TimeTrial.findById(timeTrialId).map { timeTrial =>
      val wsUrl = routes.Api.timeTrialSocket(timeTrial.idToStr).webSocketURL()
      Ok(views.html.playTimeTrial(timeTrial, wsUrl))
    }
  }

  def playRace(raceId: String) = PlayerAction.async() { implicit request =>
    (RacesSupervisor.actorRef ? GetRace(BSONObjectID(raceId))).mapTo[Option[Race]].map {
      case None => NotFound
      case Some(race) => {
        val wsUrl = routes.Api.racePlayerSocket(race.idToStr).webSocketURL()
        Ok(views.html.playRace(race, wsUrl))
      }
    }
  }

  def watchRace(raceId: String) = PlayerAction.async() { implicit request =>
    (RacesSupervisor.actorRef ? GetRace(BSONObjectID(raceId))).mapTo[Option[Race]].map {
      case None => NotFound
      case Some(race) => {
        val wsUrl = routes.Api.raceWatcherSocket(race.idToStr).webSocketURL()
        Ok(views.html.watchRace(race, wsUrl))
      }
    }
  }
}

