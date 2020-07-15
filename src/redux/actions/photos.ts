import {
    SEND_PHOTOS_START,
    SEND_PHOTOS_SUCCESS,
    SEND_PHOTOS_FAILURE,
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCSS,
    GET_PHOTOS_FAILURE,
} from '../types'
import {
    sendPhotos as sendPhotosApi
} from '~/api/photos'


export const sendPhotosAction = (photos: any) => async (dispatch: any) => {
    try {
        dispatch(sendPhotosStart())
        await sendPhotosApi(photos)

        const formatted = Object.keys(photos).map(p => photos[p].uri)

        dispatch(sendPhotosSuccess(formatted))

    } catch (e) {
        console.log('Error', e)
        dispatch(sendPhotosFailure(e))
    }
}


const sendPhotosStart = () => ({
    type: SEND_PHOTOS_START,
})

const sendPhotosSuccess = (photos: any) => ({
    type: SEND_PHOTOS_SUCCESS,
    payload: photos
})

const sendPhotosFailure = (e: any) => ({
    type: SEND_PHOTOS_FAILURE,
    payload: e
})