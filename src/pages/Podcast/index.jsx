import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import _ from 'lodash';
import { fetchPodcast } from '../../redux/podcast/podcastActions';
import { fetchPodcasts } from '../../redux/podcasts/podcastsActions';

import Spinner from '../../components/Spinner';
import Nomatch from '../Error';
import Card from '../../components/Card';
import styled from 'styled-components';
import PlayList from '../../components/PlayList';

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

const Podcast = () => {
    const dispatch = useDispatch();
    const {
        loading,
        error,
        podcast: episodes,
    } = useSelector((state) => state.podcast);
    const { podcasts } = useSelector((state) => state.podcasts);
    const { podcastId } = useParams();
    const podcast = podcasts.filter((item) =>
        item.id.attributes['im:id'].includes(podcastId)
    )[0];

    useEffect(() => {
        dispatch(fetchPodcasts());
        dispatch(fetchPodcast(podcastId));
    }, []);

    if (loading) {
        return <Spinner />;
    }
    if (error) {
        return <Nomatch />;
    }

    return (
        <>
            <PodcastWrapper>
                {!_.isEmpty(podcast) ? <Card podcast={podcast} /> : <Spinner />}
                {!_.isEmpty(episodes) ? (
                    <PlayList episodes={episodes} />
                ) : (
                    <Spinner />
                )}
            </PodcastWrapper>
        </>
    );
};

export default Podcast;
