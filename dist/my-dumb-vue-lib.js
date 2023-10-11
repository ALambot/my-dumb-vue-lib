import { ref as s, openBlock as t, createElementBlock as u, toDisplayString as o, computed as _, normalizeClass as p, Fragment as m, renderList as f, createBlock as d } from "vue";
const x = {
  __name: "OneDumbButton",
  props: {
    prefix: {
      required: !0
    }
  },
  setup(n) {
    const e = s(0);
    function r() {
      e.value += 1;
    }
    return (i, c) => (t(), u("button", {
      class: "button m-1 is-primary is-rounded",
      onClick: r
    }, o(n.prefix) + " (" + o(e.value) + " clicks) ", 1));
  }
};
const B = {
  __name: "ThreeDumbButtons",
  props: {
    direction: {
      default: "row"
    }
  },
  setup(n) {
    const e = n, r = _(() => `is-flex-direction-${e.direction}`), i = s([
      { prefix: "Hi, I'm button 1" },
      { prefix: "I'm right in the middle" },
      { prefix: "I don't care !" }
    ]);
    return (c, b) => (t(), u("div", {
      class: p(["m-1", "is-flex", "is-justify-content-center", r.value])
    }, [
      (t(!0), u(m, null, f(i.value, (l, a) => (t(), d(x, {
        key: a,
        prefix: l.prefix
      }, null, 8, ["prefix"]))), 128))
    ], 2));
  }
};
export {
  x as OneDumbButton,
  B as ThreeDumbButtons
};
