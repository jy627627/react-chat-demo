import styled, { css } from 'styled-components'

const circleMixinFunc = (color, size="8px") => css`
  content: "";
  display: block;
  position: absolute;
  width: ${size};
  height: ${size};
  border-radius: 50%;
  background: ${color};
`

const StyleAvatar = styled.div`
  position: relative;
`

const StatusIcon = styled.div`
  position: absolute;
  left: 2px;
  top: 4px;

  &::before {
    ${({size}) => circleMixinFunc('white', size)}
    transform: scale(2);
  }

  &::after {
    ${( { theme,status, size } ) => {
        return status === 'online' 
                ? circleMixinFunc(theme.green, size)
                : status === 'offline' 
                        ? circleMixinFunc(theme.gray, size) 
                        : ''
    }
  }

`

const AvatarClip = styled.div`
  width: ${({size}) => size};
  height: ${({size}) => size};
  border-radius: 50%;
  overflow: hidden;
`

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export { StyleAvatar, StatusIcon, AvatarClip, AvatarImage }
