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
    +totalCount: number,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +id: string,
        +uuid: string,
        +name: string,
        +type: EntityType,
      |}
    |}>,
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
  "name": "totalCount",
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
  "name": "uuid",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
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
          (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
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
          (v1/*: any*/),
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
                  (v2/*: any*/),
                  (v3/*: any*/),
                  (v4/*: any*/),
                  (v5/*: any*/)
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
    "text": "query FooSwitcherQuery {\n  entities(types: [FOO]) {\n    totalCount\n    edges {\n      node {\n        __typename\n        id\n        uuid\n        name\n        type\n      }\n    }\n  }\n}\n"
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '5737457703d97e776ee7c4cbfa5de681';

module.exports = node;
