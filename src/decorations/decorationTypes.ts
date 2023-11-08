import * as vscode from "vscode";

export const xdtLineInfoDecorationType =
  vscode.window.createTextEditorDecorationType({
    after: {
      color: "gray",
      margin: "24px",
    },
  });
