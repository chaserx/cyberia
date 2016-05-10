// stolen from cloud-to-butt https://github.com/panicsteve/cloud-to-butt
// used under the DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE

walk(document.body);

function walk(node) {
  // I stole this function from here:
  // http://is.gd/mwZp7E
  let child, next;

  // if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
  //     || node.classList.contains('ace_editor')) {
  //   return;
  // }

  switch ( node.nodeType )
  {
    case 1:  // Element
    case 9:  // Document
    case 11: // Document fragment
      child = node.firstChild;
      while ( child )
      {
        next = child.nextSibling;
        walk(child);
        child = next;
      }
      break;

    case 3: // Text node
      handleText(node);
      break;
  }
}

function handleText(textNode) {
  var v = textNode.nodeValue;
  v = v.replace(/\bCyber\b/gi, 'Siberia');

  textNode.nodeValue = v;
}
