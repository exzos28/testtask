import React from 'react'

import { SectionContainer, TitleContainer, Title, BodyContainer } from './styles'
import { Paper } from '~/template'

interface ISectionParams {
    title?: string
    component: React.ReactNode
    renderTitle?: () => React.ReactNode
}

export const SectionParams = ({ title, component, renderTitle }: ISectionParams) => {

    const _renderTitle = () => {
        if (renderTitle !== undefined)
            return renderTitle()

        if (title)
            return (
                <TitleContainer>
                    <Title>{title}</Title>
                </TitleContainer>
            )
        return null
    }

    return (
        <SectionContainer>
            <Paper>
                {_renderTitle()}
                <BodyContainer>
                    {component}
                </BodyContainer>
            </Paper>
        </SectionContainer>
    )
}