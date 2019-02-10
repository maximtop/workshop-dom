class Node {
  constructor(tag, attributes = {}, content = '') {
    this.tag = tag;
    this.attributes = attributes;
    this.content = content;
  }

  attributesToString() {
    if (!this.attributes) {
      return '';
    }
    return Object.keys(this.attributes).map((key) => {
      const value = this.attributes[key];
      return `${key}="${value}"`;
    }).join(' ');
  }
}

export default Node;
