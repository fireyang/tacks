Elm.ShiftMaster = Elm.ShiftMaster || {};
Elm.ShiftMaster.make = function (_elm) {
   "use strict";
   _elm.ShiftMaster = _elm.ShiftMaster || {};
   if (_elm.ShiftMaster.values)
   return _elm.ShiftMaster.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "ShiftMaster";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Game = Elm.Game.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Inputs = Elm.Inputs.make(_elm);
   var Json = Elm.Json.make(_elm);
   var Keyboard = Elm.Keyboard.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Render = Render || {};
   Render.All = Elm.Render.All.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var Steps = Elm.Steps.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var WebSocket = Elm.WebSocket.make(_elm);
   var Window = Elm.Window.make(_elm);
   var _op = {};
   var playerToRaceOutput = function (_v0) {
      return function () {
         return {_: {}
                ,direction: _v0.direction
                ,position: _v0.position
                ,spellCast: _v0.spellCast
                ,startCountdown: _v0.startCountdown
                ,velocity: _v0.velocity};
      }();
   };
   var clock = A2(Signal._op["<~"],
   Time.inSeconds,
   Time.fps(30));
   var raceInput = Native.Ports.portIn("raceInput",
   Native.Ports.incomingSignal(function (v) {
      return typeof v === "object" && "now" in v && "startTime" in v && "course" in v && "crossedGates" in v && "nextGate" in v && "wind" in v && "opponents" in v && "buoys" in v && "playerSpell" in v && "triggeredSpells" in v && "leaderboard" in v && "isMaster" in v ? {_: {}
                                                                                                                                                                                                                                                                              ,now: typeof v.now === "number" ? v.now : _E.raise("invalid input, expecting JSNumber but got " + v.now)
                                                                                                                                                                                                                                                                              ,startTime: v.startTime === null ? Maybe.Nothing : Maybe.Just(typeof v.startTime === "number" ? v.startTime : _E.raise("invalid input, expecting JSNumber but got " + v.startTime))
                                                                                                                                                                                                                                                                              ,course: v.course === null ? Maybe.Nothing : Maybe.Just(typeof v.course === "object" && "upwind" in v.course && "downwind" in v.course && "laps" in v.course && "markRadius" in v.course && "islands" in v.course && "bounds" in v.course ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,upwind: typeof v.course.upwind === "object" && "y" in v.course.upwind && "width" in v.course.upwind ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ,y: typeof v.course.upwind.y === "number" ? v.course.upwind.y : _E.raise("invalid input, expecting JSNumber but got " + v.course.upwind.y)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 ,width: typeof v.course.upwind.width === "number" ? v.course.upwind.width : _E.raise("invalid input, expecting JSNumber but got " + v.course.upwind.width)} : _E.raise("invalid input, expecting JSObject [\"y\",\"width\"] but got " + v.course.upwind)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,downwind: typeof v.course.downwind === "object" && "y" in v.course.downwind && "width" in v.course.downwind ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ,y: typeof v.course.downwind.y === "number" ? v.course.downwind.y : _E.raise("invalid input, expecting JSNumber but got " + v.course.downwind.y)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         ,width: typeof v.course.downwind.width === "number" ? v.course.downwind.width : _E.raise("invalid input, expecting JSNumber but got " + v.course.downwind.width)} : _E.raise("invalid input, expecting JSObject [\"y\",\"width\"] but got " + v.course.downwind)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,laps: typeof v.course.laps === "number" ? v.course.laps : _E.raise("invalid input, expecting JSNumber but got " + v.course.laps)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,markRadius: typeof v.course.markRadius === "number" ? v.course.markRadius : _E.raise("invalid input, expecting JSNumber but got " + v.course.markRadius)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,islands: _U.isJSArray(v.course.islands) ? _L.fromArray(v.course.islands.map(function (v) {
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             return typeof v === "object" && "location" in v && "radius" in v ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ,location: _U.isJSArray(v.location) ? {ctor: "_Tuple2"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ,_0: typeof v.location[0] === "number" ? v.location[0] : _E.raise("invalid input, expecting JSNumber but got " + v.location[0])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      ,_1: typeof v.location[1] === "number" ? v.location[1] : _E.raise("invalid input, expecting JSNumber but got " + v.location[1])} : _E.raise("invalid input, expecting JSArray but got " + v.location)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                ,radius: typeof v.radius === "number" ? v.radius : _E.raise("invalid input, expecting JSNumber but got " + v.radius)} : _E.raise("invalid input, expecting JSObject [\"location\",\"radius\"] but got " + v);
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          })) : _E.raise("invalid input, expecting JSArray but got " + v.course.islands)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          ,bounds: _U.isJSArray(v.course.bounds) ? {ctor: "_Tuple2"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ,_0: _U.isJSArray(v.course.bounds[0]) ? {ctor: "_Tuple2"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ,_0: typeof v.course.bounds[0][0] === "number" ? v.course.bounds[0][0] : _E.raise("invalid input, expecting JSNumber but got " + v.course.bounds[0][0])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ,_1: typeof v.course.bounds[0][1] === "number" ? v.course.bounds[0][1] : _E.raise("invalid input, expecting JSNumber but got " + v.course.bounds[0][1])} : _E.raise("invalid input, expecting JSArray but got " + v.course.bounds[0])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   ,_1: _U.isJSArray(v.course.bounds[1]) ? {ctor: "_Tuple2"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ,_0: typeof v.course.bounds[1][0] === "number" ? v.course.bounds[1][0] : _E.raise("invalid input, expecting JSNumber but got " + v.course.bounds[1][0])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           ,_1: typeof v.course.bounds[1][1] === "number" ? v.course.bounds[1][1] : _E.raise("invalid input, expecting JSNumber but got " + v.course.bounds[1][1])} : _E.raise("invalid input, expecting JSArray but got " + v.course.bounds[1])} : _E.raise("invalid input, expecting JSArray but got " + v.course.bounds)} : _E.raise("invalid input, expecting JSObject [\"upwind\",\"downwind\",\"laps\",\"markRadius\",\"islands\",\"bounds\"] but got " + v.course))
                                                                                                                                                                                                                                                                              ,crossedGates: _U.isJSArray(v.crossedGates) ? _L.fromArray(v.crossedGates.map(function (v) {
                                                                                                                                                                                                                                                                                 return typeof v === "number" ? v : _E.raise("invalid input, expecting JSNumber but got " + v);
                                                                                                                                                                                                                                                                              })) : _E.raise("invalid input, expecting JSArray but got " + v.crossedGates)
                                                                                                                                                                                                                                                                              ,nextGate: v.nextGate === null ? Maybe.Nothing : Maybe.Just(typeof v.nextGate === "string" || typeof v.nextGate === "object" && v.nextGate instanceof String ? v.nextGate : _E.raise("invalid input, expecting JSString but got " + v.nextGate))
                                                                                                                                                                                                                                                                              ,wind: typeof v.wind === "object" && "origin" in v.wind && "speed" in v.wind && "gusts" in v.wind ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                  ,origin: typeof v.wind.origin === "number" ? v.wind.origin : _E.raise("invalid input, expecting JSNumber but got " + v.wind.origin)
                                                                                                                                                                                                                                                                                                                                                                                  ,speed: typeof v.wind.speed === "number" ? v.wind.speed : _E.raise("invalid input, expecting JSNumber but got " + v.wind.speed)
                                                                                                                                                                                                                                                                                                                                                                                  ,gusts: _U.isJSArray(v.wind.gusts) ? _L.fromArray(v.wind.gusts.map(function (v) {
                                                                                                                                                                                                                                                                                                                                                                                     return typeof v === "object" && "position" in v && "angle" in v && "speed" in v && "radius" in v ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ,position: _U.isJSArray(v.position) ? {ctor: "_Tuple2"
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ,_0: typeof v.position[0] === "number" ? v.position[0] : _E.raise("invalid input, expecting JSNumber but got " + v.position[0])
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              ,_1: typeof v.position[1] === "number" ? v.position[1] : _E.raise("invalid input, expecting JSNumber but got " + v.position[1])} : _E.raise("invalid input, expecting JSArray but got " + v.position)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ,angle: typeof v.angle === "number" ? v.angle : _E.raise("invalid input, expecting JSNumber but got " + v.angle)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ,speed: typeof v.speed === "number" ? v.speed : _E.raise("invalid input, expecting JSNumber but got " + v.speed)
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        ,radius: typeof v.radius === "number" ? v.radius : _E.raise("invalid input, expecting JSNumber but got " + v.radius)} : _E.raise("invalid input, expecting JSObject [\"position\",\"angle\",\"speed\",\"radius\"] but got " + v);
                                                                                                                                                                                                                                                                                                                                                                                  })) : _E.raise("invalid input, expecting JSArray but got " + v.wind.gusts)} : _E.raise("invalid input, expecting JSObject [\"origin\",\"speed\",\"gusts\"] but got " + v.wind)
                                                                                                                                                                                                                                                                              ,opponents: _U.isJSArray(v.opponents) ? _L.fromArray(v.opponents.map(function (v) {
                                                                                                                                                                                                                                                                                 return typeof v === "object" && "position" in v && "direction" in v && "velocity" in v && "name" in v ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                         ,position: _U.isJSArray(v.position) ? {ctor: "_Tuple2"
                                                                                                                                                                                                                                                                                                                                                                                                                               ,_0: typeof v.position[0] === "number" ? v.position[0] : _E.raise("invalid input, expecting JSNumber but got " + v.position[0])
                                                                                                                                                                                                                                                                                                                                                                                                                               ,_1: typeof v.position[1] === "number" ? v.position[1] : _E.raise("invalid input, expecting JSNumber but got " + v.position[1])} : _E.raise("invalid input, expecting JSArray but got " + v.position)
                                                                                                                                                                                                                                                                                                                                                                                         ,direction: typeof v.direction === "number" ? v.direction : _E.raise("invalid input, expecting JSNumber but got " + v.direction)
                                                                                                                                                                                                                                                                                                                                                                                         ,velocity: typeof v.velocity === "number" ? v.velocity : _E.raise("invalid input, expecting JSNumber but got " + v.velocity)
                                                                                                                                                                                                                                                                                                                                                                                         ,name: typeof v.name === "string" || typeof v.name === "object" && v.name instanceof String ? v.name : _E.raise("invalid input, expecting JSString but got " + v.name)} : _E.raise("invalid input, expecting JSObject [\"position\",\"direction\",\"velocity\",\"name\"] but got " + v);
                                                                                                                                                                                                                                                                              })) : _E.raise("invalid input, expecting JSArray but got " + v.opponents)
                                                                                                                                                                                                                                                                              ,buoys: _U.isJSArray(v.buoys) ? _L.fromArray(v.buoys.map(function (v) {
                                                                                                                                                                                                                                                                                 return typeof v === "object" && "position" in v && "radius" in v && "spell" in v ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                    ,position: _U.isJSArray(v.position) ? {ctor: "_Tuple2"
                                                                                                                                                                                                                                                                                                                                                                                                          ,_0: typeof v.position[0] === "number" ? v.position[0] : _E.raise("invalid input, expecting JSNumber but got " + v.position[0])
                                                                                                                                                                                                                                                                                                                                                                                                          ,_1: typeof v.position[1] === "number" ? v.position[1] : _E.raise("invalid input, expecting JSNumber but got " + v.position[1])} : _E.raise("invalid input, expecting JSArray but got " + v.position)
                                                                                                                                                                                                                                                                                                                                                                    ,radius: typeof v.radius === "number" ? v.radius : _E.raise("invalid input, expecting JSNumber but got " + v.radius)
                                                                                                                                                                                                                                                                                                                                                                    ,spell: typeof v.spell === "object" && "kind" in v.spell ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                                                               ,kind: typeof v.spell.kind === "string" || typeof v.spell.kind === "object" && v.spell.kind instanceof String ? v.spell.kind : _E.raise("invalid input, expecting JSString but got " + v.spell.kind)} : _E.raise("invalid input, expecting JSObject [\"kind\"] but got " + v.spell)} : _E.raise("invalid input, expecting JSObject [\"position\",\"radius\",\"spell\"] but got " + v);
                                                                                                                                                                                                                                                                              })) : _E.raise("invalid input, expecting JSArray but got " + v.buoys)
                                                                                                                                                                                                                                                                              ,playerSpell: v.playerSpell === null ? Maybe.Nothing : Maybe.Just(typeof v.playerSpell === "object" && "kind" in v.playerSpell ? {_: {}
                                                                                                                                                                                                                                                                                                                                                                                                               ,kind: typeof v.playerSpell.kind === "string" || typeof v.playerSpell.kind === "object" && v.playerSpell.kind instanceof String ? v.playerSpell.kind : _E.raise("invalid input, expecting JSString but got " + v.playerSpell.kind)} : _E.raise("invalid input, expecting JSObject [\"kind\"] but got " + v.playerSpell))
                                                                                                                                                                                                                                                                              ,triggeredSpells: _U.isJSArray(v.triggeredSpells) ? _L.fromArray(v.triggeredSpells.map(function (v) {
                                                                                                                                                                                                                                                                                 return typeof v === "object" && "kind" in v ? {_: {}
                                                                                                                                                                                                                                                                                                                               ,kind: typeof v.kind === "string" || typeof v.kind === "object" && v.kind instanceof String ? v.kind : _E.raise("invalid input, expecting JSString but got " + v.kind)} : _E.raise("invalid input, expecting JSObject [\"kind\"] but got " + v);
                                                                                                                                                                                                                                                                              })) : _E.raise("invalid input, expecting JSArray but got " + v.triggeredSpells)
                                                                                                                                                                                                                                                                              ,leaderboard: _U.isJSArray(v.leaderboard) ? _L.fromArray(v.leaderboard.map(function (v) {
                                                                                                                                                                                                                                                                                 return typeof v === "string" || typeof v === "object" && v instanceof String ? v : _E.raise("invalid input, expecting JSString but got " + v);
                                                                                                                                                                                                                                                                              })) : _E.raise("invalid input, expecting JSArray but got " + v.leaderboard)
                                                                                                                                                                                                                                                                              ,isMaster: typeof v.isMaster === "boolean" ? v.isMaster : _E.raise("invalid input, expecting JSBoolean but got " + v.isMaster)} : _E.raise("invalid input, expecting JSObject [\"now\",\"startTime\",\"course\",\"crossedGates\",\"nextGate\",\"wind\",\"opponents\",\"buoys\",\"playerSpell\",\"triggeredSpells\",\"leaderboard\",\"isMaster\"] but got " + v);
   }));
   var input = A2(Signal.sampleOn,
   clock,
   A7(Signal.lift6,
   Inputs.Input,
   clock,
   Inputs.chrono,
   Inputs.keyboardInput,
   Inputs.mouseInput,
   Window.dimensions,
   raceInput));
   var gameState = A3(Signal.foldp,
   Steps.stepGame,
   Game.defaultGame,
   input);
   var raceOutput = Native.Ports.portOut("raceOutput",
   Native.Ports.outgoingSignal(function (v) {
      return {position: [v.position._0
                        ,v.position._1]
             ,direction: v.direction
             ,velocity: v.velocity
             ,spellCast: v.spellCast
             ,startCountdown: v.startCountdown};
   }),
   A2(Signal.lift,
   function ($) {
      return playerToRaceOutput(function (_) {
         return _.player;
      }($));
   },
   gameState));
   var main = A3(Signal.lift2,
   Render.All.renderAll,
   Window.dimensions,
   gameState);
   _elm.ShiftMaster.values = {_op: _op
                             ,clock: clock
                             ,input: input
                             ,gameState: gameState
                             ,playerToRaceOutput: playerToRaceOutput
                             ,main: main};
   return _elm.ShiftMaster.values;
};Elm.Steps = Elm.Steps || {};
Elm.Steps.make = function (_elm) {
   "use strict";
   _elm.Steps = _elm.Steps || {};
   if (_elm.Steps.values)
   return _elm.Steps.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Steps";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Core = Elm.Core.make(_elm);
   var Game = Elm.Game.make(_elm);
   var Geo = Elm.Geo.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Inputs = Elm.Inputs.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var raceInputStep = F2(function (raceInput,
   _v0) {
      return function () {
         return function () {
            var $ = raceInput,
            now = $.now,
            startTime = $.startTime,
            course = $.course,
            crossedGates = $.crossedGates,
            nextGate = $.nextGate,
            opponents = $.opponents,
            buoys = $.buoys,
            playerSpell = $.playerSpell,
            triggeredSpells = $.triggeredSpells,
            leaderboard = $.leaderboard,
            isMaster = $.isMaster;
            var nextGateType = function () {
               switch (nextGate.ctor)
               {case "Just":
                  switch (nextGate._0)
                    {case "DownwindGate":
                       return Maybe.Just(Game.Downwind);
                       case "StartLine":
                       return Maybe.Just(Game.StartLine);
                       case "UpwindGate":
                       return Maybe.Just(Game.Upwind);}
                    break;}
               return Maybe.Nothing;
            }();
            var updatedPlayer = _U.replace([["nextGate"
                                            ,nextGateType]
                                           ,["crossedGates",crossedGates]],
            _v0.player);
            return _U.replace([["opponents"
                               ,opponents]
                              ,["player",updatedPlayer]
                              ,["course"
                               ,A3(Maybe.maybe,
                               _v0.course,
                               Basics.id,
                               course)]
                              ,["buoys",buoys]
                              ,["playerSpell",playerSpell]
                              ,["triggeredSpells"
                               ,triggeredSpells]
                              ,["leaderboard",leaderboard]
                              ,["countdown"
                               ,A2(Core.mapMaybe,
                               function (st) {
                                  return st - now;
                               },
                               startTime)]
                              ,["isMaster",isMaster]],
            _v0);
         }();
      }();
   });
   var updateVmg = function (player) {
      return function () {
         var d = Core.getDownwindVmg(player.windSpeed);
         var u = Core.getUpwindVmg(player.windSpeed);
         return _U.replace([["upwindVmg"
                            ,u]
                           ,["downwindVmg",d]],
         player);
      }();
   };
   var updatePlayerWind = F2(function (wind,
   player) {
      return function () {
         var gustsOnPlayer = A2(List.filter,
         function (g) {
            return _U.cmp(A2(Geo.distance,
            player.position,
            g.position),
            g.radius) < 0;
         },
         wind.gusts);
         var $ = List.isEmpty(gustsOnPlayer) ? {ctor: "_Tuple2"
                                               ,_0: wind.origin
                                               ,_1: wind.speed} : function () {
            var gust = List.head(gustsOnPlayer);
            return {ctor: "_Tuple2"
                   ,_0: Core.ensure360(gust.angle)
                   ,_1: wind.speed + gust.speed};
         }(),
         windOrigin = $._0,
         windSpeed = $._1;
         return _U.replace([["windOrigin"
                            ,windOrigin]
                           ,["windSpeed",windSpeed]],
         player);
      }();
   });
   var windStep = F2(function (wind,
   gameState) {
      return function () {
         var player = updateVmg(A2(updatePlayerWind,
         wind,
         gameState.player));
         return _U.replace([["wind",wind]
                           ,["player",player]],
         gameState);
      }();
   });
   var getCenterAfterMove = F4(function (_v4,
   _v5,
   _v6,
   _v7) {
      return function () {
         switch (_v7.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v6.ctor)
                 {case "_Tuple2":
                    return function () {
                         switch (_v5.ctor)
                         {case "_Tuple2":
                            return function () {
                                 switch (_v4.ctor)
                                 {case "_Tuple2":
                                    return function () {
                                         var refocus = F5(function (n,
                                         n$,
                                         c,
                                         d,
                                         margin) {
                                            return function () {
                                               var max = c + d / 2;
                                               var mmax = max - margin;
                                               var min = c - d / 2;
                                               var mmin = min + margin;
                                               return _U.cmp(n,
                                               min) < 0 || _U.cmp(n,
                                               max) > 0 ? c : _U.cmp(n,
                                               mmin) < 0 ? _U.cmp(n$,
                                               n) < 0 ? c - (n - n$) : c : _U.cmp(n,
                                               mmax) > 0 ? _U.cmp(n$,
                                               n) > 0 ? c + (n$ - n) : c : _U.cmp(n$,
                                               mmin) < 0 ? c - (n - n$) : _U.cmp(n$,
                                               mmax) > 0 ? c + (n$ - n) : c;
                                            }();
                                         });
                                         return {ctor: "_Tuple2"
                                                ,_0: A5(refocus,
                                                _v4._0,
                                                _v5._0,
                                                _v6._0,
                                                _v7._0,
                                                _v7._0 * 0.2)
                                                ,_1: A5(refocus,
                                                _v4._1,
                                                _v5._1,
                                                _v6._1,
                                                _v7._1,
                                                _v7._1 * 0.4)};
                                      }();}
                                 _E.Case($moduleName,
                                 "between lines 112 and 125");
                              }();}
                         _E.Case($moduleName,
                         "between lines 112 and 125");
                      }();}
                 _E.Case($moduleName,
                 "between lines 112 and 125");
              }();}
         _E.Case($moduleName,
         "between lines 112 and 125");
      }();
   });
   var getGatesMarks = function (course) {
      return _L.fromArray([{ctor: "_Tuple2"
                           ,_0: course.upwind.width / -2
                           ,_1: course.upwind.y}
                          ,{ctor: "_Tuple2"
                           ,_0: course.upwind.width / 2
                           ,_1: course.upwind.y}
                          ,{ctor: "_Tuple2"
                           ,_0: course.downwind.width / -2
                           ,_1: course.downwind.y}
                          ,{ctor: "_Tuple2"
                           ,_0: course.downwind.width / 2
                           ,_1: course.downwind.y}]);
   };
   var isStuck = F2(function (p,
   gameState) {
      return function () {
         var onIsland = A2(List.any,
         function (i) {
            return _U.cmp(A2(Geo.distance,
            i.location,
            p),
            i.radius) < 1;
         },
         gameState.course.islands);
         var outOfBounds = Basics.not(A2(Geo.inBox,
         p,
         gameState.course.bounds));
         var gatesMarks = getGatesMarks(gameState.course);
         var stuckOnMark = A2(List.any,
         function (m) {
            return _U.cmp(A2(Geo.distance,
            m,
            p),
            gameState.course.markRadius) < 1;
         },
         gatesMarks);
         return outOfBounds || (stuckOnMark || onIsland);
      }();
   });
   var movePlayer = F5(function (now,
   delta,
   gameState,
   dimensions,
   player) {
      return function () {
         var $ = player,
         position = $.position,
         direction = $.direction,
         velocity = $.velocity,
         windAngle = $.windAngle,
         crossedGates = $.crossedGates;
         var newVelocity = A3(Core.playerVelocity,
         player.windSpeed,
         player.windAngle,
         velocity);
         var nextPosition = A4(Geo.movePoint,
         position,
         delta,
         newVelocity,
         direction);
         var stuck = A2(isStuck,
         nextPosition,
         gameState);
         var newPosition = stuck ? position : nextPosition;
         var newWake = A2(List.take,
         40,
         {ctor: "::"
         ,_0: newPosition
         ,_1: player.wake});
         var newCenter = A4(getCenterAfterMove,
         position,
         newPosition,
         player.center,
         Geo.floatify(dimensions));
         return _U.replace([["position"
                            ,newPosition]
                           ,["velocity"
                            ,stuck ? 0 : newVelocity]
                           ,["center",newCenter]
                           ,["wake",newWake]],
         player);
      }();
   });
   var moveStep = F4(function (now,
   delta,
   dims,
   gameState) {
      return function () {
         var playerMoved = A5(movePlayer,
         now,
         delta,
         gameState,
         dims,
         gameState.player);
         return _U.replace([["player"
                            ,playerMoved]],
         gameState);
      }();
   });
   var getTurn = F4(function (tackTarget,
   player,
   arrows,
   fineTurn) {
      return function () {
         var _v20 = {ctor: "_Tuple4"
                    ,_0: tackTarget
                    ,_1: player.controlMode
                    ,_2: arrows.x
                    ,_3: arrows.y};
         switch (_v20.ctor)
         {case "_Tuple4":
            switch (_v20._0.ctor)
              {case "Just":
                 return function () {
                      var _v26 = player.controlMode;
                      switch (_v26.ctor)
                      {case "FixedDirection":
                         return function () {
                              var maxTurn = List.minimum(_L.fromArray([2
                                                                      ,Basics.abs(player.direction - _v20._0._0)]));
                              return _U.cmp(Core.ensure360(player.direction - _v20._0._0),
                              180) > 0 ? maxTurn : 0 - maxTurn;
                           }();
                         case "FixedWindAngle":
                         return function () {
                              var maxTurn = List.minimum(_L.fromArray([2
                                                                      ,Basics.abs(player.windAngle - _v20._0._0)]));
                              return _U.cmp(_v20._0._0,
                              90) > 0 || _U.cmp(_v20._0._0,
                              0) < 0 && _U.cmp(_v20._0._0,
                              -90) > -1 ? 0 - maxTurn : maxTurn;
                           }();}
                      _E.Case($moduleName,
                      "between lines 56 and 64");
                   }();
                 case "Nothing":
                 switch (_v20._1.ctor)
                   {case "FixedDirection":
                      switch (_v20._2)
                        {case 0: switch (_v20._3)
                             {case 0: return 0;}
                             break;}
                        break;
                      case "FixedWindAngle":
                      switch (_v20._2)
                        {case 0: switch (_v20._3)
                             {case 0:
                                return Core.ensure360(player.windOrigin + player.windAngle - player.direction);}
                             break;}
                        break;}
                   return fineTurn ? _v20._2 : _v20._2 * 3;}
              break;}
         _E.Case($moduleName,
         "between lines 53 and 67");
      }();
   });
   var tackTargetReached = F2(function (player,
   targetMaybe) {
      return function () {
         var _v27 = {ctor: "_Tuple2"
                    ,_0: targetMaybe
                    ,_1: player.controlMode};
         switch (_v27.ctor)
         {case "_Tuple2":
            switch (_v27._0.ctor)
              {case "Just":
                 switch (_v27._1.ctor)
                   {case "FixedDirection":
                      return _U.cmp(Basics.abs(_v27._0._0 - player.direction),
                        0.1) < 0;
                      case "FixedWindAngle":
                      return _U.cmp(Basics.abs(_v27._0._0 - player.windAngle),
                        0.1) < 0;}
                   break;
                 case "Nothing": return false;}
              break;}
         _E.Case($moduleName,
         "between lines 29 and 32");
      }();
   });
   var getTackTarget = F2(function (player,
   spaceKey) {
      return function () {
         var _v31 = {ctor: "_Tuple2"
                    ,_0: player.tackTarget
                    ,_1: spaceKey};
         switch (_v31.ctor)
         {case "_Tuple2":
            switch (_v31._0.ctor)
              {case "Just":
                 return A2(tackTargetReached,
                   player,
                   player.tackTarget) ? Maybe.Nothing : player.tackTarget;
                 case "Nothing": switch (_v31._1)
                   {case false:
                      return Maybe.Nothing;
                      case true: return function () {
                           var _v35 = player.controlMode;
                           switch (_v35.ctor)
                           {case "FixedDirection":
                              return Maybe.Just(Core.ensure360(player.windOrigin - player.windAngle));
                              case "FixedWindAngle":
                              return Maybe.Just(0 - player.windAngle);}
                           _E.Case($moduleName,
                           "between lines 43 and 47");
                        }();}
                   break;}
              break;}
         _E.Case($moduleName,
         "between lines 36 and 47");
      }();
   });
   var keysForPlayerStep = F3(function (_v36,
   spells,
   player) {
      return function () {
         return function () {
            var forceTurn = !_U.eq(_v36.arrows.x,
            0);
            var tackTarget = forceTurn ? Maybe.Nothing : A2(getTackTarget,
            player,
            _v36.tack);
            var turn = A4(getTurn,
            tackTarget,
            player,
            _v36.arrows,
            _v36.fineTurn);
            var direction = Core.ensure360(player.direction + (A2(Game.containsSpell,
            "PoleInversion",
            spells) ? 0 - turn : turn));
            var windAngle = A2(Core.angleToWind,
            direction,
            player.windOrigin);
            var turnedPlayer = _U.replace([["direction"
                                           ,direction]
                                          ,["windAngle",windAngle]],
            player);
            var tackTargetAfterTurn = A2(tackTargetReached,
            turnedPlayer,
            tackTarget) ? Maybe.Nothing : tackTarget;
            var controlMode = forceTurn ? Game.FixedDirection : _U.cmp(_v36.arrows.y,
            0) > 0 || _v36.lockAngle ? Game.FixedWindAngle : turnedPlayer.controlMode;
            return _U.replace([["controlMode"
                               ,controlMode]
                              ,["tackTarget"
                               ,tackTargetAfterTurn]
                              ,["spellCast",_v36.spellCast]
                              ,["startCountdown"
                               ,_v36.startCountdown]],
            turnedPlayer);
         }();
      }();
   });
   var keysStep = F2(function (keyboardInput,
   gameState) {
      return function () {
         var playerUpdated = A3(keysForPlayerStep,
         keyboardInput,
         gameState.triggeredSpells,
         gameState.player);
         return _U.replace([["player"
                            ,playerUpdated]],
         gameState);
      }();
   });
   var mouseStep = F2(function (_v38,
   gameState) {
      return function () {
         return function () {
            var player = gameState.player;
            var center = function () {
               var _v40 = _v38.drag;
               switch (_v40.ctor)
               {case "Just":
                  switch (_v40._0.ctor)
                    {case "_Tuple2":
                       return function () {
                            var $ = _v38.mouse,
                            x = $._0,
                            y = $._1;
                            return A2(Geo.sub,
                            Geo.floatify({ctor: "_Tuple2"
                                         ,_0: x - _v40._0._0
                                         ,_1: _v40._0._1 - y}),
                            player.center);
                         }();}
                    break;
                  case "Nothing":
                  return player.center;}
               _E.Case($moduleName,
               "between lines 21 and 24");
            }();
            return _U.replace([["player"
                               ,_U.replace([["center",center]],
                               player)]],
            gameState);
         }();
      }();
   });
   var stepGame = F2(function (input,
   gameState) {
      return mouseStep(input.mouseInput)(A3(moveStep,
      input.raceInput.now,
      input.delta,
      input.windowInput)(keysStep(input.keyboardInput)(windStep(input.raceInput.wind)(A2(raceInputStep,
      input.raceInput,
      gameState)))));
   });
   _elm.Steps.values = {_op: _op
                       ,mouseStep: mouseStep
                       ,tackTargetReached: tackTargetReached
                       ,getTackTarget: getTackTarget
                       ,getTurn: getTurn
                       ,keysForPlayerStep: keysForPlayerStep
                       ,keysStep: keysStep
                       ,getGatesMarks: getGatesMarks
                       ,isStuck: isStuck
                       ,getCenterAfterMove: getCenterAfterMove
                       ,movePlayer: movePlayer
                       ,moveStep: moveStep
                       ,updatePlayerWind: updatePlayerWind
                       ,updateVmg: updateVmg
                       ,windStep: windStep
                       ,raceInputStep: raceInputStep
                       ,stepGame: stepGame};
   return _elm.Steps.values;
};Elm.Render = Elm.Render || {};
Elm.Render.All = Elm.Render.All || {};
Elm.Render.All.make = function (_elm) {
   "use strict";
   _elm.Render = _elm.Render || {};
   _elm.Render.All = _elm.Render.All || {};
   if (_elm.Render.All.values)
   return _elm.Render.All.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Render.All";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Core = Elm.Core.make(_elm);
   var Game = Elm.Game.make(_elm);
   var Geo = Elm.Geo.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Render = Render || {};
   Render.Controls = Elm.Render.Controls.make(_elm);
   var Render = Render || {};
   Render.Race = Elm.Render.Race.make(_elm);
   var Render = Render || {};
   Render.Utils = Elm.Render.Utils.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var renderAll = F2(function (_v0,
   gameState) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 var relativeForms = Render.Race.renderRelative(gameState);
                 var dims = Geo.floatify({ctor: "_Tuple2"
                                         ,_0: _v0._0
                                         ,_1: _v0._1});
                 var $ = dims,
                 w$ = $._0,
                 h$ = $._1;
                 var bg = Graphics.Collage.filled(Render.Utils.colors.sand)(A2(Graphics.Collage.rect,
                 w$,
                 h$));
                 var absoluteForms = A2(Render.Controls.renderAbsolute,
                 gameState,
                 dims);
                 return Graphics.Element.layers(_L.fromArray([A3(Graphics.Collage.collage,
                 _v0._0,
                 _v0._1,
                 _L.fromArray([bg
                              ,Graphics.Collage.group(_L.fromArray([relativeForms
                                                                   ,absoluteForms]))]))]));
              }();}
         _E.Case($moduleName,
         "between lines 15 and 20");
      }();
   });
   _elm.Render.All.values = {_op: _op
                            ,renderAll: renderAll};
   return _elm.Render.All.values;
};Elm.Render = Elm.Render || {};
Elm.Render.Race = Elm.Render.Race || {};
Elm.Render.Race.make = function (_elm) {
   "use strict";
   _elm.Render = _elm.Render || {};
   _elm.Render.Race = _elm.Render.Race || {};
   if (_elm.Render.Race.values)
   return _elm.Render.Race.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Render.Race";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Core = Elm.Core.make(_elm);
   var Game = Elm.Game.make(_elm);
   var Geo = Elm.Geo.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Render = Render || {};
   Render.Utils = Elm.Render.Utils.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var renderFinished = F2(function (course,
   player) {
      return function () {
         var _v0 = player.nextGate;
         switch (_v0.ctor)
         {case "Nothing":
            return Maybe.Just(Graphics.Collage.move({ctor: "_Tuple2"
                                                    ,_0: 0
                                                    ,_1: course.downwind.y + 40})(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText("Finished!")))));}
         return Maybe.Nothing;
      }();
   });
   var formatCountdown = function (c) {
      return function () {
         var cs = Basics.ceiling(Time.inSeconds(c));
         var m = cs / 60 | 0;
         var s = A2(Basics.rem,cs,60);
         return _L.append("Start in ",
         _L.append(String.show(m),
         _L.append("\'",
         _L.append(String.show(s),
         "\"..."))));
      }();
   };
   var renderCountdown = F2(function (gameState,
   player) {
      return function () {
         var messageBuilder = function (msg) {
            return Graphics.Collage.move({ctor: "_Tuple2"
                                         ,_0: 0
                                         ,_1: gameState.course.downwind.y + 40})(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText(msg))));
         };
         return function () {
            var _v1 = gameState.countdown;
            switch (_v1.ctor)
            {case "Just":
               return _U.cmp(_v1._0,
                 0) > 0 ? Maybe.Just(messageBuilder(formatCountdown(Core.getCountdown(gameState.countdown)))) : _U.eq(player.nextGate,
                 Maybe.Just(Game.StartLine)) ? Maybe.Just(messageBuilder("Go!")) : Maybe.Nothing;
               case "Nothing":
               return gameState.isMaster ? Maybe.Just(messageBuilder(Render.Utils.startCountdownMessage)) : Maybe.Nothing;}
            _E.Case($moduleName,
            "between lines 150 and 160");
         }();
      }();
   });
   var renderGateLaylines = F3(function (vmg,
   windOrigin,
   gate) {
      return function () {
         var drawLine = function (_v3) {
            return function () {
               switch (_v3.ctor)
               {case "_Tuple2":
                  return Graphics.Collage.traced(Graphics.Collage.solid(Color.white))(A2(Graphics.Collage.segment,
                    _v3._0,
                    _v3._1));}
               _E.Case($moduleName,
               "on line 130, column 26 to 62");
            }();
         };
         var windAngleRad = Core.toRadians(windOrigin);
         var $ = Game.getGateMarks(gate),
         leftMark = $._0,
         rightMark = $._1;
         var vmgRad = Core.toRadians(vmg);
         var leftLineEnd = A2(Geo.add,
         leftMark,
         Basics.fromPolar({ctor: "_Tuple2"
                          ,_0: 1000
                          ,_1: windAngleRad + vmgRad + Basics.pi / 2}));
         var rightLineEnd = A2(Geo.add,
         rightMark,
         Basics.fromPolar({ctor: "_Tuple2"
                          ,_0: 1000
                          ,_1: windAngleRad - vmgRad - Basics.pi / 2}));
         return Graphics.Collage.alpha(0.3)(Graphics.Collage.group(A2(List.map,
         drawLine,
         _L.fromArray([{ctor: "_Tuple2"
                       ,_0: leftMark
                       ,_1: leftLineEnd}
                      ,{ctor: "_Tuple2"
                       ,_0: rightMark
                       ,_1: rightLineEnd}]))));
      }();
   });
   var renderLaylines = F2(function (player,
   course) {
      return function () {
         var _v7 = player.nextGate;
         switch (_v7.ctor)
         {case "Just":
            switch (_v7._0.ctor)
              {case "Downwind":
                 return Maybe.Just(A3(renderGateLaylines,
                   player.downwindVmg,
                   player.windOrigin,
                   course.downwind));
                 case "Upwind":
                 return Maybe.Just(A3(renderGateLaylines,
                   player.upwindVmg,
                   player.windOrigin,
                   course.upwind));}
              break;}
         return Maybe.Nothing;
      }();
   });
   var renderBuoy = F2(function (timer,
   _v9) {
      return function () {
         return function () {
            var a = 0.4 + 0.2 * Basics.cos(timer * 5.0e-3);
            return Graphics.Collage.alpha(a)(Graphics.Collage.move(_v9.position)(Graphics.Collage.filled(Render.Utils.colors.buoy)(Graphics.Collage.circle(_v9.radius))));
         }();
      }();
   });
   var renderIsland = function (_v11) {
      return function () {
         return Graphics.Collage.move(_v11.location)(Graphics.Collage.filled(Render.Utils.colors.sand)(Graphics.Collage.circle(_v11.radius)));
      }();
   };
   var renderIslands = function (gameState) {
      return Graphics.Collage.group(A2(List.map,
      renderIsland,
      gameState.course.islands));
   };
   var renderGust = F2(function (wind,
   gust) {
      return function () {
         var color = _U.cmp(gust.speed,
         0) > 0 ? Color.black : Color.white;
         var a = 0.3 * Basics.abs(gust.speed) / 10;
         return Graphics.Collage.move(gust.position)(Graphics.Collage.alpha(a)(Graphics.Collage.filled(color)(Graphics.Collage.circle(gust.radius))));
      }();
   });
   var renderGusts = function (wind) {
      return Graphics.Collage.group(A2(List.map,
      renderGust(wind),
      wind.gusts));
   };
   var renderBounds = function (box) {
      return function () {
         var $ = box,
         ne = $._0,
         sw = $._1;
         var w = Basics.fst(ne) - Basics.fst(sw);
         var h = Basics.snd(ne) - Basics.snd(sw);
         var cw = (Basics.fst(ne) + Basics.fst(sw)) / 2;
         var ch = (Basics.snd(ne) + Basics.snd(sw)) / 2;
         return Graphics.Collage.move({ctor: "_Tuple2"
                                      ,_0: cw
                                      ,_1: ch})(Graphics.Collage.filled(Render.Utils.colors.seaBlue)(A2(Graphics.Collage.rect,
         w,
         h)));
      }();
   };
   var renderOpponent = function (opponent) {
      return function () {
         var name = Graphics.Collage.alpha(0.3)(Graphics.Collage.move(A2(Geo.add,
         opponent.position,
         {ctor: "_Tuple2"
         ,_0: 0
         ,_1: -25}))(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText(opponent.name)))));
         var hull = Graphics.Collage.alpha(0.5)(Graphics.Collage.move(opponent.position)(Graphics.Collage.rotate(Core.toRadians(opponent.direction + 90))(Graphics.Collage.toForm(A3(Graphics.Element.image,
         11,
         20,
         "/assets/images/icon-ac72.png")))));
         return Graphics.Collage.group(_L.fromArray([hull
                                                    ,name]));
      }();
   };
   var renderWake = function (wake) {
      return function () {
         var opacityForIndex = function (i) {
            return 0.5 - 0.4 * Basics.toFloat(i) / Basics.toFloat(List.length(wake));
         };
         var renderWakePoint = function (_v13) {
            return function () {
               switch (_v13.ctor)
               {case "_Tuple2":
                  return Graphics.Collage.alpha(opacityForIndex(_v13._0))(Graphics.Collage.move(_v13._1)(Graphics.Collage.filled(Color.white)(Graphics.Collage.circle(2))));}
               _E.Case($moduleName,
               "on line 54, column 32 to 94");
            }();
         };
         var span = 5;
         var points = List.map(renderWakePoint)(List.filter(function (_v17) {
            return function () {
               switch (_v17.ctor)
               {case "_Tuple2":
                  return _U.eq(A2(Basics.mod,
                    _v17._0 + 1,
                    span),
                    0);}
               _E.Case($moduleName,
               "on line 55, column 59 to 80");
            }();
         })(A2(Core.indexedMap,
         F2(function (v0,v1) {
            return {ctor: "_Tuple2"
                   ,_0: v0
                   ,_1: v1};
         }),
         wake)));
         return Graphics.Collage.group(points);
      }();
   };
   var renderEqualityLine = F2(function (_v21,
   windOrigin) {
      return function () {
         switch (_v21.ctor)
         {case "_Tuple2":
            return function () {
                 var right = Basics.fromPolar({ctor: "_Tuple2"
                                              ,_0: 50
                                              ,_1: Core.toRadians(windOrigin + 90)});
                 var left = Basics.fromPolar({ctor: "_Tuple2"
                                             ,_0: 50
                                             ,_1: Core.toRadians(windOrigin - 90)});
                 return Graphics.Collage.alpha(0.2)(Graphics.Collage.traced(Graphics.Collage.dotted(Color.white))(A2(Graphics.Collage.segment,
                 left,
                 right)));
              }();}
         _E.Case($moduleName,
         "between lines 46 and 48");
      }();
   });
   var renderPlayerAngles = function (player) {
      return function () {
         var windOriginRadians = Core.toRadians(player.direction - player.windAngle);
         var windMarker = Graphics.Collage.alpha(0.5)(Graphics.Collage.move(Basics.fromPolar({ctor: "_Tuple2"
                                                                                             ,_0: 25
                                                                                             ,_1: windOriginRadians}))(Graphics.Collage.rotate(windOriginRadians + Basics.pi / 2)(Graphics.Collage.filled(Color.white)(Graphics.Collage.polygon(_L.fromArray([{ctor: "_Tuple2"
                                                                                                                                                                                                                                                              ,_0: 0
                                                                                                                                                                                                                                                              ,_1: 4}
                                                                                                                                                                                                                                                             ,{ctor: "_Tuple2"
                                                                                                                                                                                                                                                              ,_0: -4
                                                                                                                                                                                                                                                              ,_1: -4}
                                                                                                                                                                                                                                                             ,{ctor: "_Tuple2"
                                                                                                                                                                                                                                                              ,_0: 4
                                                                                                                                                                                                                                                              ,_1: -4}]))))));
         var windAngleText = Graphics.Collage.alpha(0.5)(Graphics.Collage.move(Basics.fromPolar({ctor: "_Tuple2"
                                                                                                ,_0: 25
                                                                                                ,_1: windOriginRadians + Basics.pi}))(Graphics.Collage.toForm(Text.centered((_U.eq(player.controlMode,
         Game.FixedWindAngle) ? Text.line(Text.Under) : Basics.id)(Render.Utils.baseText(_L.append(String.show(Basics.abs(Basics.round(player.windAngle))),
         "&deg;")))))));
         return Graphics.Collage.group(_L.fromArray([windMarker
                                                    ,windAngleText]));
      }();
   };
   var renderPlayer = F2(function (player,
   spells) {
      return function () {
         var wake = renderWake(player.wake);
         var fog2 = Graphics.Collage.alpha(0.8)(Graphics.Collage.rotate(Basics.fst(player.position) / 41 + 220)(Graphics.Collage.filled(Color.white)(A2(Graphics.Collage.oval,
         170,
         230))));
         var fog1 = Graphics.Collage.rotate(Basics.snd(player.position) / 60)(Graphics.Collage.filled(Color.grey)(A2(Graphics.Collage.oval,
         190,
         250)));
         var fog = A2(Game.containsSpell,
         "Fog",
         spells) ? _L.fromArray([fog1
                                ,fog2]) : _L.fromArray([]);
         var eqLine = A2(renderEqualityLine,
         player.position,
         player.windOrigin);
         var angles = renderPlayerAngles(player);
         var boatPath = A2(Game.containsSpell,
         "PoleInversion",
         spells) ? "boat-pole-inversion" : "icon-ac72";
         var hull = Graphics.Collage.rotate(Core.toRadians(player.direction + 90))(Graphics.Collage.toForm(A3(Graphics.Element.image,
         11,
         20,
         _L.append("/assets/images/",
         _L.append(boatPath,".png")))));
         var movingPart = Graphics.Collage.move(player.position)(Graphics.Collage.group(_L.append(_L.fromArray([angles
                                                                                                               ,eqLine
                                                                                                               ,hull]),
         fog)));
         return movingPart;
      }();
   });
   var renderGate = F3(function (gate,
   markRadius,
   isNext) {
      return function () {
         var lineStyle = isNext ? Graphics.Collage.traced(Graphics.Collage.dotted(Render.Utils.colors.gateLine)) : Graphics.Collage.traced(Graphics.Collage.solid(Render.Utils.colors.seaBlue));
         var $ = Game.getGateMarks(gate),
         left = $._0,
         right = $._1;
         var line = lineStyle(A2(Graphics.Collage.segment,
         left,
         right));
         var leftMark = Graphics.Collage.move(left)(Graphics.Collage.filled(Render.Utils.colors.gateMark)(Graphics.Collage.circle(markRadius)));
         var rightMark = Graphics.Collage.move(right)(Graphics.Collage.filled(Render.Utils.colors.gateMark)(Graphics.Collage.circle(markRadius)));
         return Graphics.Collage.group(_L.fromArray([line
                                                    ,leftMark
                                                    ,rightMark]));
      }();
   });
   var renderStartLine = F3(function (gate,
   markRadius,
   started) {
      return function () {
         var $ = Game.getGateMarks(gate),
         left = $._0,
         right = $._1;
         var marks = A2(List.map,
         function (g) {
            return Graphics.Collage.move(g)(Graphics.Collage.filled(Render.Utils.colors.gateMark)(Graphics.Collage.circle(markRadius)));
         },
         _L.fromArray([left,right]));
         var lineStyle = started ? Graphics.Collage.dotted(Color.green) : Graphics.Collage.solid(Color.orange);
         var line = Graphics.Collage.traced(lineStyle)(A2(Graphics.Collage.segment,
         left,
         right));
         return Graphics.Collage.group({ctor: "::"
                                       ,_0: line
                                       ,_1: marks});
      }();
   });
   var renderRelative = function (_v25) {
      return function () {
         return function () {
            var maybeForms = _L.fromArray([A2(renderCountdown,
                                          _v25,
                                          _v25.player)
                                          ,A2(Core.mapMaybe,
                                          function (c) {
                                             return Graphics.Collage.group(A2(List.map,
                                             renderBuoy(c),
                                             _v25.buoys));
                                          },
                                          _v25.countdown)
                                          ,A2(renderLaylines,
                                          _v25.player,
                                          _v25.course)
                                          ,A2(renderFinished,
                                          _v25.course,
                                          _v25.player)]);
            var downwindOrStartLine = List.isEmpty(_v25.player.crossedGates) ? A3(renderStartLine,
            _v25.course.downwind,
            _v25.course.markRadius,
            Core.isStarted(_v25.countdown)) : A3(renderGate,
            _v25.course.downwind,
            _v25.course.markRadius,
            _U.eq(_v25.player.nextGate,
            Maybe.Just(Game.Downwind)));
            var justForms = _L.fromArray([renderBounds(_v25.course.bounds)
                                         ,renderIslands(_v25)
                                         ,downwindOrStartLine
                                         ,A3(renderGate,
                                         _v25.course.upwind,
                                         _v25.course.markRadius,
                                         _U.eq(_v25.player.nextGate,
                                         Maybe.Just(Game.Upwind)))
                                         ,Graphics.Collage.group(A2(List.map,
                                         renderOpponent,
                                         _v25.opponents))
                                         ,renderGusts(_v25.wind)
                                         ,A2(renderPlayer,
                                         _v25.player,
                                         _v25.triggeredSpells)]);
            return Graphics.Collage.move(Geo.neg(_v25.player.center))(Graphics.Collage.group(_L.append(justForms,
            Core.compact(maybeForms))));
         }();
      }();
   };
   _elm.Render.Race.values = {_op: _op
                             ,renderStartLine: renderStartLine
                             ,renderGate: renderGate
                             ,renderPlayerAngles: renderPlayerAngles
                             ,renderEqualityLine: renderEqualityLine
                             ,renderWake: renderWake
                             ,renderPlayer: renderPlayer
                             ,renderOpponent: renderOpponent
                             ,renderBounds: renderBounds
                             ,renderGust: renderGust
                             ,renderGusts: renderGusts
                             ,renderIsland: renderIsland
                             ,renderIslands: renderIslands
                             ,renderBuoy: renderBuoy
                             ,renderGateLaylines: renderGateLaylines
                             ,renderLaylines: renderLaylines
                             ,formatCountdown: formatCountdown
                             ,renderCountdown: renderCountdown
                             ,renderFinished: renderFinished
                             ,renderRelative: renderRelative};
   return _elm.Render.Race.values;
};Elm.Render = Elm.Render || {};
Elm.Render.Controls = Elm.Render.Controls || {};
Elm.Render.Controls.make = function (_elm) {
   "use strict";
   _elm.Render = _elm.Render || {};
   _elm.Render.Controls = _elm.Render.Controls || {};
   if (_elm.Render.Controls.values)
   return _elm.Render.Controls.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Render.Controls";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Core = Elm.Core.make(_elm);
   var Game = Elm.Game.make(_elm);
   var Geo = Elm.Geo.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Render = Render || {};
   Render.Utils = Elm.Render.Utils.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var renderHelp = F2(function (countdownMaybe,
   _v0) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return A3(Maybe.maybe,
              true,
              function (c) {
                 return _U.cmp(c,0) > 0;
              },
              countdownMaybe) ? function () {
                 var text = Graphics.Collage.alpha(0.8)(Graphics.Collage.move({ctor: "_Tuple2"
                                                                              ,_0: 0
                                                                              ,_1: (0 - _v0._1) / 2 + 50})(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText(Render.Utils.helpMessage)))));
                 return Maybe.Just(text);
              }() : Maybe.Nothing;}
         _E.Case($moduleName,
         "between lines 142 and 146");
      }();
   });
   var renderLeaderboard = F2(function (leaderboard,
   _v4) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2":
            return List.isEmpty(leaderboard) ? Maybe.Nothing : Maybe.Just(Graphics.Collage.move({ctor: "_Tuple2"
                                                                                                ,_0: _v4._0 / 2 - 50
                                                                                                ,_1: 0})(Graphics.Collage.toForm(Text.leftAligned(Render.Utils.baseText(List.concat(A2(Core.indexedMap,
              F2(function (i,n) {
                 return _L.append(String.show(i + 1),
                 _L.append(". ",
                 _L.append(n,"\n")));
              }),
              leaderboard)))))));}
         _E.Case($moduleName,
         "between lines 132 and 138");
      }();
   });
   var getArrow = _L.fromArray([{ctor: "_Tuple2"
                                ,_0: -3
                                ,_1: 1}
                               ,{ctor: "_Tuple2",_0: 1,_1: 1}
                               ,{ctor: "_Tuple2",_0: 1,_1: 2}
                               ,{ctor: "_Tuple2",_0: 3,_1: 0}
                               ,{ctor: "_Tuple2",_0: 1,_1: -2}
                               ,{ctor: "_Tuple2",_0: 1,_1: -1}
                               ,{ctor: "_Tuple2"
                                ,_0: -3
                                ,_1: -1}]);
   var renderFog = function () {
      var upLine = Graphics.Collage.alpha(0.6)(Graphics.Collage.traced(_U.replace([["width"
                                                                                   ,5]
                                                                                  ,["color"
                                                                                   ,Color.white]],
      Graphics.Collage.defaultLine))(A2(Graphics.Collage.segment,
      {ctor: "_Tuple2"
      ,_0: -12
      ,_1: -8},
      {ctor: "_Tuple2"
      ,_0: 12
      ,_1: -8})));
      var midLine = Graphics.Collage.move({ctor: "_Tuple2"
                                          ,_0: 0
                                          ,_1: 8})(upLine);
      var botLine = Graphics.Collage.move({ctor: "_Tuple2"
                                          ,_0: 0
                                          ,_1: 16})(upLine);
      return Graphics.Collage.group(_L.fromArray([upLine
                                                 ,midLine
                                                 ,botLine]));
   }();
   var renderPoleInversion = function () {
      var arrow = Graphics.Collage.filled(Color.white)(Graphics.Collage.polygon(A2(List.map,
      Geo.scale(3),
      getArrow)));
      var leftArrow = Graphics.Collage.move({ctor: "_Tuple2"
                                            ,_0: -1
                                            ,_1: 6})(arrow);
      var rightArrow = Graphics.Collage.move({ctor: "_Tuple2"
                                             ,_0: 1
                                             ,_1: -6})(Graphics.Collage.rotate(Basics.degrees(180))(arrow));
      return Graphics.Collage.group(_L.fromArray([leftArrow
                                                 ,rightArrow]));
   }();
   var getSpellStockGraphic = function (kind) {
      return function () {
         switch (kind)
         {case "Fog": return renderFog;
            case "PoleInversion":
            return renderPoleInversion;}
         _E.Case($moduleName,
         "between lines 115 and 117");
      }();
   };
   var renderStockSpell = F2(function (spell,
   _v9) {
      return function () {
         switch (_v9.ctor)
         {case "_Tuple2":
            return function () {
                 var spellGraphics = getSpellStockGraphic(spell.kind);
                 var outlineSquare = Graphics.Collage.outlined(Graphics.Collage.solid(Color.white))(Graphics.Collage.square(35));
                 var spellLabel = Graphics.Collage.move({ctor: "_Tuple2"
                                                        ,_0: 0
                                                        ,_1: 35})(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText("SPELL"))));
                 return Graphics.Collage.move({ctor: "_Tuple2"
                                              ,_0: _v9._0 / 2 - 45
                                              ,_1: _v9._1 / 2 - 250})(Graphics.Collage.group(_L.fromArray([spellLabel
                                                                                                          ,outlineSquare
                                                                                                          ,spellGraphics])));
              }();}
         _E.Case($moduleName,
         "between lines 82 and 91");
      }();
   });
   var renderWindWheel = F3(function (wind,
   player,
   _v13) {
      return function () {
         switch (_v13.ctor)
         {case "_Tuple2":
            return function () {
                 var legend = Graphics.Collage.move({ctor: "_Tuple2"
                                                    ,_0: 0
                                                    ,_1: -50})(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText("WIND"))));
                 var windSpeedText = Graphics.Collage.toForm(Text.centered(Render.Utils.baseText(_L.append(String.show(Basics.round(wind.speed)),
                 "kn"))));
                 var windOriginRadians = Core.toRadians(wind.origin);
                 var r = 25 + wind.speed * 0.5;
                 var c = Graphics.Collage.outlined(Graphics.Collage.solid(Color.white))(Graphics.Collage.circle(r));
                 var windMarker = Graphics.Collage.move(Basics.fromPolar({ctor: "_Tuple2"
                                                                         ,_0: r + 4
                                                                         ,_1: windOriginRadians}))(Graphics.Collage.rotate(windOriginRadians + Basics.pi / 2)(Graphics.Collage.filled(Color.white)(Graphics.Collage.polygon(_L.fromArray([{ctor: "_Tuple2"
                                                                                                                                                                                                                                          ,_0: 0
                                                                                                                                                                                                                                          ,_1: 4}
                                                                                                                                                                                                                                         ,{ctor: "_Tuple2"
                                                                                                                                                                                                                                          ,_0: -4
                                                                                                                                                                                                                                          ,_1: -4}
                                                                                                                                                                                                                                         ,{ctor: "_Tuple2"
                                                                                                                                                                                                                                          ,_0: 4
                                                                                                                                                                                                                                          ,_1: -4}])))));
                 var windOriginText = Graphics.Collage.move(Basics.fromPolar({ctor: "_Tuple2"
                                                                             ,_0: r + 20
                                                                             ,_1: windOriginRadians}))(Graphics.Collage.rotate(windOriginRadians - Basics.pi / 2)(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText(_L.append(String.show(Basics.round(wind.origin)),
                 "&deg;"))))));
                 return Graphics.Collage.alpha(0.8)(Graphics.Collage.move({ctor: "_Tuple2"
                                                                          ,_0: _v13._0 / 2 - 50
                                                                          ,_1: _v13._1 / 2 - 120})(Graphics.Collage.group(_L.fromArray([c
                                                                                                                                       ,windMarker
                                                                                                                                       ,windOriginText
                                                                                                                                       ,windSpeedText
                                                                                                                                       ,legend]))));
              }();}
         _E.Case($moduleName,
         "between lines 63 and 78");
      }();
   });
   var renderPolar = F2(function (player,
   _v17) {
      return function () {
         switch (_v17.ctor)
         {case "_Tuple2":
            return function () {
                 var maxSpeed = 100;
                 var yAxis = Graphics.Collage.alpha(0.6)(Graphics.Collage.traced(Graphics.Collage.solid(Color.white))(A2(Graphics.Collage.segment,
                 {ctor: "_Tuple2"
                 ,_0: 0
                 ,_1: maxSpeed / 2},
                 {ctor: "_Tuple2"
                 ,_0: 0
                 ,_1: 0 - maxSpeed})));
                 var xAxis = Graphics.Collage.alpha(0.6)(Graphics.Collage.traced(Graphics.Collage.solid(Color.white))(A2(Graphics.Collage.segment,
                 {ctor: "_Tuple2",_0: 0,_1: 0},
                 {ctor: "_Tuple2"
                 ,_0: maxSpeed
                 ,_1: 0})));
                 var legend = Graphics.Collage.move({ctor: "_Tuple2"
                                                    ,_0: maxSpeed / 2
                                                    ,_1: (0 - maxSpeed) * 0.9})(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText("PLAYER\nSPEED"))));
                 var anglePoint = function (a) {
                    return Basics.fromPolar({ctor: "_Tuple2"
                                            ,_0: A2(Core.polarVelocity,
                                            player.windSpeed,
                                            a)
                                            ,_1: Core.toRadians(a)});
                 };
                 var points = A2(List.map,
                 anglePoint,
                 _L.range(0,180));
                 var polar = Graphics.Collage.traced(Graphics.Collage.solid(Color.white))(Graphics.Collage.path(points));
                 var absWindAngle = Basics.abs(player.windAngle);
                 var playerPoint = anglePoint(absWindAngle);
                 var playerMark = Graphics.Collage.move(playerPoint)(Graphics.Collage.filled(Color.red)(Graphics.Collage.circle(2)));
                 var playerSegment = Graphics.Collage.alpha(0.3)(Graphics.Collage.traced(Graphics.Collage.solid(Color.white))(A2(Graphics.Collage.segment,
                 {ctor: "_Tuple2",_0: 0,_1: 0},
                 playerPoint)));
                 var playerProjection = Graphics.Collage.traced(Graphics.Collage.dotted(Color.white))(A2(Graphics.Collage.segment,
                 playerPoint,
                 {ctor: "_Tuple2"
                 ,_0: 0
                 ,_1: Basics.snd(playerPoint)}));
                 var windOriginText = Graphics.Collage.alpha(0.6)(Graphics.Collage.move(A2(Geo.add,
                 playerPoint,
                 Basics.fromPolar({ctor: "_Tuple2"
                                  ,_0: 20
                                  ,_1: Core.toRadians(absWindAngle)})))(Graphics.Collage.toForm(Text.centered(Render.Utils.baseText(_L.append(String.show(Basics.round(absWindAngle)),
                 "&deg;"))))));
                 return Graphics.Collage.move({ctor: "_Tuple2"
                                              ,_0: (0 - _v17._0) / 2 + 20
                                              ,_1: _v17._1 / 2 - maxSpeed / 2 - 20})(Graphics.Collage.group(_L.fromArray([yAxis
                                                                                                                         ,xAxis
                                                                                                                         ,polar
                                                                                                                         ,playerProjection
                                                                                                                         ,playerMark
                                                                                                                         ,playerSegment
                                                                                                                         ,windOriginText
                                                                                                                         ,legend])));
              }();}
         _E.Case($moduleName,
         "between lines 41 and 59");
      }();
   });
   var renderLapsCount = F3(function (_v21,
   course,
   player) {
      return function () {
         switch (_v21.ctor)
         {case "_Tuple2":
            return function () {
                 var count = List.minimum(_L.fromArray([A2(Basics.div,
                                                       List.length(player.crossedGates) + 1,
                                                       2)
                                                       ,course.laps]));
                 var msg = _L.append("LAP ",
                 _L.append(String.show(count),
                 _L.append("/",
                 String.show(course.laps))));
                 return Graphics.Collage.move({ctor: "_Tuple2"
                                              ,_0: _v21._0 / 2 - 50
                                              ,_1: _v21._1 / 2 - 30})(Graphics.Collage.toForm(Text.rightAligned(Render.Utils.baseText(msg))));
              }();}
         _E.Case($moduleName,
         "between lines 31 and 37");
      }();
   });
   var renderHiddenGate = F4(function (gate,
   _v25,
   _v26,
   isNext) {
      return function () {
         switch (_v26.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v25.ctor)
                 {case "_Tuple2":
                    return function () {
                         var distance = function (isOver) {
                            return Graphics.Collage.toForm(Text.centered(Render.Utils.baseText(String.show(Basics.round(Basics.abs(gate.y + (isOver ? 0 - _v25._1 : _v25._1) / 2 - _v26._1))))));
                         };
                         var markStyle = isNext ? Graphics.Collage.filled(Color.orange) : Graphics.Collage.filled(Color.white);
                         var c = 5;
                         var over = _U.cmp(_v26._1 + _v25._1 / 2 + c,
                         gate.y) < 0;
                         var under = _U.cmp(_v26._1 - _v25._1 / 2 - c,
                         gate.y) > 0;
                         var $ = Game.getGateMarks(gate),
                         left = $._0,
                         right = $._1;
                         return function () {
                            var _v33 = {ctor: "_Tuple2"
                                       ,_0: over
                                       ,_1: under};
                            switch (_v33.ctor)
                            {case "_Tuple2":
                               switch (_v33._0)
                                 {case true: return function () {
                                         var d = Graphics.Collage.move({ctor: "_Tuple2"
                                                                       ,_0: 0 - _v26._0
                                                                       ,_1: _v25._1 / 2 - c * 3})(distance(true));
                                         var m = Graphics.Collage.move({ctor: "_Tuple2"
                                                                       ,_0: 0 - _v26._0
                                                                       ,_1: _v25._1 / 2})(markStyle(Graphics.Collage.polygon(_L.fromArray([{ctor: "_Tuple2"
                                                                                                                                           ,_0: 0
                                                                                                                                           ,_1: 0}
                                                                                                                                          ,{ctor: "_Tuple2"
                                                                                                                                           ,_0: 0 - c
                                                                                                                                           ,_1: 0 - c}
                                                                                                                                          ,{ctor: "_Tuple2"
                                                                                                                                           ,_0: c
                                                                                                                                           ,_1: 0 - c}]))));
                                         return Maybe.Just(Graphics.Collage.group(_L.fromArray([m
                                                                                               ,d])));
                                      }();}
                                 switch (_v33._1)
                                 {case true: return function () {
                                         var d = Graphics.Collage.move({ctor: "_Tuple2"
                                                                       ,_0: 0 - _v26._0
                                                                       ,_1: (0 - _v25._1) / 2 + c * 3})(distance(false));
                                         var m = Graphics.Collage.move({ctor: "_Tuple2"
                                                                       ,_0: 0 - _v26._0
                                                                       ,_1: (0 - _v25._1) / 2})(markStyle(Graphics.Collage.polygon(_L.fromArray([{ctor: "_Tuple2"
                                                                                                                                                 ,_0: 0
                                                                                                                                                 ,_1: 0}
                                                                                                                                                ,{ctor: "_Tuple2"
                                                                                                                                                 ,_0: 0 - c
                                                                                                                                                 ,_1: c}
                                                                                                                                                ,{ctor: "_Tuple2"
                                                                                                                                                 ,_0: c
                                                                                                                                                 ,_1: c}]))));
                                         return Maybe.Just(Graphics.Collage.group(_L.fromArray([m
                                                                                               ,d])));
                                      }();}
                                 return Maybe.Nothing;}
                            _E.Case($moduleName,
                            "between lines 19 and 26");
                         }();
                      }();}
                 _E.Case($moduleName,
                 "between lines 12 and 26");
              }();}
         _E.Case($moduleName,
         "between lines 12 and 26");
      }();
   });
   var renderAbsolute = F2(function (_v36,
   dims) {
      return function () {
         return function () {
            var maybeForms = _L.fromArray([A4(renderHiddenGate,
                                          _v36.course.downwind,
                                          dims,
                                          _v36.player.center,
                                          _U.eq(_v36.player.nextGate,
                                          Maybe.Just(Game.Downwind)))
                                          ,A4(renderHiddenGate,
                                          _v36.course.upwind,
                                          dims,
                                          _v36.player.center,
                                          _U.eq(_v36.player.nextGate,
                                          Maybe.Just(Game.Upwind)))
                                          ,A2(renderHelp,
                                          _v36.countdown,
                                          dims)
                                          ,A2(renderLeaderboard,
                                          _v36.leaderboard,
                                          dims)
                                          ,function () {
                                             var _v38 = _v36.playerSpell;
                                             switch (_v38.ctor)
                                             {case "Just":
                                                return Maybe.Just(A2(renderStockSpell,
                                                  _v38._0,
                                                  dims));
                                                case "Nothing":
                                                return Maybe.Nothing;}
                                             _E.Case($moduleName,
                                             "between lines 160 and 163");
                                          }()]);
            var justForms = _L.fromArray([A3(renderLapsCount,
                                         dims,
                                         _v36.course,
                                         _v36.player)
                                         ,A2(renderPolar,
                                         _v36.player,
                                         dims)
                                         ,A3(renderWindWheel,
                                         _v36.wind,
                                         _v36.player,
                                         dims)]);
            return Graphics.Collage.group(_L.append(justForms,
            Core.compact(maybeForms)));
         }();
      }();
   });
   _elm.Render.Controls.values = {_op: _op
                                 ,renderHiddenGate: renderHiddenGate
                                 ,renderLapsCount: renderLapsCount
                                 ,renderPolar: renderPolar
                                 ,renderWindWheel: renderWindWheel
                                 ,renderStockSpell: renderStockSpell
                                 ,renderPoleInversion: renderPoleInversion
                                 ,renderFog: renderFog
                                 ,getSpellStockGraphic: getSpellStockGraphic
                                 ,getArrow: getArrow
                                 ,renderLeaderboard: renderLeaderboard
                                 ,renderHelp: renderHelp
                                 ,renderAbsolute: renderAbsolute};
   return _elm.Render.Controls.values;
};Elm.Inputs = Elm.Inputs || {};
Elm.Inputs.make = function (_elm) {
   "use strict";
   _elm.Inputs = _elm.Inputs || {};
   if (_elm.Inputs.values)
   return _elm.Inputs.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Inputs";
   var Basics = Elm.Basics.make(_elm);
   var Char = Elm.Char.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Drag = Elm.Drag.make(_elm);
   var Game = Elm.Game.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Keyboard = Elm.Keyboard.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Mouse = Elm.Mouse.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var Input = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,chrono: b
             ,delta: a
             ,keyboardInput: c
             ,mouseInput: d
             ,raceInput: f
             ,windowInput: e};
   });
   var chrono = A3(Signal.foldp,
   F2(function (x,y) {
      return x + y;
   }),
   0,
   Time.fps(1));
   var RaceInput = function (a) {
      return function (b) {
         return function (c) {
            return function (d) {
               return function (e) {
                  return function (f) {
                     return function (g) {
                        return function (h) {
                           return function (i) {
                              return function (j) {
                                 return function (k) {
                                    return function (l) {
                                       return {_: {}
                                              ,buoys: h
                                              ,course: c
                                              ,crossedGates: d
                                              ,isMaster: l
                                              ,leaderboard: k
                                              ,nextGate: e
                                              ,now: a
                                              ,opponents: g
                                              ,playerSpell: i
                                              ,startTime: b
                                              ,triggeredSpells: j
                                              ,wind: f};
                                    };
                                 };
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
      };
   };
   var MouseInput = F2(function (a,
   b) {
      return {_: {}
             ,drag: a
             ,mouse: b};
   });
   var mouseInput = A3(Signal.lift2,
   MouseInput,
   Drag.lastPosition(20 * Time.millisecond),
   Mouse.position);
   var KeyboardInput = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,arrows: a
             ,fineTurn: d
             ,lockAngle: b
             ,spellCast: e
             ,startCountdown: f
             ,tack: c};
   });
   var keyboardInput = A7(Signal.lift6,
   KeyboardInput,
   Keyboard.arrows,
   Keyboard.enter,
   Keyboard.space,
   Keyboard.shift,
   Keyboard.isDown(Char.toCode(_U.chr("S"))),
   Keyboard.isDown(Char.toCode(_U.chr("C"))));
   var UserArrows = F2(function (a,
   b) {
      return {_: {},x: a,y: b};
   });
   _elm.Inputs.values = {_op: _op
                        ,mouseInput: mouseInput
                        ,keyboardInput: keyboardInput
                        ,chrono: chrono
                        ,UserArrows: UserArrows
                        ,KeyboardInput: KeyboardInput
                        ,MouseInput: MouseInput
                        ,RaceInput: RaceInput
                        ,Input: Input};
   return _elm.Inputs.values;
};Elm.Game = Elm.Game || {};
Elm.Game.make = function (_elm) {
   "use strict";
   _elm.Game = _elm.Game || {};
   if (_elm.Game.values)
   return _elm.Game.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Game";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Dict = Elm.Dict.make(_elm);
   var Geo = Elm.Geo.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var Json = Elm.Json.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var getGateMarks = function (gate) {
      return {ctor: "_Tuple2"
             ,_0: {ctor: "_Tuple2"
                  ,_0: (0 - gate.width) / 2
                  ,_1: gate.y}
             ,_1: {ctor: "_Tuple2"
                  ,_0: gate.width / 2
                  ,_1: gate.y}};
   };
   var defaultWind = {_: {}
                     ,gusts: _L.fromArray([])
                     ,origin: 0
                     ,speed: 0};
   var defaultGate = {_: {}
                     ,width: 0
                     ,y: 0};
   var defaultCourse = {_: {}
                       ,bounds: {ctor: "_Tuple2"
                                ,_0: {ctor: "_Tuple2"
                                     ,_0: 0
                                     ,_1: 0}
                                ,_1: {ctor: "_Tuple2"
                                     ,_0: 0
                                     ,_1: 0}}
                       ,downwind: defaultGate
                       ,islands: _L.fromArray([])
                       ,laps: 0
                       ,markRadius: 0
                       ,upwind: defaultGate};
   var RaceState = function (a) {
      return {_: {},players: a};
   };
   var GameState = function (a) {
      return function (b) {
         return function (c) {
            return function (d) {
               return function (e) {
                  return function (f) {
                     return function (g) {
                        return function (h) {
                           return function (i) {
                              return function (j) {
                                 return {_: {}
                                        ,buoys: d
                                        ,countdown: g
                                        ,course: e
                                        ,isMaster: j
                                        ,leaderboard: f
                                        ,opponents: c
                                        ,player: b
                                        ,playerSpell: h
                                        ,triggeredSpells: i
                                        ,wind: a};
                              };
                           };
                        };
                     };
                  };
               };
            };
         };
      };
   };
   var Wind = F3(function (a,b,c) {
      return {_: {}
             ,gusts: c
             ,origin: a
             ,speed: b};
   });
   var Gust = F4(function (a,
   b,
   c,
   d) {
      return {_: {}
             ,angle: b
             ,position: a
             ,radius: d
             ,speed: c};
   });
   var Buoy = F3(function (a,b,c) {
      return {_: {}
             ,position: a
             ,radius: b
             ,spell: c};
   });
   var containsSpell = F2(function (spellName,
   spells) {
      return function () {
         var filtredSpells = A2(List.filter,
         function (spell) {
            return _U.eq(spell.kind,
            spellName);
         },
         spells);
         return _U.cmp(List.length(filtredSpells),
         0) > 0;
      }();
   });
   var Spell = function (a) {
      return {_: {},kind: a};
   };
   var Boat = F4(function (a,
   b,
   c,
   d) {
      return _U.insert("velocity",
      c,
      _U.insert("direction",
      b,
      _U.insert("position",a,d)));
   });
   var FixedWindAngle = {ctor: "FixedWindAngle"};
   var FixedDirection = {ctor: "FixedDirection"};
   var Course = F6(function (a,
   b,
   c,
   d,
   e,
   f) {
      return {_: {}
             ,bounds: f
             ,downwind: b
             ,islands: e
             ,laps: c
             ,markRadius: d
             ,upwind: a};
   });
   var Island = F2(function (a,b) {
      return {_: {}
             ,location: a
             ,radius: b};
   });
   var Gate = F2(function (a,b) {
      return {_: {},width: b,y: a};
   });
   var Upwind = {ctor: "Upwind"};
   var Downwind = {ctor: "Downwind"};
   var StartLine = {ctor: "StartLine"};
   var defaultPlayer = {_: {}
                       ,center: {ctor: "_Tuple2"
                                ,_0: 0
                                ,_1: 0}
                       ,controlMode: FixedDirection
                       ,crossedGates: _L.fromArray([])
                       ,direction: 0
                       ,downwindVmg: 0
                       ,nextGate: Maybe.Just(StartLine)
                       ,position: {ctor: "_Tuple2"
                                  ,_0: 0
                                  ,_1: -200}
                       ,spellCast: false
                       ,startCountdown: false
                       ,tackTarget: Maybe.Nothing
                       ,upwindVmg: 0
                       ,velocity: 0
                       ,wake: _L.fromArray([])
                       ,windAngle: 0
                       ,windOrigin: 0
                       ,windSpeed: 0};
   var defaultGame = {_: {}
                     ,buoys: _L.fromArray([])
                     ,countdown: Maybe.Nothing
                     ,course: defaultCourse
                     ,isMaster: false
                     ,leaderboard: _L.fromArray([])
                     ,opponents: _L.fromArray([])
                     ,player: defaultPlayer
                     ,playerSpell: Maybe.Nothing
                     ,triggeredSpells: _L.fromArray([])
                     ,wind: defaultWind};
   _elm.Game.values = {_op: _op
                      ,containsSpell: containsSpell
                      ,defaultGate: defaultGate
                      ,defaultCourse: defaultCourse
                      ,defaultPlayer: defaultPlayer
                      ,defaultWind: defaultWind
                      ,defaultGame: defaultGame
                      ,getGateMarks: getGateMarks
                      ,StartLine: StartLine
                      ,Downwind: Downwind
                      ,Upwind: Upwind
                      ,FixedDirection: FixedDirection
                      ,FixedWindAngle: FixedWindAngle
                      ,Gate: Gate
                      ,Island: Island
                      ,Course: Course
                      ,Boat: Boat
                      ,Spell: Spell
                      ,Buoy: Buoy
                      ,Gust: Gust
                      ,Wind: Wind
                      ,GameState: GameState
                      ,RaceState: RaceState};
   return _elm.Game.values;
};Elm.Geo = Elm.Geo || {};
Elm.Geo.make = function (_elm) {
   "use strict";
   _elm.Geo = _elm.Geo || {};
   if (_elm.Geo.values)
   return _elm.Geo.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Geo";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Core = Elm.Core.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var movePoint = F4(function (_v0,
   delta,
   velocity,
   direction) {
      return function () {
         switch (_v0.ctor)
         {case "_Tuple2":
            return function () {
                 var angle = Core.toRadians(direction);
                 var x$ = _v0._0 + delta * velocity * Basics.cos(angle);
                 var y$ = _v0._1 + delta * velocity * Basics.sin(angle);
                 return {ctor: "_Tuple2"
                        ,_0: x$
                        ,_1: y$};
              }();}
         _E.Case($moduleName,
         "between lines 36 and 39");
      }();
   });
   var toBox = F3(function (_v4,
   w,
   h) {
      return function () {
         switch (_v4.ctor)
         {case "_Tuple2":
            return {ctor: "_Tuple2"
                   ,_0: {ctor: "_Tuple2"
                        ,_0: _v4._0 + w / 2
                        ,_1: _v4._1 + h / 2}
                   ,_1: {ctor: "_Tuple2"
                        ,_0: _v4._0 - w / 2
                        ,_1: _v4._1 - h / 2}};}
         _E.Case($moduleName,
         "on line 32, column 4 to 42");
      }();
   });
   var inBox = F2(function (_v8,
   _v9) {
      return function () {
         switch (_v9.ctor)
         {case "_Tuple2":
            switch (_v9._0.ctor)
              {case "_Tuple2":
                 switch (_v9._1.ctor)
                   {case "_Tuple2":
                      return function () {
                           switch (_v8.ctor)
                           {case "_Tuple2":
                              return _U.cmp(_v8._0,
                                _v9._1._0) > 0 && (_U.cmp(_v8._0,
                                _v9._0._0) < 0 && (_U.cmp(_v8._1,
                                _v9._1._1) > 0 && _U.cmp(_v8._1,
                                _v9._0._1) < 0));}
                           _E.Case($moduleName,
                           "on line 28, column 3 to 47");
                        }();}
                   break;}
              break;}
         _E.Case($moduleName,
         "on line 28, column 3 to 47");
      }();
   });
   var distance = F2(function (_v20,
   _v21) {
      return function () {
         switch (_v21.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v20.ctor)
                 {case "_Tuple2":
                    return Basics.sqrt(Math.pow(_v20._0 - _v21._0,
                      2) + Math.pow(_v20._1 - _v21._1,
                      2));}
                 _E.Case($moduleName,
                 "on line 24, column 3 to 34");
              }();}
         _E.Case($moduleName,
         "on line 24, column 3 to 34");
      }();
   });
   var scale = F2(function (s,
   _v28) {
      return function () {
         switch (_v28.ctor)
         {case "_Tuple2":
            return {ctor: "_Tuple2"
                   ,_0: _v28._0 * s
                   ,_1: _v28._1 * s};}
         _E.Case($moduleName,
         "on line 20, column 18 to 26");
      }();
   });
   var neg = function (_v32) {
      return function () {
         switch (_v32.ctor)
         {case "_Tuple2":
            return {ctor: "_Tuple2"
                   ,_0: 0 - _v32._0
                   ,_1: 0 - _v32._1};}
         _E.Case($moduleName,
         "on line 17, column 14 to 19");
      }();
   };
   var sub = F2(function (_v36,
   _v37) {
      return function () {
         switch (_v37.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v36.ctor)
                 {case "_Tuple2":
                    return {ctor: "_Tuple2"
                           ,_0: _v37._0 - _v36._0
                           ,_1: _v37._1 - _v36._1};}
                 _E.Case($moduleName,
                 "on line 14, column 22 to 36");
              }();}
         _E.Case($moduleName,
         "on line 14, column 22 to 36");
      }();
   });
   var add = F2(function (_v44,
   _v45) {
      return function () {
         switch (_v45.ctor)
         {case "_Tuple2":
            return function () {
                 switch (_v44.ctor)
                 {case "_Tuple2":
                    return {ctor: "_Tuple2"
                           ,_0: _v45._0 + _v44._0
                           ,_1: _v45._1 + _v44._1};}
                 _E.Case($moduleName,
                 "on line 11, column 22 to 36");
              }();}
         _E.Case($moduleName,
         "on line 11, column 22 to 36");
      }();
   });
   var floatify = function (_v52) {
      return function () {
         switch (_v52.ctor)
         {case "_Tuple2":
            return {ctor: "_Tuple2"
                   ,_0: Basics.toFloat(_v52._0)
                   ,_1: Basics.toFloat(_v52._1)};}
         _E.Case($moduleName,
         "on line 8, column 19 to 39");
      }();
   };
   _elm.Geo.values = {_op: _op
                     ,floatify: floatify
                     ,add: add
                     ,sub: sub
                     ,neg: neg
                     ,scale: scale
                     ,distance: distance
                     ,inBox: inBox
                     ,toBox: toBox
                     ,movePoint: movePoint};
   return _elm.Geo.values;
};Elm.Core = Elm.Core || {};
Elm.Core.make = function (_elm) {
   "use strict";
   _elm.Core = _elm.Core || {};
   if (_elm.Core.values)
   return _elm.Core.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Core";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var indexedMap = F2(function (f,
   xs) {
      return A3(List.zipWith,
      f,
      _L.range(0,List.length(xs) - 1),
      xs);
   });
   var average = function (items) {
      return List.sum(items) / Basics.toFloat(List.length(items));
   };
   var compact = function (maybes) {
      return function () {
         var folder = F2(function (m,
         list) {
            return function () {
               switch (m.ctor)
               {case "Just": return {ctor: "::"
                                    ,_0: m._0
                                    ,_1: list};
                  case "Nothing": return list;}
               _E.Case($moduleName,
               "between lines 78 and 81");
            }();
         });
         return A3(List.foldl,
         folder,
         _L.fromArray([]),
         maybes);
      }();
   };
   var mapMaybe = F2(function (f,
   maybe) {
      return function () {
         switch (maybe.ctor)
         {case "Just":
            return Maybe.Just(f(maybe._0));
            case "Nothing":
            return Maybe.Nothing;}
         _E.Case($moduleName,
         "between lines 71 and 73");
      }();
   });
   var getCountdown = function (maybeCountdown) {
      return A3(Maybe.maybe,
      0,
      Basics.id,
      maybeCountdown);
   };
   var isStarted = function (maybeCountdown) {
      return A3(Maybe.maybe,
      false,
      function (n) {
         return _U.cmp(n,0) < 1;
      },
      maybeCountdown);
   };
   var polarVelocity = F2(function (speed,
   angle) {
      return function () {
         var x2 = angle;
         var x1 = speed;
         var v = -2.067174789 * Math.pow(10,
         -3) * Math.pow(x1,
         3) - 1.868941044 * Math.pow(10,
         -4) * Math.pow(x1,
         2) * x2 - 1.03401471 * Math.pow(10,
         -4) * x1 * Math.pow(x2,
         2) - 1.86799863 * Math.pow(10,
         -5) * Math.pow(x2,
         3) + 7.376288713 * Math.pow(10,
         -2) * Math.pow(x1,
         2) + 3.19606466 * Math.pow(10,
         -2) * x1 * x2 + 2.939457021 * Math.pow(10,
         -3) * Math.pow(x2,
         2) - 8.575945237 * Math.pow(10,
         -1) * x1 + 9.427801906 * Math.pow(10,
         -5) * x2 + 4.342327445;
         return v * 2;
      }();
   });
   var playerVelocity = F3(function (windSpeed,
   windAngle,
   previousVelocity) {
      return function () {
         var v = A2(polarVelocity,
         windSpeed,
         Basics.abs(windAngle));
         var delta = v - previousVelocity;
         return previousVelocity + delta * 2.0e-2;
      }();
   });
   var angleToWind = F2(function (playerDirection,
   windOrigin) {
      return function () {
         var delta = playerDirection - windOrigin;
         return _U.cmp(delta,
         180) > 0 ? delta - 360 : _U.cmp(delta,
         -180) < 1 ? delta + 360 : delta;
      }();
   });
   var mpsToKnts = function (mps) {
      return mps * 3600 / 1.852 / 1000;
   };
   var toRadians = function (deg) {
      return Basics.radians((90 - deg) * Basics.pi / 180);
   };
   var vmgValue = F2(function (windSpeed,
   windAngle) {
      return function () {
         var boatSpeed = A2(polarVelocity,
         windSpeed,
         windAngle);
         var windAngleRad = toRadians(windAngle);
         return Basics.abs(Basics.sin(windAngleRad) * boatSpeed);
      }();
   });
   var getVmgInInterval = F2(function (windSpeed,
   angles) {
      return function () {
         var vmgValues = A2(List.map,
         vmgValue(windSpeed),
         angles);
         var pairs = A2(List.zip,
         angles,
         vmgValues);
         var best = List.last(A2(List.sortBy,
         Basics.snd,
         pairs));
         return Basics.fst(best);
      }();
   });
   var getUpwindVmg = function (windSpeed) {
      return A2(getVmgInInterval,
      windSpeed,
      _L.range(40,60));
   };
   var getDownwindVmg = function (windSpeed) {
      return A2(getVmgInInterval,
      windSpeed,
      _L.range(130,180));
   };
   var ensure360 = function (val) {
      return function () {
         var rounded = Basics.round(val);
         var excess = val - Basics.toFloat(rounded);
         return Basics.toFloat(A2(Basics.mod,
         rounded + 360,
         360)) + excess;
      }();
   };
   _elm.Core.values = {_op: _op
                      ,ensure360: ensure360
                      ,toRadians: toRadians
                      ,mpsToKnts: mpsToKnts
                      ,angleToWind: angleToWind
                      ,polarVelocity: polarVelocity
                      ,vmgValue: vmgValue
                      ,getVmgInInterval: getVmgInInterval
                      ,getUpwindVmg: getUpwindVmg
                      ,getDownwindVmg: getDownwindVmg
                      ,playerVelocity: playerVelocity
                      ,isStarted: isStarted
                      ,getCountdown: getCountdown
                      ,mapMaybe: mapMaybe
                      ,compact: compact
                      ,average: average
                      ,indexedMap: indexedMap};
   return _elm.Core.values;
};Elm.Drag = Elm.Drag || {};
Elm.Drag.make = function (_elm) {
   "use strict";
   _elm.Drag = _elm.Drag || {};
   if (_elm.Drag.values)
   return _elm.Drag.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Drag";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Mouse = Elm.Mouse.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var joinMaybe = A2(Maybe.maybe,
   Maybe.Nothing,
   Basics.id);
   var justWhen = F2(function (b,
   s) {
      return A2(Signal._op["~"],
      A2(Signal._op["<~"],
      F2(function (b,x) {
         return b ? Maybe.Just(x) : Maybe.Nothing;
      }),
      b),
      s);
   });
   var lastPosition = function (delay) {
      return F2(function (x,y) {
         return A2(Signal._op["<~"],
         x,
         y);
      })(joinMaybe)(justWhen(Mouse.isDown)(Time.delay(delay)(justWhen(Mouse.isDown)(Mouse.position))));
   };
   var start = justWhen(Mouse.isDown)(Signal.sampleOn(Signal.dropRepeats(Mouse.isDown))(Mouse.position));
   var drop = function () {
      var stop = Mouse.position;
      var start = A2(Signal.keepWhen,
      Mouse.isDown,
      {ctor: "_Tuple2"
      ,_0: 0
      ,_1: 0})(Signal.sampleOn(Signal.dropRepeats(Mouse.isDown))(Mouse.position));
      return justWhen(A2(Signal._op["<~"],
      Basics.not,
      Mouse.isDown))(Signal.sampleOn(Signal.dropRepeats(Mouse.isDown))(A2(Signal._op["~"],
      A2(Signal._op["<~"],
      F2(function (v0,v1) {
         return {ctor: "_Tuple2"
                ,_0: v0
                ,_1: v1};
      }),
      start),
      stop)));
   }();
   _elm.Drag.values = {_op: _op
                      ,justWhen: justWhen
                      ,joinMaybe: joinMaybe
                      ,lastPosition: lastPosition
                      ,start: start
                      ,drop: drop};
   return _elm.Drag.values;
};Elm.Render = Elm.Render || {};
Elm.Render.Utils = Elm.Render.Utils || {};
Elm.Render.Utils.make = function (_elm) {
   "use strict";
   _elm.Render = _elm.Render || {};
   _elm.Render.Utils = _elm.Render.Utils || {};
   if (_elm.Render.Utils.values)
   return _elm.Render.Utils.values;
   var _N = Elm.Native,
   _U = _N.Utils.make(_elm),
   _L = _N.List.make(_elm),
   _A = _N.Array.make(_elm),
   _E = _N.Error.make(_elm),
   $moduleName = "Render.Utils";
   var Basics = Elm.Basics.make(_elm);
   var Color = Elm.Color.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Collage = Elm.Graphics.Collage.make(_elm);
   var Graphics = Graphics || {};
   Graphics.Element = Elm.Graphics.Element.make(_elm);
   var List = Elm.List.make(_elm);
   var Maybe = Elm.Maybe.make(_elm);
   var Native = Native || {};
   Native.Json = Elm.Native.Json.make(_elm);
   var Native = Native || {};
   Native.Ports = Elm.Native.Ports.make(_elm);
   var Signal = Elm.Signal.make(_elm);
   var String = Elm.String.make(_elm);
   var Text = Elm.Text.make(_elm);
   var Time = Elm.Time.make(_elm);
   var _op = {};
   var baseText = function (s) {
      return Text.typeface(_L.fromArray(["Inconsolata"
                                        ,"monospace"]))(Text.color(Color.white)(Text.height(15)(Text.toText(s))));
   };
   var fullScreenMessage = function (msg) {
      return Graphics.Collage.alpha(0.3)(Graphics.Collage.toForm(Text.centered(Text.color(Color.white)(Text.height(60)(Text.toText(String.toUpper(msg)))))));
   };
   var colors = {_: {}
                ,buoy: Color.white
                ,gateLine: Color.orange
                ,gateMark: Color.orange
                ,sand: A3(Color.rgb,239,210,121)
                ,seaBlue: A3(Color.rgb,
                10,
                105,
                148)};
   var startCountdownMessage = "press C to start countdown (30s)";
   var helpMessage = _L.append("←/→ to turn left/right, SHIFT + ←/→ to fine tune direction, \n",
   "↑ or ENTER to lock angle to wind, SPACE to tack/jibe, S to cast a spell");
   _elm.Render.Utils.values = {_op: _op
                              ,helpMessage: helpMessage
                              ,startCountdownMessage: startCountdownMessage
                              ,colors: colors
                              ,fullScreenMessage: fullScreenMessage
                              ,baseText: baseText};
   return _elm.Render.Utils.values;
};