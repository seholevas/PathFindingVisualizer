import React from 'react'

export const BaseNode = ({
    children,
    className,
    tag = "div",
    ...props
}) => {
    const Tag = tag;
    return (
        <Tag className={className}{...props}>
            {children}
        </Tag>
    );
}

