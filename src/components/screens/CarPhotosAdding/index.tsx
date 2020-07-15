import React from 'react'
import DefaultLayout from '~/layout/Default'
import { SectionParams } from '~/components/common/SectionParams'
import { PhotosForm } from './PhotosForm'
import { View } from 'react-native'
import { RootState } from '~/redux/store'

export const CarPhotosAdding = () => {

    return (
        <DefaultLayout>
            <View style={{
                paddingTop: 20
            }}>
                <SectionParams component={<PhotosForm />} title='Car photos adding' />
            </View>
        </DefaultLayout>
    )
}