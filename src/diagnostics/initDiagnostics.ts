import * as vscode from "vscode";
import { XdtCodeActionProvider } from "./XdtCodeActionProvider";
import { Diagnostics } from "./Diagnostics";

export const XDT_LENGTH_ERROR = "xdt-length";
export const XDT_DATA_LENGTH_ERROR = "xdt-data-length";
export const ERROR_SOURCE = "KVDT";

export function initDiagnostics(context: vscode.ExtensionContext) {
  const diagnostics = new Diagnostics();
  const collection = vscode.languages.createDiagnosticCollection("xdt-errors");

  if (vscode.window.activeTextEditor) {
    diagnostics.updateDiagnostics(
      vscode.window.activeTextEditor.document,
      collection
    );
  }

  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((editor) => {
      if (editor) {
        diagnostics.updateDiagnostics(editor.document, collection);
      }
    })
  );

  context.subscriptions.push(
    vscode.languages.registerCodeActionsProvider(
      "xdt",
      new XdtCodeActionProvider(collection),
      {
        providedCodeActionKinds: [vscode.CodeActionKind.QuickFix],
      }
    )
  );
}
