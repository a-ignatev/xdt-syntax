import * as vscode from "vscode";
import { Field, fieldsCatalog } from "./fieldsCatalog";

export const LENGTH_LENGTH = 3;
export const ID_LENGTH = 4;
const CARRIAGE_RETURN_LENGTH = 2;

export function forEachXdtLine(
  document: vscode.TextDocument,
  callback: (
    lineLength: number,
    field: Field | undefined,
    fieldNumber: string,
    data: string,
    startPos: vscode.Position,
    endPos: vscode.Position
  ) => void
) {
  const regEx = /^(\d{3})(\d{4})(.*)/gm;
  const text = document.getText();

  let match;
  while ((match = regEx.exec(text))) {
    const startPos = document.positionAt(match.index);
    const endPos = document.positionAt(match.index + match[0].length);

    const fieldNumber = match[2];
    const field = fieldsCatalog[fieldNumber];
    const lineLength = Number(match[1]);
    const data = match[3];

    callback(lineLength, field, fieldNumber, data, startPos, endPos);
  }
}

export function getXdtLineLength(length: number) {
  return length + LENGTH_LENGTH + ID_LENGTH + CARRIAGE_RETURN_LENGTH;
}

export function getDataLength(lineLength: number) {
  return lineLength - LENGTH_LENGTH - ID_LENGTH - CARRIAGE_RETURN_LENGTH;
}
