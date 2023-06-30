```javascript
import { initializeEditor } from './editor.js';

let editor;

window.onload = function() {
  editor = initializeEditor('editor-container');
  document.getElementById('save-button').addEventListener('click', saveDocument);
}

function saveDocument() {
  const documentData = editor.getContents();
  localStorage.setItem('document', JSON.stringify(documentData));
}
```