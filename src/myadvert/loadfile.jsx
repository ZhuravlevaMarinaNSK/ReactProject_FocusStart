import React, { PureComponent, createRef } from 'react';

class LoadFile extends PureComponent {
  FILE_TYPES = ['gif', 'jpg', 'jpeg', 'png'];

  reader = new FileReader();

  downloadFile(input, prew) {
    console.log(input);
    const file = input.files[0];
    const fileName = file.name.toLowerCase();
    const preview = prew;

    const matches = this.FILE_TYPES.some(it => fileName.endsWith(it));

    if (matches) {
      this.reader.addEventListener('load', () => {
        preview.src = this.reader.result;
      });
      this.reader.readAsDataURL(file);
    }
    return this.reader;
  }

  render() {
    const { input, prew } = this.props;
    console.log(this.props);
    return this.downloadFile(input, prew);
  }
}

export default LoadFile;
