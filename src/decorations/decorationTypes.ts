import * as vscode from "vscode";

export const xdtLineInfoDecorationType =
  vscode.window.createTextEditorDecorationType({
    after: {
      color: "gray",
      margin: "10px",
    },
  });

export const xdtLinePartDecorationType =
  vscode.window.createTextEditorDecorationType({
    after: {
      contentText: " ",
    },
  });
