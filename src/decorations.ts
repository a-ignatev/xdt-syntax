import * as vscode from "vscode";
import { fieldsCatalog } from "./fieldsCatalog";

const xdtLineDecorationType = vscode.window.createTextEditorDecorationType({
  overviewRulerColor: "blue",
  after: {
    color: "gray",
    margin: "10px",
  },
  overviewRulerLane: vscode.OverviewRulerLane.Right,
});

const xdtLinePartDecorationType = vscode.window.createTextEditorDecorationType({
  after: {
    contentText: " ",
  },
});

export function updateDecorations(activeEditor: vscode.TextEditor | undefined) {
  if (!activeEditor) {
    return;
  }

  const regEx = /(\d{3})(\d{4})(.*)/g;
  const text = activeEditor.document.getText();
  const lines: vscode.DecorationOptions[] = [];
  const lineParts: vscode.DecorationOptions[] = [];

  let match;
  while ((match = regEx.exec(text))) {
    const startPos = activeEditor.document.positionAt(match.index);
    const endPos = activeEditor.document.positionAt(
      match.index + match[0].length
    );

    const field = fieldsCatalog[match[2]];
    const length = Number(match[1]);

    const markdown = new vscode.MarkdownString(
      `**${match[2]}** *${field && field.name}*`
    );
    markdown.isTrusted = true;
    markdown.appendMarkdown(`  \n`);
    markdown.appendMarkdown(`  \nLength: *${length}*`);
    markdown.appendMarkdown(`  \nData length: *${length - 3 - 4 - 2}*`);
    markdown.appendMarkdown(`  \nActual data length: *${match[3].length}*`);
    if (field) {
      markdown.appendMarkdown(
        `  \nData length range: [*${field.minLength} - ${field.maxLength}*]`
      );
    }

    lines.push({
      range: new vscode.Range(endPos, endPos),
      hoverMessage: markdown,
      renderOptions: {
        after: {
          contentText:
            field?.name || "field not found in the fields catalogue!",
        },
      },
    });
    lineParts.push({
      range: new vscode.Range(
        startPos,
        new vscode.Position(startPos.line, startPos.character + 3)
      ),
    });
    lineParts.push({
      range: new vscode.Range(
        new vscode.Position(startPos.line, startPos.character + 3),
        new vscode.Position(startPos.line, startPos.character + 7)
      ),
    });
  }

  activeEditor.setDecorations(xdtLineDecorationType, lines);
  activeEditor.setDecorations(xdtLinePartDecorationType, lineParts);
}

export function initDecorations(
  activeEditor: vscode.TextEditor | undefined,
  context: vscode.ExtensionContext
) {
  let timeout: NodeJS.Timer | undefined = undefined;

  function triggerUpdateDecorations() {
    if (timeout) {
      clearTimeout(timeout);
      timeout = undefined;
    }
    timeout = setTimeout(() => updateDecorations(activeEditor), 500);
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
