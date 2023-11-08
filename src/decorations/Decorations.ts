import * as vscode from "vscode";
import { Field } from "../xdt/fieldsCatalog";
import { forEachXdtLine, getDataLength } from "../xdt/xdtHelpers";
import { xdtLineInfoDecorationType } from "./decorationTypes";

export class Decorations {
  updateDecorations(activeEditor: vscode.TextEditor | undefined) {
    if (!activeEditor) {
      return;
    }

    const lines: vscode.DecorationOptions[] = [];

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
      }
    );

    activeEditor.setDecorations(xdtLineInfoDecorationType, lines);
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

    if (field?.minLength || field?.maxLength) {
      markdown.appendMarkdown(
        `  \nData length range: [*${field.minLength} - ${field.maxLength}*]`
      );
    }

    return markdown;
  }
}
