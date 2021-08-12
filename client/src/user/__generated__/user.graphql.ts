/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type user = {
    readonly id: string;
    readonly email: string | null;
    readonly " $refType": "user";
};
export type user$data = user;
export type user$key = {
    readonly " $data"?: user$data;
    readonly " $fragmentRefs": FragmentRefs<"user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "user",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "email",
      "storageKey": null
    }
  ],
  "type": "TestUser",
  "abstractKey": null
};
(node as any).hash = 'a896a10937cfc1af6b7c7661b371026e';
export default node;
