import React, { PureComponent, createRef } from 'react';
import classNames from 'classnames/class-names';

class CreateFeature extends PureComponent {
  innerFeature = [];

  fieldEl = createRef();

  onCheckboxChange = () => {
    this.props.onChange(this.props.data.feature.id, this.fieldEl.current.checked);
  };

  createCheckboxes(data) {
    this.innerFeature.push(
      <label className="feature" htmlFor={data.feature.id} key={data.feature.id}>
        <input
          type={data.feature.type}
          name={data.feature.name}
          value={data.feature.name}
          id={data.feature.id}
          className="feature__checkbox visually-hidden"
          ref={this.fieldEl}
          onChange={this.onCheckboxChange}
        />
        <span className={classNames('feature', { class: data.feature.classLabel })} />
        {data.feature.text}
      </label>
    );
  }

  render() {
    const { data, onChange } = this.props;
    this.createCheckboxes(data);
    return <div className="features__wrapper">{this.innerFeature}</div>;
  }
}

export default CreateFeature;
