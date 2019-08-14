import React from 'react';

export function mapElements(children, cb) {
    let index = 0;

    return React.Children.map(children, (child) => {
        return React.isValidElement(child) ? cb(child, index++) : child;
    });
}
