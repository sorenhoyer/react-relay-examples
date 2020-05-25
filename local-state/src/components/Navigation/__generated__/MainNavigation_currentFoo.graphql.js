/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainNavigation_currentFoo$ref: FragmentReference;
declare export opaque type MainNavigation_currentFoo$fragmentType: MainNavigation_currentFoo$ref;
export type MainNavigation_currentFoo = {|
  +name: string,
  +entities: ?{|
    +totalCount: number,
    +edges: ?$ReadOnlyArray<?{|
      +node: ?{|
        +uuid: string
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


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainNavigation_currentFoo",
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
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "uuid",
                  "storageKey": null
                }
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
// prettier-ignore
(node/*: any*/).hash = '30764cd99202d8b460956a31110e2830';

module.exports = node;
