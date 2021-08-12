
import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {useFragment,} from 'react-relay/hooks';
import type { hello$key } from './__generated__/hello.graphql'

const helloFragment = graphql`
    fragment hello on Hello {
        message
    }
`;

type Props = {
    hello: hello$key | null, 
}

export function HelloComponent(props: Props) {
    const helloData = useFragment(
        helloFragment, 
        props.hello
    );

    return (
        <div>{helloData?.message || 'Unknow'}</div>
    );
}