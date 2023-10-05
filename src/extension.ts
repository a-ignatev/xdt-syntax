import * as vscode from "vscode";
import { initDecorations } from "./decorations/initDecorations";
import { initDiagnostics } from "./diagnostics/initDiagnostics";

export function activate(context: vscode.ExtensionContext) {
  initDecorations(vscode.window.activeTextEditor, context);
  initDiagnostics(context);
}

export function deactivate() {}
