import React from 'react'

import { Container, TextTouchableContainer, ButtonText } from './styles'

import SubmitIcon from './icons/submitIcon.svg'
import { StyleProp, ViewStyle } from 'react-native'
import { ThemeProvider } from 'styled-components'

interface IButton {
    text?: string
    fluid?: boolean
    onPress?: () => void
    disabled?: boolean
    containerStyle?: StyleProp<ViewStyle>

    light?: boolean
}

export const Button = ({
    text,
    fluid,
    onPress,
    disabled = false,
    containerStyle = {},

    light
}: IButton) => {

    const handlePress = () => {
        if (!disabled && onPress)
            onPress()
    }

    const props = { onPress: handlePress }
    const themeProps = { disabled, fluid, light }
    return (
        <Container style={containerStyle}>
            <ThemeProvider theme={themeProps}>
                <TextTouchableContainer {...props}>
                    <ButtonText>{text}</ButtonText>
                </TextTouchableContainer>
            </ThemeProvider>
        </Container>
    )
}