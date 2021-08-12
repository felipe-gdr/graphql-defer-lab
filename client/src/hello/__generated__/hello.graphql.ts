/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type hello = {
    readonly message: string | null;
    readonly " $refType": "hello";
};
export type hello$data = hello;
export type hello$key = {
    readonly " $data"?: hello$data;
    readonly " $fragmentRefs": FragmentRefs<"hello">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "hello",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "message",
      "storageKey": null
    }
  ],
  "type": "Hello",
  "abstractKey": null
};
(node as any).hash = '4ab48d329475351ac5ede88d781a8396';
export default node;
