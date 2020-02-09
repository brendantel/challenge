import { ServerStyleSheets } from '@material-ui/styles';
import BaseDocument, { Head, Main, NextScript } from 'next/document';
import React from 'react';
import { ServerStyleSheet } from 'styled-components';

import theme from '../theme/themes/muiTheme';

export default class Document extends BaseDocument {
  public static async getInitialProps(ctx: any) {
    const styledComponentsSheet = new ServerStyleSheet();
    const muiSheet = new ServerStyleSheets();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App: any) => (props: any) => {
            const StyledApp = styledComponentsSheet.collectStyles(
              <App {...props} />,
            );
            return muiSheet.collect(StyledApp);
          },
        });

      const initialProps = await BaseDocument.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {styledComponentsSheet.getStyleElement()}
            {muiSheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      styledComponentsSheet.seal();
    }
  }

  public render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          {/* Use minimum-scale=1 to enable GPU rasterization */}
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
          />
          {/* PWA primary color */}
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
