import"./main.45e21622.js";import"./vendor.7544645b.js";const n=document.querySelector("head > link[rel='icon']");function t(e){const i=`
    <svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22>
      <text y=%22.9em%22 font-size=%2290%22>
        ${e}
      </text>
    </svg>
  `.trim();n.setAttribute("href",`data:image/svg+xml,${i}`)}function o(){document.visibilityState==="hidden"?t("\u{1F64B}\u200D\u2642\uFE0F"):t("\u{1F44B}")}document.addEventListener("visibilitychange",o,!1);
