import { getData, subtractSeriesValues } from '../service/dataService';
import Chart from '../components/Chart';
import SideMenu from '../components/SideMenu';

const chart = ({ seriesOne, seriesTwo }) => {
  const data = {
    ...seriesOne,
    title: `${seriesOne.title} MINUS ${seriesTwo.title}`,
    series: subtractSeriesValues(seriesOne, seriesTwo),
  };

  return (
    <>
      <SideMenu activeLink="lineChart" />
      <Chart data={data} type="line" />
    </>
  );
};

chart.getInitialProps = async () => {
  const seriesOne = await getData('DGS10');
  const seriesTwo = await getData('T10YIE');
  return {
    seriesOne,
    seriesTwo,
  };
};

export default chart;
