import React from 'react';
import PropTypes from 'prop-types';

const Search = ({
  onChange,
}) => (
  <input className="input is-rounded custom-input" type="text" placeholder="Buscar aqui" onChange={onChange} />
);

Search.propTypes = {
  onChange: PropTypes.func,
};

Search.defaultProps = {
  onChange: () => {},
};

export default Search;
