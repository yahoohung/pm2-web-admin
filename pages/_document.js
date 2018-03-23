import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage, req }) {

    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags }
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          {process.env.NODE_ENV == 'production'
            ? <link
                rel="stylesheet"
                type="text/css" 
                href={`/static/styles.css?${this.props.__NEXT_DATA__
                  .buildStats['app.js'].hash}`}
              />
            : ''}   
             
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}