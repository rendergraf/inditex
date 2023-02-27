import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { getEpisode } from '../../redux/episode/episodeActions';
import Card from '../../components/Card';
import Spinner from '../../components/Spinner';
import Nomatch from '../Error';
import Player from '../../components/Player';

const PodcastWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media screen and (min-width: 769px) {
        grid-template-columns: 250px 1fr;
    }
    @media screen and (min-width: 961px) {
        grid-template-columns: 250px 1fr;
    }
    @media screen and (min-width: 1201px) {
        grid-template-columns: 250px 1fr;
    }
`;

const PodcastDetail = () => {
    const dispatch = useDispatch();
    const { podcastId, episodeId } = useParams();
    const { loading, error, episode } = useSelector((state) => state.episode);
    const {
        loading: loadingpodcast,
        error: errorpodcast,
        podcasts,
    } = useSelector((state) => state.podcasts);
    const podcast = podcasts.filter((item) =>
        item.id.attributes['im:id'].includes(podcastId)
    )[0];

    useEffect(() => {
        dispatch(getEpisode(podcastId, episodeId));
    }, []);

    if (loading || loadingpodcast) {
        return <Spinner />;
    }
    if (error || errorpodcast) {
        return <Nomatch />;
    }

    return (
        <>
            <PodcastWrapper>
                {!_.isEmpty(podcast) ? <Card podcast={podcast} /> : <Spinner />}
                {!_.isEmpty(episode) ? (
                    <Player episode={episode} />
                ) : (
                    <Spinner />
                )}
            </PodcastWrapper>
        </>
    );
};

export default PodcastDetail;
