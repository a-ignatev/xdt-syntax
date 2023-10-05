import * as vscode from "vscode";
import { fieldsCatalog } from "./fieldsCatalog";

const LENGTH_LENGTH = 3;
const ID_LENGTH = 4;
const CARRIAGE_RETURN_LENGTH = 2;

export class Diagnostics {
  private getXdtLineLength(length: number) {
    return length + LENGTH_LENGTH + ID_LENGTH + CARRIAGE_RETURN_LENGTH;
  }

  updateDiagnostics(
    document: vscode.TextDocument,
    collection: vscode.DiagnosticCollection
  ): void {
    collection.clear();
    const errors: vscode.Diagnostic[] = [];
    const regEx = /(\d{3})(\d{4})(.*)/g;
    const text = document.getText();
    let match;

    while ((match = regEx.exec(text))) {
      const startPos = document.positionAt(match.index);
      const endPos = document.positionAt(match.index + match[0].length);

      const length = Number(match[1]);
      const realDataLength = match[3].length;
      const expectedDataLength =
        length - LENGTH_LENGTH - ID_LENGTH - CARRIAGE_RETURN_LENGTH;

      if (expectedDataLength !== realDataLength) {
        errors.push({
          code: "",
          message: `The length value is incorrect. The actual length of the line is ${this.getXdtLineLength(
            realDataLength
          )}.`,
          range: new vscode.Range(
            startPos,
            new vscode.Position(
              startPos.line,
              startPos.character + LENGTH_LENGTH
            )
          ),
          severity: vscode.DiagnosticSeverity.Error,
          source: "KVDT",
        });
      }

      const field = fieldsCatalog[match[2]];
      if (
        field !== undefined &&
        field.minLength !== undefined &&
        field.maxLength !== undefined
      ) {
        if (
          realDataLength < field.minLength ||
          realDataLength > field.maxLength
        ) {
          const text =
            field.minLength === field.maxLength
              ? `It should be equal to ${field.minLength}.`
              : `It should be in range between ${field.minLength} and ${field.maxLength}.`;

          errors.push({
            code: "",
            message:
              "The length of the data violates the fields catalog definition.\n" +
              text,
            range: new vscode.Range(
              new vscode.Position(
                startPos.line,
                startPos.character + LENGTH_LENGTH + ID_LENGTH
              ),
              endPos
            ),
            severity: vscode.DiagnosticSeverity.Error,
            source: "KVDT",
          });
        }
      }
    }

    collection.set(document.uri, errors);
  }
}

export function initDiagnostics(context: vscode.ExtensionContext) {
  const diagnostics = new Diagnostics();
  const collection = vscode.languages.createDiagnosticCollection("xdt");

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
}
