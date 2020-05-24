/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Navigation_data$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +primaryFoo: {|
    +id: string,
    +uuid: string,
    +name: string,
    +entities: ?{|
      +totalCount: number,
      +edges: ?$ReadOnlyArray<?{|
        +node: ?{|
          +id: string,
          +uuid: string,
          +name: string,
        |}
      |}>,
    |},
  |},
  +$fragmentRefs: Navigation_data$ref,
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  primaryFoo {
    id
    uuid
    name
    entities(first: 9999, types: [BAR, BAZ]) {
      totalCount
      edges {
        node {
          __typename
          id
          uuid
          name
        }
      }
    }
  }
  ...Navigation_data
}

fragment MainNavigation_fooCount on EntityConnection {
  totalCount
}

fragment Navigation_data on Query {
  fooCount: entities(first: 2, types: [FOO]) {
    ...MainNavigation_fooCount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uuid",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v3 = {
  "kind": "Literal",
  "name": "types",
  "value": [
    "BAR",
    "BAZ"
  ]
},
v4 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 9999
  },
  (v3/*: any*/)
],
v5 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "alias": "primaryFoo",
        "args": null,
        "concreteType": "Foo",
        "kind": "LinkedField",
        "name": "__primaryFoo_currentFoo",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "EntityConnection",
            "kind": "LinkedField",
            "name": "entities",
            "plural": false,
            "selections": [
              (v5/*: any*/),
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
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "entities(first:9999,types:[\"BAR\",\"BAZ\"])"
          }
        ],
        "storageKey": null
      },
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "Navigation_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppQuery",
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
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "alias": null,
            "args": (v4/*: any*/),
            "concreteType": "EntityConnection",
            "kind": "LinkedField",
            "name": "entities",
            "plural": false,
            "selections": [
              (v5/*: any*/),
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
                      (v6/*: any*/),
                      (v0/*: any*/),
                      (v1/*: any*/),
                      (v2/*: any*/)
                    ],
                    "storageKey": null
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": "entities(first:9999,types:[\"BAR\",\"BAZ\"])"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "filters": null,
        "handle": "currentFoo",
        "key": "",
        "kind": "LinkedHandle",
        "name": "primaryFoo"
      },
      {
        "alias": "fooCount",
        "args": [
          {
            "kind": "Literal",
            "name": "first",
            "value": 2
          },
          {
            "kind": "Literal",
            "name": "types",
            "value": [
              "FOO"
            ]
          }
        ],
        "concreteType": "EntityConnection",
        "kind": "LinkedField",
        "name": "entities",
        "plural": false,
        "selections": [
          (v5/*: any*/)
        ],
        "storageKey": "entities(first:2,types:[\"FOO\"])"
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
                  (v0/*: any*/),
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v7/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      (v3/*: any*/)
                    ],
                    "concreteType": "EntityConnection",
                    "kind": "LinkedField",
                    "name": "entities",
                    "plural": false,
                    "selections": [
                      (v5/*: any*/),
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
                              (v6/*: any*/),
                              (v0/*: any*/),
                              (v1/*: any*/),
                              (v2/*: any*/),
                              (v7/*: any*/)
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
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery {\n  primaryFoo {\n    id\n    uuid\n    name\n    entities(first: 9999, types: [BAR, BAZ]) {\n      totalCount\n      edges {\n        node {\n          __typename\n          id\n          uuid\n          name\n        }\n      }\n    }\n  }\n  ...Navigation_data\n}\n\nfragment MainNavigation_fooCount on EntityConnection {\n  totalCount\n}\n\nfragment Navigation_data on Query {\n  fooCount: entities(first: 2, types: [FOO]) {\n    ...MainNavigation_fooCount\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'eb3e611ed997feb97363ab2d60159809';

module.exports = node;
