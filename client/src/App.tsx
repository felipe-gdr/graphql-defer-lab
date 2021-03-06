import React, {Suspense} from 'react';
import './App.css';
import { graphql } from 'babel-plugin-relay/macro';
import {loadQuery, RelayEnvironmentProvider, usePreloadedQuery,} from 'react-relay/hooks';
import RelayEnvironment from './RelayEnvironment';
import type { AppMainQuery } from './__generated__/AppMainQuery.graphql'
import { UserComponent } from './user'
import { IssueComponent } from './issue'
import { ProjectComponent } from './project'
import { Loading } from './styling/loading';

// Define a query
const MainQuery = graphql`
    query AppMainQuery($userId: ID!) {
        ...user
        ...issue @defer(label: "issueDefer")
        ...project @defer(label: "projectDefer")
    }
`;

// Immediately load the query as our app starts. For a real app, we'd move this
// into our routing configuration, preloading data as we transition to new routes.
const preloadedQuery = loadQuery(RelayEnvironment, MainQuery, {
    userId: 'ari:cloud:user-service:123:user/USER-1',
    issueId: 'ISSUE-1'
});

// Inner component that reads the preloaded query results via `usePreloadedQuery()`.
// This works as follows:
// - If the query has completed, it returns the results of the query.
// - If the query is still pending, it "suspends" (indicates to React that the
//   component isn't ready to render yet). This will show the nearest <Suspense>
//   fallback.
// - If the query failed, it throws the failure error. For simplicity we aren't
//   handling the failure case here.
function App(props: any) {
    const data = usePreloadedQuery<AppMainQuery>(MainQuery, props.preloadedQuery);

    return (
        <div className="App">
            <header className="App-header">
                {data && <UserComponent data={data} /> }
                {data && <Suspense fallback={<Loading size="big" />}><IssueComponent data={data} /></Suspense> }
                {data && <Suspense fallback={<Loading />}><ProjectComponent data={data} /></Suspense> }
            </header>
        </div>
    );
}

// The above component needs to know how to access the Relay environment, and we
// need to specify a fallback in case it suspends:
// - <RelayEnvironmentProvider> tells child components how to talk to the current
//   Relay Environment instance
// - <Suspense> specifies a fallback in case a child suspends.
function AppRoot(props: any) {
    return (
        <RelayEnvironmentProvider environment={RelayEnvironment}>
            <Suspense fallback={''}>
                <App preloadedQuery={preloadedQuery}/>
            </Suspense>
        </RelayEnvironmentProvider>
    );
}

export default AppRoot;