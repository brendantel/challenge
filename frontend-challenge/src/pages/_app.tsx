import { ApolloProvider } from '@apollo/react-hooks';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/styles';
import BaseApp from 'next/app';
import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';

import withApolloClient from '../hocs/withApolloClient';
import configureStore from '../redux/configureStore';
import { theme, GlobalStyle } from '../theme/themes/base';
import muiTheme from '../theme/themes/muiTheme';

interface AppProps {
  Component: any;
  pageProps: any;
  store: any;
  apolloClient: any;
}

class App extends BaseApp<AppProps> {
  public static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  public render() {
    const { Component, pageProps, apolloClient, store } = this.props;

    return (
      <ApolloProvider client={apolloClient}>
        <Provider store={store}>
          <MuiThemeProvider theme={muiTheme}>
            <ThemeProvider theme={theme}>
              <div>
                <GlobalStyle />
                <Component {...pageProps} />
              </div>
            </ThemeProvider>
          </MuiThemeProvider>
        </Provider>
      </ApolloProvider>
    );
  }
}

export default withApolloClient(configureStore(App));
