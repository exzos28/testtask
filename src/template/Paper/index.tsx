import React from 'react'

import { PaperContainer, PaperInner } from './styles'
import { StyleProp, ViewStyle } from 'react-native'

interface IPaper {
    children: React.ReactNode
    styleContainer: StyleProp<ViewStyle>
}

export const Paper = ({ children, styleContainer }: IPaper) => {
    return (
        <PaperContainer>
            <PaperInner style={styleContainer}>
                {children}
            </PaperInner>
        </PaperContainer>
    )
}