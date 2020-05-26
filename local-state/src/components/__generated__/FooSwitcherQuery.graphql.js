/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type FooSwitcherQueryVariables = {||};
export type FooSwitcherQueryResponse = {|
  +entities: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id?: string,
        +name?: string,
      |}
    |}>
  |}
|};
export type FooSwitcherQuery = {|
  variables: FooSwitcherQueryVariables,
  response: FooSwitcherQueryResponse,
|};
*/


/*
query FooSwitcherQuery {
  entities(types: [FOO]) {
    edges {
      node {
        __typename
        ... on Foo {
          id
          name
        }
        id
      }
    }
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "types",
    "value": [
      "FOO"
    ]
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "FooSwitcherQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "EntityConnection",
        "kind": "LinkedField",
        "name": "entities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EntityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v1/*: any*/),
                      (v2/*: any*/)
                    ],
                    "type": "Foo"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "entities(types:[\"FOO\"])"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "FooSwitcherQuery",
    "selections": [
      {
        "alias": null,
        "args": (v0/*: any*/),
        "concreteType": "EntityConnection",
        "kind": "LinkedField",
        "name": "entities",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "EntityEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": null,
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  },
                  (v1/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      (v2/*: any*/)
                    ],
                    "type": "Foo"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": "entities(types:[\"FOO\"])"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "FooSwitcherQuery",
    "operationKind": "query",
    "text": "query FooSwitcherQuery {\n  entities(types: [FOO]) {\n    edges {\n      node {\n        __typename\n        ... on Foo {\n          id\n          name\n        }\n        id\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '42329db4c500e94a390e8292aa2d614d';

module.exports = node;
