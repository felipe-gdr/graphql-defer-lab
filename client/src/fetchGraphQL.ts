import { fetchMultipart } from "./fetch-multipart";
import { GraphQLResponse, Observable } from "relay-runtime";

const headers =   {
  "Authorization": "",
  "User-Context": "",
  "X-B3-TraceId": "TRACE_12345"
} 

export function fetchGraphQLWithDeferred(
  query: string,
  variables = {}
): Observable<GraphQLResponse> {
  return Observable.create((sink) => {
      // @ts-ignore
    fetchMultipart("http://localhost:8080/public/graphql/defer", {
      method: "POST",
      headers: {
        'content-type': 'application/json',
        ...headers,
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      // @ts-ignore
      onNext: (parts) => {
        // @ts-ignore
        sink.next(parts);
      },
      // @ts-ignore
      onError: (err) => {
        // @ts-ignore
        sink.error(err);
      },
      onComplete: () => {
        sink.complete();
      },
    });
  });
}
