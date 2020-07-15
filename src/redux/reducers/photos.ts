import {
    SEND_PHOTOS_START,
    SEND_PHOTOS_SUCCESS,
    SEND_PHOTOS_FAILURE,
    GET_PHOTOS_START,
    GET_PHOTOS_SUCCSS,
    GET_PHOTOS_FAILURE,
} from '../types'

interface IReducer {
    loading: boolean
    sended: boolean
    data: string[] | []
}

const initialState: IReducer = {
    data: [],
    sended: false,
    loading: false
}

const photosReducer = (state = initialState, { type, payload }): IReducer => {
    console.log('payload', payload)
    switch (type) {
        case SEND_PHOTOS_START:
            return {
                ...state,
                sended: false,
                loading: true
            }
        case SEND_PHOTOS_SUCCESS:
            return {
                ...state,
                data: payload,
                loading: false,
                sended: true
            }
        default:
            return {
                ...state
            }
        // case SEND_PHOTOS_FAILURE:
        //     return {
        //         ...state
        //     }
        // case GET_PHOTOS_START:
        //     return {
        //         ...state
        //     }
        // case GET_PHOTOS_SUCCSS:
        //     return {
        //         ...state
        //     }
        // case GET_PHOTOS_FAILURE:
        //     return {
        //         ...state
        //     }
    }
}

export default photosReducer