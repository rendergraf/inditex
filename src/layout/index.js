import React from 'react';
import { Outlet, Link, Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Search from '../components/Search';

const Main = styled.main`
    width: 100%;
    margin: 0 auto;
    @media screen and (min-width: 769px) {
        width: 768px;
    }
    @media screen and (min-width: 961px) {
        width: 960px;
    }
    @media screen and (min-width: 1201px) {
        width: 1200px;
    }
`;

const Header = styled.header`
    width: 100%;
    margin: 0 auto;
    padding: 20px 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    @media screen and (min-width: 769px) {
        width: 768px;
        flex-direction: row;
    }
    @media screen and (min-width: 961px) {
        width: 960px;
        flex-direction: row;
    }
    @media screen and (min-width: 1201px) {
        width: 1200px;
        flex-direction: row;
    }
    /* 	@media screen and (min-width: 1537px) {
		width: 1536px;
	} */
`;

const Home = styled(Link)`
    font-size: 2rem;
    text-decoration: none;
    border-bottom: 2px solid transparent;
    transition: all ease-in-out 0.2s;
    &:hover {
        border-bottom: 2px solid #0076ee;
    }
`;

const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media screen and (min-width: 769px) {
        justify-content: flex-end;
    }
`;

const Footer = styled.footer`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: auto;
    padding: 30px 0;
`;

const Layout = () => {
    return (
        <>
            <Header>
                <Home to={'/'}>Podcaster</Home>
                <SearchWrapper>
                    <Routes>
                        <Route path='/' element={<Search />} />
                    </Routes>
                </SearchWrapper>
            </Header>
            <Main>
                <Outlet />
            </Main>
            <Footer>
                <a
                    href='https://xavieraraque.com'
                    target='_blank'
                    rel='noreferrer'
                >
                    <h3>Powered by Xavier Araque</h3>
                </a>
            </Footer>
        </>
    );
};

export default Layout;
