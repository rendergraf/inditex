import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const WrapperPlayList = styled.div`
    display: flex;
    flex-direction: column;
`;

const TitleCount = styled.span`
    font-weight: 600;
    font-weight: 600;
    padding: 10px 30px;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.15), -1px -1px 1px rgb(0, 0, 0, 0.05);
    margin: 10px 0;
`;

const Table = styled.div`
    display: flex;
    flex-direction: column;
    box-shadow: 2px 2px 2px rgb(0, 0, 0, 0.15), -1px -1px 1px rgb(0, 0, 0, 0.05);
    padding: 10px 15px;
    margin: 10px 0;
    background-color: #fff;
    & div:first-child {
        font-weight: 600;
    }
`;

const Row = styled.div`
    display: grid;
    grid-template-columns: 2fr 1fr 1fr;
    padding: 10px 15px;
    & a {
        text-decoration: none;
        color: #0076ee;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    &:nth-child(odd) {
        background-color: #fafafa;
    }
    & div:first-child {
        margin-right: auto;
    }
    & div:nth-last-child(-n + 2) {
        margin-left: auto;
    }
`;

const PlayList = ({ episodes }) => {
    return (
        <WrapperPlayList>
            <TitleCount>Episodes: {episodes.resultCount}</TitleCount>
            <Table>
                <Row>
                    <div>Title</div>
                    <div className='date'>Date</div>
                    <div className='duration'>Duration</div>
                </Row>
                {episodes.results.map((episode) => {
                    const fecha = new Date(episode.releaseDate);
                    const dia = fecha.getDate();
                    const mes = fecha.getMonth() + 1;
                    const anio = fecha.getFullYear();
                    const fechaFormateada = `${dia}/${mes}/${anio}`;
                    //
                    const segundosTotales = Math.floor(
                        episode.trackTimeMillis / 1000
                    );
                    const segundos = segundosTotales % 60;
                    const minutosTotales = Math.floor(segundosTotales / 60);
                    const minutos = minutosTotales % 60;
                    const horas = Math.floor(minutosTotales / 60);
                    const horasFormateadas = String(horas).padStart(2, '0');
                    const minutosFormateados = String(minutos).padStart(2, '0');
                    const segundosFormateados = String(segundos).padStart(
                        2,
                        '0'
                    );
                    const tiempoFormateado = `${horasFormateadas}:${minutosFormateados}:${segundosFormateados}`;
                    if (episode.wrapperType === 'podcastEpisode') {
                        return (
                            <Row key={episode.trackId}>
                                <Link
                                    to={`/podcast/${episode.collectionId}/episode/${episode.trackId}`}
                                >
                                    {episode.trackName}
                                </Link>
                                <div>{fechaFormateada}</div>
                                <div>{tiempoFormateado}</div>
                            </Row>
                        );
                    }
                })}
            </Table>
        </WrapperPlayList>
    );
};

export default PlayList;
