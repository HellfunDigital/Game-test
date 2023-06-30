```javascript
import { initializeEditor } from './editor.js';

let darkTheme = false;
const editorContainer = document.getElementById('editor-container');
const themeToggle = document.getElementById('theme-toggle');

// Initialize the text editor
const editor = initializeEditor(editorContainer);

// Listen for changes in the editor content
editor.on('content-changed', () => {
  saveDocument(editor.getContents());
});

// Load the document into the editor
loadDocument();

// Toggle the theme when the theme button is clicked
themeToggle.addEventListener('click', () => {
  darkTheme = !darkTheme;
  toggleTheme(darkTheme);
});

function toggleTheme(isDark) {
  if (isDark) {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }
}

function saveDocument(contents) {
  localStorage.setItem('document', JSON.stringify(contents));
}

function loadDocument() {
  const savedDocument = localStorage.getItem('document');
  if (savedDocument) {
    editor.setContents(JSON.parse(savedDocument));
  }
}
```