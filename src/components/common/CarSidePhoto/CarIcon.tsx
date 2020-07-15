import React from 'react'

import { CardIconContainer } from './styles'

interface ICarIcon {
    imageIcon: React.ReactNode
}

export const CarIcon = ({ imageIcon }: ICarIcon) => (
    <CardIconContainer>
        {imageIcon}
    </CardIconContainer>
)