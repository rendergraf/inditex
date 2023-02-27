import { fetchPodcasts } from '../podcasts/podcastsActions';
import { fetchPodcast } from '../podcast/podcastActions';
import _ from 'lodash';
import {
    FETCH_EPISODE_REQUEST,
    FETCH_EPISODE_SUCCESS,
    FETCH_EPISODE_FAILURE,
} from './episodeTypes';

export const getEpisode = (podcastId, episodeId) => {
    return async (dispatch, getState) => {
        await dispatch({ type: FETCH_EPISODE_REQUEST });
        await dispatch(fetchPodcasts());
        await dispatch(fetchPodcast(podcastId));

        const { loading, error, podcast } = getState().podcast;
        if (!loading && !error && !_.isEmpty(podcast)) {
            dispatch({ type: FETCH_EPISODE_REQUEST });
            const episode = podcast.results.find(
                (item) => item.trackId === Number(episodeId)
            );
            if (episode) {
                dispatch({ type: FETCH_EPISODE_SUCCESS, payload: episode });
            } else {
                dispatch({
                    type: FETCH_EPISODE_FAILURE,
                    payload: 'Episode not found',
                });
            }
        } else {
            dispatch({ type: FETCH_EPISODE_FAILURE, payload: error });
        }
    };
};
