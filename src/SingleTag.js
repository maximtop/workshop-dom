import Node from './Node';

class SingleTag extends Node {
  constructor(tag, attributes) {
    super(tag, attributes);
  }

  toString() {
    const attributesString = this.attributesToString() ? ` ${this.attributesToString()}` : '';
    return `<${this.tag}${attributesString}>`;
  }
}

export default SingleTag;
