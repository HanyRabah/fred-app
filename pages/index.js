import Link from 'next/link';

const Home = () => {
  return (
    <div className="home-page">
      <h2 className="home-page-title">Select One Chart to see results</h2>
      <div className="home-page-links">
        <Link href="/areaChart">
          <a className="home-page-links__link">
            <img
              className="home-page-links__link-image"
              src="/images/T10Y2Y.jpg"
            />
            <span className="home-page-links__link-label">T10Y2Y</span>
          </a>
        </Link>
        <Link href="/barChart">
          <a className="home-page-links__link">
            <img
              className="home-page-links__link-image"
              src="/images/GDPCA.jpg"
            />
            <span className="home-page-links__link-label">GDPCA</span>
          </a>
        </Link>
        <Link href="/lineChart">
          <a className="home-page-links__link">
            <img
              className="home-page-links__link-image"
              src="/images/DGS10.jpg"
            />
            <span className="home-page-links__link-label">
              DGS10 minus T10YIE
            </span>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Home;
