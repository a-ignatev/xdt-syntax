import * as vscode from "vscode";
import { initDecorations } from "./decorations";
import { initDiagnostics } from "./diagnostics";

export function activate(context: vscode.ExtensionContext) {
  initDecorations(vscode.window.activeTextEditor, context);
  initDiagnostics(context);
}

export function deactivate() {}
