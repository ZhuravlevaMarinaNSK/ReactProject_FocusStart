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
          id={data.input.id}
          key={data.input.id}
          name={data.input.name}
          type={data.input.text}
          placeholder={data.input.placeholder}
          required
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
