/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
type MainNavigation_currentFoo$ref = any;
type MainNavigation_fooCount$ref = any;
import type { FragmentReference } from "relay-runtime";
declare export opaque type Navigation_data$ref: FragmentReference;
declare export opaque type Navigation_data$fragmentType: Navigation_data$ref;
export type Navigation_data = {|
  +localState: ?{|
    +currentFoo: ?{|
      +$fragmentRefs: MainNavigation_currentFoo$ref
    |}
  |},
  +fooCount: ?{|
    +$fragmentRefs: MainNavigation_fooCount$ref
  |},
  +$refType: Navigation_data$ref,
|};
export type Navigation_data$data = Navigation_data;
export type Navigation_data$key = {
  +$data?: Navigation_data$data,
  +$fragmentRefs: Navigation_data$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Navigation_data",
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
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MainNavigation_fooCount"
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
                {
                  "args": null,
                  "kind": "FragmentSpread",
                  "name": "MainNavigation_currentFoo"
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
};
// prettier-ignore
(node/*: any*/).hash = 'ad10d1b9c243f7deb4d53cebb66b5bc9';

module.exports = node;
