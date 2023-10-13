import * as vscode from "vscode";

export const xdtLineInfoDecorationType =
  vscode.window.createTextEditorDecorationType({
    after: {
      color: "gray",
      margin: "24px",
    },
  });

export const xdtLinePartDecorationType =
  vscode.window.createTextEditorDecorationType({
    after: {
      contentText: " ",
      margin: "-2px",
    },
  });
