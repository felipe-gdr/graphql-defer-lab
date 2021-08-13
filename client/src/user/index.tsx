
import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {useFragment,} from 'react-relay/hooks';
import type { user$key } from './__generated__/user.graphql'

const userFragment = graphql`
    fragment user on Query {
        user: userById(userId: $userId) {
            id
            email
        }
    }
`;

type Props = {
    data: user$key | null 
}

export function UserComponent(props: Props) {
    const userData = useFragment(
        userFragment, 
        props.data
    );

    return (
        <div>{userData?.user?.email || 'Unknow'}</div>
    );
}