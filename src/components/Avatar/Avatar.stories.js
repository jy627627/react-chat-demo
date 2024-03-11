import React from 'react'
import Avatar from '.'
import face from 'images/face.jpg'
import 'story.css'

export default {
    title: 'Avatar',
    component: Avatar
}

export const Default = () => {
    return (
        <Avatar src={face}/>
    )
}

export const Sizes = () => {
    return (
        <div className={'row-elements'}>
            <Avatar src={face} size="68px"/>
            <Avatar src={face} size="78px"/>
            <Avatar src={face} size="88px"/>
            <Avatar src={face} size="28px"/>
        </div>
    )
}

export const WithStatus = () => {
    return (
        <div className={'row-elements'}>
            <Avatar src={face} status="online" size="68px"/>
            <Avatar src={face} status="offline" size="78px"/>
            <Avatar src={face} status="offline" size="88px" statusIconSize="20px"/>
        </div>
    )
}

