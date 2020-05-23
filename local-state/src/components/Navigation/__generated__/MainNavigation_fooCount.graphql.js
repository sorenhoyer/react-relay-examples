/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type MainNavigation_fooCount$ref: FragmentReference;
declare export opaque type MainNavigation_fooCount$fragmentType: MainNavigation_fooCount$ref;
export type MainNavigation_fooCount = {|
  +totalCount: number,
  +$refType: MainNavigation_fooCount$ref,
|};
export type MainNavigation_fooCount$data = MainNavigation_fooCount;
export type MainNavigation_fooCount$key = {
  +$data?: MainNavigation_fooCount$data,
  +$fragmentRefs: MainNavigation_fooCount$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "MainNavigation_fooCount",
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
(node/*: any*/).hash = 'e72a84e29203a719cf6e06f2c70e00e4';

module.exports = node;
