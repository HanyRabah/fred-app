import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const Chart = props => {
  const { data, type, stockChart } = props;

  const options = {
    chart: {
      zoomType: 'x',
      height: 500,
      type: type,
    },
    title: {
      text: data.title || '',
      style: { color: '#333333', fontSize: '20px', fontWeight: 'bold' },
      margin: 15,
    },
    xAxis: {
      type: 'datetime',
    },
    yAxis: {
      title: {
        text: data.units || '',
      },
      allowDecimals: true,
    },

    series: [
      {
        data: data.series || [],
      },
    ],
  };

  return (
    <div className="chart-container">
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={stockChart ? 'stockChart' : 'chart'}
        options={options}
      />
      <div className="chart-container-details">
        <p>
          <strong>Last Updated:</strong> {data.last_updated}{' '}
        </p>
        <p>
          <strong>Units:</strong> {data.units}{' '}
        </p>
        <p>
          <strong>Frequency:</strong> {data.frequency}
        </p>
        <p>
          <strong>Popularity:</strong> {data.popularity}
        </p>
        <p>
          <strong>Notes:</strong> <br /> {data.notes}
        </p>
      </div>
    </div>
  );
};

export default Chart;
