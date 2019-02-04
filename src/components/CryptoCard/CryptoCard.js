import React from 'react';

const CryptoCard = ({
  symbol,
  imgSrc,
}) => (
  <div className="column is-one-quarter">
    <div className="card">
      <div className="columns is-centered is-multiline">
        <div className="column is-full has-text-centered">
          {imgSrc && (
            <img src={imgSrc} />
          )}
        </div>
        <div className="column is-full has-text-centered">
          <p className="title">
            {symbol}
          </p>
        </div>
      </div>
    </div>
  </div>
);

export default CryptoCard;