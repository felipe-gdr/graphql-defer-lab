/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppMainQueryVariables = {
    userId: string;
};
export type AppMainQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"user" | "issue" | "project">;
};
export type AppMainQuery = {
    readonly response: AppMainQueryResponse;
    readonly variables: AppMainQueryVariables;
};



/*
query AppMainQuery(
  $userId: ID!
) {
  ...user
  ...issue @defer(label: "AppMainQuery$defer$issueDefer")
  ...project @defer(label: "AppMainQuery$defer$projectDefer")
}

fragment epic on JiraEpic {
  title
}

fragment issue on Query {
  issue: issueByAri(issueId: "ari:cloud:jira:myCloud1:issue/2018") {
    id
    user {
      email
      id
    }
    linkedJiraEpic {
      ...epic
      id
    }
  }
}

fragment project on Query {
  project: jiraProject(projectId: "1") {
    projectId
    title
  }
}

fragment user on Query {
  user: userById(userId: $userId) {
    id
    email
  }
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
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "email",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "title",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMainQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "user"
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
      },
      {
        "kind": "Defer",
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "project"
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
          (v1/*: any*/),
          (v2/*: any*/)
        ],
        "storageKey": null
      },
      {
        "if": null,
        "kind": "Defer",
        "label": "AppMainQuery$defer$issueDefer",
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
              (v1/*: any*/),
              {
                "alias": null,
                "args": null,
                "concreteType": "TestUser",
                "kind": "LinkedField",
                "name": "user",
                "plural": false,
                "selections": [
                  (v2/*: any*/),
                  (v1/*: any*/)
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
                  (v3/*: any*/),
                  (v1/*: any*/)
                ],
                "storageKey": null
              }
            ],
            "storageKey": "issueByAri(issueId:\"ari:cloud:jira:myCloud1:issue/2018\")"
          }
        ]
      },
      {
        "if": null,
        "kind": "Defer",
        "label": "AppMainQuery$defer$projectDefer",
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
              (v3/*: any*/)
            ],
            "storageKey": "jiraProject(projectId:\"1\")"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "963b1628118f7847cd60016bf631d048",
    "id": null,
    "metadata": {},
    "name": "AppMainQuery",
    "operationKind": "query",
    "text": "query AppMainQuery(\n  $userId: ID!\n) {\n  ...user\n  ...issue @defer(label: \"AppMainQuery$defer$issueDefer\")\n  ...project @defer(label: \"AppMainQuery$defer$projectDefer\")\n}\n\nfragment epic on JiraEpic {\n  title\n}\n\nfragment issue on Query {\n  issue: issueByAri(issueId: \"ari:cloud:jira:myCloud1:issue/2018\") {\n    id\n    user {\n      email\n      id\n    }\n    linkedJiraEpic {\n      ...epic\n      id\n    }\n  }\n}\n\nfragment project on Query {\n  project: jiraProject(projectId: \"1\") {\n    projectId\n    title\n  }\n}\n\nfragment user on Query {\n  user: userById(userId: $userId) {\n    id\n    email\n  }\n}\n"
  }
};
})();
(node as any).hash = 'ffa79ed19bb712f8588bd4c52ea114b4';
export default node;
