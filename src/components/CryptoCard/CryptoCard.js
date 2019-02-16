import React, { useState } from 'react';
import { ColorExtractor } from 'react-color-extractor';
import PropTypes from 'prop-types';


const CryptoCard = ({
  symbol,
  imgSrc,
}) => {
  const [color, setColor] = useState();

  return (
    <div className="column is-one-third-desktop is-one-third-widescreen is-one-third-fullhd is-half-mobile is-one-third-tablet">
      <div className="card-custom">
        <div>
          <div className="has-text-centered" style={{
            backgroundColor: color,
          }}>
            {imgSrc && (
              <ColorExtractor getColors={colors => setColor(colors[0])}>
                <img src={imgSrc} alt={symbol} />
              </ColorExtractor>
            )}
          </div>
          <div className="has-text-centered">
            <p className="title">
              {symbol}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

CryptoCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
};

CryptoCard.defaultProps = {
  symbol: PropTypes.string,
};


export default CryptoCard;