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
  +node: ?{|
    +$fragmentRefs: MainNavigation_currentFoo$ref
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
  "argumentDefinitions": [
    {
      "defaultValue": null,
      "kind": "LocalArgument",
      "name": "currentFooId",
      "type": "ID!"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "Navigation_data",
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
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MainNavigation_currentFoo"
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
        {
          "args": null,
          "kind": "FragmentSpread",
          "name": "MainNavigation_fooCount"
        }
      ],
      "storageKey": "entities(first:2,types:[\"FOO\"])"
    }
  ],
  "type": "Query"
};
// prettier-ignore
(node/*: any*/).hash = '087f4d88725d2587f5dc1b665f7582b9';

module.exports = node;
