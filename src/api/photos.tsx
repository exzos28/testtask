import axios from 'axios'


export const getPhotosList = async (): Promise<any> => {
    const response = await axios.get('https://picsum.photos/v2/list?limit=5')
    return response.data
}

export const sendPhotos = async (photos: any): Promise<any> => {
    const response = await axios.post('https://echo.htmlacademy.ru/', { photos })
    return response.data
}