# MDX Paste Link Extension

A VS Code extension that allows you to paste URLs over selected text to create markdown links in MDX files.

## Features

- Select text in an MDX file
- Copy a URL to your clipboard
- Use `Ctrl+Shift+V` (or `Cmd+Shift+V` on Mac) to create a markdown link
- The selected text becomes the link text, and the clipboard URL becomes the link destination

## Usage

1. Open an MDX file in VS Code
2. Select the text you want to turn into a link
3. Copy a URL to your clipboard
4. Press `Ctrl+Shift+V` (Windows/Linux) or `Cmd+Shift+V` (Mac)
5. The selected text will be replaced with markdown link format

## Installation

1. Open VS Code
2. Go to Extensions (Ctrl+Shift+X)
3. Search for "MDX Paste Link"
4. Click Install

## Development

To build and test this extension:

```bash
npm install
npm run compile
```

Then press F5 to open a new VS Code window with the extension loaded.

## Requirements

- VS Code 1.74.0 or higher
- MDX files (`.mdx` extension)

## License

MIT