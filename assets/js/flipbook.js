/**
 * Flipbook – PDF.js + StPageFlip
 * Renders a PDF as a page-flip book with no whitespace.
 */

(function () {
  "use strict";

  const PDF_URL = "assets/catalogue.pdf";
  const CONTAINER_ID = "flipbook-container";
  const SCALE = 1.8; // Render scale – higher = clearer image

  let pageFlip = null;
  let renderedPages = [];

  async function loadAndRender() {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    // Show loading state
    container.innerHTML =
      '<div class="fb-loading"><div class="fb-spinner"></div><p>Đang tải catalogue…</p></div>';

    try {
      pdfjsLib.GlobalWorkerOptions.workerSrc =
        "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js";

      const pdf = await pdfjsLib.getDocument(PDF_URL).promise;
      const totalPages = pdf.numPages;

      // Get page dimensions from first page
      const firstPage = await pdf.getPage(1);
      const viewport = firstPage.getViewport({ scale: SCALE });
      const pageW = Math.floor(viewport.width);
      const pageH = Math.floor(viewport.height);

      // Render all pages to canvas then get dataURL
      renderedPages = [];
      for (let i = 1; i <= totalPages; i++) {
        const page = await pdf.getPage(i);
        const vp = page.getViewport({ scale: SCALE });
        const canvas = document.createElement("canvas");
        canvas.width = Math.floor(vp.width);
        canvas.height = Math.floor(vp.height);
        const ctx = canvas.getContext("2d");
        await page.render({ canvasContext: ctx, viewport: vp }).promise;
        renderedPages.push(canvas.toDataURL("image/jpeg", 0.92));
      }

      // Clear loading, create flip stage
      container.innerHTML = "";
      container.style.userSelect = "none";

      // Determine display size — fit within container width
      const maxW = Math.min(container.clientWidth, 1100);
      const bookW = Math.floor(maxW * 0.96);
      const bookH = Math.floor(bookW * (pageH / pageW) * 0.5); // double-page spread

      container.style.height = bookH + "px";

      // Init PageFlip
      pageFlip = new St.PageFlip(container, {
        width: Math.floor(bookW / 2),
        height: bookH,
        size: "fixed",
        minWidth: 100,
        minHeight: 100,
        drawShadow: true,
        flippingTime: 700,
        usePortrait: false,
        startZIndex: 0,
        autoSize: false,
        maxShadowOpacity: 0.5,
        showCover: true,
        mobileScrollSupport: false,
        swipeDistance: 30,
        clickEventForward: true,
        useMouseEvents: true,
        renderOnlyPageLengthChange: false,
        startPage: 0,
        showPageCorners: true,
      });

      // Load images into PageFlip
      pageFlip.loadFromImages(renderedPages);

      // Build controls
      buildControls(container, totalPages);
    } catch (err) {
      container.innerHTML =
        '<div class="fb-error"><p>⚠️ Không thể tải catalogue. <a href="assets/catalogue.pdf" target="_blank">Tải về xem ↗</a></p></div>';
      console.error("Flipbook error:", err);
    }
  }

  function buildControls(container, totalPages) {
    const ctrl = document.createElement("div");
    ctrl.className = "fb-controls";
    ctrl.innerHTML = `
      <button class="fb-btn" id="fb-prev" title="Trang trước">&#8249;</button>
      <span class="fb-page-info" id="fb-info">1 / ${totalPages}</span>
      <button class="fb-btn" id="fb-next" title="Trang sau">&#8250;</button>
      <button class="fb-btn fb-full" id="fb-fullscreen" title="Toàn màn hình">⛶</button>
    `;
    container.parentElement.appendChild(ctrl);

    document.getElementById("fb-prev").addEventListener("click", () => {
      pageFlip.flipPrev("top");
    });
    document.getElementById("fb-next").addEventListener("click", () => {
      pageFlip.flipNext("top");
    });
    document.getElementById("fb-fullscreen").addEventListener("click", () => {
      const wrap = document.getElementById("flipbook-wrap");
      if (!document.fullscreenElement) {
        wrap.requestFullscreen && wrap.requestFullscreen();
      } else {
        document.exitFullscreen && document.exitFullscreen();
      }
    });

    pageFlip.on("flip", (e) => {
      const info = document.getElementById("fb-info");
      if (info) info.textContent = e.data + 1 + " / " + totalPages;
    });
  }

  // Run after DOM + libraries loaded
  function init() {
    if (typeof pdfjsLib === "undefined" || typeof St === "undefined") {
      setTimeout(init, 100);
      return;
    }
    loadAndRender();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
