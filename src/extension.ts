import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    const disposable = vscode.commands.registerCommand('mdx-paste-link.pasteLink', async () => {
        const editor = vscode.window.activeTextEditor;
        if (!editor) {
            return;
        }

        const document = editor.document;
        const selection = editor.selection;
        
        // Check if this is an MDX or Markdown file
        if (document.languageId !== 'mdx' && document.languageId !== 'markdown') {
            vscode.window.showWarningMessage('This command only works with MDX and Markdown files');
            return;
        }

        // Get the selected text
        const selectedText = document.getText(selection);
        
        if (!selectedText) {
            vscode.window.showWarningMessage('Please select text to create a link');
            return;
        }

        // Get clipboard content
        const clipboardText = await vscode.env.clipboard.readText();
        
        if (!clipboardText) {
            vscode.window.showWarningMessage('No content in clipboard');
            return;
        }

        // Check if clipboard contains a URL (more flexible pattern)
        const urlPattern = /^https?:\/\/\S+$|^www\.\S+$|^\S+\.\S+$/;
        const trimmedClipboard = clipboardText.trim();
        if (!urlPattern.test(trimmedClipboard)) {
            vscode.window.showWarningMessage('Clipboard does not contain a valid URL');
            return;
        }

        // Add protocol if missing
        let finalUrl = trimmedClipboard;
        if (!trimmedClipboard.startsWith('http')) {
            finalUrl = trimmedClipboard.startsWith('www.') ? `https://${trimmedClipboard}` : `https://${trimmedClipboard}`;
        }

        // Create markdown link format
        const markdownLink = `[${selectedText}](${finalUrl})`;

        // Replace the selected text with the markdown link
        await editor.edit(editBuilder => {
            editBuilder.replace(selection, markdownLink);
        });

        vscode.window.showInformationMessage('Link created successfully!');
    });

    context.subscriptions.push(disposable);
}

export function deactivate() {}