import { fetchMultipart } from "./fetch-multipart";
import { GraphQLResponse, Observable } from "relay-runtime";
import { Sink } from "relay-runtime/lib/network/RelayObservable";

const headers =  {
  "Authorization": "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Iml0ZXN0LWNsaWVudC9pdGVzdC1jbGllbnQua2V5In0.eyJpc3MiOiJpdGVzdC1jbGllbnQiLCJzdWIiOiJpdGVzdC1jbGllbnQiLCJhdWQiOiJncmFwaHFsLWdhdGV3YXkiLCJqdGkiOiJkMjBmNDQwZjYzODM1YTgyYjAwOTQzMjVkMzg3NzJhMmQxYTJiMTQyIiwiaWF0IjoxNjI4ODMzMjg4LCJleHAiOjE2Mjg4MzY4ODh9.SL3M4ACh3sgQX9JAtNxKWrdqvMj4zhjZ4vbvEKZSl07LconxdNi7VLf_Df5-XH1lBwwLV1OIwLrW-abaB05vHq-zSANyYYsJMCAW1m5Q0ecl5Br56aHKtNpSrqDtPjA4oykou0_MjiAFYCsi3u-tINaGSKCYy8PwfSjpGjkEqWMzktZvm8Axl33x6wMyijgnLjPVazuVaOJRLqyOQf0lPkodxKnf7LvkW1Xtcmih6iR56Dgpm2C6QfV3BrxGSV2yxj1T81zUiJs7PFyD8Kif9lG211OklmzSYN1zLnt5uxMDbNqBYBSdP6fdvLhRxKUzzh6tSy8DQQFk5xJTjJEMxg",
  "User-Context": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Iml0ZXN0LWNsaWVudC9pdGVzdC1jbGllbnQua2V5In0.eyJpc3MiOiJpdGVzdC1jbGllbnQiLCJzdWIiOiJpdGVzdC1jbGllbnQiLCJhdWQiOiJhdGxhc3NpYW4taW50ZXJuYWwiLCJmaXJzdFBhcnR5Ijp0cnVlLCJzZXNzaW9uSWQiOiI2NjY2NjY2NiIsImFjY291bnRJZCI6InVzZXJJZDEyMzQiLCJqdGkiOiI4ODIxMmU3Zjc5MGZmNjAzOTA2NTJhNTRlOGEyYmRhMGE1MzI1OWJjIiwiaWF0IjoxNjI4ODMzMjg4LCJleHAiOjE2Mjg4MzY4ODh9.KgB71nQRYnfLcoTAViGiAA9AQSuLOEa1kR0Pt4L8xklUmC3ZXB6OebWc3mv6YD0MvKnPYONsk_3_EtPhC1ZVJK-U6qVbEEN7_ka07WSSRG1l6U5VzyIYm34CuQWwNKlOvqpyav-HHqOnt2VzIKhUaEtA5Ujrmqnlndvef8amnrmeBwjbrS8yEgGS5_XGILQlXBtbf_Uhd26qx1YMQrr5yVYvjLtHbrucKCdcn9s6ELhFhgeEYnqZ7rbCqlabkYrXm0JtkxQBBFI5ernm0mK5avF_Ghb-cRths3dxIRzdOOtpZ3pnP-S9CqIx7ZVY7d8HYH8btBxkTI-ylZ0Enmv1lQ",
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
