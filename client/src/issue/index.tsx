
import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {useFragment,useLazyLoadQuery} from 'react-relay/hooks';
import type { issue$key } from './__generated__/issue.graphql'

const issueFragment = graphql`
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
`;

type Props = {
    data: issue$key | null, 
}

export function IssueComponent(props: Props) {
    const issueData = useFragment(
        issueFragment, 
        props.data
    );

    debugger;

    return (
        <div>{issueData?.issueById?.id|| 'Unknow'}</div>
    );
}