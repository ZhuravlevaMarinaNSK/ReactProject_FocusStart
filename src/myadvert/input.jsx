import React, { PureComponent, createRef } from 'react';

class Input extends PureComponent {
  fieldEl = createRef();

  innerInput = [];

  onInputChange = () => {
    this.props.onChange(this.props.data.input.id, this.fieldEl.current.value);
  };

  createInput(data) {
    this.innerInput.push(
      <input
        id={data.data.input.id}
        key={data.data.input.id}
        name={data.data.input.name}
        type={data.data.input.text}
        placeholder={data.data.input.placeholder}
        minLength={data.data.input.minLength}
        maxLength={data.data.input.maxLength}
        min={data.data.input.min}
        max={data.data.input.max}
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

export default Input;
