const CATEGORY_HIERARCHY = {
  "GIẤY CÁC LOẠI": ["Giấy in", "Giấy ép plastic", "Giấy decal", "Giấy bìa màu"],
  "BÚT CÁC LOẠI": [
    "Bút ký",
    "Bút bi",
    "Bút xoá",
    "Bút nhớ dòng",
    "Bút dạ",
    "Bút dạ quang",
    "Bút lông dầu",
    "Bút lông bảng",
    "Bút chì",
    "Ruột bút",
  ],
  "FILE HỒ SƠ": ["File lá", "File còng", "File hộp", "Túi khuy"],
  "PHỤ KIỆN & THIÉT BỊ KHÁC": [
    "Dập ghim & đục lỗ",
    "Phụ kiện và thiết bị khác",
  ],
};

const state = {
  categories: new Set(),
  search: "",
  sort: "featured",
  page: 1,
  perPage: 12,
};

let productCards = [];

function createProductCardHTML(product) {
  const article = document.createElement("article");
  article.className = "product-card";
  article.dataset.productCard = "";
  article.dataset.id = product.id;
  article.dataset.category = product.category;
  article.dataset.name = product.name;
  article.dataset.sku = product.sku;
  article.dataset.description = product.description || "";
  article.dataset.price = product.price;
  article.dataset.stock = product.stock || 0;
  article.dataset.featured = !!product.featured;

  const formattedPrice =
    product.price > 0
      ? product.price.toLocaleString("vi-VN") + " ₫"
      : "Liên hệ";

  article.innerHTML = `
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}" loading="lazy">
      </div>
      <div class="product-meta">
        <span class="product-category">${product.category}</span>
        <span class="price">${formattedPrice}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.shortDescription || product.description || ""}</p>
      <div class="product-actions">
        <a class="link-btn" href="product-detail.html?id=${product.id}">Xem chi tiết →</a>
      </div>
    `;
  return article;
}

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.querySelector("[data-product-grid]");

  if (typeof PRODUCTS !== "undefined" && grid) {
    productCards = PRODUCTS.map(createProductCardHTML);
    // Initial append to grid so they exist in DOM for filtering logic
    productCards.forEach((card) => grid.appendChild(card));
  } else {
    productCards = Array.from(document.querySelectorAll("[data-product-card]"));
  }

  if (!productCards.length) return;

  // Load full state
  const saved = sessionStorage.getItem("nk_products_state");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      if (parsed.page) state.page = parsed.page;
      if (parsed.search !== undefined) state.search = parsed.search;
      if (parsed.sort) state.sort = parsed.sort;
      if (parsed.perPage) state.perPage = parsed.perPage;
      if (parsed.categories) state.categories = new Set(parsed.categories);
    } catch (e) {}
  }

  bindProductFilters();

  // Sync form inputs with loaded state
  const searchInput = document.querySelector("[data-search-input]");
  const sortSelect = document.querySelector("[data-sort-select]");
  const perPageSelect = document.querySelector("[data-per-page]");
  const filterWrap = document.querySelector("[data-category-filters]");

  if (searchInput && state.search) searchInput.value = state.search;
  if (sortSelect && state.sort) sortSelect.value = state.sort;
  if (perPageSelect && state.perPage) perPageSelect.value = state.perPage;
  if (filterWrap && state.categories.size > 0) {
    const checkboxes = filterWrap.querySelectorAll("input[type='checkbox']");
    checkboxes.forEach((cb) => {
      cb.checked = state.categories.has(cb.value);
    });
    updateGroupActiveStates();
  }

  renderProductsPage();
});

function updateGroupActiveStates() {
  const groups = document.querySelectorAll(".category-group");
  groups.forEach((group) => {
    const checkboxes = group.querySelectorAll("input[type='checkbox']");
    const isActive = Array.from(checkboxes).some((cb) => cb.checked);
    group.classList.toggle("is-active", isActive);
  });
}

// Helper to save state
function saveState() {
  sessionStorage.setItem(
    "nk_products_state",
    JSON.stringify({
      page: state.page,
      search: state.search,
      sort: state.sort,
      perPage: state.perPage,
      categories: Array.from(state.categories),
    }),
  );
}

function bindProductFilters() {
  const searchInput = document.querySelector("[data-search-input]");
  const sortSelect = document.querySelector("[data-sort-select]");
  const resetBtn = document.querySelector("[data-reset-filters]");
  const perPageSelect = document.querySelector("[data-per-page]");
  const filterWrap = document.querySelector("[data-category-filters]");

  if (searchInput)
    searchInput.addEventListener("input", (event) => {
      state.search = event.target.value.trim().toLowerCase();
      state.page = 1;
      saveState();
      renderProductsPage();
    });

  if (sortSelect)
    sortSelect.addEventListener("change", (event) => {
      state.sort = event.target.value;
      state.page = 1;
      saveState();
      renderProductsPage();
    });

  if (perPageSelect)
    perPageSelect.addEventListener("change", (event) => {
      state.perPage = Number(event.target.value);
      state.page = 1;
      saveState();
      renderProductsPage();
    });

  if (filterWrap)
    filterWrap.addEventListener("change", (event) => {
      if (event.target.matches("input[type='checkbox']")) {
        const cb = event.target;
        const { value, checked } = cb;
        const type = cb.dataset.categoryType;

        if (type === "parent") {
          // If parent changed, toggle all children UI-wise
          const group = cb.closest(".category-group");
          if (group) {
            const childCbs = group.querySelectorAll(
              "input[data-category-type='child']",
            );
            childCbs.forEach((child) => {
              child.checked = checked;
              checked
                ? state.categories.add(child.value)
                : state.categories.delete(child.value);
            });
          }
          // Also toggle parent itself in state
          checked
            ? state.categories.add(value)
            : state.categories.delete(value);
        } else if (type === "child") {
          // Child changed
          checked
            ? state.categories.add(value)
            : state.categories.delete(value);

          // Optionally update parent checkbox if all/some children are checked
          const parentValue = cb.dataset.parent;
          const parentCb = filterWrap.querySelector(
            `input[data-category-type='parent'][value="${parentValue}"]`,
          );
          if (parentCb) {
            const group = cb.closest(".category-group");
            const siblings = group.querySelectorAll(
              "input[data-category-type='child']",
            );
            const allChecked = Array.from(siblings).every((s) => s.checked);
            parentCb.checked = allChecked;
            allChecked
              ? state.categories.add(parentValue)
              : state.categories.delete(parentValue);
          }
        } else {
          // Plain category
          checked
            ? state.categories.add(value)
            : state.categories.delete(value);
        }

        updateGroupActiveStates();
        state.page = 1;
        saveState();
        renderProductsPage();
      }
    });

  if (resetBtn)
    resetBtn.addEventListener("click", () => {
      state.categories.clear();
      state.search = "";
      state.sort = "featured";
      state.page = 1;
      document
        .querySelectorAll("[data-category-filters] input")
        .forEach((input) => (input.checked = false));
      document
        .querySelectorAll(".category-group")
        .forEach((g) => g.classList.remove("is-active"));
      if (searchInput) searchInput.value = "";
      if (sortSelect) sortSelect.value = "featured";
      if (perPageSelect) perPageSelect.value = "12";
      saveState();
      renderProductsPage();
    });
}

