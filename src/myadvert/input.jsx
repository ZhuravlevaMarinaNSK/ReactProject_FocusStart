import React, { PureComponent, createRef } from 'react';
import propTypes from 'prop-types';

class Input extends PureComponent {
  fieldEl = createRef();

  innerInput = [];

  onInputChange = () => {
    const { onChange, data } = this.props;
    onChange(data.input.id, this.fieldEl.current.value);
  };

  createInput(data) {
    const inputData = data.data;
    this.innerInput.push(
      <input
        id={inputData.input.id}
        key={inputData.input.id}
        name={inputData.input.name}
        type={inputData.input.text}
        placeholder={inputData.input.placeholder}
        minLength={inputData.input.minLength}
        maxLength={inputData.input.maxLength}
        min={inputData.input.min}
        max={inputData.input.max}
        ref={this.fieldEl}
        required
        autoComplete="off"
        onChange={this.onInputChange}
      />
    );
  }

  render() {
    const { data } = this.props;
    this.createInput({ data });
    return this.innerInput;
  }
}

Input.propTypes = {
  data: propTypes.shape({
    input: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      type: propTypes.string.isRequired,
      placeholder: propTypes.string.isRequired,
      minLength: propTypes.number,
      maxLength: propTypes.number,
      min: propTypes.string,
      max: propTypes.string
    })
  }).isRequired,
  onChange: propTypes.func
};

Input.defaultProps = {
  onChange: propTypes.func
};

export default Input;
