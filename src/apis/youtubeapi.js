import axios from 'axios';

const KEY = 'AIzaSyAbLk_8UyNMVrQbrZQ070rVWASoT0wj3wo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});

