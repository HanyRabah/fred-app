import { getData } from '../service/dataService';
import Chart from '../components/Chart';
import SideMenu from '../components/SideMenu';

const AreaChart = props => {
  return (
    <>
      <SideMenu activeLink="areaChart" />
      <Chart data={props.data} type="area" stockChart={true} />
    </>
  );
};

AreaChart.getInitialProps = async () => {
  const data = await getData('T10Y2Y');
  return {
    data,
  };
};

export default AreaChart;
