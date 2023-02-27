import {
    FETCH_PODCASTS_REQUEST,
    FETCH_PODCASTS_SUCCESS,
    FETCH_PODCASTS_FAILURE,
    SEARCH_RESULTS_REQUEST,
    SEARCH_RESULTS_SUCCESS,
    SEARCH_RESULTS_FAILURE,
} from './podcastsTypes';

const initialState = {
    loading: false,
    podcasts: [],
    error: null,
    searching: false,
    searchTerm: '',
    searchResults: [],
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PODCASTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null,
            };
        case FETCH_PODCASTS_SUCCESS:
            return {
                ...state,
                loading: false,
                podcasts: action.payload,
            };
        case FETCH_PODCASTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case SEARCH_RESULTS_REQUEST:
            return {
                ...state,
                searching: true,
                searchTerm: action.payload,
                error: null,
            };
        case SEARCH_RESULTS_SUCCESS:
            return {
                ...state,
                searching: false,
                error: null,
                searchResults: action.payload,
            };
        case SEARCH_RESULTS_FAILURE:
            return {
                ...state,
                searching: false,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default reducer;
