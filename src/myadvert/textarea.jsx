import React, { PureComponent, createRef } from 'react';
import propTypes from 'prop-types';

class CreateTextarea extends PureComponent {
  fieldEl = createRef();

  innerTextarea = [];

  onTextareaChange = () => {
    const { onChange, data } = this.props;
    onChange(data.textarea.id, this.fieldEl.current.value);
  };

  createTextarea(textarea) {
    this.innerTextarea.push(
      <textarea
        key={textarea.textarea.id}
        id={textarea.textarea.id}
        name={textarea.textarea.name}
        placeholder={textarea.textarea.placeholder}
        ref={this.fieldEl}
        onChange={this.onTextareaChange}
      />
    );
  }

  render() {
    const { data } = this.props;
    this.createTextarea(data);
    return <div className="wrapper">{this.innerTextarea}</div>;
  }
}

CreateTextarea.propTypes = {
  data: propTypes.shape({
    textarea: propTypes.shape({
      id: propTypes.string.isRequired,
      name: propTypes.string.isRequired,
      placeholder: propTypes.string.isRequired
    })
  }).isRequired,
  onChange: propTypes.func
};

CreateTextarea.defaultProps = {
  onChange: propTypes.func
};

export default CreateTextarea;
