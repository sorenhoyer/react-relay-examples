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
  +$fragmentRefs: Navigation_data$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
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
  "name": "totalCount",
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
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
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
          (v0/*: any*/)
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
                  (v1/*: any*/),
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  {
                    "alias": null,
                    "args": [
                      {
                        "kind": "Literal",
                        "name": "types",
                        "value": [
                          "BAR",
                          "BAZ"
                        ]
                      }
                    ],
                    "concreteType": "EntityConnection",
                    "kind": "LinkedField",
                    "name": "entities",
                    "plural": false,
                    "selections": [
                      (v0/*: any*/),
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
    "text": "query AppQuery {\n  ...Navigation_data\n}\n\nfragment MainNavigation_fooCount on EntityConnection {\n  totalCount\n}\n\nfragment Navigation_data on Query {\n  fooCount: entities(first: 2, types: [FOO]) {\n    ...MainNavigation_fooCount\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'acee50923710664eef54a0e220aa828e';

module.exports = node;
