# JSAP SCOPE

## Code snippets
**Snippets of code that get executed when a JSAP file is parsed**
```js
<body>
${ 
    let x = Math.sqrt(3.14159265); 
    return `sqrt of pi is ${x}`;
}
</body>
```
## Expressions
**Snippets that return themself**
```js
<body>
={ 
    `now is ${new Date()}`;
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

## .JSAPConfig
**Configuration files for directories *(webserver only, not parser)***
```json
{
    "hidden": true,
    "permalink": "different/path",
    "auth": {
        "username": "beep beep",
        "password": "lettuce"
    }
}
```

## Includes
**Include other JSAP or html files**
```html
<body>
    +"headershiz.html" <-- Unparsed include --/>
    +@"headershiz.html" <-- Parsed include --/>
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