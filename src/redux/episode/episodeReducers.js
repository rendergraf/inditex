import {
    FETCH_EPISODE_REQUEST,
    FETCH_EPISODE_SUCCESS,
    FETCH_EPISODE_FAILURE,
} from './episodeTypes';

const initialState = {
    loading: false,
    episode: {},
    error: null,
};

const reducerEpisode = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_EPISODE_REQUEST:
            return {
                ...state,
                loading: true,
                episode: {},
                error: null,
            };
        case FETCH_EPISODE_SUCCESS:
            return {
                ...state,
                loading: false,
                episode: action.payload,
                error: null,
            };
        case FETCH_EPISODE_FAILURE:
            return {
                ...state,
                loading: false,
                episode: {},
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducerEpisode;
