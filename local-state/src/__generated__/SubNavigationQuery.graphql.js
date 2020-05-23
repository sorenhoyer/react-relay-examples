/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type SubNavigationQueryVariables = {||};
export type SubNavigationQueryResponse = {|
  +primaryFoo: {|
    +__typename: string
  |},
  +localState: ?{|
    +currentFoo: ?{|
      +id: string,
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
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "totalCount",
    "storageKey": null
  },
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
          (v2/*: any*/),
          (v0/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "cursor",
        "storageKey": null
      }
    ],
    "storageKey": null
  },
  {
    "alias": null,
    "args": null,
    "concreteType": "PageInfo",
    "kind": "LinkedField",
    "name": "pageInfo",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "endCursor",
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "kind": "ScalarField",
        "name": "hasNextPage",
        "storageKey": null
      }
    ],
    "storageKey": null
  }
],
v5 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 10
  },
  (v3/*: any*/)
];
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
                  {
                    "alias": "entities",
                    "args": [
                      (v3/*: any*/)
                    ],
                    "concreteType": "EntityConnection",
                    "kind": "LinkedField",
                    "name": "__SubNavigation_entities_connection",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": "__SubNavigation_entities_connection(types:[\"BAR\",\"BAZ\"])"
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
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "concreteType": "EntityConnection",
                    "kind": "LinkedField",
                    "name": "entities",
                    "plural": false,
                    "selections": (v4/*: any*/),
                    "storageKey": "entities(first:10,types:[\"BAR\",\"BAZ\"])"
                  },
                  {
                    "alias": null,
                    "args": (v5/*: any*/),
                    "filters": [
                      "types"
                    ],
                    "handle": "connection",
                    "key": "SubNavigation_entities",
                    "kind": "LinkedHandle",
                    "name": "entities"
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
    "metadata": {
      "connection": [
        {
          "count": null,
          "cursor": null,
          "direction": "forward",
          "path": [
            "localState",
            "currentFoo",
            "entities"
          ]
        }
      ]
    },
    "name": "SubNavigationQuery",
    "operationKind": "query",
    "text": "query SubNavigationQuery {\n  primaryFoo {\n    __typename\n    id\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '0685d2f7653d9c2532fbd1f8ae126063';

module.exports = node;
