class Node {
  constructor(tag, attributes = {}) {
    this.tag = tag;
    this.attributes = attributes;
  }

  attributesToString() {
    if (!this.attributes) {
      return undefined;
    }
    return Object.keys(this.attributes).map((key) => {
      const value = this.attributes[key];
      return `${key}="${value}"`;
    }).join(' ');
  }
}

export default Node;
