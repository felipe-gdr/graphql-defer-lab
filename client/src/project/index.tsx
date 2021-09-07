
import React from 'react';
import { graphql } from 'babel-plugin-relay/macro';
import {useFragment,} from 'react-relay/hooks';
import type { project$key } from './__generated__/project.graphql'
import { Section } from '../styling/section'

const projectFragment = graphql`
    fragment project on Query {
        project: jiraProject(projectId:"1") {
            projectId
            title
        } 
    }
`;

type Props = {
    data: project$key | null 
}

export function ProjectComponent(props: Props) {
    const projectData = useFragment(
        projectFragment, 
        props.data
    );

    return (
        <Section title="Project">title: {projectData?.project?.title || 'Unknow'}</Section>
    );
}