/**
function Bugged() {
  const res = [];
  const additionalCond = true;
  for (let i = 0; i !== 10 && additionalCond; ++i ) {
    res.push(i);
  }
  React.useLayoutEffect(() => {});
}
 */
{
  "type": "Program",
  "start": 0,
  "end": 180,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 180,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 15,
        "name": "Bugged"
      },
      "expression": false,
      "generator": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 18,
        "end": 180,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 22,
            "end": 37,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 28,
                "end": 36,
                "id": {
                  "type": "Identifier",
                  "start": 28,
                  "end": 31,
                  "name": "res"
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 34,
                  "end": 36,
                  "elements": []
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "VariableDeclaration",
            "start": 40,
            "end": 68,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 46,
                "end": 67,
                "id": {
                  "type": "Identifier",
                  "start": 46,
                  "end": 60,
                  "name": "additionalCond"
                },
                "init": {
                  "type": "Literal",
                  "start": 63,
                  "end": 67,
                  "value": true,
                  "raw": "true"
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "ForStatement",
            "start": 71,
            "end": 143,
            "init": {
              "type": "VariableDeclaration",
              "start": 76,
              "end": 85,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 80,
                  "end": 85,
                  "id": {
                    "type": "Identifier",
                    "start": 80,
                    "end": 81,
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "start": 84,
                    "end": 85,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "let"
            },
            "test": {
              "type": "LogicalExpression",
              "start": 87,
              "end": 113,
              "left": {
                "type": "BinaryExpression",
                "start": 87,
                "end": 95,
                "left": {
                  "type": "Identifier",
                  "start": 87,
                  "end": 88,
                  "name": "i"
                },
                "operator": "!==",
                "right": {
                  "type": "Literal",
                  "start": 93,
                  "end": 95,
                  "value": 10,
                  "raw": "10"
                }
              },
              "operator": "&&",
              "right": {
                "type": "Identifier",
                "start": 99,
                "end": 113,
                "name": "additionalCond"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 115,
              "end": 118,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 117,
                "end": 118,
                "name": "i"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 121,
              "end": 143,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 127,
                  "end": 139,
                  "expression": {
                    "type": "CallExpression",
                    "start": 127,
                    "end": 138,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 127,
                      "end": 135,
                      "object": {
                        "type": "Identifier",
                        "start": 127,
                        "end": 130,
                        "name": "res"
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 131,
                        "end": 135,
                        "name": "push"
                      },
                      "computed": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 136,
                        "end": 137,
                        "name": "i"
                      }
                    ]
                  }
                }
              ]
            }
          },
          {
            "type": "ExpressionStatement",
            "start": 146,
            "end": 178,
            "expression": {
              "type": "CallExpression",
              "start": 146,
              "end": 177,
              "callee": {
                "type": "MemberExpression",
                "start": 146,
                "end": 167,
                "object": {
                  "type": "Identifier",
                  "start": 146,
                  "end": 151,
                  "name": "React"
                },
                "property": {
                  "type": "Identifier",
                  "start": 152,
                  "end": 167,
                  "name": "useLayoutEffect"
                },
                "computed": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 168,
                  "end": 176,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 174,
                    "end": 176,
                    "body": []
                  }
                }
              ]
            }
          }
        ]
      }
    }
  ],
  "sourceType": "module"
}