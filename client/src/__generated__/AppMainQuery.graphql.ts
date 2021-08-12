/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type AppMainQueryVariables = {};
export type AppMainQueryResponse = {
    readonly hello: {
        readonly " $fragmentRefs": FragmentRefs<"hello">;
    };
    readonly deferred: {
        readonly " $fragmentRefs": FragmentRefs<"deferred">;
    };
};
export type AppMainQuery = {
    readonly response: AppMainQueryResponse;
    readonly variables: AppMainQueryVariables;
};



/*
query AppMainQuery {
  hello {
    ...hello
  }
  deferred {
    ...deferred @custom
  }
}

fragment deferred on Deferred {
  message
}

fragment hello on Hello {
  message
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "message",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "AppMainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Hello",
        "kind": "LinkedField",
        "name": "hello",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "hello"
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Deferred",
        "kind": "LinkedField",
        "name": "deferred",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "deferred"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "AppMainQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Hello",
        "kind": "LinkedField",
        "name": "hello",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      },
      {
        "alias": null,
        "args": null,
        "concreteType": "Deferred",
        "kind": "LinkedField",
        "name": "deferred",
        "plural": false,
        "selections": (v0/*: any*/),
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "69d42559b8469eef88d75e694d078bed",
    "id": null,
    "metadata": {},
    "name": "AppMainQuery",
    "operationKind": "query",
    "text": "query AppMainQuery {\n  hello {\n    ...hello\n  }\n  deferred {\n    ...deferred @custom\n  }\n}\n\nfragment deferred on Deferred {\n  message\n}\n\nfragment hello on Hello {\n  message\n}\n"
  }
};
})();
(node as any).hash = 'd8196a88bd997a3c7a9f8278a5706b7b';
export default node;
