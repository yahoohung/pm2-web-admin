import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps ({ renderPage, req }) {

    const sheet = new ServerStyleSheet();
    const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    const token = req.auth.token || null;

    return { ...page, styleTags, token }
  }

  render () {
    return (
      <html>
        <Head>
          {this.props.styleTags}
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Main />
          <NextScript />
          <script>
            var token = '{this.props.token}';
          </script>
        </body>
      </html>
    )
  }
}