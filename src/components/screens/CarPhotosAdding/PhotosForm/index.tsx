import React from 'react'
import { PhotosFormContainer, CardContainer, CardsListContainer } from './styles'
import { CarSidePhoto } from '~/components/common/CarSidePhoto'

import { useFormik } from 'formik'
import * as Yup from 'yup'

import LeftSideIcon from '~/assets/icons/leftside.svg'
import { Button } from '~/components/common'
import { sendPhotosAction } from '~/redux/actions/photos'
import { useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

const mockCarPhotos = {
    left: {
        id: 1,
        label: 'Left side',
        imageIcon: <LeftSideIcon width='100%' height='100%' />
    },
    right: {
        id: 2,
        label: 'Right side',
        imageIcon: <LeftSideIcon width='100%' height='100%' />
    },
    back: {
        id: 3,
        label: 'Back side',
        imageIcon: <LeftSideIcon width='100%' height='100%' />
    },
    front: {
        id: 4,
        label: 'Front side',
        imageIcon: <LeftSideIcon width='100%' height='100%' />
    },
    inside: {
        id: 5,
        label: 'Inside',
        imageIcon: <LeftSideIcon width='100%' height='100%' />
    }
}

export const PhotosForm = () => {
    const navigation = useNavigation()
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            left: '',
            right: '',
            back: '',
            front: '',
            inside: ''
        },
        validationSchema: Yup.object({
            left: Yup.string()
                .required('Обязательное поле'),
            right: Yup.string()
                .required('Обязательное поле'),
            back: Yup.string()
                .required('Обязательное поле'),
            front: Yup.string()
                .required('Обязательное поле'),
            inside: Yup.string()
                .required('Обязательное поле'),
        }),
        onSubmit: async values => {
            dispatch(sendPhotosAction(values))
            navigation.navigate('CarPhotos')
        },
    })

    console.log(formik.errors)

    return (
        <PhotosFormContainer>

            <CardsListContainer>
                {Object.keys(mockCarPhotos).map(car => {
                    const p = mockCarPhotos[car]
                    return (
                        <CardContainer key={p.id}>
                            <CarSidePhoto label={p.label} imageIcon={p.imageIcon} onChange={(photo) => formik.setFieldValue(car, photo)} />
                        </CardContainer>
                    )
                })}
            </CardsListContainer>

            <Button containerStyle={{ alignItems: 'center' }} text='Send!' onPress={() => formik.handleSubmit()} disabled={!(formik.isValid && formik.dirty)} />
        </PhotosFormContainer>
    )
}