function getCardData(card) {
  return {
    id: Number(card.dataset.id || 0),
    category: card.dataset.category || "",
    name: card.dataset.name || "",
    sku: card.dataset.sku || "",
    description: card.dataset.description || "",
    price: Number(card.dataset.price || 0),
    stock: Number(card.dataset.stock || 0),
    featured: card.dataset.featured === "true",
  };
}

function getFilteredCards() {
  let cards = [...productCards];

  if (state.categories.size) {
    cards = cards.filter((card) => {
      const cardCat = card.dataset.category;

      // Check if selected categories include this card's category OR its parent
      return Array.from(state.categories).some((selected) => {
        // Direct match
        if (selected === cardCat) return true;

        // If selected is a parent, check if cardCat is one of its children
        if (CATEGORY_HIERARCHY[selected]) {
          return CATEGORY_HIERARCHY[selected].includes(cardCat);
        }

        return false;
      });
    });
  }

  if (state.search) {
    cards = cards.filter((card) => {
      const data = getCardData(card);
      const haystack =
        `${data.name} ${data.sku} ${data.category} ${data.description}`.toLowerCase();
      return haystack.includes(state.search);
    });
  }

  cards.sort((cardA, cardB) => {
    const a = getCardData(cardA);
    const b = getCardData(cardB);

    switch (state.sort) {
      case "price-asc":
        return a.price - b.price;
      case "price-desc":
        return b.price - a.price;
      case "name-asc":
        return a.name.localeCompare(b.name, "vi");
      default:
        return Number(b.featured) - Number(a.featured) || a.id - b.id;
    }
  });

  return cards;
}

function renderProductsPage() {
  const grid = document.querySelector("[data-product-grid]");
  const countNode = document.querySelector("[data-result-count]");
  const paginationWrap = document.querySelector("[data-pagination]");
  const empty = document.querySelector("[data-empty-state]");
  if (!grid || !countNode || !paginationWrap || !empty) return;

  // Update result count
  const filtered = getFilteredCards();
  countNode.textContent = `${filtered.length.toLocaleString("vi-VN")} sản phẩm`;

  const totalPages = Math.max(1, Math.ceil(filtered.length / state.perPage));
  if (state.page > totalPages) state.page = totalPages;

  const start = (state.page - 1) * state.perPage;
  const end = start + state.perPage;
  const visibleIds = new Set(
    filtered.slice(start, end).map((card) => card.dataset.id),
  );

  filtered.forEach((card) => grid.appendChild(card));

  productCards.forEach((card) => {
    const isVisible = visibleIds.has(card.dataset.id);
    card.classList.toggle("hidden", !isVisible);
  });

  empty.classList.toggle("hidden", filtered.length > 0);
  renderPagination(totalPages);
}

function renderPagination(totalPages) {
  const paginationWrap = document.querySelector("[data-pagination]");
  if (!paginationWrap) return;
  if (totalPages <= 1) {
    paginationWrap.innerHTML = "";
    return;
  }

  const buttons = [];
  const pagesToShow = new Set([
    1,
    totalPages,
    state.page - 1,
    state.page,
    state.page + 1,
  ]);
  const orderedPages = [...pagesToShow]
    .filter((page) => page >= 1 && page <= totalPages)
    .sort((a, b) => a - b);

  if (state.page > 1) {
    buttons.push(
      `<button class="page-btn" data-page="${state.page - 1}">‹</button>`,
    );
  }

  let previous = 0;
  orderedPages.forEach((page) => {
    if (page - previous > 1) {
      buttons.push(
        '<span class="page-btn" style="display:inline-flex;align-items:center;justify-content:center;">…</span>',
      );
    }
    buttons.push(
      `<button class="page-btn ${page === state.page ? "active" : ""}" data-page="${page}">${page}</button>`,
    );
    previous = page;
  });

  if (state.page < totalPages) {
    buttons.push(
      `<button class="page-btn" data-page="${state.page + 1}">›</button>`,
    );
  }

  paginationWrap.innerHTML = buttons.join("");
  paginationWrap.querySelectorAll("[data-page]").forEach((button) => {
    button.addEventListener("click", () => {
      state.page = Number(button.dataset.page);
      saveState();
      renderProductsPage();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}
