// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_obj = require("bs-platform/lib/js/caml_obj.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

function Make(Item) {
  var reduce = function (f, initialValue, item) {
    return List.fold_left((function (acc, item) {
                  return reduce(f, acc, item);
                }), Curry._2(f, item, initialValue), Curry._1(Item[/* children */0], item));
  };
  var map = function (f, item) {
    return Curry._1(f, Curry._2(Item[/* restore */1], item, List.map((function (param) {
                          return map(f, param);
                        }), Curry._1(Item[/* children */0], item))));
  };
  var iter = function (f, item) {
    Curry._1(f, item);
    return List.iter((function (param) {
                  return iter(f, param);
                }), Curry._1(Item[/* children */0], item));
  };
  var find_opt = function (f, node) {
    var _items = /* :: */[
      node,
      /* [] */0
    ];
    while(true) {
      var items = _items;
      if (items) {
        var tail = items[1];
        var head = items[0];
        if (tail) {
          var match = Curry._1(f, head);
          if (match) {
            return /* Some */[head];
          } else {
            _items = tail;
            continue ;
          }
        } else {
          var match$1 = Curry._1(f, head);
          if (match$1) {
            return /* Some */[head];
          } else {
            _items = Curry._1(Item[/* children */0], head);
            continue ;
          }
        }
      } else {
        return /* None */0;
      }
    };
  };
  var find = function (f, item) {
    var match = find_opt(f, item);
    if (match) {
      return match[0];
    } else {
      throw Caml_builtin_exceptions.not_found;
    }
  };
  var replace_all = function (f, root) {
    return map((function (item) {
                  var match = Curry._1(f, item);
                  if (match) {
                    return match[0];
                  } else {
                    return item;
                  }
                }), root);
  };
  var replace = function (f, root) {
    var found = [false];
    return map((function (item) {
                  if (found[0]) {
                    return item;
                  } else {
                    var match = Curry._1(f, item);
                    if (match) {
                      found[0] = true;
                      return match[0];
                    } else {
                      return item;
                    }
                  }
                }), root);
  };
  var replaceWith = function (original, updated, root) {
    return replace((function (item) {
                  var match = Caml_obj.caml_equal(item, original);
                  if (match) {
                    return /* Some */[updated];
                  } else {
                    return /* None */0;
                  }
                }), root);
  };
  var insert_child = function (f, root) {
    var found = [false];
    return map((function (item) {
                  if (found[0]) {
                    return item;
                  } else {
                    var match = Curry._1(f, item);
                    if (match) {
                      found[0] = true;
                      return Curry._2(Item[/* restore */1], item, /* :: */[
                                  match[0],
                                  Curry._1(Item[/* children */0], item)
                                ]);
                    } else {
                      return item;
                    }
                  }
                }), root);
  };
  return /* module */[
          /* reduce */reduce,
          /* map */map,
          /* iter */iter,
          /* find_opt */find_opt,
          /* find */find,
          /* replace_all */replace_all,
          /* replace */replace,
          /* replaceWith */replaceWith,
          /* insert_child */insert_child
        ];
}

exports.Make = Make;
/* No side effect */
