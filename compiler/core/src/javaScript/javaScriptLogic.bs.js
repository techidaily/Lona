// Generated by BUCKLESCRIPT VERSION 3.1.5, PLEASE EDIT WITH CARE
'use strict';

var List = require("bs-platform/lib/js/list.js");
var Block = require("bs-platform/lib/js/block.js");

function logicValueToJavaScriptAST(x) {
  if (x.tag) {
    return /* Literal */Block.__(1, [x[0]]);
  } else {
    return /* Identifier */Block.__(3, [x[1]]);
  }
}

function toJavaScriptAST(node) {
  var fromCmp = function (x) {
    switch (x) {
      case 0 : 
          return /* Eq */0;
      case 1 : 
          return /* Neq */1;
      case 2 : 
          return /* Gt */2;
      case 3 : 
          return /* Gte */3;
      case 4 : 
          return /* Lt */4;
      case 5 : 
          return /* Lte */5;
      case 6 : 
          return /* Noop */7;
      
    }
  };
  if (typeof node === "number") {
    return /* Unknown */1;
  } else {
    switch (node.tag | 0) {
      case 0 : 
          var condition = /* BinaryExpression */Block.__(17, [{
                left: logicValueToJavaScriptAST(node[0]),
                operator: fromCmp(node[1]),
                right: logicValueToJavaScriptAST(node[2])
              }]);
          return /* IfStatement */Block.__(18, [{
                      test: condition,
                      consequent: /* :: */[
                        toJavaScriptAST(node[3]),
                        /* [] */0
                      ]
                    }]);
      case 1 : 
          return /* IfStatement */Block.__(18, [{
                      test: logicValueToJavaScriptAST(node[0]),
                      consequent: /* :: */[
                        toJavaScriptAST(node[1]),
                        /* [] */0
                      ]
                    }]);
      case 2 : 
          return /* AssignmentExpression */Block.__(16, [{
                      left: logicValueToJavaScriptAST(node[1]),
                      right: logicValueToJavaScriptAST(node[0])
                    }]);
      case 3 : 
          var addition = /* BinaryExpression */Block.__(17, [{
                left: logicValueToJavaScriptAST(node[0]),
                operator: /* Plus */6,
                right: logicValueToJavaScriptAST(node[1])
              }]);
          return /* AssignmentExpression */Block.__(16, [{
                      left: logicValueToJavaScriptAST(node[2]),
                      right: addition
                    }]);
      case 4 : 
          var value = node[0];
          if (value.tag) {
            return /* Unknown */1;
          } else {
            return /* VariableDeclaration */Block.__(15, [/* Identifier */Block.__(3, [value[1]])]);
          }
      case 5 : 
          var value$1 = node[0];
          var tmp;
          tmp = value$1.tag ? /* Unknown */1 : /* VariableDeclaration */Block.__(15, [/* Identifier */Block.__(3, [value$1[1]])]);
          return /* AssignmentExpression */Block.__(16, [{
                      left: tmp,
                      right: logicValueToJavaScriptAST(node[1])
                    }]);
      case 6 : 
          return /* Block */Block.__(23, [List.map(toJavaScriptAST, node[0])]);
      
    }
  }
}

var Ast = 0;

exports.Ast = Ast;
exports.logicValueToJavaScriptAST = logicValueToJavaScriptAST;
exports.toJavaScriptAST = toJavaScriptAST;
/* No side effect */
