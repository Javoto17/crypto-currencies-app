import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { ColorExtractor } from 'react-color-extractor';
import PropTypes from 'prop-types';
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory';

const Chart = ({
  data
  // days,
}) => {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    setConfig({
      data: data.map((el, index) => ({
        x: index,
        y: el.close
      }))
    });
  }, [data]);

  if (config && config.data) {
    return (
      <div>
        <VictoryChart theme={VictoryTheme.material} domainPadding={50}>
          <VictoryLine
            // interpolation="natural"
            // style={{
            //   data: { stroke: '#c43a31' },
            //   parent: { border: '1px solid #ccc' }
            // }}
            data={config.data}
            // domain={{ y: [Math.min(...config.data), Math.max(...config.data)], x: [1, config.data.length] }}
          />
        </VictoryChart>
      </div>
    );
  }

  return null;
};

Chart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      close: PropTypes.number
    })
  ).isRequired,
  days: PropTypes.number.isRequired
};

Chart.defaultProps = {
  data: [],
  days: 7
};

export default Chart;
