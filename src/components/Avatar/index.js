import React from "react";
import face from '../../images/face.jpg'
import { AvatarClip, AvatarImage, StatusIcon, StyleAvatar } from './style'

export default function Avatar({
   src,
   size = '48px',
   status,
   statusIconSize = '8px',
    ...rest
}) {
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
