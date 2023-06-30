import Quill from 'quill';

let editor;

export function initializeEditor() {
  const container = document.getElementById('editor-container');
  editor = new Quill(container, {
    theme: 'snow',
  });
}

export function getEditor() {
  return editor;
}