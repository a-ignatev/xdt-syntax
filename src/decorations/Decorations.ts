import * as vscode from "vscode";
import { Field } from "../xdt/fieldsCatalog";
import { forEachXdtLine, getDataLength } from "../xdt/xdtHelpers";
import {
  xdtLineInfoDecorationType,
  xdtLinePartDecorationType,
} from "./decorationTypes";

export class Decorations {
  updateDecorations(activeEditor: vscode.TextEditor | undefined) {
    if (!activeEditor) {
      return;
    }

    const lines: vscode.DecorationOptions[] = [];
    const lineParts: vscode.DecorationOptions[] = [];

    forEachXdtLine(
      activeEditor.document,
      (lineLength, field, fieldNumber, data, startPos, endPos) => {
        const markdown = this.createMarkdown(
          fieldNumber,
          field,
          lineLength,
          data
        );
        lines.push({
          range: new vscode.Range(endPos, endPos),
          hoverMessage: markdown,
          renderOptions: {
            after: {
              contentText:
                field?.name || "field is not found in the fields catalog!",
            },
          },
        });
        lineParts.push({
          range: new vscode.Range(
            startPos,
            new vscode.Position(startPos.line, startPos.character + 3)
          ),
        });
        lineParts.push({
          range: new vscode.Range(
            new vscode.Position(startPos.line, startPos.character + 3),
            new vscode.Position(startPos.line, startPos.character + 7)
          ),
        });
      }
    );

    activeEditor.setDecorations(xdtLineInfoDecorationType, lines);
    activeEditor.setDecorations(xdtLinePartDecorationType, lineParts);
  }

  private createMarkdown(
    fieldNumber: string,
    field: Field | undefined,
    lineLength: number,
    data: string
  ) {
    const markdown = new vscode.MarkdownString(
      `**${fieldNumber}** *${field && field.name}*`
    );
    markdown.isTrusted = true;
    markdown.appendMarkdown(`  \n`);
    markdown.appendMarkdown(`  \nLine length: *${lineLength}*`);
    markdown.appendMarkdown(`  \nData length: *${getDataLength(lineLength)}*`);
    markdown.appendMarkdown(`  \nActual data length: *${data.length}*`);

    if (field) {
      markdown.appendMarkdown(
        `  \nData length range: [*${field.minLength} - ${field.maxLength}*]`
      );
    }

    return markdown;
  }
}
