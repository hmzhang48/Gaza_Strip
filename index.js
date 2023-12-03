(() => {
  // node_modules/reveal.js/dist/reveal.esm.js
  var e = (e2, t2) => {
    for (let i2 in t2)
      e2[i2] = t2[i2];
    return e2;
  };
  var t = (e2, t2) => Array.from(e2.querySelectorAll(t2));
  var i = (e2, t2, i2) => {
    i2 ? e2.classList.add(t2) : e2.classList.remove(t2);
  };
  var s = (e2) => {
    if ("string" == typeof e2) {
      if ("null" === e2)
        return null;
      if ("true" === e2)
        return true;
      if ("false" === e2)
        return false;
      if (e2.match(/^-?[\d\.]+$/))
        return parseFloat(e2);
    }
    return e2;
  };
  var a = (e2, t2) => {
    e2.style.transform = t2;
  };
  var n = (e2, t2) => {
    let i2 = e2.matches || e2.matchesSelector || e2.msMatchesSelector;
    return !(!i2 || !i2.call(e2, t2));
  };
  var r = (e2, t2) => {
    if ("function" == typeof e2.closest)
      return e2.closest(t2);
    for (; e2; ) {
      if (n(e2, t2))
        return e2;
      e2 = e2.parentNode;
    }
    return null;
  };
  var o = (e2) => {
    let t2 = document.createElement("style");
    return t2.type = "text/css", e2 && e2.length > 0 && (t2.styleSheet ? t2.styleSheet.cssText = e2 : t2.appendChild(document.createTextNode(e2))), document.head.appendChild(t2), t2;
  };
  var l = () => {
    let e2 = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t2) => {
      e2[t2.split("=").shift()] = t2.split("=").pop();
    });
    for (let t2 in e2) {
      let i2 = e2[t2];
      e2[t2] = s(unescape(i2));
    }
    return void 0 !== e2.dependencies && delete e2.dependencies, e2;
  };
  var d = { mp4: "video/mp4", m4a: "video/mp4", ogv: "video/ogg", mpeg: "video/mpeg", webm: "video/webm" };
  var c = navigator.userAgent;
  var h = /(iphone|ipod|ipad|android)/gi.test(c) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
  var u = /android/gi.test(c);
  var g = function(e2) {
    if (e2) {
      var t2 = function(e3) {
        return [].slice.call(e3);
      }, i2 = 3, s2 = [], a2 = null, n2 = "requestAnimationFrame" in e2 ? function() {
        e2.cancelAnimationFrame(a2), a2 = e2.requestAnimationFrame(function() {
          return o2(s2.filter(function(e3) {
            return e3.dirty && e3.active;
          }));
        });
      } : function() {
      }, r2 = function(e3) {
        return function() {
          s2.forEach(function(t3) {
            return t3.dirty = e3;
          }), n2();
        };
      }, o2 = function(e3) {
        e3.filter(function(e4) {
          return !e4.styleComputed;
        }).forEach(function(e4) {
          e4.styleComputed = h3(e4);
        }), e3.filter(u2).forEach(g2);
        var t3 = e3.filter(c2);
        t3.forEach(d2), t3.forEach(function(e4) {
          g2(e4), l2(e4);
        }), t3.forEach(p2);
      }, l2 = function(e3) {
        return e3.dirty = 0;
      }, d2 = function(e3) {
        e3.availableWidth = e3.element.parentNode.clientWidth, e3.currentWidth = e3.element.scrollWidth, e3.previousFontSize = e3.currentFontSize, e3.currentFontSize = Math.min(Math.max(e3.minSize, e3.availableWidth / e3.currentWidth * e3.previousFontSize), e3.maxSize), e3.whiteSpace = e3.multiLine && e3.currentFontSize === e3.minSize ? "normal" : "nowrap";
      }, c2 = function(e3) {
        return 2 !== e3.dirty || 2 === e3.dirty && e3.element.parentNode.clientWidth !== e3.availableWidth;
      }, h3 = function(t3) {
        var i3 = e2.getComputedStyle(t3.element, null);
        return t3.currentFontSize = parseFloat(i3.getPropertyValue("font-size")), t3.display = i3.getPropertyValue("display"), t3.whiteSpace = i3.getPropertyValue("white-space"), true;
      }, u2 = function(e3) {
        var t3 = false;
        return !e3.preStyleTestCompleted && (/inline-/.test(e3.display) || (t3 = true, e3.display = "inline-block"), "nowrap" !== e3.whiteSpace && (t3 = true, e3.whiteSpace = "nowrap"), e3.preStyleTestCompleted = true, t3);
      }, g2 = function(e3) {
        e3.element.style.whiteSpace = e3.whiteSpace, e3.element.style.display = e3.display, e3.element.style.fontSize = e3.currentFontSize + "px";
      }, p2 = function(e3) {
        e3.element.dispatchEvent(new CustomEvent("fit", { detail: { oldValue: e3.previousFontSize, newValue: e3.currentFontSize, scaleFactor: e3.currentFontSize / e3.previousFontSize } }));
      }, v2 = function(e3, t3) {
        return function() {
          e3.dirty = t3, e3.active && n2();
        };
      }, m2 = function(e3) {
        return function() {
          s2 = s2.filter(function(t3) {
            return t3.element !== e3.element;
          }), e3.observeMutations && e3.observer.disconnect(), e3.element.style.whiteSpace = e3.originalStyle.whiteSpace, e3.element.style.display = e3.originalStyle.display, e3.element.style.fontSize = e3.originalStyle.fontSize;
        };
      }, f2 = function(e3) {
        return function() {
          e3.active || (e3.active = true, n2());
        };
      }, y2 = function(e3) {
        return function() {
          return e3.active = false;
        };
      }, b2 = function(e3) {
        e3.observeMutations && (e3.observer = new MutationObserver(v2(e3, 1)), e3.observer.observe(e3.element, e3.observeMutations));
      }, w2 = { minSize: 16, maxSize: 512, multiLine: true, observeMutations: "MutationObserver" in e2 && { subtree: true, childList: true, characterData: true } }, E2 = null, S2 = function() {
        e2.clearTimeout(E2), E2 = e2.setTimeout(r2(2), k2.observeWindowDelay);
      }, A2 = ["resize", "orientationchange"];
      return Object.defineProperty(k2, "observeWindow", { set: function(t3) {
        var i3 = "".concat(t3 ? "add" : "remove", "EventListener");
        A2.forEach(function(t4) {
          e2[i3](t4, S2);
        });
      } }), k2.observeWindow = true, k2.observeWindowDelay = 100, k2.fitAll = r2(i2), k2;
    }
    function R2(e3, t3) {
      var a3 = Object.assign({}, w2, t3), r3 = e3.map(function(e4) {
        var t4 = Object.assign({}, a3, { element: e4, active: true });
        return function(e5) {
          e5.originalStyle = { whiteSpace: e5.element.style.whiteSpace, display: e5.element.style.display, fontSize: e5.element.style.fontSize }, b2(e5), e5.newbie = true, e5.dirty = true, s2.push(e5);
        }(t4), { element: e4, fit: v2(t4, i2), unfreeze: f2(t4), freeze: y2(t4), unsubscribe: m2(t4) };
      });
      return n2(), r3;
    }
    function k2(e3) {
      var i3 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
      return "string" == typeof e3 ? R2(t2(document.querySelectorAll(e3)), i3) : R2([e3], i3)[0];
    }
  }("undefined" == typeof window ? null : window);
  var p = class {
    constructor(e2) {
      this.Reveal = e2, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
    }
    shouldPreload(e2) {
      if (this.Reveal.isScrollView())
        return true;
      let t2 = this.Reveal.getConfig().preloadIframes;
      return "boolean" != typeof t2 && (t2 = e2.hasAttribute("data-preload")), t2;
    }
    load(e2, i2 = {}) {
      e2.style.display = this.Reveal.getConfig().display, t(e2, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e3) => {
        ("IFRAME" !== e3.tagName || this.shouldPreload(e3)) && (e3.setAttribute("src", e3.getAttribute("data-src")), e3.setAttribute("data-lazy-loaded", ""), e3.removeAttribute("data-src"));
      }), t(e2, "video, audio").forEach((e3) => {
        let i3 = 0;
        t(e3, "source[data-src]").forEach((e4) => {
          e4.setAttribute("src", e4.getAttribute("data-src")), e4.removeAttribute("data-src"), e4.setAttribute("data-lazy-loaded", ""), i3 += 1;
        }), h && "VIDEO" === e3.tagName && e3.setAttribute("playsinline", ""), i3 > 0 && e3.load();
      });
      let s2 = e2.slideBackgroundElement;
      if (s2) {
        s2.style.display = "block";
        let t2 = e2.slideBackgroundContentElement, a2 = e2.getAttribute("data-background-iframe");
        if (false === s2.hasAttribute("data-loaded")) {
          s2.setAttribute("data-loaded", "true");
          let n3 = e2.getAttribute("data-background-image"), r2 = e2.getAttribute("data-background-video"), o2 = e2.hasAttribute("data-background-video-loop"), l2 = e2.hasAttribute("data-background-video-muted");
          if (n3)
            /^data:/.test(n3.trim()) ? t2.style.backgroundImage = `url(${n3.trim()})` : t2.style.backgroundImage = n3.split(",").map((e3) => `url(${((e4 = "") => encodeURI(e4).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[!'()*]/g, (e5) => `%${e5.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(e3.trim()))})`).join(",");
          else if (r2 && !this.Reveal.isSpeakerNotes()) {
            let e3 = document.createElement("video");
            o2 && e3.setAttribute("loop", ""), l2 && (e3.muted = true), h && (e3.muted = true, e3.setAttribute("playsinline", "")), r2.split(",").forEach((t3) => {
              let i3 = ((e4 = "") => d[e4.split(".").pop()])(t3);
              e3.innerHTML += i3 ? `<source src="${t3}" type="${i3}">` : `<source src="${t3}">`;
            }), t2.appendChild(e3);
          } else if (a2 && true !== i2.excludeIframes) {
            let e3 = document.createElement("iframe");
            e3.setAttribute("allowfullscreen", ""), e3.setAttribute("mozallowfullscreen", ""), e3.setAttribute("webkitallowfullscreen", ""), e3.setAttribute("allow", "autoplay"), e3.setAttribute("data-src", a2), e3.style.width = "100%", e3.style.height = "100%", e3.style.maxHeight = "100%", e3.style.maxWidth = "100%", t2.appendChild(e3);
          }
        }
        let n2 = t2.querySelector("iframe[data-src]");
        n2 && this.shouldPreload(s2) && !/autoplay=(1|true|yes)/gi.test(a2) && n2.getAttribute("src") !== a2 && n2.setAttribute("src", a2);
      }
      this.layout(e2);
    }
    layout(e2) {
      Array.from(e2.querySelectorAll(".r-fit-text")).forEach((e3) => {
        g(e3, { minSize: 24, maxSize: 0.8 * this.Reveal.getConfig().height, observeMutations: false, observeWindow: false });
      });
    }
    unload(e2) {
      e2.style.display = "none";
      let i2 = this.Reveal.getSlideBackground(e2);
      i2 && (i2.style.display = "none", t(i2, "iframe[src]").forEach((e3) => {
        e3.removeAttribute("src");
      })), t(e2, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e3) => {
        e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
      }), t(e2, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e3) => {
        e3.setAttribute("data-src", e3.getAttribute("src")), e3.removeAttribute("src");
      });
    }
    formatEmbeddedContent() {
      let e2 = (e3, i2, s2) => {
        t(this.Reveal.getSlidesElement(), "iframe[" + e3 + '*="' + i2 + '"]').forEach((t2) => {
          let i3 = t2.getAttribute(e3);
          i3 && -1 === i3.indexOf(s2) && t2.setAttribute(e3, i3 + (/\?/.test(i3) ? "&" : "?") + s2);
        });
      };
      e2("src", "youtube.com/embed/", "enablejsapi=1"), e2("data-src", "youtube.com/embed/", "enablejsapi=1"), e2("src", "player.vimeo.com/", "api=1"), e2("data-src", "player.vimeo.com/", "api=1");
    }
    startEmbeddedContent(e2) {
      e2 && !this.Reveal.isSpeakerNotes() && (t(e2, 'img[src$=".gif"]').forEach((e3) => {
        e3.setAttribute("src", e3.getAttribute("src"));
      }), t(e2, "video, audio").forEach((e3) => {
        if (r(e3, ".fragment") && !r(e3, ".fragment.visible"))
          return;
        let t2 = this.Reveal.getConfig().autoPlayMedia;
        if ("boolean" != typeof t2 && (t2 = e3.hasAttribute("data-autoplay") || !!r(e3, ".slide-background")), t2 && "function" == typeof e3.play)
          if (e3.readyState > 1)
            this.startEmbeddedMedia({ target: e3 });
          else if (h) {
            let t3 = e3.play();
            t3 && "function" == typeof t3.catch && false === e3.controls && t3.catch(() => {
              e3.controls = true, e3.addEventListener("play", () => {
                e3.controls = false;
              });
            });
          } else
            e3.removeEventListener("loadeddata", this.startEmbeddedMedia), e3.addEventListener("loadeddata", this.startEmbeddedMedia);
      }), t(e2, "iframe[src]").forEach((e3) => {
        r(e3, ".fragment") && !r(e3, ".fragment.visible") || this.startEmbeddedIframe({ target: e3 });
      }), t(e2, "iframe[data-src]").forEach((e3) => {
        r(e3, ".fragment") && !r(e3, ".fragment.visible") || e3.getAttribute("src") !== e3.getAttribute("data-src") && (e3.removeEventListener("load", this.startEmbeddedIframe), e3.addEventListener("load", this.startEmbeddedIframe), e3.setAttribute("src", e3.getAttribute("data-src")));
      }));
    }
    startEmbeddedMedia(e2) {
      let t2 = !!r(e2.target, "html"), i2 = !!r(e2.target, ".present");
      t2 && i2 && (e2.target.currentTime = 0, e2.target.play()), e2.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
    }
    startEmbeddedIframe(e2) {
      let t2 = e2.target;
      if (t2 && t2.contentWindow) {
        let i2 = !!r(e2.target, "html"), s2 = !!r(e2.target, ".present");
        if (i2 && s2) {
          let e3 = this.Reveal.getConfig().autoPlayMedia;
          "boolean" != typeof e3 && (e3 = t2.hasAttribute("data-autoplay") || !!r(t2, ".slide-background")), /youtube\.com\/embed\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t2.getAttribute("src")) && e3 ? t2.contentWindow.postMessage('{"method":"play"}', "*") : t2.contentWindow.postMessage("slide:start", "*");
        }
      }
    }
    stopEmbeddedContent(i2, s2 = {}) {
      s2 = e({ unloadIframes: true }, s2), i2 && i2.parentNode && (t(i2, "video, audio").forEach((e2) => {
        e2.hasAttribute("data-ignore") || "function" != typeof e2.pause || (e2.setAttribute("data-paused-by-reveal", ""), e2.pause());
      }), t(i2, "iframe").forEach((e2) => {
        e2.contentWindow && e2.contentWindow.postMessage("slide:stop", "*"), e2.removeEventListener("load", this.startEmbeddedIframe);
      }), t(i2, 'iframe[src*="youtube.com/embed/"]').forEach((e2) => {
        !e2.hasAttribute("data-ignore") && e2.contentWindow && "function" == typeof e2.contentWindow.postMessage && e2.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
      }), t(i2, 'iframe[src*="player.vimeo.com/"]').forEach((e2) => {
        !e2.hasAttribute("data-ignore") && e2.contentWindow && "function" == typeof e2.contentWindow.postMessage && e2.contentWindow.postMessage('{"method":"pause"}', "*");
      }), true === s2.unloadIframes && t(i2, "iframe[data-src]").forEach((e2) => {
        e2.setAttribute("src", "about:blank"), e2.removeAttribute("src");
      }));
    }
  };
  var v = class {
    constructor(e2) {
      this.Reveal = e2;
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
    }
    configure(e2, t2) {
      let i2 = "none";
      e2.slideNumber && !this.Reveal.isPrintView() && ("all" === e2.showSlideNumber || "speaker" === e2.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i2 = "block"), this.element.style.display = i2;
    }
    update() {
      this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
    }
    getSlideNumber(e2 = this.Reveal.getCurrentSlide()) {
      let t2, i2 = this.Reveal.getConfig(), s2 = "h.v";
      if ("function" == typeof i2.slideNumber)
        t2 = i2.slideNumber(e2);
      else {
        "string" == typeof i2.slideNumber && (s2 = i2.slideNumber), /c/.test(s2) || 1 !== this.Reveal.getHorizontalSlides().length || (s2 = "c");
        let a3 = e2 && "uncounted" === e2.dataset.visibility ? 0 : 1;
        switch (t2 = [], s2) {
          case "c":
            t2.push(this.Reveal.getSlidePastCount(e2) + a3);
            break;
          case "c/t":
            t2.push(this.Reveal.getSlidePastCount(e2) + a3, "/", this.Reveal.getTotalSlides());
            break;
          default:
            let i3 = this.Reveal.getIndices(e2);
            t2.push(i3.h + a3);
            let n2 = "h/v" === s2 ? "/" : ".";
            this.Reveal.isVerticalSlide(e2) && t2.push(n2, i3.v + 1);
        }
      }
      let a2 = "#" + this.Reveal.location.getHash(e2);
      return this.formatNumber(t2[0], t2[1], t2[2], a2);
    }
    formatNumber(e2, t2, i2, s2 = "#" + this.Reveal.location.getHash()) {
      return "number" != typeof i2 || isNaN(i2) ? `<a href="${s2}">
					<span class="slide-number-a">${e2}</span>
					</a>` : `<a href="${s2}">
					<span class="slide-number-a">${e2}</span>
					<span class="slide-number-delimiter">${t2}</span>
					<span class="slide-number-b">${i2}</span>
					</a>`;
    }
    destroy() {
      this.element.remove();
    }
  };
  var m = class {
    constructor(e2) {
      this.Reveal = e2, this.onInput = this.onInput.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this);
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "jump-to-slide", this.jumpInput = document.createElement("input"), this.jumpInput.type = "text", this.jumpInput.className = "jump-to-slide-input", this.jumpInput.placeholder = "Jump to slide", this.jumpInput.addEventListener("input", this.onInput), this.jumpInput.addEventListener("keydown", this.onKeyDown), this.jumpInput.addEventListener("blur", this.onBlur), this.element.appendChild(this.jumpInput);
    }
    show() {
      this.indicesOnShow = this.Reveal.getIndices(), this.Reveal.getRevealElement().appendChild(this.element), this.jumpInput.focus();
    }
    hide() {
      this.isVisible() && (this.element.remove(), this.jumpInput.value = "", clearTimeout(this.jumpTimeout), delete this.jumpTimeout);
    }
    isVisible() {
      return !!this.element.parentNode;
    }
    jump() {
      clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
      const e2 = this.jumpInput.value.trim("");
      let t2 = this.Reveal.location.getIndicesFromHash(e2, { oneBasedIndex: true });
      return !t2 && /\S+/i.test(e2) && e2.length > 1 && (t2 = this.search(e2)), t2 && "" !== e2 ? (this.Reveal.slide(t2.h, t2.v, t2.f), true) : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), false);
    }
    jumpAfter(e2) {
      clearTimeout(this.jumpTimeout), this.jumpTimeout = setTimeout(() => this.jump(), e2);
    }
    search(e2) {
      const t2 = new RegExp("\\b" + e2.trim() + "\\b", "i"), i2 = this.Reveal.getSlides().find((e3) => t2.test(e3.innerText));
      return i2 ? this.Reveal.getIndices(i2) : null;
    }
    cancel() {
      this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), this.hide();
    }
    confirm() {
      this.jump(), this.hide();
    }
    destroy() {
      this.jumpInput.removeEventListener("input", this.onInput), this.jumpInput.removeEventListener("keydown", this.onKeyDown), this.jumpInput.removeEventListener("blur", this.onBlur), this.element.remove();
    }
    onKeyDown(e2) {
      13 === e2.keyCode ? this.confirm() : 27 === e2.keyCode && (this.cancel(), e2.stopImmediatePropagation());
    }
    onInput(e2) {
      this.jumpAfter(200);
    }
    onBlur() {
      setTimeout(() => this.hide(), 1);
    }
  };
  var f = (e2) => {
    let t2 = e2.match(/^#([0-9a-f]{3})$/i);
    if (t2 && t2[1])
      return t2 = t2[1], { r: 17 * parseInt(t2.charAt(0), 16), g: 17 * parseInt(t2.charAt(1), 16), b: 17 * parseInt(t2.charAt(2), 16) };
    let i2 = e2.match(/^#([0-9a-f]{6})$/i);
    if (i2 && i2[1])
      return i2 = i2[1], { r: parseInt(i2.slice(0, 2), 16), g: parseInt(i2.slice(2, 4), 16), b: parseInt(i2.slice(4, 6), 16) };
    let s2 = e2.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (s2)
      return { r: parseInt(s2[1], 10), g: parseInt(s2[2], 10), b: parseInt(s2[3], 10) };
    let a2 = e2.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
    return a2 ? { r: parseInt(a2[1], 10), g: parseInt(a2[2], 10), b: parseInt(a2[3], 10), a: parseFloat(a2[4]) } : null;
  };
  var y = class {
    constructor(e2) {
      this.Reveal = e2;
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
    }
    create() {
      this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e2) => {
        let i2 = this.createBackground(e2, this.element);
        t(e2, "section").forEach((e3) => {
          this.createBackground(e3, i2), i2.classList.add("stack");
        });
      }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(() => {
        this.Reveal.getRevealElement().classList.add("has-parallax-background");
      }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
    }
    createBackground(e2, t2) {
      let i2 = document.createElement("div");
      i2.className = "slide-background " + e2.className.replace(/present|past|future/, "");
      let s2 = document.createElement("div");
      return s2.className = "slide-background-content", i2.appendChild(s2), t2.appendChild(i2), e2.slideBackgroundElement = i2, e2.slideBackgroundContentElement = s2, this.sync(e2), i2;
    }
    sync(e2) {
      const t2 = e2.slideBackgroundElement, i2 = e2.slideBackgroundContentElement, s2 = { background: e2.getAttribute("data-background"), backgroundSize: e2.getAttribute("data-background-size"), backgroundImage: e2.getAttribute("data-background-image"), backgroundVideo: e2.getAttribute("data-background-video"), backgroundIframe: e2.getAttribute("data-background-iframe"), backgroundColor: e2.getAttribute("data-background-color"), backgroundGradient: e2.getAttribute("data-background-gradient"), backgroundRepeat: e2.getAttribute("data-background-repeat"), backgroundPosition: e2.getAttribute("data-background-position"), backgroundTransition: e2.getAttribute("data-background-transition"), backgroundOpacity: e2.getAttribute("data-background-opacity") }, a2 = e2.hasAttribute("data-preload");
      e2.classList.remove("has-dark-background"), e2.classList.remove("has-light-background"), t2.removeAttribute("data-loaded"), t2.removeAttribute("data-background-hash"), t2.removeAttribute("data-background-size"), t2.removeAttribute("data-background-transition"), t2.style.backgroundColor = "", i2.style.backgroundSize = "", i2.style.backgroundRepeat = "", i2.style.backgroundPosition = "", i2.style.backgroundImage = "", i2.style.opacity = "", i2.innerHTML = "", s2.background && (/^(http|file|\/\/)/gi.test(s2.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(s2.background) ? e2.setAttribute("data-background-image", s2.background) : t2.style.background = s2.background), (s2.background || s2.backgroundColor || s2.backgroundGradient || s2.backgroundImage || s2.backgroundVideo || s2.backgroundIframe) && t2.setAttribute("data-background-hash", s2.background + s2.backgroundSize + s2.backgroundImage + s2.backgroundVideo + s2.backgroundIframe + s2.backgroundColor + s2.backgroundGradient + s2.backgroundRepeat + s2.backgroundPosition + s2.backgroundTransition + s2.backgroundOpacity), s2.backgroundSize && t2.setAttribute("data-background-size", s2.backgroundSize), s2.backgroundColor && (t2.style.backgroundColor = s2.backgroundColor), s2.backgroundGradient && (t2.style.backgroundImage = s2.backgroundGradient), s2.backgroundTransition && t2.setAttribute("data-background-transition", s2.backgroundTransition), a2 && t2.setAttribute("data-preload", ""), s2.backgroundSize && (i2.style.backgroundSize = s2.backgroundSize), s2.backgroundRepeat && (i2.style.backgroundRepeat = s2.backgroundRepeat), s2.backgroundPosition && (i2.style.backgroundPosition = s2.backgroundPosition), s2.backgroundOpacity && (i2.style.opacity = s2.backgroundOpacity);
      const n2 = this.getContrastClass(e2);
      "string" == typeof n2 && e2.classList.add(n2);
    }
    getContrastClass(e2) {
      const t2 = e2.slideBackgroundElement;
      let i2 = e2.getAttribute("data-background-color");
      if (!i2 || !f(i2)) {
        let e3 = window.getComputedStyle(t2);
        e3 && e3.backgroundColor && (i2 = e3.backgroundColor);
      }
      if (i2) {
        const e3 = f(i2);
        if (e3 && 0 !== e3.a)
          return "string" == typeof (s2 = i2) && (s2 = f(s2)), (s2 ? (299 * s2.r + 587 * s2.g + 114 * s2.b) / 1e3 : null) < 128 ? "has-dark-background" : "has-light-background";
      }
      var s2;
      return null;
    }
    bubbleSlideContrastClassToElement(e2, t2) {
      ["has-light-background", "has-dark-background"].forEach((i2) => {
        e2.classList.contains(i2) ? t2.classList.add(i2) : t2.classList.remove(i2);
      }, this);
    }
    update(e2 = false) {
      let i2 = this.Reveal.getCurrentSlide(), s2 = this.Reveal.getIndices(), a2 = null, n2 = this.Reveal.getConfig().rtl ? "future" : "past", r2 = this.Reveal.getConfig().rtl ? "past" : "future";
      if (Array.from(this.element.childNodes).forEach((i3, o2) => {
        i3.classList.remove("past", "present", "future"), o2 < s2.h ? i3.classList.add(n2) : o2 > s2.h ? i3.classList.add(r2) : (i3.classList.add("present"), a2 = i3), (e2 || o2 === s2.h) && t(i3, ".slide-background").forEach((e3, t2) => {
          e3.classList.remove("past", "present", "future");
          const i4 = "number" == typeof s2.v ? s2.v : 0;
          t2 < i4 ? e3.classList.add("past") : t2 > i4 ? e3.classList.add("future") : (e3.classList.add("present"), o2 === s2.h && (a2 = e3));
        });
      }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, { unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground) }), a2) {
        this.Reveal.slideContent.startEmbeddedContent(a2);
        let e3 = a2.querySelector(".slide-background-content");
        if (e3) {
          let t3 = e3.style.backgroundImage || "";
          /\.gif/i.test(t3) && (e3.style.backgroundImage = "", window.getComputedStyle(e3).opacity, e3.style.backgroundImage = t3);
        }
        let t2 = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null, i3 = a2.getAttribute("data-background-hash");
        i3 && i3 === t2 && a2 !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = a2;
      }
      i2 && this.bubbleSlideContrastClassToElement(i2, this.Reveal.getRevealElement()), setTimeout(() => {
        this.element.classList.remove("no-transition");
      }, 1);
    }
    updateParallax() {
      let e2 = this.Reveal.getIndices();
      if (this.Reveal.getConfig().parallaxBackgroundImage) {
        let t2, i2, s2 = this.Reveal.getHorizontalSlides(), a2 = this.Reveal.getVerticalSlides(), n2 = this.element.style.backgroundSize.split(" ");
        1 === n2.length ? t2 = i2 = parseInt(n2[0], 10) : (t2 = parseInt(n2[0], 10), i2 = parseInt(n2[1], 10));
        let r2, o2, l2 = this.element.offsetWidth, d2 = s2.length;
        r2 = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d2 > 1 ? (t2 - l2) / (d2 - 1) : 0, o2 = r2 * e2.h * -1;
        let c2, h3, u2 = this.element.offsetHeight, g2 = a2.length;
        c2 = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (i2 - u2) / (g2 - 1), h3 = g2 > 0 ? c2 * e2.v : 0, this.element.style.backgroundPosition = o2 + "px " + -h3 + "px";
      }
    }
    destroy() {
      this.element.remove();
    }
  };
  var b = ".slides section";
  var w = ".slides>section";
  var E = ".slides>section.present>section";
  var S = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/;
  var A = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
  var R = 0;
  var k = class {
    constructor(e2) {
      this.Reveal = e2;
    }
    run(e2, t2) {
      this.reset();
      let i2 = this.Reveal.getSlides(), s2 = i2.indexOf(t2), a2 = i2.indexOf(e2);
      if (e2.hasAttribute("data-auto-animate") && t2.hasAttribute("data-auto-animate") && e2.getAttribute("data-auto-animate-id") === t2.getAttribute("data-auto-animate-id") && !(s2 > a2 ? t2 : e2).hasAttribute("data-auto-animate-restart")) {
        this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || o();
        let i3 = this.getAutoAnimateOptions(t2);
        e2.dataset.autoAnimate = "pending", t2.dataset.autoAnimate = "pending", i3.slideDirection = s2 > a2 ? "forward" : "backward";
        let n2 = "none" === e2.style.display;
        n2 && (e2.style.display = this.Reveal.getConfig().display);
        let r2 = this.getAutoAnimatableElements(e2, t2).map((e3) => this.autoAnimateElements(e3.from, e3.to, e3.options || {}, i3, R++));
        if (n2 && (e2.style.display = "none"), "false" !== t2.dataset.autoAnimateUnmatched && true === this.Reveal.getConfig().autoAnimateUnmatched) {
          let e3 = 0.8 * i3.duration, s3 = 0.2 * i3.duration;
          this.getUnmatchedAutoAnimateElements(t2).forEach((e4) => {
            let t3 = this.getAutoAnimateOptions(e4, i3), s4 = "unmatched";
            t3.duration === i3.duration && t3.delay === i3.delay || (s4 = "unmatched-" + R++, r2.push(`[data-auto-animate="running"] [data-auto-animate-target="${s4}"] { transition: opacity ${t3.duration}s ease ${t3.delay}s; }`)), e4.dataset.autoAnimateTarget = s4;
          }, this), r2.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e3}s ease ${s3}s; }`);
        }
        this.autoAnimateStyleSheet.innerHTML = r2.join(""), requestAnimationFrame(() => {
          this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t2.dataset.autoAnimate = "running");
        }), this.Reveal.dispatchEvent({ type: "autoanimate", data: { fromSlide: e2, toSlide: t2, sheet: this.autoAnimateStyleSheet } });
      }
    }
    reset() {
      t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((e2) => {
        e2.dataset.autoAnimate = "";
      }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e2) => {
        delete e2.dataset.autoAnimateTarget;
      }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
    }
    autoAnimateElements(e2, t2, i2, s2, a2) {
      e2.dataset.autoAnimateTarget = "", t2.dataset.autoAnimateTarget = a2;
      let n2 = this.getAutoAnimateOptions(t2, s2);
      void 0 !== i2.delay && (n2.delay = i2.delay), void 0 !== i2.duration && (n2.duration = i2.duration), void 0 !== i2.easing && (n2.easing = i2.easing);
      let r2 = this.getAutoAnimatableProperties("from", e2, i2), o2 = this.getAutoAnimatableProperties("to", t2, i2);
      if (t2.classList.contains("fragment") && (delete o2.styles.opacity, e2.classList.contains("fragment"))) {
        (e2.className.match(A) || [""])[0] === (t2.className.match(A) || [""])[0] && "forward" === s2.slideDirection && t2.classList.add("visible", "disabled");
      }
      if (false !== i2.translate || false !== i2.scale) {
        let e3 = this.Reveal.getScale(), t3 = { x: (r2.x - o2.x) / e3, y: (r2.y - o2.y) / e3, scaleX: r2.width / o2.width, scaleY: r2.height / o2.height };
        t3.x = Math.round(1e3 * t3.x) / 1e3, t3.y = Math.round(1e3 * t3.y) / 1e3, t3.scaleX = Math.round(1e3 * t3.scaleX) / 1e3, t3.scaleX = Math.round(1e3 * t3.scaleX) / 1e3;
        let s3 = false !== i2.translate && (0 !== t3.x || 0 !== t3.y), a3 = false !== i2.scale && (0 !== t3.scaleX || 0 !== t3.scaleY);
        if (s3 || a3) {
          let e4 = [];
          s3 && e4.push(`translate(${t3.x}px, ${t3.y}px)`), a3 && e4.push(`scale(${t3.scaleX}, ${t3.scaleY})`), r2.styles.transform = e4.join(" "), r2.styles["transform-origin"] = "top left", o2.styles.transform = "none";
        }
      }
      for (let e3 in o2.styles) {
        const t3 = o2.styles[e3], i3 = r2.styles[e3];
        t3 === i3 ? delete o2.styles[e3] : (true === t3.explicitValue && (o2.styles[e3] = t3.value), true === i3.explicitValue && (r2.styles[e3] = i3.value));
      }
      let l2 = "", d2 = Object.keys(o2.styles);
      if (d2.length > 0) {
        r2.styles.transition = "none", o2.styles.transition = `all ${n2.duration}s ${n2.easing} ${n2.delay}s`, o2.styles["transition-property"] = d2.join(", "), o2.styles["will-change"] = d2.join(", "), l2 = '[data-auto-animate-target="' + a2 + '"] {' + Object.keys(r2.styles).map((e3) => e3 + ": " + r2.styles[e3] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + a2 + '"] {' + Object.keys(o2.styles).map((e3) => e3 + ": " + o2.styles[e3] + " !important;").join("") + "}";
      }
      return l2;
    }
    getAutoAnimateOptions(t2, i2) {
      let s2 = { easing: this.Reveal.getConfig().autoAnimateEasing, duration: this.Reveal.getConfig().autoAnimateDuration, delay: 0 };
      if (s2 = e(s2, i2), t2.parentNode) {
        let e2 = r(t2.parentNode, "[data-auto-animate-target]");
        e2 && (s2 = this.getAutoAnimateOptions(e2, s2));
      }
      return t2.dataset.autoAnimateEasing && (s2.easing = t2.dataset.autoAnimateEasing), t2.dataset.autoAnimateDuration && (s2.duration = parseFloat(t2.dataset.autoAnimateDuration)), t2.dataset.autoAnimateDelay && (s2.delay = parseFloat(t2.dataset.autoAnimateDelay)), s2;
    }
    getAutoAnimatableProperties(e2, t2, i2) {
      let s2 = this.Reveal.getConfig(), a2 = { styles: [] };
      if (false !== i2.translate || false !== i2.scale) {
        let e3;
        if ("function" == typeof i2.measure)
          e3 = i2.measure(t2);
        else if (s2.center)
          e3 = t2.getBoundingClientRect();
        else {
          let i3 = this.Reveal.getScale();
          e3 = { x: t2.offsetLeft * i3, y: t2.offsetTop * i3, width: t2.offsetWidth * i3, height: t2.offsetHeight * i3 };
        }
        a2.x = e3.x, a2.y = e3.y, a2.width = e3.width, a2.height = e3.height;
      }
      const n2 = getComputedStyle(t2);
      return (i2.styles || s2.autoAnimateStyles).forEach((t3) => {
        let i3;
        "string" == typeof t3 && (t3 = { property: t3 }), void 0 !== t3.from && "from" === e2 ? i3 = { value: t3.from, explicitValue: true } : void 0 !== t3.to && "to" === e2 ? i3 = { value: t3.to, explicitValue: true } : ("line-height" === t3.property && (i3 = parseFloat(n2["line-height"]) / parseFloat(n2["font-size"])), isNaN(i3) && (i3 = n2[t3.property])), "" !== i3 && (a2.styles[t3.property] = i3);
      }), a2;
    }
    getAutoAnimatableElements(e2, t2) {
      let i2 = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e2, t2), s2 = [];
      return i2.filter((e3, t3) => {
        if (-1 === s2.indexOf(e3.to))
          return s2.push(e3.to), true;
      });
    }
    getAutoAnimatePairs(e2, t2) {
      let i2 = [];
      const s2 = "h1, h2, h3, h4, h5, h6, p, li";
      return this.findAutoAnimateMatches(i2, e2, t2, "[data-id]", (e3) => e3.nodeName + ":::" + e3.getAttribute("data-id")), this.findAutoAnimateMatches(i2, e2, t2, s2, (e3) => e3.nodeName + ":::" + e3.innerText), this.findAutoAnimateMatches(i2, e2, t2, "img, video, iframe", (e3) => e3.nodeName + ":::" + (e3.getAttribute("src") || e3.getAttribute("data-src"))), this.findAutoAnimateMatches(i2, e2, t2, "pre", (e3) => e3.nodeName + ":::" + e3.innerText), i2.forEach((e3) => {
        n(e3.from, s2) ? e3.options = { scale: false } : n(e3.from, "pre") && (e3.options = { scale: false, styles: ["width", "height"] }, this.findAutoAnimateMatches(i2, e3.from, e3.to, ".hljs .hljs-ln-code", (e4) => e4.textContent, { scale: false, styles: [], measure: this.getLocalBoundingBox.bind(this) }), this.findAutoAnimateMatches(i2, e3.from, e3.to, ".hljs .hljs-ln-numbers[data-line-number]", (e4) => e4.getAttribute("data-line-number"), { scale: false, styles: ["width"], measure: this.getLocalBoundingBox.bind(this) }));
      }, this), i2;
    }
    getLocalBoundingBox(e2) {
      const t2 = this.Reveal.getScale();
      return { x: Math.round(e2.offsetLeft * t2 * 100) / 100, y: Math.round(e2.offsetTop * t2 * 100) / 100, width: Math.round(e2.offsetWidth * t2 * 100) / 100, height: Math.round(e2.offsetHeight * t2 * 100) / 100 };
    }
    findAutoAnimateMatches(e2, t2, i2, s2, a2, n2) {
      let r2 = {}, o2 = {};
      [].slice.call(t2.querySelectorAll(s2)).forEach((e3, t3) => {
        const i3 = a2(e3);
        "string" == typeof i3 && i3.length && (r2[i3] = r2[i3] || [], r2[i3].push(e3));
      }), [].slice.call(i2.querySelectorAll(s2)).forEach((t3, i3) => {
        const s3 = a2(t3);
        let l2;
        if (o2[s3] = o2[s3] || [], o2[s3].push(t3), r2[s3]) {
          const e3 = o2[s3].length - 1, t4 = r2[s3].length - 1;
          r2[s3][e3] ? (l2 = r2[s3][e3], r2[s3][e3] = null) : r2[s3][t4] && (l2 = r2[s3][t4], r2[s3][t4] = null);
        }
        l2 && e2.push({ from: l2, to: t3, options: n2 });
      });
    }
    getUnmatchedAutoAnimateElements(e2) {
      return [].slice.call(e2.children).reduce((e3, t2) => {
        const i2 = t2.querySelector("[data-auto-animate-target]");
        return t2.hasAttribute("data-auto-animate-target") || i2 || e3.push(t2), t2.querySelector("[data-auto-animate-target]") && (e3 = e3.concat(this.getUnmatchedAutoAnimateElements(t2))), e3;
      }, []);
    }
  };
  var L = class {
    constructor(e2) {
      this.Reveal = e2, this.active = false, this.activatedCallbacks = [], this.onScroll = this.onScroll.bind(this);
    }
    activate() {
      if (this.active)
        return;
      const e2 = this.Reveal.getState();
      this.active = true, this.slideHTMLBeforeActivation = this.Reveal.getSlidesElement().innerHTML;
      const i2 = t(this.Reveal.getRevealElement(), w);
      let s2;
      this.viewportElement.classList.add("loading-scroll-mode", "reveal-scroll");
      const a2 = window.getComputedStyle(this.viewportElement);
      a2 && a2.background && (s2 = a2.background);
      const n2 = [], r2 = i2[0].parentNode;
      let o2;
      const l2 = (e3, t2, i3) => {
        let a3;
        if (o2 && this.Reveal.shouldAutoAnimateBetween(o2, e3))
          a3 = document.createElement("div"), a3.className = "scroll-page-content scroll-auto-animate-page", a3.style.display = "none", o2.closest(".scroll-page-content").parentNode.appendChild(a3);
        else {
          const e4 = document.createElement("div");
          e4.className = "scroll-page", n2.push(e4), s2 && (e4.style.background = s2);
          const t3 = document.createElement("div");
          t3.className = "scroll-page-sticky", e4.appendChild(t3), a3 = document.createElement("div"), a3.className = "scroll-page-content", t3.appendChild(a3);
        }
        a3.appendChild(e3), e3.classList.remove("past", "future"), e3.setAttribute("data-index-h", t2), e3.setAttribute("data-index-v", i3), e3.slideBackgroundElement && (e3.slideBackgroundElement.remove("past", "future"), a3.insertBefore(e3.slideBackgroundElement, e3)), o2 = e3;
      };
      i2.forEach((e3, t2) => {
        this.Reveal.isVerticalStack(e3) ? e3.querySelectorAll("section").forEach((e4, i3) => {
          l2(e4, t2, i3);
        }) : l2(e3, t2, 0);
      }, this), this.createProgressBar(), t(this.Reveal.getRevealElement(), ".stack").forEach((e3) => e3.remove()), n2.forEach((e3) => r2.appendChild(e3)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.layout(), this.Reveal.setState(e2), this.activatedCallbacks.forEach((e3) => e3()), this.activatedCallbacks = [], this.restoreScrollPosition(), this.viewportElement.classList.remove("loading-scroll-mode"), this.viewportElement.addEventListener("scroll", this.onScroll, { passive: true });
    }
    deactivate() {
      if (!this.active)
        return;
      const e2 = this.Reveal.getState();
      this.active = false, this.viewportElement.removeEventListener("scroll", this.onScroll), this.viewportElement.classList.remove("reveal-scroll"), this.removeProgressBar(), this.Reveal.getSlidesElement().innerHTML = this.slideHTMLBeforeActivation, this.Reveal.sync(), this.Reveal.setState(e2), this.slideHTMLBeforeActivation = null;
    }
    toggle(e2) {
      "boolean" == typeof e2 ? e2 ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
    }
    isActive() {
      return this.active;
    }
    createProgressBar() {
      this.progressBar = document.createElement("div"), this.progressBar.className = "scrollbar", this.progressBarInner = document.createElement("div"), this.progressBarInner.className = "scrollbar-inner", this.progressBar.appendChild(this.progressBarInner), this.progressBarPlayhead = document.createElement("div"), this.progressBarPlayhead.className = "scrollbar-playhead", this.progressBarInner.appendChild(this.progressBarPlayhead), this.viewportElement.insertBefore(this.progressBar, this.viewportElement.firstChild);
      const e2 = (e3) => {
        let t3 = (e3.clientY - this.progressBarInner.getBoundingClientRect().top) / this.progressBarHeight;
        t3 = Math.max(Math.min(t3, 1), 0), this.viewportElement.scrollTop = t3 * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight);
      }, t2 = (i2) => {
        this.draggingProgressBar = false, this.showProgressBar(), document.removeEventListener("mousemove", e2), document.removeEventListener("mouseup", t2);
      };
      this.progressBarInner.addEventListener("mousedown", (i2) => {
        i2.preventDefault(), this.draggingProgressBar = true, document.addEventListener("mousemove", e2), document.addEventListener("mouseup", t2), e2(i2);
      });
    }
    removeProgressBar() {
      this.progressBar && (this.progressBar.remove(), this.progressBar = null);
    }
    layout() {
      this.isActive() && (this.syncPages(), this.syncScrollPosition());
    }
    syncPages() {
      const e2 = this.Reveal.getConfig(), t2 = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), i2 = this.Reveal.getScale(), s2 = "compact" === e2.scrollLayout, a2 = this.viewportElement.offsetHeight, n2 = t2.height * i2, r2 = s2 ? n2 : a2, o2 = s2 ? n2 : a2;
      this.viewportElement.style.setProperty("--page-height", r2 + "px"), this.viewportElement.style.scrollSnapType = "string" == typeof e2.scrollSnap ? `y ${e2.scrollSnap}` : "", this.slideTriggers = [];
      const l2 = Array.from(this.Reveal.getRevealElement().querySelectorAll(".scroll-page"));
      this.pages = l2.map((i3) => {
        const n3 = this.createPage({ pageElement: i3, slideElement: i3.querySelector("section"), stickyElement: i3.querySelector(".scroll-page-sticky"), contentElement: i3.querySelector(".scroll-page-content"), backgroundElement: i3.querySelector(".slide-background"), autoAnimateElements: i3.querySelectorAll(".scroll-auto-animate-page"), autoAnimatePages: [] });
        n3.pageElement.style.setProperty("--slide-height", true === e2.center ? "auto" : t2.height + "px"), this.slideTriggers.push({ page: n3, activate: () => this.activatePage(n3), deactivate: () => this.deactivatePage(n3) }), this.createFragmentTriggersForPage(n3), n3.autoAnimateElements.length > 0 && this.createAutoAnimateTriggersForPage(n3);
        let l3 = Math.max(n3.scrollTriggers.length - 1, 0);
        l3 += n3.autoAnimatePages.reduce((e3, t3) => e3 + Math.max(t3.scrollTriggers.length - 1, 0), n3.autoAnimatePages.length), n3.pageElement.querySelectorAll(".scroll-snap-point").forEach((e3) => e3.remove());
        for (let e3 = 0; e3 < l3 + 1; e3++) {
          const t3 = document.createElement("div");
          t3.className = "scroll-snap-point", t3.style.height = o2 + "px", t3.style.scrollSnapAlign = s2 ? "center" : "start", n3.pageElement.appendChild(t3), 0 === e3 && (t3.style.marginTop = -o2 + "px");
        }
        return s2 && n3.scrollTriggers.length > 0 ? (n3.pageHeight = a2, n3.pageElement.style.setProperty("--page-height", a2 + "px")) : (n3.pageHeight = r2, n3.pageElement.style.removeProperty("--page-height")), n3.scrollPadding = o2 * l3, n3.totalHeight = n3.pageHeight + n3.scrollPadding, n3.pageElement.style.setProperty("--page-scroll-padding", n3.scrollPadding + "px"), l3 > 0 ? (n3.stickyElement.style.position = "sticky", n3.stickyElement.style.top = Math.max((a2 - n3.pageHeight) / 2, 0) + "px") : (n3.stickyElement.style.position = "relative", n3.pageElement.style.scrollSnapAlign = n3.pageHeight < a2 ? "center" : "start"), n3;
      }), this.setTriggerRanges(), this.viewportElement.setAttribute("data-scrollbar", e2.scrollProgress), e2.scrollProgress && this.totalScrollTriggerCount > 1 ? (this.progressBar || this.createProgressBar(), this.syncProgressBar()) : this.removeProgressBar();
    }
    setTriggerRanges() {
      this.totalScrollTriggerCount = this.slideTriggers.reduce((e3, t2) => e3 + Math.max(t2.page.scrollTriggers.length, 1), 0);
      let e2 = 0;
      this.slideTriggers.forEach((t2, i2) => {
        t2.range = [e2, e2 + Math.max(t2.page.scrollTriggers.length, 1) / this.totalScrollTriggerCount];
        const s2 = (t2.range[1] - t2.range[0]) / t2.page.scrollTriggers.length;
        t2.page.scrollTriggers.forEach((t3, i3) => {
          t3.range = [e2 + i3 * s2, e2 + (i3 + 1) * s2];
        }), e2 = t2.range[1];
      });
    }
    createFragmentTriggersForPage(e2, t2) {
      t2 = t2 || e2.slideElement;
      const i2 = this.Reveal.fragments.sort(t2.querySelectorAll(".fragment"), true);
      return i2.length && (e2.fragments = this.Reveal.fragments.sort(t2.querySelectorAll(".fragment:not(.disabled)")), e2.scrollTriggers.push({ activate: () => {
        this.Reveal.fragments.update(-1, e2.fragments, t2);
      } }, ...i2.map((i3, s2) => ({ activate: () => {
        this.Reveal.fragments.update(s2, e2.fragments, t2);
      } })))), e2.scrollTriggers.length;
    }
    createAutoAnimateTriggersForPage(e2) {
      e2.autoAnimateElements.length > 0 && this.slideTriggers.push(...Array.from(e2.autoAnimateElements).map((t2, i2) => {
        let s2 = this.createPage({ slideElement: t2.querySelector("section"), contentElement: t2, backgroundElement: t2.querySelector(".slide-background") });
        return this.createFragmentTriggersForPage(s2, s2.slideElement), e2.autoAnimatePages.push(s2), { page: s2, activate: () => this.activatePage(s2), deactivate: () => this.deactivatePage(s2) };
      }));
    }
    createPage(e2) {
      return e2.scrollTriggers = [], e2.indexh = parseInt(e2.slideElement.getAttribute("data-index-h"), 10), e2.indexv = parseInt(e2.slideElement.getAttribute("data-index-v"), 10), e2;
    }
    syncProgressBar() {
      this.progressBarInner.querySelectorAll(".scrollbar-slide").forEach((e3) => e3.remove());
      const e2 = this.viewportElement.scrollHeight, t2 = this.viewportElement.offsetHeight, i2 = t2 / e2;
      this.progressBarHeight = this.progressBarInner.offsetHeight, this.playheadHeight = Math.max(i2 * this.progressBarHeight, 8), this.progressBarScrollableHeight = this.progressBarHeight - this.playheadHeight;
      const s2 = t2 / e2 * this.progressBarHeight, a2 = Math.min(s2 / 8, 4);
      this.progressBarPlayhead.style.height = this.playheadHeight - a2 + "px", s2 > 6 ? this.slideTriggers.forEach((e3) => {
        const { page: t3 } = e3;
        t3.progressBarSlide = document.createElement("div"), t3.progressBarSlide.className = "scrollbar-slide", t3.progressBarSlide.style.top = e3.range[0] * this.progressBarHeight + "px", t3.progressBarSlide.style.height = (e3.range[1] - e3.range[0]) * this.progressBarHeight - a2 + "px", t3.progressBarSlide.classList.toggle("has-triggers", t3.scrollTriggers.length > 0), this.progressBarInner.appendChild(t3.progressBarSlide), t3.scrollTriggerElements = t3.scrollTriggers.map((i3, s3) => {
          const n2 = document.createElement("div");
          return n2.className = "scrollbar-trigger", n2.style.top = (i3.range[0] - e3.range[0]) * this.progressBarHeight + "px", n2.style.height = (i3.range[1] - i3.range[0]) * this.progressBarHeight - a2 + "px", t3.progressBarSlide.appendChild(n2), 0 === s3 && (n2.style.display = "none"), n2;
        });
      }) : this.pages.forEach((e3) => e3.progressBarSlide = null);
    }
    syncScrollPosition() {
      const e2 = this.viewportElement.offsetHeight, t2 = e2 / this.viewportElement.scrollHeight, i2 = this.viewportElement.scrollTop, s2 = this.viewportElement.scrollHeight - e2, a2 = Math.max(Math.min(i2 / s2, 1), 0), n2 = Math.max(Math.min((i2 + e2 / 2) / this.viewportElement.scrollHeight, 1), 0);
      let r2;
      this.slideTriggers.forEach((e3) => {
        const { page: i3 } = e3;
        a2 >= e3.range[0] - 2 * t2 && a2 <= e3.range[1] + 2 * t2 && !i3.loaded ? (i3.loaded = true, this.Reveal.slideContent.load(i3.slideElement)) : i3.loaded && (i3.loaded = false, this.Reveal.slideContent.unload(i3.slideElement)), a2 >= e3.range[0] && a2 <= e3.range[1] ? (this.activateTrigger(e3), r2 = e3.page) : e3.active && this.deactivateTrigger(e3);
      }), r2 && r2.scrollTriggers.forEach((e3) => {
        n2 >= e3.range[0] && n2 <= e3.range[1] ? this.activateTrigger(e3) : e3.active && this.deactivateTrigger(e3);
      }), this.setProgressBarValue(i2 / (this.viewportElement.scrollHeight - e2));
    }
    setProgressBarValue(e2) {
      this.progressBar && (this.progressBarPlayhead.style.transform = `translateY(${e2 * this.progressBarScrollableHeight}px)`, this.getAllPages().filter((e3) => e3.progressBarSlide).forEach((e3) => {
        e3.progressBarSlide.classList.toggle("active", true === e3.active), e3.scrollTriggers.forEach((t2, i2) => {
          e3.scrollTriggerElements[i2].classList.toggle("active", true === e3.active && true === t2.active);
        });
      }), this.showProgressBar());
    }
    showProgressBar() {
      this.progressBar.classList.add("visible"), clearTimeout(this.hideProgressBarTimeout), "auto" !== this.Reveal.getConfig().scrollProgress || this.draggingProgressBar || (this.hideProgressBarTimeout = setTimeout(() => {
        this.progressBar && this.progressBar.classList.remove("visible");
      }, 500));
    }
    scrollToSlide(e2) {
      if (this.active) {
        const t2 = this.getScrollTriggerBySlide(e2);
        t2 && (this.viewportElement.scrollTop = t2.range[0] * (this.viewportElement.scrollHeight - this.viewportElement.offsetHeight));
      } else
        this.activatedCallbacks.push(() => this.scrollToSlide(e2));
    }
    storeScrollPosition() {
      clearTimeout(this.storeScrollPositionTimeout), this.storeScrollPositionTimeout = setTimeout(() => {
        sessionStorage.setItem("reveal-scroll-top", this.viewportElement.scrollTop), sessionStorage.setItem("reveal-scroll-origin", location.origin + location.pathname), this.storeScrollPositionTimeout = null;
      }, 50);
    }
    restoreScrollPosition() {
      const e2 = sessionStorage.getItem("reveal-scroll-top"), t2 = sessionStorage.getItem("reveal-scroll-origin");
      e2 && t2 === location.origin + location.pathname && (this.viewportElement.scrollTop = parseInt(e2, 10));
    }
    activatePage(e2) {
      if (!e2.active) {
        e2.active = true;
        const { slideElement: t2, backgroundElement: i2, contentElement: s2, indexh: a2, indexv: n2 } = e2;
        s2.style.display = "block", t2.classList.add("present"), i2 && i2.classList.add("present"), this.Reveal.setCurrentScrollPage(t2, a2, n2), this.Reveal.backgrounds.bubbleSlideContrastClassToElement(t2, this.viewportElement), Array.from(s2.parentNode.querySelectorAll(".scroll-page-content")).forEach((e3) => {
          e3 !== s2 && (e3.style.display = "none");
        });
      }
    }
    deactivatePage(e2) {
      e2.active && (e2.active = false, e2.slideElement.classList.remove("present"), e2.backgroundElement.classList.remove("present"));
    }
    activateTrigger(e2) {
      e2.active || (e2.active = true, e2.activate());
    }
    deactivateTrigger(e2) {
      e2.active && (e2.active = false, e2.deactivate && e2.deactivate());
    }
    getSlideByIndices(e2, t2) {
      const i2 = this.getAllPages().find((i3) => i3.indexh === e2 && i3.indexv === t2);
      return i2 ? i2.slideElement : null;
    }
    getScrollTriggerBySlide(e2) {
      return this.slideTriggers.find((t2) => t2.page.slideElement === e2);
    }
    getAllPages() {
      return this.pages.flatMap((e2) => [e2, ...e2.autoAnimatePages || []]);
    }
    onScroll() {
      this.syncScrollPosition(), this.storeScrollPosition();
    }
    get viewportElement() {
      return this.Reveal.getViewportElement();
    }
  };
  var C = class {
    constructor(e2) {
      this.Reveal = e2;
    }
    async activate() {
      const e2 = this.Reveal.getConfig(), i2 = t(this.Reveal.getRevealElement(), b), s2 = e2.slideNumber && /all|print/i.test(e2.showSlideNumber), a2 = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), n2 = Math.floor(a2.width * (1 + e2.margin)), r2 = Math.floor(a2.height * (1 + e2.margin)), l2 = a2.width, d2 = a2.height;
      await new Promise(requestAnimationFrame), o("@page{size:" + n2 + "px " + r2 + "px; margin: 0px;}"), o(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + l2 + "px; max-height:" + d2 + "px}"), document.documentElement.classList.add("reveal-print", "print-pdf"), document.body.style.width = n2 + "px", document.body.style.height = r2 + "px";
      const c2 = this.Reveal.getViewportElement();
      let h3;
      if (c2) {
        const e3 = window.getComputedStyle(c2);
        e3 && e3.background && (h3 = e3.background);
      }
      await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(l2, d2), await new Promise(requestAnimationFrame);
      const u2 = i2.map((e3) => e3.scrollHeight), g2 = [], p2 = i2[0].parentNode;
      let v2 = 1;
      i2.forEach(function(i3, a3) {
        if (false === i3.classList.contains("stack")) {
          let o2 = (n2 - l2) / 2, c3 = (r2 - d2) / 2;
          const p3 = u2[a3];
          let m2 = Math.max(Math.ceil(p3 / r2), 1);
          m2 = Math.min(m2, e2.pdfMaxPagesPerSlide), (1 === m2 && e2.center || i3.classList.contains("center")) && (c3 = Math.max((r2 - p3) / 2, 0));
          const f2 = document.createElement("div");
          if (g2.push(f2), f2.className = "pdf-page", f2.style.height = (r2 + e2.pdfPageHeightOffset) * m2 + "px", h3 && (f2.style.background = h3), f2.appendChild(i3), i3.style.left = o2 + "px", i3.style.top = c3 + "px", i3.style.width = l2 + "px", this.Reveal.slideContent.layout(i3), i3.slideBackgroundElement && f2.insertBefore(i3.slideBackgroundElement, i3), e2.showNotes) {
            const t2 = this.Reveal.getSlideNotes(i3);
            if (t2) {
              const i4 = 8, s3 = "string" == typeof e2.showNotes ? e2.showNotes : "inline", a4 = document.createElement("div");
              a4.classList.add("speaker-notes"), a4.classList.add("speaker-notes-pdf"), a4.setAttribute("data-layout", s3), a4.innerHTML = t2, "separate-page" === s3 ? g2.push(a4) : (a4.style.left = i4 + "px", a4.style.bottom = i4 + "px", a4.style.width = n2 - 2 * i4 + "px", f2.appendChild(a4));
            }
          }
          if (s2) {
            const e3 = document.createElement("div");
            e3.classList.add("slide-number"), e3.classList.add("slide-number-pdf"), e3.innerHTML = v2++, f2.appendChild(e3);
          }
          if (e2.pdfSeparateFragments) {
            const e3 = this.Reveal.fragments.sort(f2.querySelectorAll(".fragment"), true);
            let t2;
            e3.forEach(function(e4, i4) {
              t2 && t2.forEach(function(e5) {
                e5.classList.remove("current-fragment");
              }), e4.forEach(function(e5) {
                e5.classList.add("visible", "current-fragment");
              }, this);
              const a4 = f2.cloneNode(true);
              if (s2) {
                const e5 = i4 + 1;
                a4.querySelector(".slide-number-pdf").innerHTML += "." + e5;
              }
              g2.push(a4), t2 = e4;
            }, this), e3.forEach(function(e4) {
              e4.forEach(function(e5) {
                e5.classList.remove("visible", "current-fragment");
              });
            });
          } else
            t(f2, ".fragment:not(.fade-out)").forEach(function(e3) {
              e3.classList.add("visible");
            });
        }
      }, this), await new Promise(requestAnimationFrame), g2.forEach((e3) => p2.appendChild(e3)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.dispatchEvent({ type: "pdf-ready" });
    }
    isActive() {
      return "print" === this.Reveal.getConfig().view;
    }
  };
  var x = class {
    constructor(e2) {
      this.Reveal = e2;
    }
    configure(e2, t2) {
      false === e2.fragments ? this.disable() : false === t2.fragments && this.enable();
    }
    disable() {
      t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
        e2.classList.add("visible"), e2.classList.remove("current-fragment");
      });
    }
    enable() {
      t(this.Reveal.getSlidesElement(), ".fragment").forEach((e2) => {
        e2.classList.remove("visible"), e2.classList.remove("current-fragment");
      });
    }
    availableRoutes() {
      let e2 = this.Reveal.getCurrentSlide();
      if (e2 && this.Reveal.getConfig().fragments) {
        let t2 = e2.querySelectorAll(".fragment:not(.disabled)"), i2 = e2.querySelectorAll(".fragment:not(.disabled):not(.visible)");
        return { prev: t2.length - i2.length > 0, next: !!i2.length };
      }
      return { prev: false, next: false };
    }
    sort(e2, t2 = false) {
      e2 = Array.from(e2);
      let i2 = [], s2 = [], a2 = [];
      e2.forEach((e3) => {
        if (e3.hasAttribute("data-fragment-index")) {
          let t3 = parseInt(e3.getAttribute("data-fragment-index"), 10);
          i2[t3] || (i2[t3] = []), i2[t3].push(e3);
        } else
          s2.push([e3]);
      }), i2 = i2.concat(s2);
      let n2 = 0;
      return i2.forEach((e3) => {
        e3.forEach((e4) => {
          a2.push(e4), e4.setAttribute("data-fragment-index", n2);
        }), n2++;
      }), true === t2 ? i2 : a2;
    }
    sortAll() {
      this.Reveal.getHorizontalSlides().forEach((e2) => {
        let i2 = t(e2, "section");
        i2.forEach((e3, t2) => {
          this.sort(e3.querySelectorAll(".fragment"));
        }, this), 0 === i2.length && this.sort(e2.querySelectorAll(".fragment"));
      });
    }
    update(e2, t2, i2 = this.Reveal.getCurrentSlide()) {
      let s2 = { shown: [], hidden: [] };
      if (i2 && this.Reveal.getConfig().fragments && (t2 = t2 || this.sort(i2.querySelectorAll(".fragment"))).length) {
        let a2 = 0;
        if ("number" != typeof e2) {
          let t3 = this.sort(i2.querySelectorAll(".fragment.visible")).pop();
          t3 && (e2 = parseInt(t3.getAttribute("data-fragment-index") || 0, 10));
        }
        Array.from(t2).forEach((t3, i3) => {
          if (t3.hasAttribute("data-fragment-index") && (i3 = parseInt(t3.getAttribute("data-fragment-index"), 10)), a2 = Math.max(a2, i3), i3 <= e2) {
            let a3 = t3.classList.contains("visible");
            t3.classList.add("visible"), t3.classList.remove("current-fragment"), i3 === e2 && (this.Reveal.announceStatus(this.Reveal.getStatusText(t3)), t3.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t3)), a3 || (s2.shown.push(t3), this.Reveal.dispatchEvent({ target: t3, type: "visible", bubbles: false }));
          } else {
            let e3 = t3.classList.contains("visible");
            t3.classList.remove("visible"), t3.classList.remove("current-fragment"), e3 && (this.Reveal.slideContent.stopEmbeddedContent(t3), s2.hidden.push(t3), this.Reveal.dispatchEvent({ target: t3, type: "hidden", bubbles: false }));
          }
        }), e2 = "number" == typeof e2 ? e2 : -1, e2 = Math.max(Math.min(e2, a2), -1), i2.setAttribute("data-fragment", e2);
      }
      return s2;
    }
    sync(e2 = this.Reveal.getCurrentSlide()) {
      return this.sort(e2.querySelectorAll(".fragment"));
    }
    goto(e2, t2 = 0) {
      let i2 = this.Reveal.getCurrentSlide();
      if (i2 && this.Reveal.getConfig().fragments) {
        let s2 = this.sort(i2.querySelectorAll(".fragment:not(.disabled)"));
        if (s2.length) {
          if ("number" != typeof e2) {
            let t3 = this.sort(i2.querySelectorAll(".fragment:not(.disabled).visible")).pop();
            e2 = t3 ? parseInt(t3.getAttribute("data-fragment-index") || 0, 10) : -1;
          }
          e2 += t2;
          let a2 = this.update(e2, s2);
          return a2.hidden.length && this.Reveal.dispatchEvent({ type: "fragmenthidden", data: { fragment: a2.hidden[0], fragments: a2.hidden } }), a2.shown.length && this.Reveal.dispatchEvent({ type: "fragmentshown", data: { fragment: a2.shown[0], fragments: a2.shown } }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!a2.shown.length && !a2.hidden.length);
        }
      }
      return false;
    }
    next() {
      return this.goto(null, 1);
    }
    prev() {
      return this.goto(null, -1);
    }
  };
  var P = class {
    constructor(e2) {
      this.Reveal = e2, this.active = false, this.onSlideClicked = this.onSlideClicked.bind(this);
    }
    activate() {
      if (this.Reveal.getConfig().overview && !this.Reveal.isScrollView() && !this.isActive()) {
        this.active = true, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), b).forEach((e3) => {
          e3.classList.contains("stack") || e3.addEventListener("click", this.onSlideClicked, true);
        });
        const e2 = 70, i2 = this.Reveal.getComputedSlideSize();
        this.overviewSlideWidth = i2.width + e2, this.overviewSlideHeight = i2.height + e2, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
        const s2 = this.Reveal.getIndices();
        this.Reveal.dispatchEvent({ type: "overviewshown", data: { indexh: s2.h, indexv: s2.v, currentSlide: this.Reveal.getCurrentSlide() } });
      }
    }
    layout() {
      this.Reveal.getHorizontalSlides().forEach((e2, i2) => {
        e2.setAttribute("data-index-h", i2), a(e2, "translate3d(" + i2 * this.overviewSlideWidth + "px, 0, 0)"), e2.classList.contains("stack") && t(e2, "section").forEach((e3, t2) => {
          e3.setAttribute("data-index-h", i2), e3.setAttribute("data-index-v", t2), a(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
        });
      }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e2, i2) => {
        a(e2, "translate3d(" + i2 * this.overviewSlideWidth + "px, 0, 0)"), t(e2, ".slide-background").forEach((e3, t2) => {
          a(e3, "translate3d(0, " + t2 * this.overviewSlideHeight + "px, 0)");
        });
      });
    }
    update() {
      const e2 = Math.min(window.innerWidth, window.innerHeight), t2 = Math.max(e2 / 5, 150) / e2, i2 = this.Reveal.getIndices();
      this.Reveal.transformSlides({ overview: ["scale(" + t2 + ")", "translateX(" + -i2.h * this.overviewSlideWidth + "px)", "translateY(" + -i2.v * this.overviewSlideHeight + "px)"].join(" ") });
    }
    deactivate() {
      if (this.Reveal.getConfig().overview) {
        this.active = false, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(() => {
          this.Reveal.getRevealElement().classList.remove("overview-deactivating");
        }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), b).forEach((e3) => {
          a(e3, ""), e3.removeEventListener("click", this.onSlideClicked, true);
        }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e3) => {
          a(e3, "");
        }), this.Reveal.transformSlides({ overview: "" });
        const e2 = this.Reveal.getIndices();
        this.Reveal.slide(e2.h, e2.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({ type: "overviewhidden", data: { indexh: e2.h, indexv: e2.v, currentSlide: this.Reveal.getCurrentSlide() } });
      }
    }
    toggle(e2) {
      "boolean" == typeof e2 ? e2 ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
    }
    isActive() {
      return this.active;
    }
    onSlideClicked(e2) {
      if (this.isActive()) {
        e2.preventDefault();
        let t2 = e2.target;
        for (; t2 && !t2.nodeName.match(/section/gi); )
          t2 = t2.parentNode;
        if (t2 && !t2.classList.contains("disabled") && (this.deactivate(), t2.nodeName.match(/section/gi))) {
          let e3 = parseInt(t2.getAttribute("data-index-h"), 10), i2 = parseInt(t2.getAttribute("data-index-v"), 10);
          this.Reveal.slide(e3, i2);
        }
      }
    }
  };
  var T = class {
    constructor(e2) {
      this.Reveal = e2, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this);
    }
    configure(e2, t2) {
      "linear" === e2.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts.G = "Jump to slide", this.shortcuts["ESC, O"] = "Slide overview";
    }
    bind() {
      document.addEventListener("keydown", this.onDocumentKeyDown, false);
    }
    unbind() {
      document.removeEventListener("keydown", this.onDocumentKeyDown, false);
    }
    addKeyBinding(e2, t2) {
      "object" == typeof e2 && e2.keyCode ? this.bindings[e2.keyCode] = { callback: t2, key: e2.key, description: e2.description } : this.bindings[e2] = { callback: t2, key: null, description: null };
    }
    removeKeyBinding(e2) {
      delete this.bindings[e2];
    }
    triggerKey(e2) {
      this.onDocumentKeyDown({ keyCode: e2 });
    }
    registerKeyboardShortcut(e2, t2) {
      this.shortcuts[e2] = t2;
    }
    getShortcuts() {
      return this.shortcuts;
    }
    getBindings() {
      return this.bindings;
    }
    onDocumentKeyDown(e2) {
      let t2 = this.Reveal.getConfig();
      if ("function" == typeof t2.keyboardCondition && false === t2.keyboardCondition(e2))
        return true;
      if ("focused" === t2.keyboardCondition && !this.Reveal.isFocused())
        return true;
      let i2 = e2.keyCode, s2 = !this.Reveal.isAutoSliding();
      this.Reveal.onUserInput(e2);
      let a2 = document.activeElement && true === document.activeElement.isContentEditable, n2 = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), r2 = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), o2 = !(-1 !== [32, 37, 38, 39, 40, 78, 80, 191].indexOf(e2.keyCode) && e2.shiftKey || e2.altKey) && (e2.shiftKey || e2.altKey || e2.ctrlKey || e2.metaKey);
      if (a2 || n2 || r2 || o2)
        return;
      let l2, d2 = [66, 86, 190, 191];
      if ("object" == typeof t2.keyboard)
        for (l2 in t2.keyboard)
          "togglePause" === t2.keyboard[l2] && d2.push(parseInt(l2, 10));
      if (this.Reveal.isPaused() && -1 === d2.indexOf(i2))
        return false;
      let c2 = "linear" === t2.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), h3 = false;
      if ("object" == typeof t2.keyboard) {
        for (l2 in t2.keyboard)
          if (parseInt(l2, 10) === i2) {
            let i3 = t2.keyboard[l2];
            "function" == typeof i3 ? i3.apply(null, [e2]) : "string" == typeof i3 && "function" == typeof this.Reveal[i3] && this.Reveal[i3].call(), h3 = true;
          }
      }
      if (false === h3) {
        for (l2 in this.bindings)
          if (parseInt(l2, 10) === i2) {
            let t3 = this.bindings[l2].callback;
            "function" == typeof t3 ? t3.apply(null, [e2]) : "string" == typeof t3 && "function" == typeof this.Reveal[t3] && this.Reveal[t3].call(), h3 = true;
          }
      }
      false === h3 && (h3 = true, 80 === i2 || 33 === i2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : 78 === i2 || 34 === i2 ? this.Reveal.next({ skipFragments: e2.altKey }) : 72 === i2 || 37 === i2 ? e2.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.left({ skipFragments: e2.altKey }) : 76 === i2 || 39 === i2 ? e2.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.right({ skipFragments: e2.altKey }) : 75 === i2 || 38 === i2 ? e2.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.up({ skipFragments: e2.altKey }) : 74 === i2 || 40 === i2 ? e2.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && c2 ? this.Reveal.next({ skipFragments: e2.altKey }) : this.Reveal.down({ skipFragments: e2.altKey }) : 36 === i2 ? this.Reveal.slide(0) : 35 === i2 ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : 32 === i2 ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e2.shiftKey ? this.Reveal.prev({ skipFragments: e2.altKey }) : this.Reveal.next({ skipFragments: e2.altKey })) : [58, 59, 66, 86, 190].includes(i2) || 191 === i2 && !e2.shiftKey ? this.Reveal.togglePause() : 70 === i2 ? ((e3) => {
        let t3 = (e3 = e3 || document.documentElement).requestFullscreen || e3.webkitRequestFullscreen || e3.webkitRequestFullScreen || e3.mozRequestFullScreen || e3.msRequestFullscreen;
        t3 && t3.apply(e3);
      })(t2.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i2 ? t2.autoSlideStoppable && this.Reveal.toggleAutoSlide(s2) : 71 === i2 ? t2.jumpToSlide && this.Reveal.toggleJumpToSlide() : 191 === i2 && e2.shiftKey ? this.Reveal.toggleHelp() : h3 = false), h3 ? e2.preventDefault && e2.preventDefault() : 27 !== i2 && 79 !== i2 || (false === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e2.preventDefault && e2.preventDefault()), this.Reveal.cueAutoSlide();
    }
  };
  var N = class {
    MAX_REPLACE_STATE_FREQUENCY = 1e3;
    constructor(e2) {
      this.Reveal = e2, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
    }
    bind() {
      window.addEventListener("hashchange", this.onWindowHashChange, false);
    }
    unbind() {
      window.removeEventListener("hashchange", this.onWindowHashChange, false);
    }
    getIndicesFromHash(e2 = window.location.hash, t2 = {}) {
      let i2 = e2.replace(/^#\/?/, ""), s2 = i2.split("/");
      if (/^[0-9]*$/.test(s2[0]) || !i2.length) {
        const e3 = this.Reveal.getConfig();
        let i3, a2 = e3.hashOneBasedIndex || t2.oneBasedIndex ? 1 : 0, n2 = parseInt(s2[0], 10) - a2 || 0, r2 = parseInt(s2[1], 10) - a2 || 0;
        return e3.fragmentInURL && (i3 = parseInt(s2[2], 10), isNaN(i3) && (i3 = void 0)), { h: n2, v: r2, f: i3 };
      }
      {
        let e3, t3;
        /\/[-\d]+$/g.test(i2) && (t3 = parseInt(i2.split("/").pop(), 10), t3 = isNaN(t3) ? void 0 : t3, i2 = i2.split("/").shift());
        try {
          e3 = document.getElementById(decodeURIComponent(i2)).closest(".slides section");
        } catch (e4) {
        }
        if (e3)
          return { ...this.Reveal.getIndices(e3), f: t3 };
      }
      return null;
    }
    readURL() {
      const e2 = this.Reveal.getIndices(), t2 = this.getIndicesFromHash();
      t2 ? t2.h === e2.h && t2.v === e2.v && void 0 === t2.f || this.Reveal.slide(t2.h, t2.v, t2.f) : this.Reveal.slide(e2.h || 0, e2.v || 0);
    }
    writeURL(e2) {
      let t2 = this.Reveal.getConfig(), i2 = this.Reveal.getCurrentSlide();
      if (clearTimeout(this.writeURLTimeout), "number" == typeof e2)
        this.writeURLTimeout = setTimeout(this.writeURL, e2);
      else if (i2) {
        let e3 = this.getHash();
        t2.history ? window.location.hash = e3 : t2.hash && ("/" === e3 ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e3));
      }
    }
    replaceState(e2) {
      window.history.replaceState(null, null, e2), this.replaceStateTimestamp = Date.now();
    }
    debouncedReplaceState(e2) {
      clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e2) : this.replaceStateTimeout = setTimeout(() => this.replaceState(e2), this.MAX_REPLACE_STATE_FREQUENCY);
    }
    getHash(e2) {
      let t2 = "/", i2 = e2 || this.Reveal.getCurrentSlide(), s2 = i2 ? i2.getAttribute("id") : null;
      s2 && (s2 = encodeURIComponent(s2));
      let a2 = this.Reveal.getIndices(e2);
      if (this.Reveal.getConfig().fragmentInURL || (a2.f = void 0), "string" == typeof s2 && s2.length)
        t2 = "/" + s2, a2.f >= 0 && (t2 += "/" + a2.f);
      else {
        let e3 = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
        (a2.h > 0 || a2.v > 0 || a2.f >= 0) && (t2 += a2.h + e3), (a2.v > 0 || a2.f >= 0) && (t2 += "/" + (a2.v + e3)), a2.f >= 0 && (t2 += "/" + a2.f);
      }
      return t2;
    }
    onWindowHashChange(e2) {
      this.readURL();
    }
  };
  var M = class {
    constructor(e2) {
      this.Reveal = e2, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
    }
    render() {
      const e2 = this.Reveal.getConfig().rtl, i2 = this.Reveal.getRevealElement();
      this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e2 ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-right" aria-label="${e2 ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>
			<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>
			<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(i2, ".navigate-left"), this.controlsRight = t(i2, ".navigate-right"), this.controlsUp = t(i2, ".navigate-up"), this.controlsDown = t(i2, ".navigate-down"), this.controlsPrev = t(i2, ".navigate-prev"), this.controlsNext = t(i2, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
    }
    configure(e2, t2) {
      this.element.style.display = e2.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e2.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e2.controlsBackArrows);
    }
    bind() {
      let e2 = ["touchstart", "click"];
      u && (e2 = ["touchstart"]), e2.forEach((e3) => {
        this.controlsLeft.forEach((t2) => t2.addEventListener(e3, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.addEventListener(e3, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.addEventListener(e3, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.addEventListener(e3, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.addEventListener(e3, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.addEventListener(e3, this.onNavigateNextClicked, false));
      });
    }
    unbind() {
      ["touchstart", "click"].forEach((e2) => {
        this.controlsLeft.forEach((t2) => t2.removeEventListener(e2, this.onNavigateLeftClicked, false)), this.controlsRight.forEach((t2) => t2.removeEventListener(e2, this.onNavigateRightClicked, false)), this.controlsUp.forEach((t2) => t2.removeEventListener(e2, this.onNavigateUpClicked, false)), this.controlsDown.forEach((t2) => t2.removeEventListener(e2, this.onNavigateDownClicked, false)), this.controlsPrev.forEach((t2) => t2.removeEventListener(e2, this.onNavigatePrevClicked, false)), this.controlsNext.forEach((t2) => t2.removeEventListener(e2, this.onNavigateNextClicked, false));
      });
    }
    update() {
      let e2 = this.Reveal.availableRoutes();
      [...this.controlsLeft, ...this.controlsRight, ...this.controlsUp, ...this.controlsDown, ...this.controlsPrev, ...this.controlsNext].forEach((e3) => {
        e3.classList.remove("enabled", "fragmented"), e3.setAttribute("disabled", "disabled");
      }), e2.left && this.controlsLeft.forEach((e3) => {
        e3.classList.add("enabled"), e3.removeAttribute("disabled");
      }), e2.right && this.controlsRight.forEach((e3) => {
        e3.classList.add("enabled"), e3.removeAttribute("disabled");
      }), e2.up && this.controlsUp.forEach((e3) => {
        e3.classList.add("enabled"), e3.removeAttribute("disabled");
      }), e2.down && this.controlsDown.forEach((e3) => {
        e3.classList.add("enabled"), e3.removeAttribute("disabled");
      }), (e2.left || e2.up) && this.controlsPrev.forEach((e3) => {
        e3.classList.add("enabled"), e3.removeAttribute("disabled");
      }), (e2.right || e2.down) && this.controlsNext.forEach((e3) => {
        e3.classList.add("enabled"), e3.removeAttribute("disabled");
      });
      let t2 = this.Reveal.getCurrentSlide();
      if (t2) {
        let e3 = this.Reveal.fragments.availableRoutes();
        e3.prev && this.controlsPrev.forEach((e4) => {
          e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
        }), e3.next && this.controlsNext.forEach((e4) => {
          e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
        }), this.Reveal.isVerticalSlide(t2) ? (e3.prev && this.controlsUp.forEach((e4) => {
          e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
        }), e3.next && this.controlsDown.forEach((e4) => {
          e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
        })) : (e3.prev && this.controlsLeft.forEach((e4) => {
          e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
        }), e3.next && this.controlsRight.forEach((e4) => {
          e4.classList.add("fragmented", "enabled"), e4.removeAttribute("disabled");
        }));
      }
      if (this.Reveal.getConfig().controlsTutorial) {
        let t3 = this.Reveal.getIndices();
        !this.Reveal.hasNavigatedVertically() && e2.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e2.left && 0 === t3.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e2.right && 0 === t3.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
      }
    }
    destroy() {
      this.unbind(), this.element.remove();
    }
    onNavigateLeftClicked(e2) {
      e2.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
    }
    onNavigateRightClicked(e2) {
      e2.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
    }
    onNavigateUpClicked(e2) {
      e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
    }
    onNavigateDownClicked(e2) {
      e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
    }
    onNavigatePrevClicked(e2) {
      e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
    }
    onNavigateNextClicked(e2) {
      e2.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
    }
  };
  var I = class {
    constructor(e2) {
      this.Reveal = e2, this.onProgressClicked = this.onProgressClicked.bind(this);
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
    }
    configure(e2, t2) {
      this.element.style.display = e2.progress ? "block" : "none";
    }
    bind() {
      this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, false);
    }
    unbind() {
      this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, false);
    }
    update() {
      if (this.Reveal.getConfig().progress && this.bar) {
        let e2 = this.Reveal.getProgress();
        this.Reveal.getTotalSlides() < 2 && (e2 = 0), this.bar.style.transform = "scaleX(" + e2 + ")";
      }
    }
    getMaxWidth() {
      return this.Reveal.getRevealElement().offsetWidth;
    }
    onProgressClicked(e2) {
      this.Reveal.onUserInput(e2), e2.preventDefault();
      let t2 = this.Reveal.getSlides(), i2 = t2.length, s2 = Math.floor(e2.clientX / this.getMaxWidth() * i2);
      this.Reveal.getConfig().rtl && (s2 = i2 - s2);
      let a2 = this.Reveal.getIndices(t2[s2]);
      this.Reveal.slide(a2.h, a2.v);
    }
    destroy() {
      this.element.remove();
    }
  };
  var B = class {
    constructor(e2) {
      this.Reveal = e2, this.lastMouseWheelStep = 0, this.cursorHidden = false, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
    }
    configure(e2, t2) {
      e2.mouseWheel ? document.addEventListener("wheel", this.onDocumentMouseScroll, false) : document.removeEventListener("wheel", this.onDocumentMouseScroll, false), e2.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, false), document.addEventListener("mousedown", this.onDocumentCursorActive, false)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false));
    }
    showCursor() {
      this.cursorHidden && (this.cursorHidden = false, this.Reveal.getRevealElement().style.cursor = "");
    }
    hideCursor() {
      false === this.cursorHidden && (this.cursorHidden = true, this.Reveal.getRevealElement().style.cursor = "none");
    }
    destroy() {
      this.showCursor(), document.removeEventListener("wheel", this.onDocumentMouseScroll, false), document.removeEventListener("mousemove", this.onDocumentCursorActive, false), document.removeEventListener("mousedown", this.onDocumentCursorActive, false);
    }
    onDocumentCursorActive(e2) {
      this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
    }
    onDocumentMouseScroll(e2) {
      if (Date.now() - this.lastMouseWheelStep > 1e3) {
        this.lastMouseWheelStep = Date.now();
        let t2 = e2.detail || -e2.wheelDelta;
        t2 > 0 ? this.Reveal.next() : t2 < 0 && this.Reveal.prev();
      }
    }
  };
  var H = (e2, t2) => {
    const i2 = document.createElement("script");
    i2.type = "text/javascript", i2.async = false, i2.defer = false, i2.src = e2, "function" == typeof t2 && (i2.onload = i2.onreadystatechange = (e3) => {
      ("load" === e3.type || /loaded|complete/.test(i2.readyState)) && (i2.onload = i2.onreadystatechange = i2.onerror = null, t2());
    }, i2.onerror = (e3) => {
      i2.onload = i2.onreadystatechange = i2.onerror = null, t2(new Error("Failed loading script: " + i2.src + "\n" + e3));
    });
    const s2 = document.querySelector("head");
    s2.insertBefore(i2, s2.lastChild);
  };
  var D = class {
    constructor(e2) {
      this.Reveal = e2, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
    }
    load(e2, t2) {
      return this.state = "loading", e2.forEach(this.registerPlugin.bind(this)), new Promise((e3) => {
        let i2 = [], s2 = 0;
        if (t2.forEach((e4) => {
          e4.condition && !e4.condition() || (e4.async ? this.asyncDependencies.push(e4) : i2.push(e4));
        }), i2.length) {
          s2 = i2.length;
          const t3 = (t4) => {
            t4 && "function" == typeof t4.callback && t4.callback(), 0 == --s2 && this.initPlugins().then(e3);
          };
          i2.forEach((e4) => {
            "string" == typeof e4.id ? (this.registerPlugin(e4), t3(e4)) : "string" == typeof e4.src ? H(e4.src, () => t3(e4)) : (console.warn("Unrecognized plugin format", e4), t3());
          });
        } else
          this.initPlugins().then(e3);
      });
    }
    initPlugins() {
      return new Promise((e2) => {
        let t2 = Object.values(this.registeredPlugins), i2 = t2.length;
        if (0 === i2)
          this.loadAsync().then(e2);
        else {
          let s2, a2 = () => {
            0 == --i2 ? this.loadAsync().then(e2) : s2();
          }, n2 = 0;
          s2 = () => {
            let e3 = t2[n2++];
            if ("function" == typeof e3.init) {
              let t3 = e3.init(this.Reveal);
              t3 && "function" == typeof t3.then ? t3.then(a2) : a2();
            } else
              a2();
          }, s2();
        }
      });
    }
    loadAsync() {
      return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e2) => {
        H(e2.src, e2.callback);
      }), Promise.resolve();
    }
    registerPlugin(e2) {
      2 === arguments.length && "string" == typeof arguments[0] ? (e2 = arguments[1]).id = arguments[0] : "function" == typeof e2 && (e2 = e2());
      let t2 = e2.id;
      "string" != typeof t2 ? console.warn("Unrecognized plugin format; can't find plugin.id", e2) : void 0 === this.registeredPlugins[t2] ? (this.registeredPlugins[t2] = e2, "loaded" === this.state && "function" == typeof e2.init && e2.init(this.Reveal)) : console.warn('reveal.js: "' + t2 + '" plugin has already been registered');
    }
    hasPlugin(e2) {
      return !!this.registeredPlugins[e2];
    }
    getPlugin(e2) {
      return this.registeredPlugins[e2];
    }
    getRegisteredPlugins() {
      return this.registeredPlugins;
    }
    destroy() {
      Object.values(this.registeredPlugins).forEach((e2) => {
        "function" == typeof e2.destroy && e2.destroy();
      }), this.registeredPlugins = {}, this.asyncDependencies = [];
    }
  };
  var F = class {
    constructor(e2) {
      this.Reveal = e2, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = false, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
    }
    bind() {
      let e2 = this.Reveal.getRevealElement();
      "onpointerdown" in window ? (e2.addEventListener("pointerdown", this.onPointerDown, false), e2.addEventListener("pointermove", this.onPointerMove, false), e2.addEventListener("pointerup", this.onPointerUp, false)) : window.navigator.msPointerEnabled ? (e2.addEventListener("MSPointerDown", this.onPointerDown, false), e2.addEventListener("MSPointerMove", this.onPointerMove, false), e2.addEventListener("MSPointerUp", this.onPointerUp, false)) : (e2.addEventListener("touchstart", this.onTouchStart, false), e2.addEventListener("touchmove", this.onTouchMove, false), e2.addEventListener("touchend", this.onTouchEnd, false));
    }
    unbind() {
      let e2 = this.Reveal.getRevealElement();
      e2.removeEventListener("pointerdown", this.onPointerDown, false), e2.removeEventListener("pointermove", this.onPointerMove, false), e2.removeEventListener("pointerup", this.onPointerUp, false), e2.removeEventListener("MSPointerDown", this.onPointerDown, false), e2.removeEventListener("MSPointerMove", this.onPointerMove, false), e2.removeEventListener("MSPointerUp", this.onPointerUp, false), e2.removeEventListener("touchstart", this.onTouchStart, false), e2.removeEventListener("touchmove", this.onTouchMove, false), e2.removeEventListener("touchend", this.onTouchEnd, false);
    }
    isSwipePrevented(e2) {
      if (n(e2, "video, audio"))
        return true;
      for (; e2 && "function" == typeof e2.hasAttribute; ) {
        if (e2.hasAttribute("data-prevent-swipe"))
          return true;
        e2 = e2.parentNode;
      }
      return false;
    }
    onTouchStart(e2) {
      if (this.isSwipePrevented(e2.target))
        return true;
      this.touchStartX = e2.touches[0].clientX, this.touchStartY = e2.touches[0].clientY, this.touchStartCount = e2.touches.length;
    }
    onTouchMove(e2) {
      if (this.isSwipePrevented(e2.target))
        return true;
      let t2 = this.Reveal.getConfig();
      if (this.touchCaptured)
        u && e2.preventDefault();
      else {
        this.Reveal.onUserInput(e2);
        let i2 = e2.touches[0].clientX, s2 = e2.touches[0].clientY;
        if (1 === e2.touches.length && 2 !== this.touchStartCount) {
          let a2 = this.Reveal.availableRoutes({ includeFragments: true }), n2 = i2 - this.touchStartX, r2 = s2 - this.touchStartY;
          n2 > 40 && Math.abs(n2) > Math.abs(r2) ? (this.touchCaptured = true, "linear" === t2.navigationMode ? t2.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : n2 < -40 && Math.abs(n2) > Math.abs(r2) ? (this.touchCaptured = true, "linear" === t2.navigationMode ? t2.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : r2 > 40 && a2.up ? (this.touchCaptured = true, "linear" === t2.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : r2 < -40 && a2.down && (this.touchCaptured = true, "linear" === t2.navigationMode ? this.Reveal.next() : this.Reveal.down()), t2.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e2.preventDefault() : e2.preventDefault();
        }
      }
    }
    onTouchEnd(e2) {
      this.touchCaptured = false;
    }
    onPointerDown(e2) {
      e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && "touch" !== e2.pointerType || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchStart(e2));
    }
    onPointerMove(e2) {
      e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && "touch" !== e2.pointerType || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchMove(e2));
    }
    onPointerUp(e2) {
      e2.pointerType !== e2.MSPOINTER_TYPE_TOUCH && "touch" !== e2.pointerType || (e2.touches = [{ clientX: e2.clientX, clientY: e2.clientY }], this.onTouchEnd(e2));
    }
  };
  var z = "focus";
  var q = "blur";
  var O = class {
    constructor(e2) {
      this.Reveal = e2, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
    }
    configure(e2, t2) {
      e2.embedded ? this.blur() : (this.focus(), this.unbind());
    }
    bind() {
      this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, false);
    }
    unbind() {
      this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, false), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false);
    }
    focus() {
      this.state !== z && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = z;
    }
    blur() {
      this.state !== q && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, false)), this.state = q;
    }
    isFocused() {
      return this.state === z;
    }
    destroy() {
      this.Reveal.getRevealElement().classList.remove("focused");
    }
    onRevealPointerDown(e2) {
      this.focus();
    }
    onDocumentPointerDown(e2) {
      let t2 = r(e2.target, ".reveal");
      t2 && t2 === this.Reveal.getRevealElement() || this.blur();
    }
  };
  var W = class {
    constructor(e2) {
      this.Reveal = e2;
    }
    render() {
      this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
    }
    configure(e2, t2) {
      e2.showNotes && this.element.setAttribute("data-layout", "string" == typeof e2.showNotes ? e2.showNotes : "inline");
    }
    update() {
      this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
    }
    updateVisibility() {
      this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.isScrollView() && !this.Reveal.isPrintView() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
    }
    hasNotes() {
      return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
    }
    isSpeakerNotesWindow() {
      return !!window.location.search.match(/receiver/gi);
    }
    getSlideNotes(e2 = this.Reveal.getCurrentSlide()) {
      if (e2.hasAttribute("data-notes"))
        return e2.getAttribute("data-notes");
      let t2 = e2.querySelectorAll("aside.notes");
      return t2 ? Array.from(t2).map((e3) => e3.innerHTML).join("\n") : null;
    }
    destroy() {
      this.element.remove();
    }
  };
  var U = class {
    constructor(e2, t2) {
      this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = false, this.progress = 0, this.progressOffset = 1, this.container = e2, this.progressCheck = t2, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
    }
    setPlaying(e2) {
      const t2 = this.playing;
      this.playing = e2, !t2 && this.playing ? this.animate() : this.render();
    }
    animate() {
      const e2 = this.progress;
      this.progress = this.progressCheck(), e2 > 0.8 && this.progress < 0.2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
    }
    render() {
      let e2 = this.playing ? this.progress : 0, t2 = this.diameter2 - this.thickness, i2 = this.diameter2, s2 = this.diameter2, a2 = 28;
      this.progressOffset += 0.1 * (1 - this.progressOffset);
      const n2 = -Math.PI / 2 + e2 * (2 * Math.PI), r2 = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
      this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i2, s2, t2 + 4, 0, 2 * Math.PI, false), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i2, s2, t2, 0, 2 * Math.PI, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i2, s2, t2, r2, n2, false), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i2 - 14, s2 - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, a2), this.context.fillRect(18, 0, 10, a2)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, a2), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
    }
    on(e2, t2) {
      this.canvas.addEventListener(e2, t2, false);
    }
    off(e2, t2) {
      this.canvas.removeEventListener(e2, t2, false);
    }
    destroy() {
      this.playing = false, this.canvas.parentNode && this.container.removeChild(this.canvas);
    }
  };
  var V = { width: 960, height: 700, margin: 0.04, minScale: 0.2, maxScale: 2, controls: true, controlsTutorial: true, controlsLayout: "bottom-right", controlsBackArrows: "faded", progress: true, slideNumber: false, showSlideNumber: "all", hashOneBasedIndex: false, hash: false, respondToHashChanges: true, jumpToSlide: true, history: false, keyboard: true, keyboardCondition: null, disableLayout: false, overview: true, center: true, touch: true, loop: false, rtl: false, navigationMode: "default", shuffle: false, fragments: true, fragmentInURL: true, embedded: false, help: true, pause: true, showNotes: false, showHiddenSlides: false, autoPlayMedia: null, preloadIframes: null, autoAnimate: true, autoAnimateMatcher: null, autoAnimateEasing: "ease", autoAnimateDuration: 1, autoAnimateUnmatched: true, autoAnimateStyles: ["opacity", "color", "background-color", "padding", "font-size", "line-height", "letter-spacing", "border-width", "border-color", "border-radius", "outline", "outline-offset"], autoSlide: 0, autoSlideStoppable: true, autoSlideMethod: null, defaultTiming: null, mouseWheel: false, previewLinks: false, postMessage: true, postMessageEvents: false, focusBodyOnPageVisibilityChange: true, transition: "slide", transitionSpeed: "default", backgroundTransition: "fade", parallaxBackgroundImage: "", parallaxBackgroundSize: "", parallaxBackgroundRepeat: "", parallaxBackgroundPosition: "", parallaxBackgroundHorizontal: null, parallaxBackgroundVertical: null, view: null, scrollLayout: "full", scrollSnap: "mandatory", scrollProgress: "auto", scrollActivationWidth: 435, pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY, pdfSeparateFragments: true, pdfPageHeightOffset: -1, viewDistance: 3, mobileViewDistance: 2, display: "block", hideInactiveCursor: true, hideCursorTime: 5e3, sortFragmentsOnSync: true, dependencies: [], plugins: [] };
  var j = "5.0.1";
  function K(n2, o2) {
    arguments.length < 2 && (o2 = arguments[0], n2 = document.querySelector(".reveal"));
    const d2 = {};
    let c2, u2, g2, f2, A2, R2 = {}, H2 = false, z2 = { hasNavigatedHorizontally: false, hasNavigatedVertically: false }, q2 = [], K2 = 1, $2 = { layout: "", overview: "" }, X2 = {}, Y = "idle", _ = 0, J = 0, G = -1, Q = false, Z = new p(d2), ee = new v(d2), te = new m(d2), ie = new k(d2), se = new y(d2), ae = new L(d2), ne = new C(d2), re = new x(d2), oe = new P(d2), le = new T(d2), de = new N(d2), ce = new M(d2), he = new I(d2), ue = new B(d2), ge = new D(d2), pe = new O(d2), ve = new F(d2), me = new W(d2);
    function fe() {
      H2 = true, R2.showHiddenSlides || t(X2.wrapper, 'section[data-visibility="hidden"]').forEach((e2) => {
        const t2 = e2.parentNode;
        1 === t2.childElementCount && /section/i.test(t2.nodeName) ? t2.remove() : e2.remove();
      }), function() {
        X2.slides.classList.add("no-transition"), h ? X2.wrapper.classList.add("no-hover") : X2.wrapper.classList.remove("no-hover");
        se.render(), ee.render(), te.render(), ce.render(), he.render(), me.render(), X2.pauseOverlay = ((e2, t2, i2, s2 = "") => {
          let a2 = e2.querySelectorAll("." + i2);
          for (let t3 = 0; t3 < a2.length; t3++) {
            let i3 = a2[t3];
            if (i3.parentNode === e2)
              return i3;
          }
          let n3 = document.createElement(t2);
          return n3.className = i2, n3.innerHTML = s2, e2.appendChild(n3), n3;
        })(X2.wrapper, "div", "pause-overlay", R2.controls ? '<button class="resume-button">Resume presentation</button>' : null), X2.statusElement = function() {
          let e2 = X2.wrapper.querySelector(".aria-status");
          e2 || (e2 = document.createElement("div"), e2.style.position = "absolute", e2.style.height = "1px", e2.style.width = "1px", e2.style.overflow = "hidden", e2.style.clip = "rect( 1px, 1px, 1px, 1px )", e2.classList.add("aria-status"), e2.setAttribute("aria-live", "polite"), e2.setAttribute("aria-atomic", "true"), X2.wrapper.appendChild(e2));
          return e2;
        }(), X2.wrapper.setAttribute("role", "application");
      }(), R2.postMessage && window.addEventListener("message", St, false), setInterval(() => {
        (!ae.isActive() && 0 !== X2.wrapper.scrollTop || 0 !== X2.wrapper.scrollLeft) && (X2.wrapper.scrollTop = 0, X2.wrapper.scrollLeft = 0);
      }, 1e3), document.addEventListener("fullscreenchange", Ct), document.addEventListener("webkitfullscreenchange", Ct), nt().forEach((e2) => {
        t(e2, "section").forEach((e3, t2) => {
          t2 > 0 && (e3.classList.remove("present"), e3.classList.remove("past"), e3.classList.add("future"), e3.setAttribute("aria-hidden", "true"));
        });
      }), we(), se.update(true), function() {
        const e2 = "print" === R2.view, t2 = "scroll" === R2.view || "reader" === R2.view;
        (e2 || t2) && (e2 ? Se() : ve.unbind(), X2.viewport.classList.add("loading-scroll-mode"), e2 ? "complete" === document.readyState ? ne.activate() : window.addEventListener("load", () => ne.activate()) : ae.activate());
      }(), de.readURL(), setTimeout(() => {
        X2.slides.classList.remove("no-transition"), X2.wrapper.classList.add("ready"), Le({ type: "ready", data: { indexh: c2, indexv: u2, currentSlide: f2 } });
      }, 1);
    }
    function ye(e2) {
      X2.statusElement.textContent = e2;
    }
    function be(e2) {
      let t2 = "";
      if (3 === e2.nodeType)
        t2 += e2.textContent;
      else if (1 === e2.nodeType) {
        let i2 = e2.getAttribute("aria-hidden"), s2 = "none" === window.getComputedStyle(e2).display;
        "true" === i2 || s2 || Array.from(e2.childNodes).forEach((e3) => {
          t2 += be(e3);
        });
      }
      return t2 = t2.trim(), "" === t2 ? "" : t2 + " ";
    }
    function we(t2) {
      const s2 = { ...R2 };
      if ("object" == typeof t2 && e(R2, t2), false === d2.isReady())
        return;
      const a2 = X2.wrapper.querySelectorAll(b).length;
      X2.wrapper.classList.remove(s2.transition), X2.wrapper.classList.add(R2.transition), X2.wrapper.setAttribute("data-transition-speed", R2.transitionSpeed), X2.wrapper.setAttribute("data-background-transition", R2.backgroundTransition), X2.viewport.style.setProperty("--slide-width", "string" == typeof R2.width ? R2.width : R2.width + "px"), X2.viewport.style.setProperty("--slide-height", "string" == typeof R2.height ? R2.height : R2.height + "px"), R2.shuffle && Je(), i(X2.wrapper, "embedded", R2.embedded), i(X2.wrapper, "rtl", R2.rtl), i(X2.wrapper, "center", R2.center), false === R2.pause && je(), R2.previewLinks ? (Pe(), Te("[data-preview-link=false]")) : (Te(), Pe("[data-preview-link]:not([data-preview-link=false])")), ie.reset(), A2 && (A2.destroy(), A2 = null), a2 > 1 && R2.autoSlide && R2.autoSlideStoppable && (A2 = new U(X2.wrapper, () => Math.min(Math.max((Date.now() - G) / _, 0), 1)), A2.on("click", Pt), Q = false), "default" !== R2.navigationMode ? X2.wrapper.setAttribute("data-navigation-mode", R2.navigationMode) : X2.wrapper.removeAttribute("data-navigation-mode"), me.configure(R2, s2), pe.configure(R2, s2), ue.configure(R2, s2), ce.configure(R2, s2), he.configure(R2, s2), le.configure(R2, s2), re.configure(R2, s2), ee.configure(R2, s2), _e();
    }
    function Ee() {
      window.addEventListener("resize", kt, false), R2.touch && ve.bind(), R2.keyboard && le.bind(), R2.progress && he.bind(), R2.respondToHashChanges && de.bind(), ce.bind(), pe.bind(), X2.slides.addEventListener("click", Rt, false), X2.slides.addEventListener("transitionend", At, false), X2.pauseOverlay.addEventListener("click", je, false), R2.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Lt, false);
    }
    function Se() {
      ve.unbind(), pe.unbind(), le.unbind(), ce.unbind(), he.unbind(), de.unbind(), window.removeEventListener("resize", kt, false), X2.slides.removeEventListener("click", Rt, false), X2.slides.removeEventListener("transitionend", At, false), X2.pauseOverlay.removeEventListener("click", je, false);
    }
    function Ae(e2, t2, i2) {
      n2.addEventListener(e2, t2, i2);
    }
    function Re(e2, t2, i2) {
      n2.removeEventListener(e2, t2, i2);
    }
    function ke(e2) {
      "string" == typeof e2.layout && ($2.layout = e2.layout), "string" == typeof e2.overview && ($2.overview = e2.overview), $2.layout ? a(X2.slides, $2.layout + " " + $2.overview) : a(X2.slides, $2.overview);
    }
    function Le({ target: t2 = X2.wrapper, type: i2, data: s2, bubbles: a2 = true }) {
      let n3 = document.createEvent("HTMLEvents", 1, 2);
      return n3.initEvent(i2, a2, true), e(n3, s2), t2.dispatchEvent(n3), t2 === X2.wrapper && xe(i2), n3;
    }
    function Ce(e2) {
      Le({ type: "slidechanged", data: { indexh: c2, indexv: u2, previousSlide: g2, currentSlide: f2, origin: e2 } });
    }
    function xe(t2, i2) {
      if (R2.postMessageEvents && window.parent !== window.self) {
        let s2 = { namespace: "reveal", eventName: t2, state: ht() };
        e(s2, i2), window.parent.postMessage(JSON.stringify(s2), "*");
      }
    }
    function Pe(e2 = "a") {
      Array.from(X2.wrapper.querySelectorAll(e2)).forEach((e3) => {
        /^(http|www)/gi.test(e3.getAttribute("href")) && e3.addEventListener("click", xt, false);
      });
    }
    function Te(e2 = "a") {
      Array.from(X2.wrapper.querySelectorAll(e2)).forEach((e3) => {
        /^(http|www)/gi.test(e3.getAttribute("href")) && e3.removeEventListener("click", xt, false);
      });
    }
    function Ne(e2) {
      Ie(), X2.overlay = document.createElement("div"), X2.overlay.classList.add("overlay"), X2.overlay.classList.add("overlay-preview"), X2.wrapper.appendChild(X2.overlay), X2.overlay.innerHTML = `<header>
				<a class="close" href="#"><span class="icon"></span></a>
				<a class="external" href="${e2}" target="_blank"><span class="icon"></span></a>
			</header>
			<div class="spinner"></div>
			<div class="viewport">
				<iframe src="${e2}"></iframe>
				<small class="viewport-inner">
					<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>
				</small>
			</div>`, X2.overlay.querySelector("iframe").addEventListener("load", (e3) => {
        X2.overlay.classList.add("loaded");
      }, false), X2.overlay.querySelector(".close").addEventListener("click", (e3) => {
        Ie(), e3.preventDefault();
      }, false), X2.overlay.querySelector(".external").addEventListener("click", (e3) => {
        Ie();
      }, false);
    }
    function Me() {
      if (R2.help) {
        Ie(), X2.overlay = document.createElement("div"), X2.overlay.classList.add("overlay"), X2.overlay.classList.add("overlay-help"), X2.wrapper.appendChild(X2.overlay);
        let e2 = '<p class="title">Keyboard Shortcuts</p><br/>', t2 = le.getShortcuts(), i2 = le.getBindings();
        e2 += "<table><th>KEY</th><th>ACTION</th>";
        for (let i3 in t2)
          e2 += `<tr><td>${i3}</td><td>${t2[i3]}</td></tr>`;
        for (let t3 in i2)
          i2[t3].key && i2[t3].description && (e2 += `<tr><td>${i2[t3].key}</td><td>${i2[t3].description}</td></tr>`);
        e2 += "</table>", X2.overlay.innerHTML = `
				<header>
					<a class="close" href="#"><span class="icon"></span></a>
				</header>
				<div class="viewport">
					<div class="viewport-inner">${e2}</div>
				</div>
			`, X2.overlay.querySelector(".close").addEventListener("click", (e3) => {
          Ie(), e3.preventDefault();
        }, false);
      }
    }
    function Ie() {
      return !!X2.overlay && (X2.overlay.parentNode.removeChild(X2.overlay), X2.overlay = null, true);
    }
    function Be() {
      if (X2.wrapper && !ne.isActive()) {
        const e2 = X2.viewport.offsetWidth, t2 = X2.viewport.offsetHeight;
        if (!R2.disableLayout) {
          h && !R2.embedded && document.documentElement.style.setProperty("--vh", 0.01 * window.innerHeight + "px");
          const i2 = ae.isActive() ? De(e2, t2) : De(), s2 = K2;
          He(R2.width, R2.height), X2.slides.style.width = i2.width + "px", X2.slides.style.height = i2.height + "px", K2 = Math.min(i2.presentationWidth / i2.width, i2.presentationHeight / i2.height), K2 = Math.max(K2, R2.minScale), K2 = Math.min(K2, R2.maxScale), 1 === K2 || ae.isActive() ? (X2.slides.style.zoom = "", X2.slides.style.left = "", X2.slides.style.top = "", X2.slides.style.bottom = "", X2.slides.style.right = "", ke({ layout: "" })) : (X2.slides.style.zoom = "", X2.slides.style.left = "50%", X2.slides.style.top = "50%", X2.slides.style.bottom = "auto", X2.slides.style.right = "auto", ke({ layout: "translate(-50%, -50%) scale(" + K2 + ")" }));
          const a2 = Array.from(X2.wrapper.querySelectorAll(b));
          for (let e3 = 0, t3 = a2.length; e3 < t3; e3++) {
            const t4 = a2[e3];
            "none" !== t4.style.display && (R2.center || t4.classList.contains("center") ? t4.classList.contains("stack") ? t4.style.top = 0 : t4.style.top = Math.max((i2.height - t4.scrollHeight) / 2, 0) + "px" : t4.style.top = "");
          }
          s2 !== K2 && Le({ type: "resize", data: { oldScale: s2, scale: K2, size: i2 } }), "number" == typeof R2.scrollActivationWidth && "scroll" !== R2.view && (i2.presentationWidth > 0 && i2.presentationWidth <= R2.scrollActivationWidth ? ae.isActive() || ae.activate() : ae.isActive() && ae.deactivate());
        }
        X2.viewport.style.setProperty("--slide-scale", K2), X2.viewport.style.setProperty("--viewport-width", e2 + "px"), X2.viewport.style.setProperty("--viewport-height", t2 + "px"), ae.layout(), he.update(), se.updateParallax(), oe.isActive() && oe.update();
      }
    }
    function He(e2, i2) {
      t(X2.slides, "section > .stretch, section > .r-stretch").forEach((t2) => {
        let s2 = ((e3, t3 = 0) => {
          if (e3) {
            let i3, s3 = e3.style.height;
            return e3.style.height = "0px", e3.parentNode.style.height = "auto", i3 = t3 - e3.parentNode.offsetHeight, e3.style.height = s3 + "px", e3.parentNode.style.removeProperty("height"), i3;
          }
          return t3;
        })(t2, i2);
        if (/(img|video)/gi.test(t2.nodeName)) {
          const i3 = t2.naturalWidth || t2.videoWidth, a2 = t2.naturalHeight || t2.videoHeight, n3 = Math.min(e2 / i3, s2 / a2);
          t2.style.width = i3 * n3 + "px", t2.style.height = a2 * n3 + "px";
        } else
          t2.style.width = e2 + "px", t2.style.height = s2 + "px";
      });
    }
    function De(e2, t2) {
      let i2 = R2.width, s2 = R2.height;
      R2.disableLayout && (i2 = X2.slides.offsetWidth, s2 = X2.slides.offsetHeight);
      const a2 = { width: i2, height: s2, presentationWidth: e2 || X2.wrapper.offsetWidth, presentationHeight: t2 || X2.wrapper.offsetHeight };
      return a2.presentationWidth -= a2.presentationWidth * R2.margin, a2.presentationHeight -= a2.presentationHeight * R2.margin, "string" == typeof a2.width && /%$/.test(a2.width) && (a2.width = parseInt(a2.width, 10) / 100 * a2.presentationWidth), "string" == typeof a2.height && /%$/.test(a2.height) && (a2.height = parseInt(a2.height, 10) / 100 * a2.presentationHeight), a2;
    }
    function Fe(e2, t2) {
      "object" == typeof e2 && "function" == typeof e2.setAttribute && e2.setAttribute("data-previous-indexv", t2 || 0);
    }
    function ze(e2) {
      if ("object" == typeof e2 && "function" == typeof e2.setAttribute && e2.classList.contains("stack")) {
        const t2 = e2.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
        return parseInt(e2.getAttribute(t2) || 0, 10);
      }
      return 0;
    }
    function qe(e2 = f2) {
      return e2 && e2.parentNode && !!e2.parentNode.nodeName.match(/section/i);
    }
    function Oe() {
      return !(!f2 || !qe(f2)) && !f2.nextElementSibling;
    }
    function We() {
      return 0 === c2 && 0 === u2;
    }
    function Ue() {
      return !!f2 && (!f2.nextElementSibling && (!qe(f2) || !f2.parentNode.nextElementSibling));
    }
    function Ve() {
      if (R2.pause) {
        const e2 = X2.wrapper.classList.contains("paused");
        gt(), X2.wrapper.classList.add("paused"), false === e2 && Le({ type: "paused" });
      }
    }
    function je() {
      const e2 = X2.wrapper.classList.contains("paused");
      X2.wrapper.classList.remove("paused"), ut(), e2 && Le({ type: "resumed" });
    }
    function Ke(e2) {
      "boolean" == typeof e2 ? e2 ? Ve() : je() : $e() ? je() : Ve();
    }
    function $e() {
      return X2.wrapper.classList.contains("paused");
    }
    function Xe(e2, i2, s2, a2) {
      if (Le({ type: "beforeslidechange", data: { indexh: void 0 === e2 ? c2 : e2, indexv: void 0 === i2 ? u2 : i2, origin: a2 } }).defaultPrevented)
        return;
      g2 = f2;
      const n3 = X2.wrapper.querySelectorAll(w);
      if (ae.isActive()) {
        const t2 = ae.getSlideByIndices(e2, i2);
        return void (t2 && ae.scrollToSlide(t2));
      }
      if (0 === n3.length)
        return;
      void 0 !== i2 || oe.isActive() || (i2 = ze(n3[e2])), g2 && g2.parentNode && g2.parentNode.classList.contains("stack") && Fe(g2.parentNode, u2);
      const r2 = q2.concat();
      q2.length = 0;
      let o3 = c2 || 0, l2 = u2 || 0;
      c2 = Ge(w, void 0 === e2 ? c2 : e2), u2 = Ge(E, void 0 === i2 ? u2 : i2);
      let d3 = c2 !== o3 || u2 !== l2;
      d3 || (g2 = null);
      let h3 = n3[c2], p2 = h3.querySelectorAll("section");
      f2 = p2[u2] || h3;
      let v2 = false;
      d3 && g2 && f2 && !oe.isActive() && (Y = "running", v2 = Ye(g2, f2, o3, l2), v2 && X2.slides.classList.add("disable-slide-transitions")), et(), Be(), oe.isActive() && oe.update(), void 0 !== s2 && re.goto(s2), g2 && g2 !== f2 && (g2.classList.remove("present"), g2.setAttribute("aria-hidden", "true"), We() && setTimeout(() => {
        t(X2.wrapper, w + ".stack").forEach((e3) => {
          Fe(e3, 0);
        });
      }, 0));
      e:
        for (let e3 = 0, t2 = q2.length; e3 < t2; e3++) {
          for (let t3 = 0; t3 < r2.length; t3++)
            if (r2[t3] === q2[e3]) {
              r2.splice(t3, 1);
              continue e;
            }
          X2.viewport.classList.add(q2[e3]), Le({ type: q2[e3] });
        }
      for (; r2.length; )
        X2.viewport.classList.remove(r2.pop());
      d3 && Ce(a2), !d3 && g2 || (Z.stopEmbeddedContent(g2), Z.startEmbeddedContent(f2)), requestAnimationFrame(() => {
        ye(be(f2));
      }), he.update(), ce.update(), me.update(), se.update(), se.updateParallax(), ee.update(), re.update(), de.writeURL(), ut(), v2 && (setTimeout(() => {
        X2.slides.classList.remove("disable-slide-transitions");
      }, 0), R2.autoAnimate && ie.run(g2, f2));
    }
    function Ye(e2, t2, i2, s2) {
      return e2.hasAttribute("data-auto-animate") && t2.hasAttribute("data-auto-animate") && e2.getAttribute("data-auto-animate-id") === t2.getAttribute("data-auto-animate-id") && !(c2 > i2 || u2 > s2 ? t2 : e2).hasAttribute("data-auto-animate-restart");
    }
    function _e() {
      Se(), Ee(), Be(), _ = R2.autoSlide, ut(), se.create(), de.writeURL(), true === R2.sortFragmentsOnSync && re.sortAll(), ce.update(), he.update(), et(), me.update(), me.updateVisibility(), se.update(true), ee.update(), Z.formatEmbeddedContent(), false === R2.autoPlayMedia ? Z.stopEmbeddedContent(f2, { unloadIframes: false }) : Z.startEmbeddedContent(f2), oe.isActive() && oe.layout();
    }
    function Je(e2 = nt()) {
      e2.forEach((t2, i2) => {
        let s2 = e2[Math.floor(Math.random() * e2.length)];
        s2.parentNode === t2.parentNode && t2.parentNode.insertBefore(t2, s2);
        let a2 = t2.querySelectorAll("section");
        a2.length && Je(a2);
      });
    }
    function Ge(e2, i2) {
      let s2 = t(X2.wrapper, e2), a2 = s2.length, n3 = ae.isActive() || ne.isActive(), r2 = false, o3 = false;
      if (a2) {
        R2.loop && (i2 >= a2 && (r2 = true), (i2 %= a2) < 0 && (i2 = a2 + i2, o3 = true)), i2 = Math.max(Math.min(i2, a2 - 1), 0);
        for (let e4 = 0; e4 < a2; e4++) {
          let t3 = s2[e4], a3 = R2.rtl && !qe(t3);
          t3.classList.remove("past"), t3.classList.remove("present"), t3.classList.remove("future"), t3.setAttribute("hidden", ""), t3.setAttribute("aria-hidden", "true"), t3.querySelector("section") && t3.classList.add("stack"), n3 ? t3.classList.add("present") : e4 < i2 ? (t3.classList.add(a3 ? "future" : "past"), R2.fragments && Qe(t3)) : e4 > i2 ? (t3.classList.add(a3 ? "past" : "future"), R2.fragments && Ze(t3)) : e4 === i2 && R2.fragments && (r2 ? Ze(t3) : o3 && Qe(t3));
        }
        let e3 = s2[i2], t2 = e3.classList.contains("present");
        e3.classList.add("present"), e3.removeAttribute("hidden"), e3.removeAttribute("aria-hidden"), t2 || Le({ target: e3, type: "visible", bubbles: false });
        let l2 = e3.getAttribute("data-state");
        l2 && (q2 = q2.concat(l2.split(" ")));
      } else
        i2 = 0;
      return i2;
    }
    function Qe(e2) {
      t(e2, ".fragment").forEach((e3) => {
        e3.classList.add("visible"), e3.classList.remove("current-fragment");
      });
    }
    function Ze(e2) {
      t(e2, ".fragment.visible").forEach((e3) => {
        e3.classList.remove("visible", "current-fragment");
      });
    }
    function et() {
      let e2, i2, s2 = nt(), a2 = s2.length;
      if (a2 && void 0 !== c2) {
        let n3 = oe.isActive() ? 10 : R2.viewDistance;
        h && (n3 = oe.isActive() ? 6 : R2.mobileViewDistance), ne.isActive() && (n3 = Number.MAX_VALUE);
        for (let r2 = 0; r2 < a2; r2++) {
          let o3 = s2[r2], l2 = t(o3, "section"), d3 = l2.length;
          if (e2 = Math.abs((c2 || 0) - r2) || 0, R2.loop && (e2 = Math.abs(((c2 || 0) - r2) % (a2 - n3)) || 0), e2 < n3 ? Z.load(o3) : Z.unload(o3), d3) {
            let t2 = ze(o3);
            for (let s3 = 0; s3 < d3; s3++) {
              let a3 = l2[s3];
              i2 = r2 === (c2 || 0) ? Math.abs((u2 || 0) - s3) : Math.abs(s3 - t2), e2 + i2 < n3 ? Z.load(a3) : Z.unload(a3);
            }
          }
        }
        lt() ? X2.wrapper.classList.add("has-vertical-slides") : X2.wrapper.classList.remove("has-vertical-slides"), ot() ? X2.wrapper.classList.add("has-horizontal-slides") : X2.wrapper.classList.remove("has-horizontal-slides");
      }
    }
    function tt({ includeFragments: e2 = false } = {}) {
      let t2 = X2.wrapper.querySelectorAll(w), i2 = X2.wrapper.querySelectorAll(E), s2 = { left: c2 > 0, right: c2 < t2.length - 1, up: u2 > 0, down: u2 < i2.length - 1 };
      if (R2.loop && (t2.length > 1 && (s2.left = true, s2.right = true), i2.length > 1 && (s2.up = true, s2.down = true)), t2.length > 1 && "linear" === R2.navigationMode && (s2.right = s2.right || s2.down, s2.left = s2.left || s2.up), true === e2) {
        let e3 = re.availableRoutes();
        s2.left = s2.left || e3.prev, s2.up = s2.up || e3.prev, s2.down = s2.down || e3.next, s2.right = s2.right || e3.next;
      }
      if (R2.rtl) {
        let e3 = s2.left;
        s2.left = s2.right, s2.right = e3;
      }
      return s2;
    }
    function it(e2 = f2) {
      let t2 = nt(), i2 = 0;
      e:
        for (let s2 = 0; s2 < t2.length; s2++) {
          let a2 = t2[s2], n3 = a2.querySelectorAll("section");
          for (let t3 = 0; t3 < n3.length; t3++) {
            if (n3[t3] === e2)
              break e;
            "uncounted" !== n3[t3].dataset.visibility && i2++;
          }
          if (a2 === e2)
            break;
          false === a2.classList.contains("stack") && "uncounted" !== a2.dataset.visibility && i2++;
        }
      return i2;
    }
    function st(e2) {
      let i2, s2 = c2, a2 = u2;
      if (e2)
        if (ae.isActive())
          s2 = parseInt(e2.getAttribute("data-index-h"), 10), e2.getAttribute("data-index-v") && (a2 = parseInt(e2.getAttribute("data-index-v"), 10));
        else {
          let i3 = qe(e2), n3 = i3 ? e2.parentNode : e2, r2 = nt();
          s2 = Math.max(r2.indexOf(n3), 0), a2 = void 0, i3 && (a2 = Math.max(t(e2.parentNode, "section").indexOf(e2), 0));
        }
      if (!e2 && f2) {
        if (f2.querySelectorAll(".fragment").length > 0) {
          let e3 = f2.querySelector(".current-fragment");
          i2 = e3 && e3.hasAttribute("data-fragment-index") ? parseInt(e3.getAttribute("data-fragment-index"), 10) : f2.querySelectorAll(".fragment.visible").length - 1;
        }
      }
      return { h: s2, v: a2, f: i2 };
    }
    function at() {
      return t(X2.wrapper, b + ':not(.stack):not([data-visibility="uncounted"])');
    }
    function nt() {
      return t(X2.wrapper, w);
    }
    function rt() {
      return t(X2.wrapper, ".slides>section>section");
    }
    function ot() {
      return nt().length > 1;
    }
    function lt() {
      return rt().length > 1;
    }
    function dt() {
      return at().length;
    }
    function ct(e2, t2) {
      let i2 = nt()[e2], s2 = i2 && i2.querySelectorAll("section");
      return s2 && s2.length && "number" == typeof t2 ? s2 ? s2[t2] : void 0 : i2;
    }
    function ht() {
      let e2 = st();
      return { indexh: e2.h, indexv: e2.v, indexf: e2.f, paused: $e(), overview: oe.isActive() };
    }
    function ut() {
      if (gt(), f2 && false !== R2.autoSlide) {
        let e2 = f2.querySelector(".current-fragment[data-autoslide]"), i2 = e2 ? e2.getAttribute("data-autoslide") : null, s2 = f2.parentNode ? f2.parentNode.getAttribute("data-autoslide") : null, a2 = f2.getAttribute("data-autoslide");
        i2 ? _ = parseInt(i2, 10) : a2 ? _ = parseInt(a2, 10) : s2 ? _ = parseInt(s2, 10) : (_ = R2.autoSlide, 0 === f2.querySelectorAll(".fragment").length && t(f2, "video, audio").forEach((e3) => {
          e3.hasAttribute("data-autoplay") && _ && 1e3 * e3.duration / e3.playbackRate > _ && (_ = 1e3 * e3.duration / e3.playbackRate + 1e3);
        })), !_ || Q || $e() || oe.isActive() || Ue() && !re.availableRoutes().next && true !== R2.loop || (J = setTimeout(() => {
          "function" == typeof R2.autoSlideMethod ? R2.autoSlideMethod() : Et(), ut();
        }, _), G = Date.now()), A2 && A2.setPlaying(-1 !== J);
      }
    }
    function gt() {
      clearTimeout(J), J = -1;
    }
    function pt() {
      _ && !Q && (Q = true, Le({ type: "autoslidepaused" }), clearTimeout(J), A2 && A2.setPlaying(false));
    }
    function vt() {
      _ && Q && (Q = false, Le({ type: "autoslideresumed" }), ut());
    }
    function mt({ skipFragments: e2 = false } = {}) {
      z2.hasNavigatedHorizontally = true, R2.rtl ? (oe.isActive() || e2 || false === re.next()) && tt().left && Xe(c2 + 1, "grid" === R2.navigationMode ? u2 : void 0) : (oe.isActive() || e2 || false === re.prev()) && tt().left && Xe(c2 - 1, "grid" === R2.navigationMode ? u2 : void 0);
    }
    function ft({ skipFragments: e2 = false } = {}) {
      z2.hasNavigatedHorizontally = true, R2.rtl ? (oe.isActive() || e2 || false === re.prev()) && tt().right && Xe(c2 - 1, "grid" === R2.navigationMode ? u2 : void 0) : (oe.isActive() || e2 || false === re.next()) && tt().right && Xe(c2 + 1, "grid" === R2.navigationMode ? u2 : void 0);
    }
    function yt({ skipFragments: e2 = false } = {}) {
      (oe.isActive() || e2 || false === re.prev()) && tt().up && Xe(c2, u2 - 1);
    }
    function bt({ skipFragments: e2 = false } = {}) {
      z2.hasNavigatedVertically = true, (oe.isActive() || e2 || false === re.next()) && tt().down && Xe(c2, u2 + 1);
    }
    function wt({ skipFragments: e2 = false } = {}) {
      if (e2 || false === re.prev())
        if (tt().up)
          yt({ skipFragments: e2 });
        else {
          let i2;
          if (i2 = R2.rtl ? t(X2.wrapper, w + ".future").pop() : t(X2.wrapper, w + ".past").pop(), i2 && i2.classList.contains("stack")) {
            let e3 = i2.querySelectorAll("section").length - 1 || void 0;
            Xe(c2 - 1, e3);
          } else
            mt({ skipFragments: e2 });
        }
    }
    function Et({ skipFragments: e2 = false } = {}) {
      if (z2.hasNavigatedHorizontally = true, z2.hasNavigatedVertically = true, e2 || false === re.next()) {
        let t2 = tt();
        t2.down && t2.right && R2.loop && Oe() && (t2.down = false), t2.down ? bt({ skipFragments: e2 }) : R2.rtl ? mt({ skipFragments: e2 }) : ft({ skipFragments: e2 });
      }
    }
    function St(e2) {
      let t2 = e2.data;
      if ("string" == typeof t2 && "{" === t2.charAt(0) && "}" === t2.charAt(t2.length - 1) && (t2 = JSON.parse(t2), t2.method && "function" == typeof d2[t2.method]))
        if (false === S.test(t2.method)) {
          const e3 = d2[t2.method].apply(d2, t2.args);
          xe("callback", { method: t2.method, result: e3 });
        } else
          console.warn('reveal.js: "' + t2.method + '" is is blacklisted from the postMessage API');
    }
    function At(e2) {
      "running" === Y && /section/gi.test(e2.target.nodeName) && (Y = "idle", Le({ type: "slidetransitionend", data: { indexh: c2, indexv: u2, previousSlide: g2, currentSlide: f2 } }));
    }
    function Rt(e2) {
      const t2 = r(e2.target, 'a[href^="#"]');
      if (t2) {
        const i2 = t2.getAttribute("href"), s2 = de.getIndicesFromHash(i2);
        s2 && (d2.slide(s2.h, s2.v, s2.f), e2.preventDefault());
      }
    }
    function kt(e2) {
      Be();
    }
    function Lt(e2) {
      false === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
    }
    function Ct(e2) {
      (document.fullscreenElement || document.webkitFullscreenElement) === X2.wrapper && (e2.stopImmediatePropagation(), setTimeout(() => {
        d2.layout(), d2.focus.focus();
      }, 1));
    }
    function xt(e2) {
      if (e2.currentTarget && e2.currentTarget.hasAttribute("href")) {
        let t2 = e2.currentTarget.getAttribute("href");
        t2 && (Ne(t2), e2.preventDefault());
      }
    }
    function Pt(e2) {
      Ue() && false === R2.loop ? (Xe(0, 0), vt()) : Q ? vt() : pt();
    }
    const Tt = { VERSION: j, initialize: function(e2) {
      if (!n2)
        throw 'Unable to find presentation root (<div class="reveal">).';
      if (X2.wrapper = n2, X2.slides = n2.querySelector(".slides"), !X2.slides)
        throw 'Unable to find slides container (<div class="slides">).';
      return R2 = { ...V, ...R2, ...o2, ...e2, ...l() }, /print-pdf/gi.test(window.location.search) && (R2.view = "print"), function() {
        true === R2.embedded ? X2.viewport = r(n2, ".reveal-viewport") || n2 : (X2.viewport = document.body, document.documentElement.classList.add("reveal-full-page"));
        X2.viewport.classList.add("reveal-viewport");
      }(), window.addEventListener("load", Be, false), ge.load(R2.plugins, R2.dependencies).then(fe), new Promise((e3) => d2.on("ready", e3));
    }, configure: we, destroy: function() {
      Se(), gt(), Te(), me.destroy(), pe.destroy(), ge.destroy(), ue.destroy(), ce.destroy(), he.destroy(), se.destroy(), ee.destroy(), te.destroy(), document.removeEventListener("fullscreenchange", Ct), document.removeEventListener("webkitfullscreenchange", Ct), document.removeEventListener("visibilitychange", Lt, false), window.removeEventListener("message", St, false), window.removeEventListener("load", Be, false), X2.pauseOverlay && X2.pauseOverlay.remove(), X2.statusElement && X2.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), X2.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), X2.wrapper.removeAttribute("data-transition-speed"), X2.wrapper.removeAttribute("data-background-transition"), X2.viewport.classList.remove("reveal-viewport"), X2.viewport.style.removeProperty("--slide-width"), X2.viewport.style.removeProperty("--slide-height"), X2.slides.style.removeProperty("width"), X2.slides.style.removeProperty("height"), X2.slides.style.removeProperty("zoom"), X2.slides.style.removeProperty("left"), X2.slides.style.removeProperty("top"), X2.slides.style.removeProperty("bottom"), X2.slides.style.removeProperty("right"), X2.slides.style.removeProperty("transform"), Array.from(X2.wrapper.querySelectorAll(b)).forEach((e2) => {
        e2.style.removeProperty("display"), e2.style.removeProperty("top"), e2.removeAttribute("hidden"), e2.removeAttribute("aria-hidden");
      });
    }, sync: _e, syncSlide: function(e2 = f2) {
      se.sync(e2), re.sync(e2), Z.load(e2), se.update(), me.update();
    }, syncFragments: re.sync.bind(re), slide: Xe, left: mt, right: ft, up: yt, down: bt, prev: wt, next: Et, navigateLeft: mt, navigateRight: ft, navigateUp: yt, navigateDown: bt, navigatePrev: wt, navigateNext: Et, navigateFragment: re.goto.bind(re), prevFragment: re.prev.bind(re), nextFragment: re.next.bind(re), on: Ae, off: Re, addEventListener: Ae, removeEventListener: Re, layout: Be, shuffle: Je, availableRoutes: tt, availableFragments: re.availableRoutes.bind(re), toggleHelp: function(e2) {
      "boolean" == typeof e2 ? e2 ? Me() : Ie() : X2.overlay ? Ie() : Me();
    }, toggleOverview: oe.toggle.bind(oe), toggleScrollView: ae.toggle.bind(ae), togglePause: Ke, toggleAutoSlide: function(e2) {
      "boolean" == typeof e2 ? e2 ? vt() : pt() : Q ? vt() : pt();
    }, toggleJumpToSlide: function(e2) {
      "boolean" == typeof e2 ? e2 ? te.show() : te.hide() : te.isVisible() ? te.hide() : te.show();
    }, isFirstSlide: We, isLastSlide: Ue, isLastVerticalSlide: Oe, isVerticalSlide: qe, isVerticalStack: function(e2 = f2) {
      return e2.classList.contains(".stack") || null !== e2.querySelector("section");
    }, isPaused: $e, isAutoSliding: function() {
      return !(!_ || Q);
    }, isSpeakerNotes: me.isSpeakerNotesWindow.bind(me), isOverview: oe.isActive.bind(oe), isFocused: pe.isFocused.bind(pe), isScrollView: ae.isActive.bind(ae), isPrintView: ne.isActive.bind(ne), isReady: () => H2, loadSlide: Z.load.bind(Z), unloadSlide: Z.unload.bind(Z), startEmbeddedContent: () => Z.startEmbeddedContent(f2), stopEmbeddedContent: () => Z.stopEmbeddedContent(f2, { unloadIframes: false }), showPreview: Ne, hidePreview: Ie, addEventListeners: Ee, removeEventListeners: Se, dispatchEvent: Le, getState: ht, setState: function(e2) {
      if ("object" == typeof e2) {
        Xe(s(e2.indexh), s(e2.indexv), s(e2.indexf));
        let t2 = s(e2.paused), i2 = s(e2.overview);
        "boolean" == typeof t2 && t2 !== $e() && Ke(t2), "boolean" == typeof i2 && i2 !== oe.isActive() && oe.toggle(i2);
      }
    }, getProgress: function() {
      let e2 = dt(), t2 = it();
      if (f2) {
        let e3 = f2.querySelectorAll(".fragment");
        if (e3.length > 0) {
          let i2 = 0.9;
          t2 += f2.querySelectorAll(".fragment.visible").length / e3.length * i2;
        }
      }
      return Math.min(t2 / (e2 - 1), 1);
    }, getIndices: st, getSlidesAttributes: function() {
      return at().map((e2) => {
        let t2 = {};
        for (let i2 = 0; i2 < e2.attributes.length; i2++) {
          let s2 = e2.attributes[i2];
          t2[s2.name] = s2.value;
        }
        return t2;
      });
    }, getSlidePastCount: it, getTotalSlides: dt, getSlide: ct, getPreviousSlide: () => g2, getCurrentSlide: () => f2, getSlideBackground: function(e2, t2) {
      let i2 = "number" == typeof e2 ? ct(e2, t2) : e2;
      if (i2)
        return i2.slideBackgroundElement;
    }, getSlideNotes: me.getSlideNotes.bind(me), getSlides: at, getHorizontalSlides: nt, getVerticalSlides: rt, hasHorizontalSlides: ot, hasVerticalSlides: lt, hasNavigatedHorizontally: () => z2.hasNavigatedHorizontally, hasNavigatedVertically: () => z2.hasNavigatedVertically, shouldAutoAnimateBetween: Ye, addKeyBinding: le.addKeyBinding.bind(le), removeKeyBinding: le.removeKeyBinding.bind(le), triggerKey: le.triggerKey.bind(le), registerKeyboardShortcut: le.registerKeyboardShortcut.bind(le), getComputedSlideSize: De, setCurrentScrollPage: function(e2, t2, i2) {
      let s2 = c2 || 0;
      c2 = t2, u2 = i2;
      const a2 = f2 !== e2;
      g2 = f2, f2 = e2, f2 && g2 && R2.autoAnimate && Ye(g2, f2, s2, u2) && ie.run(g2, f2), a2 && (g2 && (Z.stopEmbeddedContent(g2), Z.stopEmbeddedContent(g2.slideBackgroundElement)), Z.startEmbeddedContent(f2), Z.startEmbeddedContent(f2.slideBackgroundElement)), requestAnimationFrame(() => {
        ye(be(f2));
      }), Ce();
    }, getScale: () => K2, getConfig: () => R2, getQueryHash: l, getSlidePath: de.getHash.bind(de), getRevealElement: () => n2, getSlidesElement: () => X2.slides, getViewportElement: () => X2.viewport, getBackgroundsElement: () => se.element, registerPlugin: ge.registerPlugin.bind(ge), hasPlugin: ge.hasPlugin.bind(ge), getPlugin: ge.getPlugin.bind(ge), getPlugins: ge.getRegisteredPlugins.bind(ge) };
    return e(d2, { ...Tt, announceStatus: ye, getStatusText: be, focus: pe, scroll: ae, progress: he, controls: ce, location: de, overview: oe, fragments: re, backgrounds: se, slideContent: Z, slideNumber: ee, onUserInput: function(e2) {
      R2.autoSlideStoppable && pt();
    }, closeOverlay: Ie, updateSlidesVisibility: et, layoutSlideContents: He, transformSlides: ke, cueAutoSlide: ut, cancelAutoSlide: gt }), Tt;
  }
  var $ = K;
  var X = [];
  $.initialize = (e2) => (Object.assign($, new K(document.querySelector(".reveal"), e2)), X.map((e3) => e3($)), $.initialize()), ["configure", "on", "off", "addEventListener", "removeEventListener", "registerPlugin"].forEach((e2) => {
    $[e2] = (...t2) => {
      X.push((i2) => i2[e2].call(null, ...t2));
    };
  }), $.isReady = () => false, $.VERSION = j;

  // node_modules/@kurkle/color/dist/color.esm.js
  function round(v2) {
    return v2 + 0.5 | 0;
  }
  var lim = (v2, l2, h3) => Math.max(Math.min(v2, h3), l2);
  function p2b(v2) {
    return lim(round(v2 * 2.55), 0, 255);
  }
  function n2b(v2) {
    return lim(round(v2 * 255), 0, 255);
  }
  function b2n(v2) {
    return lim(round(v2 / 2.55) / 100, 0, 1);
  }
  function n2p(v2) {
    return lim(round(v2 * 100), 0, 100);
  }
  var map$1 = { 0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9, A: 10, B: 11, C: 12, D: 13, E: 14, F: 15, a: 10, b: 11, c: 12, d: 13, e: 14, f: 15 };
  var hex = [..."0123456789ABCDEF"];
  var h1 = (b2) => hex[b2 & 15];
  var h2 = (b2) => hex[(b2 & 240) >> 4] + hex[b2 & 15];
  var eq = (b2) => (b2 & 240) >> 4 === (b2 & 15);
  var isShort = (v2) => eq(v2.r) && eq(v2.g) && eq(v2.b) && eq(v2.a);
  function hexParse(str) {
    var len = str.length;
    var ret;
    if (str[0] === "#") {
      if (len === 4 || len === 5) {
        ret = {
          r: 255 & map$1[str[1]] * 17,
          g: 255 & map$1[str[2]] * 17,
          b: 255 & map$1[str[3]] * 17,
          a: len === 5 ? map$1[str[4]] * 17 : 255
        };
      } else if (len === 7 || len === 9) {
        ret = {
          r: map$1[str[1]] << 4 | map$1[str[2]],
          g: map$1[str[3]] << 4 | map$1[str[4]],
          b: map$1[str[5]] << 4 | map$1[str[6]],
          a: len === 9 ? map$1[str[7]] << 4 | map$1[str[8]] : 255
        };
      }
    }
    return ret;
  }
  var alpha = (a2, f2) => a2 < 255 ? f2(a2) : "";
  function hexString(v2) {
    var f2 = isShort(v2) ? h1 : h2;
    return v2 ? "#" + f2(v2.r) + f2(v2.g) + f2(v2.b) + alpha(v2.a, f2) : void 0;
  }
  var HUE_RE = /^(hsla?|hwb|hsv)\(\s*([-+.e\d]+)(?:deg)?[\s,]+([-+.e\d]+)%[\s,]+([-+.e\d]+)%(?:[\s,]+([-+.e\d]+)(%)?)?\s*\)$/;
  function hsl2rgbn(h3, s2, l2) {
    const a2 = s2 * Math.min(l2, 1 - l2);
    const f2 = (n2, k2 = (n2 + h3 / 30) % 12) => l2 - a2 * Math.max(Math.min(k2 - 3, 9 - k2, 1), -1);
    return [f2(0), f2(8), f2(4)];
  }
  function hsv2rgbn(h3, s2, v2) {
    const f2 = (n2, k2 = (n2 + h3 / 60) % 6) => v2 - v2 * s2 * Math.max(Math.min(k2, 4 - k2, 1), 0);
    return [f2(5), f2(3), f2(1)];
  }
  function hwb2rgbn(h3, w2, b2) {
    const rgb = hsl2rgbn(h3, 1, 0.5);
    let i2;
    if (w2 + b2 > 1) {
      i2 = 1 / (w2 + b2);
      w2 *= i2;
      b2 *= i2;
    }
    for (i2 = 0; i2 < 3; i2++) {
      rgb[i2] *= 1 - w2 - b2;
      rgb[i2] += w2;
    }
    return rgb;
  }
  function hueValue(r2, g2, b2, d2, max) {
    if (r2 === max) {
      return (g2 - b2) / d2 + (g2 < b2 ? 6 : 0);
    }
    if (g2 === max) {
      return (b2 - r2) / d2 + 2;
    }
    return (r2 - g2) / d2 + 4;
  }
  function rgb2hsl(v2) {
    const range = 255;
    const r2 = v2.r / range;
    const g2 = v2.g / range;
    const b2 = v2.b / range;
    const max = Math.max(r2, g2, b2);
    const min = Math.min(r2, g2, b2);
    const l2 = (max + min) / 2;
    let h3, s2, d2;
    if (max !== min) {
      d2 = max - min;
      s2 = l2 > 0.5 ? d2 / (2 - max - min) : d2 / (max + min);
      h3 = hueValue(r2, g2, b2, d2, max);
      h3 = h3 * 60 + 0.5;
    }
    return [h3 | 0, s2 || 0, l2];
  }
  function calln(f2, a2, b2, c2) {
    return (Array.isArray(a2) ? f2(a2[0], a2[1], a2[2]) : f2(a2, b2, c2)).map(n2b);
  }
  function hsl2rgb(h3, s2, l2) {
    return calln(hsl2rgbn, h3, s2, l2);
  }
  function hwb2rgb(h3, w2, b2) {
    return calln(hwb2rgbn, h3, w2, b2);
  }
  function hsv2rgb(h3, s2, v2) {
    return calln(hsv2rgbn, h3, s2, v2);
  }
  function hue(h3) {
    return (h3 % 360 + 360) % 360;
  }
  function hueParse(str) {
    const m2 = HUE_RE.exec(str);
    let a2 = 255;
    let v2;
    if (!m2) {
      return;
    }
    if (m2[5] !== v2) {
      a2 = m2[6] ? p2b(+m2[5]) : n2b(+m2[5]);
    }
    const h3 = hue(+m2[2]);
    const p1 = +m2[3] / 100;
    const p2 = +m2[4] / 100;
    if (m2[1] === "hwb") {
      v2 = hwb2rgb(h3, p1, p2);
    } else if (m2[1] === "hsv") {
      v2 = hsv2rgb(h3, p1, p2);
    } else {
      v2 = hsl2rgb(h3, p1, p2);
    }
    return {
      r: v2[0],
      g: v2[1],
      b: v2[2],
      a: a2
    };
  }
  function rotate(v2, deg) {
    var h3 = rgb2hsl(v2);
    h3[0] = hue(h3[0] + deg);
    h3 = hsl2rgb(h3);
    v2.r = h3[0];
    v2.g = h3[1];
    v2.b = h3[2];
  }
  function hslString(v2) {
    if (!v2) {
      return;
    }
    const a2 = rgb2hsl(v2);
    const h3 = a2[0];
    const s2 = n2p(a2[1]);
    const l2 = n2p(a2[2]);
    return v2.a < 255 ? `hsla(${h3}, ${s2}%, ${l2}%, ${b2n(v2.a)})` : `hsl(${h3}, ${s2}%, ${l2}%)`;
  }
  var map = {
    x: "dark",
    Z: "light",
    Y: "re",
    X: "blu",
    W: "gr",
    V: "medium",
    U: "slate",
    A: "ee",
    T: "ol",
    S: "or",
    B: "ra",
    C: "lateg",
    D: "ights",
    R: "in",
    Q: "turquois",
    E: "hi",
    P: "ro",
    O: "al",
    N: "le",
    M: "de",
    L: "yello",
    F: "en",
    K: "ch",
    G: "arks",
    H: "ea",
    I: "ightg",
    J: "wh"
  };
  var names$1 = {
    OiceXe: "f0f8ff",
    antiquewEte: "faebd7",
    aqua: "ffff",
    aquamarRe: "7fffd4",
    azuY: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "0",
    blanKedOmond: "ffebcd",
    Xe: "ff",
    XeviTet: "8a2be2",
    bPwn: "a52a2a",
    burlywood: "deb887",
    caMtXe: "5f9ea0",
    KartYuse: "7fff00",
    KocTate: "d2691e",
    cSO: "ff7f50",
    cSnflowerXe: "6495ed",
    cSnsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "ffff",
    xXe: "8b",
    xcyan: "8b8b",
    xgTMnPd: "b8860b",
    xWay: "a9a9a9",
    xgYF: "6400",
    xgYy: "a9a9a9",
    xkhaki: "bdb76b",
    xmagFta: "8b008b",
    xTivegYF: "556b2f",
    xSange: "ff8c00",
    xScEd: "9932cc",
    xYd: "8b0000",
    xsOmon: "e9967a",
    xsHgYF: "8fbc8f",
    xUXe: "483d8b",
    xUWay: "2f4f4f",
    xUgYy: "2f4f4f",
    xQe: "ced1",
    xviTet: "9400d3",
    dAppRk: "ff1493",
    dApskyXe: "bfff",
    dimWay: "696969",
    dimgYy: "696969",
    dodgerXe: "1e90ff",
    fiYbrick: "b22222",
    flSOwEte: "fffaf0",
    foYstWAn: "228b22",
    fuKsia: "ff00ff",
    gaRsbSo: "dcdcdc",
    ghostwEte: "f8f8ff",
    gTd: "ffd700",
    gTMnPd: "daa520",
    Way: "808080",
    gYF: "8000",
    gYFLw: "adff2f",
    gYy: "808080",
    honeyMw: "f0fff0",
    hotpRk: "ff69b4",
    RdianYd: "cd5c5c",
    Rdigo: "4b0082",
    ivSy: "fffff0",
    khaki: "f0e68c",
    lavFMr: "e6e6fa",
    lavFMrXsh: "fff0f5",
    lawngYF: "7cfc00",
    NmoncEffon: "fffacd",
    ZXe: "add8e6",
    ZcSO: "f08080",
    Zcyan: "e0ffff",
    ZgTMnPdLw: "fafad2",
    ZWay: "d3d3d3",
    ZgYF: "90ee90",
    ZgYy: "d3d3d3",
    ZpRk: "ffb6c1",
    ZsOmon: "ffa07a",
    ZsHgYF: "20b2aa",
    ZskyXe: "87cefa",
    ZUWay: "778899",
    ZUgYy: "778899",
    ZstAlXe: "b0c4de",
    ZLw: "ffffe0",
    lime: "ff00",
    limegYF: "32cd32",
    lRF: "faf0e6",
    magFta: "ff00ff",
    maPon: "800000",
    VaquamarRe: "66cdaa",
    VXe: "cd",
    VScEd: "ba55d3",
    VpurpN: "9370db",
    VsHgYF: "3cb371",
    VUXe: "7b68ee",
    VsprRggYF: "fa9a",
    VQe: "48d1cc",
    VviTetYd: "c71585",
    midnightXe: "191970",
    mRtcYam: "f5fffa",
    mistyPse: "ffe4e1",
    moccasR: "ffe4b5",
    navajowEte: "ffdead",
    navy: "80",
    Tdlace: "fdf5e6",
    Tive: "808000",
    TivedBb: "6b8e23",
    Sange: "ffa500",
    SangeYd: "ff4500",
    ScEd: "da70d6",
    pOegTMnPd: "eee8aa",
    pOegYF: "98fb98",
    pOeQe: "afeeee",
    pOeviTetYd: "db7093",
    papayawEp: "ffefd5",
    pHKpuff: "ffdab9",
    peru: "cd853f",
    pRk: "ffc0cb",
    plum: "dda0dd",
    powMrXe: "b0e0e6",
    purpN: "800080",
    YbeccapurpN: "663399",
    Yd: "ff0000",
    Psybrown: "bc8f8f",
    PyOXe: "4169e1",
    saddNbPwn: "8b4513",
    sOmon: "fa8072",
    sandybPwn: "f4a460",
    sHgYF: "2e8b57",
    sHshell: "fff5ee",
    siFna: "a0522d",
    silver: "c0c0c0",
    skyXe: "87ceeb",
    UXe: "6a5acd",
    UWay: "708090",
    UgYy: "708090",
    snow: "fffafa",
    sprRggYF: "ff7f",
    stAlXe: "4682b4",
    tan: "d2b48c",
    teO: "8080",
    tEstN: "d8bfd8",
    tomato: "ff6347",
    Qe: "40e0d0",
    viTet: "ee82ee",
    JHt: "f5deb3",
    wEte: "ffffff",
    wEtesmoke: "f5f5f5",
    Lw: "ffff00",
    LwgYF: "9acd32"
  };
  function unpack() {
    const unpacked = {};
    const keys = Object.keys(names$1);
    const tkeys = Object.keys(map);
    let i2, j2, k2, ok, nk;
    for (i2 = 0; i2 < keys.length; i2++) {
      ok = nk = keys[i2];
      for (j2 = 0; j2 < tkeys.length; j2++) {
        k2 = tkeys[j2];
        nk = nk.replace(k2, map[k2]);
      }
      k2 = parseInt(names$1[ok], 16);
      unpacked[nk] = [k2 >> 16 & 255, k2 >> 8 & 255, k2 & 255];
    }
    return unpacked;
  }
  var names;
  function nameParse(str) {
    if (!names) {
      names = unpack();
      names.transparent = [0, 0, 0, 0];
    }
    const a2 = names[str.toLowerCase()];
    return a2 && {
      r: a2[0],
      g: a2[1],
      b: a2[2],
      a: a2.length === 4 ? a2[3] : 255
    };
  }
  var RGB_RE = /^rgba?\(\s*([-+.\d]+)(%)?[\s,]+([-+.e\d]+)(%)?[\s,]+([-+.e\d]+)(%)?(?:[\s,/]+([-+.e\d]+)(%)?)?\s*\)$/;
  function rgbParse(str) {
    const m2 = RGB_RE.exec(str);
    let a2 = 255;
    let r2, g2, b2;
    if (!m2) {
      return;
    }
    if (m2[7] !== r2) {
      const v2 = +m2[7];
      a2 = m2[8] ? p2b(v2) : lim(v2 * 255, 0, 255);
    }
    r2 = +m2[1];
    g2 = +m2[3];
    b2 = +m2[5];
    r2 = 255 & (m2[2] ? p2b(r2) : lim(r2, 0, 255));
    g2 = 255 & (m2[4] ? p2b(g2) : lim(g2, 0, 255));
    b2 = 255 & (m2[6] ? p2b(b2) : lim(b2, 0, 255));
    return {
      r: r2,
      g: g2,
      b: b2,
      a: a2
    };
  }
  function rgbString(v2) {
    return v2 && (v2.a < 255 ? `rgba(${v2.r}, ${v2.g}, ${v2.b}, ${b2n(v2.a)})` : `rgb(${v2.r}, ${v2.g}, ${v2.b})`);
  }
  var to = (v2) => v2 <= 31308e-7 ? v2 * 12.92 : Math.pow(v2, 1 / 2.4) * 1.055 - 0.055;
  var from = (v2) => v2 <= 0.04045 ? v2 / 12.92 : Math.pow((v2 + 0.055) / 1.055, 2.4);
  function interpolate(rgb1, rgb2, t2) {
    const r2 = from(b2n(rgb1.r));
    const g2 = from(b2n(rgb1.g));
    const b2 = from(b2n(rgb1.b));
    return {
      r: n2b(to(r2 + t2 * (from(b2n(rgb2.r)) - r2))),
      g: n2b(to(g2 + t2 * (from(b2n(rgb2.g)) - g2))),
      b: n2b(to(b2 + t2 * (from(b2n(rgb2.b)) - b2))),
      a: rgb1.a + t2 * (rgb2.a - rgb1.a)
    };
  }
  function modHSL(v2, i2, ratio) {
    if (v2) {
      let tmp = rgb2hsl(v2);
      tmp[i2] = Math.max(0, Math.min(tmp[i2] + tmp[i2] * ratio, i2 === 0 ? 360 : 1));
      tmp = hsl2rgb(tmp);
      v2.r = tmp[0];
      v2.g = tmp[1];
      v2.b = tmp[2];
    }
  }
  function clone(v2, proto) {
    return v2 ? Object.assign(proto || {}, v2) : v2;
  }
  function fromObject(input) {
    var v2 = { r: 0, g: 0, b: 0, a: 255 };
    if (Array.isArray(input)) {
      if (input.length >= 3) {
        v2 = { r: input[0], g: input[1], b: input[2], a: 255 };
        if (input.length > 3) {
          v2.a = n2b(input[3]);
        }
      }
    } else {
      v2 = clone(input, { r: 0, g: 0, b: 0, a: 1 });
      v2.a = n2b(v2.a);
    }
    return v2;
  }
  function functionParse(str) {
    if (str.charAt(0) === "r") {
      return rgbParse(str);
    }
    return hueParse(str);
  }
  var Color = class _Color {
    constructor(input) {
      if (input instanceof _Color) {
        return input;
      }
      const type = typeof input;
      let v2;
      if (type === "object") {
        v2 = fromObject(input);
      } else if (type === "string") {
        v2 = hexParse(input) || nameParse(input) || functionParse(input);
      }
      this._rgb = v2;
      this._valid = !!v2;
    }
    get valid() {
      return this._valid;
    }
    get rgb() {
      var v2 = clone(this._rgb);
      if (v2) {
        v2.a = b2n(v2.a);
      }
      return v2;
    }
    set rgb(obj) {
      this._rgb = fromObject(obj);
    }
    rgbString() {
      return this._valid ? rgbString(this._rgb) : void 0;
    }
    hexString() {
      return this._valid ? hexString(this._rgb) : void 0;
    }
    hslString() {
      return this._valid ? hslString(this._rgb) : void 0;
    }
    mix(color2, weight) {
      if (color2) {
        const c1 = this.rgb;
        const c2 = color2.rgb;
        let w2;
        const p2 = weight === w2 ? 0.5 : weight;
        const w3 = 2 * p2 - 1;
        const a2 = c1.a - c2.a;
        const w1 = ((w3 * a2 === -1 ? w3 : (w3 + a2) / (1 + w3 * a2)) + 1) / 2;
        w2 = 1 - w1;
        c1.r = 255 & w1 * c1.r + w2 * c2.r + 0.5;
        c1.g = 255 & w1 * c1.g + w2 * c2.g + 0.5;
        c1.b = 255 & w1 * c1.b + w2 * c2.b + 0.5;
        c1.a = p2 * c1.a + (1 - p2) * c2.a;
        this.rgb = c1;
      }
      return this;
    }
    interpolate(color2, t2) {
      if (color2) {
        this._rgb = interpolate(this._rgb, color2._rgb, t2);
      }
      return this;
    }
    clone() {
      return new _Color(this.rgb);
    }
    alpha(a2) {
      this._rgb.a = n2b(a2);
      return this;
    }
    clearer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 - ratio;
      return this;
    }
    greyscale() {
      const rgb = this._rgb;
      const val = round(rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11);
      rgb.r = rgb.g = rgb.b = val;
      return this;
    }
    opaquer(ratio) {
      const rgb = this._rgb;
      rgb.a *= 1 + ratio;
      return this;
    }
    negate() {
      const v2 = this._rgb;
      v2.r = 255 - v2.r;
      v2.g = 255 - v2.g;
      v2.b = 255 - v2.b;
      return this;
    }
    lighten(ratio) {
      modHSL(this._rgb, 2, ratio);
      return this;
    }
    darken(ratio) {
      modHSL(this._rgb, 2, -ratio);
      return this;
    }
    saturate(ratio) {
      modHSL(this._rgb, 1, ratio);
      return this;
    }
    desaturate(ratio) {
      modHSL(this._rgb, 1, -ratio);
      return this;
    }
    rotate(deg) {
      rotate(this._rgb, deg);
      return this;
    }
  };

  // node_modules/chart.js/dist/chunks/helpers.segment.js
  function noop() {
  }
  var uid = /* @__PURE__ */ (() => {
    let id = 0;
    return () => id++;
  })();
  function isNullOrUndef(value) {
    return value === null || typeof value === "undefined";
  }
  function isArray(value) {
    if (Array.isArray && Array.isArray(value)) {
      return true;
    }
    const type = Object.prototype.toString.call(value);
    if (type.slice(0, 7) === "[object" && type.slice(-6) === "Array]") {
      return true;
    }
    return false;
  }
  function isObject(value) {
    return value !== null && Object.prototype.toString.call(value) === "[object Object]";
  }
  function isNumberFinite(value) {
    return (typeof value === "number" || value instanceof Number) && isFinite(+value);
  }
  function finiteOrDefault(value, defaultValue) {
    return isNumberFinite(value) ? value : defaultValue;
  }
  function valueOrDefault(value, defaultValue) {
    return typeof value === "undefined" ? defaultValue : value;
  }
  var toPercentage = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 : +value / dimension;
  var toDimension = (value, dimension) => typeof value === "string" && value.endsWith("%") ? parseFloat(value) / 100 * dimension : +value;
  function callback(fn, args, thisArg) {
    if (fn && typeof fn.call === "function") {
      return fn.apply(thisArg, args);
    }
  }
  function each(loopable, fn, thisArg, reverse) {
    let i2, len, keys;
    if (isArray(loopable)) {
      len = loopable.length;
      if (reverse) {
        for (i2 = len - 1; i2 >= 0; i2--) {
          fn.call(thisArg, loopable[i2], i2);
        }
      } else {
        for (i2 = 0; i2 < len; i2++) {
          fn.call(thisArg, loopable[i2], i2);
        }
      }
    } else if (isObject(loopable)) {
      keys = Object.keys(loopable);
      len = keys.length;
      for (i2 = 0; i2 < len; i2++) {
        fn.call(thisArg, loopable[keys[i2]], keys[i2]);
      }
    }
  }
  function _elementsEqual(a0, a1) {
    let i2, ilen, v0, v1;
    if (!a0 || !a1 || a0.length !== a1.length) {
      return false;
    }
    for (i2 = 0, ilen = a0.length; i2 < ilen; ++i2) {
      v0 = a0[i2];
      v1 = a1[i2];
      if (v0.datasetIndex !== v1.datasetIndex || v0.index !== v1.index) {
        return false;
      }
    }
    return true;
  }
  function clone2(source) {
    if (isArray(source)) {
      return source.map(clone2);
    }
    if (isObject(source)) {
      const target = /* @__PURE__ */ Object.create(null);
      const keys = Object.keys(source);
      const klen = keys.length;
      let k2 = 0;
      for (; k2 < klen; ++k2) {
        target[keys[k2]] = clone2(source[keys[k2]]);
      }
      return target;
    }
    return source;
  }
  function isValidKey(key) {
    return [
      "__proto__",
      "prototype",
      "constructor"
    ].indexOf(key) === -1;
  }
  function _merger(key, target, source, options) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
      merge(tval, sval, options);
    } else {
      target[key] = clone2(sval);
    }
  }
  function merge(target, source, options) {
    const sources = isArray(source) ? source : [
      source
    ];
    const ilen = sources.length;
    if (!isObject(target)) {
      return target;
    }
    options = options || {};
    const merger = options.merger || _merger;
    let current;
    for (let i2 = 0; i2 < ilen; ++i2) {
      current = sources[i2];
      if (!isObject(current)) {
        continue;
      }
      const keys = Object.keys(current);
      for (let k2 = 0, klen = keys.length; k2 < klen; ++k2) {
        merger(keys[k2], target, current, options);
      }
    }
    return target;
  }
  function mergeIf(target, source) {
    return merge(target, source, {
      merger: _mergerIf
    });
  }
  function _mergerIf(key, target, source) {
    if (!isValidKey(key)) {
      return;
    }
    const tval = target[key];
    const sval = source[key];
    if (isObject(tval) && isObject(sval)) {
      mergeIf(tval, sval);
    } else if (!Object.prototype.hasOwnProperty.call(target, key)) {
      target[key] = clone2(sval);
    }
  }
  var keyResolvers = {
    // Chart.helpers.core resolveObjectKey should resolve empty key to root object
    "": (v2) => v2,
    // default resolvers
    x: (o2) => o2.x,
    y: (o2) => o2.y
  };
  function _splitKey(key) {
    const parts = key.split(".");
    const keys = [];
    let tmp = "";
    for (const part of parts) {
      tmp += part;
      if (tmp.endsWith("\\")) {
        tmp = tmp.slice(0, -1) + ".";
      } else {
        keys.push(tmp);
        tmp = "";
      }
    }
    return keys;
  }
  function _getKeyResolver(key) {
    const keys = _splitKey(key);
    return (obj) => {
      for (const k2 of keys) {
        if (k2 === "") {
          break;
        }
        obj = obj && obj[k2];
      }
      return obj;
    };
  }
  function resolveObjectKey(obj, key) {
    const resolver = keyResolvers[key] || (keyResolvers[key] = _getKeyResolver(key));
    return resolver(obj);
  }
  function _capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  var defined = (value) => typeof value !== "undefined";
  var isFunction = (value) => typeof value === "function";
  var setsEqual = (a2, b2) => {
    if (a2.size !== b2.size) {
      return false;
    }
    for (const item of a2) {
      if (!b2.has(item)) {
        return false;
      }
    }
    return true;
  };
  function _isClickEvent(e2) {
    return e2.type === "mouseup" || e2.type === "click" || e2.type === "contextmenu";
  }
  var PI = Math.PI;
  var TAU = 2 * PI;
  var PITAU = TAU + PI;
  var INFINITY = Number.POSITIVE_INFINITY;
  var RAD_PER_DEG = PI / 180;
  var HALF_PI = PI / 2;
  var QUARTER_PI = PI / 4;
  var TWO_THIRDS_PI = PI * 2 / 3;
  var log10 = Math.log10;
  var sign = Math.sign;
  function almostEquals(x2, y2, epsilon) {
    return Math.abs(x2 - y2) < epsilon;
  }
  function niceNum(range) {
    const roundedRange = Math.round(range);
    range = almostEquals(range, roundedRange, range / 1e3) ? roundedRange : range;
    const niceRange = Math.pow(10, Math.floor(log10(range)));
    const fraction = range / niceRange;
    const niceFraction = fraction <= 1 ? 1 : fraction <= 2 ? 2 : fraction <= 5 ? 5 : 10;
    return niceFraction * niceRange;
  }
  function _factorize(value) {
    const result = [];
    const sqrt = Math.sqrt(value);
    let i2;
    for (i2 = 1; i2 < sqrt; i2++) {
      if (value % i2 === 0) {
        result.push(i2);
        result.push(value / i2);
      }
    }
    if (sqrt === (sqrt | 0)) {
      result.push(sqrt);
    }
    result.sort((a2, b2) => a2 - b2).pop();
    return result;
  }
  function isNumber(n2) {
    return !isNaN(parseFloat(n2)) && isFinite(n2);
  }
  function almostWhole(x2, epsilon) {
    const rounded = Math.round(x2);
    return rounded - epsilon <= x2 && rounded + epsilon >= x2;
  }
  function _setMinAndMaxByKey(array, target, property) {
    let i2, ilen, value;
    for (i2 = 0, ilen = array.length; i2 < ilen; i2++) {
      value = array[i2][property];
      if (!isNaN(value)) {
        target.min = Math.min(target.min, value);
        target.max = Math.max(target.max, value);
      }
    }
  }
  function toRadians(degrees) {
    return degrees * (PI / 180);
  }
  function toDegrees(radians) {
    return radians * (180 / PI);
  }
  function _decimalPlaces(x2) {
    if (!isNumberFinite(x2)) {
      return;
    }
    let e2 = 1;
    let p2 = 0;
    while (Math.round(x2 * e2) / e2 !== x2) {
      e2 *= 10;
      p2++;
    }
    return p2;
  }
  function getAngleFromPoint(centrePoint, anglePoint) {
    const distanceFromXCenter = anglePoint.x - centrePoint.x;
    const distanceFromYCenter = anglePoint.y - centrePoint.y;
    const radialDistanceFromCenter = Math.sqrt(distanceFromXCenter * distanceFromXCenter + distanceFromYCenter * distanceFromYCenter);
    let angle = Math.atan2(distanceFromYCenter, distanceFromXCenter);
    if (angle < -0.5 * PI) {
      angle += TAU;
    }
    return {
      angle,
      distance: radialDistanceFromCenter
    };
  }
  function distanceBetweenPoints(pt1, pt2) {
    return Math.sqrt(Math.pow(pt2.x - pt1.x, 2) + Math.pow(pt2.y - pt1.y, 2));
  }
  function _angleDiff(a2, b2) {
    return (a2 - b2 + PITAU) % TAU - PI;
  }
  function _normalizeAngle(a2) {
    return (a2 % TAU + TAU) % TAU;
  }
  function _angleBetween(angle, start, end, sameAngleIsFullCircle) {
    const a2 = _normalizeAngle(angle);
    const s2 = _normalizeAngle(start);
    const e2 = _normalizeAngle(end);
    const angleToStart = _normalizeAngle(s2 - a2);
    const angleToEnd = _normalizeAngle(e2 - a2);
    const startToAngle = _normalizeAngle(a2 - s2);
    const endToAngle = _normalizeAngle(a2 - e2);
    return a2 === s2 || a2 === e2 || sameAngleIsFullCircle && s2 === e2 || angleToStart > angleToEnd && startToAngle < endToAngle;
  }
  function _limitValue(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }
  function _int16Range(value) {
    return _limitValue(value, -32768, 32767);
  }
  function _isBetween(value, start, end, epsilon = 1e-6) {
    return value >= Math.min(start, end) - epsilon && value <= Math.max(start, end) + epsilon;
  }
  function _lookup(table, value, cmp) {
    cmp = cmp || ((index2) => table[index2] < value);
    let hi = table.length - 1;
    let lo = 0;
    let mid;
    while (hi - lo > 1) {
      mid = lo + hi >> 1;
      if (cmp(mid)) {
        lo = mid;
      } else {
        hi = mid;
      }
    }
    return {
      lo,
      hi
    };
  }
  var _lookupByKey = (table, key, value, last) => _lookup(table, value, last ? (index2) => {
    const ti = table[index2][key];
    return ti < value || ti === value && table[index2 + 1][key] === value;
  } : (index2) => table[index2][key] < value);
  var _rlookupByKey = (table, key, value) => _lookup(table, value, (index2) => table[index2][key] >= value);
  function _filterBetween(values, min, max) {
    let start = 0;
    let end = values.length;
    while (start < end && values[start] < min) {
      start++;
    }
    while (end > start && values[end - 1] > max) {
      end--;
    }
    return start > 0 || end < values.length ? values.slice(start, end) : values;
  }
  var arrayEvents = [
    "push",
    "pop",
    "shift",
    "splice",
    "unshift"
  ];
  function listenArrayEvents(array, listener) {
    if (array._chartjs) {
      array._chartjs.listeners.push(listener);
      return;
    }
    Object.defineProperty(array, "_chartjs", {
      configurable: true,
      enumerable: false,
      value: {
        listeners: [
          listener
        ]
      }
    });
    arrayEvents.forEach((key) => {
      const method = "_onData" + _capitalize(key);
      const base = array[key];
      Object.defineProperty(array, key, {
        configurable: true,
        enumerable: false,
        value(...args) {
          const res = base.apply(this, args);
          array._chartjs.listeners.forEach((object) => {
            if (typeof object[method] === "function") {
              object[method](...args);
            }
          });
          return res;
        }
      });
    });
  }
  function unlistenArrayEvents(array, listener) {
    const stub = array._chartjs;
    if (!stub) {
      return;
    }
    const listeners = stub.listeners;
    const index2 = listeners.indexOf(listener);
    if (index2 !== -1) {
      listeners.splice(index2, 1);
    }
    if (listeners.length > 0) {
      return;
    }
    arrayEvents.forEach((key) => {
      delete array[key];
    });
    delete array._chartjs;
  }
  function _arrayUnique(items) {
    const set2 = new Set(items);
    if (set2.size === items.length) {
      return items;
    }
    return Array.from(set2);
  }
  var requestAnimFrame = function() {
    if (typeof window === "undefined") {
      return function(callback2) {
        return callback2();
      };
    }
    return window.requestAnimationFrame;
  }();
  function throttled(fn, thisArg) {
    let argsToUse = [];
    let ticking = false;
    return function(...args) {
      argsToUse = args;
      if (!ticking) {
        ticking = true;
        requestAnimFrame.call(window, () => {
          ticking = false;
          fn.apply(thisArg, argsToUse);
        });
      }
    };
  }
  function debounce(fn, delay) {
    let timeout;
    return function(...args) {
      if (delay) {
        clearTimeout(timeout);
        timeout = setTimeout(fn, delay, args);
      } else {
        fn.apply(this, args);
      }
      return delay;
    };
  }
  var _toLeftRightCenter = (align) => align === "start" ? "left" : align === "end" ? "right" : "center";
  var _alignStartEnd = (align, start, end) => align === "start" ? start : align === "end" ? end : (start + end) / 2;
  var _textX = (align, left, right, rtl) => {
    const check = rtl ? "left" : "right";
    return align === check ? right : align === "center" ? (left + right) / 2 : left;
  };
  function _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled) {
    const pointCount = points.length;
    let start = 0;
    let count = pointCount;
    if (meta._sorted) {
      const { iScale, _parsed } = meta;
      const axis = iScale.axis;
      const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
      if (minDefined) {
        start = _limitValue(Math.min(
          // @ts-expect-error Need to type _parsed
          _lookupByKey(_parsed, axis, min).lo,
          // @ts-expect-error Need to fix types on _lookupByKey
          animationsDisabled ? pointCount : _lookupByKey(points, axis, iScale.getPixelForValue(min)).lo
        ), 0, pointCount - 1);
      }
      if (maxDefined) {
        count = _limitValue(Math.max(
          // @ts-expect-error Need to type _parsed
          _lookupByKey(_parsed, iScale.axis, max, true).hi + 1,
          // @ts-expect-error Need to fix types on _lookupByKey
          animationsDisabled ? 0 : _lookupByKey(points, axis, iScale.getPixelForValue(max), true).hi + 1
        ), start, pointCount) - start;
      } else {
        count = pointCount - start;
      }
    }
    return {
      start,
      count
    };
  }
  function _scaleRangesChanged(meta) {
    const { xScale, yScale, _scaleRanges } = meta;
    const newRanges = {
      xmin: xScale.min,
      xmax: xScale.max,
      ymin: yScale.min,
      ymax: yScale.max
    };
    if (!_scaleRanges) {
      meta._scaleRanges = newRanges;
      return true;
    }
    const changed = _scaleRanges.xmin !== xScale.min || _scaleRanges.xmax !== xScale.max || _scaleRanges.ymin !== yScale.min || _scaleRanges.ymax !== yScale.max;
    Object.assign(_scaleRanges, newRanges);
    return changed;
  }
  var atEdge = (t2) => t2 === 0 || t2 === 1;
  var elasticIn = (t2, s2, p2) => -(Math.pow(2, 10 * (t2 -= 1)) * Math.sin((t2 - s2) * TAU / p2));
  var elasticOut = (t2, s2, p2) => Math.pow(2, -10 * t2) * Math.sin((t2 - s2) * TAU / p2) + 1;
  var effects = {
    linear: (t2) => t2,
    easeInQuad: (t2) => t2 * t2,
    easeOutQuad: (t2) => -t2 * (t2 - 2),
    easeInOutQuad: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 : -0.5 * (--t2 * (t2 - 2) - 1),
    easeInCubic: (t2) => t2 * t2 * t2,
    easeOutCubic: (t2) => (t2 -= 1) * t2 * t2 + 1,
    easeInOutCubic: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 * t2 : 0.5 * ((t2 -= 2) * t2 * t2 + 2),
    easeInQuart: (t2) => t2 * t2 * t2 * t2,
    easeOutQuart: (t2) => -((t2 -= 1) * t2 * t2 * t2 - 1),
    easeInOutQuart: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 * t2 * t2 : -0.5 * ((t2 -= 2) * t2 * t2 * t2 - 2),
    easeInQuint: (t2) => t2 * t2 * t2 * t2 * t2,
    easeOutQuint: (t2) => (t2 -= 1) * t2 * t2 * t2 * t2 + 1,
    easeInOutQuint: (t2) => (t2 /= 0.5) < 1 ? 0.5 * t2 * t2 * t2 * t2 * t2 : 0.5 * ((t2 -= 2) * t2 * t2 * t2 * t2 + 2),
    easeInSine: (t2) => -Math.cos(t2 * HALF_PI) + 1,
    easeOutSine: (t2) => Math.sin(t2 * HALF_PI),
    easeInOutSine: (t2) => -0.5 * (Math.cos(PI * t2) - 1),
    easeInExpo: (t2) => t2 === 0 ? 0 : Math.pow(2, 10 * (t2 - 1)),
    easeOutExpo: (t2) => t2 === 1 ? 1 : -Math.pow(2, -10 * t2) + 1,
    easeInOutExpo: (t2) => atEdge(t2) ? t2 : t2 < 0.5 ? 0.5 * Math.pow(2, 10 * (t2 * 2 - 1)) : 0.5 * (-Math.pow(2, -10 * (t2 * 2 - 1)) + 2),
    easeInCirc: (t2) => t2 >= 1 ? t2 : -(Math.sqrt(1 - t2 * t2) - 1),
    easeOutCirc: (t2) => Math.sqrt(1 - (t2 -= 1) * t2),
    easeInOutCirc: (t2) => (t2 /= 0.5) < 1 ? -0.5 * (Math.sqrt(1 - t2 * t2) - 1) : 0.5 * (Math.sqrt(1 - (t2 -= 2) * t2) + 1),
    easeInElastic: (t2) => atEdge(t2) ? t2 : elasticIn(t2, 0.075, 0.3),
    easeOutElastic: (t2) => atEdge(t2) ? t2 : elasticOut(t2, 0.075, 0.3),
    easeInOutElastic(t2) {
      const s2 = 0.1125;
      const p2 = 0.45;
      return atEdge(t2) ? t2 : t2 < 0.5 ? 0.5 * elasticIn(t2 * 2, s2, p2) : 0.5 + 0.5 * elasticOut(t2 * 2 - 1, s2, p2);
    },
    easeInBack(t2) {
      const s2 = 1.70158;
      return t2 * t2 * ((s2 + 1) * t2 - s2);
    },
    easeOutBack(t2) {
      const s2 = 1.70158;
      return (t2 -= 1) * t2 * ((s2 + 1) * t2 + s2) + 1;
    },
    easeInOutBack(t2) {
      let s2 = 1.70158;
      if ((t2 /= 0.5) < 1) {
        return 0.5 * (t2 * t2 * (((s2 *= 1.525) + 1) * t2 - s2));
      }
      return 0.5 * ((t2 -= 2) * t2 * (((s2 *= 1.525) + 1) * t2 + s2) + 2);
    },
    easeInBounce: (t2) => 1 - effects.easeOutBounce(1 - t2),
    easeOutBounce(t2) {
      const m2 = 7.5625;
      const d2 = 2.75;
      if (t2 < 1 / d2) {
        return m2 * t2 * t2;
      }
      if (t2 < 2 / d2) {
        return m2 * (t2 -= 1.5 / d2) * t2 + 0.75;
      }
      if (t2 < 2.5 / d2) {
        return m2 * (t2 -= 2.25 / d2) * t2 + 0.9375;
      }
      return m2 * (t2 -= 2.625 / d2) * t2 + 0.984375;
    },
    easeInOutBounce: (t2) => t2 < 0.5 ? effects.easeInBounce(t2 * 2) * 0.5 : effects.easeOutBounce(t2 * 2 - 1) * 0.5 + 0.5
  };
  function isPatternOrGradient(value) {
    if (value && typeof value === "object") {
      const type = value.toString();
      return type === "[object CanvasPattern]" || type === "[object CanvasGradient]";
    }
    return false;
  }
  function color(value) {
    return isPatternOrGradient(value) ? value : new Color(value);
  }
  function getHoverColor(value) {
    return isPatternOrGradient(value) ? value : new Color(value).saturate(0.5).darken(0.1).hexString();
  }
  var numbers = [
    "x",
    "y",
    "borderWidth",
    "radius",
    "tension"
  ];
  var colors = [
    "color",
    "borderColor",
    "backgroundColor"
  ];
  function applyAnimationsDefaults(defaults2) {
    defaults2.set("animation", {
      delay: void 0,
      duration: 1e3,
      easing: "easeOutQuart",
      fn: void 0,
      from: void 0,
      loop: void 0,
      to: void 0,
      type: void 0
    });
    defaults2.describe("animation", {
      _fallback: false,
      _indexable: false,
      _scriptable: (name) => name !== "onProgress" && name !== "onComplete" && name !== "fn"
    });
    defaults2.set("animations", {
      colors: {
        type: "color",
        properties: colors
      },
      numbers: {
        type: "number",
        properties: numbers
      }
    });
    defaults2.describe("animations", {
      _fallback: "animation"
    });
    defaults2.set("transitions", {
      active: {
        animation: {
          duration: 400
        }
      },
      resize: {
        animation: {
          duration: 0
        }
      },
      show: {
        animations: {
          colors: {
            from: "transparent"
          },
          visible: {
            type: "boolean",
            duration: 0
          }
        }
      },
      hide: {
        animations: {
          colors: {
            to: "transparent"
          },
          visible: {
            type: "boolean",
            easing: "linear",
            fn: (v2) => v2 | 0
          }
        }
      }
    });
  }
  function applyLayoutsDefaults(defaults2) {
    defaults2.set("layout", {
      autoPadding: true,
      padding: {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0
      }
    });
  }
  var intlCache = /* @__PURE__ */ new Map();
  function getNumberFormat(locale, options) {
    options = options || {};
    const cacheKey = locale + JSON.stringify(options);
    let formatter = intlCache.get(cacheKey);
    if (!formatter) {
      formatter = new Intl.NumberFormat(locale, options);
      intlCache.set(cacheKey, formatter);
    }
    return formatter;
  }
  function formatNumber(num, locale, options) {
    return getNumberFormat(locale, options).format(num);
  }
  var formatters = {
    values(value) {
      return isArray(value) ? value : "" + value;
    },
    numeric(tickValue, index2, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const locale = this.chart.options.locale;
      let notation;
      let delta = tickValue;
      if (ticks.length > 1) {
        const maxTick = Math.max(Math.abs(ticks[0].value), Math.abs(ticks[ticks.length - 1].value));
        if (maxTick < 1e-4 || maxTick > 1e15) {
          notation = "scientific";
        }
        delta = calculateDelta(tickValue, ticks);
      }
      const logDelta = log10(Math.abs(delta));
      const numDecimal = isNaN(logDelta) ? 1 : Math.max(Math.min(-1 * Math.floor(logDelta), 20), 0);
      const options = {
        notation,
        minimumFractionDigits: numDecimal,
        maximumFractionDigits: numDecimal
      };
      Object.assign(options, this.options.ticks.format);
      return formatNumber(tickValue, locale, options);
    },
    logarithmic(tickValue, index2, ticks) {
      if (tickValue === 0) {
        return "0";
      }
      const remain = ticks[index2].significand || tickValue / Math.pow(10, Math.floor(log10(tickValue)));
      if ([
        1,
        2,
        3,
        5,
        10,
        15
      ].includes(remain) || index2 > 0.8 * ticks.length) {
        return formatters.numeric.call(this, tickValue, index2, ticks);
      }
      return "";
    }
  };
  function calculateDelta(tickValue, ticks) {
    let delta = ticks.length > 3 ? ticks[2].value - ticks[1].value : ticks[1].value - ticks[0].value;
    if (Math.abs(delta) >= 1 && tickValue !== Math.floor(tickValue)) {
      delta = tickValue - Math.floor(tickValue);
    }
    return delta;
  }
  var Ticks = {
    formatters
  };
  function applyScaleDefaults(defaults2) {
    defaults2.set("scale", {
      display: true,
      offset: false,
      reverse: false,
      beginAtZero: false,
      bounds: "ticks",
      clip: true,
      grace: 0,
      grid: {
        display: true,
        lineWidth: 1,
        drawOnChartArea: true,
        drawTicks: true,
        tickLength: 8,
        tickWidth: (_ctx, options) => options.lineWidth,
        tickColor: (_ctx, options) => options.color,
        offset: false
      },
      border: {
        display: true,
        dash: [],
        dashOffset: 0,
        width: 1
      },
      title: {
        display: false,
        text: "",
        padding: {
          top: 4,
          bottom: 4
        }
      },
      ticks: {
        minRotation: 0,
        maxRotation: 50,
        mirror: false,
        textStrokeWidth: 0,
        textStrokeColor: "",
        padding: 3,
        display: true,
        autoSkip: true,
        autoSkipPadding: 3,
        labelOffset: 0,
        callback: Ticks.formatters.values,
        minor: {},
        major: {},
        align: "center",
        crossAlign: "near",
        showLabelBackdrop: false,
        backdropColor: "rgba(255, 255, 255, 0.75)",
        backdropPadding: 2
      }
    });
    defaults2.route("scale.ticks", "color", "", "color");
    defaults2.route("scale.grid", "color", "", "borderColor");
    defaults2.route("scale.border", "color", "", "borderColor");
    defaults2.route("scale.title", "color", "", "color");
    defaults2.describe("scale", {
      _fallback: false,
      _scriptable: (name) => !name.startsWith("before") && !name.startsWith("after") && name !== "callback" && name !== "parser",
      _indexable: (name) => name !== "borderDash" && name !== "tickBorderDash" && name !== "dash"
    });
    defaults2.describe("scales", {
      _fallback: "scale"
    });
    defaults2.describe("scale.ticks", {
      _scriptable: (name) => name !== "backdropPadding" && name !== "callback",
      _indexable: (name) => name !== "backdropPadding"
    });
  }
  var overrides = /* @__PURE__ */ Object.create(null);
  var descriptors = /* @__PURE__ */ Object.create(null);
  function getScope$1(node, key) {
    if (!key) {
      return node;
    }
    const keys = key.split(".");
    for (let i2 = 0, n2 = keys.length; i2 < n2; ++i2) {
      const k2 = keys[i2];
      node = node[k2] || (node[k2] = /* @__PURE__ */ Object.create(null));
    }
    return node;
  }
  function set(root, scope, values) {
    if (typeof scope === "string") {
      return merge(getScope$1(root, scope), values);
    }
    return merge(getScope$1(root, ""), scope);
  }
  var Defaults = class {
    constructor(_descriptors2, _appliers) {
      this.animation = void 0;
      this.backgroundColor = "rgba(0,0,0,0.1)";
      this.borderColor = "rgba(0,0,0,0.1)";
      this.color = "#666";
      this.datasets = {};
      this.devicePixelRatio = (context) => context.chart.platform.getDevicePixelRatio();
      this.elements = {};
      this.events = [
        "mousemove",
        "mouseout",
        "click",
        "touchstart",
        "touchmove"
      ];
      this.font = {
        family: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        size: 12,
        style: "normal",
        lineHeight: 1.2,
        weight: null
      };
      this.hover = {};
      this.hoverBackgroundColor = (ctx, options) => getHoverColor(options.backgroundColor);
      this.hoverBorderColor = (ctx, options) => getHoverColor(options.borderColor);
      this.hoverColor = (ctx, options) => getHoverColor(options.color);
      this.indexAxis = "x";
      this.interaction = {
        mode: "nearest",
        intersect: true,
        includeInvisible: false
      };
      this.maintainAspectRatio = true;
      this.onHover = null;
      this.onClick = null;
      this.parsing = true;
      this.plugins = {};
      this.responsive = true;
      this.scale = void 0;
      this.scales = {};
      this.showLine = true;
      this.drawActiveElementsOnTop = true;
      this.describe(_descriptors2);
      this.apply(_appliers);
    }
    set(scope, values) {
      return set(this, scope, values);
    }
    get(scope) {
      return getScope$1(this, scope);
    }
    describe(scope, values) {
      return set(descriptors, scope, values);
    }
    override(scope, values) {
      return set(overrides, scope, values);
    }
    route(scope, name, targetScope, targetName) {
      const scopeObject = getScope$1(this, scope);
      const targetScopeObject = getScope$1(this, targetScope);
      const privateName = "_" + name;
      Object.defineProperties(scopeObject, {
        [privateName]: {
          value: scopeObject[name],
          writable: true
        },
        [name]: {
          enumerable: true,
          get() {
            const local = this[privateName];
            const target = targetScopeObject[targetName];
            if (isObject(local)) {
              return Object.assign({}, target, local);
            }
            return valueOrDefault(local, target);
          },
          set(value) {
            this[privateName] = value;
          }
        }
      });
    }
    apply(appliers) {
      appliers.forEach((apply) => apply(this));
    }
  };
  var defaults = /* @__PURE__ */ new Defaults({
    _scriptable: (name) => !name.startsWith("on"),
    _indexable: (name) => name !== "events",
    hover: {
      _fallback: "interaction"
    },
    interaction: {
      _scriptable: false,
      _indexable: false
    }
  }, [
    applyAnimationsDefaults,
    applyLayoutsDefaults,
    applyScaleDefaults
  ]);
  function toFontString(font) {
    if (!font || isNullOrUndef(font.size) || isNullOrUndef(font.family)) {
      return null;
    }
    return (font.style ? font.style + " " : "") + (font.weight ? font.weight + " " : "") + font.size + "px " + font.family;
  }
  function _measureText(ctx, data, gc, longest, string) {
    let textWidth = data[string];
    if (!textWidth) {
      textWidth = data[string] = ctx.measureText(string).width;
      gc.push(string);
    }
    if (textWidth > longest) {
      longest = textWidth;
    }
    return longest;
  }
  function _longestText(ctx, font, arrayOfThings, cache) {
    cache = cache || {};
    let data = cache.data = cache.data || {};
    let gc = cache.garbageCollect = cache.garbageCollect || [];
    if (cache.font !== font) {
      data = cache.data = {};
      gc = cache.garbageCollect = [];
      cache.font = font;
    }
    ctx.save();
    ctx.font = font;
    let longest = 0;
    const ilen = arrayOfThings.length;
    let i2, j2, jlen, thing, nestedThing;
    for (i2 = 0; i2 < ilen; i2++) {
      thing = arrayOfThings[i2];
      if (thing !== void 0 && thing !== null && !isArray(thing)) {
        longest = _measureText(ctx, data, gc, longest, thing);
      } else if (isArray(thing)) {
        for (j2 = 0, jlen = thing.length; j2 < jlen; j2++) {
          nestedThing = thing[j2];
          if (nestedThing !== void 0 && nestedThing !== null && !isArray(nestedThing)) {
            longest = _measureText(ctx, data, gc, longest, nestedThing);
          }
        }
      }
    }
    ctx.restore();
    const gcLen = gc.length / 2;
    if (gcLen > arrayOfThings.length) {
      for (i2 = 0; i2 < gcLen; i2++) {
        delete data[gc[i2]];
      }
      gc.splice(0, gcLen);
    }
    return longest;
  }
  function _alignPixel(chart, pixel, width) {
    const devicePixelRatio = chart.currentDevicePixelRatio;
    const halfWidth = width !== 0 ? Math.max(width / 2, 0.5) : 0;
    return Math.round((pixel - halfWidth) * devicePixelRatio) / devicePixelRatio + halfWidth;
  }
  function clearCanvas(canvas, ctx) {
    ctx = ctx || canvas.getContext("2d");
    ctx.save();
    ctx.resetTransform();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.restore();
  }
  function drawPoint(ctx, options, x2, y2) {
    drawPointLegend(ctx, options, x2, y2, null);
  }
  function drawPointLegend(ctx, options, x2, y2, w2) {
    let type, xOffset, yOffset, size, cornerRadius, width, xOffsetW, yOffsetW;
    const style = options.pointStyle;
    const rotation = options.rotation;
    const radius = options.radius;
    let rad = (rotation || 0) * RAD_PER_DEG;
    if (style && typeof style === "object") {
      type = style.toString();
      if (type === "[object HTMLImageElement]" || type === "[object HTMLCanvasElement]") {
        ctx.save();
        ctx.translate(x2, y2);
        ctx.rotate(rad);
        ctx.drawImage(style, -style.width / 2, -style.height / 2, style.width, style.height);
        ctx.restore();
        return;
      }
    }
    if (isNaN(radius) || radius <= 0) {
      return;
    }
    ctx.beginPath();
    switch (style) {
      default:
        if (w2) {
          ctx.ellipse(x2, y2, w2 / 2, radius, 0, 0, TAU);
        } else {
          ctx.arc(x2, y2, radius, 0, TAU);
        }
        ctx.closePath();
        break;
      case "triangle":
        width = w2 ? w2 / 2 : radius;
        ctx.moveTo(x2 + Math.sin(rad) * width, y2 - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x2 + Math.sin(rad) * width, y2 - Math.cos(rad) * radius);
        rad += TWO_THIRDS_PI;
        ctx.lineTo(x2 + Math.sin(rad) * width, y2 - Math.cos(rad) * radius);
        ctx.closePath();
        break;
      case "rectRounded":
        cornerRadius = radius * 0.516;
        size = radius - cornerRadius;
        xOffset = Math.cos(rad + QUARTER_PI) * size;
        xOffsetW = Math.cos(rad + QUARTER_PI) * (w2 ? w2 / 2 - cornerRadius : size);
        yOffset = Math.sin(rad + QUARTER_PI) * size;
        yOffsetW = Math.sin(rad + QUARTER_PI) * (w2 ? w2 / 2 - cornerRadius : size);
        ctx.arc(x2 - xOffsetW, y2 - yOffset, cornerRadius, rad - PI, rad - HALF_PI);
        ctx.arc(x2 + yOffsetW, y2 - xOffset, cornerRadius, rad - HALF_PI, rad);
        ctx.arc(x2 + xOffsetW, y2 + yOffset, cornerRadius, rad, rad + HALF_PI);
        ctx.arc(x2 - yOffsetW, y2 + xOffset, cornerRadius, rad + HALF_PI, rad + PI);
        ctx.closePath();
        break;
      case "rect":
        if (!rotation) {
          size = Math.SQRT1_2 * radius;
          width = w2 ? w2 / 2 : size;
          ctx.rect(x2 - width, y2 - size, 2 * width, 2 * size);
          break;
        }
        rad += QUARTER_PI;
      case "rectRot":
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        ctx.closePath();
        break;
      case "crossRot":
        rad += QUARTER_PI;
      case "cross":
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.moveTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        break;
      case "star":
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.moveTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        rad += QUARTER_PI;
        xOffsetW = Math.cos(rad) * (w2 ? w2 / 2 : radius);
        xOffset = Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        yOffsetW = Math.sin(rad) * (w2 ? w2 / 2 : radius);
        ctx.moveTo(x2 - xOffsetW, y2 - yOffset);
        ctx.lineTo(x2 + xOffsetW, y2 + yOffset);
        ctx.moveTo(x2 + yOffsetW, y2 - xOffset);
        ctx.lineTo(x2 - yOffsetW, y2 + xOffset);
        break;
      case "line":
        xOffset = w2 ? w2 / 2 : Math.cos(rad) * radius;
        yOffset = Math.sin(rad) * radius;
        ctx.moveTo(x2 - xOffset, y2 - yOffset);
        ctx.lineTo(x2 + xOffset, y2 + yOffset);
        break;
      case "dash":
        ctx.moveTo(x2, y2);
        ctx.lineTo(x2 + Math.cos(rad) * (w2 ? w2 / 2 : radius), y2 + Math.sin(rad) * radius);
        break;
      case false:
        ctx.closePath();
        break;
    }
    ctx.fill();
    if (options.borderWidth > 0) {
      ctx.stroke();
    }
  }
  function _isPointInArea(point, area, margin) {
    margin = margin || 0.5;
    return !area || point && point.x > area.left - margin && point.x < area.right + margin && point.y > area.top - margin && point.y < area.bottom + margin;
  }
  function clipArea(ctx, area) {
    ctx.save();
    ctx.beginPath();
    ctx.rect(area.left, area.top, area.right - area.left, area.bottom - area.top);
    ctx.clip();
  }
  function unclipArea(ctx) {
    ctx.restore();
  }
  function _steppedLineTo(ctx, previous, target, flip, mode) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    if (mode === "middle") {
      const midpoint = (previous.x + target.x) / 2;
      ctx.lineTo(midpoint, previous.y);
      ctx.lineTo(midpoint, target.y);
    } else if (mode === "after" !== !!flip) {
      ctx.lineTo(previous.x, target.y);
    } else {
      ctx.lineTo(target.x, previous.y);
    }
    ctx.lineTo(target.x, target.y);
  }
  function _bezierCurveTo(ctx, previous, target, flip) {
    if (!previous) {
      return ctx.lineTo(target.x, target.y);
    }
    ctx.bezierCurveTo(flip ? previous.cp1x : previous.cp2x, flip ? previous.cp1y : previous.cp2y, flip ? target.cp2x : target.cp1x, flip ? target.cp2y : target.cp1y, target.x, target.y);
  }
  function setRenderOpts(ctx, opts) {
    if (opts.translation) {
      ctx.translate(opts.translation[0], opts.translation[1]);
    }
    if (!isNullOrUndef(opts.rotation)) {
      ctx.rotate(opts.rotation);
    }
    if (opts.color) {
      ctx.fillStyle = opts.color;
    }
    if (opts.textAlign) {
      ctx.textAlign = opts.textAlign;
    }
    if (opts.textBaseline) {
      ctx.textBaseline = opts.textBaseline;
    }
  }
  function decorateText(ctx, x2, y2, line, opts) {
    if (opts.strikethrough || opts.underline) {
      const metrics = ctx.measureText(line);
      const left = x2 - metrics.actualBoundingBoxLeft;
      const right = x2 + metrics.actualBoundingBoxRight;
      const top = y2 - metrics.actualBoundingBoxAscent;
      const bottom = y2 + metrics.actualBoundingBoxDescent;
      const yDecoration = opts.strikethrough ? (top + bottom) / 2 : bottom;
      ctx.strokeStyle = ctx.fillStyle;
      ctx.beginPath();
      ctx.lineWidth = opts.decorationWidth || 2;
      ctx.moveTo(left, yDecoration);
      ctx.lineTo(right, yDecoration);
      ctx.stroke();
    }
  }
  function drawBackdrop(ctx, opts) {
    const oldColor = ctx.fillStyle;
    ctx.fillStyle = opts.color;
    ctx.fillRect(opts.left, opts.top, opts.width, opts.height);
    ctx.fillStyle = oldColor;
  }
  function renderText(ctx, text, x2, y2, font, opts = {}) {
    const lines = isArray(text) ? text : [
      text
    ];
    const stroke = opts.strokeWidth > 0 && opts.strokeColor !== "";
    let i2, line;
    ctx.save();
    ctx.font = font.string;
    setRenderOpts(ctx, opts);
    for (i2 = 0; i2 < lines.length; ++i2) {
      line = lines[i2];
      if (opts.backdrop) {
        drawBackdrop(ctx, opts.backdrop);
      }
      if (stroke) {
        if (opts.strokeColor) {
          ctx.strokeStyle = opts.strokeColor;
        }
        if (!isNullOrUndef(opts.strokeWidth)) {
          ctx.lineWidth = opts.strokeWidth;
        }
        ctx.strokeText(line, x2, y2, opts.maxWidth);
      }
      ctx.fillText(line, x2, y2, opts.maxWidth);
      decorateText(ctx, x2, y2, line, opts);
      y2 += Number(font.lineHeight);
    }
    ctx.restore();
  }
  function addRoundedRectPath(ctx, rect) {
    const { x: x2, y: y2, w: w2, h: h3, radius } = rect;
    ctx.arc(x2 + radius.topLeft, y2 + radius.topLeft, radius.topLeft, 1.5 * PI, PI, true);
    ctx.lineTo(x2, y2 + h3 - radius.bottomLeft);
    ctx.arc(x2 + radius.bottomLeft, y2 + h3 - radius.bottomLeft, radius.bottomLeft, PI, HALF_PI, true);
    ctx.lineTo(x2 + w2 - radius.bottomRight, y2 + h3);
    ctx.arc(x2 + w2 - radius.bottomRight, y2 + h3 - radius.bottomRight, radius.bottomRight, HALF_PI, 0, true);
    ctx.lineTo(x2 + w2, y2 + radius.topRight);
    ctx.arc(x2 + w2 - radius.topRight, y2 + radius.topRight, radius.topRight, 0, -HALF_PI, true);
    ctx.lineTo(x2 + radius.topLeft, y2);
  }
  var LINE_HEIGHT = /^(normal|(\d+(?:\.\d+)?)(px|em|%)?)$/;
  var FONT_STYLE = /^(normal|italic|initial|inherit|unset|(oblique( -?[0-9]?[0-9]deg)?))$/;
  function toLineHeight(value, size) {
    const matches = ("" + value).match(LINE_HEIGHT);
    if (!matches || matches[1] === "normal") {
      return size * 1.2;
    }
    value = +matches[2];
    switch (matches[3]) {
      case "px":
        return value;
      case "%":
        value /= 100;
        break;
    }
    return size * value;
  }
  var numberOrZero = (v2) => +v2 || 0;
  function _readValueToProps(value, props) {
    const ret = {};
    const objProps = isObject(props);
    const keys = objProps ? Object.keys(props) : props;
    const read = isObject(value) ? objProps ? (prop) => valueOrDefault(value[prop], value[props[prop]]) : (prop) => value[prop] : () => value;
    for (const prop of keys) {
      ret[prop] = numberOrZero(read(prop));
    }
    return ret;
  }
  function toTRBL(value) {
    return _readValueToProps(value, {
      top: "y",
      right: "x",
      bottom: "y",
      left: "x"
    });
  }
  function toTRBLCorners(value) {
    return _readValueToProps(value, [
      "topLeft",
      "topRight",
      "bottomLeft",
      "bottomRight"
    ]);
  }
  function toPadding(value) {
    const obj = toTRBL(value);
    obj.width = obj.left + obj.right;
    obj.height = obj.top + obj.bottom;
    return obj;
  }
  function toFont(options, fallback) {
    options = options || {};
    fallback = fallback || defaults.font;
    let size = valueOrDefault(options.size, fallback.size);
    if (typeof size === "string") {
      size = parseInt(size, 10);
    }
    let style = valueOrDefault(options.style, fallback.style);
    if (style && !("" + style).match(FONT_STYLE)) {
      console.warn('Invalid font style specified: "' + style + '"');
      style = void 0;
    }
    const font = {
      family: valueOrDefault(options.family, fallback.family),
      lineHeight: toLineHeight(valueOrDefault(options.lineHeight, fallback.lineHeight), size),
      size,
      style,
      weight: valueOrDefault(options.weight, fallback.weight),
      string: ""
    };
    font.string = toFontString(font);
    return font;
  }
  function resolve(inputs, context, index2, info) {
    let cacheable = true;
    let i2, ilen, value;
    for (i2 = 0, ilen = inputs.length; i2 < ilen; ++i2) {
      value = inputs[i2];
      if (value === void 0) {
        continue;
      }
      if (context !== void 0 && typeof value === "function") {
        value = value(context);
        cacheable = false;
      }
      if (index2 !== void 0 && isArray(value)) {
        value = value[index2 % value.length];
        cacheable = false;
      }
      if (value !== void 0) {
        if (info && !cacheable) {
          info.cacheable = false;
        }
        return value;
      }
    }
  }
  function _addGrace(minmax, grace, beginAtZero) {
    const { min, max } = minmax;
    const change = toDimension(grace, (max - min) / 2);
    const keepZero = (value, add) => beginAtZero && value === 0 ? 0 : value + add;
    return {
      min: keepZero(min, -Math.abs(change)),
      max: keepZero(max, change)
    };
  }
  function createContext(parentContext, context) {
    return Object.assign(Object.create(parentContext), context);
  }
  function _createResolver(scopes, prefixes = [
    ""
  ], rootScopes, fallback, getTarget = () => scopes[0]) {
    const finalRootScopes = rootScopes || scopes;
    if (typeof fallback === "undefined") {
      fallback = _resolve("_fallback", scopes);
    }
    const cache = {
      [Symbol.toStringTag]: "Object",
      _cacheable: true,
      _scopes: scopes,
      _rootScopes: finalRootScopes,
      _fallback: fallback,
      _getTarget: getTarget,
      override: (scope) => _createResolver([
        scope,
        ...scopes
      ], prefixes, finalRootScopes, fallback)
    };
    return new Proxy(cache, {
      /**
      * A trap for the delete operator.
      */
      deleteProperty(target, prop) {
        delete target[prop];
        delete target._keys;
        delete scopes[0][prop];
        return true;
      },
      /**
      * A trap for getting property values.
      */
      get(target, prop) {
        return _cached(target, prop, () => _resolveWithPrefixes(prop, prefixes, scopes, target));
      },
      /**
      * A trap for Object.getOwnPropertyDescriptor.
      * Also used by Object.hasOwnProperty.
      */
      getOwnPropertyDescriptor(target, prop) {
        return Reflect.getOwnPropertyDescriptor(target._scopes[0], prop);
      },
      /**
      * A trap for Object.getPrototypeOf.
      */
      getPrototypeOf() {
        return Reflect.getPrototypeOf(scopes[0]);
      },
      /**
      * A trap for the in operator.
      */
      has(target, prop) {
        return getKeysFromAllScopes(target).includes(prop);
      },
      /**
      * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
      */
      ownKeys(target) {
        return getKeysFromAllScopes(target);
      },
      /**
      * A trap for setting property values.
      */
      set(target, prop, value) {
        const storage = target._storage || (target._storage = getTarget());
        target[prop] = storage[prop] = value;
        delete target._keys;
        return true;
      }
    });
  }
  function _attachContext(proxy, context, subProxy, descriptorDefaults) {
    const cache = {
      _cacheable: false,
      _proxy: proxy,
      _context: context,
      _subProxy: subProxy,
      _stack: /* @__PURE__ */ new Set(),
      _descriptors: _descriptors(proxy, descriptorDefaults),
      setContext: (ctx) => _attachContext(proxy, ctx, subProxy, descriptorDefaults),
      override: (scope) => _attachContext(proxy.override(scope), context, subProxy, descriptorDefaults)
    };
    return new Proxy(cache, {
      /**
      * A trap for the delete operator.
      */
      deleteProperty(target, prop) {
        delete target[prop];
        delete proxy[prop];
        return true;
      },
      /**
      * A trap for getting property values.
      */
      get(target, prop, receiver) {
        return _cached(target, prop, () => _resolveWithContext(target, prop, receiver));
      },
      /**
      * A trap for Object.getOwnPropertyDescriptor.
      * Also used by Object.hasOwnProperty.
      */
      getOwnPropertyDescriptor(target, prop) {
        return target._descriptors.allKeys ? Reflect.has(proxy, prop) ? {
          enumerable: true,
          configurable: true
        } : void 0 : Reflect.getOwnPropertyDescriptor(proxy, prop);
      },
      /**
      * A trap for Object.getPrototypeOf.
      */
      getPrototypeOf() {
        return Reflect.getPrototypeOf(proxy);
      },
      /**
      * A trap for the in operator.
      */
      has(target, prop) {
        return Reflect.has(proxy, prop);
      },
      /**
      * A trap for Object.getOwnPropertyNames and Object.getOwnPropertySymbols.
      */
      ownKeys() {
        return Reflect.ownKeys(proxy);
      },
      /**
      * A trap for setting property values.
      */
      set(target, prop, value) {
        proxy[prop] = value;
        delete target[prop];
        return true;
      }
    });
  }
  function _descriptors(proxy, defaults2 = {
    scriptable: true,
    indexable: true
  }) {
    const { _scriptable = defaults2.scriptable, _indexable = defaults2.indexable, _allKeys = defaults2.allKeys } = proxy;
    return {
      allKeys: _allKeys,
      scriptable: _scriptable,
      indexable: _indexable,
      isScriptable: isFunction(_scriptable) ? _scriptable : () => _scriptable,
      isIndexable: isFunction(_indexable) ? _indexable : () => _indexable
    };
  }
  var readKey = (prefix, name) => prefix ? prefix + _capitalize(name) : name;
  var needsSubResolver = (prop, value) => isObject(value) && prop !== "adapters" && (Object.getPrototypeOf(value) === null || value.constructor === Object);
  function _cached(target, prop, resolve2) {
    if (Object.prototype.hasOwnProperty.call(target, prop)) {
      return target[prop];
    }
    const value = resolve2();
    target[prop] = value;
    return value;
  }
  function _resolveWithContext(target, prop, receiver) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    let value = _proxy[prop];
    if (isFunction(value) && descriptors2.isScriptable(prop)) {
      value = _resolveScriptable(prop, value, target, receiver);
    }
    if (isArray(value) && value.length) {
      value = _resolveArray(prop, value, target, descriptors2.isIndexable);
    }
    if (needsSubResolver(prop, value)) {
      value = _attachContext(value, _context, _subProxy && _subProxy[prop], descriptors2);
    }
    return value;
  }
  function _resolveScriptable(prop, getValue, target, receiver) {
    const { _proxy, _context, _subProxy, _stack } = target;
    if (_stack.has(prop)) {
      throw new Error("Recursion detected: " + Array.from(_stack).join("->") + "->" + prop);
    }
    _stack.add(prop);
    let value = getValue(_context, _subProxy || receiver);
    _stack.delete(prop);
    if (needsSubResolver(prop, value)) {
      value = createSubResolver(_proxy._scopes, _proxy, prop, value);
    }
    return value;
  }
  function _resolveArray(prop, value, target, isIndexable) {
    const { _proxy, _context, _subProxy, _descriptors: descriptors2 } = target;
    if (typeof _context.index !== "undefined" && isIndexable(prop)) {
      return value[_context.index % value.length];
    } else if (isObject(value[0])) {
      const arr = value;
      const scopes = _proxy._scopes.filter((s2) => s2 !== arr);
      value = [];
      for (const item of arr) {
        const resolver = createSubResolver(scopes, _proxy, prop, item);
        value.push(_attachContext(resolver, _context, _subProxy && _subProxy[prop], descriptors2));
      }
    }
    return value;
  }
  function resolveFallback(fallback, prop, value) {
    return isFunction(fallback) ? fallback(prop, value) : fallback;
  }
  var getScope = (key, parent) => key === true ? parent : typeof key === "string" ? resolveObjectKey(parent, key) : void 0;
  function addScopes(set2, parentScopes, key, parentFallback, value) {
    for (const parent of parentScopes) {
      const scope = getScope(key, parent);
      if (scope) {
        set2.add(scope);
        const fallback = resolveFallback(scope._fallback, key, value);
        if (typeof fallback !== "undefined" && fallback !== key && fallback !== parentFallback) {
          return fallback;
        }
      } else if (scope === false && typeof parentFallback !== "undefined" && key !== parentFallback) {
        return null;
      }
    }
    return false;
  }
  function createSubResolver(parentScopes, resolver, prop, value) {
    const rootScopes = resolver._rootScopes;
    const fallback = resolveFallback(resolver._fallback, prop, value);
    const allScopes = [
      ...parentScopes,
      ...rootScopes
    ];
    const set2 = /* @__PURE__ */ new Set();
    set2.add(value);
    let key = addScopesFromKey(set2, allScopes, prop, fallback || prop, value);
    if (key === null) {
      return false;
    }
    if (typeof fallback !== "undefined" && fallback !== prop) {
      key = addScopesFromKey(set2, allScopes, fallback, key, value);
      if (key === null) {
        return false;
      }
    }
    return _createResolver(Array.from(set2), [
      ""
    ], rootScopes, fallback, () => subGetTarget(resolver, prop, value));
  }
  function addScopesFromKey(set2, allScopes, key, fallback, item) {
    while (key) {
      key = addScopes(set2, allScopes, key, fallback, item);
    }
    return key;
  }
  function subGetTarget(resolver, prop, value) {
    const parent = resolver._getTarget();
    if (!(prop in parent)) {
      parent[prop] = {};
    }
    const target = parent[prop];
    if (isArray(target) && isObject(value)) {
      return value;
    }
    return target || {};
  }
  function _resolveWithPrefixes(prop, prefixes, scopes, proxy) {
    let value;
    for (const prefix of prefixes) {
      value = _resolve(readKey(prefix, prop), scopes);
      if (typeof value !== "undefined") {
        return needsSubResolver(prop, value) ? createSubResolver(scopes, proxy, prop, value) : value;
      }
    }
  }
  function _resolve(key, scopes) {
    for (const scope of scopes) {
      if (!scope) {
        continue;
      }
      const value = scope[key];
      if (typeof value !== "undefined") {
        return value;
      }
    }
  }
  function getKeysFromAllScopes(target) {
    let keys = target._keys;
    if (!keys) {
      keys = target._keys = resolveKeysFromAllScopes(target._scopes);
    }
    return keys;
  }
  function resolveKeysFromAllScopes(scopes) {
    const set2 = /* @__PURE__ */ new Set();
    for (const scope of scopes) {
      for (const key of Object.keys(scope).filter((k2) => !k2.startsWith("_"))) {
        set2.add(key);
      }
    }
    return Array.from(set2);
  }
  function _parseObjectDataRadialScale(meta, data, start, count) {
    const { iScale } = meta;
    const { key = "r" } = this._parsing;
    const parsed = new Array(count);
    let i2, ilen, index2, item;
    for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
      index2 = i2 + start;
      item = data[index2];
      parsed[i2] = {
        r: iScale.parse(resolveObjectKey(item, key), index2)
      };
    }
    return parsed;
  }
  var EPSILON = Number.EPSILON || 1e-14;
  var getPoint = (points, i2) => i2 < points.length && !points[i2].skip && points[i2];
  var getValueAxis = (indexAxis) => indexAxis === "x" ? "y" : "x";
  function splineCurve(firstPoint, middlePoint, afterPoint, t2) {
    const previous = firstPoint.skip ? middlePoint : firstPoint;
    const current = middlePoint;
    const next = afterPoint.skip ? middlePoint : afterPoint;
    const d01 = distanceBetweenPoints(current, previous);
    const d12 = distanceBetweenPoints(next, current);
    let s01 = d01 / (d01 + d12);
    let s12 = d12 / (d01 + d12);
    s01 = isNaN(s01) ? 0 : s01;
    s12 = isNaN(s12) ? 0 : s12;
    const fa = t2 * s01;
    const fb = t2 * s12;
    return {
      previous: {
        x: current.x - fa * (next.x - previous.x),
        y: current.y - fa * (next.y - previous.y)
      },
      next: {
        x: current.x + fb * (next.x - previous.x),
        y: current.y + fb * (next.y - previous.y)
      }
    };
  }
  function monotoneAdjust(points, deltaK, mK) {
    const pointsLen = points.length;
    let alphaK, betaK, tauK, squaredMagnitude, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i2 = 0; i2 < pointsLen - 1; ++i2) {
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i2 + 1);
      if (!pointCurrent || !pointAfter) {
        continue;
      }
      if (almostEquals(deltaK[i2], 0, EPSILON)) {
        mK[i2] = mK[i2 + 1] = 0;
        continue;
      }
      alphaK = mK[i2] / deltaK[i2];
      betaK = mK[i2 + 1] / deltaK[i2];
      squaredMagnitude = Math.pow(alphaK, 2) + Math.pow(betaK, 2);
      if (squaredMagnitude <= 9) {
        continue;
      }
      tauK = 3 / Math.sqrt(squaredMagnitude);
      mK[i2] = alphaK * tauK * deltaK[i2];
      mK[i2 + 1] = betaK * tauK * deltaK[i2];
    }
  }
  function monotoneCompute(points, mK, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    let delta, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (let i2 = 0; i2 < pointsLen; ++i2) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i2 + 1);
      if (!pointCurrent) {
        continue;
      }
      const iPixel = pointCurrent[indexAxis];
      const vPixel = pointCurrent[valueAxis];
      if (pointBefore) {
        delta = (iPixel - pointBefore[indexAxis]) / 3;
        pointCurrent[`cp1${indexAxis}`] = iPixel - delta;
        pointCurrent[`cp1${valueAxis}`] = vPixel - delta * mK[i2];
      }
      if (pointAfter) {
        delta = (pointAfter[indexAxis] - iPixel) / 3;
        pointCurrent[`cp2${indexAxis}`] = iPixel + delta;
        pointCurrent[`cp2${valueAxis}`] = vPixel + delta * mK[i2];
      }
    }
  }
  function splineCurveMonotone(points, indexAxis = "x") {
    const valueAxis = getValueAxis(indexAxis);
    const pointsLen = points.length;
    const deltaK = Array(pointsLen).fill(0);
    const mK = Array(pointsLen);
    let i2, pointBefore, pointCurrent;
    let pointAfter = getPoint(points, 0);
    for (i2 = 0; i2 < pointsLen; ++i2) {
      pointBefore = pointCurrent;
      pointCurrent = pointAfter;
      pointAfter = getPoint(points, i2 + 1);
      if (!pointCurrent) {
        continue;
      }
      if (pointAfter) {
        const slopeDelta = pointAfter[indexAxis] - pointCurrent[indexAxis];
        deltaK[i2] = slopeDelta !== 0 ? (pointAfter[valueAxis] - pointCurrent[valueAxis]) / slopeDelta : 0;
      }
      mK[i2] = !pointBefore ? deltaK[i2] : !pointAfter ? deltaK[i2 - 1] : sign(deltaK[i2 - 1]) !== sign(deltaK[i2]) ? 0 : (deltaK[i2 - 1] + deltaK[i2]) / 2;
    }
    monotoneAdjust(points, deltaK, mK);
    monotoneCompute(points, mK, indexAxis);
  }
  function capControlPoint(pt, min, max) {
    return Math.max(Math.min(pt, max), min);
  }
  function capBezierPoints(points, area) {
    let i2, ilen, point, inArea, inAreaPrev;
    let inAreaNext = _isPointInArea(points[0], area);
    for (i2 = 0, ilen = points.length; i2 < ilen; ++i2) {
      inAreaPrev = inArea;
      inArea = inAreaNext;
      inAreaNext = i2 < ilen - 1 && _isPointInArea(points[i2 + 1], area);
      if (!inArea) {
        continue;
      }
      point = points[i2];
      if (inAreaPrev) {
        point.cp1x = capControlPoint(point.cp1x, area.left, area.right);
        point.cp1y = capControlPoint(point.cp1y, area.top, area.bottom);
      }
      if (inAreaNext) {
        point.cp2x = capControlPoint(point.cp2x, area.left, area.right);
        point.cp2y = capControlPoint(point.cp2y, area.top, area.bottom);
      }
    }
  }
  function _updateBezierControlPoints(points, options, area, loop, indexAxis) {
    let i2, ilen, point, controlPoints;
    if (options.spanGaps) {
      points = points.filter((pt) => !pt.skip);
    }
    if (options.cubicInterpolationMode === "monotone") {
      splineCurveMonotone(points, indexAxis);
    } else {
      let prev = loop ? points[points.length - 1] : points[0];
      for (i2 = 0, ilen = points.length; i2 < ilen; ++i2) {
        point = points[i2];
        controlPoints = splineCurve(prev, point, points[Math.min(i2 + 1, ilen - (loop ? 0 : 1)) % ilen], options.tension);
        point.cp1x = controlPoints.previous.x;
        point.cp1y = controlPoints.previous.y;
        point.cp2x = controlPoints.next.x;
        point.cp2y = controlPoints.next.y;
        prev = point;
      }
    }
    if (options.capBezierPoints) {
      capBezierPoints(points, area);
    }
  }
  function _isDomSupported() {
    return typeof window !== "undefined" && typeof document !== "undefined";
  }
  function _getParentNode(domNode) {
    let parent = domNode.parentNode;
    if (parent && parent.toString() === "[object ShadowRoot]") {
      parent = parent.host;
    }
    return parent;
  }
  function parseMaxStyle(styleValue, node, parentProperty) {
    let valueInPixels;
    if (typeof styleValue === "string") {
      valueInPixels = parseInt(styleValue, 10);
      if (styleValue.indexOf("%") !== -1) {
        valueInPixels = valueInPixels / 100 * node.parentNode[parentProperty];
      }
    } else {
      valueInPixels = styleValue;
    }
    return valueInPixels;
  }
  var getComputedStyle2 = (element) => element.ownerDocument.defaultView.getComputedStyle(element, null);
  function getStyle(el, property) {
    return getComputedStyle2(el).getPropertyValue(property);
  }
  var positions = [
    "top",
    "right",
    "bottom",
    "left"
  ];
  function getPositionedStyle(styles, style, suffix) {
    const result = {};
    suffix = suffix ? "-" + suffix : "";
    for (let i2 = 0; i2 < 4; i2++) {
      const pos = positions[i2];
      result[pos] = parseFloat(styles[style + "-" + pos + suffix]) || 0;
    }
    result.width = result.left + result.right;
    result.height = result.top + result.bottom;
    return result;
  }
  var useOffsetPos = (x2, y2, target) => (x2 > 0 || y2 > 0) && (!target || !target.shadowRoot);
  function getCanvasPosition(e2, canvas) {
    const touches = e2.touches;
    const source = touches && touches.length ? touches[0] : e2;
    const { offsetX, offsetY } = source;
    let box = false;
    let x2, y2;
    if (useOffsetPos(offsetX, offsetY, e2.target)) {
      x2 = offsetX;
      y2 = offsetY;
    } else {
      const rect = canvas.getBoundingClientRect();
      x2 = source.clientX - rect.left;
      y2 = source.clientY - rect.top;
      box = true;
    }
    return {
      x: x2,
      y: y2,
      box
    };
  }
  function getRelativePosition(event, chart) {
    if ("native" in event) {
      return event;
    }
    const { canvas, currentDevicePixelRatio } = chart;
    const style = getComputedStyle2(canvas);
    const borderBox = style.boxSizing === "border-box";
    const paddings = getPositionedStyle(style, "padding");
    const borders = getPositionedStyle(style, "border", "width");
    const { x: x2, y: y2, box } = getCanvasPosition(event, canvas);
    const xOffset = paddings.left + (box && borders.left);
    const yOffset = paddings.top + (box && borders.top);
    let { width, height } = chart;
    if (borderBox) {
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    return {
      x: Math.round((x2 - xOffset) / width * canvas.width / currentDevicePixelRatio),
      y: Math.round((y2 - yOffset) / height * canvas.height / currentDevicePixelRatio)
    };
  }
  function getContainerSize(canvas, width, height) {
    let maxWidth, maxHeight;
    if (width === void 0 || height === void 0) {
      const container = _getParentNode(canvas);
      if (!container) {
        width = canvas.clientWidth;
        height = canvas.clientHeight;
      } else {
        const rect = container.getBoundingClientRect();
        const containerStyle = getComputedStyle2(container);
        const containerBorder = getPositionedStyle(containerStyle, "border", "width");
        const containerPadding = getPositionedStyle(containerStyle, "padding");
        width = rect.width - containerPadding.width - containerBorder.width;
        height = rect.height - containerPadding.height - containerBorder.height;
        maxWidth = parseMaxStyle(containerStyle.maxWidth, container, "clientWidth");
        maxHeight = parseMaxStyle(containerStyle.maxHeight, container, "clientHeight");
      }
    }
    return {
      width,
      height,
      maxWidth: maxWidth || INFINITY,
      maxHeight: maxHeight || INFINITY
    };
  }
  var round1 = (v2) => Math.round(v2 * 10) / 10;
  function getMaximumSize(canvas, bbWidth, bbHeight, aspectRatio) {
    const style = getComputedStyle2(canvas);
    const margins = getPositionedStyle(style, "margin");
    const maxWidth = parseMaxStyle(style.maxWidth, canvas, "clientWidth") || INFINITY;
    const maxHeight = parseMaxStyle(style.maxHeight, canvas, "clientHeight") || INFINITY;
    const containerSize = getContainerSize(canvas, bbWidth, bbHeight);
    let { width, height } = containerSize;
    if (style.boxSizing === "content-box") {
      const borders = getPositionedStyle(style, "border", "width");
      const paddings = getPositionedStyle(style, "padding");
      width -= paddings.width + borders.width;
      height -= paddings.height + borders.height;
    }
    width = Math.max(0, width - margins.width);
    height = Math.max(0, aspectRatio ? width / aspectRatio : height - margins.height);
    width = round1(Math.min(width, maxWidth, containerSize.maxWidth));
    height = round1(Math.min(height, maxHeight, containerSize.maxHeight));
    if (width && !height) {
      height = round1(width / 2);
    }
    const maintainHeight = bbWidth !== void 0 || bbHeight !== void 0;
    if (maintainHeight && aspectRatio && containerSize.height && height > containerSize.height) {
      height = containerSize.height;
      width = round1(Math.floor(height * aspectRatio));
    }
    return {
      width,
      height
    };
  }
  function retinaScale(chart, forceRatio, forceStyle) {
    const pixelRatio = forceRatio || 1;
    const deviceHeight = Math.floor(chart.height * pixelRatio);
    const deviceWidth = Math.floor(chart.width * pixelRatio);
    chart.height = Math.floor(chart.height);
    chart.width = Math.floor(chart.width);
    const canvas = chart.canvas;
    if (canvas.style && (forceStyle || !canvas.style.height && !canvas.style.width)) {
      canvas.style.height = `${chart.height}px`;
      canvas.style.width = `${chart.width}px`;
    }
    if (chart.currentDevicePixelRatio !== pixelRatio || canvas.height !== deviceHeight || canvas.width !== deviceWidth) {
      chart.currentDevicePixelRatio = pixelRatio;
      canvas.height = deviceHeight;
      canvas.width = deviceWidth;
      chart.ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      return true;
    }
    return false;
  }
  var supportsEventListenerOptions = function() {
    let passiveSupported = false;
    try {
      const options = {
        get passive() {
          passiveSupported = true;
          return false;
        }
      };
      window.addEventListener("test", null, options);
      window.removeEventListener("test", null, options);
    } catch (e2) {
    }
    return passiveSupported;
  }();
  function readUsedSize(element, property) {
    const value = getStyle(element, property);
    const matches = value && value.match(/^(\d+)(\.\d+)?px$/);
    return matches ? +matches[1] : void 0;
  }
  function _pointInLine(p1, p2, t2, mode) {
    return {
      x: p1.x + t2 * (p2.x - p1.x),
      y: p1.y + t2 * (p2.y - p1.y)
    };
  }
  function _steppedInterpolation(p1, p2, t2, mode) {
    return {
      x: p1.x + t2 * (p2.x - p1.x),
      y: mode === "middle" ? t2 < 0.5 ? p1.y : p2.y : mode === "after" ? t2 < 1 ? p1.y : p2.y : t2 > 0 ? p2.y : p1.y
    };
  }
  function _bezierInterpolation(p1, p2, t2, mode) {
    const cp1 = {
      x: p1.cp2x,
      y: p1.cp2y
    };
    const cp2 = {
      x: p2.cp1x,
      y: p2.cp1y
    };
    const a2 = _pointInLine(p1, cp1, t2);
    const b2 = _pointInLine(cp1, cp2, t2);
    const c2 = _pointInLine(cp2, p2, t2);
    const d2 = _pointInLine(a2, b2, t2);
    const e2 = _pointInLine(b2, c2, t2);
    return _pointInLine(d2, e2, t2);
  }
  var getRightToLeftAdapter = function(rectX, width) {
    return {
      x(x2) {
        return rectX + rectX + width - x2;
      },
      setWidth(w2) {
        width = w2;
      },
      textAlign(align) {
        if (align === "center") {
          return align;
        }
        return align === "right" ? "left" : "right";
      },
      xPlus(x2, value) {
        return x2 - value;
      },
      leftForLtr(x2, itemWidth) {
        return x2 - itemWidth;
      }
    };
  };
  var getLeftToRightAdapter = function() {
    return {
      x(x2) {
        return x2;
      },
      setWidth(w2) {
      },
      textAlign(align) {
        return align;
      },
      xPlus(x2, value) {
        return x2 + value;
      },
      leftForLtr(x2, _itemWidth) {
        return x2;
      }
    };
  };
  function getRtlAdapter(rtl, rectX, width) {
    return rtl ? getRightToLeftAdapter(rectX, width) : getLeftToRightAdapter();
  }
  function overrideTextDirection(ctx, direction) {
    let style, original;
    if (direction === "ltr" || direction === "rtl") {
      style = ctx.canvas.style;
      original = [
        style.getPropertyValue("direction"),
        style.getPropertyPriority("direction")
      ];
      style.setProperty("direction", direction, "important");
      ctx.prevTextDirection = original;
    }
  }
  function restoreTextDirection(ctx, original) {
    if (original !== void 0) {
      delete ctx.prevTextDirection;
      ctx.canvas.style.setProperty("direction", original[0], original[1]);
    }
  }
  function propertyFn(property) {
    if (property === "angle") {
      return {
        between: _angleBetween,
        compare: _angleDiff,
        normalize: _normalizeAngle
      };
    }
    return {
      between: _isBetween,
      compare: (a2, b2) => a2 - b2,
      normalize: (x2) => x2
    };
  }
  function normalizeSegment({ start, end, count, loop, style }) {
    return {
      start: start % count,
      end: end % count,
      loop: loop && (end - start + 1) % count === 0,
      style
    };
  }
  function getSegment(segment, points, bounds) {
    const { property, start: startBound, end: endBound } = bounds;
    const { between, normalize } = propertyFn(property);
    const count = points.length;
    let { start, end, loop } = segment;
    let i2, ilen;
    if (loop) {
      start += count;
      end += count;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        if (!between(normalize(points[start % count][property]), startBound, endBound)) {
          break;
        }
        start--;
        end--;
      }
      start %= count;
      end %= count;
    }
    if (end < start) {
      end += count;
    }
    return {
      start,
      end,
      loop,
      style: segment.style
    };
  }
  function _boundSegment(segment, points, bounds) {
    if (!bounds) {
      return [
        segment
      ];
    }
    const { property, start: startBound, end: endBound } = bounds;
    const count = points.length;
    const { compare, between, normalize } = propertyFn(property);
    const { start, end, loop, style } = getSegment(segment, points, bounds);
    const result = [];
    let inside = false;
    let subStart = null;
    let value, point, prevValue;
    const startIsBefore = () => between(startBound, prevValue, value) && compare(startBound, prevValue) !== 0;
    const endIsBefore = () => compare(endBound, value) === 0 || between(endBound, prevValue, value);
    const shouldStart = () => inside || startIsBefore();
    const shouldStop = () => !inside || endIsBefore();
    for (let i2 = start, prev = start; i2 <= end; ++i2) {
      point = points[i2 % count];
      if (point.skip) {
        continue;
      }
      value = normalize(point[property]);
      if (value === prevValue) {
        continue;
      }
      inside = between(value, startBound, endBound);
      if (subStart === null && shouldStart()) {
        subStart = compare(value, startBound) === 0 ? i2 : prev;
      }
      if (subStart !== null && shouldStop()) {
        result.push(normalizeSegment({
          start: subStart,
          end: i2,
          loop,
          count,
          style
        }));
        subStart = null;
      }
      prev = i2;
      prevValue = value;
    }
    if (subStart !== null) {
      result.push(normalizeSegment({
        start: subStart,
        end,
        loop,
        count,
        style
      }));
    }
    return result;
  }
  function _boundSegments(line, bounds) {
    const result = [];
    const segments = line.segments;
    for (let i2 = 0; i2 < segments.length; i2++) {
      const sub = _boundSegment(segments[i2], line.points, bounds);
      if (sub.length) {
        result.push(...sub);
      }
    }
    return result;
  }
  function findStartAndEnd(points, count, loop, spanGaps) {
    let start = 0;
    let end = count - 1;
    if (loop && !spanGaps) {
      while (start < count && !points[start].skip) {
        start++;
      }
    }
    while (start < count && points[start].skip) {
      start++;
    }
    start %= count;
    if (loop) {
      end += start;
    }
    while (end > start && points[end % count].skip) {
      end--;
    }
    end %= count;
    return {
      start,
      end
    };
  }
  function solidSegments(points, start, max, loop) {
    const count = points.length;
    const result = [];
    let last = start;
    let prev = points[start];
    let end;
    for (end = start + 1; end <= max; ++end) {
      const cur = points[end % count];
      if (cur.skip || cur.stop) {
        if (!prev.skip) {
          loop = false;
          result.push({
            start: start % count,
            end: (end - 1) % count,
            loop
          });
          start = last = cur.stop ? end : null;
        }
      } else {
        last = end;
        if (prev.skip) {
          start = end;
        }
      }
      prev = cur;
    }
    if (last !== null) {
      result.push({
        start: start % count,
        end: last % count,
        loop
      });
    }
    return result;
  }
  function _computeSegments(line, segmentOptions) {
    const points = line.points;
    const spanGaps = line.options.spanGaps;
    const count = points.length;
    if (!count) {
      return [];
    }
    const loop = !!line._loop;
    const { start, end } = findStartAndEnd(points, count, loop, spanGaps);
    if (spanGaps === true) {
      return splitByStyles(line, [
        {
          start,
          end,
          loop
        }
      ], points, segmentOptions);
    }
    const max = end < start ? end + count : end;
    const completeLoop = !!line._fullLoop && start === 0 && end === count - 1;
    return splitByStyles(line, solidSegments(points, start, max, completeLoop), points, segmentOptions);
  }
  function splitByStyles(line, segments, points, segmentOptions) {
    if (!segmentOptions || !segmentOptions.setContext || !points) {
      return segments;
    }
    return doSplitByStyles(line, segments, points, segmentOptions);
  }
  function doSplitByStyles(line, segments, points, segmentOptions) {
    const chartContext = line._chart.getContext();
    const baseStyle = readStyle(line.options);
    const { _datasetIndex: datasetIndex, options: { spanGaps } } = line;
    const count = points.length;
    const result = [];
    let prevStyle = baseStyle;
    let start = segments[0].start;
    let i2 = start;
    function addStyle(s2, e2, l2, st) {
      const dir = spanGaps ? -1 : 1;
      if (s2 === e2) {
        return;
      }
      s2 += count;
      while (points[s2 % count].skip) {
        s2 -= dir;
      }
      while (points[e2 % count].skip) {
        e2 += dir;
      }
      if (s2 % count !== e2 % count) {
        result.push({
          start: s2 % count,
          end: e2 % count,
          loop: l2,
          style: st
        });
        prevStyle = st;
        start = e2 % count;
      }
    }
    for (const segment of segments) {
      start = spanGaps ? start : segment.start;
      let prev = points[start % count];
      let style;
      for (i2 = start + 1; i2 <= segment.end; i2++) {
        const pt = points[i2 % count];
        style = readStyle(segmentOptions.setContext(createContext(chartContext, {
          type: "segment",
          p0: prev,
          p1: pt,
          p0DataIndex: (i2 - 1) % count,
          p1DataIndex: i2 % count,
          datasetIndex
        })));
        if (styleChanged(style, prevStyle)) {
          addStyle(start, i2 - 1, segment.loop, prevStyle);
        }
        prev = pt;
        prevStyle = style;
      }
      if (start < i2 - 1) {
        addStyle(start, i2 - 1, segment.loop, prevStyle);
      }
    }
    return result;
  }
  function readStyle(options) {
    return {
      backgroundColor: options.backgroundColor,
      borderCapStyle: options.borderCapStyle,
      borderDash: options.borderDash,
      borderDashOffset: options.borderDashOffset,
      borderJoinStyle: options.borderJoinStyle,
      borderWidth: options.borderWidth,
      borderColor: options.borderColor
    };
  }
  function styleChanged(style, prevStyle) {
    if (!prevStyle) {
      return false;
    }
    const cache = [];
    const replacer = function(key, value) {
      if (!isPatternOrGradient(value)) {
        return value;
      }
      if (!cache.includes(value)) {
        cache.push(value);
      }
      return cache.indexOf(value);
    };
    return JSON.stringify(style, replacer) !== JSON.stringify(prevStyle, replacer);
  }

  // node_modules/chart.js/dist/chart.js
  var Animator = class {
    constructor() {
      this._request = null;
      this._charts = /* @__PURE__ */ new Map();
      this._running = false;
      this._lastDate = void 0;
    }
    _notify(chart, anims, date, type) {
      const callbacks = anims.listeners[type];
      const numSteps = anims.duration;
      callbacks.forEach((fn) => fn({
        chart,
        initial: anims.initial,
        numSteps,
        currentStep: Math.min(date - anims.start, numSteps)
      }));
    }
    _refresh() {
      if (this._request) {
        return;
      }
      this._running = true;
      this._request = requestAnimFrame.call(window, () => {
        this._update();
        this._request = null;
        if (this._running) {
          this._refresh();
        }
      });
    }
    _update(date = Date.now()) {
      let remaining = 0;
      this._charts.forEach((anims, chart) => {
        if (!anims.running || !anims.items.length) {
          return;
        }
        const items = anims.items;
        let i2 = items.length - 1;
        let draw2 = false;
        let item;
        for (; i2 >= 0; --i2) {
          item = items[i2];
          if (item._active) {
            if (item._total > anims.duration) {
              anims.duration = item._total;
            }
            item.tick(date);
            draw2 = true;
          } else {
            items[i2] = items[items.length - 1];
            items.pop();
          }
        }
        if (draw2) {
          chart.draw();
          this._notify(chart, anims, date, "progress");
        }
        if (!items.length) {
          anims.running = false;
          this._notify(chart, anims, date, "complete");
          anims.initial = false;
        }
        remaining += items.length;
      });
      this._lastDate = date;
      if (remaining === 0) {
        this._running = false;
      }
    }
    _getAnims(chart) {
      const charts = this._charts;
      let anims = charts.get(chart);
      if (!anims) {
        anims = {
          running: false,
          initial: true,
          items: [],
          listeners: {
            complete: [],
            progress: []
          }
        };
        charts.set(chart, anims);
      }
      return anims;
    }
    listen(chart, event, cb) {
      this._getAnims(chart).listeners[event].push(cb);
    }
    add(chart, items) {
      if (!items || !items.length) {
        return;
      }
      this._getAnims(chart).items.push(...items);
    }
    has(chart) {
      return this._getAnims(chart).items.length > 0;
    }
    start(chart) {
      const anims = this._charts.get(chart);
      if (!anims) {
        return;
      }
      anims.running = true;
      anims.start = Date.now();
      anims.duration = anims.items.reduce((acc, cur) => Math.max(acc, cur._duration), 0);
      this._refresh();
    }
    running(chart) {
      if (!this._running) {
        return false;
      }
      const anims = this._charts.get(chart);
      if (!anims || !anims.running || !anims.items.length) {
        return false;
      }
      return true;
    }
    stop(chart) {
      const anims = this._charts.get(chart);
      if (!anims || !anims.items.length) {
        return;
      }
      const items = anims.items;
      let i2 = items.length - 1;
      for (; i2 >= 0; --i2) {
        items[i2].cancel();
      }
      anims.items = [];
      this._notify(chart, anims, Date.now(), "complete");
    }
    remove(chart) {
      return this._charts.delete(chart);
    }
  };
  var animator = /* @__PURE__ */ new Animator();
  var transparent = "transparent";
  var interpolators = {
    boolean(from2, to2, factor) {
      return factor > 0.5 ? to2 : from2;
    },
    color(from2, to2, factor) {
      const c0 = color(from2 || transparent);
      const c1 = c0.valid && color(to2 || transparent);
      return c1 && c1.valid ? c1.mix(c0, factor).hexString() : to2;
    },
    number(from2, to2, factor) {
      return from2 + (to2 - from2) * factor;
    }
  };
  var Animation = class {
    constructor(cfg, target, prop, to2) {
      const currentValue = target[prop];
      to2 = resolve([
        cfg.to,
        to2,
        currentValue,
        cfg.from
      ]);
      const from2 = resolve([
        cfg.from,
        currentValue,
        to2
      ]);
      this._active = true;
      this._fn = cfg.fn || interpolators[cfg.type || typeof from2];
      this._easing = effects[cfg.easing] || effects.linear;
      this._start = Math.floor(Date.now() + (cfg.delay || 0));
      this._duration = this._total = Math.floor(cfg.duration);
      this._loop = !!cfg.loop;
      this._target = target;
      this._prop = prop;
      this._from = from2;
      this._to = to2;
      this._promises = void 0;
    }
    active() {
      return this._active;
    }
    update(cfg, to2, date) {
      if (this._active) {
        this._notify(false);
        const currentValue = this._target[this._prop];
        const elapsed = date - this._start;
        const remain = this._duration - elapsed;
        this._start = date;
        this._duration = Math.floor(Math.max(remain, cfg.duration));
        this._total += elapsed;
        this._loop = !!cfg.loop;
        this._to = resolve([
          cfg.to,
          to2,
          currentValue,
          cfg.from
        ]);
        this._from = resolve([
          cfg.from,
          currentValue,
          to2
        ]);
      }
    }
    cancel() {
      if (this._active) {
        this.tick(Date.now());
        this._active = false;
        this._notify(false);
      }
    }
    tick(date) {
      const elapsed = date - this._start;
      const duration = this._duration;
      const prop = this._prop;
      const from2 = this._from;
      const loop = this._loop;
      const to2 = this._to;
      let factor;
      this._active = from2 !== to2 && (loop || elapsed < duration);
      if (!this._active) {
        this._target[prop] = to2;
        this._notify(true);
        return;
      }
      if (elapsed < 0) {
        this._target[prop] = from2;
        return;
      }
      factor = elapsed / duration % 2;
      factor = loop && factor > 1 ? 2 - factor : factor;
      factor = this._easing(Math.min(1, Math.max(0, factor)));
      this._target[prop] = this._fn(from2, to2, factor);
    }
    wait() {
      const promises = this._promises || (this._promises = []);
      return new Promise((res, rej) => {
        promises.push({
          res,
          rej
        });
      });
    }
    _notify(resolved) {
      const method = resolved ? "res" : "rej";
      const promises = this._promises || [];
      for (let i2 = 0; i2 < promises.length; i2++) {
        promises[i2][method]();
      }
    }
  };
  var Animations = class {
    constructor(chart, config) {
      this._chart = chart;
      this._properties = /* @__PURE__ */ new Map();
      this.configure(config);
    }
    configure(config) {
      if (!isObject(config)) {
        return;
      }
      const animationOptions = Object.keys(defaults.animation);
      const animatedProps = this._properties;
      Object.getOwnPropertyNames(config).forEach((key) => {
        const cfg = config[key];
        if (!isObject(cfg)) {
          return;
        }
        const resolved = {};
        for (const option of animationOptions) {
          resolved[option] = cfg[option];
        }
        (isArray(cfg.properties) && cfg.properties || [
          key
        ]).forEach((prop) => {
          if (prop === key || !animatedProps.has(prop)) {
            animatedProps.set(prop, resolved);
          }
        });
      });
    }
    _animateOptions(target, values) {
      const newOptions = values.options;
      const options = resolveTargetOptions(target, newOptions);
      if (!options) {
        return [];
      }
      const animations = this._createAnimations(options, newOptions);
      if (newOptions.$shared) {
        awaitAll(target.options.$animations, newOptions).then(() => {
          target.options = newOptions;
        }, () => {
        });
      }
      return animations;
    }
    _createAnimations(target, values) {
      const animatedProps = this._properties;
      const animations = [];
      const running = target.$animations || (target.$animations = {});
      const props = Object.keys(values);
      const date = Date.now();
      let i2;
      for (i2 = props.length - 1; i2 >= 0; --i2) {
        const prop = props[i2];
        if (prop.charAt(0) === "$") {
          continue;
        }
        if (prop === "options") {
          animations.push(...this._animateOptions(target, values));
          continue;
        }
        const value = values[prop];
        let animation = running[prop];
        const cfg = animatedProps.get(prop);
        if (animation) {
          if (cfg && animation.active()) {
            animation.update(cfg, value, date);
            continue;
          } else {
            animation.cancel();
          }
        }
        if (!cfg || !cfg.duration) {
          target[prop] = value;
          continue;
        }
        running[prop] = animation = new Animation(cfg, target, prop, value);
        animations.push(animation);
      }
      return animations;
    }
    update(target, values) {
      if (this._properties.size === 0) {
        Object.assign(target, values);
        return;
      }
      const animations = this._createAnimations(target, values);
      if (animations.length) {
        animator.add(this._chart, animations);
        return true;
      }
    }
  };
  function awaitAll(animations, properties) {
    const running = [];
    const keys = Object.keys(properties);
    for (let i2 = 0; i2 < keys.length; i2++) {
      const anim = animations[keys[i2]];
      if (anim && anim.active()) {
        running.push(anim.wait());
      }
    }
    return Promise.all(running);
  }
  function resolveTargetOptions(target, newOptions) {
    if (!newOptions) {
      return;
    }
    let options = target.options;
    if (!options) {
      target.options = newOptions;
      return;
    }
    if (options.$shared) {
      target.options = options = Object.assign({}, options, {
        $shared: false,
        $animations: {}
      });
    }
    return options;
  }
  function scaleClip(scale, allowedOverflow) {
    const opts = scale && scale.options || {};
    const reverse = opts.reverse;
    const min = opts.min === void 0 ? allowedOverflow : 0;
    const max = opts.max === void 0 ? allowedOverflow : 0;
    return {
      start: reverse ? max : min,
      end: reverse ? min : max
    };
  }
  function defaultClip(xScale, yScale, allowedOverflow) {
    if (allowedOverflow === false) {
      return false;
    }
    const x2 = scaleClip(xScale, allowedOverflow);
    const y2 = scaleClip(yScale, allowedOverflow);
    return {
      top: y2.end,
      right: x2.end,
      bottom: y2.start,
      left: x2.start
    };
  }
  function toClip(value) {
    let t2, r2, b2, l2;
    if (isObject(value)) {
      t2 = value.top;
      r2 = value.right;
      b2 = value.bottom;
      l2 = value.left;
    } else {
      t2 = r2 = b2 = l2 = value;
    }
    return {
      top: t2,
      right: r2,
      bottom: b2,
      left: l2,
      disabled: value === false
    };
  }
  function getSortedDatasetIndices(chart, filterVisible) {
    const keys = [];
    const metasets = chart._getSortedDatasetMetas(filterVisible);
    let i2, ilen;
    for (i2 = 0, ilen = metasets.length; i2 < ilen; ++i2) {
      keys.push(metasets[i2].index);
    }
    return keys;
  }
  function applyStack(stack, value, dsIndex, options = {}) {
    const keys = stack.keys;
    const singleMode = options.mode === "single";
    let i2, ilen, datasetIndex, otherValue;
    if (value === null) {
      return;
    }
    for (i2 = 0, ilen = keys.length; i2 < ilen; ++i2) {
      datasetIndex = +keys[i2];
      if (datasetIndex === dsIndex) {
        if (options.all) {
          continue;
        }
        break;
      }
      otherValue = stack.values[datasetIndex];
      if (isNumberFinite(otherValue) && (singleMode || value === 0 || sign(value) === sign(otherValue))) {
        value += otherValue;
      }
    }
    return value;
  }
  function convertObjectDataToArray(data) {
    const keys = Object.keys(data);
    const adata = new Array(keys.length);
    let i2, ilen, key;
    for (i2 = 0, ilen = keys.length; i2 < ilen; ++i2) {
      key = keys[i2];
      adata[i2] = {
        x: key,
        y: data[key]
      };
    }
    return adata;
  }
  function isStacked(scale, meta) {
    const stacked = scale && scale.options.stacked;
    return stacked || stacked === void 0 && meta.stack !== void 0;
  }
  function getStackKey(indexScale, valueScale, meta) {
    return `${indexScale.id}.${valueScale.id}.${meta.stack || meta.type}`;
  }
  function getUserBounds(scale) {
    const { min, max, minDefined, maxDefined } = scale.getUserBounds();
    return {
      min: minDefined ? min : Number.NEGATIVE_INFINITY,
      max: maxDefined ? max : Number.POSITIVE_INFINITY
    };
  }
  function getOrCreateStack(stacks, stackKey, indexValue) {
    const subStack = stacks[stackKey] || (stacks[stackKey] = {});
    return subStack[indexValue] || (subStack[indexValue] = {});
  }
  function getLastIndexInStack(stack, vScale, positive, type) {
    for (const meta of vScale.getMatchingVisibleMetas(type).reverse()) {
      const value = stack[meta.index];
      if (positive && value > 0 || !positive && value < 0) {
        return meta.index;
      }
    }
    return null;
  }
  function updateStacks(controller, parsed) {
    const { chart, _cachedMeta: meta } = controller;
    const stacks = chart._stacks || (chart._stacks = {});
    const { iScale, vScale, index: datasetIndex } = meta;
    const iAxis = iScale.axis;
    const vAxis = vScale.axis;
    const key = getStackKey(iScale, vScale, meta);
    const ilen = parsed.length;
    let stack;
    for (let i2 = 0; i2 < ilen; ++i2) {
      const item = parsed[i2];
      const { [iAxis]: index2, [vAxis]: value } = item;
      const itemStacks = item._stacks || (item._stacks = {});
      stack = itemStacks[vAxis] = getOrCreateStack(stacks, key, index2);
      stack[datasetIndex] = value;
      stack._top = getLastIndexInStack(stack, vScale, true, meta.type);
      stack._bottom = getLastIndexInStack(stack, vScale, false, meta.type);
      const visualValues = stack._visualValues || (stack._visualValues = {});
      visualValues[datasetIndex] = value;
    }
  }
  function getFirstScaleId(chart, axis) {
    const scales2 = chart.scales;
    return Object.keys(scales2).filter((key) => scales2[key].axis === axis).shift();
  }
  function createDatasetContext(parent, index2) {
    return createContext(parent, {
      active: false,
      dataset: void 0,
      datasetIndex: index2,
      index: index2,
      mode: "default",
      type: "dataset"
    });
  }
  function createDataContext(parent, index2, element) {
    return createContext(parent, {
      active: false,
      dataIndex: index2,
      parsed: void 0,
      raw: void 0,
      element,
      index: index2,
      mode: "default",
      type: "data"
    });
  }
  function clearStacks(meta, items) {
    const datasetIndex = meta.controller.index;
    const axis = meta.vScale && meta.vScale.axis;
    if (!axis) {
      return;
    }
    items = items || meta._parsed;
    for (const parsed of items) {
      const stacks = parsed._stacks;
      if (!stacks || stacks[axis] === void 0 || stacks[axis][datasetIndex] === void 0) {
        return;
      }
      delete stacks[axis][datasetIndex];
      if (stacks[axis]._visualValues !== void 0 && stacks[axis]._visualValues[datasetIndex] !== void 0) {
        delete stacks[axis]._visualValues[datasetIndex];
      }
    }
  }
  var isDirectUpdateMode = (mode) => mode === "reset" || mode === "none";
  var cloneIfNotShared = (cached, shared) => shared ? cached : Object.assign({}, cached);
  var createStack = (canStack, meta, chart) => canStack && !meta.hidden && meta._stacked && {
    keys: getSortedDatasetIndices(chart, true),
    values: null
  };
  var DatasetController = class {
    static defaults = {};
    static datasetElementType = null;
    static dataElementType = null;
    constructor(chart, datasetIndex) {
      this.chart = chart;
      this._ctx = chart.ctx;
      this.index = datasetIndex;
      this._cachedDataOpts = {};
      this._cachedMeta = this.getMeta();
      this._type = this._cachedMeta.type;
      this.options = void 0;
      this._parsing = false;
      this._data = void 0;
      this._objectData = void 0;
      this._sharedOptions = void 0;
      this._drawStart = void 0;
      this._drawCount = void 0;
      this.enableOptionSharing = false;
      this.supportsDecimation = false;
      this.$context = void 0;
      this._syncList = [];
      this.datasetElementType = new.target.datasetElementType;
      this.dataElementType = new.target.dataElementType;
      this.initialize();
    }
    initialize() {
      const meta = this._cachedMeta;
      this.configure();
      this.linkScales();
      meta._stacked = isStacked(meta.vScale, meta);
      this.addElements();
      if (this.options.fill && !this.chart.isPluginEnabled("filler")) {
        console.warn("Tried to use the 'fill' option without the 'Filler' plugin enabled. Please import and register the 'Filler' plugin and make sure it is not disabled in the options");
      }
    }
    updateIndex(datasetIndex) {
      if (this.index !== datasetIndex) {
        clearStacks(this._cachedMeta);
      }
      this.index = datasetIndex;
    }
    linkScales() {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      const chooseId = (axis, x2, y2, r2) => axis === "x" ? x2 : axis === "r" ? r2 : y2;
      const xid = meta.xAxisID = valueOrDefault(dataset.xAxisID, getFirstScaleId(chart, "x"));
      const yid = meta.yAxisID = valueOrDefault(dataset.yAxisID, getFirstScaleId(chart, "y"));
      const rid = meta.rAxisID = valueOrDefault(dataset.rAxisID, getFirstScaleId(chart, "r"));
      const indexAxis = meta.indexAxis;
      const iid = meta.iAxisID = chooseId(indexAxis, xid, yid, rid);
      const vid = meta.vAxisID = chooseId(indexAxis, yid, xid, rid);
      meta.xScale = this.getScaleForId(xid);
      meta.yScale = this.getScaleForId(yid);
      meta.rScale = this.getScaleForId(rid);
      meta.iScale = this.getScaleForId(iid);
      meta.vScale = this.getScaleForId(vid);
    }
    getDataset() {
      return this.chart.data.datasets[this.index];
    }
    getMeta() {
      return this.chart.getDatasetMeta(this.index);
    }
    getScaleForId(scaleID) {
      return this.chart.scales[scaleID];
    }
    _getOtherScale(scale) {
      const meta = this._cachedMeta;
      return scale === meta.iScale ? meta.vScale : meta.iScale;
    }
    reset() {
      this._update("reset");
    }
    _destroy() {
      const meta = this._cachedMeta;
      if (this._data) {
        unlistenArrayEvents(this._data, this);
      }
      if (meta._stacked) {
        clearStacks(meta);
      }
    }
    _dataCheck() {
      const dataset = this.getDataset();
      const data = dataset.data || (dataset.data = []);
      const _data = this._data;
      if (isObject(data)) {
        this._data = convertObjectDataToArray(data);
      } else if (_data !== data) {
        if (_data) {
          unlistenArrayEvents(_data, this);
          const meta = this._cachedMeta;
          clearStacks(meta);
          meta._parsed = [];
        }
        if (data && Object.isExtensible(data)) {
          listenArrayEvents(data, this);
        }
        this._syncList = [];
        this._data = data;
      }
    }
    addElements() {
      const meta = this._cachedMeta;
      this._dataCheck();
      if (this.datasetElementType) {
        meta.dataset = new this.datasetElementType();
      }
    }
    buildOrUpdateElements(resetNewElements) {
      const meta = this._cachedMeta;
      const dataset = this.getDataset();
      let stackChanged = false;
      this._dataCheck();
      const oldStacked = meta._stacked;
      meta._stacked = isStacked(meta.vScale, meta);
      if (meta.stack !== dataset.stack) {
        stackChanged = true;
        clearStacks(meta);
        meta.stack = dataset.stack;
      }
      this._resyncElements(resetNewElements);
      if (stackChanged || oldStacked !== meta._stacked) {
        updateStacks(this, meta._parsed);
      }
    }
    configure() {
      const config = this.chart.config;
      const scopeKeys = config.datasetScopeKeys(this._type);
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys, true);
      this.options = config.createResolver(scopes, this.getContext());
      this._parsing = this.options.parsing;
      this._cachedDataOpts = {};
    }
    parse(start, count) {
      const { _cachedMeta: meta, _data: data } = this;
      const { iScale, _stacked } = meta;
      const iAxis = iScale.axis;
      let sorted = start === 0 && count === data.length ? true : meta._sorted;
      let prev = start > 0 && meta._parsed[start - 1];
      let i2, cur, parsed;
      if (this._parsing === false) {
        meta._parsed = data;
        meta._sorted = true;
        parsed = data;
      } else {
        if (isArray(data[start])) {
          parsed = this.parseArrayData(meta, data, start, count);
        } else if (isObject(data[start])) {
          parsed = this.parseObjectData(meta, data, start, count);
        } else {
          parsed = this.parsePrimitiveData(meta, data, start, count);
        }
        const isNotInOrderComparedToPrev = () => cur[iAxis] === null || prev && cur[iAxis] < prev[iAxis];
        for (i2 = 0; i2 < count; ++i2) {
          meta._parsed[i2 + start] = cur = parsed[i2];
          if (sorted) {
            if (isNotInOrderComparedToPrev()) {
              sorted = false;
            }
            prev = cur;
          }
        }
        meta._sorted = sorted;
      }
      if (_stacked) {
        updateStacks(this, parsed);
      }
    }
    parsePrimitiveData(meta, data, start, count) {
      const { iScale, vScale } = meta;
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const labels = iScale.getLabels();
      const singleScale = iScale === vScale;
      const parsed = new Array(count);
      let i2, ilen, index2;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        index2 = i2 + start;
        parsed[i2] = {
          [iAxis]: singleScale || iScale.parse(labels[index2], index2),
          [vAxis]: vScale.parse(data[index2], index2)
        };
      }
      return parsed;
    }
    parseArrayData(meta, data, start, count) {
      const { xScale, yScale } = meta;
      const parsed = new Array(count);
      let i2, ilen, index2, item;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        index2 = i2 + start;
        item = data[index2];
        parsed[i2] = {
          x: xScale.parse(item[0], index2),
          y: yScale.parse(item[1], index2)
        };
      }
      return parsed;
    }
    parseObjectData(meta, data, start, count) {
      const { xScale, yScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const parsed = new Array(count);
      let i2, ilen, index2, item;
      for (i2 = 0, ilen = count; i2 < ilen; ++i2) {
        index2 = i2 + start;
        item = data[index2];
        parsed[i2] = {
          x: xScale.parse(resolveObjectKey(item, xAxisKey), index2),
          y: yScale.parse(resolveObjectKey(item, yAxisKey), index2)
        };
      }
      return parsed;
    }
    getParsed(index2) {
      return this._cachedMeta._parsed[index2];
    }
    getDataElement(index2) {
      return this._cachedMeta.data[index2];
    }
    applyStack(scale, parsed, mode) {
      const chart = this.chart;
      const meta = this._cachedMeta;
      const value = parsed[scale.axis];
      const stack = {
        keys: getSortedDatasetIndices(chart, true),
        values: parsed._stacks[scale.axis]._visualValues
      };
      return applyStack(stack, value, meta.index, {
        mode
      });
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      const parsedValue = parsed[scale.axis];
      let value = parsedValue === null ? NaN : parsedValue;
      const values = stack && parsed._stacks[scale.axis];
      if (stack && values) {
        stack.values = values;
        value = applyStack(stack, parsedValue, this._cachedMeta.index);
      }
      range.min = Math.min(range.min, value);
      range.max = Math.max(range.max, value);
    }
    getMinMax(scale, canStack) {
      const meta = this._cachedMeta;
      const _parsed = meta._parsed;
      const sorted = meta._sorted && scale === meta.iScale;
      const ilen = _parsed.length;
      const otherScale = this._getOtherScale(scale);
      const stack = createStack(canStack, meta, this.chart);
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      const { min: otherMin, max: otherMax } = getUserBounds(otherScale);
      let i2, parsed;
      function _skip() {
        parsed = _parsed[i2];
        const otherValue = parsed[otherScale.axis];
        return !isNumberFinite(parsed[scale.axis]) || otherMin > otherValue || otherMax < otherValue;
      }
      for (i2 = 0; i2 < ilen; ++i2) {
        if (_skip()) {
          continue;
        }
        this.updateRangeFromParsed(range, scale, parsed, stack);
        if (sorted) {
          break;
        }
      }
      if (sorted) {
        for (i2 = ilen - 1; i2 >= 0; --i2) {
          if (_skip()) {
            continue;
          }
          this.updateRangeFromParsed(range, scale, parsed, stack);
          break;
        }
      }
      return range;
    }
    getAllParsedValues(scale) {
      const parsed = this._cachedMeta._parsed;
      const values = [];
      let i2, ilen, value;
      for (i2 = 0, ilen = parsed.length; i2 < ilen; ++i2) {
        value = parsed[i2][scale.axis];
        if (isNumberFinite(value)) {
          values.push(value);
        }
      }
      return values;
    }
    getMaxOverflow() {
      return false;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const vScale = meta.vScale;
      const parsed = this.getParsed(index2);
      return {
        label: iScale ? "" + iScale.getLabelForValue(parsed[iScale.axis]) : "",
        value: vScale ? "" + vScale.getLabelForValue(parsed[vScale.axis]) : ""
      };
    }
    _update(mode) {
      const meta = this._cachedMeta;
      this.update(mode || "default");
      meta._clip = toClip(valueOrDefault(this.options.clip, defaultClip(meta.xScale, meta.yScale, this.getMaxOverflow())));
    }
    update(mode) {
    }
    draw() {
      const ctx = this._ctx;
      const chart = this.chart;
      const meta = this._cachedMeta;
      const elements2 = meta.data || [];
      const area = chart.chartArea;
      const active = [];
      const start = this._drawStart || 0;
      const count = this._drawCount || elements2.length - start;
      const drawActiveElementsOnTop = this.options.drawActiveElementsOnTop;
      let i2;
      if (meta.dataset) {
        meta.dataset.draw(ctx, area, start, count);
      }
      for (i2 = start; i2 < start + count; ++i2) {
        const element = elements2[i2];
        if (element.hidden) {
          continue;
        }
        if (element.active && drawActiveElementsOnTop) {
          active.push(element);
        } else {
          element.draw(ctx, area);
        }
      }
      for (i2 = 0; i2 < active.length; ++i2) {
        active[i2].draw(ctx, area);
      }
    }
    getStyle(index2, active) {
      const mode = active ? "active" : "default";
      return index2 === void 0 && this._cachedMeta.dataset ? this.resolveDatasetElementOptions(mode) : this.resolveDataElementOptions(index2 || 0, mode);
    }
    getContext(index2, active, mode) {
      const dataset = this.getDataset();
      let context;
      if (index2 >= 0 && index2 < this._cachedMeta.data.length) {
        const element = this._cachedMeta.data[index2];
        context = element.$context || (element.$context = createDataContext(this.getContext(), index2, element));
        context.parsed = this.getParsed(index2);
        context.raw = dataset.data[index2];
        context.index = context.dataIndex = index2;
      } else {
        context = this.$context || (this.$context = createDatasetContext(this.chart.getContext(), this.index));
        context.dataset = dataset;
        context.index = context.datasetIndex = this.index;
      }
      context.active = !!active;
      context.mode = mode;
      return context;
    }
    resolveDatasetElementOptions(mode) {
      return this._resolveElementOptions(this.datasetElementType.id, mode);
    }
    resolveDataElementOptions(index2, mode) {
      return this._resolveElementOptions(this.dataElementType.id, mode, index2);
    }
    _resolveElementOptions(elementType, mode = "default", index2) {
      const active = mode === "active";
      const cache = this._cachedDataOpts;
      const cacheKey = elementType + "-" + mode;
      const cached = cache[cacheKey];
      const sharing = this.enableOptionSharing && defined(index2);
      if (cached) {
        return cloneIfNotShared(cached, sharing);
      }
      const config = this.chart.config;
      const scopeKeys = config.datasetElementScopeKeys(this._type, elementType);
      const prefixes = active ? [
        `${elementType}Hover`,
        "hover",
        elementType,
        ""
      ] : [
        elementType,
        ""
      ];
      const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
      const names2 = Object.keys(defaults.elements[elementType]);
      const context = () => this.getContext(index2, active, mode);
      const values = config.resolveNamedOptions(scopes, names2, context, prefixes);
      if (values.$shared) {
        values.$shared = sharing;
        cache[cacheKey] = Object.freeze(cloneIfNotShared(values, sharing));
      }
      return values;
    }
    _resolveAnimations(index2, transition, active) {
      const chart = this.chart;
      const cache = this._cachedDataOpts;
      const cacheKey = `animation-${transition}`;
      const cached = cache[cacheKey];
      if (cached) {
        return cached;
      }
      let options;
      if (chart.options.animation !== false) {
        const config = this.chart.config;
        const scopeKeys = config.datasetAnimationScopeKeys(this._type, transition);
        const scopes = config.getOptionScopes(this.getDataset(), scopeKeys);
        options = config.createResolver(scopes, this.getContext(index2, active, transition));
      }
      const animations = new Animations(chart, options && options.animations);
      if (options && options._cacheable) {
        cache[cacheKey] = Object.freeze(animations);
      }
      return animations;
    }
    getSharedOptions(options) {
      if (!options.$shared) {
        return;
      }
      return this._sharedOptions || (this._sharedOptions = Object.assign({}, options));
    }
    includeOptions(mode, sharedOptions) {
      return !sharedOptions || isDirectUpdateMode(mode) || this.chart._animationsDisabled;
    }
    _getSharedOptions(start, mode) {
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const previouslySharedOptions = this._sharedOptions;
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions) || sharedOptions !== previouslySharedOptions;
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
      return {
        sharedOptions,
        includeOptions
      };
    }
    updateElement(element, index2, properties, mode) {
      if (isDirectUpdateMode(mode)) {
        Object.assign(element, properties);
      } else {
        this._resolveAnimations(index2, mode).update(element, properties);
      }
    }
    updateSharedOptions(sharedOptions, mode, newOptions) {
      if (sharedOptions && !isDirectUpdateMode(mode)) {
        this._resolveAnimations(void 0, mode).update(sharedOptions, newOptions);
      }
    }
    _setStyle(element, index2, mode, active) {
      element.active = active;
      const options = this.getStyle(index2, active);
      this._resolveAnimations(index2, mode, active).update(element, {
        options: !active && this.getSharedOptions(options) || options
      });
    }
    removeHoverStyle(element, datasetIndex, index2) {
      this._setStyle(element, index2, "active", false);
    }
    setHoverStyle(element, datasetIndex, index2) {
      this._setStyle(element, index2, "active", true);
    }
    _removeDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", false);
      }
    }
    _setDatasetHoverStyle() {
      const element = this._cachedMeta.dataset;
      if (element) {
        this._setStyle(element, void 0, "active", true);
      }
    }
    _resyncElements(resetNewElements) {
      const data = this._data;
      const elements2 = this._cachedMeta.data;
      for (const [method, arg1, arg2] of this._syncList) {
        this[method](arg1, arg2);
      }
      this._syncList = [];
      const numMeta = elements2.length;
      const numData = data.length;
      const count = Math.min(numData, numMeta);
      if (count) {
        this.parse(0, count);
      }
      if (numData > numMeta) {
        this._insertElements(numMeta, numData - numMeta, resetNewElements);
      } else if (numData < numMeta) {
        this._removeElements(numData, numMeta - numData);
      }
    }
    _insertElements(start, count, resetNewElements = true) {
      const meta = this._cachedMeta;
      const data = meta.data;
      const end = start + count;
      let i2;
      const move = (arr) => {
        arr.length += count;
        for (i2 = arr.length - 1; i2 >= end; i2--) {
          arr[i2] = arr[i2 - count];
        }
      };
      move(data);
      for (i2 = start; i2 < end; ++i2) {
        data[i2] = new this.dataElementType();
      }
      if (this._parsing) {
        move(meta._parsed);
      }
      this.parse(start, count);
      if (resetNewElements) {
        this.updateElements(data, start, count, "reset");
      }
    }
    updateElements(element, start, count, mode) {
    }
    _removeElements(start, count) {
      const meta = this._cachedMeta;
      if (this._parsing) {
        const removed = meta._parsed.splice(start, count);
        if (meta._stacked) {
          clearStacks(meta, removed);
        }
      }
      meta.data.splice(start, count);
    }
    _sync(args) {
      if (this._parsing) {
        this._syncList.push(args);
      } else {
        const [method, arg1, arg2] = args;
        this[method](arg1, arg2);
      }
      this.chart._dataChanges.push([
        this.index,
        ...args
      ]);
    }
    _onDataPush() {
      const count = arguments.length;
      this._sync([
        "_insertElements",
        this.getDataset().data.length - count,
        count
      ]);
    }
    _onDataPop() {
      this._sync([
        "_removeElements",
        this._cachedMeta.data.length - 1,
        1
      ]);
    }
    _onDataShift() {
      this._sync([
        "_removeElements",
        0,
        1
      ]);
    }
    _onDataSplice(start, count) {
      if (count) {
        this._sync([
          "_removeElements",
          start,
          count
        ]);
      }
      const newCount = arguments.length - 2;
      if (newCount) {
        this._sync([
          "_insertElements",
          start,
          newCount
        ]);
      }
    }
    _onDataUnshift() {
      this._sync([
        "_insertElements",
        0,
        arguments.length
      ]);
    }
  };
  function getAllScaleValues(scale, type) {
    if (!scale._cache.$bar) {
      const visibleMetas = scale.getMatchingVisibleMetas(type);
      let values = [];
      for (let i2 = 0, ilen = visibleMetas.length; i2 < ilen; i2++) {
        values = values.concat(visibleMetas[i2].controller.getAllParsedValues(scale));
      }
      scale._cache.$bar = _arrayUnique(values.sort((a2, b2) => a2 - b2));
    }
    return scale._cache.$bar;
  }
  function computeMinSampleSize(meta) {
    const scale = meta.iScale;
    const values = getAllScaleValues(scale, meta.type);
    let min = scale._length;
    let i2, ilen, curr, prev;
    const updateMinAndPrev = () => {
      if (curr === 32767 || curr === -32768) {
        return;
      }
      if (defined(prev)) {
        min = Math.min(min, Math.abs(curr - prev) || min);
      }
      prev = curr;
    };
    for (i2 = 0, ilen = values.length; i2 < ilen; ++i2) {
      curr = scale.getPixelForValue(values[i2]);
      updateMinAndPrev();
    }
    prev = void 0;
    for (i2 = 0, ilen = scale.ticks.length; i2 < ilen; ++i2) {
      curr = scale.getPixelForTick(i2);
      updateMinAndPrev();
    }
    return min;
  }
  function computeFitCategoryTraits(index2, ruler, options, stackCount) {
    const thickness = options.barThickness;
    let size, ratio;
    if (isNullOrUndef(thickness)) {
      size = ruler.min * options.categoryPercentage;
      ratio = options.barPercentage;
    } else {
      size = thickness * stackCount;
      ratio = 1;
    }
    return {
      chunk: size / stackCount,
      ratio,
      start: ruler.pixels[index2] - size / 2
    };
  }
  function computeFlexCategoryTraits(index2, ruler, options, stackCount) {
    const pixels = ruler.pixels;
    const curr = pixels[index2];
    let prev = index2 > 0 ? pixels[index2 - 1] : null;
    let next = index2 < pixels.length - 1 ? pixels[index2 + 1] : null;
    const percent = options.categoryPercentage;
    if (prev === null) {
      prev = curr - (next === null ? ruler.end - ruler.start : next - curr);
    }
    if (next === null) {
      next = curr + curr - prev;
    }
    const start = curr - (curr - Math.min(prev, next)) / 2 * percent;
    const size = Math.abs(next - prev) / 2 * percent;
    return {
      chunk: size / stackCount,
      ratio: options.barPercentage,
      start
    };
  }
  function parseFloatBar(entry, item, vScale, i2) {
    const startValue = vScale.parse(entry[0], i2);
    const endValue = vScale.parse(entry[1], i2);
    const min = Math.min(startValue, endValue);
    const max = Math.max(startValue, endValue);
    let barStart = min;
    let barEnd = max;
    if (Math.abs(min) > Math.abs(max)) {
      barStart = max;
      barEnd = min;
    }
    item[vScale.axis] = barEnd;
    item._custom = {
      barStart,
      barEnd,
      start: startValue,
      end: endValue,
      min,
      max
    };
  }
  function parseValue(entry, item, vScale, i2) {
    if (isArray(entry)) {
      parseFloatBar(entry, item, vScale, i2);
    } else {
      item[vScale.axis] = vScale.parse(entry, i2);
    }
    return item;
  }
  function parseArrayOrPrimitive(meta, data, start, count) {
    const iScale = meta.iScale;
    const vScale = meta.vScale;
    const labels = iScale.getLabels();
    const singleScale = iScale === vScale;
    const parsed = [];
    let i2, ilen, item, entry;
    for (i2 = start, ilen = start + count; i2 < ilen; ++i2) {
      entry = data[i2];
      item = {};
      item[iScale.axis] = singleScale || iScale.parse(labels[i2], i2);
      parsed.push(parseValue(entry, item, vScale, i2));
    }
    return parsed;
  }
  function isFloatBar(custom) {
    return custom && custom.barStart !== void 0 && custom.barEnd !== void 0;
  }
  function barSign(size, vScale, actualBase) {
    if (size !== 0) {
      return sign(size);
    }
    return (vScale.isHorizontal() ? 1 : -1) * (vScale.min >= actualBase ? 1 : -1);
  }
  function borderProps(properties) {
    let reverse, start, end, top, bottom;
    if (properties.horizontal) {
      reverse = properties.base > properties.x;
      start = "left";
      end = "right";
    } else {
      reverse = properties.base < properties.y;
      start = "bottom";
      end = "top";
    }
    if (reverse) {
      top = "end";
      bottom = "start";
    } else {
      top = "start";
      bottom = "end";
    }
    return {
      start,
      end,
      reverse,
      top,
      bottom
    };
  }
  function setBorderSkipped(properties, options, stack, index2) {
    let edge = options.borderSkipped;
    const res = {};
    if (!edge) {
      properties.borderSkipped = res;
      return;
    }
    if (edge === true) {
      properties.borderSkipped = {
        top: true,
        right: true,
        bottom: true,
        left: true
      };
      return;
    }
    const { start, end, reverse, top, bottom } = borderProps(properties);
    if (edge === "middle" && stack) {
      properties.enableBorderRadius = true;
      if ((stack._top || 0) === index2) {
        edge = top;
      } else if ((stack._bottom || 0) === index2) {
        edge = bottom;
      } else {
        res[parseEdge(bottom, start, end, reverse)] = true;
        edge = top;
      }
    }
    res[parseEdge(edge, start, end, reverse)] = true;
    properties.borderSkipped = res;
  }
  function parseEdge(edge, a2, b2, reverse) {
    if (reverse) {
      edge = swap(edge, a2, b2);
      edge = startEnd(edge, b2, a2);
    } else {
      edge = startEnd(edge, a2, b2);
    }
    return edge;
  }
  function swap(orig, v1, v2) {
    return orig === v1 ? v2 : orig === v2 ? v1 : orig;
  }
  function startEnd(v2, start, end) {
    return v2 === "start" ? start : v2 === "end" ? end : v2;
  }
  function setInflateAmount(properties, { inflateAmount }, ratio) {
    properties.inflateAmount = inflateAmount === "auto" ? ratio === 1 ? 0.33 : 0 : inflateAmount;
  }
  var BarController = class extends DatasetController {
    static id = "bar";
    static defaults = {
      datasetElementType: false,
      dataElementType: "bar",
      categoryPercentage: 0.8,
      barPercentage: 0.9,
      grouped: true,
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "base",
            "width",
            "height"
          ]
        }
      }
    };
    static overrides = {
      scales: {
        _index_: {
          type: "category",
          offset: true,
          grid: {
            offset: true
          }
        },
        _value_: {
          type: "linear",
          beginAtZero: true
        }
      }
    };
    parsePrimitiveData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseArrayData(meta, data, start, count) {
      return parseArrayOrPrimitive(meta, data, start, count);
    }
    parseObjectData(meta, data, start, count) {
      const { iScale, vScale } = meta;
      const { xAxisKey = "x", yAxisKey = "y" } = this._parsing;
      const iAxisKey = iScale.axis === "x" ? xAxisKey : yAxisKey;
      const vAxisKey = vScale.axis === "x" ? xAxisKey : yAxisKey;
      const parsed = [];
      let i2, ilen, item, obj;
      for (i2 = start, ilen = start + count; i2 < ilen; ++i2) {
        obj = data[i2];
        item = {};
        item[iScale.axis] = iScale.parse(resolveObjectKey(obj, iAxisKey), i2);
        parsed.push(parseValue(resolveObjectKey(obj, vAxisKey), item, vScale, i2));
      }
      return parsed;
    }
    updateRangeFromParsed(range, scale, parsed, stack) {
      super.updateRangeFromParsed(range, scale, parsed, stack);
      const custom = parsed._custom;
      if (custom && scale === this._cachedMeta.vScale) {
        range.min = Math.min(range.min, custom.min);
        range.max = Math.max(range.max, custom.max);
      }
    }
    getMaxOverflow() {
      return 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const { iScale, vScale } = meta;
      const parsed = this.getParsed(index2);
      const custom = parsed._custom;
      const value = isFloatBar(custom) ? "[" + custom.start + ", " + custom.end + "]" : "" + vScale.getLabelForValue(parsed[vScale.axis]);
      return {
        label: "" + iScale.getLabelForValue(parsed[iScale.axis]),
        value
      };
    }
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
      const meta = this._cachedMeta;
      meta.stack = this.getDataset().stack;
    }
    update(mode) {
      const meta = this._cachedMeta;
      this.updateElements(meta.data, 0, meta.data.length, mode);
    }
    updateElements(bars, start, count, mode) {
      const reset = mode === "reset";
      const { index: index2, _cachedMeta: { vScale } } = this;
      const base = vScale.getBasePixel();
      const horizontal = vScale.isHorizontal();
      const ruler = this._getRuler();
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      for (let i2 = start; i2 < start + count; i2++) {
        const parsed = this.getParsed(i2);
        const vpixels = reset || isNullOrUndef(parsed[vScale.axis]) ? {
          base,
          head: base
        } : this._calculateBarValuePixels(i2);
        const ipixels = this._calculateBarIndexPixels(i2, ruler);
        const stack = (parsed._stacks || {})[vScale.axis];
        const properties = {
          horizontal,
          base: vpixels.base,
          enableBorderRadius: !stack || isFloatBar(parsed._custom) || index2 === stack._top || index2 === stack._bottom,
          x: horizontal ? vpixels.head : ipixels.center,
          y: horizontal ? ipixels.center : vpixels.head,
          height: horizontal ? ipixels.size : Math.abs(vpixels.size),
          width: horizontal ? Math.abs(vpixels.size) : ipixels.size
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, bars[i2].active ? "active" : mode);
        }
        const options = properties.options || bars[i2].options;
        setBorderSkipped(properties, options, stack, index2);
        setInflateAmount(properties, options, ruler.ratio);
        this.updateElement(bars[i2], i2, properties, mode);
      }
    }
    _getStacks(last, dataIndex) {
      const { iScale } = this._cachedMeta;
      const metasets = iScale.getMatchingVisibleMetas(this._type).filter((meta) => meta.controller.options.grouped);
      const stacked = iScale.options.stacked;
      const stacks = [];
      const skipNull = (meta) => {
        const parsed = meta.controller.getParsed(dataIndex);
        const val = parsed && parsed[meta.vScale.axis];
        if (isNullOrUndef(val) || isNaN(val)) {
          return true;
        }
      };
      for (const meta of metasets) {
        if (dataIndex !== void 0 && skipNull(meta)) {
          continue;
        }
        if (stacked === false || stacks.indexOf(meta.stack) === -1 || stacked === void 0 && meta.stack === void 0) {
          stacks.push(meta.stack);
        }
        if (meta.index === last) {
          break;
        }
      }
      if (!stacks.length) {
        stacks.push(void 0);
      }
      return stacks;
    }
    _getStackCount(index2) {
      return this._getStacks(void 0, index2).length;
    }
    _getStackIndex(datasetIndex, name, dataIndex) {
      const stacks = this._getStacks(datasetIndex, dataIndex);
      const index2 = name !== void 0 ? stacks.indexOf(name) : -1;
      return index2 === -1 ? stacks.length - 1 : index2;
    }
    _getRuler() {
      const opts = this.options;
      const meta = this._cachedMeta;
      const iScale = meta.iScale;
      const pixels = [];
      let i2, ilen;
      for (i2 = 0, ilen = meta.data.length; i2 < ilen; ++i2) {
        pixels.push(iScale.getPixelForValue(this.getParsed(i2)[iScale.axis], i2));
      }
      const barThickness = opts.barThickness;
      const min = barThickness || computeMinSampleSize(meta);
      return {
        min,
        pixels,
        start: iScale._startPixel,
        end: iScale._endPixel,
        stackCount: this._getStackCount(),
        scale: iScale,
        grouped: opts.grouped,
        ratio: barThickness ? 1 : opts.categoryPercentage * opts.barPercentage
      };
    }
    _calculateBarValuePixels(index2) {
      const { _cachedMeta: { vScale, _stacked, index: datasetIndex }, options: { base: baseValue, minBarLength } } = this;
      const actualBase = baseValue || 0;
      const parsed = this.getParsed(index2);
      const custom = parsed._custom;
      const floating = isFloatBar(custom);
      let value = parsed[vScale.axis];
      let start = 0;
      let length = _stacked ? this.applyStack(vScale, parsed, _stacked) : value;
      let head, size;
      if (length !== value) {
        start = length - value;
        length = value;
      }
      if (floating) {
        value = custom.barStart;
        length = custom.barEnd - custom.barStart;
        if (value !== 0 && sign(value) !== sign(custom.barEnd)) {
          start = 0;
        }
        start += value;
      }
      const startValue = !isNullOrUndef(baseValue) && !floating ? baseValue : start;
      let base = vScale.getPixelForValue(startValue);
      if (this.chart.getDataVisibility(index2)) {
        head = vScale.getPixelForValue(start + length);
      } else {
        head = base;
      }
      size = head - base;
      if (Math.abs(size) < minBarLength) {
        size = barSign(size, vScale, actualBase) * minBarLength;
        if (value === actualBase) {
          base -= size / 2;
        }
        const startPixel = vScale.getPixelForDecimal(0);
        const endPixel = vScale.getPixelForDecimal(1);
        const min = Math.min(startPixel, endPixel);
        const max = Math.max(startPixel, endPixel);
        base = Math.max(Math.min(base, max), min);
        head = base + size;
        if (_stacked && !floating) {
          parsed._stacks[vScale.axis]._visualValues[datasetIndex] = vScale.getValueForPixel(head) - vScale.getValueForPixel(base);
        }
      }
      if (base === vScale.getPixelForValue(actualBase)) {
        const halfGrid = sign(size) * vScale.getLineWidthForValue(actualBase) / 2;
        base += halfGrid;
        size -= halfGrid;
      }
      return {
        size,
        base,
        head,
        center: head + size / 2
      };
    }
    _calculateBarIndexPixels(index2, ruler) {
      const scale = ruler.scale;
      const options = this.options;
      const skipNull = options.skipNull;
      const maxBarThickness = valueOrDefault(options.maxBarThickness, Infinity);
      let center, size;
      if (ruler.grouped) {
        const stackCount = skipNull ? this._getStackCount(index2) : ruler.stackCount;
        const range = options.barThickness === "flex" ? computeFlexCategoryTraits(index2, ruler, options, stackCount) : computeFitCategoryTraits(index2, ruler, options, stackCount);
        const stackIndex = this._getStackIndex(this.index, this._cachedMeta.stack, skipNull ? index2 : void 0);
        center = range.start + range.chunk * stackIndex + range.chunk / 2;
        size = Math.min(maxBarThickness, range.chunk * range.ratio);
      } else {
        center = scale.getPixelForValue(this.getParsed(index2)[scale.axis], index2);
        size = Math.min(maxBarThickness, ruler.min * ruler.ratio);
      }
      return {
        base: center - size / 2,
        head: center + size / 2,
        center,
        size
      };
    }
    draw() {
      const meta = this._cachedMeta;
      const vScale = meta.vScale;
      const rects = meta.data;
      const ilen = rects.length;
      let i2 = 0;
      for (; i2 < ilen; ++i2) {
        if (this.getParsed(i2)[vScale.axis] !== null) {
          rects[i2].draw(this._ctx);
        }
      }
    }
  };
  var BubbleController = class extends DatasetController {
    static id = "bubble";
    static defaults = {
      datasetElementType: false,
      dataElementType: "point",
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "borderWidth",
            "radius"
          ]
        }
      }
    };
    static overrides = {
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    };
    initialize() {
      this.enableOptionSharing = true;
      super.initialize();
    }
    parsePrimitiveData(meta, data, start, count) {
      const parsed = super.parsePrimitiveData(meta, data, start, count);
      for (let i2 = 0; i2 < parsed.length; i2++) {
        parsed[i2]._custom = this.resolveDataElementOptions(i2 + start).radius;
      }
      return parsed;
    }
    parseArrayData(meta, data, start, count) {
      const parsed = super.parseArrayData(meta, data, start, count);
      for (let i2 = 0; i2 < parsed.length; i2++) {
        const item = data[start + i2];
        parsed[i2]._custom = valueOrDefault(item[2], this.resolveDataElementOptions(i2 + start).radius);
      }
      return parsed;
    }
    parseObjectData(meta, data, start, count) {
      const parsed = super.parseObjectData(meta, data, start, count);
      for (let i2 = 0; i2 < parsed.length; i2++) {
        const item = data[start + i2];
        parsed[i2]._custom = valueOrDefault(item && item.r && +item.r, this.resolveDataElementOptions(i2 + start).radius);
      }
      return parsed;
    }
    getMaxOverflow() {
      const data = this._cachedMeta.data;
      let max = 0;
      for (let i2 = data.length - 1; i2 >= 0; --i2) {
        max = Math.max(max, data[i2].size(this.resolveDataElementOptions(i2)) / 2);
      }
      return max > 0 && max;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const { xScale, yScale } = meta;
      const parsed = this.getParsed(index2);
      const x2 = xScale.getLabelForValue(parsed.x);
      const y2 = yScale.getLabelForValue(parsed.y);
      const r2 = parsed._custom;
      return {
        label: labels[index2] || "",
        value: "(" + x2 + ", " + y2 + (r2 ? ", " + r2 : "") + ")"
      };
    }
    update(mode) {
      const points = this._cachedMeta.data;
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale } = this._cachedMeta;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      for (let i2 = start; i2 < start + count; i2++) {
        const point = points[i2];
        const parsed = !reset && this.getParsed(i2);
        const properties = {};
        const iPixel = properties[iAxis] = reset ? iScale.getPixelForDecimal(0.5) : iScale.getPixelForValue(parsed[iAxis]);
        const vPixel = properties[vAxis] = reset ? vScale.getBasePixel() : vScale.getPixelForValue(parsed[vAxis]);
        properties.skip = isNaN(iPixel) || isNaN(vPixel);
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, point.active ? "active" : mode);
          if (reset) {
            properties.options.radius = 0;
          }
        }
        this.updateElement(point, i2, properties, mode);
      }
    }
    resolveDataElementOptions(index2, mode) {
      const parsed = this.getParsed(index2);
      let values = super.resolveDataElementOptions(index2, mode);
      if (values.$shared) {
        values = Object.assign({}, values, {
          $shared: false
        });
      }
      const radius = values.radius;
      if (mode !== "active") {
        values.radius = 0;
      }
      values.radius += valueOrDefault(parsed && parsed._custom, radius);
      return values;
    }
  };
  function getRatioAndOffset(rotation, circumference, cutout) {
    let ratioX = 1;
    let ratioY = 1;
    let offsetX = 0;
    let offsetY = 0;
    if (circumference < TAU) {
      const startAngle = rotation;
      const endAngle = startAngle + circumference;
      const startX = Math.cos(startAngle);
      const startY = Math.sin(startAngle);
      const endX = Math.cos(endAngle);
      const endY = Math.sin(endAngle);
      const calcMax = (angle, a2, b2) => _angleBetween(angle, startAngle, endAngle, true) ? 1 : Math.max(a2, a2 * cutout, b2, b2 * cutout);
      const calcMin = (angle, a2, b2) => _angleBetween(angle, startAngle, endAngle, true) ? -1 : Math.min(a2, a2 * cutout, b2, b2 * cutout);
      const maxX = calcMax(0, startX, endX);
      const maxY = calcMax(HALF_PI, startY, endY);
      const minX = calcMin(PI, startX, endX);
      const minY = calcMin(PI + HALF_PI, startY, endY);
      ratioX = (maxX - minX) / 2;
      ratioY = (maxY - minY) / 2;
      offsetX = -(maxX + minX) / 2;
      offsetY = -(maxY + minY) / 2;
    }
    return {
      ratioX,
      ratioY,
      offsetX,
      offsetY
    };
  }
  var DoughnutController = class extends DatasetController {
    static id = "doughnut";
    static defaults = {
      datasetElementType: false,
      dataElementType: "arc",
      animation: {
        animateRotate: true,
        animateScale: false
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "circumference",
            "endAngle",
            "innerRadius",
            "outerRadius",
            "startAngle",
            "x",
            "y",
            "offset",
            "borderWidth",
            "spacing"
          ]
        }
      },
      cutout: "50%",
      rotation: 0,
      circumference: 360,
      radius: "100%",
      spacing: 0,
      indexAxis: "r"
    };
    static descriptors = {
      _scriptable: (name) => name !== "spacing",
      _indexable: (name) => name !== "spacing" && !name.startsWith("borderDash") && !name.startsWith("hoverBorderDash")
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                const { labels: { pointStyle, color: color2 } } = chart.legend.options;
                return data.labels.map((label, i2) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(i2);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    fontColor: color2,
                    lineWidth: style.borderWidth,
                    pointStyle,
                    hidden: !chart.getDataVisibility(i2),
                    index: i2
                  };
                });
              }
              return [];
            }
          },
          onClick(e2, legendItem, legend) {
            legend.chart.toggleDataVisibility(legendItem.index);
            legend.chart.update();
          }
        }
      }
    };
    constructor(chart, datasetIndex) {
      super(chart, datasetIndex);
      this.enableOptionSharing = true;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.offsetX = void 0;
      this.offsetY = void 0;
    }
    linkScales() {
    }
    parse(start, count) {
      const data = this.getDataset().data;
      const meta = this._cachedMeta;
      if (this._parsing === false) {
        meta._parsed = data;
      } else {
        let getter = (i3) => +data[i3];
        if (isObject(data[start])) {
          const { key = "value" } = this._parsing;
          getter = (i3) => +resolveObjectKey(data[i3], key);
        }
        let i2, ilen;
        for (i2 = start, ilen = start + count; i2 < ilen; ++i2) {
          meta._parsed[i2] = getter(i2);
        }
      }
    }
    _getRotation() {
      return toRadians(this.options.rotation - 90);
    }
    _getCircumference() {
      return toRadians(this.options.circumference);
    }
    _getRotationExtents() {
      let min = TAU;
      let max = -TAU;
      for (let i2 = 0; i2 < this.chart.data.datasets.length; ++i2) {
        if (this.chart.isDatasetVisible(i2) && this.chart.getDatasetMeta(i2).type === this._type) {
          const controller = this.chart.getDatasetMeta(i2).controller;
          const rotation = controller._getRotation();
          const circumference = controller._getCircumference();
          min = Math.min(min, rotation);
          max = Math.max(max, rotation + circumference);
        }
      }
      return {
        rotation: min,
        circumference: max - min
      };
    }
    update(mode) {
      const chart = this.chart;
      const { chartArea } = chart;
      const meta = this._cachedMeta;
      const arcs = meta.data;
      const spacing = this.getMaxBorderWidth() + this.getMaxOffset(arcs) + this.options.spacing;
      const maxSize = Math.max((Math.min(chartArea.width, chartArea.height) - spacing) / 2, 0);
      const cutout = Math.min(toPercentage(this.options.cutout, maxSize), 1);
      const chartWeight = this._getRingWeight(this.index);
      const { circumference, rotation } = this._getRotationExtents();
      const { ratioX, ratioY, offsetX, offsetY } = getRatioAndOffset(rotation, circumference, cutout);
      const maxWidth = (chartArea.width - spacing) / ratioX;
      const maxHeight = (chartArea.height - spacing) / ratioY;
      const maxRadius = Math.max(Math.min(maxWidth, maxHeight) / 2, 0);
      const outerRadius = toDimension(this.options.radius, maxRadius);
      const innerRadius = Math.max(outerRadius * cutout, 0);
      const radiusLength = (outerRadius - innerRadius) / this._getVisibleDatasetWeightTotal();
      this.offsetX = offsetX * outerRadius;
      this.offsetY = offsetY * outerRadius;
      meta.total = this.calculateTotal();
      this.outerRadius = outerRadius - radiusLength * this._getRingWeightOffset(this.index);
      this.innerRadius = Math.max(this.outerRadius - radiusLength * chartWeight, 0);
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    _circumference(i2, reset) {
      const opts = this.options;
      const meta = this._cachedMeta;
      const circumference = this._getCircumference();
      if (reset && opts.animation.animateRotate || !this.chart.getDataVisibility(i2) || meta._parsed[i2] === null || meta.data[i2].hidden) {
        return 0;
      }
      return this.calculateCircumference(meta._parsed[i2] * circumference / TAU);
    }
    updateElements(arcs, start, count, mode) {
      const reset = mode === "reset";
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const centerX = (chartArea.left + chartArea.right) / 2;
      const centerY = (chartArea.top + chartArea.bottom) / 2;
      const animateScale = reset && animationOpts.animateScale;
      const innerRadius = animateScale ? 0 : this.innerRadius;
      const outerRadius = animateScale ? 0 : this.outerRadius;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      let startAngle = this._getRotation();
      let i2;
      for (i2 = 0; i2 < start; ++i2) {
        startAngle += this._circumference(i2, reset);
      }
      for (i2 = start; i2 < start + count; ++i2) {
        const circumference = this._circumference(i2, reset);
        const arc = arcs[i2];
        const properties = {
          x: centerX + this.offsetX,
          y: centerY + this.offsetY,
          startAngle,
          endAngle: startAngle + circumference,
          circumference,
          outerRadius,
          innerRadius
        };
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, arc.active ? "active" : mode);
        }
        startAngle += circumference;
        this.updateElement(arc, i2, properties, mode);
      }
    }
    calculateTotal() {
      const meta = this._cachedMeta;
      const metaData = meta.data;
      let total = 0;
      let i2;
      for (i2 = 0; i2 < metaData.length; i2++) {
        const value = meta._parsed[i2];
        if (value !== null && !isNaN(value) && this.chart.getDataVisibility(i2) && !metaData[i2].hidden) {
          total += Math.abs(value);
        }
      }
      return total;
    }
    calculateCircumference(value) {
      const total = this._cachedMeta.total;
      if (total > 0 && !isNaN(value)) {
        return TAU * (Math.abs(value) / total);
      }
      return 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = formatNumber(meta._parsed[index2], chart.options.locale);
      return {
        label: labels[index2] || "",
        value
      };
    }
    getMaxBorderWidth(arcs) {
      let max = 0;
      const chart = this.chart;
      let i2, ilen, meta, controller, options;
      if (!arcs) {
        for (i2 = 0, ilen = chart.data.datasets.length; i2 < ilen; ++i2) {
          if (chart.isDatasetVisible(i2)) {
            meta = chart.getDatasetMeta(i2);
            arcs = meta.data;
            controller = meta.controller;
            break;
          }
        }
      }
      if (!arcs) {
        return 0;
      }
      for (i2 = 0, ilen = arcs.length; i2 < ilen; ++i2) {
        options = controller.resolveDataElementOptions(i2);
        if (options.borderAlign !== "inner") {
          max = Math.max(max, options.borderWidth || 0, options.hoverBorderWidth || 0);
        }
      }
      return max;
    }
    getMaxOffset(arcs) {
      let max = 0;
      for (let i2 = 0, ilen = arcs.length; i2 < ilen; ++i2) {
        const options = this.resolveDataElementOptions(i2);
        max = Math.max(max, options.offset || 0, options.hoverOffset || 0);
      }
      return max;
    }
    _getRingWeightOffset(datasetIndex) {
      let ringWeightOffset = 0;
      for (let i2 = 0; i2 < datasetIndex; ++i2) {
        if (this.chart.isDatasetVisible(i2)) {
          ringWeightOffset += this._getRingWeight(i2);
        }
      }
      return ringWeightOffset;
    }
    _getRingWeight(datasetIndex) {
      return Math.max(valueOrDefault(this.chart.data.datasets[datasetIndex].weight, 1), 0);
    }
    _getVisibleDatasetWeightTotal() {
      return this._getRingWeightOffset(this.chart.data.datasets.length) || 1;
    }
  };
  var LineController = class extends DatasetController {
    static id = "line";
    static defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      showLine: true,
      spanGaps: false
    };
    static overrides = {
      scales: {
        _index_: {
          type: "category"
        },
        _value_: {
          type: "linear"
        }
      }
    };
    initialize() {
      this.enableOptionSharing = true;
      this.supportsDecimation = true;
      super.initialize();
    }
    update(mode) {
      const meta = this._cachedMeta;
      const { dataset: line, data: points = [], _dataset } = meta;
      const animationsDisabled = this.chart._animationsDisabled;
      let { start, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
      this._drawStart = start;
      this._drawCount = count;
      if (_scaleRangesChanged(meta)) {
        start = 0;
        count = points.length;
      }
      line._chart = this.chart;
      line._datasetIndex = this.index;
      line._decimated = !!_dataset._decimated;
      line.points = points;
      const options = this.resolveDatasetElementOptions(mode);
      if (!this.options.showLine) {
        options.borderWidth = 0;
      }
      options.segment = this.options.segment;
      this.updateElement(line, void 0, {
        animated: !animationsDisabled,
        options
      }, mode);
      this.updateElements(points, start, count, mode);
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
      const { sharedOptions, includeOptions } = this._getSharedOptions(start, mode);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const { spanGaps, segment } = this.options;
      const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
      const end = start + count;
      const pointsCount = points.length;
      let prevParsed = start > 0 && this.getParsed(start - 1);
      for (let i2 = 0; i2 < pointsCount; ++i2) {
        const point = points[i2];
        const properties = directUpdate ? point : {};
        if (i2 < start || i2 >= end) {
          properties.skip = true;
          continue;
        }
        const parsed = this.getParsed(i2);
        const nullData = isNullOrUndef(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i2);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i2);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i2 > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i2];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, point.active ? "active" : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i2, properties, mode);
        }
        prevParsed = parsed;
      }
    }
    getMaxOverflow() {
      const meta = this._cachedMeta;
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      const data = meta.data || [];
      if (!data.length) {
        return border;
      }
      const firstPoint = data[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
    draw() {
      const meta = this._cachedMeta;
      meta.dataset.updateControlPoints(this.chart.chartArea, meta.iScale.axis);
      super.draw();
    }
  };
  var PolarAreaController = class extends DatasetController {
    static id = "polarArea";
    static defaults = {
      dataElementType: "arc",
      animation: {
        animateRotate: true,
        animateScale: true
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "startAngle",
            "endAngle",
            "innerRadius",
            "outerRadius"
          ]
        }
      },
      indexAxis: "r",
      startAngle: 0
    };
    static overrides = {
      aspectRatio: 1,
      plugins: {
        legend: {
          labels: {
            generateLabels(chart) {
              const data = chart.data;
              if (data.labels.length && data.datasets.length) {
                const { labels: { pointStyle, color: color2 } } = chart.legend.options;
                return data.labels.map((label, i2) => {
                  const meta = chart.getDatasetMeta(0);
                  const style = meta.controller.getStyle(i2);
                  return {
                    text: label,
                    fillStyle: style.backgroundColor,
                    strokeStyle: style.borderColor,
                    fontColor: color2,
                    lineWidth: style.borderWidth,
                    pointStyle,
                    hidden: !chart.getDataVisibility(i2),
                    index: i2
                  };
                });
              }
              return [];
            }
          },
          onClick(e2, legendItem, legend) {
            legend.chart.toggleDataVisibility(legendItem.index);
            legend.chart.update();
          }
        }
      },
      scales: {
        r: {
          type: "radialLinear",
          angleLines: {
            display: false
          },
          beginAtZero: true,
          grid: {
            circular: true
          },
          pointLabels: {
            display: false
          },
          startAngle: 0
        }
      }
    };
    constructor(chart, datasetIndex) {
      super(chart, datasetIndex);
      this.innerRadius = void 0;
      this.outerRadius = void 0;
    }
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const chart = this.chart;
      const labels = chart.data.labels || [];
      const value = formatNumber(meta._parsed[index2].r, chart.options.locale);
      return {
        label: labels[index2] || "",
        value
      };
    }
    parseObjectData(meta, data, start, count) {
      return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
      const arcs = this._cachedMeta.data;
      this._updateRadius();
      this.updateElements(arcs, 0, arcs.length, mode);
    }
    getMinMax() {
      const meta = this._cachedMeta;
      const range = {
        min: Number.POSITIVE_INFINITY,
        max: Number.NEGATIVE_INFINITY
      };
      meta.data.forEach((element, index2) => {
        const parsed = this.getParsed(index2).r;
        if (!isNaN(parsed) && this.chart.getDataVisibility(index2)) {
          if (parsed < range.min) {
            range.min = parsed;
          }
          if (parsed > range.max) {
            range.max = parsed;
          }
        }
      });
      return range;
    }
    _updateRadius() {
      const chart = this.chart;
      const chartArea = chart.chartArea;
      const opts = chart.options;
      const minSize = Math.min(chartArea.right - chartArea.left, chartArea.bottom - chartArea.top);
      const outerRadius = Math.max(minSize / 2, 0);
      const innerRadius = Math.max(opts.cutoutPercentage ? outerRadius / 100 * opts.cutoutPercentage : 1, 0);
      const radiusLength = (outerRadius - innerRadius) / chart.getVisibleDatasetCount();
      this.outerRadius = outerRadius - radiusLength * this.index;
      this.innerRadius = this.outerRadius - radiusLength;
    }
    updateElements(arcs, start, count, mode) {
      const reset = mode === "reset";
      const chart = this.chart;
      const opts = chart.options;
      const animationOpts = opts.animation;
      const scale = this._cachedMeta.rScale;
      const centerX = scale.xCenter;
      const centerY = scale.yCenter;
      const datasetStartAngle = scale.getIndexAngle(0) - 0.5 * PI;
      let angle = datasetStartAngle;
      let i2;
      const defaultAngle = 360 / this.countVisibleElements();
      for (i2 = 0; i2 < start; ++i2) {
        angle += this._computeAngle(i2, mode, defaultAngle);
      }
      for (i2 = start; i2 < start + count; i2++) {
        const arc = arcs[i2];
        let startAngle = angle;
        let endAngle = angle + this._computeAngle(i2, mode, defaultAngle);
        let outerRadius = chart.getDataVisibility(i2) ? scale.getDistanceFromCenterForValue(this.getParsed(i2).r) : 0;
        angle = endAngle;
        if (reset) {
          if (animationOpts.animateScale) {
            outerRadius = 0;
          }
          if (animationOpts.animateRotate) {
            startAngle = endAngle = datasetStartAngle;
          }
        }
        const properties = {
          x: centerX,
          y: centerY,
          innerRadius: 0,
          outerRadius,
          startAngle,
          endAngle,
          options: this.resolveDataElementOptions(i2, arc.active ? "active" : mode)
        };
        this.updateElement(arc, i2, properties, mode);
      }
    }
    countVisibleElements() {
      const meta = this._cachedMeta;
      let count = 0;
      meta.data.forEach((element, index2) => {
        if (!isNaN(this.getParsed(index2).r) && this.chart.getDataVisibility(index2)) {
          count++;
        }
      });
      return count;
    }
    _computeAngle(index2, mode, defaultAngle) {
      return this.chart.getDataVisibility(index2) ? toRadians(this.resolveDataElementOptions(index2, mode).angle || defaultAngle) : 0;
    }
  };
  var PieController = class extends DoughnutController {
    static id = "pie";
    static defaults = {
      cutout: 0,
      rotation: 0,
      circumference: 360,
      radius: "100%"
    };
  };
  var RadarController = class extends DatasetController {
    static id = "radar";
    static defaults = {
      datasetElementType: "line",
      dataElementType: "point",
      indexAxis: "r",
      showLine: true,
      elements: {
        line: {
          fill: "start"
        }
      }
    };
    static overrides = {
      aspectRatio: 1,
      scales: {
        r: {
          type: "radialLinear"
        }
      }
    };
    getLabelAndValue(index2) {
      const vScale = this._cachedMeta.vScale;
      const parsed = this.getParsed(index2);
      return {
        label: vScale.getLabels()[index2],
        value: "" + vScale.getLabelForValue(parsed[vScale.axis])
      };
    }
    parseObjectData(meta, data, start, count) {
      return _parseObjectDataRadialScale.bind(this)(meta, data, start, count);
    }
    update(mode) {
      const meta = this._cachedMeta;
      const line = meta.dataset;
      const points = meta.data || [];
      const labels = meta.iScale.getLabels();
      line.points = points;
      if (mode !== "resize") {
        const options = this.resolveDatasetElementOptions(mode);
        if (!this.options.showLine) {
          options.borderWidth = 0;
        }
        const properties = {
          _loop: true,
          _fullLoop: labels.length === points.length,
          options
        };
        this.updateElement(line, void 0, properties, mode);
      }
      this.updateElements(points, 0, points.length, mode);
    }
    updateElements(points, start, count, mode) {
      const scale = this._cachedMeta.rScale;
      const reset = mode === "reset";
      for (let i2 = start; i2 < start + count; i2++) {
        const point = points[i2];
        const options = this.resolveDataElementOptions(i2, point.active ? "active" : mode);
        const pointPosition = scale.getPointPositionForValue(i2, this.getParsed(i2).r);
        const x2 = reset ? scale.xCenter : pointPosition.x;
        const y2 = reset ? scale.yCenter : pointPosition.y;
        const properties = {
          x: x2,
          y: y2,
          angle: pointPosition.angle,
          skip: isNaN(x2) || isNaN(y2),
          options
        };
        this.updateElement(point, i2, properties, mode);
      }
    }
  };
  var ScatterController = class extends DatasetController {
    static id = "scatter";
    static defaults = {
      datasetElementType: false,
      dataElementType: "point",
      showLine: false,
      fill: false
    };
    static overrides = {
      interaction: {
        mode: "point"
      },
      scales: {
        x: {
          type: "linear"
        },
        y: {
          type: "linear"
        }
      }
    };
    getLabelAndValue(index2) {
      const meta = this._cachedMeta;
      const labels = this.chart.data.labels || [];
      const { xScale, yScale } = meta;
      const parsed = this.getParsed(index2);
      const x2 = xScale.getLabelForValue(parsed.x);
      const y2 = yScale.getLabelForValue(parsed.y);
      return {
        label: labels[index2] || "",
        value: "(" + x2 + ", " + y2 + ")"
      };
    }
    update(mode) {
      const meta = this._cachedMeta;
      const { data: points = [] } = meta;
      const animationsDisabled = this.chart._animationsDisabled;
      let { start, count } = _getStartAndCountOfVisiblePoints(meta, points, animationsDisabled);
      this._drawStart = start;
      this._drawCount = count;
      if (_scaleRangesChanged(meta)) {
        start = 0;
        count = points.length;
      }
      if (this.options.showLine) {
        if (!this.datasetElementType) {
          this.addElements();
        }
        const { dataset: line, _dataset } = meta;
        line._chart = this.chart;
        line._datasetIndex = this.index;
        line._decimated = !!_dataset._decimated;
        line.points = points;
        const options = this.resolveDatasetElementOptions(mode);
        options.segment = this.options.segment;
        this.updateElement(line, void 0, {
          animated: !animationsDisabled,
          options
        }, mode);
      } else if (this.datasetElementType) {
        delete meta.dataset;
        this.datasetElementType = false;
      }
      this.updateElements(points, start, count, mode);
    }
    addElements() {
      const { showLine } = this.options;
      if (!this.datasetElementType && showLine) {
        this.datasetElementType = this.chart.registry.getElement("line");
      }
      super.addElements();
    }
    updateElements(points, start, count, mode) {
      const reset = mode === "reset";
      const { iScale, vScale, _stacked, _dataset } = this._cachedMeta;
      const firstOpts = this.resolveDataElementOptions(start, mode);
      const sharedOptions = this.getSharedOptions(firstOpts);
      const includeOptions = this.includeOptions(mode, sharedOptions);
      const iAxis = iScale.axis;
      const vAxis = vScale.axis;
      const { spanGaps, segment } = this.options;
      const maxGapLength = isNumber(spanGaps) ? spanGaps : Number.POSITIVE_INFINITY;
      const directUpdate = this.chart._animationsDisabled || reset || mode === "none";
      let prevParsed = start > 0 && this.getParsed(start - 1);
      for (let i2 = start; i2 < start + count; ++i2) {
        const point = points[i2];
        const parsed = this.getParsed(i2);
        const properties = directUpdate ? point : {};
        const nullData = isNullOrUndef(parsed[vAxis]);
        const iPixel = properties[iAxis] = iScale.getPixelForValue(parsed[iAxis], i2);
        const vPixel = properties[vAxis] = reset || nullData ? vScale.getBasePixel() : vScale.getPixelForValue(_stacked ? this.applyStack(vScale, parsed, _stacked) : parsed[vAxis], i2);
        properties.skip = isNaN(iPixel) || isNaN(vPixel) || nullData;
        properties.stop = i2 > 0 && Math.abs(parsed[iAxis] - prevParsed[iAxis]) > maxGapLength;
        if (segment) {
          properties.parsed = parsed;
          properties.raw = _dataset.data[i2];
        }
        if (includeOptions) {
          properties.options = sharedOptions || this.resolveDataElementOptions(i2, point.active ? "active" : mode);
        }
        if (!directUpdate) {
          this.updateElement(point, i2, properties, mode);
        }
        prevParsed = parsed;
      }
      this.updateSharedOptions(sharedOptions, mode, firstOpts);
    }
    getMaxOverflow() {
      const meta = this._cachedMeta;
      const data = meta.data || [];
      if (!this.options.showLine) {
        let max = 0;
        for (let i2 = data.length - 1; i2 >= 0; --i2) {
          max = Math.max(max, data[i2].size(this.resolveDataElementOptions(i2)) / 2);
        }
        return max > 0 && max;
      }
      const dataset = meta.dataset;
      const border = dataset.options && dataset.options.borderWidth || 0;
      if (!data.length) {
        return border;
      }
      const firstPoint = data[0].size(this.resolveDataElementOptions(0));
      const lastPoint = data[data.length - 1].size(this.resolveDataElementOptions(data.length - 1));
      return Math.max(border, firstPoint, lastPoint) / 2;
    }
  };
  var controllers = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    BarController,
    BubbleController,
    DoughnutController,
    LineController,
    PieController,
    PolarAreaController,
    RadarController,
    ScatterController
  });
  function abstract() {
    throw new Error("This method is not implemented: Check that a complete date adapter is provided.");
  }
  var DateAdapterBase = class _DateAdapterBase {
    /**
    * Override default date adapter methods.
    * Accepts type parameter to define options type.
    * @example
    * Chart._adapters._date.override<{myAdapterOption: string}>({
    *   init() {
    *     console.log(this.options.myAdapterOption);
    *   }
    * })
    */
    static override(members) {
      Object.assign(_DateAdapterBase.prototype, members);
    }
    options;
    constructor(options) {
      this.options = options || {};
    }
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    init() {
    }
    formats() {
      return abstract();
    }
    parse() {
      return abstract();
    }
    format() {
      return abstract();
    }
    add() {
      return abstract();
    }
    diff() {
      return abstract();
    }
    startOf() {
      return abstract();
    }
    endOf() {
      return abstract();
    }
  };
  var adapters = {
    _date: DateAdapterBase
  };
  function binarySearch(metaset, axis, value, intersect) {
    const { controller, data, _sorted } = metaset;
    const iScale = controller._cachedMeta.iScale;
    if (iScale && axis === iScale.axis && axis !== "r" && _sorted && data.length) {
      const lookupMethod = iScale._reversePixels ? _rlookupByKey : _lookupByKey;
      if (!intersect) {
        return lookupMethod(data, axis, value);
      } else if (controller._sharedOptions) {
        const el = data[0];
        const range = typeof el.getRange === "function" && el.getRange(axis);
        if (range) {
          const start = lookupMethod(data, axis, value - range);
          const end = lookupMethod(data, axis, value + range);
          return {
            lo: start.lo,
            hi: end.hi
          };
        }
      }
    }
    return {
      lo: 0,
      hi: data.length - 1
    };
  }
  function evaluateInteractionItems(chart, axis, position, handler, intersect) {
    const metasets = chart.getSortedVisibleDatasetMetas();
    const value = position[axis];
    for (let i2 = 0, ilen = metasets.length; i2 < ilen; ++i2) {
      const { index: index2, data } = metasets[i2];
      const { lo, hi } = binarySearch(metasets[i2], axis, value, intersect);
      for (let j2 = lo; j2 <= hi; ++j2) {
        const element = data[j2];
        if (!element.skip) {
          handler(element, index2, j2);
        }
      }
    }
  }
  function getDistanceMetricForAxis(axis) {
    const useX = axis.indexOf("x") !== -1;
    const useY = axis.indexOf("y") !== -1;
    return function(pt1, pt2) {
      const deltaX = useX ? Math.abs(pt1.x - pt2.x) : 0;
      const deltaY = useY ? Math.abs(pt1.y - pt2.y) : 0;
      return Math.sqrt(Math.pow(deltaX, 2) + Math.pow(deltaY, 2));
    };
  }
  function getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) {
    const items = [];
    if (!includeInvisible && !chart.isPointInArea(position)) {
      return items;
    }
    const evaluationFunc = function(element, datasetIndex, index2) {
      if (!includeInvisible && !_isPointInArea(element, chart.chartArea, 0)) {
        return;
      }
      if (element.inRange(position.x, position.y, useFinalPosition)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    };
    evaluateInteractionItems(chart, axis, position, evaluationFunc, true);
    return items;
  }
  function getNearestRadialItems(chart, position, axis, useFinalPosition) {
    let items = [];
    function evaluationFunc(element, datasetIndex, index2) {
      const { startAngle, endAngle } = element.getProps([
        "startAngle",
        "endAngle"
      ], useFinalPosition);
      const { angle } = getAngleFromPoint(element, {
        x: position.x,
        y: position.y
      });
      if (_angleBetween(angle, startAngle, endAngle)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
  }
  function getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    let items = [];
    const distanceMetric = getDistanceMetricForAxis(axis);
    let minDistance = Number.POSITIVE_INFINITY;
    function evaluationFunc(element, datasetIndex, index2) {
      const inRange2 = element.inRange(position.x, position.y, useFinalPosition);
      if (intersect && !inRange2) {
        return;
      }
      const center = element.getCenterPoint(useFinalPosition);
      const pointInArea = !!includeInvisible || chart.isPointInArea(center);
      if (!pointInArea && !inRange2) {
        return;
      }
      const distance = distanceMetric(position, center);
      if (distance < minDistance) {
        items = [
          {
            element,
            datasetIndex,
            index: index2
          }
        ];
        minDistance = distance;
      } else if (distance === minDistance) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
      }
    }
    evaluateInteractionItems(chart, axis, position, evaluationFunc);
    return items;
  }
  function getNearestItems(chart, position, axis, intersect, useFinalPosition, includeInvisible) {
    if (!includeInvisible && !chart.isPointInArea(position)) {
      return [];
    }
    return axis === "r" && !intersect ? getNearestRadialItems(chart, position, axis, useFinalPosition) : getNearestCartesianItems(chart, position, axis, intersect, useFinalPosition, includeInvisible);
  }
  function getAxisItems(chart, position, axis, intersect, useFinalPosition) {
    const items = [];
    const rangeMethod = axis === "x" ? "inXRange" : "inYRange";
    let intersectsItem = false;
    evaluateInteractionItems(chart, axis, position, (element, datasetIndex, index2) => {
      if (element[rangeMethod](position[axis], useFinalPosition)) {
        items.push({
          element,
          datasetIndex,
          index: index2
        });
        intersectsItem = intersectsItem || element.inRange(position.x, position.y, useFinalPosition);
      }
    });
    if (intersect && !intersectsItem) {
      return [];
    }
    return items;
  }
  var Interaction = {
    evaluateInteractionItems,
    modes: {
      index(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "x";
        const includeInvisible = options.includeInvisible || false;
        const items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
        const elements2 = [];
        if (!items.length) {
          return [];
        }
        chart.getSortedVisibleDatasetMetas().forEach((meta) => {
          const index2 = items[0].index;
          const element = meta.data[index2];
          if (element && !element.skip) {
            elements2.push({
              element,
              datasetIndex: meta.index,
              index: index2
            });
          }
        });
        return elements2;
      },
      dataset(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        let items = options.intersect ? getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible) : getNearestItems(chart, position, axis, false, useFinalPosition, includeInvisible);
        if (items.length > 0) {
          const datasetIndex = items[0].datasetIndex;
          const data = chart.getDatasetMeta(datasetIndex).data;
          items = [];
          for (let i2 = 0; i2 < data.length; ++i2) {
            items.push({
              element: data[i2],
              datasetIndex,
              index: i2
            });
          }
        }
        return items;
      },
      point(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        return getIntersectItems(chart, position, axis, useFinalPosition, includeInvisible);
      },
      nearest(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        const axis = options.axis || "xy";
        const includeInvisible = options.includeInvisible || false;
        return getNearestItems(chart, position, axis, options.intersect, useFinalPosition, includeInvisible);
      },
      x(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        return getAxisItems(chart, position, "x", options.intersect, useFinalPosition);
      },
      y(chart, e2, options, useFinalPosition) {
        const position = getRelativePosition(e2, chart);
        return getAxisItems(chart, position, "y", options.intersect, useFinalPosition);
      }
    }
  };
  var STATIC_POSITIONS = [
    "left",
    "top",
    "right",
    "bottom"
  ];
  function filterByPosition(array, position) {
    return array.filter((v2) => v2.pos === position);
  }
  function filterDynamicPositionByAxis(array, axis) {
    return array.filter((v2) => STATIC_POSITIONS.indexOf(v2.pos) === -1 && v2.box.axis === axis);
  }
  function sortByWeight(array, reverse) {
    return array.sort((a2, b2) => {
      const v0 = reverse ? b2 : a2;
      const v1 = reverse ? a2 : b2;
      return v0.weight === v1.weight ? v0.index - v1.index : v0.weight - v1.weight;
    });
  }
  function wrapBoxes(boxes) {
    const layoutBoxes = [];
    let i2, ilen, box, pos, stack, stackWeight;
    for (i2 = 0, ilen = (boxes || []).length; i2 < ilen; ++i2) {
      box = boxes[i2];
      ({ position: pos, options: { stack, stackWeight = 1 } } = box);
      layoutBoxes.push({
        index: i2,
        box,
        pos,
        horizontal: box.isHorizontal(),
        weight: box.weight,
        stack: stack && pos + stack,
        stackWeight
      });
    }
    return layoutBoxes;
  }
  function buildStacks(layouts2) {
    const stacks = {};
    for (const wrap of layouts2) {
      const { stack, pos, stackWeight } = wrap;
      if (!stack || !STATIC_POSITIONS.includes(pos)) {
        continue;
      }
      const _stack = stacks[stack] || (stacks[stack] = {
        count: 0,
        placed: 0,
        weight: 0,
        size: 0
      });
      _stack.count++;
      _stack.weight += stackWeight;
    }
    return stacks;
  }
  function setLayoutDims(layouts2, params) {
    const stacks = buildStacks(layouts2);
    const { vBoxMaxWidth, hBoxMaxHeight } = params;
    let i2, ilen, layout;
    for (i2 = 0, ilen = layouts2.length; i2 < ilen; ++i2) {
      layout = layouts2[i2];
      const { fullSize } = layout.box;
      const stack = stacks[layout.stack];
      const factor = stack && layout.stackWeight / stack.weight;
      if (layout.horizontal) {
        layout.width = factor ? factor * vBoxMaxWidth : fullSize && params.availableWidth;
        layout.height = hBoxMaxHeight;
      } else {
        layout.width = vBoxMaxWidth;
        layout.height = factor ? factor * hBoxMaxHeight : fullSize && params.availableHeight;
      }
    }
    return stacks;
  }
  function buildLayoutBoxes(boxes) {
    const layoutBoxes = wrapBoxes(boxes);
    const fullSize = sortByWeight(layoutBoxes.filter((wrap) => wrap.box.fullSize), true);
    const left = sortByWeight(filterByPosition(layoutBoxes, "left"), true);
    const right = sortByWeight(filterByPosition(layoutBoxes, "right"));
    const top = sortByWeight(filterByPosition(layoutBoxes, "top"), true);
    const bottom = sortByWeight(filterByPosition(layoutBoxes, "bottom"));
    const centerHorizontal = filterDynamicPositionByAxis(layoutBoxes, "x");
    const centerVertical = filterDynamicPositionByAxis(layoutBoxes, "y");
    return {
      fullSize,
      leftAndTop: left.concat(top),
      rightAndBottom: right.concat(centerVertical).concat(bottom).concat(centerHorizontal),
      chartArea: filterByPosition(layoutBoxes, "chartArea"),
      vertical: left.concat(right).concat(centerVertical),
      horizontal: top.concat(bottom).concat(centerHorizontal)
    };
  }
  function getCombinedMax(maxPadding, chartArea, a2, b2) {
    return Math.max(maxPadding[a2], chartArea[a2]) + Math.max(maxPadding[b2], chartArea[b2]);
  }
  function updateMaxPadding(maxPadding, boxPadding) {
    maxPadding.top = Math.max(maxPadding.top, boxPadding.top);
    maxPadding.left = Math.max(maxPadding.left, boxPadding.left);
    maxPadding.bottom = Math.max(maxPadding.bottom, boxPadding.bottom);
    maxPadding.right = Math.max(maxPadding.right, boxPadding.right);
  }
  function updateDims(chartArea, params, layout, stacks) {
    const { pos, box } = layout;
    const maxPadding = chartArea.maxPadding;
    if (!isObject(pos)) {
      if (layout.size) {
        chartArea[pos] -= layout.size;
      }
      const stack = stacks[layout.stack] || {
        size: 0,
        count: 1
      };
      stack.size = Math.max(stack.size, layout.horizontal ? box.height : box.width);
      layout.size = stack.size / stack.count;
      chartArea[pos] += layout.size;
    }
    if (box.getPadding) {
      updateMaxPadding(maxPadding, box.getPadding());
    }
    const newWidth = Math.max(0, params.outerWidth - getCombinedMax(maxPadding, chartArea, "left", "right"));
    const newHeight = Math.max(0, params.outerHeight - getCombinedMax(maxPadding, chartArea, "top", "bottom"));
    const widthChanged = newWidth !== chartArea.w;
    const heightChanged = newHeight !== chartArea.h;
    chartArea.w = newWidth;
    chartArea.h = newHeight;
    return layout.horizontal ? {
      same: widthChanged,
      other: heightChanged
    } : {
      same: heightChanged,
      other: widthChanged
    };
  }
  function handleMaxPadding(chartArea) {
    const maxPadding = chartArea.maxPadding;
    function updatePos(pos) {
      const change = Math.max(maxPadding[pos] - chartArea[pos], 0);
      chartArea[pos] += change;
      return change;
    }
    chartArea.y += updatePos("top");
    chartArea.x += updatePos("left");
    updatePos("right");
    updatePos("bottom");
  }
  function getMargins(horizontal, chartArea) {
    const maxPadding = chartArea.maxPadding;
    function marginForPositions(positions2) {
      const margin = {
        left: 0,
        top: 0,
        right: 0,
        bottom: 0
      };
      positions2.forEach((pos) => {
        margin[pos] = Math.max(chartArea[pos], maxPadding[pos]);
      });
      return margin;
    }
    return horizontal ? marginForPositions([
      "left",
      "right"
    ]) : marginForPositions([
      "top",
      "bottom"
    ]);
  }
  function fitBoxes(boxes, chartArea, params, stacks) {
    const refitBoxes = [];
    let i2, ilen, layout, box, refit, changed;
    for (i2 = 0, ilen = boxes.length, refit = 0; i2 < ilen; ++i2) {
      layout = boxes[i2];
      box = layout.box;
      box.update(layout.width || chartArea.w, layout.height || chartArea.h, getMargins(layout.horizontal, chartArea));
      const { same, other } = updateDims(chartArea, params, layout, stacks);
      refit |= same && refitBoxes.length;
      changed = changed || other;
      if (!box.fullSize) {
        refitBoxes.push(layout);
      }
    }
    return refit && fitBoxes(refitBoxes, chartArea, params, stacks) || changed;
  }
  function setBoxDims(box, left, top, width, height) {
    box.top = top;
    box.left = left;
    box.right = left + width;
    box.bottom = top + height;
    box.width = width;
    box.height = height;
  }
  function placeBoxes(boxes, chartArea, params, stacks) {
    const userPadding = params.padding;
    let { x: x2, y: y2 } = chartArea;
    for (const layout of boxes) {
      const box = layout.box;
      const stack = stacks[layout.stack] || {
        count: 1,
        placed: 0,
        weight: 1
      };
      const weight = layout.stackWeight / stack.weight || 1;
      if (layout.horizontal) {
        const width = chartArea.w * weight;
        const height = stack.size || box.height;
        if (defined(stack.start)) {
          y2 = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, userPadding.left, y2, params.outerWidth - userPadding.right - userPadding.left, height);
        } else {
          setBoxDims(box, chartArea.left + stack.placed, y2, width, height);
        }
        stack.start = y2;
        stack.placed += width;
        y2 = box.bottom;
      } else {
        const height = chartArea.h * weight;
        const width = stack.size || box.width;
        if (defined(stack.start)) {
          x2 = stack.start;
        }
        if (box.fullSize) {
          setBoxDims(box, x2, userPadding.top, width, params.outerHeight - userPadding.bottom - userPadding.top);
        } else {
          setBoxDims(box, x2, chartArea.top + stack.placed, width, height);
        }
        stack.start = x2;
        stack.placed += height;
        x2 = box.right;
      }
    }
    chartArea.x = x2;
    chartArea.y = y2;
  }
  var layouts = {
    addBox(chart, item) {
      if (!chart.boxes) {
        chart.boxes = [];
      }
      item.fullSize = item.fullSize || false;
      item.position = item.position || "top";
      item.weight = item.weight || 0;
      item._layers = item._layers || function() {
        return [
          {
            z: 0,
            draw(chartArea) {
              item.draw(chartArea);
            }
          }
        ];
      };
      chart.boxes.push(item);
    },
    removeBox(chart, layoutItem) {
      const index2 = chart.boxes ? chart.boxes.indexOf(layoutItem) : -1;
      if (index2 !== -1) {
        chart.boxes.splice(index2, 1);
      }
    },
    configure(chart, item, options) {
      item.fullSize = options.fullSize;
      item.position = options.position;
      item.weight = options.weight;
    },
    update(chart, width, height, minPadding) {
      if (!chart) {
        return;
      }
      const padding = toPadding(chart.options.layout.padding);
      const availableWidth = Math.max(width - padding.width, 0);
      const availableHeight = Math.max(height - padding.height, 0);
      const boxes = buildLayoutBoxes(chart.boxes);
      const verticalBoxes = boxes.vertical;
      const horizontalBoxes = boxes.horizontal;
      each(chart.boxes, (box) => {
        if (typeof box.beforeLayout === "function") {
          box.beforeLayout();
        }
      });
      const visibleVerticalBoxCount = verticalBoxes.reduce((total, wrap) => wrap.box.options && wrap.box.options.display === false ? total : total + 1, 0) || 1;
      const params = Object.freeze({
        outerWidth: width,
        outerHeight: height,
        padding,
        availableWidth,
        availableHeight,
        vBoxMaxWidth: availableWidth / 2 / visibleVerticalBoxCount,
        hBoxMaxHeight: availableHeight / 2
      });
      const maxPadding = Object.assign({}, padding);
      updateMaxPadding(maxPadding, toPadding(minPadding));
      const chartArea = Object.assign({
        maxPadding,
        w: availableWidth,
        h: availableHeight,
        x: padding.left,
        y: padding.top
      }, padding);
      const stacks = setLayoutDims(verticalBoxes.concat(horizontalBoxes), params);
      fitBoxes(boxes.fullSize, chartArea, params, stacks);
      fitBoxes(verticalBoxes, chartArea, params, stacks);
      if (fitBoxes(horizontalBoxes, chartArea, params, stacks)) {
        fitBoxes(verticalBoxes, chartArea, params, stacks);
      }
      handleMaxPadding(chartArea);
      placeBoxes(boxes.leftAndTop, chartArea, params, stacks);
      chartArea.x += chartArea.w;
      chartArea.y += chartArea.h;
      placeBoxes(boxes.rightAndBottom, chartArea, params, stacks);
      chart.chartArea = {
        left: chartArea.left,
        top: chartArea.top,
        right: chartArea.left + chartArea.w,
        bottom: chartArea.top + chartArea.h,
        height: chartArea.h,
        width: chartArea.w
      };
      each(boxes.chartArea, (layout) => {
        const box = layout.box;
        Object.assign(box, chart.chartArea);
        box.update(chartArea.w, chartArea.h, {
          left: 0,
          top: 0,
          right: 0,
          bottom: 0
        });
      });
    }
  };
  var BasePlatform = class {
    acquireContext(canvas, aspectRatio) {
    }
    releaseContext(context) {
      return false;
    }
    addEventListener(chart, type, listener) {
    }
    removeEventListener(chart, type, listener) {
    }
    getDevicePixelRatio() {
      return 1;
    }
    getMaximumSize(element, width, height, aspectRatio) {
      width = Math.max(0, width || element.width);
      height = height || element.height;
      return {
        width,
        height: Math.max(0, aspectRatio ? Math.floor(width / aspectRatio) : height)
      };
    }
    isAttached(canvas) {
      return true;
    }
    updateConfig(config) {
    }
  };
  var BasicPlatform = class extends BasePlatform {
    acquireContext(item) {
      return item && item.getContext && item.getContext("2d") || null;
    }
    updateConfig(config) {
      config.options.animation = false;
    }
  };
  var EXPANDO_KEY = "$chartjs";
  var EVENT_TYPES = {
    touchstart: "mousedown",
    touchmove: "mousemove",
    touchend: "mouseup",
    pointerenter: "mouseenter",
    pointerdown: "mousedown",
    pointermove: "mousemove",
    pointerup: "mouseup",
    pointerleave: "mouseout",
    pointerout: "mouseout"
  };
  var isNullOrEmpty = (value) => value === null || value === "";
  function initCanvas(canvas, aspectRatio) {
    const style = canvas.style;
    const renderHeight = canvas.getAttribute("height");
    const renderWidth = canvas.getAttribute("width");
    canvas[EXPANDO_KEY] = {
      initial: {
        height: renderHeight,
        width: renderWidth,
        style: {
          display: style.display,
          height: style.height,
          width: style.width
        }
      }
    };
    style.display = style.display || "block";
    style.boxSizing = style.boxSizing || "border-box";
    if (isNullOrEmpty(renderWidth)) {
      const displayWidth = readUsedSize(canvas, "width");
      if (displayWidth !== void 0) {
        canvas.width = displayWidth;
      }
    }
    if (isNullOrEmpty(renderHeight)) {
      if (canvas.style.height === "") {
        canvas.height = canvas.width / (aspectRatio || 2);
      } else {
        const displayHeight = readUsedSize(canvas, "height");
        if (displayHeight !== void 0) {
          canvas.height = displayHeight;
        }
      }
    }
    return canvas;
  }
  var eventListenerOptions = supportsEventListenerOptions ? {
    passive: true
  } : false;
  function addListener(node, type, listener) {
    node.addEventListener(type, listener, eventListenerOptions);
  }
  function removeListener(chart, type, listener) {
    chart.canvas.removeEventListener(type, listener, eventListenerOptions);
  }
  function fromNativeEvent(event, chart) {
    const type = EVENT_TYPES[event.type] || event.type;
    const { x: x2, y: y2 } = getRelativePosition(event, chart);
    return {
      type,
      chart,
      native: event,
      x: x2 !== void 0 ? x2 : null,
      y: y2 !== void 0 ? y2 : null
    };
  }
  function nodeListContains(nodeList, canvas) {
    for (const node of nodeList) {
      if (node === canvas || node.contains(canvas)) {
        return true;
      }
    }
  }
  function createAttachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries) => {
      let trigger = false;
      for (const entry of entries) {
        trigger = trigger || nodeListContains(entry.addedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.removedNodes, canvas);
      }
      if (trigger) {
        listener();
      }
    });
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    return observer;
  }
  function createDetachObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const observer = new MutationObserver((entries) => {
      let trigger = false;
      for (const entry of entries) {
        trigger = trigger || nodeListContains(entry.removedNodes, canvas);
        trigger = trigger && !nodeListContains(entry.addedNodes, canvas);
      }
      if (trigger) {
        listener();
      }
    });
    observer.observe(document, {
      childList: true,
      subtree: true
    });
    return observer;
  }
  var drpListeningCharts = /* @__PURE__ */ new Map();
  var oldDevicePixelRatio = 0;
  function onWindowResize() {
    const dpr = window.devicePixelRatio;
    if (dpr === oldDevicePixelRatio) {
      return;
    }
    oldDevicePixelRatio = dpr;
    drpListeningCharts.forEach((resize, chart) => {
      if (chart.currentDevicePixelRatio !== dpr) {
        resize();
      }
    });
  }
  function listenDevicePixelRatioChanges(chart, resize) {
    if (!drpListeningCharts.size) {
      window.addEventListener("resize", onWindowResize);
    }
    drpListeningCharts.set(chart, resize);
  }
  function unlistenDevicePixelRatioChanges(chart) {
    drpListeningCharts.delete(chart);
    if (!drpListeningCharts.size) {
      window.removeEventListener("resize", onWindowResize);
    }
  }
  function createResizeObserver(chart, type, listener) {
    const canvas = chart.canvas;
    const container = canvas && _getParentNode(canvas);
    if (!container) {
      return;
    }
    const resize = throttled((width, height) => {
      const w2 = container.clientWidth;
      listener(width, height);
      if (w2 < container.clientWidth) {
        listener();
      }
    }, window);
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      const width = entry.contentRect.width;
      const height = entry.contentRect.height;
      if (width === 0 && height === 0) {
        return;
      }
      resize(width, height);
    });
    observer.observe(container);
    listenDevicePixelRatioChanges(chart, resize);
    return observer;
  }
  function releaseObserver(chart, type, observer) {
    if (observer) {
      observer.disconnect();
    }
    if (type === "resize") {
      unlistenDevicePixelRatioChanges(chart);
    }
  }
  function createProxyAndListen(chart, type, listener) {
    const canvas = chart.canvas;
    const proxy = throttled((event) => {
      if (chart.ctx !== null) {
        listener(fromNativeEvent(event, chart));
      }
    }, chart);
    addListener(canvas, type, proxy);
    return proxy;
  }
  var DomPlatform = class extends BasePlatform {
    acquireContext(canvas, aspectRatio) {
      const context = canvas && canvas.getContext && canvas.getContext("2d");
      if (context && context.canvas === canvas) {
        initCanvas(canvas, aspectRatio);
        return context;
      }
      return null;
    }
    releaseContext(context) {
      const canvas = context.canvas;
      if (!canvas[EXPANDO_KEY]) {
        return false;
      }
      const initial = canvas[EXPANDO_KEY].initial;
      [
        "height",
        "width"
      ].forEach((prop) => {
        const value = initial[prop];
        if (isNullOrUndef(value)) {
          canvas.removeAttribute(prop);
        } else {
          canvas.setAttribute(prop, value);
        }
      });
      const style = initial.style || {};
      Object.keys(style).forEach((key) => {
        canvas.style[key] = style[key];
      });
      canvas.width = canvas.width;
      delete canvas[EXPANDO_KEY];
      return true;
    }
    addEventListener(chart, type, listener) {
      this.removeEventListener(chart, type);
      const proxies = chart.$proxies || (chart.$proxies = {});
      const handlers = {
        attach: createAttachObserver,
        detach: createDetachObserver,
        resize: createResizeObserver
      };
      const handler = handlers[type] || createProxyAndListen;
      proxies[type] = handler(chart, type, listener);
    }
    removeEventListener(chart, type) {
      const proxies = chart.$proxies || (chart.$proxies = {});
      const proxy = proxies[type];
      if (!proxy) {
        return;
      }
      const handlers = {
        attach: releaseObserver,
        detach: releaseObserver,
        resize: releaseObserver
      };
      const handler = handlers[type] || removeListener;
      handler(chart, type, proxy);
      proxies[type] = void 0;
    }
    getDevicePixelRatio() {
      return window.devicePixelRatio;
    }
    getMaximumSize(canvas, width, height, aspectRatio) {
      return getMaximumSize(canvas, width, height, aspectRatio);
    }
    isAttached(canvas) {
      const container = _getParentNode(canvas);
      return !!(container && container.isConnected);
    }
  };
  function _detectPlatform(canvas) {
    if (!_isDomSupported() || typeof OffscreenCanvas !== "undefined" && canvas instanceof OffscreenCanvas) {
      return BasicPlatform;
    }
    return DomPlatform;
  }
  var Element = class {
    static defaults = {};
    static defaultRoutes = void 0;
    x;
    y;
    active = false;
    options;
    $animations;
    tooltipPosition(useFinalPosition) {
      const { x: x2, y: y2 } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return {
        x: x2,
        y: y2
      };
    }
    hasValue() {
      return isNumber(this.x) && isNumber(this.y);
    }
    getProps(props, final) {
      const anims = this.$animations;
      if (!final || !anims) {
        return this;
      }
      const ret = {};
      props.forEach((prop) => {
        ret[prop] = anims[prop] && anims[prop].active() ? anims[prop]._to : this[prop];
      });
      return ret;
    }
  };
  function autoSkip(scale, ticks) {
    const tickOpts = scale.options.ticks;
    const determinedMaxTicks = determineMaxTicks(scale);
    const ticksLimit = Math.min(tickOpts.maxTicksLimit || determinedMaxTicks, determinedMaxTicks);
    const majorIndices = tickOpts.major.enabled ? getMajorIndices(ticks) : [];
    const numMajorIndices = majorIndices.length;
    const first = majorIndices[0];
    const last = majorIndices[numMajorIndices - 1];
    const newTicks = [];
    if (numMajorIndices > ticksLimit) {
      skipMajors(ticks, newTicks, majorIndices, numMajorIndices / ticksLimit);
      return newTicks;
    }
    const spacing = calculateSpacing(majorIndices, ticks, ticksLimit);
    if (numMajorIndices > 0) {
      let i2, ilen;
      const avgMajorSpacing = numMajorIndices > 1 ? Math.round((last - first) / (numMajorIndices - 1)) : null;
      skip(ticks, newTicks, spacing, isNullOrUndef(avgMajorSpacing) ? 0 : first - avgMajorSpacing, first);
      for (i2 = 0, ilen = numMajorIndices - 1; i2 < ilen; i2++) {
        skip(ticks, newTicks, spacing, majorIndices[i2], majorIndices[i2 + 1]);
      }
      skip(ticks, newTicks, spacing, last, isNullOrUndef(avgMajorSpacing) ? ticks.length : last + avgMajorSpacing);
      return newTicks;
    }
    skip(ticks, newTicks, spacing);
    return newTicks;
  }
  function determineMaxTicks(scale) {
    const offset = scale.options.offset;
    const tickLength = scale._tickSize();
    const maxScale = scale._length / tickLength + (offset ? 0 : 1);
    const maxChart = scale._maxLength / tickLength;
    return Math.floor(Math.min(maxScale, maxChart));
  }
  function calculateSpacing(majorIndices, ticks, ticksLimit) {
    const evenMajorSpacing = getEvenSpacing(majorIndices);
    const spacing = ticks.length / ticksLimit;
    if (!evenMajorSpacing) {
      return Math.max(spacing, 1);
    }
    const factors = _factorize(evenMajorSpacing);
    for (let i2 = 0, ilen = factors.length - 1; i2 < ilen; i2++) {
      const factor = factors[i2];
      if (factor > spacing) {
        return factor;
      }
    }
    return Math.max(spacing, 1);
  }
  function getMajorIndices(ticks) {
    const result = [];
    let i2, ilen;
    for (i2 = 0, ilen = ticks.length; i2 < ilen; i2++) {
      if (ticks[i2].major) {
        result.push(i2);
      }
    }
    return result;
  }
  function skipMajors(ticks, newTicks, majorIndices, spacing) {
    let count = 0;
    let next = majorIndices[0];
    let i2;
    spacing = Math.ceil(spacing);
    for (i2 = 0; i2 < ticks.length; i2++) {
      if (i2 === next) {
        newTicks.push(ticks[i2]);
        count++;
        next = majorIndices[count * spacing];
      }
    }
  }
  function skip(ticks, newTicks, spacing, majorStart, majorEnd) {
    const start = valueOrDefault(majorStart, 0);
    const end = Math.min(valueOrDefault(majorEnd, ticks.length), ticks.length);
    let count = 0;
    let length, i2, next;
    spacing = Math.ceil(spacing);
    if (majorEnd) {
      length = majorEnd - majorStart;
      spacing = length / Math.floor(length / spacing);
    }
    next = start;
    while (next < 0) {
      count++;
      next = Math.round(start + count * spacing);
    }
    for (i2 = Math.max(start, 0); i2 < end; i2++) {
      if (i2 === next) {
        newTicks.push(ticks[i2]);
        count++;
        next = Math.round(start + count * spacing);
      }
    }
  }
  function getEvenSpacing(arr) {
    const len = arr.length;
    let i2, diff;
    if (len < 2) {
      return false;
    }
    for (diff = arr[0], i2 = 1; i2 < len; ++i2) {
      if (arr[i2] - arr[i2 - 1] !== diff) {
        return false;
      }
    }
    return diff;
  }
  var reverseAlign = (align) => align === "left" ? "right" : align === "right" ? "left" : align;
  var offsetFromEdge = (scale, edge, offset) => edge === "top" || edge === "left" ? scale[edge] + offset : scale[edge] - offset;
  var getTicksLimit = (ticksLength, maxTicksLimit) => Math.min(maxTicksLimit || ticksLength, ticksLength);
  function sample(arr, numItems) {
    const result = [];
    const increment = arr.length / numItems;
    const len = arr.length;
    let i2 = 0;
    for (; i2 < len; i2 += increment) {
      result.push(arr[Math.floor(i2)]);
    }
    return result;
  }
  function getPixelForGridLine(scale, index2, offsetGridLines) {
    const length = scale.ticks.length;
    const validIndex2 = Math.min(index2, length - 1);
    const start = scale._startPixel;
    const end = scale._endPixel;
    const epsilon = 1e-6;
    let lineValue = scale.getPixelForTick(validIndex2);
    let offset;
    if (offsetGridLines) {
      if (length === 1) {
        offset = Math.max(lineValue - start, end - lineValue);
      } else if (index2 === 0) {
        offset = (scale.getPixelForTick(1) - lineValue) / 2;
      } else {
        offset = (lineValue - scale.getPixelForTick(validIndex2 - 1)) / 2;
      }
      lineValue += validIndex2 < index2 ? offset : -offset;
      if (lineValue < start - epsilon || lineValue > end + epsilon) {
        return;
      }
    }
    return lineValue;
  }
  function garbageCollect(caches, length) {
    each(caches, (cache) => {
      const gc = cache.gc;
      const gcLen = gc.length / 2;
      let i2;
      if (gcLen > length) {
        for (i2 = 0; i2 < gcLen; ++i2) {
          delete cache.data[gc[i2]];
        }
        gc.splice(0, gcLen);
      }
    });
  }
  function getTickMarkLength(options) {
    return options.drawTicks ? options.tickLength : 0;
  }
  function getTitleHeight(options, fallback) {
    if (!options.display) {
      return 0;
    }
    const font = toFont(options.font, fallback);
    const padding = toPadding(options.padding);
    const lines = isArray(options.text) ? options.text.length : 1;
    return lines * font.lineHeight + padding.height;
  }
  function createScaleContext(parent, scale) {
    return createContext(parent, {
      scale,
      type: "scale"
    });
  }
  function createTickContext(parent, index2, tick) {
    return createContext(parent, {
      tick,
      index: index2,
      type: "tick"
    });
  }
  function titleAlign(align, position, reverse) {
    let ret = _toLeftRightCenter(align);
    if (reverse && position !== "right" || !reverse && position === "right") {
      ret = reverseAlign(ret);
    }
    return ret;
  }
  function titleArgs(scale, offset, position, align) {
    const { top, left, bottom, right, chart } = scale;
    const { chartArea, scales: scales2 } = chart;
    let rotation = 0;
    let maxWidth, titleX, titleY;
    const height = bottom - top;
    const width = right - left;
    if (scale.isHorizontal()) {
      titleX = _alignStartEnd(align, left, right);
      if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleY = scales2[positionAxisID].getPixelForValue(value) + height - offset;
      } else if (position === "center") {
        titleY = (chartArea.bottom + chartArea.top) / 2 + height - offset;
      } else {
        titleY = offsetFromEdge(scale, position, offset);
      }
      maxWidth = right - left;
    } else {
      if (isObject(position)) {
        const positionAxisID = Object.keys(position)[0];
        const value = position[positionAxisID];
        titleX = scales2[positionAxisID].getPixelForValue(value) - width + offset;
      } else if (position === "center") {
        titleX = (chartArea.left + chartArea.right) / 2 - width + offset;
      } else {
        titleX = offsetFromEdge(scale, position, offset);
      }
      titleY = _alignStartEnd(align, bottom, top);
      rotation = position === "left" ? -HALF_PI : HALF_PI;
    }
    return {
      titleX,
      titleY,
      maxWidth,
      rotation
    };
  }
  var Scale = class _Scale extends Element {
    constructor(cfg) {
      super();
      this.id = cfg.id;
      this.type = cfg.type;
      this.options = void 0;
      this.ctx = cfg.ctx;
      this.chart = cfg.chart;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this._margins = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      };
      this.maxWidth = void 0;
      this.maxHeight = void 0;
      this.paddingTop = void 0;
      this.paddingBottom = void 0;
      this.paddingLeft = void 0;
      this.paddingRight = void 0;
      this.axis = void 0;
      this.labelRotation = void 0;
      this.min = void 0;
      this.max = void 0;
      this._range = void 0;
      this.ticks = [];
      this._gridLineItems = null;
      this._labelItems = null;
      this._labelSizes = null;
      this._length = 0;
      this._maxLength = 0;
      this._longestTextCache = {};
      this._startPixel = void 0;
      this._endPixel = void 0;
      this._reversePixels = false;
      this._userMax = void 0;
      this._userMin = void 0;
      this._suggestedMax = void 0;
      this._suggestedMin = void 0;
      this._ticksLength = 0;
      this._borderValue = 0;
      this._cache = {};
      this._dataLimitsCached = false;
      this.$context = void 0;
    }
    init(options) {
      this.options = options.setContext(this.getContext());
      this.axis = options.axis;
      this._userMin = this.parse(options.min);
      this._userMax = this.parse(options.max);
      this._suggestedMin = this.parse(options.suggestedMin);
      this._suggestedMax = this.parse(options.suggestedMax);
    }
    parse(raw, index2) {
      return raw;
    }
    getUserBounds() {
      let { _userMin, _userMax, _suggestedMin, _suggestedMax } = this;
      _userMin = finiteOrDefault(_userMin, Number.POSITIVE_INFINITY);
      _userMax = finiteOrDefault(_userMax, Number.NEGATIVE_INFINITY);
      _suggestedMin = finiteOrDefault(_suggestedMin, Number.POSITIVE_INFINITY);
      _suggestedMax = finiteOrDefault(_suggestedMax, Number.NEGATIVE_INFINITY);
      return {
        min: finiteOrDefault(_userMin, _suggestedMin),
        max: finiteOrDefault(_userMax, _suggestedMax),
        minDefined: isNumberFinite(_userMin),
        maxDefined: isNumberFinite(_userMax)
      };
    }
    getMinMax(canStack) {
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      let range;
      if (minDefined && maxDefined) {
        return {
          min,
          max
        };
      }
      const metas = this.getMatchingVisibleMetas();
      for (let i2 = 0, ilen = metas.length; i2 < ilen; ++i2) {
        range = metas[i2].controller.getMinMax(this, canStack);
        if (!minDefined) {
          min = Math.min(min, range.min);
        }
        if (!maxDefined) {
          max = Math.max(max, range.max);
        }
      }
      min = maxDefined && min > max ? max : min;
      max = minDefined && min > max ? min : max;
      return {
        min: finiteOrDefault(min, finiteOrDefault(max, min)),
        max: finiteOrDefault(max, finiteOrDefault(min, max))
      };
    }
    getPadding() {
      return {
        left: this.paddingLeft || 0,
        top: this.paddingTop || 0,
        right: this.paddingRight || 0,
        bottom: this.paddingBottom || 0
      };
    }
    getTicks() {
      return this.ticks;
    }
    getLabels() {
      const data = this.chart.data;
      return this.options.labels || (this.isHorizontal() ? data.xLabels : data.yLabels) || data.labels || [];
    }
    getLabelItems(chartArea = this.chart.chartArea) {
      const items = this._labelItems || (this._labelItems = this._computeLabelItems(chartArea));
      return items;
    }
    beforeLayout() {
      this._cache = {};
      this._dataLimitsCached = false;
    }
    beforeUpdate() {
      callback(this.options.beforeUpdate, [
        this
      ]);
    }
    update(maxWidth, maxHeight, margins) {
      const { beginAtZero, grace, ticks: tickOpts } = this.options;
      const sampleSize = tickOpts.sampleSize;
      this.beforeUpdate();
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins = Object.assign({
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
      }, margins);
      this.ticks = null;
      this._labelSizes = null;
      this._gridLineItems = null;
      this._labelItems = null;
      this.beforeSetDimensions();
      this.setDimensions();
      this.afterSetDimensions();
      this._maxLength = this.isHorizontal() ? this.width + margins.left + margins.right : this.height + margins.top + margins.bottom;
      if (!this._dataLimitsCached) {
        this.beforeDataLimits();
        this.determineDataLimits();
        this.afterDataLimits();
        this._range = _addGrace(this, grace, beginAtZero);
        this._dataLimitsCached = true;
      }
      this.beforeBuildTicks();
      this.ticks = this.buildTicks() || [];
      this.afterBuildTicks();
      const samplingEnabled = sampleSize < this.ticks.length;
      this._convertTicksToLabels(samplingEnabled ? sample(this.ticks, sampleSize) : this.ticks);
      this.configure();
      this.beforeCalculateLabelRotation();
      this.calculateLabelRotation();
      this.afterCalculateLabelRotation();
      if (tickOpts.display && (tickOpts.autoSkip || tickOpts.source === "auto")) {
        this.ticks = autoSkip(this, this.ticks);
        this._labelSizes = null;
        this.afterAutoSkip();
      }
      if (samplingEnabled) {
        this._convertTicksToLabels(this.ticks);
      }
      this.beforeFit();
      this.fit();
      this.afterFit();
      this.afterUpdate();
    }
    configure() {
      let reversePixels = this.options.reverse;
      let startPixel, endPixel;
      if (this.isHorizontal()) {
        startPixel = this.left;
        endPixel = this.right;
      } else {
        startPixel = this.top;
        endPixel = this.bottom;
        reversePixels = !reversePixels;
      }
      this._startPixel = startPixel;
      this._endPixel = endPixel;
      this._reversePixels = reversePixels;
      this._length = endPixel - startPixel;
      this._alignToPixels = this.options.alignToPixels;
    }
    afterUpdate() {
      callback(this.options.afterUpdate, [
        this
      ]);
    }
    beforeSetDimensions() {
      callback(this.options.beforeSetDimensions, [
        this
      ]);
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = 0;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = 0;
        this.bottom = this.height;
      }
      this.paddingLeft = 0;
      this.paddingTop = 0;
      this.paddingRight = 0;
      this.paddingBottom = 0;
    }
    afterSetDimensions() {
      callback(this.options.afterSetDimensions, [
        this
      ]);
    }
    _callHooks(name) {
      this.chart.notifyPlugins(name, this.getContext());
      callback(this.options[name], [
        this
      ]);
    }
    beforeDataLimits() {
      this._callHooks("beforeDataLimits");
    }
    determineDataLimits() {
    }
    afterDataLimits() {
      this._callHooks("afterDataLimits");
    }
    beforeBuildTicks() {
      this._callHooks("beforeBuildTicks");
    }
    buildTicks() {
      return [];
    }
    afterBuildTicks() {
      this._callHooks("afterBuildTicks");
    }
    beforeTickToLabelConversion() {
      callback(this.options.beforeTickToLabelConversion, [
        this
      ]);
    }
    generateTickLabels(ticks) {
      const tickOpts = this.options.ticks;
      let i2, ilen, tick;
      for (i2 = 0, ilen = ticks.length; i2 < ilen; i2++) {
        tick = ticks[i2];
        tick.label = callback(tickOpts.callback, [
          tick.value,
          i2,
          ticks
        ], this);
      }
    }
    afterTickToLabelConversion() {
      callback(this.options.afterTickToLabelConversion, [
        this
      ]);
    }
    beforeCalculateLabelRotation() {
      callback(this.options.beforeCalculateLabelRotation, [
        this
      ]);
    }
    calculateLabelRotation() {
      const options = this.options;
      const tickOpts = options.ticks;
      const numTicks = getTicksLimit(this.ticks.length, options.ticks.maxTicksLimit);
      const minRotation = tickOpts.minRotation || 0;
      const maxRotation = tickOpts.maxRotation;
      let labelRotation = minRotation;
      let tickWidth, maxHeight, maxLabelDiagonal;
      if (!this._isVisible() || !tickOpts.display || minRotation >= maxRotation || numTicks <= 1 || !this.isHorizontal()) {
        this.labelRotation = minRotation;
        return;
      }
      const labelSizes = this._getLabelSizes();
      const maxLabelWidth = labelSizes.widest.width;
      const maxLabelHeight = labelSizes.highest.height;
      const maxWidth = _limitValue(this.chart.width - maxLabelWidth, 0, this.maxWidth);
      tickWidth = options.offset ? this.maxWidth / numTicks : maxWidth / (numTicks - 1);
      if (maxLabelWidth + 6 > tickWidth) {
        tickWidth = maxWidth / (numTicks - (options.offset ? 0.5 : 1));
        maxHeight = this.maxHeight - getTickMarkLength(options.grid) - tickOpts.padding - getTitleHeight(options.title, this.chart.options.font);
        maxLabelDiagonal = Math.sqrt(maxLabelWidth * maxLabelWidth + maxLabelHeight * maxLabelHeight);
        labelRotation = toDegrees(Math.min(Math.asin(_limitValue((labelSizes.highest.height + 6) / tickWidth, -1, 1)), Math.asin(_limitValue(maxHeight / maxLabelDiagonal, -1, 1)) - Math.asin(_limitValue(maxLabelHeight / maxLabelDiagonal, -1, 1))));
        labelRotation = Math.max(minRotation, Math.min(maxRotation, labelRotation));
      }
      this.labelRotation = labelRotation;
    }
    afterCalculateLabelRotation() {
      callback(this.options.afterCalculateLabelRotation, [
        this
      ]);
    }
    afterAutoSkip() {
    }
    beforeFit() {
      callback(this.options.beforeFit, [
        this
      ]);
    }
    fit() {
      const minSize = {
        width: 0,
        height: 0
      };
      const { chart, options: { ticks: tickOpts, title: titleOpts, grid: gridOpts } } = this;
      const display = this._isVisible();
      const isHorizontal = this.isHorizontal();
      if (display) {
        const titleHeight = getTitleHeight(titleOpts, chart.options.font);
        if (isHorizontal) {
          minSize.width = this.maxWidth;
          minSize.height = getTickMarkLength(gridOpts) + titleHeight;
        } else {
          minSize.height = this.maxHeight;
          minSize.width = getTickMarkLength(gridOpts) + titleHeight;
        }
        if (tickOpts.display && this.ticks.length) {
          const { first, last, widest, highest } = this._getLabelSizes();
          const tickPadding = tickOpts.padding * 2;
          const angleRadians = toRadians(this.labelRotation);
          const cos = Math.cos(angleRadians);
          const sin = Math.sin(angleRadians);
          if (isHorizontal) {
            const labelHeight = tickOpts.mirror ? 0 : sin * widest.width + cos * highest.height;
            minSize.height = Math.min(this.maxHeight, minSize.height + labelHeight + tickPadding);
          } else {
            const labelWidth = tickOpts.mirror ? 0 : cos * widest.width + sin * highest.height;
            minSize.width = Math.min(this.maxWidth, minSize.width + labelWidth + tickPadding);
          }
          this._calculatePadding(first, last, sin, cos);
        }
      }
      this._handleMargins();
      if (isHorizontal) {
        this.width = this._length = chart.width - this._margins.left - this._margins.right;
        this.height = minSize.height;
      } else {
        this.width = minSize.width;
        this.height = this._length = chart.height - this._margins.top - this._margins.bottom;
      }
    }
    _calculatePadding(first, last, sin, cos) {
      const { ticks: { align, padding }, position } = this.options;
      const isRotated = this.labelRotation !== 0;
      const labelsBelowTicks = position !== "top" && this.axis === "x";
      if (this.isHorizontal()) {
        const offsetLeft = this.getPixelForTick(0) - this.left;
        const offsetRight = this.right - this.getPixelForTick(this.ticks.length - 1);
        let paddingLeft = 0;
        let paddingRight = 0;
        if (isRotated) {
          if (labelsBelowTicks) {
            paddingLeft = cos * first.width;
            paddingRight = sin * last.height;
          } else {
            paddingLeft = sin * first.height;
            paddingRight = cos * last.width;
          }
        } else if (align === "start") {
          paddingRight = last.width;
        } else if (align === "end") {
          paddingLeft = first.width;
        } else if (align !== "inner") {
          paddingLeft = first.width / 2;
          paddingRight = last.width / 2;
        }
        this.paddingLeft = Math.max((paddingLeft - offsetLeft + padding) * this.width / (this.width - offsetLeft), 0);
        this.paddingRight = Math.max((paddingRight - offsetRight + padding) * this.width / (this.width - offsetRight), 0);
      } else {
        let paddingTop = last.height / 2;
        let paddingBottom = first.height / 2;
        if (align === "start") {
          paddingTop = 0;
          paddingBottom = first.height;
        } else if (align === "end") {
          paddingTop = last.height;
          paddingBottom = 0;
        }
        this.paddingTop = paddingTop + padding;
        this.paddingBottom = paddingBottom + padding;
      }
    }
    _handleMargins() {
      if (this._margins) {
        this._margins.left = Math.max(this.paddingLeft, this._margins.left);
        this._margins.top = Math.max(this.paddingTop, this._margins.top);
        this._margins.right = Math.max(this.paddingRight, this._margins.right);
        this._margins.bottom = Math.max(this.paddingBottom, this._margins.bottom);
      }
    }
    afterFit() {
      callback(this.options.afterFit, [
        this
      ]);
    }
    isHorizontal() {
      const { axis, position } = this.options;
      return position === "top" || position === "bottom" || axis === "x";
    }
    isFullSize() {
      return this.options.fullSize;
    }
    _convertTicksToLabels(ticks) {
      this.beforeTickToLabelConversion();
      this.generateTickLabels(ticks);
      let i2, ilen;
      for (i2 = 0, ilen = ticks.length; i2 < ilen; i2++) {
        if (isNullOrUndef(ticks[i2].label)) {
          ticks.splice(i2, 1);
          ilen--;
          i2--;
        }
      }
      this.afterTickToLabelConversion();
    }
    _getLabelSizes() {
      let labelSizes = this._labelSizes;
      if (!labelSizes) {
        const sampleSize = this.options.ticks.sampleSize;
        let ticks = this.ticks;
        if (sampleSize < ticks.length) {
          ticks = sample(ticks, sampleSize);
        }
        this._labelSizes = labelSizes = this._computeLabelSizes(ticks, ticks.length, this.options.ticks.maxTicksLimit);
      }
      return labelSizes;
    }
    _computeLabelSizes(ticks, length, maxTicksLimit) {
      const { ctx, _longestTextCache: caches } = this;
      const widths = [];
      const heights = [];
      const increment = Math.floor(length / getTicksLimit(length, maxTicksLimit));
      let widestLabelSize = 0;
      let highestLabelSize = 0;
      let i2, j2, jlen, label, tickFont, fontString, cache, lineHeight, width, height, nestedLabel;
      for (i2 = 0; i2 < length; i2 += increment) {
        label = ticks[i2].label;
        tickFont = this._resolveTickFontOptions(i2);
        ctx.font = fontString = tickFont.string;
        cache = caches[fontString] = caches[fontString] || {
          data: {},
          gc: []
        };
        lineHeight = tickFont.lineHeight;
        width = height = 0;
        if (!isNullOrUndef(label) && !isArray(label)) {
          width = _measureText(ctx, cache.data, cache.gc, width, label);
          height = lineHeight;
        } else if (isArray(label)) {
          for (j2 = 0, jlen = label.length; j2 < jlen; ++j2) {
            nestedLabel = label[j2];
            if (!isNullOrUndef(nestedLabel) && !isArray(nestedLabel)) {
              width = _measureText(ctx, cache.data, cache.gc, width, nestedLabel);
              height += lineHeight;
            }
          }
        }
        widths.push(width);
        heights.push(height);
        widestLabelSize = Math.max(width, widestLabelSize);
        highestLabelSize = Math.max(height, highestLabelSize);
      }
      garbageCollect(caches, length);
      const widest = widths.indexOf(widestLabelSize);
      const highest = heights.indexOf(highestLabelSize);
      const valueAt = (idx) => ({
        width: widths[idx] || 0,
        height: heights[idx] || 0
      });
      return {
        first: valueAt(0),
        last: valueAt(length - 1),
        widest: valueAt(widest),
        highest: valueAt(highest),
        widths,
        heights
      };
    }
    getLabelForValue(value) {
      return value;
    }
    getPixelForValue(value, index2) {
      return NaN;
    }
    getValueForPixel(pixel) {
    }
    getPixelForTick(index2) {
      const ticks = this.ticks;
      if (index2 < 0 || index2 > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index2].value);
    }
    getPixelForDecimal(decimal) {
      if (this._reversePixels) {
        decimal = 1 - decimal;
      }
      const pixel = this._startPixel + decimal * this._length;
      return _int16Range(this._alignToPixels ? _alignPixel(this.chart, pixel, 0) : pixel);
    }
    getDecimalForPixel(pixel) {
      const decimal = (pixel - this._startPixel) / this._length;
      return this._reversePixels ? 1 - decimal : decimal;
    }
    getBasePixel() {
      return this.getPixelForValue(this.getBaseValue());
    }
    getBaseValue() {
      const { min, max } = this;
      return min < 0 && max < 0 ? max : min > 0 && max > 0 ? min : 0;
    }
    getContext(index2) {
      const ticks = this.ticks || [];
      if (index2 >= 0 && index2 < ticks.length) {
        const tick = ticks[index2];
        return tick.$context || (tick.$context = createTickContext(this.getContext(), index2, tick));
      }
      return this.$context || (this.$context = createScaleContext(this.chart.getContext(), this));
    }
    _tickSize() {
      const optionTicks = this.options.ticks;
      const rot = toRadians(this.labelRotation);
      const cos = Math.abs(Math.cos(rot));
      const sin = Math.abs(Math.sin(rot));
      const labelSizes = this._getLabelSizes();
      const padding = optionTicks.autoSkipPadding || 0;
      const w2 = labelSizes ? labelSizes.widest.width + padding : 0;
      const h3 = labelSizes ? labelSizes.highest.height + padding : 0;
      return this.isHorizontal() ? h3 * cos > w2 * sin ? w2 / cos : h3 / sin : h3 * sin < w2 * cos ? h3 / cos : w2 / sin;
    }
    _isVisible() {
      const display = this.options.display;
      if (display !== "auto") {
        return !!display;
      }
      return this.getMatchingVisibleMetas().length > 0;
    }
    _computeGridLineItems(chartArea) {
      const axis = this.axis;
      const chart = this.chart;
      const options = this.options;
      const { grid, position, border } = options;
      const offset = grid.offset;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const ticksLength = ticks.length + (offset ? 1 : 0);
      const tl = getTickMarkLength(grid);
      const items = [];
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = borderOpts.display ? borderOpts.width : 0;
      const axisHalfWidth = axisWidth / 2;
      const alignBorderValue = function(pixel) {
        return _alignPixel(chart, pixel, axisWidth);
      };
      let borderValue, i2, lineValue, alignedLineValue;
      let tx1, ty1, tx2, ty2, x1, y1, x2, y2;
      if (position === "top") {
        borderValue = alignBorderValue(this.bottom);
        ty1 = this.bottom - tl;
        ty2 = borderValue - axisHalfWidth;
        y1 = alignBorderValue(chartArea.top) + axisHalfWidth;
        y2 = chartArea.bottom;
      } else if (position === "bottom") {
        borderValue = alignBorderValue(this.top);
        y1 = chartArea.top;
        y2 = alignBorderValue(chartArea.bottom) - axisHalfWidth;
        ty1 = borderValue + axisHalfWidth;
        ty2 = this.top + tl;
      } else if (position === "left") {
        borderValue = alignBorderValue(this.right);
        tx1 = this.right - tl;
        tx2 = borderValue - axisHalfWidth;
        x1 = alignBorderValue(chartArea.left) + axisHalfWidth;
        x2 = chartArea.right;
      } else if (position === "right") {
        borderValue = alignBorderValue(this.left);
        x1 = chartArea.left;
        x2 = alignBorderValue(chartArea.right) - axisHalfWidth;
        tx1 = borderValue + axisHalfWidth;
        tx2 = this.left + tl;
      } else if (axis === "x") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.top + chartArea.bottom) / 2 + 0.5);
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        y1 = chartArea.top;
        y2 = chartArea.bottom;
        ty1 = borderValue + axisHalfWidth;
        ty2 = ty1 + tl;
      } else if (axis === "y") {
        if (position === "center") {
          borderValue = alignBorderValue((chartArea.left + chartArea.right) / 2);
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          borderValue = alignBorderValue(this.chart.scales[positionAxisID].getPixelForValue(value));
        }
        tx1 = borderValue - axisHalfWidth;
        tx2 = tx1 - tl;
        x1 = chartArea.left;
        x2 = chartArea.right;
      }
      const limit = valueOrDefault(options.ticks.maxTicksLimit, ticksLength);
      const step = Math.max(1, Math.ceil(ticksLength / limit));
      for (i2 = 0; i2 < ticksLength; i2 += step) {
        const context = this.getContext(i2);
        const optsAtIndex = grid.setContext(context);
        const optsAtIndexBorder = border.setContext(context);
        const lineWidth = optsAtIndex.lineWidth;
        const lineColor = optsAtIndex.color;
        const borderDash = optsAtIndexBorder.dash || [];
        const borderDashOffset = optsAtIndexBorder.dashOffset;
        const tickWidth = optsAtIndex.tickWidth;
        const tickColor = optsAtIndex.tickColor;
        const tickBorderDash = optsAtIndex.tickBorderDash || [];
        const tickBorderDashOffset = optsAtIndex.tickBorderDashOffset;
        lineValue = getPixelForGridLine(this, i2, offset);
        if (lineValue === void 0) {
          continue;
        }
        alignedLineValue = _alignPixel(chart, lineValue, lineWidth);
        if (isHorizontal) {
          tx1 = tx2 = x1 = x2 = alignedLineValue;
        } else {
          ty1 = ty2 = y1 = y2 = alignedLineValue;
        }
        items.push({
          tx1,
          ty1,
          tx2,
          ty2,
          x1,
          y1,
          x2,
          y2,
          width: lineWidth,
          color: lineColor,
          borderDash,
          borderDashOffset,
          tickWidth,
          tickColor,
          tickBorderDash,
          tickBorderDashOffset
        });
      }
      this._ticksLength = ticksLength;
      this._borderValue = borderValue;
      return items;
    }
    _computeLabelItems(chartArea) {
      const axis = this.axis;
      const options = this.options;
      const { position, ticks: optionTicks } = options;
      const isHorizontal = this.isHorizontal();
      const ticks = this.ticks;
      const { align, crossAlign, padding, mirror } = optionTicks;
      const tl = getTickMarkLength(options.grid);
      const tickAndPadding = tl + padding;
      const hTickAndPadding = mirror ? -padding : tickAndPadding;
      const rotation = -toRadians(this.labelRotation);
      const items = [];
      let i2, ilen, tick, label, x2, y2, textAlign, pixel, font, lineHeight, lineCount, textOffset;
      let textBaseline = "middle";
      if (position === "top") {
        y2 = this.bottom - hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "bottom") {
        y2 = this.top + hTickAndPadding;
        textAlign = this._getXAxisLabelAlignment();
      } else if (position === "left") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x2 = ret.x;
      } else if (position === "right") {
        const ret = this._getYAxisLabelAlignment(tl);
        textAlign = ret.textAlign;
        x2 = ret.x;
      } else if (axis === "x") {
        if (position === "center") {
          y2 = (chartArea.top + chartArea.bottom) / 2 + tickAndPadding;
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          y2 = this.chart.scales[positionAxisID].getPixelForValue(value) + tickAndPadding;
        }
        textAlign = this._getXAxisLabelAlignment();
      } else if (axis === "y") {
        if (position === "center") {
          x2 = (chartArea.left + chartArea.right) / 2 - tickAndPadding;
        } else if (isObject(position)) {
          const positionAxisID = Object.keys(position)[0];
          const value = position[positionAxisID];
          x2 = this.chart.scales[positionAxisID].getPixelForValue(value);
        }
        textAlign = this._getYAxisLabelAlignment(tl).textAlign;
      }
      if (axis === "y") {
        if (align === "start") {
          textBaseline = "top";
        } else if (align === "end") {
          textBaseline = "bottom";
        }
      }
      const labelSizes = this._getLabelSizes();
      for (i2 = 0, ilen = ticks.length; i2 < ilen; ++i2) {
        tick = ticks[i2];
        label = tick.label;
        const optsAtIndex = optionTicks.setContext(this.getContext(i2));
        pixel = this.getPixelForTick(i2) + optionTicks.labelOffset;
        font = this._resolveTickFontOptions(i2);
        lineHeight = font.lineHeight;
        lineCount = isArray(label) ? label.length : 1;
        const halfCount = lineCount / 2;
        const color2 = optsAtIndex.color;
        const strokeColor = optsAtIndex.textStrokeColor;
        const strokeWidth = optsAtIndex.textStrokeWidth;
        let tickTextAlign = textAlign;
        if (isHorizontal) {
          x2 = pixel;
          if (textAlign === "inner") {
            if (i2 === ilen - 1) {
              tickTextAlign = !this.options.reverse ? "right" : "left";
            } else if (i2 === 0) {
              tickTextAlign = !this.options.reverse ? "left" : "right";
            } else {
              tickTextAlign = "center";
            }
          }
          if (position === "top") {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = -lineCount * lineHeight + lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = -labelSizes.highest.height / 2 - halfCount * lineHeight + lineHeight;
            } else {
              textOffset = -labelSizes.highest.height + lineHeight / 2;
            }
          } else {
            if (crossAlign === "near" || rotation !== 0) {
              textOffset = lineHeight / 2;
            } else if (crossAlign === "center") {
              textOffset = labelSizes.highest.height / 2 - halfCount * lineHeight;
            } else {
              textOffset = labelSizes.highest.height - lineCount * lineHeight;
            }
          }
          if (mirror) {
            textOffset *= -1;
          }
          if (rotation !== 0 && !optsAtIndex.showLabelBackdrop) {
            x2 += lineHeight / 2 * Math.sin(rotation);
          }
        } else {
          y2 = pixel;
          textOffset = (1 - lineCount) * lineHeight / 2;
        }
        let backdrop;
        if (optsAtIndex.showLabelBackdrop) {
          const labelPadding = toPadding(optsAtIndex.backdropPadding);
          const height = labelSizes.heights[i2];
          const width = labelSizes.widths[i2];
          let top = textOffset - labelPadding.top;
          let left = 0 - labelPadding.left;
          switch (textBaseline) {
            case "middle":
              top -= height / 2;
              break;
            case "bottom":
              top -= height;
              break;
          }
          switch (textAlign) {
            case "center":
              left -= width / 2;
              break;
            case "right":
              left -= width;
              break;
          }
          backdrop = {
            left,
            top,
            width: width + labelPadding.width,
            height: height + labelPadding.height,
            color: optsAtIndex.backdropColor
          };
        }
        items.push({
          label,
          font,
          textOffset,
          options: {
            rotation,
            color: color2,
            strokeColor,
            strokeWidth,
            textAlign: tickTextAlign,
            textBaseline,
            translation: [
              x2,
              y2
            ],
            backdrop
          }
        });
      }
      return items;
    }
    _getXAxisLabelAlignment() {
      const { position, ticks } = this.options;
      const rotation = -toRadians(this.labelRotation);
      if (rotation) {
        return position === "top" ? "left" : "right";
      }
      let align = "center";
      if (ticks.align === "start") {
        align = "left";
      } else if (ticks.align === "end") {
        align = "right";
      } else if (ticks.align === "inner") {
        align = "inner";
      }
      return align;
    }
    _getYAxisLabelAlignment(tl) {
      const { position, ticks: { crossAlign, mirror, padding } } = this.options;
      const labelSizes = this._getLabelSizes();
      const tickAndPadding = tl + padding;
      const widest = labelSizes.widest.width;
      let textAlign;
      let x2;
      if (position === "left") {
        if (mirror) {
          x2 = this.right + padding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 += widest / 2;
          } else {
            textAlign = "right";
            x2 += widest;
          }
        } else {
          x2 = this.right - tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 -= widest / 2;
          } else {
            textAlign = "left";
            x2 = this.left;
          }
        }
      } else if (position === "right") {
        if (mirror) {
          x2 = this.left + padding;
          if (crossAlign === "near") {
            textAlign = "right";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 -= widest / 2;
          } else {
            textAlign = "left";
            x2 -= widest;
          }
        } else {
          x2 = this.left + tickAndPadding;
          if (crossAlign === "near") {
            textAlign = "left";
          } else if (crossAlign === "center") {
            textAlign = "center";
            x2 += widest / 2;
          } else {
            textAlign = "right";
            x2 = this.right;
          }
        }
      } else {
        textAlign = "right";
      }
      return {
        textAlign,
        x: x2
      };
    }
    _computeLabelArea() {
      if (this.options.ticks.mirror) {
        return;
      }
      const chart = this.chart;
      const position = this.options.position;
      if (position === "left" || position === "right") {
        return {
          top: 0,
          left: this.left,
          bottom: chart.height,
          right: this.right
        };
      }
      if (position === "top" || position === "bottom") {
        return {
          top: this.top,
          left: 0,
          bottom: this.bottom,
          right: chart.width
        };
      }
    }
    drawBackground() {
      const { ctx, options: { backgroundColor }, left, top, width, height } = this;
      if (backgroundColor) {
        ctx.save();
        ctx.fillStyle = backgroundColor;
        ctx.fillRect(left, top, width, height);
        ctx.restore();
      }
    }
    getLineWidthForValue(value) {
      const grid = this.options.grid;
      if (!this._isVisible() || !grid.display) {
        return 0;
      }
      const ticks = this.ticks;
      const index2 = ticks.findIndex((t2) => t2.value === value);
      if (index2 >= 0) {
        const opts = grid.setContext(this.getContext(index2));
        return opts.lineWidth;
      }
      return 0;
    }
    drawGrid(chartArea) {
      const grid = this.options.grid;
      const ctx = this.ctx;
      const items = this._gridLineItems || (this._gridLineItems = this._computeGridLineItems(chartArea));
      let i2, ilen;
      const drawLine = (p1, p2, style) => {
        if (!style.width || !style.color) {
          return;
        }
        ctx.save();
        ctx.lineWidth = style.width;
        ctx.strokeStyle = style.color;
        ctx.setLineDash(style.borderDash || []);
        ctx.lineDashOffset = style.borderDashOffset;
        ctx.beginPath();
        ctx.moveTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
        ctx.restore();
      };
      if (grid.display) {
        for (i2 = 0, ilen = items.length; i2 < ilen; ++i2) {
          const item = items[i2];
          if (grid.drawOnChartArea) {
            drawLine({
              x: item.x1,
              y: item.y1
            }, {
              x: item.x2,
              y: item.y2
            }, item);
          }
          if (grid.drawTicks) {
            drawLine({
              x: item.tx1,
              y: item.ty1
            }, {
              x: item.tx2,
              y: item.ty2
            }, {
              color: item.tickColor,
              width: item.tickWidth,
              borderDash: item.tickBorderDash,
              borderDashOffset: item.tickBorderDashOffset
            });
          }
        }
      }
    }
    drawBorder() {
      const { chart, ctx, options: { border, grid } } = this;
      const borderOpts = border.setContext(this.getContext());
      const axisWidth = border.display ? borderOpts.width : 0;
      if (!axisWidth) {
        return;
      }
      const lastLineWidth = grid.setContext(this.getContext(0)).lineWidth;
      const borderValue = this._borderValue;
      let x1, x2, y1, y2;
      if (this.isHorizontal()) {
        x1 = _alignPixel(chart, this.left, axisWidth) - axisWidth / 2;
        x2 = _alignPixel(chart, this.right, lastLineWidth) + lastLineWidth / 2;
        y1 = y2 = borderValue;
      } else {
        y1 = _alignPixel(chart, this.top, axisWidth) - axisWidth / 2;
        y2 = _alignPixel(chart, this.bottom, lastLineWidth) + lastLineWidth / 2;
        x1 = x2 = borderValue;
      }
      ctx.save();
      ctx.lineWidth = borderOpts.width;
      ctx.strokeStyle = borderOpts.color;
      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.stroke();
      ctx.restore();
    }
    drawLabels(chartArea) {
      const optionTicks = this.options.ticks;
      if (!optionTicks.display) {
        return;
      }
      const ctx = this.ctx;
      const area = this._computeLabelArea();
      if (area) {
        clipArea(ctx, area);
      }
      const items = this.getLabelItems(chartArea);
      for (const item of items) {
        const renderTextOptions = item.options;
        const tickFont = item.font;
        const label = item.label;
        const y2 = item.textOffset;
        renderText(ctx, label, 0, y2, tickFont, renderTextOptions);
      }
      if (area) {
        unclipArea(ctx);
      }
    }
    drawTitle() {
      const { ctx, options: { position, title, reverse } } = this;
      if (!title.display) {
        return;
      }
      const font = toFont(title.font);
      const padding = toPadding(title.padding);
      const align = title.align;
      let offset = font.lineHeight / 2;
      if (position === "bottom" || position === "center" || isObject(position)) {
        offset += padding.bottom;
        if (isArray(title.text)) {
          offset += font.lineHeight * (title.text.length - 1);
        }
      } else {
        offset += padding.top;
      }
      const { titleX, titleY, maxWidth, rotation } = titleArgs(this, offset, position, align);
      renderText(ctx, title.text, 0, 0, font, {
        color: title.color,
        maxWidth,
        rotation,
        textAlign: titleAlign(align, position, reverse),
        textBaseline: "middle",
        translation: [
          titleX,
          titleY
        ]
      });
    }
    draw(chartArea) {
      if (!this._isVisible()) {
        return;
      }
      this.drawBackground();
      this.drawGrid(chartArea);
      this.drawBorder();
      this.drawTitle();
      this.drawLabels(chartArea);
    }
    _layers() {
      const opts = this.options;
      const tz = opts.ticks && opts.ticks.z || 0;
      const gz = valueOrDefault(opts.grid && opts.grid.z, -1);
      const bz = valueOrDefault(opts.border && opts.border.z, 0);
      if (!this._isVisible() || this.draw !== _Scale.prototype.draw) {
        return [
          {
            z: tz,
            draw: (chartArea) => {
              this.draw(chartArea);
            }
          }
        ];
      }
      return [
        {
          z: gz,
          draw: (chartArea) => {
            this.drawBackground();
            this.drawGrid(chartArea);
            this.drawTitle();
          }
        },
        {
          z: bz,
          draw: () => {
            this.drawBorder();
          }
        },
        {
          z: tz,
          draw: (chartArea) => {
            this.drawLabels(chartArea);
          }
        }
      ];
    }
    getMatchingVisibleMetas(type) {
      const metas = this.chart.getSortedVisibleDatasetMetas();
      const axisID = this.axis + "AxisID";
      const result = [];
      let i2, ilen;
      for (i2 = 0, ilen = metas.length; i2 < ilen; ++i2) {
        const meta = metas[i2];
        if (meta[axisID] === this.id && (!type || meta.type === type)) {
          result.push(meta);
        }
      }
      return result;
    }
    _resolveTickFontOptions(index2) {
      const opts = this.options.ticks.setContext(this.getContext(index2));
      return toFont(opts.font);
    }
    _maxDigits() {
      const fontSize = this._resolveTickFontOptions(0).lineHeight;
      return (this.isHorizontal() ? this.width : this.height) / fontSize;
    }
  };
  var TypedRegistry = class {
    constructor(type, scope, override) {
      this.type = type;
      this.scope = scope;
      this.override = override;
      this.items = /* @__PURE__ */ Object.create(null);
    }
    isForType(type) {
      return Object.prototype.isPrototypeOf.call(this.type.prototype, type.prototype);
    }
    register(item) {
      const proto = Object.getPrototypeOf(item);
      let parentScope;
      if (isIChartComponent(proto)) {
        parentScope = this.register(proto);
      }
      const items = this.items;
      const id = item.id;
      const scope = this.scope + "." + id;
      if (!id) {
        throw new Error("class does not have id: " + item);
      }
      if (id in items) {
        return scope;
      }
      items[id] = item;
      registerDefaults(item, scope, parentScope);
      if (this.override) {
        defaults.override(item.id, item.overrides);
      }
      return scope;
    }
    get(id) {
      return this.items[id];
    }
    unregister(item) {
      const items = this.items;
      const id = item.id;
      const scope = this.scope;
      if (id in items) {
        delete items[id];
      }
      if (scope && id in defaults[scope]) {
        delete defaults[scope][id];
        if (this.override) {
          delete overrides[id];
        }
      }
    }
  };
  function registerDefaults(item, scope, parentScope) {
    const itemDefaults = merge(/* @__PURE__ */ Object.create(null), [
      parentScope ? defaults.get(parentScope) : {},
      defaults.get(scope),
      item.defaults
    ]);
    defaults.set(scope, itemDefaults);
    if (item.defaultRoutes) {
      routeDefaults(scope, item.defaultRoutes);
    }
    if (item.descriptors) {
      defaults.describe(scope, item.descriptors);
    }
  }
  function routeDefaults(scope, routes) {
    Object.keys(routes).forEach((property) => {
      const propertyParts = property.split(".");
      const sourceName = propertyParts.pop();
      const sourceScope = [
        scope
      ].concat(propertyParts).join(".");
      const parts = routes[property].split(".");
      const targetName = parts.pop();
      const targetScope = parts.join(".");
      defaults.route(sourceScope, sourceName, targetScope, targetName);
    });
  }
  function isIChartComponent(proto) {
    return "id" in proto && "defaults" in proto;
  }
  var Registry = class {
    constructor() {
      this.controllers = new TypedRegistry(DatasetController, "datasets", true);
      this.elements = new TypedRegistry(Element, "elements");
      this.plugins = new TypedRegistry(Object, "plugins");
      this.scales = new TypedRegistry(Scale, "scales");
      this._typedRegistries = [
        this.controllers,
        this.scales,
        this.elements
      ];
    }
    add(...args) {
      this._each("register", args);
    }
    remove(...args) {
      this._each("unregister", args);
    }
    addControllers(...args) {
      this._each("register", args, this.controllers);
    }
    addElements(...args) {
      this._each("register", args, this.elements);
    }
    addPlugins(...args) {
      this._each("register", args, this.plugins);
    }
    addScales(...args) {
      this._each("register", args, this.scales);
    }
    getController(id) {
      return this._get(id, this.controllers, "controller");
    }
    getElement(id) {
      return this._get(id, this.elements, "element");
    }
    getPlugin(id) {
      return this._get(id, this.plugins, "plugin");
    }
    getScale(id) {
      return this._get(id, this.scales, "scale");
    }
    removeControllers(...args) {
      this._each("unregister", args, this.controllers);
    }
    removeElements(...args) {
      this._each("unregister", args, this.elements);
    }
    removePlugins(...args) {
      this._each("unregister", args, this.plugins);
    }
    removeScales(...args) {
      this._each("unregister", args, this.scales);
    }
    _each(method, args, typedRegistry) {
      [
        ...args
      ].forEach((arg) => {
        const reg = typedRegistry || this._getRegistryForType(arg);
        if (typedRegistry || reg.isForType(arg) || reg === this.plugins && arg.id) {
          this._exec(method, reg, arg);
        } else {
          each(arg, (item) => {
            const itemReg = typedRegistry || this._getRegistryForType(item);
            this._exec(method, itemReg, item);
          });
        }
      });
    }
    _exec(method, registry2, component) {
      const camelMethod = _capitalize(method);
      callback(component["before" + camelMethod], [], component);
      registry2[method](component);
      callback(component["after" + camelMethod], [], component);
    }
    _getRegistryForType(type) {
      for (let i2 = 0; i2 < this._typedRegistries.length; i2++) {
        const reg = this._typedRegistries[i2];
        if (reg.isForType(type)) {
          return reg;
        }
      }
      return this.plugins;
    }
    _get(id, typedRegistry, type) {
      const item = typedRegistry.get(id);
      if (item === void 0) {
        throw new Error('"' + id + '" is not a registered ' + type + ".");
      }
      return item;
    }
  };
  var registry = /* @__PURE__ */ new Registry();
  var PluginService = class {
    constructor() {
      this._init = [];
    }
    notify(chart, hook, args, filter) {
      if (hook === "beforeInit") {
        this._init = this._createDescriptors(chart, true);
        this._notify(this._init, chart, "install");
      }
      const descriptors2 = filter ? this._descriptors(chart).filter(filter) : this._descriptors(chart);
      const result = this._notify(descriptors2, chart, hook, args);
      if (hook === "afterDestroy") {
        this._notify(descriptors2, chart, "stop");
        this._notify(this._init, chart, "uninstall");
      }
      return result;
    }
    _notify(descriptors2, chart, hook, args) {
      args = args || {};
      for (const descriptor of descriptors2) {
        const plugin = descriptor.plugin;
        const method = plugin[hook];
        const params = [
          chart,
          args,
          descriptor.options
        ];
        if (callback(method, params, plugin) === false && args.cancelable) {
          return false;
        }
      }
      return true;
    }
    invalidate() {
      if (!isNullOrUndef(this._cache)) {
        this._oldCache = this._cache;
        this._cache = void 0;
      }
    }
    _descriptors(chart) {
      if (this._cache) {
        return this._cache;
      }
      const descriptors2 = this._cache = this._createDescriptors(chart);
      this._notifyStateChanges(chart);
      return descriptors2;
    }
    _createDescriptors(chart, all) {
      const config = chart && chart.config;
      const options = valueOrDefault(config.options && config.options.plugins, {});
      const plugins2 = allPlugins(config);
      return options === false && !all ? [] : createDescriptors(chart, plugins2, options, all);
    }
    _notifyStateChanges(chart) {
      const previousDescriptors = this._oldCache || [];
      const descriptors2 = this._cache;
      const diff = (a2, b2) => a2.filter((x2) => !b2.some((y2) => x2.plugin.id === y2.plugin.id));
      this._notify(diff(previousDescriptors, descriptors2), chart, "stop");
      this._notify(diff(descriptors2, previousDescriptors), chart, "start");
    }
  };
  function allPlugins(config) {
    const localIds = {};
    const plugins2 = [];
    const keys = Object.keys(registry.plugins.items);
    for (let i2 = 0; i2 < keys.length; i2++) {
      plugins2.push(registry.getPlugin(keys[i2]));
    }
    const local = config.plugins || [];
    for (let i2 = 0; i2 < local.length; i2++) {
      const plugin = local[i2];
      if (plugins2.indexOf(plugin) === -1) {
        plugins2.push(plugin);
        localIds[plugin.id] = true;
      }
    }
    return {
      plugins: plugins2,
      localIds
    };
  }
  function getOpts(options, all) {
    if (!all && options === false) {
      return null;
    }
    if (options === true) {
      return {};
    }
    return options;
  }
  function createDescriptors(chart, { plugins: plugins2, localIds }, options, all) {
    const result = [];
    const context = chart.getContext();
    for (const plugin of plugins2) {
      const id = plugin.id;
      const opts = getOpts(options[id], all);
      if (opts === null) {
        continue;
      }
      result.push({
        plugin,
        options: pluginOpts(chart.config, {
          plugin,
          local: localIds[id]
        }, opts, context)
      });
    }
    return result;
  }
  function pluginOpts(config, { plugin, local }, opts, context) {
    const keys = config.pluginScopeKeys(plugin);
    const scopes = config.getOptionScopes(opts, keys);
    if (local && plugin.defaults) {
      scopes.push(plugin.defaults);
    }
    return config.createResolver(scopes, context, [
      ""
    ], {
      scriptable: false,
      indexable: false,
      allKeys: true
    });
  }
  function getIndexAxis(type, options) {
    const datasetDefaults = defaults.datasets[type] || {};
    const datasetOptions = (options.datasets || {})[type] || {};
    return datasetOptions.indexAxis || options.indexAxis || datasetDefaults.indexAxis || "x";
  }
  function getAxisFromDefaultScaleID(id, indexAxis) {
    let axis = id;
    if (id === "_index_") {
      axis = indexAxis;
    } else if (id === "_value_") {
      axis = indexAxis === "x" ? "y" : "x";
    }
    return axis;
  }
  function getDefaultScaleIDFromAxis(axis, indexAxis) {
    return axis === indexAxis ? "_index_" : "_value_";
  }
  function idMatchesAxis(id) {
    if (id === "x" || id === "y" || id === "r") {
      return id;
    }
  }
  function axisFromPosition(position) {
    if (position === "top" || position === "bottom") {
      return "x";
    }
    if (position === "left" || position === "right") {
      return "y";
    }
  }
  function determineAxis(id, ...scaleOptions) {
    if (idMatchesAxis(id)) {
      return id;
    }
    for (const opts of scaleOptions) {
      const axis = opts.axis || axisFromPosition(opts.position) || id.length > 1 && idMatchesAxis(id[0].toLowerCase());
      if (axis) {
        return axis;
      }
    }
    throw new Error(`Cannot determine type of '${id}' axis. Please provide 'axis' or 'position' option.`);
  }
  function getAxisFromDataset(id, axis, dataset) {
    if (dataset[axis + "AxisID"] === id) {
      return {
        axis
      };
    }
  }
  function retrieveAxisFromDatasets(id, config) {
    if (config.data && config.data.datasets) {
      const boundDs = config.data.datasets.filter((d2) => d2.xAxisID === id || d2.yAxisID === id);
      if (boundDs.length) {
        return getAxisFromDataset(id, "x", boundDs[0]) || getAxisFromDataset(id, "y", boundDs[0]);
      }
    }
    return {};
  }
  function mergeScaleConfig(config, options) {
    const chartDefaults = overrides[config.type] || {
      scales: {}
    };
    const configScales = options.scales || {};
    const chartIndexAxis = getIndexAxis(config.type, options);
    const scales2 = /* @__PURE__ */ Object.create(null);
    Object.keys(configScales).forEach((id) => {
      const scaleConf = configScales[id];
      if (!isObject(scaleConf)) {
        return console.error(`Invalid scale configuration for scale: ${id}`);
      }
      if (scaleConf._proxy) {
        return console.warn(`Ignoring resolver passed as options for scale: ${id}`);
      }
      const axis = determineAxis(id, scaleConf, retrieveAxisFromDatasets(id, config), defaults.scales[scaleConf.type]);
      const defaultId = getDefaultScaleIDFromAxis(axis, chartIndexAxis);
      const defaultScaleOptions = chartDefaults.scales || {};
      scales2[id] = mergeIf(/* @__PURE__ */ Object.create(null), [
        {
          axis
        },
        scaleConf,
        defaultScaleOptions[axis],
        defaultScaleOptions[defaultId]
      ]);
    });
    config.data.datasets.forEach((dataset) => {
      const type = dataset.type || config.type;
      const indexAxis = dataset.indexAxis || getIndexAxis(type, options);
      const datasetDefaults = overrides[type] || {};
      const defaultScaleOptions = datasetDefaults.scales || {};
      Object.keys(defaultScaleOptions).forEach((defaultID) => {
        const axis = getAxisFromDefaultScaleID(defaultID, indexAxis);
        const id = dataset[axis + "AxisID"] || axis;
        scales2[id] = scales2[id] || /* @__PURE__ */ Object.create(null);
        mergeIf(scales2[id], [
          {
            axis
          },
          configScales[id],
          defaultScaleOptions[defaultID]
        ]);
      });
    });
    Object.keys(scales2).forEach((key) => {
      const scale = scales2[key];
      mergeIf(scale, [
        defaults.scales[scale.type],
        defaults.scale
      ]);
    });
    return scales2;
  }
  function initOptions(config) {
    const options = config.options || (config.options = {});
    options.plugins = valueOrDefault(options.plugins, {});
    options.scales = mergeScaleConfig(config, options);
  }
  function initData(data) {
    data = data || {};
    data.datasets = data.datasets || [];
    data.labels = data.labels || [];
    return data;
  }
  function initConfig(config) {
    config = config || {};
    config.data = initData(config.data);
    initOptions(config);
    return config;
  }
  var keyCache = /* @__PURE__ */ new Map();
  var keysCached = /* @__PURE__ */ new Set();
  function cachedKeys(cacheKey, generate) {
    let keys = keyCache.get(cacheKey);
    if (!keys) {
      keys = generate();
      keyCache.set(cacheKey, keys);
      keysCached.add(keys);
    }
    return keys;
  }
  var addIfFound = (set2, obj, key) => {
    const opts = resolveObjectKey(obj, key);
    if (opts !== void 0) {
      set2.add(opts);
    }
  };
  var Config = class {
    constructor(config) {
      this._config = initConfig(config);
      this._scopeCache = /* @__PURE__ */ new Map();
      this._resolverCache = /* @__PURE__ */ new Map();
    }
    get platform() {
      return this._config.platform;
    }
    get type() {
      return this._config.type;
    }
    set type(type) {
      this._config.type = type;
    }
    get data() {
      return this._config.data;
    }
    set data(data) {
      this._config.data = initData(data);
    }
    get options() {
      return this._config.options;
    }
    set options(options) {
      this._config.options = options;
    }
    get plugins() {
      return this._config.plugins;
    }
    update() {
      const config = this._config;
      this.clearCache();
      initOptions(config);
    }
    clearCache() {
      this._scopeCache.clear();
      this._resolverCache.clear();
    }
    datasetScopeKeys(datasetType) {
      return cachedKeys(datasetType, () => [
        [
          `datasets.${datasetType}`,
          ""
        ]
      ]);
    }
    datasetAnimationScopeKeys(datasetType, transition) {
      return cachedKeys(`${datasetType}.transition.${transition}`, () => [
        [
          `datasets.${datasetType}.transitions.${transition}`,
          `transitions.${transition}`
        ],
        [
          `datasets.${datasetType}`,
          ""
        ]
      ]);
    }
    datasetElementScopeKeys(datasetType, elementType) {
      return cachedKeys(`${datasetType}-${elementType}`, () => [
        [
          `datasets.${datasetType}.elements.${elementType}`,
          `datasets.${datasetType}`,
          `elements.${elementType}`,
          ""
        ]
      ]);
    }
    pluginScopeKeys(plugin) {
      const id = plugin.id;
      const type = this.type;
      return cachedKeys(`${type}-plugin-${id}`, () => [
        [
          `plugins.${id}`,
          ...plugin.additionalOptionScopes || []
        ]
      ]);
    }
    _cachedScopes(mainScope, resetCache) {
      const _scopeCache = this._scopeCache;
      let cache = _scopeCache.get(mainScope);
      if (!cache || resetCache) {
        cache = /* @__PURE__ */ new Map();
        _scopeCache.set(mainScope, cache);
      }
      return cache;
    }
    getOptionScopes(mainScope, keyLists, resetCache) {
      const { options, type } = this;
      const cache = this._cachedScopes(mainScope, resetCache);
      const cached = cache.get(keyLists);
      if (cached) {
        return cached;
      }
      const scopes = /* @__PURE__ */ new Set();
      keyLists.forEach((keys) => {
        if (mainScope) {
          scopes.add(mainScope);
          keys.forEach((key) => addIfFound(scopes, mainScope, key));
        }
        keys.forEach((key) => addIfFound(scopes, options, key));
        keys.forEach((key) => addIfFound(scopes, overrides[type] || {}, key));
        keys.forEach((key) => addIfFound(scopes, defaults, key));
        keys.forEach((key) => addIfFound(scopes, descriptors, key));
      });
      const array = Array.from(scopes);
      if (array.length === 0) {
        array.push(/* @__PURE__ */ Object.create(null));
      }
      if (keysCached.has(keyLists)) {
        cache.set(keyLists, array);
      }
      return array;
    }
    chartOptionScopes() {
      const { options, type } = this;
      return [
        options,
        overrides[type] || {},
        defaults.datasets[type] || {},
        {
          type
        },
        defaults,
        descriptors
      ];
    }
    resolveNamedOptions(scopes, names2, context, prefixes = [
      ""
    ]) {
      const result = {
        $shared: true
      };
      const { resolver, subPrefixes } = getResolver(this._resolverCache, scopes, prefixes);
      let options = resolver;
      if (needContext(resolver, names2)) {
        result.$shared = false;
        context = isFunction(context) ? context() : context;
        const subResolver = this.createResolver(scopes, context, subPrefixes);
        options = _attachContext(resolver, context, subResolver);
      }
      for (const prop of names2) {
        result[prop] = options[prop];
      }
      return result;
    }
    createResolver(scopes, context, prefixes = [
      ""
    ], descriptorDefaults) {
      const { resolver } = getResolver(this._resolverCache, scopes, prefixes);
      return isObject(context) ? _attachContext(resolver, context, void 0, descriptorDefaults) : resolver;
    }
  };
  function getResolver(resolverCache, scopes, prefixes) {
    let cache = resolverCache.get(scopes);
    if (!cache) {
      cache = /* @__PURE__ */ new Map();
      resolverCache.set(scopes, cache);
    }
    const cacheKey = prefixes.join();
    let cached = cache.get(cacheKey);
    if (!cached) {
      const resolver = _createResolver(scopes, prefixes);
      cached = {
        resolver,
        subPrefixes: prefixes.filter((p2) => !p2.toLowerCase().includes("hover"))
      };
      cache.set(cacheKey, cached);
    }
    return cached;
  }
  var hasFunction = (value) => isObject(value) && Object.getOwnPropertyNames(value).reduce((acc, key) => acc || isFunction(value[key]), false);
  function needContext(proxy, names2) {
    const { isScriptable, isIndexable } = _descriptors(proxy);
    for (const prop of names2) {
      const scriptable = isScriptable(prop);
      const indexable = isIndexable(prop);
      const value = (indexable || scriptable) && proxy[prop];
      if (scriptable && (isFunction(value) || hasFunction(value)) || indexable && isArray(value)) {
        return true;
      }
    }
    return false;
  }
  var version = "4.4.0";
  var KNOWN_POSITIONS = [
    "top",
    "bottom",
    "left",
    "right",
    "chartArea"
  ];
  function positionIsHorizontal(position, axis) {
    return position === "top" || position === "bottom" || KNOWN_POSITIONS.indexOf(position) === -1 && axis === "x";
  }
  function compare2Level(l1, l2) {
    return function(a2, b2) {
      return a2[l1] === b2[l1] ? a2[l2] - b2[l2] : a2[l1] - b2[l1];
    };
  }
  function onAnimationsComplete(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    chart.notifyPlugins("afterRender");
    callback(animationOptions && animationOptions.onComplete, [
      context
    ], chart);
  }
  function onAnimationProgress(context) {
    const chart = context.chart;
    const animationOptions = chart.options.animation;
    callback(animationOptions && animationOptions.onProgress, [
      context
    ], chart);
  }
  function getCanvas(item) {
    if (_isDomSupported() && typeof item === "string") {
      item = document.getElementById(item);
    } else if (item && item.length) {
      item = item[0];
    }
    if (item && item.canvas) {
      item = item.canvas;
    }
    return item;
  }
  var instances = {};
  var getChart = (key) => {
    const canvas = getCanvas(key);
    return Object.values(instances).filter((c2) => c2.canvas === canvas).pop();
  };
  function moveNumericKeys(obj, start, move) {
    const keys = Object.keys(obj);
    for (const key of keys) {
      const intKey = +key;
      if (intKey >= start) {
        const value = obj[key];
        delete obj[key];
        if (move > 0 || intKey > start) {
          obj[intKey + move] = value;
        }
      }
    }
  }
  function determineLastEvent(e2, lastEvent, inChartArea, isClick) {
    if (!inChartArea || e2.type === "mouseout") {
      return null;
    }
    if (isClick) {
      return lastEvent;
    }
    return e2;
  }
  function getSizeForArea(scale, chartArea, field) {
    return scale.options.clip ? scale[field] : chartArea[field];
  }
  function getDatasetArea(meta, chartArea) {
    const { xScale, yScale } = meta;
    if (xScale && yScale) {
      return {
        left: getSizeForArea(xScale, chartArea, "left"),
        right: getSizeForArea(xScale, chartArea, "right"),
        top: getSizeForArea(yScale, chartArea, "top"),
        bottom: getSizeForArea(yScale, chartArea, "bottom")
      };
    }
    return chartArea;
  }
  var Chart = class {
    static defaults = defaults;
    static instances = instances;
    static overrides = overrides;
    static registry = registry;
    static version = version;
    static getChart = getChart;
    static register(...items) {
      registry.add(...items);
      invalidatePlugins();
    }
    static unregister(...items) {
      registry.remove(...items);
      invalidatePlugins();
    }
    constructor(item, userConfig) {
      const config = this.config = new Config(userConfig);
      const initialCanvas = getCanvas(item);
      const existingChart = getChart(initialCanvas);
      if (existingChart) {
        throw new Error("Canvas is already in use. Chart with ID '" + existingChart.id + "' must be destroyed before the canvas with ID '" + existingChart.canvas.id + "' can be reused.");
      }
      const options = config.createResolver(config.chartOptionScopes(), this.getContext());
      this.platform = new (config.platform || _detectPlatform(initialCanvas))();
      this.platform.updateConfig(config);
      const context = this.platform.acquireContext(initialCanvas, options.aspectRatio);
      const canvas = context && context.canvas;
      const height = canvas && canvas.height;
      const width = canvas && canvas.width;
      this.id = uid();
      this.ctx = context;
      this.canvas = canvas;
      this.width = width;
      this.height = height;
      this._options = options;
      this._aspectRatio = this.aspectRatio;
      this._layers = [];
      this._metasets = [];
      this._stacks = void 0;
      this.boxes = [];
      this.currentDevicePixelRatio = void 0;
      this.chartArea = void 0;
      this._active = [];
      this._lastEvent = void 0;
      this._listeners = {};
      this._responsiveListeners = void 0;
      this._sortedMetasets = [];
      this.scales = {};
      this._plugins = new PluginService();
      this.$proxies = {};
      this._hiddenIndices = {};
      this.attached = false;
      this._animationsDisabled = void 0;
      this.$context = void 0;
      this._doResize = debounce((mode) => this.update(mode), options.resizeDelay || 0);
      this._dataChanges = [];
      instances[this.id] = this;
      if (!context || !canvas) {
        console.error("Failed to create chart: can't acquire context from the given item");
        return;
      }
      animator.listen(this, "complete", onAnimationsComplete);
      animator.listen(this, "progress", onAnimationProgress);
      this._initialize();
      if (this.attached) {
        this.update();
      }
    }
    get aspectRatio() {
      const { options: { aspectRatio, maintainAspectRatio }, width, height, _aspectRatio } = this;
      if (!isNullOrUndef(aspectRatio)) {
        return aspectRatio;
      }
      if (maintainAspectRatio && _aspectRatio) {
        return _aspectRatio;
      }
      return height ? width / height : null;
    }
    get data() {
      return this.config.data;
    }
    set data(data) {
      this.config.data = data;
    }
    get options() {
      return this._options;
    }
    set options(options) {
      this.config.options = options;
    }
    get registry() {
      return registry;
    }
    _initialize() {
      this.notifyPlugins("beforeInit");
      if (this.options.responsive) {
        this.resize();
      } else {
        retinaScale(this, this.options.devicePixelRatio);
      }
      this.bindEvents();
      this.notifyPlugins("afterInit");
      return this;
    }
    clear() {
      clearCanvas(this.canvas, this.ctx);
      return this;
    }
    stop() {
      animator.stop(this);
      return this;
    }
    resize(width, height) {
      if (!animator.running(this)) {
        this._resize(width, height);
      } else {
        this._resizeBeforeDraw = {
          width,
          height
        };
      }
    }
    _resize(width, height) {
      const options = this.options;
      const canvas = this.canvas;
      const aspectRatio = options.maintainAspectRatio && this.aspectRatio;
      const newSize = this.platform.getMaximumSize(canvas, width, height, aspectRatio);
      const newRatio = options.devicePixelRatio || this.platform.getDevicePixelRatio();
      const mode = this.width ? "resize" : "attach";
      this.width = newSize.width;
      this.height = newSize.height;
      this._aspectRatio = this.aspectRatio;
      if (!retinaScale(this, newRatio, true)) {
        return;
      }
      this.notifyPlugins("resize", {
        size: newSize
      });
      callback(options.onResize, [
        this,
        newSize
      ], this);
      if (this.attached) {
        if (this._doResize(mode)) {
          this.render();
        }
      }
    }
    ensureScalesHaveIDs() {
      const options = this.options;
      const scalesOptions = options.scales || {};
      each(scalesOptions, (axisOptions, axisID) => {
        axisOptions.id = axisID;
      });
    }
    buildOrUpdateScales() {
      const options = this.options;
      const scaleOpts = options.scales;
      const scales2 = this.scales;
      const updated = Object.keys(scales2).reduce((obj, id) => {
        obj[id] = false;
        return obj;
      }, {});
      let items = [];
      if (scaleOpts) {
        items = items.concat(Object.keys(scaleOpts).map((id) => {
          const scaleOptions = scaleOpts[id];
          const axis = determineAxis(id, scaleOptions);
          const isRadial = axis === "r";
          const isHorizontal = axis === "x";
          return {
            options: scaleOptions,
            dposition: isRadial ? "chartArea" : isHorizontal ? "bottom" : "left",
            dtype: isRadial ? "radialLinear" : isHorizontal ? "category" : "linear"
          };
        }));
      }
      each(items, (item) => {
        const scaleOptions = item.options;
        const id = scaleOptions.id;
        const axis = determineAxis(id, scaleOptions);
        const scaleType = valueOrDefault(scaleOptions.type, item.dtype);
        if (scaleOptions.position === void 0 || positionIsHorizontal(scaleOptions.position, axis) !== positionIsHorizontal(item.dposition)) {
          scaleOptions.position = item.dposition;
        }
        updated[id] = true;
        let scale = null;
        if (id in scales2 && scales2[id].type === scaleType) {
          scale = scales2[id];
        } else {
          const scaleClass = registry.getScale(scaleType);
          scale = new scaleClass({
            id,
            type: scaleType,
            ctx: this.ctx,
            chart: this
          });
          scales2[scale.id] = scale;
        }
        scale.init(scaleOptions, options);
      });
      each(updated, (hasUpdated, id) => {
        if (!hasUpdated) {
          delete scales2[id];
        }
      });
      each(scales2, (scale) => {
        layouts.configure(this, scale, scale.options);
        layouts.addBox(this, scale);
      });
    }
    _updateMetasets() {
      const metasets = this._metasets;
      const numData = this.data.datasets.length;
      const numMeta = metasets.length;
      metasets.sort((a2, b2) => a2.index - b2.index);
      if (numMeta > numData) {
        for (let i2 = numData; i2 < numMeta; ++i2) {
          this._destroyDatasetMeta(i2);
        }
        metasets.splice(numData, numMeta - numData);
      }
      this._sortedMetasets = metasets.slice(0).sort(compare2Level("order", "index"));
    }
    _removeUnreferencedMetasets() {
      const { _metasets: metasets, data: { datasets } } = this;
      if (metasets.length > datasets.length) {
        delete this._stacks;
      }
      metasets.forEach((meta, index2) => {
        if (datasets.filter((x2) => x2 === meta._dataset).length === 0) {
          this._destroyDatasetMeta(index2);
        }
      });
    }
    buildOrUpdateControllers() {
      const newControllers = [];
      const datasets = this.data.datasets;
      let i2, ilen;
      this._removeUnreferencedMetasets();
      for (i2 = 0, ilen = datasets.length; i2 < ilen; i2++) {
        const dataset = datasets[i2];
        let meta = this.getDatasetMeta(i2);
        const type = dataset.type || this.config.type;
        if (meta.type && meta.type !== type) {
          this._destroyDatasetMeta(i2);
          meta = this.getDatasetMeta(i2);
        }
        meta.type = type;
        meta.indexAxis = dataset.indexAxis || getIndexAxis(type, this.options);
        meta.order = dataset.order || 0;
        meta.index = i2;
        meta.label = "" + dataset.label;
        meta.visible = this.isDatasetVisible(i2);
        if (meta.controller) {
          meta.controller.updateIndex(i2);
          meta.controller.linkScales();
        } else {
          const ControllerClass = registry.getController(type);
          const { datasetElementType, dataElementType } = defaults.datasets[type];
          Object.assign(ControllerClass, {
            dataElementType: registry.getElement(dataElementType),
            datasetElementType: datasetElementType && registry.getElement(datasetElementType)
          });
          meta.controller = new ControllerClass(this, i2);
          newControllers.push(meta.controller);
        }
      }
      this._updateMetasets();
      return newControllers;
    }
    _resetElements() {
      each(this.data.datasets, (dataset, datasetIndex) => {
        this.getDatasetMeta(datasetIndex).controller.reset();
      }, this);
    }
    reset() {
      this._resetElements();
      this.notifyPlugins("reset");
    }
    update(mode) {
      const config = this.config;
      config.update();
      const options = this._options = config.createResolver(config.chartOptionScopes(), this.getContext());
      const animsDisabled = this._animationsDisabled = !options.animation;
      this._updateScales();
      this._checkEventBindings();
      this._updateHiddenIndices();
      this._plugins.invalidate();
      if (this.notifyPlugins("beforeUpdate", {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      const newControllers = this.buildOrUpdateControllers();
      this.notifyPlugins("beforeElementsUpdate");
      let minPadding = 0;
      for (let i2 = 0, ilen = this.data.datasets.length; i2 < ilen; i2++) {
        const { controller } = this.getDatasetMeta(i2);
        const reset = !animsDisabled && newControllers.indexOf(controller) === -1;
        controller.buildOrUpdateElements(reset);
        minPadding = Math.max(+controller.getMaxOverflow(), minPadding);
      }
      minPadding = this._minPadding = options.layout.autoPadding ? minPadding : 0;
      this._updateLayout(minPadding);
      if (!animsDisabled) {
        each(newControllers, (controller) => {
          controller.reset();
        });
      }
      this._updateDatasets(mode);
      this.notifyPlugins("afterUpdate", {
        mode
      });
      this._layers.sort(compare2Level("z", "_idx"));
      const { _active, _lastEvent } = this;
      if (_lastEvent) {
        this._eventHandler(_lastEvent, true);
      } else if (_active.length) {
        this._updateHoverStyles(_active, _active, true);
      }
      this.render();
    }
    _updateScales() {
      each(this.scales, (scale) => {
        layouts.removeBox(this, scale);
      });
      this.ensureScalesHaveIDs();
      this.buildOrUpdateScales();
    }
    _checkEventBindings() {
      const options = this.options;
      const existingEvents = new Set(Object.keys(this._listeners));
      const newEvents = new Set(options.events);
      if (!setsEqual(existingEvents, newEvents) || !!this._responsiveListeners !== options.responsive) {
        this.unbindEvents();
        this.bindEvents();
      }
    }
    _updateHiddenIndices() {
      const { _hiddenIndices } = this;
      const changes = this._getUniformDataChanges() || [];
      for (const { method, start, count } of changes) {
        const move = method === "_removeElements" ? -count : count;
        moveNumericKeys(_hiddenIndices, start, move);
      }
    }
    _getUniformDataChanges() {
      const _dataChanges = this._dataChanges;
      if (!_dataChanges || !_dataChanges.length) {
        return;
      }
      this._dataChanges = [];
      const datasetCount = this.data.datasets.length;
      const makeSet = (idx) => new Set(_dataChanges.filter((c2) => c2[0] === idx).map((c2, i2) => i2 + "," + c2.splice(1).join(",")));
      const changeSet = makeSet(0);
      for (let i2 = 1; i2 < datasetCount; i2++) {
        if (!setsEqual(changeSet, makeSet(i2))) {
          return;
        }
      }
      return Array.from(changeSet).map((c2) => c2.split(",")).map((a2) => ({
        method: a2[1],
        start: +a2[2],
        count: +a2[3]
      }));
    }
    _updateLayout(minPadding) {
      if (this.notifyPlugins("beforeLayout", {
        cancelable: true
      }) === false) {
        return;
      }
      layouts.update(this, this.width, this.height, minPadding);
      const area = this.chartArea;
      const noArea = area.width <= 0 || area.height <= 0;
      this._layers = [];
      each(this.boxes, (box) => {
        if (noArea && box.position === "chartArea") {
          return;
        }
        if (box.configure) {
          box.configure();
        }
        this._layers.push(...box._layers());
      }, this);
      this._layers.forEach((item, index2) => {
        item._idx = index2;
      });
      this.notifyPlugins("afterLayout");
    }
    _updateDatasets(mode) {
      if (this.notifyPlugins("beforeDatasetsUpdate", {
        mode,
        cancelable: true
      }) === false) {
        return;
      }
      for (let i2 = 0, ilen = this.data.datasets.length; i2 < ilen; ++i2) {
        this.getDatasetMeta(i2).controller.configure();
      }
      for (let i2 = 0, ilen = this.data.datasets.length; i2 < ilen; ++i2) {
        this._updateDataset(i2, isFunction(mode) ? mode({
          datasetIndex: i2
        }) : mode);
      }
      this.notifyPlugins("afterDatasetsUpdate", {
        mode
      });
    }
    _updateDataset(index2, mode) {
      const meta = this.getDatasetMeta(index2);
      const args = {
        meta,
        index: index2,
        mode,
        cancelable: true
      };
      if (this.notifyPlugins("beforeDatasetUpdate", args) === false) {
        return;
      }
      meta.controller._update(mode);
      args.cancelable = false;
      this.notifyPlugins("afterDatasetUpdate", args);
    }
    render() {
      if (this.notifyPlugins("beforeRender", {
        cancelable: true
      }) === false) {
        return;
      }
      if (animator.has(this)) {
        if (this.attached && !animator.running(this)) {
          animator.start(this);
        }
      } else {
        this.draw();
        onAnimationsComplete({
          chart: this
        });
      }
    }
    draw() {
      let i2;
      if (this._resizeBeforeDraw) {
        const { width, height } = this._resizeBeforeDraw;
        this._resize(width, height);
        this._resizeBeforeDraw = null;
      }
      this.clear();
      if (this.width <= 0 || this.height <= 0) {
        return;
      }
      if (this.notifyPlugins("beforeDraw", {
        cancelable: true
      }) === false) {
        return;
      }
      const layers = this._layers;
      for (i2 = 0; i2 < layers.length && layers[i2].z <= 0; ++i2) {
        layers[i2].draw(this.chartArea);
      }
      this._drawDatasets();
      for (; i2 < layers.length; ++i2) {
        layers[i2].draw(this.chartArea);
      }
      this.notifyPlugins("afterDraw");
    }
    _getSortedDatasetMetas(filterVisible) {
      const metasets = this._sortedMetasets;
      const result = [];
      let i2, ilen;
      for (i2 = 0, ilen = metasets.length; i2 < ilen; ++i2) {
        const meta = metasets[i2];
        if (!filterVisible || meta.visible) {
          result.push(meta);
        }
      }
      return result;
    }
    getSortedVisibleDatasetMetas() {
      return this._getSortedDatasetMetas(true);
    }
    _drawDatasets() {
      if (this.notifyPlugins("beforeDatasetsDraw", {
        cancelable: true
      }) === false) {
        return;
      }
      const metasets = this.getSortedVisibleDatasetMetas();
      for (let i2 = metasets.length - 1; i2 >= 0; --i2) {
        this._drawDataset(metasets[i2]);
      }
      this.notifyPlugins("afterDatasetsDraw");
    }
    _drawDataset(meta) {
      const ctx = this.ctx;
      const clip = meta._clip;
      const useClip = !clip.disabled;
      const area = getDatasetArea(meta, this.chartArea);
      const args = {
        meta,
        index: meta.index,
        cancelable: true
      };
      if (this.notifyPlugins("beforeDatasetDraw", args) === false) {
        return;
      }
      if (useClip) {
        clipArea(ctx, {
          left: clip.left === false ? 0 : area.left - clip.left,
          right: clip.right === false ? this.width : area.right + clip.right,
          top: clip.top === false ? 0 : area.top - clip.top,
          bottom: clip.bottom === false ? this.height : area.bottom + clip.bottom
        });
      }
      meta.controller.draw();
      if (useClip) {
        unclipArea(ctx);
      }
      args.cancelable = false;
      this.notifyPlugins("afterDatasetDraw", args);
    }
    isPointInArea(point) {
      return _isPointInArea(point, this.chartArea, this._minPadding);
    }
    getElementsAtEventForMode(e2, mode, options, useFinalPosition) {
      const method = Interaction.modes[mode];
      if (typeof method === "function") {
        return method(this, e2, options, useFinalPosition);
      }
      return [];
    }
    getDatasetMeta(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      const metasets = this._metasets;
      let meta = metasets.filter((x2) => x2 && x2._dataset === dataset).pop();
      if (!meta) {
        meta = {
          type: null,
          data: [],
          dataset: null,
          controller: null,
          hidden: null,
          xAxisID: null,
          yAxisID: null,
          order: dataset && dataset.order || 0,
          index: datasetIndex,
          _dataset: dataset,
          _parsed: [],
          _sorted: false
        };
        metasets.push(meta);
      }
      return meta;
    }
    getContext() {
      return this.$context || (this.$context = createContext(null, {
        chart: this,
        type: "chart"
      }));
    }
    getVisibleDatasetCount() {
      return this.getSortedVisibleDatasetMetas().length;
    }
    isDatasetVisible(datasetIndex) {
      const dataset = this.data.datasets[datasetIndex];
      if (!dataset) {
        return false;
      }
      const meta = this.getDatasetMeta(datasetIndex);
      return typeof meta.hidden === "boolean" ? !meta.hidden : !dataset.hidden;
    }
    setDatasetVisibility(datasetIndex, visible) {
      const meta = this.getDatasetMeta(datasetIndex);
      meta.hidden = !visible;
    }
    toggleDataVisibility(index2) {
      this._hiddenIndices[index2] = !this._hiddenIndices[index2];
    }
    getDataVisibility(index2) {
      return !this._hiddenIndices[index2];
    }
    _updateVisibility(datasetIndex, dataIndex, visible) {
      const mode = visible ? "show" : "hide";
      const meta = this.getDatasetMeta(datasetIndex);
      const anims = meta.controller._resolveAnimations(void 0, mode);
      if (defined(dataIndex)) {
        meta.data[dataIndex].hidden = !visible;
        this.update();
      } else {
        this.setDatasetVisibility(datasetIndex, visible);
        anims.update(meta, {
          visible
        });
        this.update((ctx) => ctx.datasetIndex === datasetIndex ? mode : void 0);
      }
    }
    hide(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, false);
    }
    show(datasetIndex, dataIndex) {
      this._updateVisibility(datasetIndex, dataIndex, true);
    }
    _destroyDatasetMeta(datasetIndex) {
      const meta = this._metasets[datasetIndex];
      if (meta && meta.controller) {
        meta.controller._destroy();
      }
      delete this._metasets[datasetIndex];
    }
    _stop() {
      let i2, ilen;
      this.stop();
      animator.remove(this);
      for (i2 = 0, ilen = this.data.datasets.length; i2 < ilen; ++i2) {
        this._destroyDatasetMeta(i2);
      }
    }
    destroy() {
      this.notifyPlugins("beforeDestroy");
      const { canvas, ctx } = this;
      this._stop();
      this.config.clearCache();
      if (canvas) {
        this.unbindEvents();
        clearCanvas(canvas, ctx);
        this.platform.releaseContext(ctx);
        this.canvas = null;
        this.ctx = null;
      }
      delete instances[this.id];
      this.notifyPlugins("afterDestroy");
    }
    toBase64Image(...args) {
      return this.canvas.toDataURL(...args);
    }
    bindEvents() {
      this.bindUserEvents();
      if (this.options.responsive) {
        this.bindResponsiveEvents();
      } else {
        this.attached = true;
      }
    }
    bindUserEvents() {
      const listeners = this._listeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const listener = (e2, x2, y2) => {
        e2.offsetX = x2;
        e2.offsetY = y2;
        this._eventHandler(e2);
      };
      each(this.options.events, (type) => _add(type, listener));
    }
    bindResponsiveEvents() {
      if (!this._responsiveListeners) {
        this._responsiveListeners = {};
      }
      const listeners = this._responsiveListeners;
      const platform = this.platform;
      const _add = (type, listener2) => {
        platform.addEventListener(this, type, listener2);
        listeners[type] = listener2;
      };
      const _remove = (type, listener2) => {
        if (listeners[type]) {
          platform.removeEventListener(this, type, listener2);
          delete listeners[type];
        }
      };
      const listener = (width, height) => {
        if (this.canvas) {
          this.resize(width, height);
        }
      };
      let detached;
      const attached = () => {
        _remove("attach", attached);
        this.attached = true;
        this.resize();
        _add("resize", listener);
        _add("detach", detached);
      };
      detached = () => {
        this.attached = false;
        _remove("resize", listener);
        this._stop();
        this._resize(0, 0);
        _add("attach", attached);
      };
      if (platform.isAttached(this.canvas)) {
        attached();
      } else {
        detached();
      }
    }
    unbindEvents() {
      each(this._listeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._listeners = {};
      each(this._responsiveListeners, (listener, type) => {
        this.platform.removeEventListener(this, type, listener);
      });
      this._responsiveListeners = void 0;
    }
    updateHoverStyle(items, mode, enabled) {
      const prefix = enabled ? "set" : "remove";
      let meta, item, i2, ilen;
      if (mode === "dataset") {
        meta = this.getDatasetMeta(items[0].datasetIndex);
        meta.controller["_" + prefix + "DatasetHoverStyle"]();
      }
      for (i2 = 0, ilen = items.length; i2 < ilen; ++i2) {
        item = items[i2];
        const controller = item && this.getDatasetMeta(item.datasetIndex).controller;
        if (controller) {
          controller[prefix + "HoverStyle"](item.element, item.datasetIndex, item.index);
        }
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements) {
      const lastActive = this._active || [];
      const active = activeElements.map(({ datasetIndex, index: index2 }) => {
        const meta = this.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("No dataset found at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index2],
          index: index2
        };
      });
      const changed = !_elementsEqual(active, lastActive);
      if (changed) {
        this._active = active;
        this._lastEvent = null;
        this._updateHoverStyles(active, lastActive);
      }
    }
    notifyPlugins(hook, args, filter) {
      return this._plugins.notify(this, hook, args, filter);
    }
    isPluginEnabled(pluginId) {
      return this._plugins._cache.filter((p2) => p2.plugin.id === pluginId).length === 1;
    }
    _updateHoverStyles(active, lastActive, replay) {
      const hoverOptions = this.options.hover;
      const diff = (a2, b2) => a2.filter((x2) => !b2.some((y2) => x2.datasetIndex === y2.datasetIndex && x2.index === y2.index));
      const deactivated = diff(lastActive, active);
      const activated = replay ? active : diff(active, lastActive);
      if (deactivated.length) {
        this.updateHoverStyle(deactivated, hoverOptions.mode, false);
      }
      if (activated.length && hoverOptions.mode) {
        this.updateHoverStyle(activated, hoverOptions.mode, true);
      }
    }
    _eventHandler(e2, replay) {
      const args = {
        event: e2,
        replay,
        cancelable: true,
        inChartArea: this.isPointInArea(e2)
      };
      const eventFilter = (plugin) => (plugin.options.events || this.options.events).includes(e2.native.type);
      if (this.notifyPlugins("beforeEvent", args, eventFilter) === false) {
        return;
      }
      const changed = this._handleEvent(e2, replay, args.inChartArea);
      args.cancelable = false;
      this.notifyPlugins("afterEvent", args, eventFilter);
      if (changed || args.changed) {
        this.render();
      }
      return this;
    }
    _handleEvent(e2, replay, inChartArea) {
      const { _active: lastActive = [], options } = this;
      const useFinalPosition = replay;
      const active = this._getActiveElements(e2, lastActive, inChartArea, useFinalPosition);
      const isClick = _isClickEvent(e2);
      const lastEvent = determineLastEvent(e2, this._lastEvent, inChartArea, isClick);
      if (inChartArea) {
        this._lastEvent = null;
        callback(options.onHover, [
          e2,
          active,
          this
        ], this);
        if (isClick) {
          callback(options.onClick, [
            e2,
            active,
            this
          ], this);
        }
      }
      const changed = !_elementsEqual(active, lastActive);
      if (changed || replay) {
        this._active = active;
        this._updateHoverStyles(active, lastActive, replay);
      }
      this._lastEvent = lastEvent;
      return changed;
    }
    _getActiveElements(e2, lastActive, inChartArea, useFinalPosition) {
      if (e2.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const hoverOptions = this.options.hover;
      return this.getElementsAtEventForMode(e2, hoverOptions.mode, hoverOptions, useFinalPosition);
    }
  };
  function invalidatePlugins() {
    return each(Chart.instances, (chart) => chart._plugins.invalidate());
  }
  function clipArc(ctx, element, endAngle) {
    const { startAngle, pixelMargin, x: x2, y: y2, outerRadius, innerRadius } = element;
    let angleMargin = pixelMargin / outerRadius;
    ctx.beginPath();
    ctx.arc(x2, y2, outerRadius, startAngle - angleMargin, endAngle + angleMargin);
    if (innerRadius > pixelMargin) {
      angleMargin = pixelMargin / innerRadius;
      ctx.arc(x2, y2, innerRadius, endAngle + angleMargin, startAngle - angleMargin, true);
    } else {
      ctx.arc(x2, y2, pixelMargin, endAngle + HALF_PI, startAngle - HALF_PI);
    }
    ctx.closePath();
    ctx.clip();
  }
  function toRadiusCorners(value) {
    return _readValueToProps(value, [
      "outerStart",
      "outerEnd",
      "innerStart",
      "innerEnd"
    ]);
  }
  function parseBorderRadius$1(arc, innerRadius, outerRadius, angleDelta) {
    const o2 = toRadiusCorners(arc.options.borderRadius);
    const halfThickness = (outerRadius - innerRadius) / 2;
    const innerLimit = Math.min(halfThickness, angleDelta * innerRadius / 2);
    const computeOuterLimit = (val) => {
      const outerArcLimit = (outerRadius - Math.min(halfThickness, val)) * angleDelta / 2;
      return _limitValue(val, 0, Math.min(halfThickness, outerArcLimit));
    };
    return {
      outerStart: computeOuterLimit(o2.outerStart),
      outerEnd: computeOuterLimit(o2.outerEnd),
      innerStart: _limitValue(o2.innerStart, 0, innerLimit),
      innerEnd: _limitValue(o2.innerEnd, 0, innerLimit)
    };
  }
  function rThetaToXY(r2, theta, x2, y2) {
    return {
      x: x2 + r2 * Math.cos(theta),
      y: y2 + r2 * Math.sin(theta)
    };
  }
  function pathArc(ctx, element, offset, spacing, end, circular) {
    const { x: x2, y: y2, startAngle: start, pixelMargin, innerRadius: innerR } = element;
    const outerRadius = Math.max(element.outerRadius + spacing + offset - pixelMargin, 0);
    const innerRadius = innerR > 0 ? innerR + spacing + offset + pixelMargin : 0;
    let spacingOffset = 0;
    const alpha2 = end - start;
    if (spacing) {
      const noSpacingInnerRadius = innerR > 0 ? innerR - spacing : 0;
      const noSpacingOuterRadius = outerRadius > 0 ? outerRadius - spacing : 0;
      const avNogSpacingRadius = (noSpacingInnerRadius + noSpacingOuterRadius) / 2;
      const adjustedAngle = avNogSpacingRadius !== 0 ? alpha2 * avNogSpacingRadius / (avNogSpacingRadius + spacing) : alpha2;
      spacingOffset = (alpha2 - adjustedAngle) / 2;
    }
    const beta = Math.max(1e-3, alpha2 * outerRadius - offset / PI) / outerRadius;
    const angleOffset = (alpha2 - beta) / 2;
    const startAngle = start + angleOffset + spacingOffset;
    const endAngle = end - angleOffset - spacingOffset;
    const { outerStart, outerEnd, innerStart, innerEnd } = parseBorderRadius$1(element, innerRadius, outerRadius, endAngle - startAngle);
    const outerStartAdjustedRadius = outerRadius - outerStart;
    const outerEndAdjustedRadius = outerRadius - outerEnd;
    const outerStartAdjustedAngle = startAngle + outerStart / outerStartAdjustedRadius;
    const outerEndAdjustedAngle = endAngle - outerEnd / outerEndAdjustedRadius;
    const innerStartAdjustedRadius = innerRadius + innerStart;
    const innerEndAdjustedRadius = innerRadius + innerEnd;
    const innerStartAdjustedAngle = startAngle + innerStart / innerStartAdjustedRadius;
    const innerEndAdjustedAngle = endAngle - innerEnd / innerEndAdjustedRadius;
    ctx.beginPath();
    if (circular) {
      const outerMidAdjustedAngle = (outerStartAdjustedAngle + outerEndAdjustedAngle) / 2;
      ctx.arc(x2, y2, outerRadius, outerStartAdjustedAngle, outerMidAdjustedAngle);
      ctx.arc(x2, y2, outerRadius, outerMidAdjustedAngle, outerEndAdjustedAngle);
      if (outerEnd > 0) {
        const pCenter = rThetaToXY(outerEndAdjustedRadius, outerEndAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, outerEnd, outerEndAdjustedAngle, endAngle + HALF_PI);
      }
      const p4 = rThetaToXY(innerEndAdjustedRadius, endAngle, x2, y2);
      ctx.lineTo(p4.x, p4.y);
      if (innerEnd > 0) {
        const pCenter = rThetaToXY(innerEndAdjustedRadius, innerEndAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, innerEnd, endAngle + HALF_PI, innerEndAdjustedAngle + Math.PI);
      }
      const innerMidAdjustedAngle = (endAngle - innerEnd / innerRadius + (startAngle + innerStart / innerRadius)) / 2;
      ctx.arc(x2, y2, innerRadius, endAngle - innerEnd / innerRadius, innerMidAdjustedAngle, true);
      ctx.arc(x2, y2, innerRadius, innerMidAdjustedAngle, startAngle + innerStart / innerRadius, true);
      if (innerStart > 0) {
        const pCenter = rThetaToXY(innerStartAdjustedRadius, innerStartAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, innerStart, innerStartAdjustedAngle + Math.PI, startAngle - HALF_PI);
      }
      const p8 = rThetaToXY(outerStartAdjustedRadius, startAngle, x2, y2);
      ctx.lineTo(p8.x, p8.y);
      if (outerStart > 0) {
        const pCenter = rThetaToXY(outerStartAdjustedRadius, outerStartAdjustedAngle, x2, y2);
        ctx.arc(pCenter.x, pCenter.y, outerStart, startAngle - HALF_PI, outerStartAdjustedAngle);
      }
    } else {
      ctx.moveTo(x2, y2);
      const outerStartX = Math.cos(outerStartAdjustedAngle) * outerRadius + x2;
      const outerStartY = Math.sin(outerStartAdjustedAngle) * outerRadius + y2;
      ctx.lineTo(outerStartX, outerStartY);
      const outerEndX = Math.cos(outerEndAdjustedAngle) * outerRadius + x2;
      const outerEndY = Math.sin(outerEndAdjustedAngle) * outerRadius + y2;
      ctx.lineTo(outerEndX, outerEndY);
    }
    ctx.closePath();
  }
  function drawArc(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference } = element;
    let endAngle = element.endAngle;
    if (fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      for (let i2 = 0; i2 < fullCircles; ++i2) {
        ctx.fill();
      }
      if (!isNaN(circumference)) {
        endAngle = startAngle + (circumference % TAU || TAU);
      }
    }
    pathArc(ctx, element, offset, spacing, endAngle, circular);
    ctx.fill();
    return endAngle;
  }
  function drawBorder(ctx, element, offset, spacing, circular) {
    const { fullCircles, startAngle, circumference, options } = element;
    const { borderWidth, borderJoinStyle, borderDash, borderDashOffset } = options;
    const inner = options.borderAlign === "inner";
    if (!borderWidth) {
      return;
    }
    ctx.setLineDash(borderDash || []);
    ctx.lineDashOffset = borderDashOffset;
    if (inner) {
      ctx.lineWidth = borderWidth * 2;
      ctx.lineJoin = borderJoinStyle || "round";
    } else {
      ctx.lineWidth = borderWidth;
      ctx.lineJoin = borderJoinStyle || "bevel";
    }
    let endAngle = element.endAngle;
    if (fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      for (let i2 = 0; i2 < fullCircles; ++i2) {
        ctx.stroke();
      }
      if (!isNaN(circumference)) {
        endAngle = startAngle + (circumference % TAU || TAU);
      }
    }
    if (inner) {
      clipArc(ctx, element, endAngle);
    }
    if (!fullCircles) {
      pathArc(ctx, element, offset, spacing, endAngle, circular);
      ctx.stroke();
    }
  }
  var ArcElement = class extends Element {
    static id = "arc";
    static defaults = {
      borderAlign: "center",
      borderColor: "#fff",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: void 0,
      borderRadius: 0,
      borderWidth: 2,
      offset: 0,
      spacing: 0,
      angle: void 0,
      circular: true
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor"
    };
    static descriptors = {
      _scriptable: true,
      _indexable: (name) => name !== "borderDash"
    };
    circumference;
    endAngle;
    fullCircles;
    innerRadius;
    outerRadius;
    pixelMargin;
    startAngle;
    constructor(cfg) {
      super();
      this.options = void 0;
      this.circumference = void 0;
      this.startAngle = void 0;
      this.endAngle = void 0;
      this.innerRadius = void 0;
      this.outerRadius = void 0;
      this.pixelMargin = 0;
      this.fullCircles = 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(chartX, chartY, useFinalPosition) {
      const point = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      const { angle, distance } = getAngleFromPoint(point, {
        x: chartX,
        y: chartY
      });
      const { startAngle, endAngle, innerRadius, outerRadius, circumference } = this.getProps([
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius",
        "circumference"
      ], useFinalPosition);
      const rAdjust = (this.options.spacing + this.options.borderWidth) / 2;
      const _circumference = valueOrDefault(circumference, endAngle - startAngle);
      const betweenAngles = _circumference >= TAU || _angleBetween(angle, startAngle, endAngle);
      const withinRadius = _isBetween(distance, innerRadius + rAdjust, outerRadius + rAdjust);
      return betweenAngles && withinRadius;
    }
    getCenterPoint(useFinalPosition) {
      const { x: x2, y: y2, startAngle, endAngle, innerRadius, outerRadius } = this.getProps([
        "x",
        "y",
        "startAngle",
        "endAngle",
        "innerRadius",
        "outerRadius"
      ], useFinalPosition);
      const { offset, spacing } = this.options;
      const halfAngle = (startAngle + endAngle) / 2;
      const halfRadius = (innerRadius + outerRadius + spacing + offset) / 2;
      return {
        x: x2 + Math.cos(halfAngle) * halfRadius,
        y: y2 + Math.sin(halfAngle) * halfRadius
      };
    }
    tooltipPosition(useFinalPosition) {
      return this.getCenterPoint(useFinalPosition);
    }
    draw(ctx) {
      const { options, circumference } = this;
      const offset = (options.offset || 0) / 4;
      const spacing = (options.spacing || 0) / 2;
      const circular = options.circular;
      this.pixelMargin = options.borderAlign === "inner" ? 0.33 : 0;
      this.fullCircles = circumference > TAU ? Math.floor(circumference / TAU) : 0;
      if (circumference === 0 || this.innerRadius < 0 || this.outerRadius < 0) {
        return;
      }
      ctx.save();
      const halfAngle = (this.startAngle + this.endAngle) / 2;
      ctx.translate(Math.cos(halfAngle) * offset, Math.sin(halfAngle) * offset);
      const fix = 1 - Math.sin(Math.min(PI, circumference || 0));
      const radiusOffset = offset * fix;
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      drawArc(ctx, this, radiusOffset, spacing, circular);
      drawBorder(ctx, this, radiusOffset, spacing, circular);
      ctx.restore();
    }
  };
  function setStyle(ctx, options, style = options) {
    ctx.lineCap = valueOrDefault(style.borderCapStyle, options.borderCapStyle);
    ctx.setLineDash(valueOrDefault(style.borderDash, options.borderDash));
    ctx.lineDashOffset = valueOrDefault(style.borderDashOffset, options.borderDashOffset);
    ctx.lineJoin = valueOrDefault(style.borderJoinStyle, options.borderJoinStyle);
    ctx.lineWidth = valueOrDefault(style.borderWidth, options.borderWidth);
    ctx.strokeStyle = valueOrDefault(style.borderColor, options.borderColor);
  }
  function lineTo(ctx, previous, target) {
    ctx.lineTo(target.x, target.y);
  }
  function getLineMethod(options) {
    if (options.stepped) {
      return _steppedLineTo;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierCurveTo;
    }
    return lineTo;
  }
  function pathVars(points, segment, params = {}) {
    const count = points.length;
    const { start: paramsStart = 0, end: paramsEnd = count - 1 } = params;
    const { start: segmentStart, end: segmentEnd } = segment;
    const start = Math.max(paramsStart, segmentStart);
    const end = Math.min(paramsEnd, segmentEnd);
    const outside = paramsStart < segmentStart && paramsEnd < segmentStart || paramsStart > segmentEnd && paramsEnd > segmentEnd;
    return {
      count,
      start,
      loop: segment.loop,
      ilen: end < start && !outside ? count + end - start : end - start
    };
  }
  function pathSegment(ctx, line, segment, params) {
    const { points, options } = line;
    const { count, start, loop, ilen } = pathVars(points, segment, params);
    const lineMethod = getLineMethod(options);
    let { move = true, reverse } = params || {};
    let i2, point, prev;
    for (i2 = 0; i2 <= ilen; ++i2) {
      point = points[(start + (reverse ? ilen - i2 : i2)) % count];
      if (point.skip) {
        continue;
      } else if (move) {
        ctx.moveTo(point.x, point.y);
        move = false;
      } else {
        lineMethod(ctx, prev, point, reverse, options.stepped);
      }
      prev = point;
    }
    if (loop) {
      point = points[(start + (reverse ? ilen : 0)) % count];
      lineMethod(ctx, prev, point, reverse, options.stepped);
    }
    return !!loop;
  }
  function fastPathSegment(ctx, line, segment, params) {
    const points = line.points;
    const { count, start, ilen } = pathVars(points, segment, params);
    const { move = true, reverse } = params || {};
    let avgX = 0;
    let countX = 0;
    let i2, point, prevX, minY, maxY, lastY;
    const pointIndex = (index2) => (start + (reverse ? ilen - index2 : index2)) % count;
    const drawX = () => {
      if (minY !== maxY) {
        ctx.lineTo(avgX, maxY);
        ctx.lineTo(avgX, minY);
        ctx.lineTo(avgX, lastY);
      }
    };
    if (move) {
      point = points[pointIndex(0)];
      ctx.moveTo(point.x, point.y);
    }
    for (i2 = 0; i2 <= ilen; ++i2) {
      point = points[pointIndex(i2)];
      if (point.skip) {
        continue;
      }
      const x2 = point.x;
      const y2 = point.y;
      const truncX = x2 | 0;
      if (truncX === prevX) {
        if (y2 < minY) {
          minY = y2;
        } else if (y2 > maxY) {
          maxY = y2;
        }
        avgX = (countX * avgX + x2) / ++countX;
      } else {
        drawX();
        ctx.lineTo(x2, y2);
        prevX = truncX;
        countX = 0;
        minY = maxY = y2;
      }
      lastY = y2;
    }
    drawX();
  }
  function _getSegmentMethod(line) {
    const opts = line.options;
    const borderDash = opts.borderDash && opts.borderDash.length;
    const useFastPath = !line._decimated && !line._loop && !opts.tension && opts.cubicInterpolationMode !== "monotone" && !opts.stepped && !borderDash;
    return useFastPath ? fastPathSegment : pathSegment;
  }
  function _getInterpolationMethod(options) {
    if (options.stepped) {
      return _steppedInterpolation;
    }
    if (options.tension || options.cubicInterpolationMode === "monotone") {
      return _bezierInterpolation;
    }
    return _pointInLine;
  }
  function strokePathWithCache(ctx, line, start, count) {
    let path = line._path;
    if (!path) {
      path = line._path = new Path2D();
      if (line.path(path, start, count)) {
        path.closePath();
      }
    }
    setStyle(ctx, line.options);
    ctx.stroke(path);
  }
  function strokePathDirect(ctx, line, start, count) {
    const { segments, options } = line;
    const segmentMethod = _getSegmentMethod(line);
    for (const segment of segments) {
      setStyle(ctx, options, segment.style);
      ctx.beginPath();
      if (segmentMethod(ctx, line, segment, {
        start,
        end: start + count - 1
      })) {
        ctx.closePath();
      }
      ctx.stroke();
    }
  }
  var usePath2D = typeof Path2D === "function";
  function draw(ctx, line, start, count) {
    if (usePath2D && !line.options.segment) {
      strokePathWithCache(ctx, line, start, count);
    } else {
      strokePathDirect(ctx, line, start, count);
    }
  }
  var LineElement = class extends Element {
    static id = "line";
    static defaults = {
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0,
      borderJoinStyle: "miter",
      borderWidth: 3,
      capBezierPoints: true,
      cubicInterpolationMode: "default",
      fill: false,
      spanGaps: false,
      stepped: false,
      tension: 0
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    static descriptors = {
      _scriptable: true,
      _indexable: (name) => name !== "borderDash" && name !== "fill"
    };
    constructor(cfg) {
      super();
      this.animated = true;
      this.options = void 0;
      this._chart = void 0;
      this._loop = void 0;
      this._fullLoop = void 0;
      this._path = void 0;
      this._points = void 0;
      this._segments = void 0;
      this._decimated = false;
      this._pointsUpdated = false;
      this._datasetIndex = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    updateControlPoints(chartArea, indexAxis) {
      const options = this.options;
      if ((options.tension || options.cubicInterpolationMode === "monotone") && !options.stepped && !this._pointsUpdated) {
        const loop = options.spanGaps ? this._loop : this._fullLoop;
        _updateBezierControlPoints(this._points, options, chartArea, loop, indexAxis);
        this._pointsUpdated = true;
      }
    }
    set points(points) {
      this._points = points;
      delete this._segments;
      delete this._path;
      this._pointsUpdated = false;
    }
    get points() {
      return this._points;
    }
    get segments() {
      return this._segments || (this._segments = _computeSegments(this, this.options.segment));
    }
    first() {
      const segments = this.segments;
      const points = this.points;
      return segments.length && points[segments[0].start];
    }
    last() {
      const segments = this.segments;
      const points = this.points;
      const count = segments.length;
      return count && points[segments[count - 1].end];
    }
    interpolate(point, property) {
      const options = this.options;
      const value = point[property];
      const points = this.points;
      const segments = _boundSegments(this, {
        property,
        start: value,
        end: value
      });
      if (!segments.length) {
        return;
      }
      const result = [];
      const _interpolate = _getInterpolationMethod(options);
      let i2, ilen;
      for (i2 = 0, ilen = segments.length; i2 < ilen; ++i2) {
        const { start, end } = segments[i2];
        const p1 = points[start];
        const p2 = points[end];
        if (p1 === p2) {
          result.push(p1);
          continue;
        }
        const t2 = Math.abs((value - p1[property]) / (p2[property] - p1[property]));
        const interpolated = _interpolate(p1, p2, t2, options.stepped);
        interpolated[property] = point[property];
        result.push(interpolated);
      }
      return result.length === 1 ? result[0] : result;
    }
    pathSegment(ctx, segment, params) {
      const segmentMethod = _getSegmentMethod(this);
      return segmentMethod(ctx, this, segment, params);
    }
    path(ctx, start, count) {
      const segments = this.segments;
      const segmentMethod = _getSegmentMethod(this);
      let loop = this._loop;
      start = start || 0;
      count = count || this.points.length - start;
      for (const segment of segments) {
        loop &= segmentMethod(ctx, this, segment, {
          start,
          end: start + count - 1
        });
      }
      return !!loop;
    }
    draw(ctx, chartArea, start, count) {
      const options = this.options || {};
      const points = this.points || [];
      if (points.length && options.borderWidth) {
        ctx.save();
        draw(ctx, this, start, count);
        ctx.restore();
      }
      if (this.animated) {
        this._pointsUpdated = false;
        this._path = void 0;
      }
    }
  };
  function inRange$1(el, pos, axis, useFinalPosition) {
    const options = el.options;
    const { [axis]: value } = el.getProps([
      axis
    ], useFinalPosition);
    return Math.abs(pos - value) < options.radius + options.hitRadius;
  }
  var PointElement = class extends Element {
    static id = "point";
    parsed;
    skip;
    stop;
    /**
    * @type {any}
    */
    static defaults = {
      borderWidth: 1,
      hitRadius: 1,
      hoverBorderWidth: 1,
      hoverRadius: 4,
      pointStyle: "circle",
      radius: 3,
      rotation: 0
    };
    /**
    * @type {any}
    */
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    constructor(cfg) {
      super();
      this.options = void 0;
      this.parsed = void 0;
      this.skip = void 0;
      this.stop = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      const options = this.options;
      const { x: x2, y: y2 } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return Math.pow(mouseX - x2, 2) + Math.pow(mouseY - y2, 2) < Math.pow(options.hitRadius + options.radius, 2);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange$1(this, mouseX, "x", useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange$1(this, mouseY, "y", useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x: x2, y: y2 } = this.getProps([
        "x",
        "y"
      ], useFinalPosition);
      return {
        x: x2,
        y: y2
      };
    }
    size(options) {
      options = options || this.options || {};
      let radius = options.radius || 0;
      radius = Math.max(radius, radius && options.hoverRadius || 0);
      const borderWidth = radius && options.borderWidth || 0;
      return (radius + borderWidth) * 2;
    }
    draw(ctx, area) {
      const options = this.options;
      if (this.skip || options.radius < 0.1 || !_isPointInArea(this, area, this.size(options) / 2)) {
        return;
      }
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.fillStyle = options.backgroundColor;
      drawPoint(ctx, options, this.x, this.y);
    }
    getRange() {
      const options = this.options || {};
      return options.radius + options.hitRadius;
    }
  };
  function getBarBounds(bar, useFinalPosition) {
    const { x: x2, y: y2, base, width, height } = bar.getProps([
      "x",
      "y",
      "base",
      "width",
      "height"
    ], useFinalPosition);
    let left, right, top, bottom, half;
    if (bar.horizontal) {
      half = height / 2;
      left = Math.min(x2, base);
      right = Math.max(x2, base);
      top = y2 - half;
      bottom = y2 + half;
    } else {
      half = width / 2;
      left = x2 - half;
      right = x2 + half;
      top = Math.min(y2, base);
      bottom = Math.max(y2, base);
    }
    return {
      left,
      top,
      right,
      bottom
    };
  }
  function skipOrLimit(skip2, value, min, max) {
    return skip2 ? 0 : _limitValue(value, min, max);
  }
  function parseBorderWidth(bar, maxW, maxH) {
    const value = bar.options.borderWidth;
    const skip2 = bar.borderSkipped;
    const o2 = toTRBL(value);
    return {
      t: skipOrLimit(skip2.top, o2.top, 0, maxH),
      r: skipOrLimit(skip2.right, o2.right, 0, maxW),
      b: skipOrLimit(skip2.bottom, o2.bottom, 0, maxH),
      l: skipOrLimit(skip2.left, o2.left, 0, maxW)
    };
  }
  function parseBorderRadius(bar, maxW, maxH) {
    const { enableBorderRadius } = bar.getProps([
      "enableBorderRadius"
    ]);
    const value = bar.options.borderRadius;
    const o2 = toTRBLCorners(value);
    const maxR = Math.min(maxW, maxH);
    const skip2 = bar.borderSkipped;
    const enableBorder = enableBorderRadius || isObject(value);
    return {
      topLeft: skipOrLimit(!enableBorder || skip2.top || skip2.left, o2.topLeft, 0, maxR),
      topRight: skipOrLimit(!enableBorder || skip2.top || skip2.right, o2.topRight, 0, maxR),
      bottomLeft: skipOrLimit(!enableBorder || skip2.bottom || skip2.left, o2.bottomLeft, 0, maxR),
      bottomRight: skipOrLimit(!enableBorder || skip2.bottom || skip2.right, o2.bottomRight, 0, maxR)
    };
  }
  function boundingRects(bar) {
    const bounds = getBarBounds(bar);
    const width = bounds.right - bounds.left;
    const height = bounds.bottom - bounds.top;
    const border = parseBorderWidth(bar, width / 2, height / 2);
    const radius = parseBorderRadius(bar, width / 2, height / 2);
    return {
      outer: {
        x: bounds.left,
        y: bounds.top,
        w: width,
        h: height,
        radius
      },
      inner: {
        x: bounds.left + border.l,
        y: bounds.top + border.t,
        w: width - border.l - border.r,
        h: height - border.t - border.b,
        radius: {
          topLeft: Math.max(0, radius.topLeft - Math.max(border.t, border.l)),
          topRight: Math.max(0, radius.topRight - Math.max(border.t, border.r)),
          bottomLeft: Math.max(0, radius.bottomLeft - Math.max(border.b, border.l)),
          bottomRight: Math.max(0, radius.bottomRight - Math.max(border.b, border.r))
        }
      }
    };
  }
  function inRange(bar, x2, y2, useFinalPosition) {
    const skipX = x2 === null;
    const skipY = y2 === null;
    const skipBoth = skipX && skipY;
    const bounds = bar && !skipBoth && getBarBounds(bar, useFinalPosition);
    return bounds && (skipX || _isBetween(x2, bounds.left, bounds.right)) && (skipY || _isBetween(y2, bounds.top, bounds.bottom));
  }
  function hasRadius(radius) {
    return radius.topLeft || radius.topRight || radius.bottomLeft || radius.bottomRight;
  }
  function addNormalRectPath(ctx, rect) {
    ctx.rect(rect.x, rect.y, rect.w, rect.h);
  }
  function inflateRect(rect, amount, refRect = {}) {
    const x2 = rect.x !== refRect.x ? -amount : 0;
    const y2 = rect.y !== refRect.y ? -amount : 0;
    const w2 = (rect.x + rect.w !== refRect.x + refRect.w ? amount : 0) - x2;
    const h3 = (rect.y + rect.h !== refRect.y + refRect.h ? amount : 0) - y2;
    return {
      x: rect.x + x2,
      y: rect.y + y2,
      w: rect.w + w2,
      h: rect.h + h3,
      radius: rect.radius
    };
  }
  var BarElement = class extends Element {
    static id = "bar";
    static defaults = {
      borderSkipped: "start",
      borderWidth: 0,
      borderRadius: 0,
      inflateAmount: "auto",
      pointStyle: void 0
    };
    static defaultRoutes = {
      backgroundColor: "backgroundColor",
      borderColor: "borderColor"
    };
    constructor(cfg) {
      super();
      this.options = void 0;
      this.horizontal = void 0;
      this.base = void 0;
      this.width = void 0;
      this.height = void 0;
      this.inflateAmount = void 0;
      if (cfg) {
        Object.assign(this, cfg);
      }
    }
    draw(ctx) {
      const { inflateAmount, options: { borderColor, backgroundColor } } = this;
      const { inner, outer } = boundingRects(this);
      const addRectPath = hasRadius(outer.radius) ? addRoundedRectPath : addNormalRectPath;
      ctx.save();
      if (outer.w !== inner.w || outer.h !== inner.h) {
        ctx.beginPath();
        addRectPath(ctx, inflateRect(outer, inflateAmount, inner));
        ctx.clip();
        addRectPath(ctx, inflateRect(inner, -inflateAmount, outer));
        ctx.fillStyle = borderColor;
        ctx.fill("evenodd");
      }
      ctx.beginPath();
      addRectPath(ctx, inflateRect(inner, inflateAmount));
      ctx.fillStyle = backgroundColor;
      ctx.fill();
      ctx.restore();
    }
    inRange(mouseX, mouseY, useFinalPosition) {
      return inRange(this, mouseX, mouseY, useFinalPosition);
    }
    inXRange(mouseX, useFinalPosition) {
      return inRange(this, mouseX, null, useFinalPosition);
    }
    inYRange(mouseY, useFinalPosition) {
      return inRange(this, null, mouseY, useFinalPosition);
    }
    getCenterPoint(useFinalPosition) {
      const { x: x2, y: y2, base, horizontal } = this.getProps([
        "x",
        "y",
        "base",
        "horizontal"
      ], useFinalPosition);
      return {
        x: horizontal ? (x2 + base) / 2 : x2,
        y: horizontal ? y2 : (y2 + base) / 2
      };
    }
    getRange(axis) {
      return axis === "x" ? this.width / 2 : this.height / 2;
    }
  };
  var elements = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    ArcElement,
    BarElement,
    LineElement,
    PointElement
  });
  var BORDER_COLORS = [
    "rgb(54, 162, 235)",
    "rgb(255, 99, 132)",
    "rgb(255, 159, 64)",
    "rgb(255, 205, 86)",
    "rgb(75, 192, 192)",
    "rgb(153, 102, 255)",
    "rgb(201, 203, 207)"
    // grey
  ];
  var BACKGROUND_COLORS = /* @__PURE__ */ BORDER_COLORS.map((color2) => color2.replace("rgb(", "rgba(").replace(")", ", 0.5)"));
  function getBorderColor(i2) {
    return BORDER_COLORS[i2 % BORDER_COLORS.length];
  }
  function getBackgroundColor(i2) {
    return BACKGROUND_COLORS[i2 % BACKGROUND_COLORS.length];
  }
  function colorizeDefaultDataset(dataset, i2) {
    dataset.borderColor = getBorderColor(i2);
    dataset.backgroundColor = getBackgroundColor(i2);
    return ++i2;
  }
  function colorizeDoughnutDataset(dataset, i2) {
    dataset.backgroundColor = dataset.data.map(() => getBorderColor(i2++));
    return i2;
  }
  function colorizePolarAreaDataset(dataset, i2) {
    dataset.backgroundColor = dataset.data.map(() => getBackgroundColor(i2++));
    return i2;
  }
  function getColorizer(chart) {
    let i2 = 0;
    return (dataset, datasetIndex) => {
      const controller = chart.getDatasetMeta(datasetIndex).controller;
      if (controller instanceof DoughnutController) {
        i2 = colorizeDoughnutDataset(dataset, i2);
      } else if (controller instanceof PolarAreaController) {
        i2 = colorizePolarAreaDataset(dataset, i2);
      } else if (controller) {
        i2 = colorizeDefaultDataset(dataset, i2);
      }
    };
  }
  function containsColorsDefinitions(descriptors2) {
    let k2;
    for (k2 in descriptors2) {
      if (descriptors2[k2].borderColor || descriptors2[k2].backgroundColor) {
        return true;
      }
    }
    return false;
  }
  function containsColorsDefinition(descriptor) {
    return descriptor && (descriptor.borderColor || descriptor.backgroundColor);
  }
  var plugin_colors = {
    id: "colors",
    defaults: {
      enabled: true,
      forceOverride: false
    },
    beforeLayout(chart, _args, options) {
      if (!options.enabled) {
        return;
      }
      const { data: { datasets }, options: chartOptions } = chart.config;
      const { elements: elements2 } = chartOptions;
      if (!options.forceOverride && (containsColorsDefinitions(datasets) || containsColorsDefinition(chartOptions) || elements2 && containsColorsDefinitions(elements2))) {
        return;
      }
      const colorizer = getColorizer(chart);
      datasets.forEach(colorizer);
    }
  };
  function lttbDecimation(data, start, count, availableWidth, options) {
    const samples = options.samples || availableWidth;
    if (samples >= count) {
      return data.slice(start, start + count);
    }
    const decimated = [];
    const bucketWidth = (count - 2) / (samples - 2);
    let sampledIndex = 0;
    const endIndex = start + count - 1;
    let a2 = start;
    let i2, maxAreaPoint, maxArea, area, nextA;
    decimated[sampledIndex++] = data[a2];
    for (i2 = 0; i2 < samples - 2; i2++) {
      let avgX = 0;
      let avgY = 0;
      let j2;
      const avgRangeStart = Math.floor((i2 + 1) * bucketWidth) + 1 + start;
      const avgRangeEnd = Math.min(Math.floor((i2 + 2) * bucketWidth) + 1, count) + start;
      const avgRangeLength = avgRangeEnd - avgRangeStart;
      for (j2 = avgRangeStart; j2 < avgRangeEnd; j2++) {
        avgX += data[j2].x;
        avgY += data[j2].y;
      }
      avgX /= avgRangeLength;
      avgY /= avgRangeLength;
      const rangeOffs = Math.floor(i2 * bucketWidth) + 1 + start;
      const rangeTo = Math.min(Math.floor((i2 + 1) * bucketWidth) + 1, count) + start;
      const { x: pointAx, y: pointAy } = data[a2];
      maxArea = area = -1;
      for (j2 = rangeOffs; j2 < rangeTo; j2++) {
        area = 0.5 * Math.abs((pointAx - avgX) * (data[j2].y - pointAy) - (pointAx - data[j2].x) * (avgY - pointAy));
        if (area > maxArea) {
          maxArea = area;
          maxAreaPoint = data[j2];
          nextA = j2;
        }
      }
      decimated[sampledIndex++] = maxAreaPoint;
      a2 = nextA;
    }
    decimated[sampledIndex++] = data[endIndex];
    return decimated;
  }
  function minMaxDecimation(data, start, count, availableWidth) {
    let avgX = 0;
    let countX = 0;
    let i2, point, x2, y2, prevX, minIndex, maxIndex, startIndex, minY, maxY;
    const decimated = [];
    const endIndex = start + count - 1;
    const xMin = data[start].x;
    const xMax = data[endIndex].x;
    const dx = xMax - xMin;
    for (i2 = start; i2 < start + count; ++i2) {
      point = data[i2];
      x2 = (point.x - xMin) / dx * availableWidth;
      y2 = point.y;
      const truncX = x2 | 0;
      if (truncX === prevX) {
        if (y2 < minY) {
          minY = y2;
          minIndex = i2;
        } else if (y2 > maxY) {
          maxY = y2;
          maxIndex = i2;
        }
        avgX = (countX * avgX + point.x) / ++countX;
      } else {
        const lastIndex = i2 - 1;
        if (!isNullOrUndef(minIndex) && !isNullOrUndef(maxIndex)) {
          const intermediateIndex1 = Math.min(minIndex, maxIndex);
          const intermediateIndex2 = Math.max(minIndex, maxIndex);
          if (intermediateIndex1 !== startIndex && intermediateIndex1 !== lastIndex) {
            decimated.push({
              ...data[intermediateIndex1],
              x: avgX
            });
          }
          if (intermediateIndex2 !== startIndex && intermediateIndex2 !== lastIndex) {
            decimated.push({
              ...data[intermediateIndex2],
              x: avgX
            });
          }
        }
        if (i2 > 0 && lastIndex !== startIndex) {
          decimated.push(data[lastIndex]);
        }
        decimated.push(point);
        prevX = truncX;
        countX = 0;
        minY = maxY = y2;
        minIndex = maxIndex = startIndex = i2;
      }
    }
    return decimated;
  }
  function cleanDecimatedDataset(dataset) {
    if (dataset._decimated) {
      const data = dataset._data;
      delete dataset._decimated;
      delete dataset._data;
      Object.defineProperty(dataset, "data", {
        configurable: true,
        enumerable: true,
        writable: true,
        value: data
      });
    }
  }
  function cleanDecimatedData(chart) {
    chart.data.datasets.forEach((dataset) => {
      cleanDecimatedDataset(dataset);
    });
  }
  function getStartAndCountOfVisiblePointsSimplified(meta, points) {
    const pointCount = points.length;
    let start = 0;
    let count;
    const { iScale } = meta;
    const { min, max, minDefined, maxDefined } = iScale.getUserBounds();
    if (minDefined) {
      start = _limitValue(_lookupByKey(points, iScale.axis, min).lo, 0, pointCount - 1);
    }
    if (maxDefined) {
      count = _limitValue(_lookupByKey(points, iScale.axis, max).hi + 1, start, pointCount) - start;
    } else {
      count = pointCount - start;
    }
    return {
      start,
      count
    };
  }
  var plugin_decimation = {
    id: "decimation",
    defaults: {
      algorithm: "min-max",
      enabled: false
    },
    beforeElementsUpdate: (chart, args, options) => {
      if (!options.enabled) {
        cleanDecimatedData(chart);
        return;
      }
      const availableWidth = chart.width;
      chart.data.datasets.forEach((dataset, datasetIndex) => {
        const { _data, indexAxis } = dataset;
        const meta = chart.getDatasetMeta(datasetIndex);
        const data = _data || dataset.data;
        if (resolve([
          indexAxis,
          chart.options.indexAxis
        ]) === "y") {
          return;
        }
        if (!meta.controller.supportsDecimation) {
          return;
        }
        const xAxis = chart.scales[meta.xAxisID];
        if (xAxis.type !== "linear" && xAxis.type !== "time") {
          return;
        }
        if (chart.options.parsing) {
          return;
        }
        let { start, count } = getStartAndCountOfVisiblePointsSimplified(meta, data);
        const threshold = options.threshold || 4 * availableWidth;
        if (count <= threshold) {
          cleanDecimatedDataset(dataset);
          return;
        }
        if (isNullOrUndef(_data)) {
          dataset._data = data;
          delete dataset.data;
          Object.defineProperty(dataset, "data", {
            configurable: true,
            enumerable: true,
            get: function() {
              return this._decimated;
            },
            set: function(d2) {
              this._data = d2;
            }
          });
        }
        let decimated;
        switch (options.algorithm) {
          case "lttb":
            decimated = lttbDecimation(data, start, count, availableWidth, options);
            break;
          case "min-max":
            decimated = minMaxDecimation(data, start, count, availableWidth);
            break;
          default:
            throw new Error(`Unsupported decimation algorithm '${options.algorithm}'`);
        }
        dataset._decimated = decimated;
      });
    },
    destroy(chart) {
      cleanDecimatedData(chart);
    }
  };
  function _segments(line, target, property) {
    const segments = line.segments;
    const points = line.points;
    const tpoints = target.points;
    const parts = [];
    for (const segment of segments) {
      let { start, end } = segment;
      end = _findSegmentEnd(start, end, points);
      const bounds = _getBounds(property, points[start], points[end], segment.loop);
      if (!target.segments) {
        parts.push({
          source: segment,
          target: bounds,
          start: points[start],
          end: points[end]
        });
        continue;
      }
      const targetSegments = _boundSegments(target, bounds);
      for (const tgt of targetSegments) {
        const subBounds = _getBounds(property, tpoints[tgt.start], tpoints[tgt.end], tgt.loop);
        const fillSources = _boundSegment(segment, points, subBounds);
        for (const fillSource of fillSources) {
          parts.push({
            source: fillSource,
            target: tgt,
            start: {
              [property]: _getEdge(bounds, subBounds, "start", Math.max)
            },
            end: {
              [property]: _getEdge(bounds, subBounds, "end", Math.min)
            }
          });
        }
      }
    }
    return parts;
  }
  function _getBounds(property, first, last, loop) {
    if (loop) {
      return;
    }
    let start = first[property];
    let end = last[property];
    if (property === "angle") {
      start = _normalizeAngle(start);
      end = _normalizeAngle(end);
    }
    return {
      property,
      start,
      end
    };
  }
  function _pointsFromSegments(boundary, line) {
    const { x: x2 = null, y: y2 = null } = boundary || {};
    const linePoints = line.points;
    const points = [];
    line.segments.forEach(({ start, end }) => {
      end = _findSegmentEnd(start, end, linePoints);
      const first = linePoints[start];
      const last = linePoints[end];
      if (y2 !== null) {
        points.push({
          x: first.x,
          y: y2
        });
        points.push({
          x: last.x,
          y: y2
        });
      } else if (x2 !== null) {
        points.push({
          x: x2,
          y: first.y
        });
        points.push({
          x: x2,
          y: last.y
        });
      }
    });
    return points;
  }
  function _findSegmentEnd(start, end, points) {
    for (; end > start; end--) {
      const point = points[end];
      if (!isNaN(point.x) && !isNaN(point.y)) {
        break;
      }
    }
    return end;
  }
  function _getEdge(a2, b2, prop, fn) {
    if (a2 && b2) {
      return fn(a2[prop], b2[prop]);
    }
    return a2 ? a2[prop] : b2 ? b2[prop] : 0;
  }
  function _createBoundaryLine(boundary, line) {
    let points = [];
    let _loop = false;
    if (isArray(boundary)) {
      _loop = true;
      points = boundary;
    } else {
      points = _pointsFromSegments(boundary, line);
    }
    return points.length ? new LineElement({
      points,
      options: {
        tension: 0
      },
      _loop,
      _fullLoop: _loop
    }) : null;
  }
  function _shouldApplyFill(source) {
    return source && source.fill !== false;
  }
  function _resolveTarget(sources, index2, propagate) {
    const source = sources[index2];
    let fill2 = source.fill;
    const visited = [
      index2
    ];
    let target;
    if (!propagate) {
      return fill2;
    }
    while (fill2 !== false && visited.indexOf(fill2) === -1) {
      if (!isNumberFinite(fill2)) {
        return fill2;
      }
      target = sources[fill2];
      if (!target) {
        return false;
      }
      if (target.visible) {
        return fill2;
      }
      visited.push(fill2);
      fill2 = target.fill;
    }
    return false;
  }
  function _decodeFill(line, index2, count) {
    const fill2 = parseFillOption(line);
    if (isObject(fill2)) {
      return isNaN(fill2.value) ? false : fill2;
    }
    let target = parseFloat(fill2);
    if (isNumberFinite(target) && Math.floor(target) === target) {
      return decodeTargetIndex(fill2[0], index2, target, count);
    }
    return [
      "origin",
      "start",
      "end",
      "stack",
      "shape"
    ].indexOf(fill2) >= 0 && fill2;
  }
  function decodeTargetIndex(firstCh, index2, target, count) {
    if (firstCh === "-" || firstCh === "+") {
      target = index2 + target;
    }
    if (target === index2 || target < 0 || target >= count) {
      return false;
    }
    return target;
  }
  function _getTargetPixel(fill2, scale) {
    let pixel = null;
    if (fill2 === "start") {
      pixel = scale.bottom;
    } else if (fill2 === "end") {
      pixel = scale.top;
    } else if (isObject(fill2)) {
      pixel = scale.getPixelForValue(fill2.value);
    } else if (scale.getBasePixel) {
      pixel = scale.getBasePixel();
    }
    return pixel;
  }
  function _getTargetValue(fill2, scale, startValue) {
    let value;
    if (fill2 === "start") {
      value = startValue;
    } else if (fill2 === "end") {
      value = scale.options.reverse ? scale.min : scale.max;
    } else if (isObject(fill2)) {
      value = fill2.value;
    } else {
      value = scale.getBaseValue();
    }
    return value;
  }
  function parseFillOption(line) {
    const options = line.options;
    const fillOption = options.fill;
    let fill2 = valueOrDefault(fillOption && fillOption.target, fillOption);
    if (fill2 === void 0) {
      fill2 = !!options.backgroundColor;
    }
    if (fill2 === false || fill2 === null) {
      return false;
    }
    if (fill2 === true) {
      return "origin";
    }
    return fill2;
  }
  function _buildStackLine(source) {
    const { scale, index: index2, line } = source;
    const points = [];
    const segments = line.segments;
    const sourcePoints = line.points;
    const linesBelow = getLinesBelow(scale, index2);
    linesBelow.push(_createBoundaryLine({
      x: null,
      y: scale.bottom
    }, line));
    for (let i2 = 0; i2 < segments.length; i2++) {
      const segment = segments[i2];
      for (let j2 = segment.start; j2 <= segment.end; j2++) {
        addPointsBelow(points, sourcePoints[j2], linesBelow);
      }
    }
    return new LineElement({
      points,
      options: {}
    });
  }
  function getLinesBelow(scale, index2) {
    const below = [];
    const metas = scale.getMatchingVisibleMetas("line");
    for (let i2 = 0; i2 < metas.length; i2++) {
      const meta = metas[i2];
      if (meta.index === index2) {
        break;
      }
      if (!meta.hidden) {
        below.unshift(meta.dataset);
      }
    }
    return below;
  }
  function addPointsBelow(points, sourcePoint, linesBelow) {
    const postponed = [];
    for (let j2 = 0; j2 < linesBelow.length; j2++) {
      const line = linesBelow[j2];
      const { first, last, point } = findPoint(line, sourcePoint, "x");
      if (!point || first && last) {
        continue;
      }
      if (first) {
        postponed.unshift(point);
      } else {
        points.push(point);
        if (!last) {
          break;
        }
      }
    }
    points.push(...postponed);
  }
  function findPoint(line, sourcePoint, property) {
    const point = line.interpolate(sourcePoint, property);
    if (!point) {
      return {};
    }
    const pointValue = point[property];
    const segments = line.segments;
    const linePoints = line.points;
    let first = false;
    let last = false;
    for (let i2 = 0; i2 < segments.length; i2++) {
      const segment = segments[i2];
      const firstValue = linePoints[segment.start][property];
      const lastValue = linePoints[segment.end][property];
      if (_isBetween(pointValue, firstValue, lastValue)) {
        first = pointValue === firstValue;
        last = pointValue === lastValue;
        break;
      }
    }
    return {
      first,
      last,
      point
    };
  }
  var simpleArc = class {
    constructor(opts) {
      this.x = opts.x;
      this.y = opts.y;
      this.radius = opts.radius;
    }
    pathSegment(ctx, bounds, opts) {
      const { x: x2, y: y2, radius } = this;
      bounds = bounds || {
        start: 0,
        end: TAU
      };
      ctx.arc(x2, y2, radius, bounds.end, bounds.start, true);
      return !opts.bounds;
    }
    interpolate(point) {
      const { x: x2, y: y2, radius } = this;
      const angle = point.angle;
      return {
        x: x2 + Math.cos(angle) * radius,
        y: y2 + Math.sin(angle) * radius,
        angle
      };
    }
  };
  function _getTarget(source) {
    const { chart, fill: fill2, line } = source;
    if (isNumberFinite(fill2)) {
      return getLineByIndex(chart, fill2);
    }
    if (fill2 === "stack") {
      return _buildStackLine(source);
    }
    if (fill2 === "shape") {
      return true;
    }
    const boundary = computeBoundary(source);
    if (boundary instanceof simpleArc) {
      return boundary;
    }
    return _createBoundaryLine(boundary, line);
  }
  function getLineByIndex(chart, index2) {
    const meta = chart.getDatasetMeta(index2);
    const visible = meta && chart.isDatasetVisible(index2);
    return visible ? meta.dataset : null;
  }
  function computeBoundary(source) {
    const scale = source.scale || {};
    if (scale.getPointPositionForValue) {
      return computeCircularBoundary(source);
    }
    return computeLinearBoundary(source);
  }
  function computeLinearBoundary(source) {
    const { scale = {}, fill: fill2 } = source;
    const pixel = _getTargetPixel(fill2, scale);
    if (isNumberFinite(pixel)) {
      const horizontal = scale.isHorizontal();
      return {
        x: horizontal ? pixel : null,
        y: horizontal ? null : pixel
      };
    }
    return null;
  }
  function computeCircularBoundary(source) {
    const { scale, fill: fill2 } = source;
    const options = scale.options;
    const length = scale.getLabels().length;
    const start = options.reverse ? scale.max : scale.min;
    const value = _getTargetValue(fill2, scale, start);
    const target = [];
    if (options.grid.circular) {
      const center = scale.getPointPositionForValue(0, start);
      return new simpleArc({
        x: center.x,
        y: center.y,
        radius: scale.getDistanceFromCenterForValue(value)
      });
    }
    for (let i2 = 0; i2 < length; ++i2) {
      target.push(scale.getPointPositionForValue(i2, value));
    }
    return target;
  }
  function _drawfill(ctx, source, area) {
    const target = _getTarget(source);
    const { line, scale, axis } = source;
    const lineOpts = line.options;
    const fillOption = lineOpts.fill;
    const color2 = lineOpts.backgroundColor;
    const { above = color2, below = color2 } = fillOption || {};
    if (target && line.points.length) {
      clipArea(ctx, area);
      doFill(ctx, {
        line,
        target,
        above,
        below,
        area,
        scale,
        axis
      });
      unclipArea(ctx);
    }
  }
  function doFill(ctx, cfg) {
    const { line, target, above, below, area, scale } = cfg;
    const property = line._loop ? "angle" : cfg.axis;
    ctx.save();
    if (property === "x" && below !== above) {
      clipVertical(ctx, target, area.top);
      fill(ctx, {
        line,
        target,
        color: above,
        scale,
        property
      });
      ctx.restore();
      ctx.save();
      clipVertical(ctx, target, area.bottom);
    }
    fill(ctx, {
      line,
      target,
      color: below,
      scale,
      property
    });
    ctx.restore();
  }
  function clipVertical(ctx, target, clipY) {
    const { segments, points } = target;
    let first = true;
    let lineLoop = false;
    ctx.beginPath();
    for (const segment of segments) {
      const { start, end } = segment;
      const firstPoint = points[start];
      const lastPoint = points[_findSegmentEnd(start, end, points)];
      if (first) {
        ctx.moveTo(firstPoint.x, firstPoint.y);
        first = false;
      } else {
        ctx.lineTo(firstPoint.x, clipY);
        ctx.lineTo(firstPoint.x, firstPoint.y);
      }
      lineLoop = !!target.pathSegment(ctx, segment, {
        move: lineLoop
      });
      if (lineLoop) {
        ctx.closePath();
      } else {
        ctx.lineTo(lastPoint.x, clipY);
      }
    }
    ctx.lineTo(target.first().x, clipY);
    ctx.closePath();
    ctx.clip();
  }
  function fill(ctx, cfg) {
    const { line, target, property, color: color2, scale } = cfg;
    const segments = _segments(line, target, property);
    for (const { source: src, target: tgt, start, end } of segments) {
      const { style: { backgroundColor = color2 } = {} } = src;
      const notShape = target !== true;
      ctx.save();
      ctx.fillStyle = backgroundColor;
      clipBounds(ctx, scale, notShape && _getBounds(property, start, end));
      ctx.beginPath();
      const lineLoop = !!line.pathSegment(ctx, src);
      let loop;
      if (notShape) {
        if (lineLoop) {
          ctx.closePath();
        } else {
          interpolatedLineTo(ctx, target, end, property);
        }
        const targetLoop = !!target.pathSegment(ctx, tgt, {
          move: lineLoop,
          reverse: true
        });
        loop = lineLoop && targetLoop;
        if (!loop) {
          interpolatedLineTo(ctx, target, start, property);
        }
      }
      ctx.closePath();
      ctx.fill(loop ? "evenodd" : "nonzero");
      ctx.restore();
    }
  }
  function clipBounds(ctx, scale, bounds) {
    const { top, bottom } = scale.chart.chartArea;
    const { property, start, end } = bounds || {};
    if (property === "x") {
      ctx.beginPath();
      ctx.rect(start, top, end - start, bottom - top);
      ctx.clip();
    }
  }
  function interpolatedLineTo(ctx, target, point, property) {
    const interpolatedPoint = target.interpolate(point, property);
    if (interpolatedPoint) {
      ctx.lineTo(interpolatedPoint.x, interpolatedPoint.y);
    }
  }
  var index = {
    id: "filler",
    afterDatasetsUpdate(chart, _args, options) {
      const count = (chart.data.datasets || []).length;
      const sources = [];
      let meta, i2, line, source;
      for (i2 = 0; i2 < count; ++i2) {
        meta = chart.getDatasetMeta(i2);
        line = meta.dataset;
        source = null;
        if (line && line.options && line instanceof LineElement) {
          source = {
            visible: chart.isDatasetVisible(i2),
            index: i2,
            fill: _decodeFill(line, i2, count),
            chart,
            axis: meta.controller.options.indexAxis,
            scale: meta.vScale,
            line
          };
        }
        meta.$filler = source;
        sources.push(source);
      }
      for (i2 = 0; i2 < count; ++i2) {
        source = sources[i2];
        if (!source || source.fill === false) {
          continue;
        }
        source.fill = _resolveTarget(sources, i2, options.propagate);
      }
    },
    beforeDraw(chart, _args, options) {
      const draw2 = options.drawTime === "beforeDraw";
      const metasets = chart.getSortedVisibleDatasetMetas();
      const area = chart.chartArea;
      for (let i2 = metasets.length - 1; i2 >= 0; --i2) {
        const source = metasets[i2].$filler;
        if (!source) {
          continue;
        }
        source.line.updateControlPoints(area, source.axis);
        if (draw2 && source.fill) {
          _drawfill(chart.ctx, source, area);
        }
      }
    },
    beforeDatasetsDraw(chart, _args, options) {
      if (options.drawTime !== "beforeDatasetsDraw") {
        return;
      }
      const metasets = chart.getSortedVisibleDatasetMetas();
      for (let i2 = metasets.length - 1; i2 >= 0; --i2) {
        const source = metasets[i2].$filler;
        if (_shouldApplyFill(source)) {
          _drawfill(chart.ctx, source, chart.chartArea);
        }
      }
    },
    beforeDatasetDraw(chart, args, options) {
      const source = args.meta.$filler;
      if (!_shouldApplyFill(source) || options.drawTime !== "beforeDatasetDraw") {
        return;
      }
      _drawfill(chart.ctx, source, chart.chartArea);
    },
    defaults: {
      propagate: true,
      drawTime: "beforeDatasetDraw"
    }
  };
  var getBoxSize = (labelOpts, fontSize) => {
    let { boxHeight = fontSize, boxWidth = fontSize } = labelOpts;
    if (labelOpts.usePointStyle) {
      boxHeight = Math.min(boxHeight, fontSize);
      boxWidth = labelOpts.pointStyleWidth || Math.min(boxWidth, fontSize);
    }
    return {
      boxWidth,
      boxHeight,
      itemHeight: Math.max(fontSize, boxHeight)
    };
  };
  var itemsEqual = (a2, b2) => a2 !== null && b2 !== null && a2.datasetIndex === b2.datasetIndex && a2.index === b2.index;
  var Legend = class extends Element {
    constructor(config) {
      super();
      this._added = false;
      this.legendHitBoxes = [];
      this._hoveredItem = null;
      this.doughnutMode = false;
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this.legendItems = void 0;
      this.columnSizes = void 0;
      this.lineWidths = void 0;
      this.maxHeight = void 0;
      this.maxWidth = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.height = void 0;
      this.width = void 0;
      this._margins = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight, margins) {
      this.maxWidth = maxWidth;
      this.maxHeight = maxHeight;
      this._margins = margins;
      this.setDimensions();
      this.buildLabels();
      this.fit();
    }
    setDimensions() {
      if (this.isHorizontal()) {
        this.width = this.maxWidth;
        this.left = this._margins.left;
        this.right = this.width;
      } else {
        this.height = this.maxHeight;
        this.top = this._margins.top;
        this.bottom = this.height;
      }
    }
    buildLabels() {
      const labelOpts = this.options.labels || {};
      let legendItems = callback(labelOpts.generateLabels, [
        this.chart
      ], this) || [];
      if (labelOpts.filter) {
        legendItems = legendItems.filter((item) => labelOpts.filter(item, this.chart.data));
      }
      if (labelOpts.sort) {
        legendItems = legendItems.sort((a2, b2) => labelOpts.sort(a2, b2, this.chart.data));
      }
      if (this.options.reverse) {
        legendItems.reverse();
      }
      this.legendItems = legendItems;
    }
    fit() {
      const { options, ctx } = this;
      if (!options.display) {
        this.width = this.height = 0;
        return;
      }
      const labelOpts = options.labels;
      const labelFont = toFont(labelOpts.font);
      const fontSize = labelFont.size;
      const titleHeight = this._computeTitleHeight();
      const { boxWidth, itemHeight } = getBoxSize(labelOpts, fontSize);
      let width, height;
      ctx.font = labelFont.string;
      if (this.isHorizontal()) {
        width = this.maxWidth;
        height = this._fitRows(titleHeight, fontSize, boxWidth, itemHeight) + 10;
      } else {
        height = this.maxHeight;
        width = this._fitCols(titleHeight, labelFont, boxWidth, itemHeight) + 10;
      }
      this.width = Math.min(width, options.maxWidth || this.maxWidth);
      this.height = Math.min(height, options.maxHeight || this.maxHeight);
    }
    _fitRows(titleHeight, fontSize, boxWidth, itemHeight) {
      const { ctx, maxWidth, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const lineWidths = this.lineWidths = [
        0
      ];
      const lineHeight = itemHeight + padding;
      let totalHeight = titleHeight;
      ctx.textAlign = "left";
      ctx.textBaseline = "middle";
      let row = -1;
      let top = -lineHeight;
      this.legendItems.forEach((legendItem, i2) => {
        const itemWidth = boxWidth + fontSize / 2 + ctx.measureText(legendItem.text).width;
        if (i2 === 0 || lineWidths[lineWidths.length - 1] + itemWidth + 2 * padding > maxWidth) {
          totalHeight += lineHeight;
          lineWidths[lineWidths.length - (i2 > 0 ? 0 : 1)] = 0;
          top += lineHeight;
          row++;
        }
        hitboxes[i2] = {
          left: 0,
          top,
          row,
          width: itemWidth,
          height: itemHeight
        };
        lineWidths[lineWidths.length - 1] += itemWidth + padding;
      });
      return totalHeight;
    }
    _fitCols(titleHeight, labelFont, boxWidth, _itemHeight) {
      const { ctx, maxHeight, options: { labels: { padding } } } = this;
      const hitboxes = this.legendHitBoxes = [];
      const columnSizes = this.columnSizes = [];
      const heightLimit = maxHeight - titleHeight;
      let totalWidth = padding;
      let currentColWidth = 0;
      let currentColHeight = 0;
      let left = 0;
      let col = 0;
      this.legendItems.forEach((legendItem, i2) => {
        const { itemWidth, itemHeight } = calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight);
        if (i2 > 0 && currentColHeight + itemHeight + 2 * padding > heightLimit) {
          totalWidth += currentColWidth + padding;
          columnSizes.push({
            width: currentColWidth,
            height: currentColHeight
          });
          left += currentColWidth + padding;
          col++;
          currentColWidth = currentColHeight = 0;
        }
        hitboxes[i2] = {
          left,
          top: currentColHeight,
          col,
          width: itemWidth,
          height: itemHeight
        };
        currentColWidth = Math.max(currentColWidth, itemWidth);
        currentColHeight += itemHeight + padding;
      });
      totalWidth += currentColWidth;
      columnSizes.push({
        width: currentColWidth,
        height: currentColHeight
      });
      return totalWidth;
    }
    adjustHitBoxes() {
      if (!this.options.display) {
        return;
      }
      const titleHeight = this._computeTitleHeight();
      const { legendHitBoxes: hitboxes, options: { align, labels: { padding }, rtl } } = this;
      const rtlHelper = getRtlAdapter(rtl, this.left, this.width);
      if (this.isHorizontal()) {
        let row = 0;
        let left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
        for (const hitbox of hitboxes) {
          if (row !== hitbox.row) {
            row = hitbox.row;
            left = _alignStartEnd(align, this.left + padding, this.right - this.lineWidths[row]);
          }
          hitbox.top += this.top + titleHeight + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(left), hitbox.width);
          left += hitbox.width + padding;
        }
      } else {
        let col = 0;
        let top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
        for (const hitbox of hitboxes) {
          if (hitbox.col !== col) {
            col = hitbox.col;
            top = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - this.columnSizes[col].height);
          }
          hitbox.top = top;
          hitbox.left += this.left + padding;
          hitbox.left = rtlHelper.leftForLtr(rtlHelper.x(hitbox.left), hitbox.width);
          top += hitbox.height + padding;
        }
      }
    }
    isHorizontal() {
      return this.options.position === "top" || this.options.position === "bottom";
    }
    draw() {
      if (this.options.display) {
        const ctx = this.ctx;
        clipArea(ctx, this);
        this._draw();
        unclipArea(ctx);
      }
    }
    _draw() {
      const { options: opts, columnSizes, lineWidths, ctx } = this;
      const { align, labels: labelOpts } = opts;
      const defaultColor = defaults.color;
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const labelFont = toFont(labelOpts.font);
      const { padding } = labelOpts;
      const fontSize = labelFont.size;
      const halfFontSize = fontSize / 2;
      let cursor;
      this.drawTitle();
      ctx.textAlign = rtlHelper.textAlign("left");
      ctx.textBaseline = "middle";
      ctx.lineWidth = 0.5;
      ctx.font = labelFont.string;
      const { boxWidth, boxHeight, itemHeight } = getBoxSize(labelOpts, fontSize);
      const drawLegendBox = function(x2, y2, legendItem) {
        if (isNaN(boxWidth) || boxWidth <= 0 || isNaN(boxHeight) || boxHeight < 0) {
          return;
        }
        ctx.save();
        const lineWidth = valueOrDefault(legendItem.lineWidth, 1);
        ctx.fillStyle = valueOrDefault(legendItem.fillStyle, defaultColor);
        ctx.lineCap = valueOrDefault(legendItem.lineCap, "butt");
        ctx.lineDashOffset = valueOrDefault(legendItem.lineDashOffset, 0);
        ctx.lineJoin = valueOrDefault(legendItem.lineJoin, "miter");
        ctx.lineWidth = lineWidth;
        ctx.strokeStyle = valueOrDefault(legendItem.strokeStyle, defaultColor);
        ctx.setLineDash(valueOrDefault(legendItem.lineDash, []));
        if (labelOpts.usePointStyle) {
          const drawOptions = {
            radius: boxHeight * Math.SQRT2 / 2,
            pointStyle: legendItem.pointStyle,
            rotation: legendItem.rotation,
            borderWidth: lineWidth
          };
          const centerX = rtlHelper.xPlus(x2, boxWidth / 2);
          const centerY = y2 + halfFontSize;
          drawPointLegend(ctx, drawOptions, centerX, centerY, labelOpts.pointStyleWidth && boxWidth);
        } else {
          const yBoxTop = y2 + Math.max((fontSize - boxHeight) / 2, 0);
          const xBoxLeft = rtlHelper.leftForLtr(x2, boxWidth);
          const borderRadius = toTRBLCorners(legendItem.borderRadius);
          ctx.beginPath();
          if (Object.values(borderRadius).some((v2) => v2 !== 0)) {
            addRoundedRectPath(ctx, {
              x: xBoxLeft,
              y: yBoxTop,
              w: boxWidth,
              h: boxHeight,
              radius: borderRadius
            });
          } else {
            ctx.rect(xBoxLeft, yBoxTop, boxWidth, boxHeight);
          }
          ctx.fill();
          if (lineWidth !== 0) {
            ctx.stroke();
          }
        }
        ctx.restore();
      };
      const fillText = function(x2, y2, legendItem) {
        renderText(ctx, legendItem.text, x2, y2 + itemHeight / 2, labelFont, {
          strikethrough: legendItem.hidden,
          textAlign: rtlHelper.textAlign(legendItem.textAlign)
        });
      };
      const isHorizontal = this.isHorizontal();
      const titleHeight = this._computeTitleHeight();
      if (isHorizontal) {
        cursor = {
          x: _alignStartEnd(align, this.left + padding, this.right - lineWidths[0]),
          y: this.top + padding + titleHeight,
          line: 0
        };
      } else {
        cursor = {
          x: this.left + padding,
          y: _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[0].height),
          line: 0
        };
      }
      overrideTextDirection(this.ctx, opts.textDirection);
      const lineHeight = itemHeight + padding;
      this.legendItems.forEach((legendItem, i2) => {
        ctx.strokeStyle = legendItem.fontColor;
        ctx.fillStyle = legendItem.fontColor;
        const textWidth = ctx.measureText(legendItem.text).width;
        const textAlign = rtlHelper.textAlign(legendItem.textAlign || (legendItem.textAlign = labelOpts.textAlign));
        const width = boxWidth + halfFontSize + textWidth;
        let x2 = cursor.x;
        let y2 = cursor.y;
        rtlHelper.setWidth(this.width);
        if (isHorizontal) {
          if (i2 > 0 && x2 + width + padding > this.right) {
            y2 = cursor.y += lineHeight;
            cursor.line++;
            x2 = cursor.x = _alignStartEnd(align, this.left + padding, this.right - lineWidths[cursor.line]);
          }
        } else if (i2 > 0 && y2 + lineHeight > this.bottom) {
          x2 = cursor.x = x2 + columnSizes[cursor.line].width + padding;
          cursor.line++;
          y2 = cursor.y = _alignStartEnd(align, this.top + titleHeight + padding, this.bottom - columnSizes[cursor.line].height);
        }
        const realX = rtlHelper.x(x2);
        drawLegendBox(realX, y2, legendItem);
        x2 = _textX(textAlign, x2 + boxWidth + halfFontSize, isHorizontal ? x2 + width : this.right, opts.rtl);
        fillText(rtlHelper.x(x2), y2, legendItem);
        if (isHorizontal) {
          cursor.x += width + padding;
        } else if (typeof legendItem.text !== "string") {
          const fontLineHeight = labelFont.lineHeight;
          cursor.y += calculateLegendItemHeight(legendItem, fontLineHeight) + padding;
        } else {
          cursor.y += lineHeight;
        }
      });
      restoreTextDirection(this.ctx, opts.textDirection);
    }
    drawTitle() {
      const opts = this.options;
      const titleOpts = opts.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      if (!titleOpts.display) {
        return;
      }
      const rtlHelper = getRtlAdapter(opts.rtl, this.left, this.width);
      const ctx = this.ctx;
      const position = titleOpts.position;
      const halfFontSize = titleFont.size / 2;
      const topPaddingPlusHalfFontSize = titlePadding.top + halfFontSize;
      let y2;
      let left = this.left;
      let maxWidth = this.width;
      if (this.isHorizontal()) {
        maxWidth = Math.max(...this.lineWidths);
        y2 = this.top + topPaddingPlusHalfFontSize;
        left = _alignStartEnd(opts.align, left, this.right - maxWidth);
      } else {
        const maxHeight = this.columnSizes.reduce((acc, size) => Math.max(acc, size.height), 0);
        y2 = topPaddingPlusHalfFontSize + _alignStartEnd(opts.align, this.top, this.bottom - maxHeight - opts.labels.padding - this._computeTitleHeight());
      }
      const x2 = _alignStartEnd(position, left, left + maxWidth);
      ctx.textAlign = rtlHelper.textAlign(_toLeftRightCenter(position));
      ctx.textBaseline = "middle";
      ctx.strokeStyle = titleOpts.color;
      ctx.fillStyle = titleOpts.color;
      ctx.font = titleFont.string;
      renderText(ctx, titleOpts.text, x2, y2, titleFont);
    }
    _computeTitleHeight() {
      const titleOpts = this.options.title;
      const titleFont = toFont(titleOpts.font);
      const titlePadding = toPadding(titleOpts.padding);
      return titleOpts.display ? titleFont.lineHeight + titlePadding.height : 0;
    }
    _getLegendItemAt(x2, y2) {
      let i2, hitBox, lh;
      if (_isBetween(x2, this.left, this.right) && _isBetween(y2, this.top, this.bottom)) {
        lh = this.legendHitBoxes;
        for (i2 = 0; i2 < lh.length; ++i2) {
          hitBox = lh[i2];
          if (_isBetween(x2, hitBox.left, hitBox.left + hitBox.width) && _isBetween(y2, hitBox.top, hitBox.top + hitBox.height)) {
            return this.legendItems[i2];
          }
        }
      }
      return null;
    }
    handleEvent(e2) {
      const opts = this.options;
      if (!isListened(e2.type, opts)) {
        return;
      }
      const hoveredItem = this._getLegendItemAt(e2.x, e2.y);
      if (e2.type === "mousemove" || e2.type === "mouseout") {
        const previous = this._hoveredItem;
        const sameItem = itemsEqual(previous, hoveredItem);
        if (previous && !sameItem) {
          callback(opts.onLeave, [
            e2,
            previous,
            this
          ], this);
        }
        this._hoveredItem = hoveredItem;
        if (hoveredItem && !sameItem) {
          callback(opts.onHover, [
            e2,
            hoveredItem,
            this
          ], this);
        }
      } else if (hoveredItem) {
        callback(opts.onClick, [
          e2,
          hoveredItem,
          this
        ], this);
      }
    }
  };
  function calculateItemSize(boxWidth, labelFont, ctx, legendItem, _itemHeight) {
    const itemWidth = calculateItemWidth(legendItem, boxWidth, labelFont, ctx);
    const itemHeight = calculateItemHeight(_itemHeight, legendItem, labelFont.lineHeight);
    return {
      itemWidth,
      itemHeight
    };
  }
  function calculateItemWidth(legendItem, boxWidth, labelFont, ctx) {
    let legendItemText = legendItem.text;
    if (legendItemText && typeof legendItemText !== "string") {
      legendItemText = legendItemText.reduce((a2, b2) => a2.length > b2.length ? a2 : b2);
    }
    return boxWidth + labelFont.size / 2 + ctx.measureText(legendItemText).width;
  }
  function calculateItemHeight(_itemHeight, legendItem, fontLineHeight) {
    let itemHeight = _itemHeight;
    if (typeof legendItem.text !== "string") {
      itemHeight = calculateLegendItemHeight(legendItem, fontLineHeight);
    }
    return itemHeight;
  }
  function calculateLegendItemHeight(legendItem, fontLineHeight) {
    const labelHeight = legendItem.text ? legendItem.text.length : 0;
    return fontLineHeight * labelHeight;
  }
  function isListened(type, opts) {
    if ((type === "mousemove" || type === "mouseout") && (opts.onHover || opts.onLeave)) {
      return true;
    }
    if (opts.onClick && (type === "click" || type === "mouseup")) {
      return true;
    }
    return false;
  }
  var plugin_legend = {
    id: "legend",
    _element: Legend,
    start(chart, _args, options) {
      const legend = chart.legend = new Legend({
        ctx: chart.ctx,
        options,
        chart
      });
      layouts.configure(chart, legend, options);
      layouts.addBox(chart, legend);
    },
    stop(chart) {
      layouts.removeBox(chart, chart.legend);
      delete chart.legend;
    },
    beforeUpdate(chart, _args, options) {
      const legend = chart.legend;
      layouts.configure(chart, legend, options);
      legend.options = options;
    },
    afterUpdate(chart) {
      const legend = chart.legend;
      legend.buildLabels();
      legend.adjustHitBoxes();
    },
    afterEvent(chart, args) {
      if (!args.replay) {
        chart.legend.handleEvent(args.event);
      }
    },
    defaults: {
      display: true,
      position: "top",
      align: "center",
      fullSize: true,
      reverse: false,
      weight: 1e3,
      onClick(e2, legendItem, legend) {
        const index2 = legendItem.datasetIndex;
        const ci = legend.chart;
        if (ci.isDatasetVisible(index2)) {
          ci.hide(index2);
          legendItem.hidden = true;
        } else {
          ci.show(index2);
          legendItem.hidden = false;
        }
      },
      onHover: null,
      onLeave: null,
      labels: {
        color: (ctx) => ctx.chart.options.color,
        boxWidth: 40,
        padding: 10,
        generateLabels(chart) {
          const datasets = chart.data.datasets;
          const { labels: { usePointStyle, pointStyle, textAlign, color: color2, useBorderRadius, borderRadius } } = chart.legend.options;
          return chart._getSortedDatasetMetas().map((meta) => {
            const style = meta.controller.getStyle(usePointStyle ? 0 : void 0);
            const borderWidth = toPadding(style.borderWidth);
            return {
              text: datasets[meta.index].label,
              fillStyle: style.backgroundColor,
              fontColor: color2,
              hidden: !meta.visible,
              lineCap: style.borderCapStyle,
              lineDash: style.borderDash,
              lineDashOffset: style.borderDashOffset,
              lineJoin: style.borderJoinStyle,
              lineWidth: (borderWidth.width + borderWidth.height) / 4,
              strokeStyle: style.borderColor,
              pointStyle: pointStyle || style.pointStyle,
              rotation: style.rotation,
              textAlign: textAlign || style.textAlign,
              borderRadius: useBorderRadius && (borderRadius || style.borderRadius),
              datasetIndex: meta.index
            };
          }, this);
        }
      },
      title: {
        color: (ctx) => ctx.chart.options.color,
        display: false,
        position: "center",
        text: ""
      }
    },
    descriptors: {
      _scriptable: (name) => !name.startsWith("on"),
      labels: {
        _scriptable: (name) => ![
          "generateLabels",
          "filter",
          "sort"
        ].includes(name)
      }
    }
  };
  var Title = class extends Element {
    constructor(config) {
      super();
      this.chart = config.chart;
      this.options = config.options;
      this.ctx = config.ctx;
      this._padding = void 0;
      this.top = void 0;
      this.bottom = void 0;
      this.left = void 0;
      this.right = void 0;
      this.width = void 0;
      this.height = void 0;
      this.position = void 0;
      this.weight = void 0;
      this.fullSize = void 0;
    }
    update(maxWidth, maxHeight) {
      const opts = this.options;
      this.left = 0;
      this.top = 0;
      if (!opts.display) {
        this.width = this.height = this.right = this.bottom = 0;
        return;
      }
      this.width = this.right = maxWidth;
      this.height = this.bottom = maxHeight;
      const lineCount = isArray(opts.text) ? opts.text.length : 1;
      this._padding = toPadding(opts.padding);
      const textSize = lineCount * toFont(opts.font).lineHeight + this._padding.height;
      if (this.isHorizontal()) {
        this.height = textSize;
      } else {
        this.width = textSize;
      }
    }
    isHorizontal() {
      const pos = this.options.position;
      return pos === "top" || pos === "bottom";
    }
    _drawArgs(offset) {
      const { top, left, bottom, right, options } = this;
      const align = options.align;
      let rotation = 0;
      let maxWidth, titleX, titleY;
      if (this.isHorizontal()) {
        titleX = _alignStartEnd(align, left, right);
        titleY = top + offset;
        maxWidth = right - left;
      } else {
        if (options.position === "left") {
          titleX = left + offset;
          titleY = _alignStartEnd(align, bottom, top);
          rotation = PI * -0.5;
        } else {
          titleX = right - offset;
          titleY = _alignStartEnd(align, top, bottom);
          rotation = PI * 0.5;
        }
        maxWidth = bottom - top;
      }
      return {
        titleX,
        titleY,
        maxWidth,
        rotation
      };
    }
    draw() {
      const ctx = this.ctx;
      const opts = this.options;
      if (!opts.display) {
        return;
      }
      const fontOpts = toFont(opts.font);
      const lineHeight = fontOpts.lineHeight;
      const offset = lineHeight / 2 + this._padding.top;
      const { titleX, titleY, maxWidth, rotation } = this._drawArgs(offset);
      renderText(ctx, opts.text, 0, 0, fontOpts, {
        color: opts.color,
        maxWidth,
        rotation,
        textAlign: _toLeftRightCenter(opts.align),
        textBaseline: "middle",
        translation: [
          titleX,
          titleY
        ]
      });
    }
  };
  function createTitle(chart, titleOpts) {
    const title = new Title({
      ctx: chart.ctx,
      options: titleOpts,
      chart
    });
    layouts.configure(chart, title, titleOpts);
    layouts.addBox(chart, title);
    chart.titleBlock = title;
  }
  var plugin_title = {
    id: "title",
    _element: Title,
    start(chart, _args, options) {
      createTitle(chart, options);
    },
    stop(chart) {
      const titleBlock = chart.titleBlock;
      layouts.removeBox(chart, titleBlock);
      delete chart.titleBlock;
    },
    beforeUpdate(chart, _args, options) {
      const title = chart.titleBlock;
      layouts.configure(chart, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "bold"
      },
      fullSize: true,
      padding: 10,
      position: "top",
      text: "",
      weight: 2e3
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var map2 = /* @__PURE__ */ new WeakMap();
  var plugin_subtitle = {
    id: "subtitle",
    start(chart, _args, options) {
      const title = new Title({
        ctx: chart.ctx,
        options,
        chart
      });
      layouts.configure(chart, title, options);
      layouts.addBox(chart, title);
      map2.set(chart, title);
    },
    stop(chart) {
      layouts.removeBox(chart, map2.get(chart));
      map2.delete(chart);
    },
    beforeUpdate(chart, _args, options) {
      const title = map2.get(chart);
      layouts.configure(chart, title, options);
      title.options = options;
    },
    defaults: {
      align: "center",
      display: false,
      font: {
        weight: "normal"
      },
      fullSize: true,
      padding: 0,
      position: "top",
      text: "",
      weight: 1500
    },
    defaultRoutes: {
      color: "color"
    },
    descriptors: {
      _scriptable: true,
      _indexable: false
    }
  };
  var positioners = {
    average(items) {
      if (!items.length) {
        return false;
      }
      let i2, len;
      let x2 = 0;
      let y2 = 0;
      let count = 0;
      for (i2 = 0, len = items.length; i2 < len; ++i2) {
        const el = items[i2].element;
        if (el && el.hasValue()) {
          const pos = el.tooltipPosition();
          x2 += pos.x;
          y2 += pos.y;
          ++count;
        }
      }
      return {
        x: x2 / count,
        y: y2 / count
      };
    },
    nearest(items, eventPosition) {
      if (!items.length) {
        return false;
      }
      let x2 = eventPosition.x;
      let y2 = eventPosition.y;
      let minDistance = Number.POSITIVE_INFINITY;
      let i2, len, nearestElement;
      for (i2 = 0, len = items.length; i2 < len; ++i2) {
        const el = items[i2].element;
        if (el && el.hasValue()) {
          const center = el.getCenterPoint();
          const d2 = distanceBetweenPoints(eventPosition, center);
          if (d2 < minDistance) {
            minDistance = d2;
            nearestElement = el;
          }
        }
      }
      if (nearestElement) {
        const tp = nearestElement.tooltipPosition();
        x2 = tp.x;
        y2 = tp.y;
      }
      return {
        x: x2,
        y: y2
      };
    }
  };
  function pushOrConcat(base, toPush) {
    if (toPush) {
      if (isArray(toPush)) {
        Array.prototype.push.apply(base, toPush);
      } else {
        base.push(toPush);
      }
    }
    return base;
  }
  function splitNewlines(str) {
    if ((typeof str === "string" || str instanceof String) && str.indexOf("\n") > -1) {
      return str.split("\n");
    }
    return str;
  }
  function createTooltipItem(chart, item) {
    const { element, datasetIndex, index: index2 } = item;
    const controller = chart.getDatasetMeta(datasetIndex).controller;
    const { label, value } = controller.getLabelAndValue(index2);
    return {
      chart,
      label,
      parsed: controller.getParsed(index2),
      raw: chart.data.datasets[datasetIndex].data[index2],
      formattedValue: value,
      dataset: controller.getDataset(),
      dataIndex: index2,
      datasetIndex,
      element
    };
  }
  function getTooltipSize(tooltip, options) {
    const ctx = tooltip.chart.ctx;
    const { body, footer, title } = tooltip;
    const { boxWidth, boxHeight } = options;
    const bodyFont = toFont(options.bodyFont);
    const titleFont = toFont(options.titleFont);
    const footerFont = toFont(options.footerFont);
    const titleLineCount = title.length;
    const footerLineCount = footer.length;
    const bodyLineItemCount = body.length;
    const padding = toPadding(options.padding);
    let height = padding.height;
    let width = 0;
    let combinedBodyLength = body.reduce((count, bodyItem) => count + bodyItem.before.length + bodyItem.lines.length + bodyItem.after.length, 0);
    combinedBodyLength += tooltip.beforeBody.length + tooltip.afterBody.length;
    if (titleLineCount) {
      height += titleLineCount * titleFont.lineHeight + (titleLineCount - 1) * options.titleSpacing + options.titleMarginBottom;
    }
    if (combinedBodyLength) {
      const bodyLineHeight = options.displayColors ? Math.max(boxHeight, bodyFont.lineHeight) : bodyFont.lineHeight;
      height += bodyLineItemCount * bodyLineHeight + (combinedBodyLength - bodyLineItemCount) * bodyFont.lineHeight + (combinedBodyLength - 1) * options.bodySpacing;
    }
    if (footerLineCount) {
      height += options.footerMarginTop + footerLineCount * footerFont.lineHeight + (footerLineCount - 1) * options.footerSpacing;
    }
    let widthPadding = 0;
    const maxLineWidth = function(line) {
      width = Math.max(width, ctx.measureText(line).width + widthPadding);
    };
    ctx.save();
    ctx.font = titleFont.string;
    each(tooltip.title, maxLineWidth);
    ctx.font = bodyFont.string;
    each(tooltip.beforeBody.concat(tooltip.afterBody), maxLineWidth);
    widthPadding = options.displayColors ? boxWidth + 2 + options.boxPadding : 0;
    each(body, (bodyItem) => {
      each(bodyItem.before, maxLineWidth);
      each(bodyItem.lines, maxLineWidth);
      each(bodyItem.after, maxLineWidth);
    });
    widthPadding = 0;
    ctx.font = footerFont.string;
    each(tooltip.footer, maxLineWidth);
    ctx.restore();
    width += padding.width;
    return {
      width,
      height
    };
  }
  function determineYAlign(chart, size) {
    const { y: y2, height } = size;
    if (y2 < height / 2) {
      return "top";
    } else if (y2 > chart.height - height / 2) {
      return "bottom";
    }
    return "center";
  }
  function doesNotFitWithAlign(xAlign, chart, options, size) {
    const { x: x2, width } = size;
    const caret = options.caretSize + options.caretPadding;
    if (xAlign === "left" && x2 + width + caret > chart.width) {
      return true;
    }
    if (xAlign === "right" && x2 - width - caret < 0) {
      return true;
    }
  }
  function determineXAlign(chart, options, size, yAlign) {
    const { x: x2, width } = size;
    const { width: chartWidth, chartArea: { left, right } } = chart;
    let xAlign = "center";
    if (yAlign === "center") {
      xAlign = x2 <= (left + right) / 2 ? "left" : "right";
    } else if (x2 <= width / 2) {
      xAlign = "left";
    } else if (x2 >= chartWidth - width / 2) {
      xAlign = "right";
    }
    if (doesNotFitWithAlign(xAlign, chart, options, size)) {
      xAlign = "center";
    }
    return xAlign;
  }
  function determineAlignment(chart, options, size) {
    const yAlign = size.yAlign || options.yAlign || determineYAlign(chart, size);
    return {
      xAlign: size.xAlign || options.xAlign || determineXAlign(chart, options, size, yAlign),
      yAlign
    };
  }
  function alignX(size, xAlign) {
    let { x: x2, width } = size;
    if (xAlign === "right") {
      x2 -= width;
    } else if (xAlign === "center") {
      x2 -= width / 2;
    }
    return x2;
  }
  function alignY(size, yAlign, paddingAndSize) {
    let { y: y2, height } = size;
    if (yAlign === "top") {
      y2 += paddingAndSize;
    } else if (yAlign === "bottom") {
      y2 -= height + paddingAndSize;
    } else {
      y2 -= height / 2;
    }
    return y2;
  }
  function getBackgroundPoint(options, size, alignment, chart) {
    const { caretSize, caretPadding, cornerRadius } = options;
    const { xAlign, yAlign } = alignment;
    const paddingAndSize = caretSize + caretPadding;
    const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
    let x2 = alignX(size, xAlign);
    const y2 = alignY(size, yAlign, paddingAndSize);
    if (yAlign === "center") {
      if (xAlign === "left") {
        x2 += paddingAndSize;
      } else if (xAlign === "right") {
        x2 -= paddingAndSize;
      }
    } else if (xAlign === "left") {
      x2 -= Math.max(topLeft, bottomLeft) + caretSize;
    } else if (xAlign === "right") {
      x2 += Math.max(topRight, bottomRight) + caretSize;
    }
    return {
      x: _limitValue(x2, 0, chart.width - size.width),
      y: _limitValue(y2, 0, chart.height - size.height)
    };
  }
  function getAlignedX(tooltip, align, options) {
    const padding = toPadding(options.padding);
    return align === "center" ? tooltip.x + tooltip.width / 2 : align === "right" ? tooltip.x + tooltip.width - padding.right : tooltip.x + padding.left;
  }
  function getBeforeAfterBodyLines(callback2) {
    return pushOrConcat([], splitNewlines(callback2));
  }
  function createTooltipContext(parent, tooltip, tooltipItems) {
    return createContext(parent, {
      tooltip,
      tooltipItems,
      type: "tooltip"
    });
  }
  function overrideCallbacks(callbacks, context) {
    const override = context && context.dataset && context.dataset.tooltip && context.dataset.tooltip.callbacks;
    return override ? callbacks.override(override) : callbacks;
  }
  var defaultCallbacks = {
    beforeTitle: noop,
    title(tooltipItems) {
      if (tooltipItems.length > 0) {
        const item = tooltipItems[0];
        const labels = item.chart.data.labels;
        const labelCount = labels ? labels.length : 0;
        if (this && this.options && this.options.mode === "dataset") {
          return item.dataset.label || "";
        } else if (item.label) {
          return item.label;
        } else if (labelCount > 0 && item.dataIndex < labelCount) {
          return labels[item.dataIndex];
        }
      }
      return "";
    },
    afterTitle: noop,
    beforeBody: noop,
    beforeLabel: noop,
    label(tooltipItem) {
      if (this && this.options && this.options.mode === "dataset") {
        return tooltipItem.label + ": " + tooltipItem.formattedValue || tooltipItem.formattedValue;
      }
      let label = tooltipItem.dataset.label || "";
      if (label) {
        label += ": ";
      }
      const value = tooltipItem.formattedValue;
      if (!isNullOrUndef(value)) {
        label += value;
      }
      return label;
    },
    labelColor(tooltipItem) {
      const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
      const options = meta.controller.getStyle(tooltipItem.dataIndex);
      return {
        borderColor: options.borderColor,
        backgroundColor: options.backgroundColor,
        borderWidth: options.borderWidth,
        borderDash: options.borderDash,
        borderDashOffset: options.borderDashOffset,
        borderRadius: 0
      };
    },
    labelTextColor() {
      return this.options.bodyColor;
    },
    labelPointStyle(tooltipItem) {
      const meta = tooltipItem.chart.getDatasetMeta(tooltipItem.datasetIndex);
      const options = meta.controller.getStyle(tooltipItem.dataIndex);
      return {
        pointStyle: options.pointStyle,
        rotation: options.rotation
      };
    },
    afterLabel: noop,
    afterBody: noop,
    beforeFooter: noop,
    footer: noop,
    afterFooter: noop
  };
  function invokeCallbackWithFallback(callbacks, name, ctx, arg) {
    const result = callbacks[name].call(ctx, arg);
    if (typeof result === "undefined") {
      return defaultCallbacks[name].call(ctx, arg);
    }
    return result;
  }
  var Tooltip = class extends Element {
    static positioners = positioners;
    constructor(config) {
      super();
      this.opacity = 0;
      this._active = [];
      this._eventPosition = void 0;
      this._size = void 0;
      this._cachedAnimations = void 0;
      this._tooltipItems = [];
      this.$animations = void 0;
      this.$context = void 0;
      this.chart = config.chart;
      this.options = config.options;
      this.dataPoints = void 0;
      this.title = void 0;
      this.beforeBody = void 0;
      this.body = void 0;
      this.afterBody = void 0;
      this.footer = void 0;
      this.xAlign = void 0;
      this.yAlign = void 0;
      this.x = void 0;
      this.y = void 0;
      this.height = void 0;
      this.width = void 0;
      this.caretX = void 0;
      this.caretY = void 0;
      this.labelColors = void 0;
      this.labelPointStyles = void 0;
      this.labelTextColors = void 0;
    }
    initialize(options) {
      this.options = options;
      this._cachedAnimations = void 0;
      this.$context = void 0;
    }
    _resolveAnimations() {
      const cached = this._cachedAnimations;
      if (cached) {
        return cached;
      }
      const chart = this.chart;
      const options = this.options.setContext(this.getContext());
      const opts = options.enabled && chart.options.animation && options.animations;
      const animations = new Animations(this.chart, opts);
      if (opts._cacheable) {
        this._cachedAnimations = Object.freeze(animations);
      }
      return animations;
    }
    getContext() {
      return this.$context || (this.$context = createTooltipContext(this.chart.getContext(), this, this._tooltipItems));
    }
    getTitle(context, options) {
      const { callbacks } = options;
      const beforeTitle = invokeCallbackWithFallback(callbacks, "beforeTitle", this, context);
      const title = invokeCallbackWithFallback(callbacks, "title", this, context);
      const afterTitle = invokeCallbackWithFallback(callbacks, "afterTitle", this, context);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeTitle));
      lines = pushOrConcat(lines, splitNewlines(title));
      lines = pushOrConcat(lines, splitNewlines(afterTitle));
      return lines;
    }
    getBeforeBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "beforeBody", this, tooltipItems));
    }
    getBody(tooltipItems, options) {
      const { callbacks } = options;
      const bodyItems = [];
      each(tooltipItems, (context) => {
        const bodyItem = {
          before: [],
          lines: [],
          after: []
        };
        const scoped = overrideCallbacks(callbacks, context);
        pushOrConcat(bodyItem.before, splitNewlines(invokeCallbackWithFallback(scoped, "beforeLabel", this, context)));
        pushOrConcat(bodyItem.lines, invokeCallbackWithFallback(scoped, "label", this, context));
        pushOrConcat(bodyItem.after, splitNewlines(invokeCallbackWithFallback(scoped, "afterLabel", this, context)));
        bodyItems.push(bodyItem);
      });
      return bodyItems;
    }
    getAfterBody(tooltipItems, options) {
      return getBeforeAfterBodyLines(invokeCallbackWithFallback(options.callbacks, "afterBody", this, tooltipItems));
    }
    getFooter(tooltipItems, options) {
      const { callbacks } = options;
      const beforeFooter = invokeCallbackWithFallback(callbacks, "beforeFooter", this, tooltipItems);
      const footer = invokeCallbackWithFallback(callbacks, "footer", this, tooltipItems);
      const afterFooter = invokeCallbackWithFallback(callbacks, "afterFooter", this, tooltipItems);
      let lines = [];
      lines = pushOrConcat(lines, splitNewlines(beforeFooter));
      lines = pushOrConcat(lines, splitNewlines(footer));
      lines = pushOrConcat(lines, splitNewlines(afterFooter));
      return lines;
    }
    _createItems(options) {
      const active = this._active;
      const data = this.chart.data;
      const labelColors = [];
      const labelPointStyles = [];
      const labelTextColors = [];
      let tooltipItems = [];
      let i2, len;
      for (i2 = 0, len = active.length; i2 < len; ++i2) {
        tooltipItems.push(createTooltipItem(this.chart, active[i2]));
      }
      if (options.filter) {
        tooltipItems = tooltipItems.filter((element, index2, array) => options.filter(element, index2, array, data));
      }
      if (options.itemSort) {
        tooltipItems = tooltipItems.sort((a2, b2) => options.itemSort(a2, b2, data));
      }
      each(tooltipItems, (context) => {
        const scoped = overrideCallbacks(options.callbacks, context);
        labelColors.push(invokeCallbackWithFallback(scoped, "labelColor", this, context));
        labelPointStyles.push(invokeCallbackWithFallback(scoped, "labelPointStyle", this, context));
        labelTextColors.push(invokeCallbackWithFallback(scoped, "labelTextColor", this, context));
      });
      this.labelColors = labelColors;
      this.labelPointStyles = labelPointStyles;
      this.labelTextColors = labelTextColors;
      this.dataPoints = tooltipItems;
      return tooltipItems;
    }
    update(changed, replay) {
      const options = this.options.setContext(this.getContext());
      const active = this._active;
      let properties;
      let tooltipItems = [];
      if (!active.length) {
        if (this.opacity !== 0) {
          properties = {
            opacity: 0
          };
        }
      } else {
        const position = positioners[options.position].call(this, active, this._eventPosition);
        tooltipItems = this._createItems(options);
        this.title = this.getTitle(tooltipItems, options);
        this.beforeBody = this.getBeforeBody(tooltipItems, options);
        this.body = this.getBody(tooltipItems, options);
        this.afterBody = this.getAfterBody(tooltipItems, options);
        this.footer = this.getFooter(tooltipItems, options);
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, size);
        const alignment = determineAlignment(this.chart, options, positionAndSize);
        const backgroundPoint = getBackgroundPoint(options, positionAndSize, alignment, this.chart);
        this.xAlign = alignment.xAlign;
        this.yAlign = alignment.yAlign;
        properties = {
          opacity: 1,
          x: backgroundPoint.x,
          y: backgroundPoint.y,
          width: size.width,
          height: size.height,
          caretX: position.x,
          caretY: position.y
        };
      }
      this._tooltipItems = tooltipItems;
      this.$context = void 0;
      if (properties) {
        this._resolveAnimations().update(this, properties);
      }
      if (changed && options.external) {
        options.external.call(this, {
          chart: this.chart,
          tooltip: this,
          replay
        });
      }
    }
    drawCaret(tooltipPoint, ctx, size, options) {
      const caretPosition = this.getCaretPosition(tooltipPoint, size, options);
      ctx.lineTo(caretPosition.x1, caretPosition.y1);
      ctx.lineTo(caretPosition.x2, caretPosition.y2);
      ctx.lineTo(caretPosition.x3, caretPosition.y3);
    }
    getCaretPosition(tooltipPoint, size, options) {
      const { xAlign, yAlign } = this;
      const { caretSize, cornerRadius } = options;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(cornerRadius);
      const { x: ptX, y: ptY } = tooltipPoint;
      const { width, height } = size;
      let x1, x2, x3, y1, y2, y3;
      if (yAlign === "center") {
        y2 = ptY + height / 2;
        if (xAlign === "left") {
          x1 = ptX;
          x2 = x1 - caretSize;
          y1 = y2 + caretSize;
          y3 = y2 - caretSize;
        } else {
          x1 = ptX + width;
          x2 = x1 + caretSize;
          y1 = y2 - caretSize;
          y3 = y2 + caretSize;
        }
        x3 = x1;
      } else {
        if (xAlign === "left") {
          x2 = ptX + Math.max(topLeft, bottomLeft) + caretSize;
        } else if (xAlign === "right") {
          x2 = ptX + width - Math.max(topRight, bottomRight) - caretSize;
        } else {
          x2 = this.caretX;
        }
        if (yAlign === "top") {
          y1 = ptY;
          y2 = y1 - caretSize;
          x1 = x2 - caretSize;
          x3 = x2 + caretSize;
        } else {
          y1 = ptY + height;
          y2 = y1 + caretSize;
          x1 = x2 + caretSize;
          x3 = x2 - caretSize;
        }
        y3 = y1;
      }
      return {
        x1,
        x2,
        x3,
        y1,
        y2,
        y3
      };
    }
    drawTitle(pt, ctx, options) {
      const title = this.title;
      const length = title.length;
      let titleFont, titleSpacing, i2;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.titleAlign, options);
        ctx.textAlign = rtlHelper.textAlign(options.titleAlign);
        ctx.textBaseline = "middle";
        titleFont = toFont(options.titleFont);
        titleSpacing = options.titleSpacing;
        ctx.fillStyle = options.titleColor;
        ctx.font = titleFont.string;
        for (i2 = 0; i2 < length; ++i2) {
          ctx.fillText(title[i2], rtlHelper.x(pt.x), pt.y + titleFont.lineHeight / 2);
          pt.y += titleFont.lineHeight + titleSpacing;
          if (i2 + 1 === length) {
            pt.y += options.titleMarginBottom - titleSpacing;
          }
        }
      }
    }
    _drawColorBox(ctx, pt, i2, rtlHelper, options) {
      const labelColor = this.labelColors[i2];
      const labelPointStyle = this.labelPointStyles[i2];
      const { boxHeight, boxWidth } = options;
      const bodyFont = toFont(options.bodyFont);
      const colorX = getAlignedX(this, "left", options);
      const rtlColorX = rtlHelper.x(colorX);
      const yOffSet = boxHeight < bodyFont.lineHeight ? (bodyFont.lineHeight - boxHeight) / 2 : 0;
      const colorY = pt.y + yOffSet;
      if (options.usePointStyle) {
        const drawOptions = {
          radius: Math.min(boxWidth, boxHeight) / 2,
          pointStyle: labelPointStyle.pointStyle,
          rotation: labelPointStyle.rotation,
          borderWidth: 1
        };
        const centerX = rtlHelper.leftForLtr(rtlColorX, boxWidth) + boxWidth / 2;
        const centerY = colorY + boxHeight / 2;
        ctx.strokeStyle = options.multiKeyBackground;
        ctx.fillStyle = options.multiKeyBackground;
        drawPoint(ctx, drawOptions, centerX, centerY);
        ctx.strokeStyle = labelColor.borderColor;
        ctx.fillStyle = labelColor.backgroundColor;
        drawPoint(ctx, drawOptions, centerX, centerY);
      } else {
        ctx.lineWidth = isObject(labelColor.borderWidth) ? Math.max(...Object.values(labelColor.borderWidth)) : labelColor.borderWidth || 1;
        ctx.strokeStyle = labelColor.borderColor;
        ctx.setLineDash(labelColor.borderDash || []);
        ctx.lineDashOffset = labelColor.borderDashOffset || 0;
        const outerX = rtlHelper.leftForLtr(rtlColorX, boxWidth);
        const innerX = rtlHelper.leftForLtr(rtlHelper.xPlus(rtlColorX, 1), boxWidth - 2);
        const borderRadius = toTRBLCorners(labelColor.borderRadius);
        if (Object.values(borderRadius).some((v2) => v2 !== 0)) {
          ctx.beginPath();
          ctx.fillStyle = options.multiKeyBackground;
          addRoundedRectPath(ctx, {
            x: outerX,
            y: colorY,
            w: boxWidth,
            h: boxHeight,
            radius: borderRadius
          });
          ctx.fill();
          ctx.stroke();
          ctx.fillStyle = labelColor.backgroundColor;
          ctx.beginPath();
          addRoundedRectPath(ctx, {
            x: innerX,
            y: colorY + 1,
            w: boxWidth - 2,
            h: boxHeight - 2,
            radius: borderRadius
          });
          ctx.fill();
        } else {
          ctx.fillStyle = options.multiKeyBackground;
          ctx.fillRect(outerX, colorY, boxWidth, boxHeight);
          ctx.strokeRect(outerX, colorY, boxWidth, boxHeight);
          ctx.fillStyle = labelColor.backgroundColor;
          ctx.fillRect(innerX, colorY + 1, boxWidth - 2, boxHeight - 2);
        }
      }
      ctx.fillStyle = this.labelTextColors[i2];
    }
    drawBody(pt, ctx, options) {
      const { body } = this;
      const { bodySpacing, bodyAlign, displayColors, boxHeight, boxWidth, boxPadding } = options;
      const bodyFont = toFont(options.bodyFont);
      let bodyLineHeight = bodyFont.lineHeight;
      let xLinePadding = 0;
      const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
      const fillLineOfText = function(line) {
        ctx.fillText(line, rtlHelper.x(pt.x + xLinePadding), pt.y + bodyLineHeight / 2);
        pt.y += bodyLineHeight + bodySpacing;
      };
      const bodyAlignForCalculation = rtlHelper.textAlign(bodyAlign);
      let bodyItem, textColor, lines, i2, j2, ilen, jlen;
      ctx.textAlign = bodyAlign;
      ctx.textBaseline = "middle";
      ctx.font = bodyFont.string;
      pt.x = getAlignedX(this, bodyAlignForCalculation, options);
      ctx.fillStyle = options.bodyColor;
      each(this.beforeBody, fillLineOfText);
      xLinePadding = displayColors && bodyAlignForCalculation !== "right" ? bodyAlign === "center" ? boxWidth / 2 + boxPadding : boxWidth + 2 + boxPadding : 0;
      for (i2 = 0, ilen = body.length; i2 < ilen; ++i2) {
        bodyItem = body[i2];
        textColor = this.labelTextColors[i2];
        ctx.fillStyle = textColor;
        each(bodyItem.before, fillLineOfText);
        lines = bodyItem.lines;
        if (displayColors && lines.length) {
          this._drawColorBox(ctx, pt, i2, rtlHelper, options);
          bodyLineHeight = Math.max(bodyFont.lineHeight, boxHeight);
        }
        for (j2 = 0, jlen = lines.length; j2 < jlen; ++j2) {
          fillLineOfText(lines[j2]);
          bodyLineHeight = bodyFont.lineHeight;
        }
        each(bodyItem.after, fillLineOfText);
      }
      xLinePadding = 0;
      bodyLineHeight = bodyFont.lineHeight;
      each(this.afterBody, fillLineOfText);
      pt.y -= bodySpacing;
    }
    drawFooter(pt, ctx, options) {
      const footer = this.footer;
      const length = footer.length;
      let footerFont, i2;
      if (length) {
        const rtlHelper = getRtlAdapter(options.rtl, this.x, this.width);
        pt.x = getAlignedX(this, options.footerAlign, options);
        pt.y += options.footerMarginTop;
        ctx.textAlign = rtlHelper.textAlign(options.footerAlign);
        ctx.textBaseline = "middle";
        footerFont = toFont(options.footerFont);
        ctx.fillStyle = options.footerColor;
        ctx.font = footerFont.string;
        for (i2 = 0; i2 < length; ++i2) {
          ctx.fillText(footer[i2], rtlHelper.x(pt.x), pt.y + footerFont.lineHeight / 2);
          pt.y += footerFont.lineHeight + options.footerSpacing;
        }
      }
    }
    drawBackground(pt, ctx, tooltipSize, options) {
      const { xAlign, yAlign } = this;
      const { x: x2, y: y2 } = pt;
      const { width, height } = tooltipSize;
      const { topLeft, topRight, bottomLeft, bottomRight } = toTRBLCorners(options.cornerRadius);
      ctx.fillStyle = options.backgroundColor;
      ctx.strokeStyle = options.borderColor;
      ctx.lineWidth = options.borderWidth;
      ctx.beginPath();
      ctx.moveTo(x2 + topLeft, y2);
      if (yAlign === "top") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2 + width - topRight, y2);
      ctx.quadraticCurveTo(x2 + width, y2, x2 + width, y2 + topRight);
      if (yAlign === "center" && xAlign === "right") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2 + width, y2 + height - bottomRight);
      ctx.quadraticCurveTo(x2 + width, y2 + height, x2 + width - bottomRight, y2 + height);
      if (yAlign === "bottom") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2 + bottomLeft, y2 + height);
      ctx.quadraticCurveTo(x2, y2 + height, x2, y2 + height - bottomLeft);
      if (yAlign === "center" && xAlign === "left") {
        this.drawCaret(pt, ctx, tooltipSize, options);
      }
      ctx.lineTo(x2, y2 + topLeft);
      ctx.quadraticCurveTo(x2, y2, x2 + topLeft, y2);
      ctx.closePath();
      ctx.fill();
      if (options.borderWidth > 0) {
        ctx.stroke();
      }
    }
    _updateAnimationTarget(options) {
      const chart = this.chart;
      const anims = this.$animations;
      const animX = anims && anims.x;
      const animY = anims && anims.y;
      if (animX || animY) {
        const position = positioners[options.position].call(this, this._active, this._eventPosition);
        if (!position) {
          return;
        }
        const size = this._size = getTooltipSize(this, options);
        const positionAndSize = Object.assign({}, position, this._size);
        const alignment = determineAlignment(chart, options, positionAndSize);
        const point = getBackgroundPoint(options, positionAndSize, alignment, chart);
        if (animX._to !== point.x || animY._to !== point.y) {
          this.xAlign = alignment.xAlign;
          this.yAlign = alignment.yAlign;
          this.width = size.width;
          this.height = size.height;
          this.caretX = position.x;
          this.caretY = position.y;
          this._resolveAnimations().update(this, point);
        }
      }
    }
    _willRender() {
      return !!this.opacity;
    }
    draw(ctx) {
      const options = this.options.setContext(this.getContext());
      let opacity = this.opacity;
      if (!opacity) {
        return;
      }
      this._updateAnimationTarget(options);
      const tooltipSize = {
        width: this.width,
        height: this.height
      };
      const pt = {
        x: this.x,
        y: this.y
      };
      opacity = Math.abs(opacity) < 1e-3 ? 0 : opacity;
      const padding = toPadding(options.padding);
      const hasTooltipContent = this.title.length || this.beforeBody.length || this.body.length || this.afterBody.length || this.footer.length;
      if (options.enabled && hasTooltipContent) {
        ctx.save();
        ctx.globalAlpha = opacity;
        this.drawBackground(pt, ctx, tooltipSize, options);
        overrideTextDirection(ctx, options.textDirection);
        pt.y += padding.top;
        this.drawTitle(pt, ctx, options);
        this.drawBody(pt, ctx, options);
        this.drawFooter(pt, ctx, options);
        restoreTextDirection(ctx, options.textDirection);
        ctx.restore();
      }
    }
    getActiveElements() {
      return this._active || [];
    }
    setActiveElements(activeElements, eventPosition) {
      const lastActive = this._active;
      const active = activeElements.map(({ datasetIndex, index: index2 }) => {
        const meta = this.chart.getDatasetMeta(datasetIndex);
        if (!meta) {
          throw new Error("Cannot find a dataset at index " + datasetIndex);
        }
        return {
          datasetIndex,
          element: meta.data[index2],
          index: index2
        };
      });
      const changed = !_elementsEqual(lastActive, active);
      const positionChanged = this._positionChanged(active, eventPosition);
      if (changed || positionChanged) {
        this._active = active;
        this._eventPosition = eventPosition;
        this._ignoreReplayEvents = true;
        this.update(true);
      }
    }
    handleEvent(e2, replay, inChartArea = true) {
      if (replay && this._ignoreReplayEvents) {
        return false;
      }
      this._ignoreReplayEvents = false;
      const options = this.options;
      const lastActive = this._active || [];
      const active = this._getActiveElements(e2, lastActive, replay, inChartArea);
      const positionChanged = this._positionChanged(active, e2);
      const changed = replay || !_elementsEqual(active, lastActive) || positionChanged;
      if (changed) {
        this._active = active;
        if (options.enabled || options.external) {
          this._eventPosition = {
            x: e2.x,
            y: e2.y
          };
          this.update(true, replay);
        }
      }
      return changed;
    }
    _getActiveElements(e2, lastActive, replay, inChartArea) {
      const options = this.options;
      if (e2.type === "mouseout") {
        return [];
      }
      if (!inChartArea) {
        return lastActive;
      }
      const active = this.chart.getElementsAtEventForMode(e2, options.mode, options, replay);
      if (options.reverse) {
        active.reverse();
      }
      return active;
    }
    _positionChanged(active, e2) {
      const { caretX, caretY, options } = this;
      const position = positioners[options.position].call(this, active, e2);
      return position !== false && (caretX !== position.x || caretY !== position.y);
    }
  };
  var plugin_tooltip = {
    id: "tooltip",
    _element: Tooltip,
    positioners,
    afterInit(chart, _args, options) {
      if (options) {
        chart.tooltip = new Tooltip({
          chart,
          options
        });
      }
    },
    beforeUpdate(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    reset(chart, _args, options) {
      if (chart.tooltip) {
        chart.tooltip.initialize(options);
      }
    },
    afterDraw(chart) {
      const tooltip = chart.tooltip;
      if (tooltip && tooltip._willRender()) {
        const args = {
          tooltip
        };
        if (chart.notifyPlugins("beforeTooltipDraw", {
          ...args,
          cancelable: true
        }) === false) {
          return;
        }
        tooltip.draw(chart.ctx);
        chart.notifyPlugins("afterTooltipDraw", args);
      }
    },
    afterEvent(chart, args) {
      if (chart.tooltip) {
        const useFinalPosition = args.replay;
        if (chart.tooltip.handleEvent(args.event, useFinalPosition, args.inChartArea)) {
          args.changed = true;
        }
      }
    },
    defaults: {
      enabled: true,
      external: null,
      position: "average",
      backgroundColor: "rgba(0,0,0,0.8)",
      titleColor: "#fff",
      titleFont: {
        weight: "bold"
      },
      titleSpacing: 2,
      titleMarginBottom: 6,
      titleAlign: "left",
      bodyColor: "#fff",
      bodySpacing: 2,
      bodyFont: {},
      bodyAlign: "left",
      footerColor: "#fff",
      footerSpacing: 2,
      footerMarginTop: 6,
      footerFont: {
        weight: "bold"
      },
      footerAlign: "left",
      padding: 6,
      caretPadding: 2,
      caretSize: 5,
      cornerRadius: 6,
      boxHeight: (ctx, opts) => opts.bodyFont.size,
      boxWidth: (ctx, opts) => opts.bodyFont.size,
      multiKeyBackground: "#fff",
      displayColors: true,
      boxPadding: 0,
      borderColor: "rgba(0,0,0,0)",
      borderWidth: 0,
      animation: {
        duration: 400,
        easing: "easeOutQuart"
      },
      animations: {
        numbers: {
          type: "number",
          properties: [
            "x",
            "y",
            "width",
            "height",
            "caretX",
            "caretY"
          ]
        },
        opacity: {
          easing: "linear",
          duration: 200
        }
      },
      callbacks: defaultCallbacks
    },
    defaultRoutes: {
      bodyFont: "font",
      footerFont: "font",
      titleFont: "font"
    },
    descriptors: {
      _scriptable: (name) => name !== "filter" && name !== "itemSort" && name !== "external",
      _indexable: false,
      callbacks: {
        _scriptable: false,
        _indexable: false
      },
      animation: {
        _fallback: false
      },
      animations: {
        _fallback: "animation"
      }
    },
    additionalOptionScopes: [
      "interaction"
    ]
  };
  var plugins = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    Colors: plugin_colors,
    Decimation: plugin_decimation,
    Filler: index,
    Legend: plugin_legend,
    SubTitle: plugin_subtitle,
    Title: plugin_title,
    Tooltip: plugin_tooltip
  });
  var addIfString = (labels, raw, index2, addedLabels) => {
    if (typeof raw === "string") {
      index2 = labels.push(raw) - 1;
      addedLabels.unshift({
        index: index2,
        label: raw
      });
    } else if (isNaN(raw)) {
      index2 = null;
    }
    return index2;
  };
  function findOrAddLabel(labels, raw, index2, addedLabels) {
    const first = labels.indexOf(raw);
    if (first === -1) {
      return addIfString(labels, raw, index2, addedLabels);
    }
    const last = labels.lastIndexOf(raw);
    return first !== last ? index2 : first;
  }
  var validIndex = (index2, max) => index2 === null ? null : _limitValue(Math.round(index2), 0, max);
  function _getLabelForValue(value) {
    const labels = this.getLabels();
    if (value >= 0 && value < labels.length) {
      return labels[value];
    }
    return value;
  }
  var CategoryScale = class extends Scale {
    static id = "category";
    static defaults = {
      ticks: {
        callback: _getLabelForValue
      }
    };
    constructor(cfg) {
      super(cfg);
      this._startValue = void 0;
      this._valueRange = 0;
      this._addedLabels = [];
    }
    init(scaleOptions) {
      const added = this._addedLabels;
      if (added.length) {
        const labels = this.getLabels();
        for (const { index: index2, label } of added) {
          if (labels[index2] === label) {
            labels.splice(index2, 1);
          }
        }
        this._addedLabels = [];
      }
      super.init(scaleOptions);
    }
    parse(raw, index2) {
      if (isNullOrUndef(raw)) {
        return null;
      }
      const labels = this.getLabels();
      index2 = isFinite(index2) && labels[index2] === raw ? index2 : findOrAddLabel(labels, raw, valueOrDefault(index2, raw), this._addedLabels);
      return validIndex(index2, labels.length - 1);
    }
    determineDataLimits() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this.getMinMax(true);
      if (this.options.bounds === "ticks") {
        if (!minDefined) {
          min = 0;
        }
        if (!maxDefined) {
          max = this.getLabels().length - 1;
        }
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const min = this.min;
      const max = this.max;
      const offset = this.options.offset;
      const ticks = [];
      let labels = this.getLabels();
      labels = min === 0 && max === labels.length - 1 ? labels : labels.slice(min, max + 1);
      this._valueRange = Math.max(labels.length - (offset ? 0 : 1), 1);
      this._startValue = this.min - (offset ? 0.5 : 0);
      for (let value = min; value <= max; value++) {
        ticks.push({
          value
        });
      }
      return ticks;
    }
    getLabelForValue(value) {
      return _getLabelForValue.call(this, value);
    }
    configure() {
      super.configure();
      if (!this.isHorizontal()) {
        this._reversePixels = !this._reversePixels;
      }
    }
    getPixelForValue(value) {
      if (typeof value !== "number") {
        value = this.parse(value);
      }
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getPixelForTick(index2) {
      const ticks = this.ticks;
      if (index2 < 0 || index2 > ticks.length - 1) {
        return null;
      }
      return this.getPixelForValue(ticks[index2].value);
    }
    getValueForPixel(pixel) {
      return Math.round(this._startValue + this.getDecimalForPixel(pixel) * this._valueRange);
    }
    getBasePixel() {
      return this.bottom;
    }
  };
  function generateTicks$1(generationOptions, dataRange) {
    const ticks = [];
    const MIN_SPACING = 1e-14;
    const { bounds, step, min, max, precision, count, maxTicks, maxDigits, includeBounds } = generationOptions;
    const unit = step || 1;
    const maxSpaces = maxTicks - 1;
    const { min: rmin, max: rmax } = dataRange;
    const minDefined = !isNullOrUndef(min);
    const maxDefined = !isNullOrUndef(max);
    const countDefined = !isNullOrUndef(count);
    const minSpacing = (rmax - rmin) / (maxDigits + 1);
    let spacing = niceNum((rmax - rmin) / maxSpaces / unit) * unit;
    let factor, niceMin, niceMax, numSpaces;
    if (spacing < MIN_SPACING && !minDefined && !maxDefined) {
      return [
        {
          value: rmin
        },
        {
          value: rmax
        }
      ];
    }
    numSpaces = Math.ceil(rmax / spacing) - Math.floor(rmin / spacing);
    if (numSpaces > maxSpaces) {
      spacing = niceNum(numSpaces * spacing / maxSpaces / unit) * unit;
    }
    if (!isNullOrUndef(precision)) {
      factor = Math.pow(10, precision);
      spacing = Math.ceil(spacing * factor) / factor;
    }
    if (bounds === "ticks") {
      niceMin = Math.floor(rmin / spacing) * spacing;
      niceMax = Math.ceil(rmax / spacing) * spacing;
    } else {
      niceMin = rmin;
      niceMax = rmax;
    }
    if (minDefined && maxDefined && step && almostWhole((max - min) / step, spacing / 1e3)) {
      numSpaces = Math.round(Math.min((max - min) / spacing, maxTicks));
      spacing = (max - min) / numSpaces;
      niceMin = min;
      niceMax = max;
    } else if (countDefined) {
      niceMin = minDefined ? min : niceMin;
      niceMax = maxDefined ? max : niceMax;
      numSpaces = count - 1;
      spacing = (niceMax - niceMin) / numSpaces;
    } else {
      numSpaces = (niceMax - niceMin) / spacing;
      if (almostEquals(numSpaces, Math.round(numSpaces), spacing / 1e3)) {
        numSpaces = Math.round(numSpaces);
      } else {
        numSpaces = Math.ceil(numSpaces);
      }
    }
    const decimalPlaces = Math.max(_decimalPlaces(spacing), _decimalPlaces(niceMin));
    factor = Math.pow(10, isNullOrUndef(precision) ? decimalPlaces : precision);
    niceMin = Math.round(niceMin * factor) / factor;
    niceMax = Math.round(niceMax * factor) / factor;
    let j2 = 0;
    if (minDefined) {
      if (includeBounds && niceMin !== min) {
        ticks.push({
          value: min
        });
        if (niceMin < min) {
          j2++;
        }
        if (almostEquals(Math.round((niceMin + j2 * spacing) * factor) / factor, min, relativeLabelSize(min, minSpacing, generationOptions))) {
          j2++;
        }
      } else if (niceMin < min) {
        j2++;
      }
    }
    for (; j2 < numSpaces; ++j2) {
      const tickValue = Math.round((niceMin + j2 * spacing) * factor) / factor;
      if (maxDefined && tickValue > max) {
        break;
      }
      ticks.push({
        value: tickValue
      });
    }
    if (maxDefined && includeBounds && niceMax !== max) {
      if (ticks.length && almostEquals(ticks[ticks.length - 1].value, max, relativeLabelSize(max, minSpacing, generationOptions))) {
        ticks[ticks.length - 1].value = max;
      } else {
        ticks.push({
          value: max
        });
      }
    } else if (!maxDefined || niceMax === max) {
      ticks.push({
        value: niceMax
      });
    }
    return ticks;
  }
  function relativeLabelSize(value, minSpacing, { horizontal, minRotation }) {
    const rad = toRadians(minRotation);
    const ratio = (horizontal ? Math.sin(rad) : Math.cos(rad)) || 1e-3;
    const length = 0.75 * minSpacing * ("" + value).length;
    return Math.min(minSpacing / ratio, length);
  }
  var LinearScaleBase = class extends Scale {
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._endValue = void 0;
      this._valueRange = 0;
    }
    parse(raw, index2) {
      if (isNullOrUndef(raw)) {
        return null;
      }
      if ((typeof raw === "number" || raw instanceof Number) && !isFinite(+raw)) {
        return null;
      }
      return +raw;
    }
    handleTickRangeOptions() {
      const { beginAtZero } = this.options;
      const { minDefined, maxDefined } = this.getUserBounds();
      let { min, max } = this;
      const setMin = (v2) => min = minDefined ? min : v2;
      const setMax = (v2) => max = maxDefined ? max : v2;
      if (beginAtZero) {
        const minSign = sign(min);
        const maxSign = sign(max);
        if (minSign < 0 && maxSign < 0) {
          setMax(0);
        } else if (minSign > 0 && maxSign > 0) {
          setMin(0);
        }
      }
      if (min === max) {
        let offset = max === 0 ? 1 : Math.abs(max * 0.05);
        setMax(max + offset);
        if (!beginAtZero) {
          setMin(min - offset);
        }
      }
      this.min = min;
      this.max = max;
    }
    getTickLimit() {
      const tickOpts = this.options.ticks;
      let { maxTicksLimit, stepSize } = tickOpts;
      let maxTicks;
      if (stepSize) {
        maxTicks = Math.ceil(this.max / stepSize) - Math.floor(this.min / stepSize) + 1;
        if (maxTicks > 1e3) {
          console.warn(`scales.${this.id}.ticks.stepSize: ${stepSize} would result generating up to ${maxTicks} ticks. Limiting to 1000.`);
          maxTicks = 1e3;
        }
      } else {
        maxTicks = this.computeTickLimit();
        maxTicksLimit = maxTicksLimit || 11;
      }
      if (maxTicksLimit) {
        maxTicks = Math.min(maxTicksLimit, maxTicks);
      }
      return maxTicks;
    }
    computeTickLimit() {
      return Number.POSITIVE_INFINITY;
    }
    buildTicks() {
      const opts = this.options;
      const tickOpts = opts.ticks;
      let maxTicks = this.getTickLimit();
      maxTicks = Math.max(2, maxTicks);
      const numericGeneratorOptions = {
        maxTicks,
        bounds: opts.bounds,
        min: opts.min,
        max: opts.max,
        precision: tickOpts.precision,
        step: tickOpts.stepSize,
        count: tickOpts.count,
        maxDigits: this._maxDigits(),
        horizontal: this.isHorizontal(),
        minRotation: tickOpts.minRotation || 0,
        includeBounds: tickOpts.includeBounds !== false
      };
      const dataRange = this._range || this;
      const ticks = generateTicks$1(numericGeneratorOptions, dataRange);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    configure() {
      const ticks = this.ticks;
      let start = this.min;
      let end = this.max;
      super.configure();
      if (this.options.offset && ticks.length) {
        const offset = (end - start) / Math.max(ticks.length - 1, 1) / 2;
        start -= offset;
        end += offset;
      }
      this._startValue = start;
      this._endValue = end;
      this._valueRange = end - start;
    }
    getLabelForValue(value) {
      return formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
  };
  var LinearScale = class extends LinearScaleBase {
    static id = "linear";
    static defaults = {
      ticks: {
        callback: Ticks.formatters.numeric
      }
    };
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? min : 0;
      this.max = isNumberFinite(max) ? max : 1;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      const horizontal = this.isHorizontal();
      const length = horizontal ? this.width : this.height;
      const minRotation = toRadians(this.options.ticks.minRotation);
      const ratio = (horizontal ? Math.sin(minRotation) : Math.cos(minRotation)) || 1e-3;
      const tickFont = this._resolveTickFontOptions(0);
      return Math.ceil(length / Math.min(40, tickFont.lineHeight / ratio));
    }
    getPixelForValue(value) {
      return value === null ? NaN : this.getPixelForDecimal((value - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      return this._startValue + this.getDecimalForPixel(pixel) * this._valueRange;
    }
  };
  var log10Floor = (v2) => Math.floor(log10(v2));
  var changeExponent = (v2, m2) => Math.pow(10, log10Floor(v2) + m2);
  function isMajor(tickVal) {
    const remain = tickVal / Math.pow(10, log10Floor(tickVal));
    return remain === 1;
  }
  function steps(min, max, rangeExp) {
    const rangeStep = Math.pow(10, rangeExp);
    const start = Math.floor(min / rangeStep);
    const end = Math.ceil(max / rangeStep);
    return end - start;
  }
  function startExp(min, max) {
    const range = max - min;
    let rangeExp = log10Floor(range);
    while (steps(min, max, rangeExp) > 10) {
      rangeExp++;
    }
    while (steps(min, max, rangeExp) < 10) {
      rangeExp--;
    }
    return Math.min(rangeExp, log10Floor(min));
  }
  function generateTicks(generationOptions, { min, max }) {
    min = finiteOrDefault(generationOptions.min, min);
    const ticks = [];
    const minExp = log10Floor(min);
    let exp = startExp(min, max);
    let precision = exp < 0 ? Math.pow(10, Math.abs(exp)) : 1;
    const stepSize = Math.pow(10, exp);
    const base = minExp > exp ? Math.pow(10, minExp) : 0;
    const start = Math.round((min - base) * precision) / precision;
    const offset = Math.floor((min - base) / stepSize / 10) * stepSize * 10;
    let significand = Math.floor((start - offset) / Math.pow(10, exp));
    let value = finiteOrDefault(generationOptions.min, Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision);
    while (value < max) {
      ticks.push({
        value,
        major: isMajor(value),
        significand
      });
      if (significand >= 10) {
        significand = significand < 15 ? 15 : 20;
      } else {
        significand++;
      }
      if (significand >= 20) {
        exp++;
        significand = 2;
        precision = exp >= 0 ? 1 : precision;
      }
      value = Math.round((base + offset + significand * Math.pow(10, exp)) * precision) / precision;
    }
    const lastTick = finiteOrDefault(generationOptions.max, value);
    ticks.push({
      value: lastTick,
      major: isMajor(lastTick),
      significand
    });
    return ticks;
  }
  var LogarithmicScale = class extends Scale {
    static id = "logarithmic";
    static defaults = {
      ticks: {
        callback: Ticks.formatters.logarithmic,
        major: {
          enabled: true
        }
      }
    };
    constructor(cfg) {
      super(cfg);
      this.start = void 0;
      this.end = void 0;
      this._startValue = void 0;
      this._valueRange = 0;
    }
    parse(raw, index2) {
      const value = LinearScaleBase.prototype.parse.apply(this, [
        raw,
        index2
      ]);
      if (value === 0) {
        this._zero = true;
        return void 0;
      }
      return isNumberFinite(value) && value > 0 ? value : null;
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(true);
      this.min = isNumberFinite(min) ? Math.max(0, min) : null;
      this.max = isNumberFinite(max) ? Math.max(0, max) : null;
      if (this.options.beginAtZero) {
        this._zero = true;
      }
      if (this._zero && this.min !== this._suggestedMin && !isNumberFinite(this._userMin)) {
        this.min = min === changeExponent(this.min, 0) ? changeExponent(this.min, -1) : changeExponent(this.min, 0);
      }
      this.handleTickRangeOptions();
    }
    handleTickRangeOptions() {
      const { minDefined, maxDefined } = this.getUserBounds();
      let min = this.min;
      let max = this.max;
      const setMin = (v2) => min = minDefined ? min : v2;
      const setMax = (v2) => max = maxDefined ? max : v2;
      if (min === max) {
        if (min <= 0) {
          setMin(1);
          setMax(10);
        } else {
          setMin(changeExponent(min, -1));
          setMax(changeExponent(max, 1));
        }
      }
      if (min <= 0) {
        setMin(changeExponent(max, -1));
      }
      if (max <= 0) {
        setMax(changeExponent(min, 1));
      }
      this.min = min;
      this.max = max;
    }
    buildTicks() {
      const opts = this.options;
      const generationOptions = {
        min: this._userMin,
        max: this._userMax
      };
      const ticks = generateTicks(generationOptions, this);
      if (opts.bounds === "ticks") {
        _setMinAndMaxByKey(ticks, this, "value");
      }
      if (opts.reverse) {
        ticks.reverse();
        this.start = this.max;
        this.end = this.min;
      } else {
        this.start = this.min;
        this.end = this.max;
      }
      return ticks;
    }
    getLabelForValue(value) {
      return value === void 0 ? "0" : formatNumber(value, this.chart.options.locale, this.options.ticks.format);
    }
    configure() {
      const start = this.min;
      super.configure();
      this._startValue = log10(start);
      this._valueRange = log10(this.max) - log10(start);
    }
    getPixelForValue(value) {
      if (value === void 0 || value === 0) {
        value = this.min;
      }
      if (value === null || isNaN(value)) {
        return NaN;
      }
      return this.getPixelForDecimal(value === this.min ? 0 : (log10(value) - this._startValue) / this._valueRange);
    }
    getValueForPixel(pixel) {
      const decimal = this.getDecimalForPixel(pixel);
      return Math.pow(10, this._startValue + decimal * this._valueRange);
    }
  };
  function getTickBackdropHeight(opts) {
    const tickOpts = opts.ticks;
    if (tickOpts.display && opts.display) {
      const padding = toPadding(tickOpts.backdropPadding);
      return valueOrDefault(tickOpts.font && tickOpts.font.size, defaults.font.size) + padding.height;
    }
    return 0;
  }
  function measureLabelSize(ctx, font, label) {
    label = isArray(label) ? label : [
      label
    ];
    return {
      w: _longestText(ctx, font.string, label),
      h: label.length * font.lineHeight
    };
  }
  function determineLimits(angle, pos, size, min, max) {
    if (angle === min || angle === max) {
      return {
        start: pos - size / 2,
        end: pos + size / 2
      };
    } else if (angle < min || angle > max) {
      return {
        start: pos - size,
        end: pos
      };
    }
    return {
      start: pos,
      end: pos + size
    };
  }
  function fitWithPointLabels(scale) {
    const orig = {
      l: scale.left + scale._padding.left,
      r: scale.right - scale._padding.right,
      t: scale.top + scale._padding.top,
      b: scale.bottom - scale._padding.bottom
    };
    const limits = Object.assign({}, orig);
    const labelSizes = [];
    const padding = [];
    const valueCount = scale._pointLabels.length;
    const pointLabelOpts = scale.options.pointLabels;
    const additionalAngle = pointLabelOpts.centerPointLabels ? PI / valueCount : 0;
    for (let i2 = 0; i2 < valueCount; i2++) {
      const opts = pointLabelOpts.setContext(scale.getPointLabelContext(i2));
      padding[i2] = opts.padding;
      const pointPosition = scale.getPointPosition(i2, scale.drawingArea + padding[i2], additionalAngle);
      const plFont = toFont(opts.font);
      const textSize = measureLabelSize(scale.ctx, plFont, scale._pointLabels[i2]);
      labelSizes[i2] = textSize;
      const angleRadians = _normalizeAngle(scale.getIndexAngle(i2) + additionalAngle);
      const angle = Math.round(toDegrees(angleRadians));
      const hLimits = determineLimits(angle, pointPosition.x, textSize.w, 0, 180);
      const vLimits = determineLimits(angle, pointPosition.y, textSize.h, 90, 270);
      updateLimits(limits, orig, angleRadians, hLimits, vLimits);
    }
    scale.setCenterPoint(orig.l - limits.l, limits.r - orig.r, orig.t - limits.t, limits.b - orig.b);
    scale._pointLabelItems = buildPointLabelItems(scale, labelSizes, padding);
  }
  function updateLimits(limits, orig, angle, hLimits, vLimits) {
    const sin = Math.abs(Math.sin(angle));
    const cos = Math.abs(Math.cos(angle));
    let x2 = 0;
    let y2 = 0;
    if (hLimits.start < orig.l) {
      x2 = (orig.l - hLimits.start) / sin;
      limits.l = Math.min(limits.l, orig.l - x2);
    } else if (hLimits.end > orig.r) {
      x2 = (hLimits.end - orig.r) / sin;
      limits.r = Math.max(limits.r, orig.r + x2);
    }
    if (vLimits.start < orig.t) {
      y2 = (orig.t - vLimits.start) / cos;
      limits.t = Math.min(limits.t, orig.t - y2);
    } else if (vLimits.end > orig.b) {
      y2 = (vLimits.end - orig.b) / cos;
      limits.b = Math.max(limits.b, orig.b + y2);
    }
  }
  function createPointLabelItem(scale, index2, itemOpts) {
    const outerDistance = scale.drawingArea;
    const { extra, additionalAngle, padding, size } = itemOpts;
    const pointLabelPosition = scale.getPointPosition(index2, outerDistance + extra + padding, additionalAngle);
    const angle = Math.round(toDegrees(_normalizeAngle(pointLabelPosition.angle + HALF_PI)));
    const y2 = yForAngle(pointLabelPosition.y, size.h, angle);
    const textAlign = getTextAlignForAngle(angle);
    const left = leftForTextAlign(pointLabelPosition.x, size.w, textAlign);
    return {
      visible: true,
      x: pointLabelPosition.x,
      y: y2,
      textAlign,
      left,
      top: y2,
      right: left + size.w,
      bottom: y2 + size.h
    };
  }
  function isNotOverlapped(item, area) {
    if (!area) {
      return true;
    }
    const { left, top, right, bottom } = item;
    const apexesInArea = _isPointInArea({
      x: left,
      y: top
    }, area) || _isPointInArea({
      x: left,
      y: bottom
    }, area) || _isPointInArea({
      x: right,
      y: top
    }, area) || _isPointInArea({
      x: right,
      y: bottom
    }, area);
    return !apexesInArea;
  }
  function buildPointLabelItems(scale, labelSizes, padding) {
    const items = [];
    const valueCount = scale._pointLabels.length;
    const opts = scale.options;
    const { centerPointLabels, display } = opts.pointLabels;
    const itemOpts = {
      extra: getTickBackdropHeight(opts) / 2,
      additionalAngle: centerPointLabels ? PI / valueCount : 0
    };
    let area;
    for (let i2 = 0; i2 < valueCount; i2++) {
      itemOpts.padding = padding[i2];
      itemOpts.size = labelSizes[i2];
      const item = createPointLabelItem(scale, i2, itemOpts);
      items.push(item);
      if (display === "auto") {
        item.visible = isNotOverlapped(item, area);
        if (item.visible) {
          area = item;
        }
      }
    }
    return items;
  }
  function getTextAlignForAngle(angle) {
    if (angle === 0 || angle === 180) {
      return "center";
    } else if (angle < 180) {
      return "left";
    }
    return "right";
  }
  function leftForTextAlign(x2, w2, align) {
    if (align === "right") {
      x2 -= w2;
    } else if (align === "center") {
      x2 -= w2 / 2;
    }
    return x2;
  }
  function yForAngle(y2, h3, angle) {
    if (angle === 90 || angle === 270) {
      y2 -= h3 / 2;
    } else if (angle > 270 || angle < 90) {
      y2 -= h3;
    }
    return y2;
  }
  function drawPointLabelBox(ctx, opts, item) {
    const { left, top, right, bottom } = item;
    const { backdropColor } = opts;
    if (!isNullOrUndef(backdropColor)) {
      const borderRadius = toTRBLCorners(opts.borderRadius);
      const padding = toPadding(opts.backdropPadding);
      ctx.fillStyle = backdropColor;
      const backdropLeft = left - padding.left;
      const backdropTop = top - padding.top;
      const backdropWidth = right - left + padding.width;
      const backdropHeight = bottom - top + padding.height;
      if (Object.values(borderRadius).some((v2) => v2 !== 0)) {
        ctx.beginPath();
        addRoundedRectPath(ctx, {
          x: backdropLeft,
          y: backdropTop,
          w: backdropWidth,
          h: backdropHeight,
          radius: borderRadius
        });
        ctx.fill();
      } else {
        ctx.fillRect(backdropLeft, backdropTop, backdropWidth, backdropHeight);
      }
    }
  }
  function drawPointLabels(scale, labelCount) {
    const { ctx, options: { pointLabels } } = scale;
    for (let i2 = labelCount - 1; i2 >= 0; i2--) {
      const item = scale._pointLabelItems[i2];
      if (!item.visible) {
        continue;
      }
      const optsAtIndex = pointLabels.setContext(scale.getPointLabelContext(i2));
      drawPointLabelBox(ctx, optsAtIndex, item);
      const plFont = toFont(optsAtIndex.font);
      const { x: x2, y: y2, textAlign } = item;
      renderText(ctx, scale._pointLabels[i2], x2, y2 + plFont.lineHeight / 2, plFont, {
        color: optsAtIndex.color,
        textAlign,
        textBaseline: "middle"
      });
    }
  }
  function pathRadiusLine(scale, radius, circular, labelCount) {
    const { ctx } = scale;
    if (circular) {
      ctx.arc(scale.xCenter, scale.yCenter, radius, 0, TAU);
    } else {
      let pointPosition = scale.getPointPosition(0, radius);
      ctx.moveTo(pointPosition.x, pointPosition.y);
      for (let i2 = 1; i2 < labelCount; i2++) {
        pointPosition = scale.getPointPosition(i2, radius);
        ctx.lineTo(pointPosition.x, pointPosition.y);
      }
    }
  }
  function drawRadiusLine(scale, gridLineOpts, radius, labelCount, borderOpts) {
    const ctx = scale.ctx;
    const circular = gridLineOpts.circular;
    const { color: color2, lineWidth } = gridLineOpts;
    if (!circular && !labelCount || !color2 || !lineWidth || radius < 0) {
      return;
    }
    ctx.save();
    ctx.strokeStyle = color2;
    ctx.lineWidth = lineWidth;
    ctx.setLineDash(borderOpts.dash);
    ctx.lineDashOffset = borderOpts.dashOffset;
    ctx.beginPath();
    pathRadiusLine(scale, radius, circular, labelCount);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
  }
  function createPointLabelContext(parent, index2, label) {
    return createContext(parent, {
      label,
      index: index2,
      type: "pointLabel"
    });
  }
  var RadialLinearScale = class extends LinearScaleBase {
    static id = "radialLinear";
    static defaults = {
      display: true,
      animate: true,
      position: "chartArea",
      angleLines: {
        display: true,
        lineWidth: 1,
        borderDash: [],
        borderDashOffset: 0
      },
      grid: {
        circular: false
      },
      startAngle: 0,
      ticks: {
        showLabelBackdrop: true,
        callback: Ticks.formatters.numeric
      },
      pointLabels: {
        backdropColor: void 0,
        backdropPadding: 2,
        display: true,
        font: {
          size: 10
        },
        callback(label) {
          return label;
        },
        padding: 5,
        centerPointLabels: false
      }
    };
    static defaultRoutes = {
      "angleLines.color": "borderColor",
      "pointLabels.color": "color",
      "ticks.color": "color"
    };
    static descriptors = {
      angleLines: {
        _fallback: "grid"
      }
    };
    constructor(cfg) {
      super(cfg);
      this.xCenter = void 0;
      this.yCenter = void 0;
      this.drawingArea = void 0;
      this._pointLabels = [];
      this._pointLabelItems = [];
    }
    setDimensions() {
      const padding = this._padding = toPadding(getTickBackdropHeight(this.options) / 2);
      const w2 = this.width = this.maxWidth - padding.width;
      const h3 = this.height = this.maxHeight - padding.height;
      this.xCenter = Math.floor(this.left + w2 / 2 + padding.left);
      this.yCenter = Math.floor(this.top + h3 / 2 + padding.top);
      this.drawingArea = Math.floor(Math.min(w2, h3) / 2);
    }
    determineDataLimits() {
      const { min, max } = this.getMinMax(false);
      this.min = isNumberFinite(min) && !isNaN(min) ? min : 0;
      this.max = isNumberFinite(max) && !isNaN(max) ? max : 0;
      this.handleTickRangeOptions();
    }
    computeTickLimit() {
      return Math.ceil(this.drawingArea / getTickBackdropHeight(this.options));
    }
    generateTickLabels(ticks) {
      LinearScaleBase.prototype.generateTickLabels.call(this, ticks);
      this._pointLabels = this.getLabels().map((value, index2) => {
        const label = callback(this.options.pointLabels.callback, [
          value,
          index2
        ], this);
        return label || label === 0 ? label : "";
      }).filter((v2, i2) => this.chart.getDataVisibility(i2));
    }
    fit() {
      const opts = this.options;
      if (opts.display && opts.pointLabels.display) {
        fitWithPointLabels(this);
      } else {
        this.setCenterPoint(0, 0, 0, 0);
      }
    }
    setCenterPoint(leftMovement, rightMovement, topMovement, bottomMovement) {
      this.xCenter += Math.floor((leftMovement - rightMovement) / 2);
      this.yCenter += Math.floor((topMovement - bottomMovement) / 2);
      this.drawingArea -= Math.min(this.drawingArea / 2, Math.max(leftMovement, rightMovement, topMovement, bottomMovement));
    }
    getIndexAngle(index2) {
      const angleMultiplier = TAU / (this._pointLabels.length || 1);
      const startAngle = this.options.startAngle || 0;
      return _normalizeAngle(index2 * angleMultiplier + toRadians(startAngle));
    }
    getDistanceFromCenterForValue(value) {
      if (isNullOrUndef(value)) {
        return NaN;
      }
      const scalingFactor = this.drawingArea / (this.max - this.min);
      if (this.options.reverse) {
        return (this.max - value) * scalingFactor;
      }
      return (value - this.min) * scalingFactor;
    }
    getValueForDistanceFromCenter(distance) {
      if (isNullOrUndef(distance)) {
        return NaN;
      }
      const scaledDistance = distance / (this.drawingArea / (this.max - this.min));
      return this.options.reverse ? this.max - scaledDistance : this.min + scaledDistance;
    }
    getPointLabelContext(index2) {
      const pointLabels = this._pointLabels || [];
      if (index2 >= 0 && index2 < pointLabels.length) {
        const pointLabel = pointLabels[index2];
        return createPointLabelContext(this.getContext(), index2, pointLabel);
      }
    }
    getPointPosition(index2, distanceFromCenter, additionalAngle = 0) {
      const angle = this.getIndexAngle(index2) - HALF_PI + additionalAngle;
      return {
        x: Math.cos(angle) * distanceFromCenter + this.xCenter,
        y: Math.sin(angle) * distanceFromCenter + this.yCenter,
        angle
      };
    }
    getPointPositionForValue(index2, value) {
      return this.getPointPosition(index2, this.getDistanceFromCenterForValue(value));
    }
    getBasePosition(index2) {
      return this.getPointPositionForValue(index2 || 0, this.getBaseValue());
    }
    getPointLabelPosition(index2) {
      const { left, top, right, bottom } = this._pointLabelItems[index2];
      return {
        left,
        top,
        right,
        bottom
      };
    }
    drawBackground() {
      const { backgroundColor, grid: { circular } } = this.options;
      if (backgroundColor) {
        const ctx = this.ctx;
        ctx.save();
        ctx.beginPath();
        pathRadiusLine(this, this.getDistanceFromCenterForValue(this._endValue), circular, this._pointLabels.length);
        ctx.closePath();
        ctx.fillStyle = backgroundColor;
        ctx.fill();
        ctx.restore();
      }
    }
    drawGrid() {
      const ctx = this.ctx;
      const opts = this.options;
      const { angleLines, grid, border } = opts;
      const labelCount = this._pointLabels.length;
      let i2, offset, position;
      if (opts.pointLabels.display) {
        drawPointLabels(this, labelCount);
      }
      if (grid.display) {
        this.ticks.forEach((tick, index2) => {
          if (index2 !== 0) {
            offset = this.getDistanceFromCenterForValue(tick.value);
            const context = this.getContext(index2);
            const optsAtIndex = grid.setContext(context);
            const optsAtIndexBorder = border.setContext(context);
            drawRadiusLine(this, optsAtIndex, offset, labelCount, optsAtIndexBorder);
          }
        });
      }
      if (angleLines.display) {
        ctx.save();
        for (i2 = labelCount - 1; i2 >= 0; i2--) {
          const optsAtIndex = angleLines.setContext(this.getPointLabelContext(i2));
          const { color: color2, lineWidth } = optsAtIndex;
          if (!lineWidth || !color2) {
            continue;
          }
          ctx.lineWidth = lineWidth;
          ctx.strokeStyle = color2;
          ctx.setLineDash(optsAtIndex.borderDash);
          ctx.lineDashOffset = optsAtIndex.borderDashOffset;
          offset = this.getDistanceFromCenterForValue(opts.ticks.reverse ? this.min : this.max);
          position = this.getPointPosition(i2, offset);
          ctx.beginPath();
          ctx.moveTo(this.xCenter, this.yCenter);
          ctx.lineTo(position.x, position.y);
          ctx.stroke();
        }
        ctx.restore();
      }
    }
    drawBorder() {
    }
    drawLabels() {
      const ctx = this.ctx;
      const opts = this.options;
      const tickOpts = opts.ticks;
      if (!tickOpts.display) {
        return;
      }
      const startAngle = this.getIndexAngle(0);
      let offset, width;
      ctx.save();
      ctx.translate(this.xCenter, this.yCenter);
      ctx.rotate(startAngle);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      this.ticks.forEach((tick, index2) => {
        if (index2 === 0 && !opts.reverse) {
          return;
        }
        const optsAtIndex = tickOpts.setContext(this.getContext(index2));
        const tickFont = toFont(optsAtIndex.font);
        offset = this.getDistanceFromCenterForValue(this.ticks[index2].value);
        if (optsAtIndex.showLabelBackdrop) {
          ctx.font = tickFont.string;
          width = ctx.measureText(tick.label).width;
          ctx.fillStyle = optsAtIndex.backdropColor;
          const padding = toPadding(optsAtIndex.backdropPadding);
          ctx.fillRect(-width / 2 - padding.left, -offset - tickFont.size / 2 - padding.top, width + padding.width, tickFont.size + padding.height);
        }
        renderText(ctx, tick.label, 0, -offset, tickFont, {
          color: optsAtIndex.color,
          strokeColor: optsAtIndex.textStrokeColor,
          strokeWidth: optsAtIndex.textStrokeWidth
        });
      });
      ctx.restore();
    }
    drawTitle() {
    }
  };
  var INTERVALS = {
    millisecond: {
      common: true,
      size: 1,
      steps: 1e3
    },
    second: {
      common: true,
      size: 1e3,
      steps: 60
    },
    minute: {
      common: true,
      size: 6e4,
      steps: 60
    },
    hour: {
      common: true,
      size: 36e5,
      steps: 24
    },
    day: {
      common: true,
      size: 864e5,
      steps: 30
    },
    week: {
      common: false,
      size: 6048e5,
      steps: 4
    },
    month: {
      common: true,
      size: 2628e6,
      steps: 12
    },
    quarter: {
      common: false,
      size: 7884e6,
      steps: 4
    },
    year: {
      common: true,
      size: 3154e7
    }
  };
  var UNITS = /* @__PURE__ */ Object.keys(INTERVALS);
  function sorter(a2, b2) {
    return a2 - b2;
  }
  function parse(scale, input) {
    if (isNullOrUndef(input)) {
      return null;
    }
    const adapter = scale._adapter;
    const { parser, round: round2, isoWeekday } = scale._parseOpts;
    let value = input;
    if (typeof parser === "function") {
      value = parser(value);
    }
    if (!isNumberFinite(value)) {
      value = typeof parser === "string" ? adapter.parse(value, parser) : adapter.parse(value);
    }
    if (value === null) {
      return null;
    }
    if (round2) {
      value = round2 === "week" && (isNumber(isoWeekday) || isoWeekday === true) ? adapter.startOf(value, "isoWeek", isoWeekday) : adapter.startOf(value, round2);
    }
    return +value;
  }
  function determineUnitForAutoTicks(minUnit, min, max, capacity) {
    const ilen = UNITS.length;
    for (let i2 = UNITS.indexOf(minUnit); i2 < ilen - 1; ++i2) {
      const interval = INTERVALS[UNITS[i2]];
      const factor = interval.steps ? interval.steps : Number.MAX_SAFE_INTEGER;
      if (interval.common && Math.ceil((max - min) / (factor * interval.size)) <= capacity) {
        return UNITS[i2];
      }
    }
    return UNITS[ilen - 1];
  }
  function determineUnitForFormatting(scale, numTicks, minUnit, min, max) {
    for (let i2 = UNITS.length - 1; i2 >= UNITS.indexOf(minUnit); i2--) {
      const unit = UNITS[i2];
      if (INTERVALS[unit].common && scale._adapter.diff(max, min, unit) >= numTicks - 1) {
        return unit;
      }
    }
    return UNITS[minUnit ? UNITS.indexOf(minUnit) : 0];
  }
  function determineMajorUnit(unit) {
    for (let i2 = UNITS.indexOf(unit) + 1, ilen = UNITS.length; i2 < ilen; ++i2) {
      if (INTERVALS[UNITS[i2]].common) {
        return UNITS[i2];
      }
    }
  }
  function addTick(ticks, time, timestamps) {
    if (!timestamps) {
      ticks[time] = true;
    } else if (timestamps.length) {
      const { lo, hi } = _lookup(timestamps, time);
      const timestamp = timestamps[lo] >= time ? timestamps[lo] : timestamps[hi];
      ticks[timestamp] = true;
    }
  }
  function setMajorTicks(scale, ticks, map3, majorUnit) {
    const adapter = scale._adapter;
    const first = +adapter.startOf(ticks[0].value, majorUnit);
    const last = ticks[ticks.length - 1].value;
    let major, index2;
    for (major = first; major <= last; major = +adapter.add(major, 1, majorUnit)) {
      index2 = map3[major];
      if (index2 >= 0) {
        ticks[index2].major = true;
      }
    }
    return ticks;
  }
  function ticksFromTimestamps(scale, values, majorUnit) {
    const ticks = [];
    const map3 = {};
    const ilen = values.length;
    let i2, value;
    for (i2 = 0; i2 < ilen; ++i2) {
      value = values[i2];
      map3[value] = i2;
      ticks.push({
        value,
        major: false
      });
    }
    return ilen === 0 || !majorUnit ? ticks : setMajorTicks(scale, ticks, map3, majorUnit);
  }
  var TimeScale = class extends Scale {
    static id = "time";
    static defaults = {
      bounds: "data",
      adapters: {},
      time: {
        parser: false,
        unit: false,
        round: false,
        isoWeekday: false,
        minUnit: "millisecond",
        displayFormats: {}
      },
      ticks: {
        source: "auto",
        callback: false,
        major: {
          enabled: false
        }
      }
    };
    constructor(props) {
      super(props);
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
      this._unit = "day";
      this._majorUnit = void 0;
      this._offsets = {};
      this._normalized = false;
      this._parseOpts = void 0;
    }
    init(scaleOpts, opts = {}) {
      const time = scaleOpts.time || (scaleOpts.time = {});
      const adapter = this._adapter = new adapters._date(scaleOpts.adapters.date);
      adapter.init(opts);
      mergeIf(time.displayFormats, adapter.formats());
      this._parseOpts = {
        parser: time.parser,
        round: time.round,
        isoWeekday: time.isoWeekday
      };
      super.init(scaleOpts);
      this._normalized = opts.normalized;
    }
    parse(raw, index2) {
      if (raw === void 0) {
        return null;
      }
      return parse(this, raw);
    }
    beforeLayout() {
      super.beforeLayout();
      this._cache = {
        data: [],
        labels: [],
        all: []
      };
    }
    determineDataLimits() {
      const options = this.options;
      const adapter = this._adapter;
      const unit = options.time.unit || "day";
      let { min, max, minDefined, maxDefined } = this.getUserBounds();
      function _applyBounds(bounds) {
        if (!minDefined && !isNaN(bounds.min)) {
          min = Math.min(min, bounds.min);
        }
        if (!maxDefined && !isNaN(bounds.max)) {
          max = Math.max(max, bounds.max);
        }
      }
      if (!minDefined || !maxDefined) {
        _applyBounds(this._getLabelBounds());
        if (options.bounds !== "ticks" || options.ticks.source !== "labels") {
          _applyBounds(this.getMinMax(false));
        }
      }
      min = isNumberFinite(min) && !isNaN(min) ? min : +adapter.startOf(Date.now(), unit);
      max = isNumberFinite(max) && !isNaN(max) ? max : +adapter.endOf(Date.now(), unit) + 1;
      this.min = Math.min(min, max - 1);
      this.max = Math.max(min + 1, max);
    }
    _getLabelBounds() {
      const arr = this.getLabelTimestamps();
      let min = Number.POSITIVE_INFINITY;
      let max = Number.NEGATIVE_INFINITY;
      if (arr.length) {
        min = arr[0];
        max = arr[arr.length - 1];
      }
      return {
        min,
        max
      };
    }
    buildTicks() {
      const options = this.options;
      const timeOpts = options.time;
      const tickOpts = options.ticks;
      const timestamps = tickOpts.source === "labels" ? this.getLabelTimestamps() : this._generate();
      if (options.bounds === "ticks" && timestamps.length) {
        this.min = this._userMin || timestamps[0];
        this.max = this._userMax || timestamps[timestamps.length - 1];
      }
      const min = this.min;
      const max = this.max;
      const ticks = _filterBetween(timestamps, min, max);
      this._unit = timeOpts.unit || (tickOpts.autoSkip ? determineUnitForAutoTicks(timeOpts.minUnit, this.min, this.max, this._getLabelCapacity(min)) : determineUnitForFormatting(this, ticks.length, timeOpts.minUnit, this.min, this.max));
      this._majorUnit = !tickOpts.major.enabled || this._unit === "year" ? void 0 : determineMajorUnit(this._unit);
      this.initOffsets(timestamps);
      if (options.reverse) {
        ticks.reverse();
      }
      return ticksFromTimestamps(this, ticks, this._majorUnit);
    }
    afterAutoSkip() {
      if (this.options.offsetAfterAutoskip) {
        this.initOffsets(this.ticks.map((tick) => +tick.value));
      }
    }
    initOffsets(timestamps = []) {
      let start = 0;
      let end = 0;
      let first, last;
      if (this.options.offset && timestamps.length) {
        first = this.getDecimalForValue(timestamps[0]);
        if (timestamps.length === 1) {
          start = 1 - first;
        } else {
          start = (this.getDecimalForValue(timestamps[1]) - first) / 2;
        }
        last = this.getDecimalForValue(timestamps[timestamps.length - 1]);
        if (timestamps.length === 1) {
          end = last;
        } else {
          end = (last - this.getDecimalForValue(timestamps[timestamps.length - 2])) / 2;
        }
      }
      const limit = timestamps.length < 3 ? 0.5 : 0.25;
      start = _limitValue(start, 0, limit);
      end = _limitValue(end, 0, limit);
      this._offsets = {
        start,
        end,
        factor: 1 / (start + 1 + end)
      };
    }
    _generate() {
      const adapter = this._adapter;
      const min = this.min;
      const max = this.max;
      const options = this.options;
      const timeOpts = options.time;
      const minor = timeOpts.unit || determineUnitForAutoTicks(timeOpts.minUnit, min, max, this._getLabelCapacity(min));
      const stepSize = valueOrDefault(options.ticks.stepSize, 1);
      const weekday = minor === "week" ? timeOpts.isoWeekday : false;
      const hasWeekday = isNumber(weekday) || weekday === true;
      const ticks = {};
      let first = min;
      let time, count;
      if (hasWeekday) {
        first = +adapter.startOf(first, "isoWeek", weekday);
      }
      first = +adapter.startOf(first, hasWeekday ? "day" : minor);
      if (adapter.diff(max, min, minor) > 1e5 * stepSize) {
        throw new Error(min + " and " + max + " are too far apart with stepSize of " + stepSize + " " + minor);
      }
      const timestamps = options.ticks.source === "data" && this.getDataTimestamps();
      for (time = first, count = 0; time < max; time = +adapter.add(time, stepSize, minor), count++) {
        addTick(ticks, time, timestamps);
      }
      if (time === max || options.bounds === "ticks" || count === 1) {
        addTick(ticks, time, timestamps);
      }
      return Object.keys(ticks).sort(sorter).map((x2) => +x2);
    }
    getLabelForValue(value) {
      const adapter = this._adapter;
      const timeOpts = this.options.time;
      if (timeOpts.tooltipFormat) {
        return adapter.format(value, timeOpts.tooltipFormat);
      }
      return adapter.format(value, timeOpts.displayFormats.datetime);
    }
    format(value, format) {
      const options = this.options;
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const fmt = format || formats[unit];
      return this._adapter.format(value, fmt);
    }
    _tickFormatFunction(time, index2, ticks, format) {
      const options = this.options;
      const formatter = options.ticks.callback;
      if (formatter) {
        return callback(formatter, [
          time,
          index2,
          ticks
        ], this);
      }
      const formats = options.time.displayFormats;
      const unit = this._unit;
      const majorUnit = this._majorUnit;
      const minorFormat = unit && formats[unit];
      const majorFormat = majorUnit && formats[majorUnit];
      const tick = ticks[index2];
      const major = majorUnit && majorFormat && tick && tick.major;
      return this._adapter.format(time, format || (major ? majorFormat : minorFormat));
    }
    generateTickLabels(ticks) {
      let i2, ilen, tick;
      for (i2 = 0, ilen = ticks.length; i2 < ilen; ++i2) {
        tick = ticks[i2];
        tick.label = this._tickFormatFunction(tick.value, i2, ticks);
      }
    }
    getDecimalForValue(value) {
      return value === null ? NaN : (value - this.min) / (this.max - this.min);
    }
    getPixelForValue(value) {
      const offsets = this._offsets;
      const pos = this.getDecimalForValue(value);
      return this.getPixelForDecimal((offsets.start + pos) * offsets.factor);
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const pos = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return this.min + pos * (this.max - this.min);
    }
    _getLabelSize(label) {
      const ticksOpts = this.options.ticks;
      const tickLabelWidth = this.ctx.measureText(label).width;
      const angle = toRadians(this.isHorizontal() ? ticksOpts.maxRotation : ticksOpts.minRotation);
      const cosRotation = Math.cos(angle);
      const sinRotation = Math.sin(angle);
      const tickFontSize = this._resolveTickFontOptions(0).size;
      return {
        w: tickLabelWidth * cosRotation + tickFontSize * sinRotation,
        h: tickLabelWidth * sinRotation + tickFontSize * cosRotation
      };
    }
    _getLabelCapacity(exampleTime) {
      const timeOpts = this.options.time;
      const displayFormats = timeOpts.displayFormats;
      const format = displayFormats[timeOpts.unit] || displayFormats.millisecond;
      const exampleLabel = this._tickFormatFunction(exampleTime, 0, ticksFromTimestamps(this, [
        exampleTime
      ], this._majorUnit), format);
      const size = this._getLabelSize(exampleLabel);
      const capacity = Math.floor(this.isHorizontal() ? this.width / size.w : this.height / size.h) - 1;
      return capacity > 0 ? capacity : 1;
    }
    getDataTimestamps() {
      let timestamps = this._cache.data || [];
      let i2, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const metas = this.getMatchingVisibleMetas();
      if (this._normalized && metas.length) {
        return this._cache.data = metas[0].controller.getAllParsedValues(this);
      }
      for (i2 = 0, ilen = metas.length; i2 < ilen; ++i2) {
        timestamps = timestamps.concat(metas[i2].controller.getAllParsedValues(this));
      }
      return this._cache.data = this.normalize(timestamps);
    }
    getLabelTimestamps() {
      const timestamps = this._cache.labels || [];
      let i2, ilen;
      if (timestamps.length) {
        return timestamps;
      }
      const labels = this.getLabels();
      for (i2 = 0, ilen = labels.length; i2 < ilen; ++i2) {
        timestamps.push(parse(this, labels[i2]));
      }
      return this._cache.labels = this._normalized ? timestamps : this.normalize(timestamps);
    }
    normalize(values) {
      return _arrayUnique(values.sort(sorter));
    }
  };
  function interpolate2(table, val, reverse) {
    let lo = 0;
    let hi = table.length - 1;
    let prevSource, nextSource, prevTarget, nextTarget;
    if (reverse) {
      if (val >= table[lo].pos && val <= table[hi].pos) {
        ({ lo, hi } = _lookupByKey(table, "pos", val));
      }
      ({ pos: prevSource, time: prevTarget } = table[lo]);
      ({ pos: nextSource, time: nextTarget } = table[hi]);
    } else {
      if (val >= table[lo].time && val <= table[hi].time) {
        ({ lo, hi } = _lookupByKey(table, "time", val));
      }
      ({ time: prevSource, pos: prevTarget } = table[lo]);
      ({ time: nextSource, pos: nextTarget } = table[hi]);
    }
    const span = nextSource - prevSource;
    return span ? prevTarget + (nextTarget - prevTarget) * (val - prevSource) / span : prevTarget;
  }
  var TimeSeriesScale = class extends TimeScale {
    static id = "timeseries";
    static defaults = TimeScale.defaults;
    constructor(props) {
      super(props);
      this._table = [];
      this._minPos = void 0;
      this._tableRange = void 0;
    }
    initOffsets() {
      const timestamps = this._getTimestampsForTable();
      const table = this._table = this.buildLookupTable(timestamps);
      this._minPos = interpolate2(table, this.min);
      this._tableRange = interpolate2(table, this.max) - this._minPos;
      super.initOffsets(timestamps);
    }
    buildLookupTable(timestamps) {
      const { min, max } = this;
      const items = [];
      const table = [];
      let i2, ilen, prev, curr, next;
      for (i2 = 0, ilen = timestamps.length; i2 < ilen; ++i2) {
        curr = timestamps[i2];
        if (curr >= min && curr <= max) {
          items.push(curr);
        }
      }
      if (items.length < 2) {
        return [
          {
            time: min,
            pos: 0
          },
          {
            time: max,
            pos: 1
          }
        ];
      }
      for (i2 = 0, ilen = items.length; i2 < ilen; ++i2) {
        next = items[i2 + 1];
        prev = items[i2 - 1];
        curr = items[i2];
        if (Math.round((next + prev) / 2) !== curr) {
          table.push({
            time: curr,
            pos: i2 / (ilen - 1)
          });
        }
      }
      return table;
    }
    _generate() {
      const min = this.min;
      const max = this.max;
      let timestamps = super.getDataTimestamps();
      if (!timestamps.includes(min) || !timestamps.length) {
        timestamps.splice(0, 0, min);
      }
      if (!timestamps.includes(max) || timestamps.length === 1) {
        timestamps.push(max);
      }
      return timestamps.sort((a2, b2) => a2 - b2);
    }
    _getTimestampsForTable() {
      let timestamps = this._cache.all || [];
      if (timestamps.length) {
        return timestamps;
      }
      const data = this.getDataTimestamps();
      const label = this.getLabelTimestamps();
      if (data.length && label.length) {
        timestamps = this.normalize(data.concat(label));
      } else {
        timestamps = data.length ? data : label;
      }
      timestamps = this._cache.all = timestamps;
      return timestamps;
    }
    getDecimalForValue(value) {
      return (interpolate2(this._table, value) - this._minPos) / this._tableRange;
    }
    getValueForPixel(pixel) {
      const offsets = this._offsets;
      const decimal = this.getDecimalForPixel(pixel) / offsets.factor - offsets.end;
      return interpolate2(this._table, decimal * this._tableRange + this._minPos, true);
    }
  };
  var scales = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    CategoryScale,
    LinearScale,
    LogarithmicScale,
    RadialLinearScale,
    TimeScale,
    TimeSeriesScale
  });
  var registerables = [
    controllers,
    elements,
    plugins,
    scales
  ];

  // node_modules/chart.js/auto/auto.js
  Chart.register(...registerables);
  var auto_default = Chart;

  // src/data.js
  var blockadeData1 = [
    { year: "Before 2000", count: 500 },
    { year: "2004", count: 43.4 },
    { year: "2005", count: 31.5 },
    { year: "2006", count: 13.5 },
    { year: "2007 (1st Half)", count: 12.6 },
    { year: "2007 (2nd Half)", count: 1.9 },
    { year: "2008", count: 2.2 },
    { year: "2009", count: 2.4 },
    { year: "2010", count: 3.3 },
    { year: "2011", count: 4.4 },
    { year: "2012", count: 4.9 },
    { year: "2013", count: 5.8 },
    { year: "2014", count: 6 },
    { year: "2015", count: 15.3 },
    { year: "2016", count: 13.2 },
    { year: "2017", count: 6.9 },
    { year: "2018", count: 9.5 },
    { year: "2019", count: 16 },
    { year: "2020", count: 5 },
    { year: "2021", count: 7.5 },
    { year: "2022 (Jan-May)", count: 27.7 }
  ];
  var blockadeData2 = [
    { year: "Before 2000", count: null },
    { year: "2004", count: null },
    { year: "2005", count: null },
    { year: "2006", count: 25.8 },
    { year: "2007 (1st Half)", count: 15.7 },
    { year: "2007 (2nd Half)", count: 0.4 },
    { year: "2008", count: 1.8 },
    { year: "2009", count: 5.6 },
    { year: "2010", count: 13.9 },
    { year: "2011", count: 21.2 },
    { year: "2012", count: 35 },
    { year: "2013", count: 25.2 },
    { year: "2014", count: 8.1 },
    { year: "2015", count: 2.4 },
    { year: "2016", count: 3.5 },
    { year: "2017", count: 2.9 },
    { year: "2018", count: 8.2 },
    { year: "2019", count: 12.1 },
    { year: "2020", count: 4.3 },
    { year: "2021", count: 15.1 },
    { year: "2022 (Jan-May)", count: 19.1 }
  ];
  var unemploymentData1 = [
    { country: "Gaza Strip", count: 45.3 },
    { country: "South Africa", count: 29.8 },
    { country: "West Bank", count: 13.1 },
    { country: "Syria", count: 9.6 },
    { country: "Egypt", count: 7 },
    { country: "World", count: 5.8 },
    { country: "Israel", count: 3.5 }
  ];
  var unemploymentData2 = [
    { country: "Gaza Strip", count: 73.9 },
    { country: "South Africa", count: 51.5 },
    { country: "West Bank", count: 28.6 },
    { country: "Syria", count: 22.1 },
    { country: "Egypt", count: 17.1 },
    { country: "World", count: 15.6 },
    { country: "Israel", count: 6 }
  ];
  var fertilityData = [
    { age: "0 - 9", count: 557558 },
    { age: "10 - 19", count: 530135 },
    { age: "20 - 29", count: 391528 },
    { age: "30 - 39", count: 262589 },
    { age: "40 - 49", count: 161035 },
    { age: "50 - 59", count: 101326 },
    { age: "60+", count: 94218 }
  ];
  var deathData1 = [
    { age: "Children", count: 4100 },
    { age: "Adults", count: 5900 }
  ];
  var deathData2 = [
    { age: "Children", count: 560 },
    { age: "Adults", count: 9440 }
  ];

  // src/config.js
  var CHART_COLORS = {
    red: "rgb(255, 99, 132)",
    orange: "rgb(255, 159, 64)",
    yellow: "rgb(255, 205, 86)",
    green: "rgb(75, 192, 192)",
    blue: "rgb(54, 162, 235)",
    purple: "rgb(153, 102, 255)",
    grey: "rgb(201, 203, 207)"
  };
  var blockadeConfig = {
    type: "line",
    options: {
      animation: {
        delay: 500
      },
      interaction: {
        mode: "index",
        intersect: false
      },
      plugins: {
        title: {
          display: true,
          text: "Movement of People in Gaza Through Border Crossing"
        },
        subtitle: {
          display: true,
          position: "bottom",
          align: "end",
          text: "Data sources: UNOCHA"
        },
        tooltip: {
          enabled: true,
          titleMarginBottom: 10,
          bodySpacing: 10,
          footerMarginTop: 10,
          padding: 10,
          boxPadding: 5,
          callbacks: {
            label: (item) => {
              return "Monthly Averages : " + item.formattedValue + "k";
            },
            beforeFooter: (items) => {
              let content = "";
              items.forEach((item) => {
                if (item.label === "Before 2000") {
                  content = "Prior to the Second Intifada";
                }
                if (item.label === "2007 (2nd Half)") {
                  content = "Israel started blocking Gaza in June";
                }
                if (item.label === "2014") {
                  content = "Egypt closed Rafah crossing";
                }
              });
              return content;
            }
          }
        }
      },
      scales: {
        y: {
          display: true,
          type: "logarithmic",
          ticks: {
            callback: (value, index2) => {
              return value + "k";
            }
          }
        }
      }
    },
    data: {
      labels: blockadeData1.map((row) => row.year),
      datasets: [
        {
          label: "Exit of People Through Erez Crossing (Israel)",
          data: blockadeData1.map((row) => row.count)
        },
        {
          label: "Exits and Entries of People Through Rafah Crossing (Egypt)",
          data: blockadeData2.map((row) => row.count)
        }
      ]
    }
  };
  var unemploymentConfig = {
    type: "bar",
    options: {
      animation: {
        delay: 500
      },
      interaction: {
        mode: "nearest"
      },
      indexAxis: "y",
      plugins: {
        title: {
          display: true,
          text: "Unemployment Rate by Country (Region)"
        },
        subtitle: {
          display: true,
          position: "bottom",
          align: "end",
          text: "Data sources: World Bank, PCBS"
        },
        tooltip: {
          enabled: true,
          titleMarginBottom: 10,
          bodySpacing: 10,
          footerMarginTop: 10,
          padding: 10,
          boxPadding: 5,
          callbacks: {
            label: (item) => {
              return item.dataset.label + " : " + item.formattedValue + "%";
            }
          }
        }
      },
      scales: {
        x: {
          display: true,
          ticks: {
            callback: (value, index2) => {
              return value + "%";
            }
          }
        }
      }
    },
    data: {
      labels: unemploymentData1.map((row) => row.country),
      datasets: [
        {
          axis: "y",
          label: "Unemployment Rate",
          data: unemploymentData1.map((row) => row.count)
        },
        {
          axis: "y",
          label: "Youth Unemployment Rate",
          data: unemploymentData2.map((row) => row.count)
        }
      ]
    }
  };
  var fertilityConfig = {
    type: "pie",
    options: {
      animation: {
        delay: 500
      },
      interaction: {
        mode: "nearest"
      },
      plugins: {
        title: {
          display: true,
          text: "Population by Age in Gaza"
        },
        subtitle: {
          display: true,
          position: "bottom",
          align: "end",
          text: "Data sources: US Census Bureau"
        },
        tooltip: {
          enabled: true,
          titleMarginBottom: 10,
          bodySpacing: 10,
          footerMarginTop: 10,
          padding: 10,
          boxPadding: 5,
          callbacks: {
            label: (item) => {
              return `${item.formattedValue} (${(item.raw / 2098389 * 100).toFixed(2)}%)`;
            }
          }
        }
      }
    },
    data: {
      labels: fertilityData.map((row) => row.age),
      datasets: [
        {
          label: "Population by Age",
          data: fertilityData.map((row) => row.count),
          hoverOffset: 10
        }
      ]
    }
  };
  var deathConfig = {
    type: "doughnut",
    options: {
      animation: {
        delay: 500
      },
      interaction: {
        mode: "nearest"
      },
      plugins: {
        title: {
          display: true,
          text: "Civilian Death Toll in Wars (Gaza and Ukraine)"
        },
        subtitle: {
          display: true,
          position: "bottom",
          align: "end",
          text: "Data sources: Gaza Ministry of Health, UNHRMM"
        },
        tooltip: {
          enabled: true,
          titleMarginBottom: 10,
          bodySpacing: 10,
          footerMarginTop: 10,
          padding: 10,
          boxPadding: 5,
          callbacks: {
            title: (items) => {
              let title = [];
              items.forEach((item) => {
                title.push(`${item.label} ${item.dataset.label}`);
              });
              return title;
            },
            label: (item) => {
              return `${item.formattedValue} (${(item.raw / 1e4 * 100).toFixed(2)}%)`;
            }
          }
        }
      }
    },
    data: {
      labels: deathData1.map((row) => row.age),
      datasets: [
        {
          label: "Death Toll in Gaza (2022.11.6)",
          data: deathData1.map((row) => row.count),
          backgroundColor: [CHART_COLORS.red, CHART_COLORS.blue]
        },
        {
          label: "Death Toll in Ukraine (2022.11.21)",
          data: deathData2.map((row) => row.count),
          backgroundColor: [CHART_COLORS.red, CHART_COLORS.blue]
        }
      ]
    }
  };

  // src/index.js
  var reveal = new $();
  reveal.on("slidechanged", (event) => {
    if (event.indexh === 4 && !blockadeChart) {
      blockadeChart = new auto_default(
        document.getElementById("blockade"),
        blockadeConfig
      );
    }
    if (event.indexh === 5 && !unemploymentChart) {
      unemploymentChart = new auto_default(
        document.getElementById("unemployment"),
        unemploymentConfig
      );
    }
    if (event.indexh === 9 && !fertilityChart) {
      fertilityChart = new auto_default(
        document.getElementById("fertility"),
        fertilityConfig
      );
    }
    if (event.indexh === 11 && !deathChart) {
      deathChart = new auto_default(document.getElementById("death"), deathConfig);
    }
  });
  reveal.initialize({
    view: "scroll",
    scrollProgress: true,
    center: false,
    width: "100%",
    height: "100%"
  });
  var blockadeChart;
  var unemploymentChart;
  var fertilityChart;
  var deathChart;
})();
/*! Bundled license information:

reveal.js/dist/reveal.esm.js:
  (*!
  * reveal.js 5.0.0
  * https://revealjs.com
  * MIT licensed
  *
  * Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
  *)

@kurkle/color/dist/color.esm.js:
  (*!
   * @kurkle/color v0.3.2
   * https://github.com/kurkle/color#readme
   * (c) 2023 Jukka Kurkela
   * Released under the MIT License
   *)

chart.js/dist/chunks/helpers.segment.js:
  (*!
   * Chart.js v4.4.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   *)

chart.js/dist/chart.js:
  (*!
   * Chart.js v4.4.0
   * https://www.chartjs.org
   * (c) 2023 Chart.js Contributors
   * Released under the MIT License
   *)
*/
