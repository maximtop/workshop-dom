import Node from './Node';

class PairTag extends Node {
  constructor(tag, attributes, content) {
    super(tag, attributes);
    this.content = content;
  }

  toString() {
    const attributesString = this.attributesToString().length ? ` ${this.attributesToString()}` : '';
    const content = this.content ? this.content : '';
    return `<${this.tag}${attributesString}>${content}</${this.tag}>`;
  }
}

export default PairTag;
