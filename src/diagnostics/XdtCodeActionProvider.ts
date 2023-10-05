import * as vscode from "vscode";
import { XDT_LENGTH_ERROR } from "./initDiagnostics";
import { FixableDiagnostic } from "./Diagnostics";

export class XdtCodeActionProvider implements vscode.CodeActionProvider {
  diagnostics: vscode.DiagnosticCollection;

  constructor(diagnosics: vscode.DiagnosticCollection) {
    this.diagnostics = diagnosics;
  }

  public provideCodeActions(
    document: vscode.TextDocument,
    range: vscode.Range
  ): vscode.ProviderResult<vscode.CodeAction[]> {
    const actions: vscode.CodeAction[] = [];

    this.diagnostics.get(document.uri)?.forEach((diagnostic) => {
      if (
        diagnostic.code === XDT_LENGTH_ERROR &&
        diagnostic.range.contains(range)
      ) {
        actions.push(
          this.createXdtLengthQuickFixAction(
            document,
            range,
            (diagnostic as FixableDiagnostic).fix
          )
        );
      }
    });

    return actions;
  }

  private createXdtLengthQuickFixAction(
    document: vscode.TextDocument,
    range: vscode.Range,
    length: number
  ): vscode.CodeAction {
    const codeAction = new vscode.CodeAction(
      `Set length to ${length}`,
      vscode.CodeActionKind.QuickFix
    );
    codeAction.edit = new vscode.WorkspaceEdit();
    codeAction.edit.replace(
      document.uri,
      new vscode.Range(
        new vscode.Position(range.start.line, 0),
        new vscode.Position(range.start.line, 3)
      ),
      String(length).padStart(3, "0")
    );

    return codeAction;
  }
}
