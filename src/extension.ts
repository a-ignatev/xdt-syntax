import * as vscode from "vscode";
import { initDecorations } from "./decorations";

export function activate(context: vscode.ExtensionContext) {
  initDecorations(vscode.window.activeTextEditor, context);
}

export function deactivate() {}
