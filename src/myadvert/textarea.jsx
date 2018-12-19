import React, { PureComponent, createRef } from 'react';

class CreateTextarea extends PureComponent {
  fieldEl = createRef();

  innerTextarea = [];

  onTextareaChange = () => {
    this.props.onChange(this.props.data.textarea.id, this.fieldEl.current.value);
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
    const { data, onChange } = this.props;
    this.createTextarea(data);
    return <div className="wrapper">{this.innerTextarea}</div>;
  }
}

export default CreateTextarea;
