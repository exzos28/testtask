import React from 'react'
import DefaultLayout from '~/layout/Default'
import { Paper } from '~/template'
import { Image } from 'react-native'
import { useRoute } from '@react-navigation/native'

import { Dimensions } from 'react-native'

const windowHeight = Dimensions.get('window').height - 200

export const ImageView = () => {
    const route = useRoute()
    const uri = route && route.params?.uri

    return (
        <DefaultLayout>
            <Paper styleContainer={{ marginTop: 20, height: windowHeight }}>
                <Image style={{ flex: 1, resizeMode: 'contain' }} source={{ uri }} />
            </Paper>
        </DefaultLayout>
    )
}