function printCoord(x, y) {
    //console.log(`(${x}, ${y})`);
    return `(${x}, ${y})`;
}

console.log(printCoord('a','b'));


//multi line strings
const HTML5_SKELETON = `
    <!doctype html>
    <html>
    <head>
        <meta charset="UTF-8">
        <title></title>
    </head>
    <body>
    </body>
    </html>`;

console.log(HTML5_SKELETON);

//Strings are iterable, which means that you can use for-of to iterate over their characters:
for (const ch of 'abc') {
    console.log(ch);
}