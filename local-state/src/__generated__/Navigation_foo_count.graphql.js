/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Navigation_foo_count$ref: FragmentReference;
declare export opaque type Navigation_foo_count$fragmentType: Navigation_foo_count$ref;
export type Navigation_foo_count = {|
  +totalCount: number,
  +$refType: Navigation_foo_count$ref,
|};
export type Navigation_foo_count$data = Navigation_foo_count;
export type Navigation_foo_count$key = {
  +$data?: Navigation_foo_count$data,
  +$fragmentRefs: Navigation_foo_count$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "Navigation_foo_count",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "totalCount",
      "storageKey": null
    }
  ],
  "type": "EntityConnection"
};
// prettier-ignore
(node/*: any*/).hash = '54a1e351326b9781b3049e7403c84305';

module.exports = node;
