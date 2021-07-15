NodeTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
},
reset(font, middle) {
  if (!font || font.length == 0 || !middle || middle.length == 0 || font === middle) return null;
  let rootNode = new NodeTree(font[0]);
  let root = font[0];
  let index = middle.indexOf(root);
  let fontLeft = font.slice(1, index + 1);
  let fontRight = font.slice(index + 1, font.lenth);
  let middleLeft = middle.slice(0, index);
  let middleRight = middle.slice(index + 1, middle.lenth);
  rootNode.left = reset(fontLeft, middleLeft);
  rootNode.right = reset(fontRight, middleRight);
  return rootNode
}