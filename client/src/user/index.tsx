
import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {useFragment,} from 'react-relay/hooks';
import type { user$key } from './__generated__/user.graphql'
import { Section } from '../styling/section'

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
        <Section title="User">email: {userData?.user?.email || 'Unknow'}</Section>
    );
}