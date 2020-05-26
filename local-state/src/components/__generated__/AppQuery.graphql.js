/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type Navigation_data$ref = any;
export type AppQueryVariables = {|
  currentFooId: string
|};
export type AppQueryResponse = {|
  +$fragmentRefs: Navigation_data$ref
|};
export type AppQuery = {|
  variables: AppQueryVariables,
  response: AppQueryResponse,
|};
*/


/*
query AppQuery(
  $currentFooId: ID!
) {
  ...Navigation_data_3GaHFW
}

fragment MainNavigation_currentFoo on Foo {
  name
  entities(types: [BAR, BAZ]) {
    totalCount
    edges {
      node {
        __typename
        uuid
        id
      }
    }
  }
}

fragment MainNavigation_fooCount on EntityConnection {
  totalCount
}

fragment Navigation_data_3GaHFW on Query {
  node(id: $currentFooId) {
    __typename
    ...MainNavigation_currentFoo
    id
  }
  fooCount: entities(first: 2, types: [FOO]) {
    ...MainNavigation_fooCount
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "currentFooId",
    "type": "ID!"
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "__typename",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "totalCount",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppQuery",
    "selections": [
      {
        "args": [
          {
            "kind": "Variable",
            "name": "currentFooId",
            "variableName": "currentFooId"
          }
        ],
        "kind": "FragmentSpread",
        "name": "Navigation_data"
      }
    ],
    "type": "Query"
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppQuery",
    "selections": [
      {
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "id",
            "variableName": "currentFooId"
          }
        ],
        "concreteType": null,
        "kind": "LinkedField",
        "name": "node",
        "plural": false,
        "selections": [
          (v1/*: any*/),
          (v2/*: any*/),
          {
            "kind": "InlineFragment",
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "name",
                "storageKey": null
              },
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
                          (v1/*: any*/),
                          {
                            "alias": null,
                            "args": null,
                            "kind": "ScalarField",
                            "name": "uuid",
                            "storageKey": null
                          },
                          (v2/*: any*/)
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
          (v3/*: any*/)
        ],
        "storageKey": "entities(first:2,types:[\"FOO\"])"
      }
    ]
  },
  "params": {
    "id": null,
    "metadata": {},
    "name": "AppQuery",
    "operationKind": "query",
    "text": "query AppQuery(\n  $currentFooId: ID!\n) {\n  ...Navigation_data_3GaHFW\n}\n\nfragment MainNavigation_currentFoo on Foo {\n  name\n  entities(types: [BAR, BAZ]) {\n    totalCount\n    edges {\n      node {\n        __typename\n        uuid\n        id\n      }\n    }\n  }\n}\n\nfragment MainNavigation_fooCount on EntityConnection {\n  totalCount\n}\n\nfragment Navigation_data_3GaHFW on Query {\n  node(id: $currentFooId) {\n    __typename\n    ...MainNavigation_currentFoo\n    id\n  }\n  fooCount: entities(first: 2, types: [FOO]) {\n    ...MainNavigation_fooCount\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'daa5bb810833c60fc199d047d32fe13b';

module.exports = node;
