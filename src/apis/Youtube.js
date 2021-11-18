import axios from "axios"

const KEY = 'AIzaSyDvX8bAbE0q8FBPfz1L3_daaamaJDfr3ls'                              

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})