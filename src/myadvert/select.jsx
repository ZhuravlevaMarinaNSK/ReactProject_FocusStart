import React, { PureComponent, createRef } from 'react';

class CreateSelect extends PureComponent {
  fieldEl = createRef();

  innerSelect = [];

  onSelectChange = () => {
    this.props.onChange(this.props.data.select.id, this.fieldEl.current.value);
  };

  componentDidMount = () => {
    this.props.onChange(this.props.data.select.id, this.fieldEl.current.value);
  };

  createSelect(select) {
    this.innerSelect.push(
      <select
        key={select.select.id}
        id={select.select.id}
        name={select.select.name}
        ref={this.fieldEl}
        onChange={this.onSelectChange}
      >
        <option value={select.select.optionValue1}>{select.select.optionText1}</option>
        <option value={select.select.optionValue2}>{select.select.optionText2}</option>
        <option value={select.select.optionValue3}>{select.select.optionText3}</option>
      </select>
    );
  }

  render() {
    const { data, onChange } = this.props;
    this.createSelect(data);
    return <div className="wrapper">{this.innerSelect}</div>;
  }
}

export default CreateSelect;
