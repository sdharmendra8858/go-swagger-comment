import vscode from "vscode";

import snippet from "./api.comment.json";

export const apiComment = () => {
  const snippetString = snippet["Go Comment"].body.join(" \n");

  return new vscode.SnippetString(snippetString);
};
