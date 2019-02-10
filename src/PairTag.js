import Node from './Node';

class PairTag extends Node {
  constructor(tag, attributes, content) {
    super(tag, attributes, content);
  }

  toString() {
    const attributesString = this.attributesToString();
    return attributesString.length > 0
      ? `<${this.tag} ${this.attributesToString()}>${this.content}</${this.tag}>`
      : `<${this.tag}>${this.content}</${this.tag}>`;
  }
}

export default PairTag;
