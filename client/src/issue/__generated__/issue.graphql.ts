/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type issue = {
    readonly issueById: {
        readonly id: string;
        readonly project: {
            readonly title: string;
            readonly id: string;
        } | null;
        readonly user: {
            readonly id: string;
            readonly email: string | null;
        } | null;
    } | null;
    readonly " $refType": "issue";
};
export type issue$data = issue;
export type issue$key = {
    readonly " $data"?: issue$data;
    readonly " $fragmentRefs": FragmentRefs<"issue">;
};



const node: ReaderFragment = (function(){
var v0 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "issue",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "issueId",
          "value": "ISSUE-1"
        }
      ],
      "concreteType": "Issue",
      "kind": "LinkedField",
      "name": "issueById",
      "plural": false,
      "selections": [
        (v0/*: any*/),
        {
          "alias": null,
          "args": null,
          "concreteType": "Project",
          "kind": "LinkedField",
          "name": "project",
          "plural": false,
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "title",
              "storageKey": null
            },
            (v0/*: any*/)
          ],
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
            (v0/*: any*/),
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
      "storageKey": "issueById(issueId:\"ISSUE-1\")"
    }
  ],
  "type": "Query",
  "abstractKey": null
};
})();
(node as any).hash = '3036d8d63edc84a907b64026b1ac193d';
export default node;
