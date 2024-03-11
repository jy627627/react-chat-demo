import React from "react";
import { AvatarClip, AvatarImage, StatusIcon, StyleAvatar } from './style'
import PropTypes from "prop-types";

export default function Avatar({
   src,
   size = '48px',
   status,
   statusIconSize = '8px',
    ...rest
}) {

    Avatar.prototype = {
        src: PropTypes.string.isRequired,
        size: PropTypes.string,
        status: PropTypes.oneOf(['online', 'offline']),
        statusIconSize: PropTypes.string,
    }

    return (
        <StyleAvatar {...rest}>
            {status && (
                <StatusIcon status={status} size={statusIconSize}></StatusIcon>
            )}
            <AvatarClip size={size}>
                <AvatarImage src={src} alt="place"/>
            </AvatarClip>
        </StyleAvatar>
    )
}
