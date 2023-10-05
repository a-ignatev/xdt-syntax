import * as vscode from "vscode";
import {
  getXdtLineLength,
  LENGTH_LENGTH,
  ID_LENGTH,
  forEachXdtLine,
  getDataLength,
} from "../xdt/xdtHelpers";
import { Field } from "../xdt/fieldsCatalog";
import {
  XDT_LENGTH_ERROR,
  ERROR_SOURCE,
  XDT_DATA_LENGTH_ERROR,
} from "./initDiagnostics";

export class FixableDiagnostic extends vscode.Diagnostic {
  public fix!: number;
}

export class Diagnostics {
  updateDiagnostics(
    document: vscode.TextDocument,
    collection: vscode.DiagnosticCollection
  ): void {
    collection.clear();
    const errors: FixableDiagnostic[] = [];

    forEachXdtLine(
      document,
      (lineLength, field, _fieldNumber, data, startPos, endPos) => {
        const realDataLength = data.length;
        const expectedDataLength = getDataLength(lineLength);

        if (expectedDataLength !== realDataLength) {
          errors.push(this.createXdtLengthError(realDataLength, startPos));
        }

        if (
          field !== undefined &&
          field.minLength !== undefined &&
          field.maxLength !== undefined &&
          (realDataLength < field.minLength || realDataLength > field.maxLength)
        ) {
          errors.push(this.createXdtDataLengthError(field, startPos, endPos));
        }
      }
    );

    collection.set(document.uri, errors);
  }

  private createXdtLengthError(
    realDataLength: number,
    startPos: vscode.Position
  ): FixableDiagnostic {
    return {
      code: XDT_LENGTH_ERROR,
      message: `The length value is incorrect. The actual length of the line is ${getXdtLineLength(
        realDataLength
      )}.`,
      range: new vscode.Range(
        startPos,
        new vscode.Position(startPos.line, startPos.character + LENGTH_LENGTH)
      ),
      severity: vscode.DiagnosticSeverity.Error,
      source: ERROR_SOURCE,
      fix: getXdtLineLength(realDataLength),
    };
  }

  private createXdtDataLengthError(
    field: Field,
    startPos: vscode.Position,
    endPos: vscode.Position
  ): FixableDiagnostic {
    const text =
      field.minLength === field.maxLength
        ? `It should be equal to ${field.minLength}.`
        : `It should be in range between ${field.minLength} and ${field.maxLength}.`;

    return {
      code: XDT_DATA_LENGTH_ERROR,
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
      source: ERROR_SOURCE,
      fix: 0,
    };
  }
}
