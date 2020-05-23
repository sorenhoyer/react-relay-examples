/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
export type EntityType = "BAR" | "BAZ" | "FOO" | "%future added value";
import type { FragmentReference } from "relay-runtime";
declare export opaque type Navigation_currentFoo$ref: FragmentReference;
declare export opaque type Navigation_currentFoo$fragmentType: Navigation_currentFoo$ref;
export type Navigation_currentFoo = {|
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
  +$refType: Navigation_currentFoo$ref,
|};
export type Navigation_currentFoo$data = Navigation_currentFoo;
export type Navigation_currentFoo$key = {
  +$data?: Navigation_currentFoo$data,
  +$fragmentRefs: Navigation_currentFoo$ref,
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
  "name": "Navigation_currentFoo",
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
      "storageKey": "entities(types:[\"BAR\",\"BAZ\"])"
    }
  ],
  "type": "Foo"
};
})();
// prettier-ignore
(node/*: any*/).hash = '89db765366c93665643cb12f8f180a45';

module.exports = node;
