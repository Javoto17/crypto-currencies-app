import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ColorExtractor } from 'react-color-extractor';
import PropTypes from 'prop-types';


const CryptoCard = ({
  symbol,
  imgSrc,
  currency,
  name,
}) => {
  const [color, setColor] = useState();

  return (
    <Link to={`/detail/${symbol}`} className="column is-one-third-desktop is-one-third-widescreen is-one-third-fullhd is-half-mobile is-one-third-tablet">
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
          <div className="column is-inline-flex">
            <p className="has-text-black">
              <span className="">
                {name}
              </span>
              <span className="">
                {parseFloat(currency.price).toFixed(5)} €
              </span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

CryptoCard.propTypes = {
  symbol: PropTypes.string.isRequired,
  imgSrc: PropTypes.string,
  name: PropTypes.string,
  currency: PropTypes.shape(),
};

CryptoCard.defaultProps = {
  symbol: PropTypes.string,
  name: PropTypes.string,
  currency: PropTypes.shape(),
};


export default CryptoCard;