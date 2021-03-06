/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type user = {
    readonly user: {
        readonly id: string;
        readonly email: string | null;
    } | null;
    readonly " $refType": "user";
};
export type user$data = user;
export type user$key = {
    readonly " $data"?: user$data;
    readonly " $fragmentRefs": FragmentRefs<"user">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [
    {
      "kind": "RootArgument",
      "name": "userId"
    }
  ],
  "kind": "Fragment",
  "metadata": null,
  "name": "user",
  "selections": [
    {
      "alias": "user",
      "args": [
        {
          "kind": "Variable",
          "name": "userId",
          "variableName": "userId"
        }
      ],
      "concreteType": "TestUser",
      "kind": "LinkedField",
      "name": "userById",
      "plural": false,
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
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'a735324b2761e44ba6f6d91d3359f086';
export default node;
