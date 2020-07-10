import React from 'react'

export const BaseCTA = ({
    children,
    className,
    tag = "button",
    ...props
}) => {
    const Tag = tag;
    return (
        <Tag className={className}{...props}>
            {children}
        </Tag>
    );
}

