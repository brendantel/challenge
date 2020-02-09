import { getDataFromTree } from '@apollo/react-ssr';
import Head from 'next/head';
import React from 'react';

import initApollo from '../services/apollo.service';

export default (App: any) => {
  return class Apollo extends React.Component {
    public static displayName = 'withApollo(App)';
    public apolloClient: any;

    public static async getInitialProps(ctx: any) {
      const { AppTree } = ctx;
      const apollo = initApollo();
      if (ctx.ctx) {
        ctx.ctx.apolloClient = apollo;
      }

      let appProps = {};
      if (App.getInitialProps) {
        appProps = await App.getInitialProps(ctx);
      }

      // Run all GraphQL queries in the component tree
      // and extract the resulting data

      if (typeof window === 'undefined') {
        try {
          // Run all GraphQL queries
          await getDataFromTree(
            <AppTree {...appProps} apolloClient={apollo} />,
          );
        } catch (error) {
          // Prevent Apollo Client GraphQL errors from crashing SSR.
          // Handle them in components via the data.error prop:
          // https://www.apollographql.com/docs/react/api/react-apollo.html#graphql-query-data-error
          console.error('Error while running `getDataFromTree`', error);
        }

        // getDataFromTree does not call componentWillUnmount
        // head side effect therefore need to be cleared manually
        Head.rewind();
      }

      // Extract query data from the Apollo store
      const apolloState = apollo.cache.extract();

      return {
        ...appProps,
        apolloState,
      };
    }

    public constructor(props: any) {
      super(props);
      this.apolloClient = initApollo(props.apolloState);
    }

    public render() {
      return <App apolloClient={this.apolloClient} {...this.props} />;
    }
  };
};
