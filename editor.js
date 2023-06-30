import Quill from 'quill';

let editor;

export function initializeEditor() {
  const container = document.getElementById('editor-container');
  editor = new Quill(container, {
    theme: 'snow',
  });

  editor.on('text-change', () => {
    const event = new CustomEvent('content-changed', {
      detail: { content: editor.getContents() },
    });
    window.dispatchEvent(event);
  });
}

export function getEditorContent() {
  return editor.getContents();
}

export function setEditorContent(content) {
  editor.setContents(content);
}