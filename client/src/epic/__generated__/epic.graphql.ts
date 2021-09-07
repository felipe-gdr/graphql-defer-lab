/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type epic = {
    readonly jiraEpic: {
        readonly title: string | null;
    } | null;
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
      "concreteType": "JiraEpic",
      "kind": "LinkedField",
      "name": "jiraEpic",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Issue",
  "abstractKey": null
};
(node as any).hash = '38c2f5bc486c457f2974f8ce3dc87ea2';
export default node;
