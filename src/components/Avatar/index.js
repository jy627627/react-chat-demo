import React from "react";
import face from '../../images/face.jpg'
import { AvatarClip, AvatarImage, StatusIcon, StyleAvatar } from './style'

export default function Avatar() {
    return (
        <StyleAvatar>
            <StatusIcon></StatusIcon>
            <AvatarClip>
                <AvatarImage src={face} alt="place"/>
            </AvatarClip>
        </StyleAvatar>
    )
}
