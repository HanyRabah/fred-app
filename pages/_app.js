import App from 'next/app';
import Head from 'next/head';
import '../styles/index.scss';

class FredChart extends App {
  static async getInitialProps(appContext) {
    const appProps = await App.getInitialProps(appContext);
    return {
      ...appProps,
    };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Home</title>
        </Head>
        <div className="page-wrapper">
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}

export default FredChart;
