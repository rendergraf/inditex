import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Spinner from '../Spinner';

const WrapperImage = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 8px;
    box-shadow: 2px 3px 4px rgba(0, 0, 0, 0.15),
        -1px -1px 2px rgba(0, 0, 0, 0.05);
    position: relative;
    padding-top: 100px;
    margin-top: 100px;
    @media screen and (min-width: 769px) {
        padding-top: 26%;
        margin-top: 26%;
    }
    @media screen and (min-width: 961px) {
        padding-top: 25%;
        margin-top: 21%;
    }
    @media screen and (min-width: 1201px) {
        padding-top: 38%;
        margin-top: 38%;
    }
    background-color: #fff;
    text-decoration: none;
    color: #1d1d1f;
    & .blur {
        filter: blur(15px);
        position: absolute;
        top: -50%;
        & > img {
            opacity: 0;
            transition: opacity 0.3s;
            border-radius: 50%;
            overflow: hidden;
            box-shadow: 0px -1px 2px rgba(0, 0, 0, 0.05);
        }
        &.lazy-load-image-loaded {
            filter: blur(0);
            transition: filter 0.3s;
            & > img {
                opacity: 1;
            }
        }
        &:after {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            border-radius: 0%;
            background-color: transparent;
            opacity: 0;
            transition: all ease-in-out 0.2s;
        }
    }
    &:hover {
        & .blur {
            &:after {
                content: url('data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiIHN0YW5kYWxvbmU9Im5vIj8+CjxzdmcKICAgc3Ryb2tlPSJjdXJyZW50Q29sb3IiCiAgIGZpbGw9ImN1cnJlbnRDb2xvciIKICAgc3Ryb2tlLXdpZHRoPSIwIgogICB2aWV3Qm94PSIwIDAgMTcwIDE3MCIKICAgaGVpZ2h0PSIxNzAiCiAgIHdpZHRoPSIxNzAiCiAgIHZlcnNpb249IjEuMSIKICAgaWQ9InN2ZzgyNiIKICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIgogICB4bWxuczpzdmc9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcwogICAgIGlkPSJkZWZzODMwIiAvPgogIDxwYXRoCiAgICAgZD0ibSAxNjkuOTk5OTksODQuOTgwNzQ1IGEgODQuOTk5OTk1LDg0Ljk5OTk5NSAwIDEgMSAtMTY5Ljk5OTk4MjIyODUzMjUsMCA4NC45OTk5OTUsODQuOTk5OTk1IDAgMCAxIDE2OS45OTk5ODIyMjg1MzI1LDAgeiBNIDcyLjE0Mzc1Myw1NC4wOTM4NzIgYSA1LjMxMjQ5OTcsNS4zMTI0OTk3IDAgMCAwIC04LjM5Mzc0OSw0LjMyNDM3NCB2IDUzLjEyNDk5NCBhIDUuMzEyNDk5Nyw1LjMxMjQ5OTcgMCAwIDAgOC4zOTM3NDksNC4zMjQzOCBMIDEwOS4zMzEyNiw4OS4zMDUxMTkgYSA1LjMxMjQ5OTcsNS4zMTI0OTk3IDAgMCAwIDAsLTguNjQ4NzQ5IHoiCiAgICAgaWQ9InBhdGg4MjQiCiAgICAgc3R5bGU9InN0cm9rZS13aWR0aDowIiAvPgo8L3N2Zz4K');
                position: absolute;
                width: 100%;
                height: 100%;
                left: 0;
                top: 0;
                border-radius: 50%;
                background-color: white;
                opacity: 0.4;
                transition: all ease-in-out 0.2s;
            }
        }
        cursor: pointer;
    }
`;

const Title = styled.span`
    text-transform: uppercase;
    font-weight: 600;
    text-align: center;
    margin: 5px 10px;
`;
const Author = styled.span`
    text-transform: capitalize;
    font-weight: 600;
    margin-bottom: 10px;
    margin-left: 10px;
    margin-right: 10px;
    margin-top: auto;
`;

const PodcastList = ({ podcast }) => {
    return (
        <WrapperImage to={`/podcast/${podcast.id.attributes['im:id']}`}>
            <LazyLoadImage
                wrapperClassName='blur'
                src={podcast['im:image'][2].label}
                alt={podcast['im:name'].label}
                width={170}
                height={170}
                placeholderSrc={<Spinner />}
                effect='blur'
            />
            <Title>{podcast['im:name'].label}</Title>
            <Author>{podcast['im:artist'].label}</Author>
        </WrapperImage>
    );
};

export default PodcastList;
