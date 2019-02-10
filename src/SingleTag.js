import Node from './Node';

class SingleTag extends Node {
  constructor(tagName, attributes) {
    super(tagName, attributes);
  }

  toString() {
    const attributesString = this.attributesToString().length ? ` ${this.attributesToString()}` : '';
    return `<${this.tagName}${attributesString}>`;
  }
}

export default SingleTag;
