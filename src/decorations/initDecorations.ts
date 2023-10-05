import * as vscode from "vscode";
import { Decorations } from "./Decorations";

export function initDecorations(
  activeEditor: vscode.TextEditor | undefined,
  context: vscode.ExtensionContext
) {
  let timeout: NodeJS.Timer | undefined = undefined;
  const decorations = new Decorations();

  function triggerUpdateDecorations() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
    timeout = setTimeout(
      () => decorations.updateDecorations(activeEditor),
      500
    );
  }

  if (activeEditor) {
    triggerUpdateDecorations();
  }

  vscode.window.onDidChangeActiveTextEditor(
    (editor) => {
      activeEditor = editor;
      if (editor) {
        triggerUpdateDecorations();
      }
    },
    null,
    context.subscriptions
  );

  vscode.workspace.onDidChangeTextDocument(
    (event) => {
      if (activeEditor && event.document === activeEditor.document) {
        triggerUpdateDecorations();
      }
    },
    null,
    context.subscriptions
  );
}
