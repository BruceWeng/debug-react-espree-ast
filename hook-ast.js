/**
function Valid() {
  const res = [];
  for (let i = 0; i !== 10; ++i ) {
    res.push(i);
  }
  React.useLayoutEffect(() => {});
}
 */
{
  "type": "Program",
  "start": 0,
  "end": 130,
  "body": [
    {
      "type": "FunctionDeclaration",
      "start": 0,
      "end": 130,
      "id": {
        "type": "Identifier",
        "start": 9,
        "end": 14,
        "name": "Valid"
      },
      "expression": false,
      "generator": false,
      "params": [],
      "body": {
        "type": "BlockStatement",
        "start": 17,
        "end": 130,
        "body": [
          {
            "type": "VariableDeclaration",
            "start": 21,
            "end": 36,
            "declarations": [
              {
                "type": "VariableDeclarator",
                "start": 27,
                "end": 35,
                "id": {
                  "type": "Identifier",
                  "start": 27,
                  "end": 30,
                  "name": "res"
                },
                "init": {
                  "type": "ArrayExpression",
                  "start": 33,
                  "end": 35,
                  "elements": []
                }
              }
            ],
            "kind": "const"
          },
          {
            "type": "ForStatement",
            "start": 39,
            "end": 93,
            "init": {
              "type": "VariableDeclaration",
              "start": 44,
              "end": 53,
              "declarations": [
                {
                  "type": "VariableDeclarator",
                  "start": 48,
                  "end": 53,
                  "id": {
                    "type": "Identifier",
                    "start": 48,
                    "end": 49,
                    "name": "i"
                  },
                  "init": {
                    "type": "Literal",
                    "start": 52,
                    "end": 53,
                    "value": 0,
                    "raw": "0"
                  }
                }
              ],
              "kind": "let"
            },
            "test": {
              "type": "BinaryExpression",
              "start": 55,
              "end": 63,
              "left": {
                "type": "Identifier",
                "start": 55,
                "end": 56,
                "name": "i"
              },
              "operator": "!==",
              "right": {
                "type": "Literal",
                "start": 61,
                "end": 63,
                "value": 10,
                "raw": "10"
              }
            },
            "update": {
              "type": "UpdateExpression",
              "start": 65,
              "end": 68,
              "operator": "++",
              "prefix": true,
              "argument": {
                "type": "Identifier",
                "start": 67,
                "end": 68,
                "name": "i"
              }
            },
            "body": {
              "type": "BlockStatement",
              "start": 71,
              "end": 93,
              "body": [
                {
                  "type": "ExpressionStatement",
                  "start": 77,
                  "end": 89,
                  "expression": {
                    "type": "CallExpression",
                    "start": 77,
                    "end": 88,
                    "callee": {
                      "type": "MemberExpression",
                      "start": 77,
                      "end": 85,
                      "object": {
                        "type": "Identifier",
                        "start": 77,
                        "end": 80,
                        "name": "res"
                      },
                      "property": {
                        "type": "Identifier",
                        "start": 81,
                        "end": 85,
                        "name": "push"
                      },
                      "computed": false
                    },
                    "arguments": [
                      {
                        "type": "Identifier",
                        "start": 86,
                        "end": 87,
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
            "start": 96,
            "end": 128,
            "expression": {
              "type": "CallExpression",
              "start": 96,
              "end": 127,
              "callee": {
                "type": "MemberExpression",
                "start": 96,
                "end": 117,
                "object": {
                  "type": "Identifier",
                  "start": 96,
                  "end": 101,
                  "name": "React"
                },
                "property": {
                  "type": "Identifier",
                  "start": 102,
                  "end": 117,
                  "name": "useLayoutEffect"
                },
                "computed": false
              },
              "arguments": [
                {
                  "type": "ArrowFunctionExpression",
                  "start": 118,
                  "end": 126,
                  "id": null,
                  "expression": false,
                  "generator": false,
                  "params": [],
                  "body": {
                    "type": "BlockStatement",
                    "start": 124,
                    "end": 126,
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