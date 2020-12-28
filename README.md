<h1>Remixml to incremental-DOM</h1>

[![NPM version](http://img.shields.io/npm/v/remixml-idom.svg?style=flat)](https://npmjs.org/package/remixml-idom)
[![Downloads](https://img.shields.io/npm/dm/remixml-idom.svg?style=flat)](https://npmjs.org/package/remixml-idom)
[![Rate on Openbase](https://badges.openbase.io/js/rating/remixml-idom.svg)](https://openbase.io/js/remixml-idom?utm_source=embedded&utm_medium=badge&utm_campaign=rate-badge)

Remixml component that renders to incremental-DOM.

## Requirements

It runs inside any webbrowser environment.

## Reference documentation

- `Remixmlidom.abstract2dom(abstract, node)`<br />
  Transmogrifies the children of DOM `node` to match the structure
  described by the DOM `abstract` using the incremental-dom library.
  Returns `node` again.

## References

- Postprocessor for the high performance Javascript templating engine
  [Remixml](http://remixml.org/).
- Compatible with the
  fastest [lockandload AMD-loader](https://www.npmjs.com/package/lockandload).
- [incremental-dom](https://github.com/google/incremental-dom).

Card-carrying member of the `zerodeps` movement.
