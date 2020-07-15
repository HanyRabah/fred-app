import Link from 'next/link';

const SideMenu = ({ activeLink }) => {
  return (
    <div className="side-menu">
      <h3 className="side-menu-title">Select Chart </h3>
      <ul className="side-menu-list">
        <li className="side-menu-list-item">
          <Link href="/areaChart">
            <div
              className={`side-menu-list-item__link${
                activeLink === 'areaChart' ? ' active' : ''
              }`}
            >
              T10Y2Y
            </div>
          </Link>
        </li>
        <li className="side-menu-list-item">
          <Link href="/barChart">
            <div
              className={`side-menu-list-item__link${
                activeLink === 'barChart' ? ' active' : ''
              }`}
            >
              GDPCA
            </div>
          </Link>
        </li>
        <li className="side-menu-list-item">
          <Link href="/lineChart">
            <div
              className={`side-menu-list-item__link${
                activeLink === 'lineChart' ? ' active' : ''
              }`}
            >
              DGS10 minus T10YIE
            </div>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
