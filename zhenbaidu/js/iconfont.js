;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-iconfontcolor11" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M939.264 84.72c-112.464-112.464-294.832-112.464-407.296 0-84.096 84.096-105.264 207.248-63.6 311.056-2.016 1.264-3.952 2.704-5.696 4.448L23.008 839.888c-12.448 12.448-22.624 37.024-22.624 54.624l0 97.168c0 17.6 14.4 31.984 32 31.952l97.312-0.176c17.6-0.032 32-14.448 32-32.048l0-93.552c0-17.6 14.4-32 32-32l93.536 0c17.6 0 32.016-14.4 32.048-32l0.16-93.792c0.032-17.6 14.448-32 32.048-32l93.552 0c17.6 0 42.176-10.176 54.624-22.624l124.096-124.112c1.744-1.744 3.184-3.664 4.432-5.68 103.808 41.664 226.96 20.496 311.056-63.6C1051.728 379.552 1051.728 197.184 939.264 84.72zM905.328 277.056c-43.728 43.728-114.656 43.728-158.384 0s-43.728-114.656 0-158.384 114.656-43.728 158.384 0S949.056 233.328 905.328 277.056z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-yonghuming" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M504.951467 511.979534c93.490278 0 169.279405-74.001411 169.279405-165.259858 0-91.275843-75.79015-165.247578-169.279405-165.247578-93.486184 0-169.287591 73.971735-169.279405 165.247578C335.671039 437.978123 411.465283 511.979534 504.951467 511.979534zM582.550823 567.078433 441.46555 567.078433c-120.766504 0-218.677465 95.563496-218.677465 213.450417l0 13.770632c0 48.182372 97.91096 48.228421 218.677465 48.228421l141.085272 0c120.754225 0 218.661092-1.780553 218.661092-48.228421l0-13.770632C801.211914 662.641929 703.313234 567.078433 582.550823 567.078433z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
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

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
