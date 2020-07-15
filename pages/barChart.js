import { getData } from '../service/dataService';
import Chart from '../components/Chart';
import SideMenu from '../components/SideMenu';

const BarChart = props => {
  return (
    <>
      <SideMenu activeLink="barChart" />
      <Chart data={props.data} type="column" />
    </>
  );
};

BarChart.getInitialProps = async () => {
  const data = await getData('GDPCA');
  return {
    data,
  };
};

export default BarChart;
