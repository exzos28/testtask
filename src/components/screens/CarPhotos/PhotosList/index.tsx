import React, { useState, useEffect } from 'react'
import { PhotosListContainer, ImageContainer } from './styles'
import { ActivityIndicator } from 'react-native'
import { LazyImage } from '~/components/common/LazyImage'

import { getPhotosList } from '~/api/photos'
import { useSelector } from 'react-redux'
import { RootState } from '~/redux/store'
import { useNavigation } from '@react-navigation/native'

export const PhotosList = () => {
    const navigation = useNavigation()

    const photos = useSelector((state: RootState) => state.photos.data)

    return (
        <PhotosListContainer>
            {photos.map((photo, i) => (
                <ImageContainer key={i} onPress={() => navigation.navigate('ImageView', { uri: photo })}>
                    <LazyImage style={{ width: 120 }} key={i} source={{ uri: photo }} />
                </ImageContainer>
            ))}
        </PhotosListContainer>
    )
}