import nextReduxSaga from 'next-redux-saga';
import withRedux from 'next-redux-wrapper';
import { createStore, applyMiddleware, Reducer, Middleware } from 'redux';
import logger from 'redux-logger';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './rootReducer';
import rootSaga from './rootSaga';

const persistConfig = {
  key: 'nextjs',
  whitelist: [],
  storage,
};

const configureStore = (
  initialState = {},
  { isServer }: { isServer: boolean },
) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares: Middleware[] = [sagaMiddleware];

  if (!isServer) {
    middlewares.push(logger);
  }

  const reducer: Reducer<any> = isServer
    ? rootReducer
    : persistReducer(persistConfig, rootReducer);

  const store: any = createStore(
    reducer,
    initialState,
    applyMiddleware(...middlewares),
  );
  store.sagaTask = sagaMiddleware.run(rootSaga);

  if (!isServer) {
    store.__persistor = persistStore(store);
  }

  return store;
};

export default (BaseComponent: any) =>
  withRedux(configureStore)(nextReduxSaga(BaseComponent));
