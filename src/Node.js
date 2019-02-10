class Node {
  constructor(tagName, attributes = {}) {
    this.tagName = tagName;
    this.attributes = attributes;
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

  isShort() {
    return this.toString().length <= 10;
  }
}

export default Node;
