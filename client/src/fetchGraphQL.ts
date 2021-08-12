import fetchMultipart from 'fetch-multipart-graphql';
import { GraphQLResponse, Observable } from 'relay-runtime';
import { Sink } from 'relay-runtime/lib/network/RelayObservable';

// your-app-name/src/fetchGraphQL.js
async function fetchGraphQL(text: string, variables: any) {
    const response = await fetch('http://localhost:4044/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    // Get the response as JSON
    return await response.json();
}

function fetchGraphQLWithDeferred(query: string, variables = {}): Observable<GraphQLResponse> {
    return Observable.create(sink => {
        fetchMultipart('http://localhost:4044/graphql', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            }),
            credentials: 'same-origin',
            onNext: parts => { 
                console.log('part', parts)
                // @ts-ignore
                sink.next(parts)
            },
            onError: err => { 
                console.log('error', err)
                // @ts-ignore
                sink.error(err)
            },
            onComplete: () => { 
                console.log('complete')
                sink.complete()
            },
        });
    });
}

async function execute(text: string, variables: any, sink: Sink<any>) {
    console.log('executing.....')
    const response = await fetch('http://localhost:4044/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: text,
            variables,
        }),
    });

    // Get the response as JSON
    const data = await response.json();

    console.log('data', data)

    sink.next(data)
    sink.complete();
}

const fetchGraphQLObs = (
    text: string,
    variables: any
  ) => {
      debugger;
    return Observable.create(sink => {
      execute(text, variables, sink);
    });
  };

export default {
    fetchGraphQL,
    fetchGraphQLWithDeferred,
    fetchGraphQLObs
};