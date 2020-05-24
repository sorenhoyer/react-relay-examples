/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type EntityType = "BAR" | "BAZ" | "FOO" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainNavigation_currentFoo$ref: FragmentReference;
declare export opaque type MainNavigation_currentFoo$fragmentType: MainNavigation_currentFoo$ref;
export type MainNavigation_currentFoo = {|
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
  +$refType: MainNavigation_currentFoo$ref,
|};
export type MainNavigation_currentFoo$data = MainNavigation_currentFoo;
export type MainNavigation_currentFoo$key = {
  +$data?: MainNavigation_currentFoo$data,
  +$fragmentRefs: MainNavigation_currentFoo$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = (function(){
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
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "type",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainNavigation_currentFoo",
  "selections": [
    (v0/*: any*/),
    (v1/*: any*/),
    (v2/*: any*/),
    (v3/*: any*/),
    {
      "alias": null,
      "args": [
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
      "concreteType": "EntityConnection",
      "kind": "LinkedField",
      "name": "entities",
      "plural": false,
      "selections": [
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
                (v0/*: any*/),
                (v1/*: any*/),
                (v2/*: any*/),
                (v3/*: any*/)
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
  "type": "Foo"
};
})();
// prettier-ignore
(node/*: any*/).hash = 'a96b5fce9b0e7838f517e7cad4cead0e';

module.exports = node;
