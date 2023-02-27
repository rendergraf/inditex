import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import styled from 'styled-components';
import Spinner from '../Spinner';

const WrapperImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fff;
    & .blur {
        filter: blur(15px);
        & > img {
            opacity: 0;
            transition: opacity 0.3s;
            border-radius: 4px;
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
    }
`;

const Img = ({ src, alt, width, height }) => {
    return (
        <WrapperImage>
            <LazyLoadImage
                wrapperClassName='blur'
                src={src}
                alt={alt}
                width={width}
                height={height}
                placeholderSrc={<Spinner />}
                effect='blur'
            />
        </WrapperImage>
    );
};

export default Img;
