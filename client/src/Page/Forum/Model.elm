module Page.Forum.Model where

import Model.Shared exposing (..)
import Model.Forum exposing (..)
import Page.Forum.Route exposing (..)


type alias Model =
  { topics : List ForumPost
  , users : List User
  }

initialRoute : Route
initialRoute =
  Index

initial : Model
initial =
  { topics = []
  , users = []
  }

type Action
  = TopicsResult (Result () (List ForumPost))
  | NoOp
