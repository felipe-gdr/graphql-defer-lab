/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppMainQueryVariables = {
    userId: string;
};
export type AppMainQueryResponse = {
    readonly user: {
        readonly " $fragmentRefs": FragmentRefs<"user">;
    } | null;
    readonly " $fragmentRefs": FragmentRefs<"issue">;
};
export type AppMainQuery = {
    readonly response: AppMainQueryResponse;
    readonly variables: AppMainQueryVariables;
};



/*
query AppMainQuery(
  $userId: ID!
) {
  user: userById(userId: $userId) {
    ...user
    id
  }
  ...issue @defer(label: "AppMainQuery$defer$issueDefer")
}

fragment issue on Query {
  issueById(issueId: "ISSUE-1") {
    id
    project {
      title
      id
    }
    user {
      id
      email
    }
  }
}

fragment user on TestUser {
  id
  email
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "userId"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "userId",
    "variableName": "userId"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v3 = [
  (v2/*: any*/),
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "email",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMainQuery",
    "selections": [
      {
        "alias": "user",
        "args": (v1/*: any*/),
        "concreteType": "TestUser",
        "kind": "LinkedField",
        "name": "userById",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "user"
          }
        ],
        "storageKey": null
      },
      {
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "issue"
          }
        ]
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "AppMainQuery",
    "selections": [
      {
        "alias": "user",
        "args": (v1/*: any*/),
        "concreteType": "TestUser",
        "kind": "LinkedField",
        "name": "userById",
        "plural": false,
        "selections": (v3/*: any*/),
        "storageKey": null
      },
      {
        "if": null,
        "kind": "Defer",
        "label": "AppMainQuery$defer$issueDefer",
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
              (v2/*: any*/),
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
                  (v2/*: any*/)
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
                "selections": (v3/*: any*/),
                "storageKey": null
              }
            ],
            "storageKey": "issueById(issueId:\"ISSUE-1\")"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "422dd127b16318bbfcb30b6c7f6e0d76",
    "id": null,
    "metadata": {},
    "name": "AppMainQuery",
    "operationKind": "query",
    "text": "query AppMainQuery(\n  $userId: ID!\n) {\n  user: userById(userId: $userId) {\n    ...user\n    id\n  }\n  ...issue @defer(label: \"AppMainQuery$defer$issueDefer\")\n}\n\nfragment issue on Query {\n  issueById(issueId: \"ISSUE-1\") {\n    id\n    project {\n      title\n      id\n    }\n    user {\n      id\n      email\n    }\n  }\n}\n\nfragment user on TestUser {\n  id\n  email\n}\n"
  }
};
})();
(node as any).hash = 'be270b1126f551e2b80a86fbefad24c6';
export default node;
