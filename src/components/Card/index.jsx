import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Img from '../Img';

const WrapperCard = styled(Link)`
    display: flex;
    flex-direction: column;
    margin: 10px 0;
    padding: 30px;
    background-color: #fff;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.15), -1px -1px 1px rgb(0, 0, 0, 0.05);
    height: fit-content;
    color: #1d1d1f;
    text-decoration: none;
    & h2 {
        font-weight: 600;
        margin-top: 30px;
        padding-top: 30px;
        border-top: 1px solid #ccc;
    }
    & h3 {
        line-height: 1.1rem;
        font-style: italic;
        padding-bottom: 30px;
        padding-top: 5px;
        border-bottom: 1px solid #ccc;
    }
    & h4 {
        line-height: 1.1rem;
        padding-top: 30px;
        font-weight: 600;
        padding-bottom: 15px;
    }
    & p {
        line-height: 1.1rem;
    }
`;

const Card = ({ podcast }) => {
    return (
        <WrapperCard to={`/podcast/${podcast.id.attributes['im:id']}`}>
            <Img
                src={podcast['im:image'][2].label}
                alt={podcast['im:artist'].label}
                width={170}
                height={170}
            />
            <h2>{podcast['im:name'].label}</h2>
            <h3>by {podcast['im:artist'].label}</h3>
            <h4>Description</h4>
            <p>{podcast.summary.label}</p>
        </WrapperCard>
    );
};
export default Card;
