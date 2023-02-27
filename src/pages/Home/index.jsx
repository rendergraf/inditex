import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import { fetchPodcasts } from '../../redux/podcasts/podcastsActions';
import Spinner from '../../components/Spinner';
import Nomatch from '../Error';
import PodcastList from '../../components/PodcastList';
import styled from 'styled-components';

const PodcastGrid = styled.section`
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
    @media screen and (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 30px;
    }
    @media screen and (min-width: 960px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 40px;
    }
    @media screen and (min-width: 1200px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    }
    @media screen and (min-width: 1536px) {
        grid-template-columns: repeat(4, 1fr);
        gap: 40px;
    }
`;

const Home = () => {
    const dispatch = useDispatch();
    const { loading, error, podcasts, searchResults } = useSelector(
        (state) => state.podcasts
    );

    useEffect(() => {
        dispatch(fetchPodcasts());
    }, []);

    const showPodcasts = () => {
        if (loading) {
            return <Spinner />;
        }
        if (error) {
            return <Nomatch />;
        }
        if (!_.isEmpty(podcasts)) {
            return (
                <>
                    <PodcastGrid>
                        {_.isEmpty(searchResults)
                            ? podcasts.map((podcast) => (
                                  <PodcastList
                                      key={podcast.id.attributes['im:id']}
                                      podcast={podcast}
                                  />
                              ))
                            : searchResults.map((podcast) => (
                                  <PodcastList
                                      key={podcast.id.attributes['im:id']}
                                      podcast={podcast}
                                  />
                              ))}
                    </PodcastGrid>
                </>
            );
        }
        return <p>No podcasts available</p>;
    };

    return showPodcasts();
};

export default Home;
