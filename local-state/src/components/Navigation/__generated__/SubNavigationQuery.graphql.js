/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EntityType = "BAR" | "BAZ" | "FOO" | "%future added value";
export type SubNavigationQueryVariables = {||};
export type SubNavigationQueryResponse = {|
  +primaryFoo: {|
    +__typename: string
  |},
  +localState: ?{|
    +currentFoo: ?{|
      +id: string,
      +uuid: string,
      +name: string,
      +type: EntityType,
      +entities: ?{|
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
  |},
|};
export type SubNavigationQuery = {|
  variables: SubNavigationQueryVariables,
  response: SubNavigationQueryResponse,
|};
*/


/*
query SubNavigationQuery {
  primaryFoo {
    __typename
    id
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
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
    "name": "first",
    "value": 9999999
  },
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "SubNavigationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Foo",
        "kind": "LinkedField",
        "name": "primaryFoo",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocalState",
            "kind": "LinkedField",
            "name": "localState",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Foo",
                "kind": "LinkedField",
                "name": "currentFoo",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                    "storageKey": "entities(first:9999999,types:[\"BAR\",\"BAZ\"])"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "SubNavigationQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Foo",
        "kind": "LinkedField",
        "name": "primaryFoo",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ],
        "storageKey": null
      },
      {
        "kind": "ClientExtension",
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "LocalState",
            "kind": "LinkedField",
            "name": "localState",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Foo",
                "kind": "LinkedField",
                "name": "currentFoo",
                "plural": false,
                "selections": [
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
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
                              (v0/*: any*/),
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
                    "storageKey": "entities(first:9999999,types:[\"BAR\",\"BAZ\"])"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ]
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "SubNavigationQuery",
    "operationKind": "query",
    "text": "query SubNavigationQuery {\n  primaryFoo {\n    __typename\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '671646aca1d44948869b584fe5dcb165';

module.exports = node;
