
// const text = `
// ---
// Content-Type: application/json
// Content-Length: 172

// {"data":{"user":{"id":"ari:cloud:user-service:123:user/USER-1","email":"user1@atlassian.com"}},"extensions":{"GRAPHQL_DEFERRED":{}},"label":null,"path":null,"hasNext":true}
// `;

// This is a super simple, or should I say TOO simple, function to extract data from the response chunks.
// The one created by Rob is way more sophisticated but it was not working as I expected. It was resulting 
// in the the "onNext" function to skipped on the first response chunked, and being called just when the 
// second chunk was sent.
export const getData = (text) => {
 return text.split('---')
    .flatMap(part => part.split('\n'))
    // Oversimplistic way of filtering out lines that are not JSON (because they don't start with "{", although NOT all JSON values start with "{"! but in our case here they do)
    .filter(part => part.indexOf('{') === 0)
    .map(JSON.parse)
    // filter the parts that don't have data, like the last one, that has "hasNext: false". Relay doesn't know how to deal with those, apparently.
    .filter(part => !!part.data)
};

// getData(text)

