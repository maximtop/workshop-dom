import Node from './Node';

class PairTag extends Node {
  constructor(tagName, attributes, content) {
    super(tagName, attributes);
    this.content = content;
  }

  toString() {
    const attributesString = this.attributesToString().length ? ` ${this.attributesToString()}` : '';
    const content = this.content ? this.content : '';
    return `<${this.tagName}${attributesString}>${content}</${this.tagName}>`;
  }
}

export default PairTag;
