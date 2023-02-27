import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { store, persistor } from './redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import App from './routes/';
import { createGlobalStyle } from 'styled-components';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const GlobalStyle = createGlobalStyle`
	html,
	body,
	div,
	span,
	applet,
	object,
	iframe,
	h1,
	h2,
	h3,
	h4,
	h5,
	h6,
	p,
	blockquote,
	pre,
	a,
	abbr,
	acronym,
	address,
	big,
	cite,
	code,
	del,
	dfn,
	em,
	img,
	ins,
	kbd,
	q,
	s,
	samp,
	small,
	strike,
	strong,
	sub,
	sup,
	tt,
	var,
	b,
	u,
	i,
	center,
	dl,
	dt,
	dd,
	ol,
	ul,
	li,
	fieldset,
	form,
	label,
	legend,
	table,
	caption,
	tbody,
	tfoot,
	thead,
	tr,
	th,
	td,
	article,
	aside,
	canvas,
	details,
	embed,
	figure,
	figcaption,
	footer,
	header,
	hgroup,
	menu,
	nav,
	output,
	ruby,
	section,
	summary,
	time,
	mark,
	audio,
	video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
	}
	/* HTML5 display-role reset for older browsers */
	article,
	aside,
	details,
	figcaption,
	figure,
	footer,
	header,
	hgroup,
	menu,
	nav,
	section {
	display: block;
	}
	body {
	line-height: 1;
	}
  	body {
		font-family: 'Source Sans Pro', 'Helvetica Neue','Helvetica','Arial',sans-serif;
		background-color: #fbfbfd;
		color: #1d1d1f;
  	}
	a {
		color: #0076ee;
	}
	#app {
		height: 100vh;
		display: flex;
    	flex-direction: column;
		margin: 10px 15px;
	}
`;

const rootElement = document.getElementById('app');
ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <HelmetProvider>
                        <Helmet>
                            <link
                                rel='preconnect'
                                href='https://fonts.googleapis.com'
                            />
                            <link
                                rel='preconnect'
                                href='https://fonts.gstatic.com'
                                crossOrigin
                            />
                            <link
                                href='https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap'
                                rel='stylesheet'
                            />
                        </Helmet>
                    </HelmetProvider>
                    <GlobalStyle />
                    <App />
                </PersistGate>
            </Provider>
        </BrowserRouter>
    </React.StrictMode>
);
