"use client";

import { useEffect } from "react";

export default function Hotjar() {
  useEffect(() => {
    (function (h: any, o: Document, t: string, j: string) {
      h.hj =
        h.hj ||
        function () {
          (h.hj.q = h.hj.q || []).push(arguments);
        };
      h._hjSettings = { hjid: 6417147, hjsv: 6 };

      const headEl = o.getElementsByTagName("head")[0];
      if (!headEl) return; // safety check in case <head> is not found

      const scriptEl = o.createElement("script");
      scriptEl.async = true;
      scriptEl.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;

      headEl.appendChild(scriptEl);
    })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
  }, []);

  return null;
}
