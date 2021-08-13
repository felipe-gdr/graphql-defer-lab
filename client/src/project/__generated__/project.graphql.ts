/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type project = {
    readonly project: {
        readonly projectId: string;
        readonly title: string;
    } | null;
    readonly " $refType": "project";
};
export type project$data = project;
export type project$key = {
    readonly " $data"?: project$data;
    readonly " $fragmentRefs": FragmentRefs<"project">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "project",
  "selections": [
    {
      "alias": "project",
      "args": [
        {
          "kind": "Literal",
          "name": "projectId",
          "value": "1"
        }
      ],
      "concreteType": "JiraProject",
      "kind": "LinkedField",
      "name": "jiraProject",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "projectId",
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "kind": "ScalarField",
          "name": "title",
          "storageKey": null
        }
      ],
      "storageKey": "jiraProject(projectId:\"1\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = 'f9ac443ddf019a695782719e2d379d6f';
export default node;
