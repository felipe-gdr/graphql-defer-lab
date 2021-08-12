import { fetchMultipart } from "./fetch-multipart";
import { GraphQLResponse, Observable } from "relay-runtime";
import { Sink } from "relay-runtime/lib/network/RelayObservable";

const headers =  {
    "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Iml0ZXN0LWNsaWVudC9pdGVzdC1jbGllbnQua2V5In0.eyJpc3MiOiJpdGVzdC1jbGllbnQiLCJzdWIiOiJpdGVzdC1jbGllbnQiLCJhdWQiOiJncmFwaHFsLWdhdGV3YXkiLCJqdGkiOiIyZjJmYmRhZGY5ZmE4ZjUyYTBlZGIxYzY3NDgxYTA0ZTBkM2NhNzgwIiwiaWF0IjoxNjI4NzcwMDk4LCJleHAiOjE2Mjg3NzM2OTh9.ZXitzHn_ZR8Q0_rJPDysBrC2ElSHFbeKZnePf7BmRgRYCoKrCiF_adzMHRNca_LlbaveZgaDWNA5Y7bse1HtSS7QRcdP-VW6TeUpRI1mD04of89mcIHB-UbtMcSZgmBJDbJGY_Kn60F4qDsi16YaFxX1xdx_zoEmNOn0s21OT5yLb9RtcivzmNr9xRU9BO9rHjnXxhJO4ENy1LMCk3QzAF9P0h3a1m4Aljx3syK5MGnxo8q_0YIDcWfAUU_0iqfZFd2O2cH5nBa3gJMB2rM4PM2W_UZGLgbFv8YkFbQ-1GA9mQ6ZSRiXU-Q6Pmii_Ew84o44fI4Vjwxtqg5VeoisNA",
    "User-Context": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Iml0ZXN0LWNsaWVudC9pdGVzdC1jbGllbnQua2V5In0.eyJpc3MiOiJpdGVzdC1jbGllbnQiLCJzdWIiOiJpdGVzdC1jbGllbnQiLCJhdWQiOiJhdGxhc3NpYW4taW50ZXJuYWwiLCJmaXJzdFBhcnR5Ijp0cnVlLCJzZXNzaW9uSWQiOiI2NjY2NjY2NiIsImFjY291bnRJZCI6InVzZXJJZDEyMzQiLCJqdGkiOiIyNjBiNmI0YzVmODNmNGFhYzM5ZTBlMzc2MmVlOGNlZjg4Njc5ZTRjIiwiaWF0IjoxNjI4NzcwMDk5LCJleHAiOjE2Mjg3NzM2OTl9.QcmK5pwMcXUhxSnxmEgJSPKQ0cEMdpopnZyhmqwxijTTNR0rjVXtjMhnRpis7eBKMpkk5iMCKzOw2IJacYweXvlN-MArZtqGRwp0iYRa-WxyGPA4sSYRbUMFEmEfV7GTiyuDanhQPZCu2VDZCvOaDYtYYyUHPY5BKrRSeuuV38gZ3yR8r26KEii8WYr5v7b1LvEDnGYO0yz2D4ePOoZf5O4ZpoDyUNGwv57_9p_5UI4obD0pYRIC7lCE7EuokxqDWlznG54v7skGZHeHtHk-5Imp3fh1OeBV7oiUOAE0shKZA4KQAaMth3jVQGc5Ir5bGJGWR60qUBmXF3EhJ181IQ",
    "X-B3-TraceId": "TRACE_12345"
  } 

// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text: string, variables: any) {
  const response = await fetch("http://localhost:4044/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  return await response.json();
}

function fetchGraphQLWithDeferred(
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
        console.log("part", parts);
        // @ts-ignore
        sink.next(parts);
      },
      // @ts-ignore
      onError: (err) => {
        console.log("error", err);
        // @ts-ignore
        sink.error(err);
      },
      onComplete: () => {
        console.log("complete");
        sink.complete();
      },
    });
  });
}

async function execute(text: string, variables: any, sink: Sink<any>) {
  console.log("executing.....");
  const response = await fetch("http://localhost:4044/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: text,
      variables,
    }),
  });

  // Get the response as JSON
  const data = await response.json();

  console.log("data", data);

  sink.next(data);
  sink.complete();
}

const fetchGraphQLObs = (text: string, variables: any) => {
  debugger;
  return Observable.create((sink) => {
    execute(text, variables, sink);
  });
};

export default {
  fetchGraphQL,
  fetchGraphQLWithDeferred,
  fetchGraphQLObs,
};
