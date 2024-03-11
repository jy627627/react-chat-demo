---
to: src/components/<%= name %>/index.js
---


import React from "react";
import Style<% name %> from './style'
import PropTypes from "prop-types";

export default function <%= name %>({
    children,
    ...rest
}) {

    <%= name %>.prototype = {
       children: PropTypes.any
    }

    return (
        <Style<%= name %> {...rest}>
           { children }
        </Style<%= name %>>
    )
}
