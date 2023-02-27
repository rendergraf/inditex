import axios from 'axios';

import {
    FETCH_PODCAST_REQUEST,
    FETCH_PODCAST_SUCCESS,
    FETCH_PODCAST_FAILURE,
} from './podcastTypes';

const proxyHost = process.env.REACT_APP_PROXY_HOST;
const proxyPort = process.env.REACT_APP_PROXY_PORT;

export const fetchPodcast = (podcastId) => {
    return async (dispatch) => {
        dispatch({ type: FETCH_PODCAST_REQUEST });
        try {
            const response = await axios.get('https://api.allorigins.win/get', {
                params: {
                    url: `https://itunes.apple.com/lookup?id=${podcastId}&entity=podcastEpisode`,
                },
                proxy: {
                    host: proxyHost,
                    port: proxyPort,
                },
            });
            const podcast = JSON.parse(response.data.contents);
            dispatch({ type: FETCH_PODCAST_SUCCESS, payload: podcast });
        } catch (error) {
            console.log('Error: ', error);
            dispatch({ type: FETCH_PODCAST_FAILURE, payload: error.message });
        }
    };
};
