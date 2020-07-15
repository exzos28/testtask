import React, { useState, useEffect } from 'react'

import PlusIcon from '~/assets/icons/plus.svg'

import { Container, CardLabel, PlusContainer } from './styles'
import { ImagePickerLayout } from './ImagePickerLayout'
import { CarIcon } from './CarIcon'

interface ICarSidePhoto {
    label: string
    imageIcon: React.ReactNode
    onChange: ({ uri }: { uri: string }) => void
}

export const CarSidePhoto = ({ label, imageIcon, onChange }: ICarSidePhoto) => {

    const [photoSource, setPhotoSource] = useState<any>(null)

    useEffect(() => {
        if (photoSource) onChange(photoSource)
    }, [photoSource])

    return (
        <Container>
            <PlusContainer>
                <PlusIcon width={30} height={30} />
            </PlusContainer>

            <ImagePickerLayout photoSource={photoSource} onChange={setPhotoSource} imageIcon={imageIcon}>
                <CarIcon imageIcon={imageIcon} />

                <CardLabel>{label}</CardLabel>

            </ImagePickerLayout>

        </Container>
    )
}