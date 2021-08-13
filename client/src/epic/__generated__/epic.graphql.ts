/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type epic = {
    readonly title: string | null;
    readonly " $refType": "epic";
};
export type epic$data = epic;
export type epic$key = {
    readonly " $data"?: epic$data;
    readonly " $fragmentRefs": FragmentRefs<"epic">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "epic",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "title",
      "storageKey": null
    }
  ],
  "type": "JiraEpic",
  "abstractKey": null
};
(node as any).hash = '128dd5d31929ffe66d408d3562f803b1';
export default node;
