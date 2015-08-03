module Views.Main where

import Graphics.Element exposing (empty)
import Html exposing (..)
import Html.Attributes exposing (..)

import State exposing (..)
import Messages exposing (Translator)

import Views.TopBar as TopBar
import Views.Home as Home
import Views.ShowRaceCourse as ShowRaceCourse

import Render.All exposing (renderGame)


type alias View = Translator -> AppState -> Html


mainView : Translator -> (Int,Int) -> AppState -> Html
mainView t (w,h) appState =
  case appState.screen of

    Home ->
      layout t appState Home.view

    Show raceCourseStatus ->
      layout t appState (ShowRaceCourse.view raceCourseStatus)

    Play raceCourse ->
      layout t appState (gameView (w, h))


layout : Translator -> AppState -> View -> Html
layout t appState view =
  div [ class "global-wrapper" ]
    [ TopBar.view t appState
    , view t appState
    ]

gameView : (Int, Int) -> Translator -> AppState -> Html
gameView (w,h) t appState =
  fromElement <| case appState.gameState of
    Just gameState ->
      renderGame (w, h - TopBar.height) gameState
    Nothing ->
      -- TODO loading
      empty