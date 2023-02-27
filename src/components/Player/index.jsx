import React from 'react';
import styled from 'styled-components';

const WrapperPlayer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: #fff;
    padding: 15px;
    margin: 10px 0;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.15), -1px -1px 1px rgb(0, 0, 0, 0.05);
    background-image: url(${(props) => props.bg});
    background-size: contain;
    background-position: center;
    min-height: 300px;
    height: fit-content;
    background-origin: content-box;
    h1 {
        font-weight: 600;
        padding-bottom: 15px;
        z-index: 9;
        line-height: 1.5rem;
    }
    p {
        padding: 15px 0 80px;
        z-index: 9;
        line-height: 1.5rem;
    }
    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.95);
    }
`;

const AudioPlayer = styled.audio`
    width: 100%;
    margin-top: auto;
    z-index: 9;
`;

const Player = ({ episode }) => {
    return (
        <WrapperPlayer bg={episode.artworkUrl600}>
            <h1>{episode.trackName}</h1>
            <p
                dangerouslySetInnerHTML={{
                    __html: episode.description,
                }}
            />
            <AudioPlayer controls name='media'>
                <source src={episode.episodeUrl} type='audio/mpeg' />
            </AudioPlayer>
        </WrapperPlayer>
    );
};

export default Player;
