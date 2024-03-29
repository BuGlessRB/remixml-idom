/** @license Copyright (c) 2018-2021 by Stephen R. van den Berg <srb@cuci.nl> */

/** @define {number} */ var DEBUG = 1;
/** @define {number} */ var ALERTS = 0;
                            // error context length
/** @define {number} */ var RUNTIMEDEBUG = 64;
/** @define {number} */ var MEASUREMENT = 0;
/** @define {number} */ var ASSERT = 1;
/** @define {number} */ var VERBOSE = 0;

// Cut BEGIN delete
(() =>
{ "use strict";
// Cut END delete

  // Cut BEGIN for externs
  // Cut BEGIN for prepend
  // Cut END for prepend
  // Cut END for externs
  // Cut BEGIN for prepend
  // Cut END for prepend

  const O = Object;
  const D = document;

  var /** !Object */ idom;

  const /** !Object */ g =
  { "abstract2dom":
      /** !Node */(/** !Array */ tpl, /** !Node= */ node) =>
      ( idom["patch"](node = node || D.createDocumentFragment(),
	 abstract2idom, tpl),
	node
      )
  };

  function /** void */ abstract2idom(/** !Array */ vdom)
  { var /** string|number */ name = /** @type{Object} */(vdom)[""];
    function /** void */ createcm(/** string */ txt)
    { // Kludge, because incremental-dom does not support comment nodes
      var /** !Node */ node = idom["text"](name);
      node.parentNode.replaceChild(D.createComment(txt), node);
    }
    switch (name)
    { case "!":
	createcm(vdom[0]);
        return;
      case "<":
      case "?":
	createcm(name + vdom[0]);
        return;
      case 1:
        name = 0;
        break;
      default:
        idom["elementOpenStart"](/** @type{string} */(name)
                                 /*, FIXME key */);
        let /** string */ narg;
        for (narg of O.keys(vdom).splice(vdom.length))
          switch (narg[0])
          { default:
              let /** string|Array */ val = /** @type{Object} */(vdom)[narg];
              if (val != null)
                idom["attr"](narg, val[""] ? val.join("") : val);
            case "_":case undefined:;
          }
        idom["elementOpenEnd"]();
    }
    var /** number */ i = 0;
    var /** !Array|string|number */ child;
    while ((child = vdom[i++]) !== undefined)
    { if (child[""])
        abstract2idom(child);
      else
      { var /** !Array|string */ nextchild;
        child = /** @type {number} */(child) + "";      // Cast to string
        // Concatenate strings first
        while((nextchild = vdom[i]) !== undefined && !nextchild[""])
          i++, child += nextchild;
        idom["text"](child);
      }
    }
    if (name)
      idom["elementClose"](name);
  }

  function /** !Object */ factory(/** !Object */ rxml,/** !Object */ idomr)
  { idom = idomr;
    O.assign(rxml, g);
    return g;
  }

  const /** string */ rxs = "remixml";
  const /** string */ iname = "incremental-dom";

  if (typeof define == "function" && define["amd"])
    define("remixml-idom", [rxs, iname], factory);
  else if (typeof exports == "object")
    O.assign(/** @type{!Object} */(exports),
     factory(require(rxs), require(iname)));
  else {
    var W = window;
    W["RemixmliDOM"] = factory(W["Remixml"], W["IncrementalDOM"]);
  }

// Cut BEGIN delete
}).call(this);
// Cut BEGIN end
