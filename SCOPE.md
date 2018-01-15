# JSAP SCOPE

## Code snippets
**Snippets of code that get executed when a JSAP file is parsed**
```js
<body>
${ 
    Math.sqrt(3.14159265); 
    return `sqrt of pi is ${}`;
}
</body>
```

## JSON front-matter
**JSAP equevelant to yaml front-matter; It provides specific configuration options for the page *(must be first line of the file)***
```json
%{
    "isolate": true,
    "error": "404.jsap",
    "cool": "yes",
    "more settings": 10000
}
```

## Includes
**Include other JSAP or html files**
```html
<body>
    @"headershiz.html"
</body>
```

## Comments
**Gets removed by the parser, never makes it to the web**
```
--{
    This comment will never show up to the client
}--
```

## Callables
### JSAP.forward(url: string): void
**Forwards the client to another page**

### JSAP.frontmatter(): FrontMatter
**Gets the parsed front matter**