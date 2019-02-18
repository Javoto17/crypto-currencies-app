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
            padding: 8,
          }}>
            {imgSrc && (
              <ColorExtractor getColors={colors => setColor(colors[0])}>
                <img src={imgSrc} alt={symbol} style={{ height: 75, width: 'auto' }} />
              </ColorExtractor>
            )}
          </div>
          <div className="column is-full is-inline-flex">
            <div className="column is-half has-text-centered">
              <p className="title is-5">{name}</p>
            </div>
            <div className="column is-half">
              <p className="subtitle is-5">{parseFloat(currency.price).toFixed(5)} €</p>
            </div>
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