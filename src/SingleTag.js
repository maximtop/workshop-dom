import Node from './Node';

class SingleTag extends Node {
  constructor(tag, attributes) {
    super(tag, attributes);
  }

  toString() {
    const attributesString = this.attributesToString();
    return attributesString.length > 0 ? `<${this.tag} ${this.attributesToString()}>` : `<${this.tag}>`;
  }
}

export default SingleTag;
