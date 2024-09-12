import * as vscode from "vscode";

import { identifyCodeBlock } from "./helper";
import { SnippetMapper } from "./constants";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "go-swagger-comment" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    "go-swagger-comment.genComment",
    () => {
      const editor = vscode.window.activeTextEditor;

      if (!editor || editor.document.languageId !== "go") {
        vscode.window.showErrorMessage(
          "Please use this command in an Go file."
        );
        return;
      }

      const selection = editor.selection;
      if (selection && !selection.isEmpty) {
        const selectionRange = new vscode.Range(
          selection.start.line,
          0,
          selection.end.line,
          0
        );
        const highlighted = editor.document.getText(selectionRange);
        const codeBlock = identifyCodeBlock(highlighted);

        if (codeBlock) {
          editor.insertSnippet(
            SnippetMapper[codeBlock],
            new vscode.Position(selection.start.line - 1, 0)
          );
        } else {
          vscode.window.showInformationMessage(
            "Invalid code selection made for api comment generation"
          );
          return;
        }
      } else {
        vscode.window.showInformationMessage("No selection made");
        return;
      }

      vscode.window.showInformationMessage("Comment generated");
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
