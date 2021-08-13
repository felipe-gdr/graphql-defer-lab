/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type issue = {
    readonly issue: {
        readonly id: string;
        readonly user: {
            readonly email: string | null;
        } | null;
        readonly linkedJiraEpic: {
            readonly " $fragmentRefs": FragmentRefs<"epic">;
        } | null;
    } | null;
    readonly " $refType": "issue";
};
export type issue$data = issue;
export type issue$key = {
    readonly " $data"?: issue$data;
    readonly " $fragmentRefs": FragmentRefs<"issue">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "issue",
  "selections": [
    {
      "alias": "issue",
      "args": [
        {
          "kind": "Literal",
          "name": "issueId",
          "value": "ari:cloud:jira:myCloud1:issue/2018"
        }
      ],
      "concreteType": "Issue",
      "kind": "LinkedField",
      "name": "issueByAri",
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
          "concreteType": "TestUser",
          "kind": "LinkedField",
          "name": "user",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "email",
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "alias": null,
          "args": null,
          "concreteType": "JiraEpic",
          "kind": "LinkedField",
          "name": "linkedJiraEpic",
          "plural": false,
          "selections": [
            {
              "args": null,
              "kind": "FragmentSpread",
              "name": "epic"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": "issueByAri(issueId:\"ari:cloud:jira:myCloud1:issue/2018\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '73fe64a27f03f7951d0ca5d44310a315';
export default node;
