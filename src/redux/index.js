import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import podcastsReducers from './podcasts/podcastsReducers';
import podcastReducers from './podcast/podcastReducers';
import reducerEpisode from './episode/episodeReducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
    podcasts: podcastsReducers,
    podcast: podcastReducers,
    episode: reducerEpisode,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

export { store, persistor };
