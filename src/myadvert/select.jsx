import React, { PureComponent, createRef } from 'react';
import propTypes from 'prop-types';

class CreateSelect extends PureComponent {
  fieldEl = createRef();

  innerSelect = [];

  onSelectChange = () => {
    const { onChange, data } = this.props;
    onChange(data.select.id, this.fieldEl.current.value);
  };

  componentDidMount = () => {
    const { onChange, data } = this.props;
    onChange(data.select.id, this.fieldEl.current.value);
  };

  createSelect(select) {
    const selectData = select.select;
    this.innerSelect.push(
      <select
        key={selectData.id}
        id={selectData.id}
        name={selectData.name}
        ref={this.fieldEl}
        onChange={this.onSelectChange}
      >
        <option value={selectData.optionValue1}>{selectData.optionText1}</option>
        <option value={selectData.optionValue2}>{selectData.optionText2}</option>
        <option value={selectData.optionValue3}>{selectData.optionText3}</option>
      </select>
    );
  }

  render() {
    const { data } = this.props;
    this.createSelect(data);
    return <div className="wrapper">{this.innerSelect}</div>;
  }
}

CreateSelect.propTypes = {
  data: propTypes.shape({
    select: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      optionValue1: propTypes.string.isRequired,
      optionValue2: propTypes.string.isRequired,
      optionValue3: propTypes.string.isRequired,
      optionText1: propTypes.string.isRequired,
      optionText2: propTypes.string.isRequired,
      optionText3: propTypes.string.isRequired
    })
  }).isRequired,
  onChange: propTypes.func
};

CreateSelect.defaultProps = {
  onChange: propTypes.func
};

export default CreateSelect;
