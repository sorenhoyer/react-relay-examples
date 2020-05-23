/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Navigation_currentFoo$ref = any;
type Navigation_foo_count$ref = any;
export type AppQueryVariables = {||};
export type AppQueryResponse = {|
  +localState: ?{|
    +currentFoo: ?{|
      +id: string,
      +name: string,
      +$fragmentRefs: Navigation_currentFoo$ref,
    |}
  |},
  +fooCount: ?{|
    +$fragmentRefs: Navigation_foo_count$ref
  |},
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery {
  fooCount: entities(first: 2, types: [FOO]) {
    ...Navigation_foo_count
  }
}

fragment Navigation_foo_count on EntityConnection {
  totalCount
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
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
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "uuid",
  "storageKey": null
},
v5 = {
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
        "alias": "fooCount",
        "args": (v0/*: any*/),
        "concreteType": "EntityConnection",
        "kind": "LinkedField",
        "name": "entities",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "Navigation_foo_count"
          }
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
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "Navigation_currentFoo"
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
    "name": "AppQuery",
    "selections": [
      {
        "alias": "fooCount",
        "args": (v0/*: any*/),
        "concreteType": "EntityConnection",
        "kind": "LinkedField",
        "name": "entities",
        "plural": false,
        "selections": [
          (v3/*: any*/)
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
                  (v4/*: any*/),
                  (v5/*: any*/),
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
                      (v3/*: any*/),
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
                              (v4/*: any*/),
                              (v2/*: any*/),
                              (v5/*: any*/)
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
    "text": "query AppQuery {\n  fooCount: entities(first: 2, types: [FOO]) {\n    ...Navigation_foo_count\n  }\n}\n\nfragment Navigation_foo_count on EntityConnection {\n  totalCount\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '1ae3485f9bde26f420e39cdc3dc0bcd7';

module.exports = node;
