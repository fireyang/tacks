module Decoders exposing (..)

import Json.Decode as Json exposing (..)
import Dict
import Model.Shared exposing (..)


liveStatusDecoder : Decoder LiveStatus
liveStatusDecoder =
  object2
    LiveStatus
    ("liveTracks" := list liveTrackDecoder)
    ("onlinePlayers" := list playerDecoder)


liveTrackDecoder : Decoder LiveTrack
liveTrackDecoder =
  object4
    LiveTrack
    ("track" := trackDecoder)
    ("meta" := trackMetaDecoder)
    ("players" := list playerDecoder)
    ("races" := list raceDecoder)


trackMetaDecoder : Decoder TrackMeta
trackMetaDecoder =
  object3
    TrackMeta
    ("creator" := playerDecoder)
    ("rankings" := list rankingDecoder)
    ("runsCount" := int)


raceDecoder : Decoder Race
raceDecoder =
  object4
    Race
    ("id" := string)
    ("startTime" := float)
    ("players" := list playerDecoder)
    ("tallies" := list playerTallyDecoder)


rankingDecoder : Decoder Ranking
rankingDecoder =
  object4
    Ranking
    ("rank" := int)
    ("runId" := string)
    ("player" := playerDecoder)
    ("finishTime" := float)


playerTallyDecoder : Decoder PlayerTally
playerTallyDecoder =
  object3
    PlayerTally
    ("player" := playerDecoder)
    ("gates" := list float)
    ("finished" := bool)


trackDecoder : Decoder Track
trackDecoder =
  object7
    Track
    ("id" := string)
    ("name" := string)
    ("creatorId" := string)
    ("status" := string `andThen` trackStatusDecoder)
    ("featured" := bool)
    ("creationTime" := float)
    ("updateTime" := float)


trackStatusDecoder : String -> Decoder TrackStatus
trackStatusDecoder s =
  case s of
    "draft" ->
      succeed Draft

    "open" ->
      succeed Open

    "archived" ->
      succeed Archived

    "deleted" ->
      succeed Deleted

    _ ->
      fail (s ++ " is not a TrackStatus")


playerDecoder : Decoder Player
playerDecoder =
  object7
    Player
    ("id" := string)
    (maybe ("handle" := string))
    (maybe ("status" := string))
    (maybe ("avatarId" := string))
    ("vmgMagnet" := int)
    ("guest" := bool)
    ("user" := bool)


userDecoder : Decoder User
userDecoder =
  object5
    User
    ("id" := string)
    ("handle" := string)
    (maybe ("status" := string))
    (maybe ("avatarId" := string))
    ("vmgMagnet" := int)


messageDecoder : Decoder Message
messageDecoder =
  object3
    Message
    ("content" := string)
    ("player" := playerDecoder)
    ("time" := float)


pointDecoder : Decoder Point
pointDecoder =
  tuple2 (,) float float


courseDecoder : Decoder Course
courseDecoder =
  object7
    Course
    ("start" := gateDecoder)
    ("gates" := list gateDecoder)
    ("grid" := gridDecoder)
    ("area" := raceAreaDecoder)
    ("windSpeed" := int)
    ("windGenerator" := windGeneratorDecoder)
    ("gustGenerator" := gustGeneratorDecoder)


gateDecoder : Decoder Gate
gateDecoder =
  object4
    Gate
    (maybe ("label" := string))
    ("center" := pointDecoder)
    ("width" := float)
    ("orientation" := (string `andThen` orientationDecoder))


orientationDecoder : String -> Decoder Orientation
orientationDecoder s =
  case s of
    "N" ->
      succeed North

    "S" ->
      succeed South

    "E" ->
      succeed East

    "W" ->
      succeed West

    _ ->
      fail (s ++ " is not an Orientation")


gridDecoder : Decoder Grid
gridDecoder =
  list (tuple2 (,) (tuple2 (,) int int) (string `andThen` tileKindDecoder))
    |> map Dict.fromList


tileKindDecoder : String -> Decoder TileKind
tileKindDecoder s =
  case s of
    "W" ->
      succeed Water

    "G" ->
      succeed Grass

    "R" ->
      succeed Rock

    _ ->
      fail (s ++ " is not a TileKind")


raceAreaDecoder : Decoder RaceArea
raceAreaDecoder =
  object2
    RaceArea
    ("rightTop" := pointDecoder)
    ("leftBottom" := pointDecoder)


windGeneratorDecoder : Decoder WindGenerator
windGeneratorDecoder =
  object4
    WindGenerator
    ("wavelength1" := int)
    ("amplitude1" := int)
    ("wavelength2" := int)
    ("amplitude2" := int)


gustGeneratorDecoder : Decoder GustGenerator
gustGeneratorDecoder =
  object5
    GustGenerator
    ("interval" := int)
    ("radiusBase" := int)
    ("radiusVariation" := int)
    ("speedVariation" := rangeDecoder)
    ("originVariation" := rangeDecoder)


rangeDecoder : Decoder Range
rangeDecoder =
  object2
    Range
    ("start" := int)
    ("end" := int)


runDecoder : Decoder Run
runDecoder =
  object8
    Run
    ("id" := string)
    ("trackId" := string)
    ("raceId" := string)
    ("playerId" := string)
    (maybe ("playerHandle" := string))
    ("startTime" := float)
    ("tally" := list float)
    ("duration" := float)


raceReportDecoder : Decoder RaceReport
raceReportDecoder =
  object5
    RaceReport
    ("id" := string)
    ("startTime" := float)
    ("trackId" := string)
    ("trackName" := string)
    ("runs" := list runDecoder)
