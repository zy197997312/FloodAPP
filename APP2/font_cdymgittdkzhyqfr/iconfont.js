;(function(window) {

  var svgSprite = '<svg>' +
    '' +
    '<symbol id="icon-xinwen" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M888.908625 1024 135.046615 1024C87.849115 1024 49.424218 985.575103 49.424218 938.355224L49.424218 85.644776C49.424218 38.424897 87.849115 0 135.046615 0L710.054941 0l264.520838 269.287584L974.57578 938.355224C974.57578 985.575103 936.150883 1024 888.908625 1024zM135.046615 44.400114c-22.737155 0-41.222283 18.485128-41.222283 41.244662L93.824332 938.355224c0 22.759534 18.485128 41.244662 41.222283 41.244662l753.86201 0c22.759534 0 41.267041-18.485128 41.267041-41.244662L930.175666 287.437026 691.435539 44.400114 135.046615 44.400114z"  ></path>' +
    '' +
    '<path d="M221.4299 215.689665l251.630483 0 0 44.400114-251.630483 0 0-44.400114Z"  ></path>' +
    '' +
    '<path d="M221.4299 329.532093l251.630483 0 0 44.400114-251.630483 0 0-44.400114Z"  ></path>' +
    '' +
    '<path d="M221.4299 443.374522l251.630483 0 0 44.400114-251.630483 0 0-44.400114Z"  ></path>' +
    '' +
    '<path d="M221.4299 617.103394l578.141399 0 0 44.400114-578.141399 0 0-44.400114Z"  ></path>' +
    '' +
    '<path d="M221.4299 763.910221l578.141399 0 0 44.400114-578.141399 0 0-44.400114Z"  ></path>' +
    '' +
    '<path d="M950.831566 299.029394l-180.688769 0c-47.1975 0-85.622397-38.424897-85.622397-85.644776L684.5204 28.287169l44.400114 0 0 185.09745c0 22.759534 18.485128 41.244662 41.222283 41.244662l180.688769 0L950.831566 299.029394z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '<symbol id="icon-iconfont0065" viewBox="0 0 1024 1024">' +
    '' +
    '<path d="M581.4 434.6c0 0 3.2-408.6 0-408.6 233.6 0 406 173.5 406 408.6 0.1 1.4-406 0-406 0l0 0zM953.7 518.4c0 244.4-196.9 442.7-439.8 442.7s-439.9-198.2-439.9-442.7 196.9-442.7 439.8-442.7c11.4 0 22.6 0.9 33.9 1.7l0 391.2 403.4 0c1.6 15.8 2.6 33.7 2.6 49.8l0 0zM917.7 504.8l-403.9 0 0-395c-224.2 0-406 182.9-406 408.6s181.8 408.6 406 408.6 406-182.9 406-408.6c0-43.9-2.1-13.6-2.1-13.6l0 0z"  ></path>' +
    '' +
    '</symbol>' +
    '' +
    '</svg>'
  var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
  var shouldInjectCss = script.getAttribute("data-injectcss")

  /**
   * document ready
   */
  var ready = function(fn) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) {
        setTimeout(fn, 0)
      } else {
        var loadFn = function() {
          document.removeEventListener("DOMContentLoaded", loadFn, false)
          fn()
        }
        document.addEventListener("DOMContentLoaded", loadFn, false)
      }
    } else if (document.attachEvent) {
      IEContentLoaded(window, fn)
    }

    function IEContentLoaded(w, fn) {
      var d = w.document,
        done = false,
        // only fire once
        init = function() {
          if (!done) {
            done = true
            fn()
          }
        }
        // polling for no errors
      var polling = function() {
        try {
          // throws errors until after ondocumentready
          d.documentElement.doScroll('left')
        } catch (e) {
          setTimeout(polling, 50)
          return
        }
        // no errors, fire

        init()
      };

      polling()
        // trying to always fire before onload
      d.onreadystatechange = function() {
        if (d.readyState == 'complete') {
          d.onreadystatechange = null
          init()
        }
      }
    }
  }

  /**
   * Insert el before target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var before = function(el, target) {
    target.parentNode.insertBefore(el, target)
  }

  /**
   * Prepend el to target
   *
   * @param {Element} el
   * @param {Element} target
   */

  var prepend = function(el, target) {
    if (target.firstChild) {
      before(el, target.firstChild)
    } else {
      target.appendChild(el)
    }
  }

  function appendSvg() {
    var div, svg

    div = document.createElement('div')
    div.innerHTML = svgSprite
    svgSprite = null
    svg = div.getElementsByTagName('svg')[0]
    if (svg) {
      svg.setAttribute('aria-hidden', 'true')
      svg.style.position = 'absolute'
      svg.style.width = 0
      svg.style.height = 0
      svg.style.overflow = 'hidden'
      prepend(svg, document.body)
    }
  }

  if (shouldInjectCss && !window.__iconfont__svg__cssinject__) {
    window.__iconfont__svg__cssinject__ = true
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (e) {
      console && console.log(e)
    }
  }

  ready(appendSvg)


})(window)