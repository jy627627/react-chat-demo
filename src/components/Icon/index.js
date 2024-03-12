import React from "react";
import Style from './style'
import PropTypes from "prop-types";

export default function Icon({
    ...rest
}) {

    Icon.prototype = {
    }

    return (
        <StyleIcon {...rest}>
          hi
        </StyleIcon>
    )
}
