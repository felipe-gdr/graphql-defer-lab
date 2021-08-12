/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type deferred = {
    readonly message: string | null;
    readonly " $refType": "deferred";
};
export type deferred$data = deferred;
export type deferred$key = {
    readonly " $data"?: deferred$data;
    readonly " $fragmentRefs": FragmentRefs<"deferred">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "deferred",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Deferred",
  "abstractKey": null
};
(node as any).hash = '7af427d282cd4b0ec3604c48de0dc9b3';
export default node;
