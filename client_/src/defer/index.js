import fetchMultipart from 'fetch-multipart-graphql';
import { Observable } from 'relay-runtime';

const query = `
  {
    hello
    ... on Query @defer(label: "myDefer") {
      deferred
    }
  }
  `


function fetchQuery(query, variables = {}) {
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
            onNext: parts => sink.next(parts),
            onError: err => sink.error(err),
            onComplete: () => sink.complete(),
        });
    });
}

fetchQuery(query)
    .subscribe({
        start: () => {console.log('start')},
        complete: () => {console.log('complete')},
        error: (error) => {console.log('error: ', error)},
        next: (data) => {console.log('data: ', data)}
    });