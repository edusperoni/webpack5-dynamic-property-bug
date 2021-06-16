# webpack5-dynamic-property-bug

This project illustrates a bug with webpack 5 where if you extend a class and use a dynamic property name, you may end up with a broken bundle.

For better context, see `bug.mjs` and the generated `dist/default.js` and `dist/usedExportsFalse.js`.

This will always fail:

```js
class NotExportedExtended extends BaseClass {
    [property.native]() {
        console.log('unexported extended');
    }
}
```

This will fail if you don't set `usedExports: false`:

```js
class NotExportedExtended extends BaseClass {
    [property.native]() {
        console.log('unexported extended');
    }
}
```

These work:

```js
class NotExportedNotExtended { // does not extend baseclass
    [property.native]() {
        console.log('unexported unextended');
    }
}

export class ExportedNotExtended { // does not extend baseclass
    [property.native]() {
        console.log('exported unextended');
    }
}
```


