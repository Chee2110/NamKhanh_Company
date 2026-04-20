document.addEventListener("DOMContentLoaded", () => {
  // Read the ID from the URL parameters
  const params = new URLSearchParams(window.location.search);
  const idParam = params.get("id");

  const notFoundState = document.getElementById("not-found-state");
  const detailContainer = document.getElementById("product-detail-container");

  if (!idParam || isNaN(idParam)) {
    notFoundState.style.display = "block";
    return;
  }

  // Find the product from the global PRODUCTS array
  const id = parseInt(idParam);
  const product =
    typeof PRODUCTS !== "undefined" ? PRODUCTS.find((p) => p.id === id) : null;

  if (!product) {
    notFoundState.style.display = "block";
    return;
  }

  // Product found. Fill in the DOM elements.
  document.title = `Nam Khánh | ${product.name}`;
  document.getElementById("breadcrumb-name").textContent = product.name;

  document.getElementById("detail-image").src = product.image;
  document.getElementById("detail-image").alt = product.name;

  document.getElementById("detail-category").textContent = product.category;
  document.getElementById("detail-name").textContent = product.name;
  document.getElementById("detail-sku").textContent = product.sku;

  document.getElementById("detail-sku").textContent = product.sku;

  document.getElementById("detail-desc").textContent =
    product.description || product.name;

  // Gallery support
  const galleryThumbs = document.getElementById("detail-thumbs");
  if (galleryThumbs && product.images && product.images.length > 0) {
    galleryThumbs.innerHTML = product.images
      .map(
        (img, idx) => `
            <button class="detail-thumb ${idx === 0 ? "is-active" : ""}" data-index="${idx}">
                <img src="${img}" alt="${product.name} ${idx + 1}">
            </button>
        `,
      )
      .join("");

    galleryThumbs.querySelectorAll(".detail-thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        galleryThumbs
          .querySelectorAll(".detail-thumb")
          .forEach((t) => t.classList.remove("is-active"));
        thumb.classList.add("is-active");
        const idx = thumb.dataset.index;
        document.getElementById("detail-image").src = product.images[idx];
      });
    });
  } else if (galleryThumbs) {
    galleryThumbs.innerHTML = ""; // Clear if no gallery
  }


  const mainImage = document.getElementById("detail-image");
  const breadcrumbName = document.getElementById("breadcrumb-name");
  const categoryNode = document.getElementById("detail-category");
  const nameNode = document.getElementById("detail-name");
  const skuNode = document.getElementById("detail-sku");
  const priceNode = document.getElementById("detail-price");
  const descNode = document.getElementById("detail-desc");
  const descSection = document.querySelector(".product-description");
  const formatPrice = (value) =>
    value > 0 ? Number(value).toLocaleString("vi-VN") + " ₫" : "Liên hệ";
  const escapeHtml = (value) =>
    String(value || "").replace(
      /[&<>"]/g,
      (s) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[s],
    );
  const removeDynamicBlocks = () =>
    document
      .querySelectorAll(".product-options-block")
      .forEach((node) => node.remove());
  function renderGallery(images, activeImage) {
    const uniqueImages = [...new Set((images || []).filter(Boolean))];
    const gallery = uniqueImages.length
      ? uniqueImages
      : [product.image].filter(Boolean);
    const active =
      activeImage && gallery.includes(activeImage)
        ? activeImage
        : gallery[0] || product.image;

    if (mainImage) {
      mainImage.src = active || "";
      mainImage.alt = product.name;
      mainImage.onerror = () => {
        mainImage.src = product.image;
      };
    }

    if (!galleryThumbs) return;
    galleryThumbs.innerHTML = gallery
      .map(
        (img, idx) => `
        <button class="detail-thumb ${img === active ? "is-active" : ""}" data-index="${idx}" data-image="${escapeHtml(img)}">
            <img src="${img}" alt="${escapeHtml(product.name)} ${idx + 1}">
        </button>
    `,
      )
      .join("");

    galleryThumbs.querySelectorAll(".detail-thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        galleryThumbs
          .querySelectorAll(".detail-thumb")
          .forEach((t) => t.classList.remove("is-active"));
        thumb.classList.add("is-active");
        const img = thumb.dataset.image;
        if (mainImage && img) {
          mainImage.src = img;
          mainImage.onerror = () => {
            mainImage.src = product.image;
          };
        }
      });
    });
  }
  function createOptionsBlock(title, items, activeIndex, onSelect) {
    const wrap = document.createElement("div");
    wrap.className = "product-options-block";
    wrap.style.marginBottom = "24px";
    wrap.innerHTML = `
        <h4 style="margin-bottom: 12px; font-size: 0.95rem;">${escapeHtml(title)}:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 10px;">
            ${items.map((item, idx) => `<button class="variant-tag ${idx === activeIndex ? "is-active" : ""}" type="button" data-index="${idx}">${escapeHtml(item)}</button>`).join("")}
        </div>
    `;
    descSection.parentNode.insertBefore(wrap, descSection);
    wrap.querySelectorAll(".variant-tag").forEach((btn) => {
      btn.addEventListener("click", () => {
        wrap
          .querySelectorAll(".variant-tag")
          .forEach((tag) => tag.classList.remove("is-active"));
        btn.classList.add("is-active");
        onSelect(Number(btn.dataset.index));
      });
    });
    return wrap;
  }
  function setPrice(value) {
    priceNode.textContent = formatPrice(value || product.price || 0);
  }

  function setDescription(text) {
    descNode.textContent =
      text || product.fullDescription || product.description || product.name;
    descNode.style.whiteSpace = "pre-line";
  }

  document.title = `Nam Khánh | ${product.name}`;
  document.title = `Nam Khánh | ${product.name}`;
  breadcrumbName.textContent = product.name;
  categoryNode.textContent = product.category;
  nameNode.textContent = product.name;
  skuNode.textContent = product.sku;
  setDescription(
    product.fullDescription || product.description || product.name,
  );
  setPrice(product.price);

  removeDynamicBlocks();
  if (Array.isArray(product.typeOptions) && product.typeOptions.length) {
    let currentTypeIndex = 0;
    let currentSizeIndex = 0;

    const updateType = (typeIndex, resetSize = true) => {
      currentTypeIndex = typeIndex;
      if (resetSize) currentSizeIndex = 0;
      const selectedType = product.typeOptions[currentTypeIndex];
      nameNode.textContent = selectedType.name || product.name;
      breadcrumbName.textContent = selectedType.name || product.name;
      skuNode.textContent = selectedType.sku || product.sku;
      setDescription(
        selectedType.description ||
          product.fullDescription ||
          product.description ||
          product.name,
      );
      const galleryImages = [selectedType.image];
      if (product.guideImage) {
        galleryImages.push(product.guideImage);
      } else if (product.category === "ĐỒ TRANG TRÍ") {
        galleryImages.push("assets/images/Hướng dẫn lắp.webp");
      }
      renderGallery(galleryImages, selectedType.image);
      renderSizeBlock();
      setPrice(
        (selectedType.prices || [product.price])[currentSizeIndex] ||
          product.price,
      );
    };

    const renderSizeBlock = () => {
      document
        .querySelectorAll(".product-options-block.size-block")
        .forEach((node) => node.remove());
      const selectedType = product.typeOptions[currentTypeIndex];
      const sizes = selectedType.sizes || [];
      if (!sizes.length) return;
      const sizeBlock = createOptionsBlock(
        "Lựa chọn chi tiết",
        sizes,
        currentSizeIndex,
        (sizeIndex) => {
          currentSizeIndex = sizeIndex;
          setPrice(
            (selectedType.prices || [product.price])[currentSizeIndex] ||
              product.price,
          );
          if (Array.isArray(selectedType.skus) && selectedType.skus[sizeIndex]) {
            skuNode.textContent = selectedType.skus[sizeIndex];
          }
        },
      );
      sizeBlock.classList.add("size-block");
    };

    const typeBlock = createOptionsBlock(
      "Loại sản phẩm",
      product.typeOptions.map((item) => item.label),
      0,
      (typeIndex) => updateType(typeIndex),
    );
    typeBlock.classList.add("type-block");
    updateType(0);
  } else {
    renderGallery(
      product.images && product.images.length
        ? product.images
        : [product.image],
      product.image,
    );

    const variantsList =
      Array.isArray(product.variants) && product.variants.length
        ? product.variants
        : [];

    const shouldKeepTitle = product.category === "ĐỒ TRANG TRÍ";
    if (variantsList.length > 1) {
      createOptionsBlock("Lựa chọn phân loại", variantsList, 0, (idx) => {
        if (!shouldKeepTitle) nameNode.textContent = variantsList[idx];
        const nextPrice = Array.isArray(product.variantPrices)
          ? product.variantPrices[idx]
          : product.price;
        setPrice(nextPrice || product.price);

        let nextImage = product.image;
        if (
          product.id === 50 &&
          Array.isArray(product.images) &&
          product.images[idx]
        ) {
          nextImage = product.images[idx];
        }
        if (mainImage && nextImage) {
          mainImage.src = nextImage;
          mainImage.onerror = () => {
            mainImage.src = product.image;
          };
          if (galleryThumbs) {
            galleryThumbs
              .querySelectorAll(".detail-thumb")
              .forEach((t) => t.classList.remove("is-active"));
            const activeThumb = galleryThumbs.querySelector(
              `.detail-thumb[data-image="${CSS.escape(nextImage)}"]`,
            );
            if (activeThumb) activeThumb.classList.add("is-active");
          }
        }
      });
    }

    if (!shouldKeepTitle && variantsList.length) {
      nameNode.textContent = variantsList[0];
    }
  }

  // Format price
  const formattedPrice =
    product.price > 0
      ? product.price.toLocaleString("vi-VN") + " ₫"
      : "Liên hệ";
  document.getElementById("detail-price").textContent = formattedPrice;

  // Show the detail container
  detailContainer.style.display = "grid";
});
