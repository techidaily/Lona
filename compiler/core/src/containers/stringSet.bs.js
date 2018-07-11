// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var $$Set = require("bs-platform/lib/js/set.js");
var Curry = require("bs-platform/lib/js/curry.js");
var Caml_primitive = require("bs-platform/lib/js/caml_primitive.js");
var Caml_builtin_exceptions = require("bs-platform/lib/js/caml_builtin_exceptions.js");

var compare = Caml_primitive.caml_string_compare;

var include = $$Set.Make(/* module */[/* compare */compare]);

var find = include[24];

function find_opt(name, set) {
  var exit = 0;
  var item;
  try {
    item = Curry._2(find, name, set);
    exit = 1;
  }
  catch (exn){
    if (exn === Caml_builtin_exceptions.not_found) {
      return /* None */0;
    } else {
      throw exn;
    }
  }
  if (exit === 1) {
    return /* Some */[item];
  }
  
}

function has(name, set) {
  var match = find_opt(name, set);
  if (match) {
    return true;
  } else {
    return false;
  }
}

var empty = include[0];

var is_empty = include[1];

var mem = include[2];

var add = include[3];

var singleton = include[4];

var remove = include[5];

var union = include[6];

var inter = include[7];

var diff = include[8];

var compare$1 = include[9];

var equal = include[10];

var subset = include[11];

var iter = include[12];

var fold = include[13];

var for_all = include[14];

var exists = include[15];

var filter = include[16];

var partition = include[17];

var cardinal = include[18];

var elements = include[19];

var min_elt = include[20];

var max_elt = include[21];

var choose = include[22];

var split = include[23];

var of_list = include[25];

exports.empty = empty;
exports.is_empty = is_empty;
exports.mem = mem;
exports.add = add;
exports.singleton = singleton;
exports.remove = remove;
exports.union = union;
exports.inter = inter;
exports.diff = diff;
exports.compare = compare$1;
exports.equal = equal;
exports.subset = subset;
exports.iter = iter;
exports.fold = fold;
exports.for_all = for_all;
exports.exists = exists;
exports.filter = filter;
exports.partition = partition;
exports.cardinal = cardinal;
exports.elements = elements;
exports.min_elt = min_elt;
exports.max_elt = max_elt;
exports.choose = choose;
exports.split = split;
exports.find = find;
exports.of_list = of_list;
exports.find_opt = find_opt;
exports.has = has;
/* include Not a pure module */
