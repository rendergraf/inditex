import {
    FETCH_PODCAST_REQUEST,
    FETCH_PODCAST_SUCCESS,
    FETCH_PODCAST_FAILURE,
} from './podcastTypes';

const initialState = {
    loading: false,
    podcast: {},
    error: null,
};

const reducerPodcast = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PODCAST_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PODCAST_SUCCESS:
            return {
                ...state,
                loading: false,
                podcast: action.payload,
            };
        case FETCH_PODCAST_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducerPodcast;
