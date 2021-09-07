import React from 'react'
import { Section } from './section'

export const Loading = (props) => 
    <Section {...props}>
        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </Section>