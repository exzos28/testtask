import React, { useState, useRef } from 'react'

import { Animated, ImageProps } from 'react-native'

import { Image as StyledImage } from './styles'

export const LazyImage = (props: ImageProps) => {
    const [loaded, setLoaded] = useState(false)

    const imageAnimated = useRef(new Animated.Value(0)).current
    const onImageLoaded = () => {
        setLoaded(true)
        Animated.timing(
            imageAnimated,
            {
                toValue: 1,
                duration: 500,
                useNativeDriver: true
            },
        ).start()
    }


    return (
        <StyledImage
            {...props}
            as={Animated.Image}
            onLoad={onImageLoaded}
            style={[
                {
                    opacity: imageAnimated,
                },
                props.style
            ]}
        />
    )
}