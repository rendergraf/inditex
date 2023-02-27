import axios from 'axios';

import {
    FETCH_PODCASTS_REQUEST,
    FETCH_PODCASTS_SUCCESS,
    FETCH_PODCASTS_FAILURE,
    SEARCH_RESULTS_REQUEST,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE,
} from './podcastsTypes';

const apiUrl = process.env.REACT_API_ITUNES;
const corsProxyUrl = process.env.REACT_CORS_PROXY_URL;

export const fetchPodcasts = () => {
    return async (dispatch) => {
        const storedData = JSON.parse(localStorage.getItem('podcasts'));
        const storedTime = localStorage.getItem('time');
        // Check if the podcast exists in localStorage
        if (storedData && storedTime) {
            // change to loading true
            dispatch({ type: FETCH_PODCASTS_REQUEST });
            const currentTime = new Date().getTime();
            const timeDiff = (currentTime - storedTime) / (1000 * 60 * 60 * 24);
            if (timeDiff < 1) {
                dispatch({ type: FETCH_PODCASTS_SUCCESS, payload: storedData });
                return; // exit
            }
        }
        // if doesn`t exists change to loading true
        dispatch({ type: FETCH_PODCASTS_REQUEST });

        try {
            const response = await axios(corsProxyUrl + apiUrl);
            const podcasts = response.data.feed.entry;
            dispatch({ type: FETCH_PODCASTS_SUCCESS, payload: podcasts });
            // Save in localStorage podcasts and date
            localStorage.setItem('podcasts', JSON.stringify(podcasts));
            localStorage.setItem('time', new Date().getTime());
        } catch (error) {
            dispatch({ type: FETCH_PODCASTS_FAILURE, payload: error.message });
        }
    };
};

export const searchPodcasts = (term) => {
    return (dispatch) => {
        dispatch({ type: SEARCH_RESULTS_REQUEST, payload: term });
    };
};

export const filterPodcasts = (list) => {
    return (dispatch) => {
        dispatch({ type: SEARCH_RESULTS_SUCCESS, payload: list });
    };
};

export const setErrorSearches = (error) => {
    return (dispatch) => {
        dispatch({ type: SEARCH_RESULTS_FAILURE, payload: error });
    };
};
