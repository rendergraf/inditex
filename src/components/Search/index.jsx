import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';
import {
    searchPodcasts,
    filterPodcasts,
    setErrorSearches,
} from '../../redux/podcasts/podcastsActions';
import styled from 'styled-components';

const Input = styled.input`
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    border-radius: 4px;
    border: 1px solid #ccc;
    outline-offset: 0px;
    outline-color: transparent;
    transition: all ease-in-out 0.2s;
    width: 100%;
    @media screen and (min-width: 769px) {
        width: auto;
    }
    &:focus-visible {
        outline-offset: 0px;
        outline-color: #0076ee;
    }
`;
const Counter = styled.span`
    font-size: 20px;
    font-weight: 400;
    padding: 10px;
    border-radius: 6px;
    background-color: #0076ee;
    color: #fff;
    margin-right: 10px;
`;

const Search = () => {
    const { podcasts, searchTerm, searchResults } = useSelector(
        (state) => state.podcasts
    );
    const dispatch = useDispatch();
    const ref = useRef();

    function handleOnchange() {
        dispatch(searchPodcasts(ref.current.value));
    }
    useEffect(() => {
        /* if(_.isEmpty(searchTerm)){ */
        dispatch(searchPodcasts(''));
        /* } */
    }, []);

    useEffect(() => {
        if (!_.isEmpty(searchTerm)) {
            const listpodcasts = podcasts.filter((podcast) =>
                podcast.title.label
                    .toUpperCase()
                    .includes(searchTerm.toUpperCase())
            );
            dispatch(filterPodcasts(listpodcasts));
        } else {
            dispatch(setErrorSearches('No search terms'));
            dispatch(filterPodcasts([]));
        }
    }, [searchTerm]);

    return (
        <>
            <Counter>
                {_.isEmpty(searchResults)
                    ? podcasts.length
                    : searchResults.length}
            </Counter>
            <Input
                type='text'
                name='search'
                ref={ref}
                onChange={() => handleOnchange()}
                placeholder='Filter podcasts...'
            />
        </>
    );
};

export default Search;
