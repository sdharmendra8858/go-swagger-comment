# Go Swagger Comment Extension

**Go Swagger Comment** is a Visual Studio Code extension that simplifies the process of generating Swagger comments for Go code. The extension allows developers to highlight a block of Go code and generate API comments automatically based on the selected code snippet.

## Features

- **Automatic Swagger Comment Generation**: Quickly generate Swagger comments for highlighted Go code snippets.
- **Go Language Support**: Designed specifically for Go programming language files.
- **Easy-to-use Commands**: Use the command palette or keyboard shortcuts to trigger comment generation.

## Installation

### From the Visual Studio Code Marketplace

1. Open Visual Studio Code.
2. Go to the Extensions view by clicking on the Extensions icon in the Activity Bar on the side of the window or pressing `Ctrl+Shift+X`.
3. Search for "go-swagger-comment".
4. Click the "Install" button.

### Manual Installation

1. Download the extension package from the [releases](https://github.com/sdharmendra8858/go-swagger-comment/releases) page.
2. Open Visual Studio Code and go to the Extensions view.
3. Click on the three dots at the top-right corner and choose "Install from VSIX...".
4. Select the downloaded `.vsix` file to install.

## Usage

1. Open any Go (`.go`) file in Visual Studio Code.
2. Highlight the Go code block you want to generate a Swagger comment for.
3. **Use the Keyboard Shortcut**: Press `Ctrl+Shift+F` to generate a Swagger comment.
4. Alternatively, open the command palette (`Ctrl+Shift+P` or `Cmd+Shift+P` on macOS), search for `Gen Swagger Comment`, and press `Enter`.

### Keybindings

- **`Ctrl+Shift+F`** : Generate Swagger Comment for the highlighted Go code block.

## Commands

- **`go-swagger-comment.genComment`**: Generates a Swagger comment for the highlighted Go code block.

## Requirements

- Visual Studio Code version `1.88.1` or higher.
- Go extension for Visual Studio Code (recommended for Go development).

## Configuration

This extension does not require any specific configuration. However, to customize the generated comments or enhance the functionality, you may modify the `SnippetMapper` in `./src/constants.ts` or the `identifyCodeBlock` function in `./src/helper.ts`.

## Development

If you want to contribute to the development of this extension, follow these steps to set up the project locally:

### Prerequisites

- [Node.js](https://nodejs.org/) (version 16.x or higher)
- [npm](https://www.npmjs.com/) (version 7.x or higher)
- [Visual Studio Code](https://code.visualstudio.com/)

### Setup

1. Clone the repository:

    ```bash
    git clone https://github.com/sdharmendra8858/go-swagger-comment.git
    cd go-swagger-comment
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Build the extension:

    ```bash
    npm run compile
    ```

4. Open the extension in Visual Studio Code:

    ```bash
    code .
    ```

5. Run the extension:

   - Press `F5` to open a new VSCode window with the extension loaded.
