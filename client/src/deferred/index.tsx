
import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {useFragment,} from 'react-relay/hooks';
import type { deferred$key } from './__generated__/deferred.graphql'

const deferredFragment = graphql`
    fragment deferred on Deferred {
        message
    }
`;

type Props = {
    deferred: deferred$key | null, 
}

export function DeferredComponent(props: Props) {
    const deferredData = useFragment(
        deferredFragment, 
        props.deferred
    );

    return (
        <div>{deferredData?.message || 'Unknow'}</div>
    );
}