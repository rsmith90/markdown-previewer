   function updatePreview() {
        let previewElement = document.getElementById("preview");
        let editorValue = document.getElementById("editor").value;
        let markedUpHTML = marked(editorValue);
        previewElement.innerHTML = markedUpHTML;

};

    function setDefault() {
    let defaultText = 
`# Welcome to my Markdown Previewer!
## Heading level 2
[random link to markdown]
(https://www.mychemicalromance.com/)

This is a regular paragraph.
    <table>
        <tr>
            <td>Foo</td>
        </tr>
    </table>          

This is another regular paragraph.

\`inline code?\`

<html>
<head>
</head>
</html>

1. First item
2. Second item
3. Third item
4. Fourth item

I just love **bold text**.

>learning to be a useful programmer

![freeCodeCamp Logo](no-matter-what.jpeg)`;

    let editorField = 
        document.getElementById("editor");
    let previewElement = document.getElementById("preview");
        editorField.value = defaultText;
        previewElement.innerHTML = marked(defaultText);
}