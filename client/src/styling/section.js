import React from 'react'

export const Section = ({ title, children, size="normal", hint="top-level field" }) => 
    <div className={`section ${size}`}>
        <div className="hint">
            {hint}
        </div>
        <div className="header">
            {title}
        </div>
        <div className="content">
            {children}
        </div>

    </div>