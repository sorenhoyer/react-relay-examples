/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EntityType = "BAR" | "BAZ" | "FOO" | "%future added value";
export type FooSwitcherQueryVariables = {||};
export type FooSwitcherQueryResponse = {|
  +entities: ?{|
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +uuid: string,
        +name: string,
        +type: EntityType,
        +entities?: ?{|
          +totalCount: number,
          +edges: ?$ReadOnlyArray<?{|
            +node: ?{|
              +id: string,
              +uuid: string,
              +name: string,
              +type: EntityType,
            |}
          |}>,
        |},
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
        id
        uuid
        name
        type
        ... on Foo {
          entities(types: [BAR, BAZ]) {
            totalCount
            edges {
              node {
                __typename
                id
                uuid
                name
                type
              }
            }
          }
        }
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
  "name": "uuid",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
},
v5 = [
  {
    "kind": "Literal",
    "name": "types",
    "value": [
      "BAR",
      "BAZ"
    ]
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "concreteType": "EntityConnection",
                        "kind": "LinkedField",
                        "name": "entities",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
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
                                  (v1/*: any*/),
                                  (v2/*: any*/),
                                  (v3/*: any*/),
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "entities(types:[\"BAR\",\"BAZ\"])"
                      }
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
                  (v7/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "kind": "InlineFragment",
                    "selections": [
                      {
                        "alias": null,
                        "args": (v5/*: any*/),
                        "concreteType": "EntityConnection",
                        "kind": "LinkedField",
                        "name": "entities",
                        "plural": false,
                        "selections": [
                          (v6/*: any*/),
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
                                  (v7/*: any*/),
                                  (v1/*: any*/),
                                  (v2/*: any*/),
                                  (v3/*: any*/),
                                  (v4/*: any*/)
                                ],
                                "storageKey": null
                              }
                            ],
                            "storageKey": null
                          }
                        ],
                        "storageKey": "entities(types:[\"BAR\",\"BAZ\"])"
                      }
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
    "text": "query FooSwitcherQuery {\n  entities(types: [FOO]) {\n    edges {\n      node {\n        __typename\n        id\n        uuid\n        name\n        type\n        ... on Foo {\n          entities(types: [BAR, BAZ]) {\n            totalCount\n            edges {\n              node {\n                __typename\n                id\n                uuid\n                name\n                type\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '20381cd7e0f4efb00d4563bb308cf326';

module.exports = node;
