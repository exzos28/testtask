import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'

import { SmallCardIcon } from './styles'

import ImagePicker from 'react-native-image-picker'

interface IImagePickerContainer {
    photoSource: string | null
    children: React.ReactNode
    onChange: ({ uri }: { uri: string }) => void
    imageIcon: React.ReactNode
}

export const ImagePickerLayout = ({ photoSource, children, onChange, imageIcon }: IImagePickerContainer) => {

    const selectPhotoTapped = () => {
        const options = {
            quality: 1.0,
            maxWidth: 500,
            maxHeight: 500,
            storageOptions: {
                skipBackup: true,
            },
            cropping: true
        }

        ImagePicker.showImagePicker(options, response => {
            if (response.didCancel) {
                console.log('User cancelled photo picker')
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error)
            } else if (response.customButton) {
                console.log('User tapped custom button: ', response.customButton)
            } else {
                let source = { uri: response.uri }

                // You can also display the image using data:
                // let source = { uri: 'data:image/jpegbase64,' + response.data }

                onChange(source)
            }
        })
    }

    return (
        <TouchableOpacity onPress={selectPhotoTapped}>
            {photoSource === null ? (
                children
            ) : (
                    <>
                        <SmallCardIcon>
                            {imageIcon}
                        </SmallCardIcon>
                        <Image style={{ height: '100%', width: '100%' }} source={photoSource} />
                    </>
                )}
        </TouchableOpacity>
    )
}