import React from 'react'
import { useSelector } from 'react-redux'
import DefaultLayout from '~/layout/Default'
import { SectionParams } from '~/components/common/SectionParams'
import { PhotosList } from './PhotosList'
import { View } from 'react-native'
import { RootState } from '~/redux/store'

export const CarPhotos = () => {

    const photos = useSelector((state: RootState) => state.photos.data)

    return (
        <DefaultLayout>
            <View style={{
                paddingTop: 20
            }}>
                <SectionParams component={<PhotosList />} title='Car photos' />
            </View>
        </DefaultLayout>
    )
}