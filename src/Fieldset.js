import React from 'react';
import PropTypes from 'prop-types';

const Fieldset = ({
  style,
  error,
  triangleSideValue,
  triangleSideName,
  setSideValue,
  sideNumber,
  selectText,
}) => (
  <fieldset style={style}>
    <label
      className={(error && !triangleSideValue) ? 'ts-error' : ''}
      htmlFor={triangleSideName.toLowerCase()}
    >

      <span>
        Side &nbsp;
        {sideNumber}
        &nbsp;(cm)
      </span>

      <input
        onChange={event => setSideValue(triangleSideName, +event.target.value)}
        onClick={event => selectText(event)}
        value={triangleSideValue}
        id={triangleSideName.toLowerCase()}
        type="number"
        required
      />

    </label>
  </fieldset>
);

Fieldset.propTypes = {
  error: PropTypes.string,
  style: PropTypes.shape({}),
  triangleSideName: PropTypes.string.isRequired,
  triangleSideValue: PropTypes.number.isRequired,
  setSideValue: PropTypes.func.isRequired,
  sideNumber: PropTypes.string.isRequired,
  selectText: PropTypes.func.isRequired,
};

Fieldset.defaultProps = {
  error: '',
  style: {},
};

export default Fieldset;
