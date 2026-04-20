const currentPage = window.location.pathname.split("/").pop() || "index.html";

document.addEventListener("DOMContentLoaded", () => {
  setActiveNavigation();
  setupMobileMenu();
  setupNewsletterForm();
  renderFeaturedProducts();
  setupProductGallery();
  setupVariantTags();
  setupScrollHeader();
  setupScrollReveal();
  initDecorCarousel();
});

/* ---- Scroll Header ---- */
function setupScrollHeader() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    if (window.scrollY > 60) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/* ---- Scroll Reveal (lazy load sections as user scrolls) ---- */
function setupScrollReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.12 },
  );
  els.forEach((el) => io.observe(el));
}

function setActiveNavigation() {
  const links = document.querySelectorAll("[data-nav]");
  links.forEach((link) => {
    const target = link.getAttribute("href");
    if (
      target === currentPage ||
      (currentPage === "" && target === "index.html") ||
      ((currentPage === "product-detail.html" ||
        currentPage.startsWith("product-")) &&
        target === "products.html")
    ) {
      link.classList.add("active");
    }
  });
}

function setupMobileMenu() {
  const toggle = document.querySelector("[data-mobile-toggle]");
  const nav = document.querySelector("[data-mobile-nav]");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => nav.classList.toggle("open"));
  nav
    .querySelectorAll("a")
    .forEach((a) =>
      a.addEventListener("click", () => nav.classList.remove("open")),
    );
}

function setupNewsletterForm() {
  const form = document.querySelector("[data-newsletter-form]");
  const notice = document.querySelector("[data-newsletter-notice]");
  if (!form || !notice) return;
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const emailInput = form.querySelector("input[type='email']");
    const email = emailInput.value.trim();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      notice.textContent = "Vui lòng nhập email hợp lệ để nhận ưu đãi mới.";
      notice.className = "notice error";
      return;
    }
    notice.textContent = `Cảm ơn bạn! Chúng tôi đã lưu email ${email} để gửi bảng giá và bộ sưu tập mới.`;
    notice.className = "notice success";
    form.reset();
  });
}

function renderFeaturedProducts() {
  const container = document.querySelector("[data-featured-products]");
  if (!container || typeof PRODUCTS === "undefined") return;
  const featured = PRODUCTS.filter((product) => product.featured).slice(0, 8);
  container.innerHTML = featured.map(productCardHTML).join("");
}

function productCardHTML(product) {
  return `
    <article class="product-card">
      <div class="product-thumb">
        <img src="${product.image}" alt="${product.name}">
      </div>
      <div class="product-meta">
        <span class="product-category">${product.category}</span>
        <span class="price">${formatPrice(product.price)}</span>
      </div>
      <h3>${product.name}</h3>
      <p>${product.description || product.name}</p>
      <div class="product-actions">
        <a class="link-btn" href="product-detail.html?id=${product.id}">Xem chi tiết →</a>
      </div>
    </article>
  `;
}

function formatPrice(value) {
  return new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
    maximumFractionDigits: 0,
  }).format(value);
}

function setupVariantTags() {
  const tags = document.querySelectorAll(".variant-tag");
  if (!tags.length) return;

  const mainImg = document.querySelector("[data-gallery-main]");
  const title = document.querySelector(".detail-info .section-title");
  if (!mainImg) return;

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      const img = tag.dataset.image;
      const name = tag.dataset.name;

      if (img) {
        mainImg.src = img;
        mainImg.alt = name || mainImg.alt;
      }
      if (name && title) {
        title.textContent = name;
      }

      tags.forEach((t) => t.classList.remove("is-active"));
      tag.classList.add("is-active");
    });
  });
}

function setupProductGallery() {
  const galleries = document.querySelectorAll("[data-gallery]");
  if (!galleries.length) return;

  galleries.forEach((gallery) => {
    const mainImage = gallery.querySelector("[data-gallery-main]");
    const thumbs = gallery.querySelectorAll("[data-gallery-thumb]");
    if (!mainImage || !thumbs.length) return;

    thumbs.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const image = thumb.getAttribute("data-image");
        const alt = thumb.getAttribute("data-alt") || mainImage.alt;
        if (!image) return;

        mainImage.src = image;
        mainImage.alt = alt;

        thumbs.forEach((item) => item.classList.remove("is-active"));
        thumb.classList.add("is-active");
      });
    });
  });
}

// Add Floating Contact Buttons
document.addEventListener("DOMContentLoaded", () => {
  const contactHTML = `
  <div class="floating-contact-wrap">
    <a href="https://www.tiktok.com/@tuannam2023?lang=en" target="_blank" class="f-btn f-tiktok" title="TikTok">
      <div class="f-pulse"></div>
      <div class="f-icon">
        <svg viewBox="0 0 448 512" width="22" height="22" fill="currentColor">
          <path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z"/>
        </svg>
      </div>
    </a>
    <a href="https://www.facebook.com/profile.php?id=61574245767746&mibextid=wwXIfr&rdid=CqiPLbRT5hf9N0RW#" target="_blank" class="f-btn f-facebook" title="Facebook">
      <div class="f-pulse"></div>
      <div class="f-icon">
        <svg viewBox="0 0 320 512" width="20" height="20" fill="currentColor">
          <path d="M279.1 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.4 0 225.4 0c-73.22 0-121.1 44.38-121.1 124.7v70.62H22.89V288h81.39v224h100.2V288z"/>
        </svg>
      </div>
    </a>
    <div class="f-btn f-zalo" onclick="openContactPopup('zalo')" title="Zalo">
      <div class="f-pulse"></div>
      <div class="f-icon">
        <span style="font-weight: 800; font-size: 14.5px; font-family: Tahoma, sans-serif; letter-spacing: 0.5px;">Zalo</span>
      </div>
    </div>
    <div class="f-btn f-phone" onclick="openContactPopup('phone')" title="Hotline">
      <div class="f-pulse"></div>
      <div class="f-icon">
        <svg viewBox="0 0 512 512" width="20" height="20" fill="currentColor">
          <path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"/>
        </svg>
      </div>
    </div>
  </div>

  <div class="contact-popup-overlay" id="globalContactPopup" onclick="closeContactPopup(event)">
    <div class="contact-popup-content" style="padding: 0; overflow: hidden; background: #fff; box-shadow: 0 16px 50px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05); transition: box-shadow 0.3s ease;">
      <button class="close-popup" aria-label="Đóng" onclick="closeContactPopup(true)" style="background: rgba(0, 104, 255, 0.08); color: #0068ff; border: none; box-shadow: none;">&times;</button>
      
      <div id="popupZalo" style="display:none; text-align: center; padding: 40px 20px 30px;">
        <div style="background: #fff; padding: 2px; border-radius: 14px; box-shadow: 0 8px 30px rgba(0, 104, 255, 0.2); display: inline-block; border: 1px solid #e8edf5;">
          <img src="QR Zalo.jpg" alt="Zalo QR" style="max-width: 320px; width: 100%; display: block; border-radius: 12px;">
        </div>
      </div>

      <div id="popupPhone" style="display:none; text-align: center;">
        <div style="background: rgba(0, 104, 255, 0.03); padding: 40px 20px 24px; border-bottom: 1px solid rgba(0, 104, 255, 0.1);">
          <h3 style="margin: 0 0 8px; font-size: 1.9rem; font-family: 'Times New Roman', serif; color: #ea4335; letter-spacing: 0.5px;">Hotline Hỗ Trợ</h3>
          <p style="margin: 0; font-size: 1.05rem; color: var(--muted);">Nhân viên tư vấn luôn sẵn sàng</p>
        </div>
        <div style="padding: 42px 30px;">
          <a href="tel:0766088886" style="display: inline-block; background: #fff; text-decoration: none; border-radius: 20px; padding: 22px 36px; border: 2px solid #ea4335; box-shadow: 0 10px 30px rgba(234, 67, 53, 0.2); transition: all 0.3s ease;" onmouseover="this.style.transform='scale(1.05)'; this.style.boxShadow='0 15px 40px rgba(234, 67, 53, 0.3)';" onmouseout="this.style.transform='scale(1)'; this.style.boxShadow='0 10px 30px rgba(234, 67, 53, 0.2)';">
            <div style="font-size: 2.3rem; font-family: 'Times New Roman', serif; font-weight: 800; color: #ea4335; letter-spacing: 1px;">0766 088 886</div>
          </a>
          <p style="margin: 36px 0 0; color: var(--muted); font-size: 0.95rem;">Bấm vào số điện thoại để gọi trực tiếp</p>
        </div>
      </div>
    </div>
  </div>
  `;
  document.body.insertAdjacentHTML("beforeend", contactHTML);
});

window.openContactPopup = function (type) {
  const overlay = document.getElementById("globalContactPopup");
  const content = overlay
    ? overlay.querySelector(".contact-popup-content")
    : null;
  const zalo = document.getElementById("popupZalo");
  const phone = document.getElementById("popupPhone");
  if (!overlay || !zalo || !phone) return;

  zalo.style.display = type === "zalo" ? "block" : "none";
  phone.style.display = type === "phone" ? "block" : "none";

  if (content) {
    if (type === "zalo") {
      content.style.boxShadow =
        "0 16px 50px rgba(0, 104, 255, 0.25), 0 0 0 1px rgba(0, 104, 255, 0.1)";
    } else {
      content.style.boxShadow =
        "0 16px 50px rgba(234, 67, 53, 0.25), 0 0 0 1px rgba(234, 67, 53, 0.1)";
    }
  }

  overlay.classList.add("is-active");
};

window.closeContactPopup = function (event) {
  if (event === true || event.target.id === "globalContactPopup") {
    const overlay = document.getElementById("globalContactPopup");
    if (overlay) overlay.classList.remove("is-active");
  }
};

// Lakbay Style Hero Carousel Logic
document.addEventListener("DOMContentLoaded", () => {
  const heroData = [
    {
      category: "VỀ NAM KHÁNH",
      title: "NAM KHÁNH",
      desc: "Công ty TNHH NK Nam Khánh chuyên cung cấp văn phòng phẩm chất lượng, đáp ứng nhu cầu từ doanh nghiệp nhỏ đến lớn với sự uy tín, trách nhiệm và tận tâm trong từng đơn hàng. Nam Khánh luôn cam kết sản phẩm đạt tiêu chuẩn, giá cả hợp lý, giao hàng nhanh chóng và dịch vụ hỗ trợ chu đáo, mang đến giải pháp văn phòng phẩm tiện lợi, bền đẹp và đáng tin cậy cho khách hàng.",
      img: "NAMKHANH.png",
      thumbTitle: "Giới thiệu",
    },
    {
      category: "VĂN PHÒNG PHẨM",
      title: "Giấy<br/><span>các loại</span>",
      desc: "Cung cấp đa dạng các dòng giấy chất lượng cao, đáp ứng nhu cầu in ấn, photocopy, ghi chép và sử dụng hằng ngày. Sản phẩm có bề mặt mịn, độ trắng đẹp, định lượng chuẩn, mang lại hiệu quả tối ưu cho công việc văn phòng và học tập.",
      img: "assets/images/Giấy IK Plus A4 Indonesia ĐL70.png",
      thumbTitle: "Giấy in",
    },
    {
      category: "BÚT VIẾT",
      title: "Bút<br/><span>các loại</span>",
      desc: "Danh mục bút đa dạng từ bút bi, bút ký, bút lông đến bút chuyên dụng, phù hợp cho mọi nhu cầu viết và trình bày. Thiết kế tiện dụng, nét mực đều, êm tay, góp phần nâng cao trải nghiệm làm việc chuyên nghiệp và tinh tế.",
      img: "assets/images/Bút bi TL023.jpg",
      thumbTitle: "Bút viết",
    },
    {
      category: "LƯU TRỮ",
      title: "File<br/><span>hồ sơ</span>",
      desc: "Các sản phẩm file hồ sơ được lựa chọn kỹ lưỡng nhằm hỗ trợ lưu trữ tài liệu khoa học, gọn gàng và thẩm mỹ. Kiểu dáng đa dạng, chất liệu bền đẹp, giúp doanh nghiệp quản lý hồ sơ hiệu quả và chuyên nghiệp hơn.",
      img: "assets/images/File còng Kokuyo khổ A 9cm.jpg",
      thumbTitle: "File hồ sơ",
    },
    {
      category: "KEO DÁN",
      title: "Băng dính<br/><span>tiện dụng</span>",
      desc: "Băng dính chất lượng tốt với độ bám chắc, sử dụng linh hoạt trong đóng gói, cố định và các nhu cầu văn phòng thông dụng. Sản phẩm bảo đảm tính tiện lợi, độ bền cao và đáp ứng tốt trong nhiều môi trường sử dụng khác nhau.",
      img: "assets/images/Băng dính(1).jpg",
      thumbTitle: "Băng dính",
    },
    {
      category: "ĐÓNG GÓI",
      title: "Màng chít<br/><span>an toàn</span>",
      desc: "Màng chít được thiết kế với độ co giãn và bám dính tốt, hỗ trợ đóng gói hàng hóa an toàn, gọn gàng và thẩm mỹ. Đây là giải pháp tối ưu giúp bảo vệ sản phẩm hiệu quả trong quá trình lưu trữ và vận chuyển.",
      img: "assets/images/Màng chít.jpg",
      thumbTitle: "Màng chít",
    },
    {
      category: "VĂN PHÒNG",
      title: "Dập ghim<br/><span>& Đục lỗ</span>",
      desc: "Các sản phẩm dập ghim và đục lỗ mang đến sự tiện lợi, chắc chắn và chính xác trong quá trình sắp xếp tài liệu. Thiết kế bền bỉ, thao tác nhẹ nhàng, phù hợp với nhu cầu sử dụng thường xuyên tại văn phòng, trường học và cơ quan.",
      img: "assets/images/Dập ghim số 10, D238.webp",
      thumbTitle: "Dập ghim",
    },
    {
      category: "PHỤ KIỆN",
      title: "Phụ kiện<br/><span>khác</span>",
      desc: "Danh mục phụ kiện văn phòng đa dạng, hỗ trợ hoàn thiện không gian làm việc đầy đủ, ngăn nắp và hiệu quả. Mỗi sản phẩm đều được chọn lọc nhằm đáp ứng tốt cả về công năng, độ bền và tính thẩm mỹ.",
      img: "assets/images/File 3 ngăn Deli 9843.jpg",
      thumbTitle: "Phụ kiện",
    },
    {
      category: "TRANG TRÍ",
      title: "Đồ<br/><span>trang trí</span>",
      desc: "Đồ trang trí không chỉ làm đẹp không gian mà còn góp phần tạo nên môi trường làm việc hiện đại, tinh tế và truyền cảm hứng. Sản phẩm phù hợp để nâng tầm hình ảnh văn phòng, cửa hàng hoặc khu vực trưng bày một cách chuyên nghiệp.",
      img: "assets/images/Đồng hồ trống đồng 2.jpg",
      thumbTitle: "Đồ trang trí",
    },
  ];

  const bgImg = document.getElementById("heroBgImg");
  const catEl = document.getElementById("heroCategory");
  const titleEl = document.getElementById("heroTitle");
  const descEl = document.getElementById("heroDesc");
  const contentWrap = document.querySelector(".hero-content-dynamic");
  const dotsContainer = document.getElementById("heroDots");

  // Featured card elements
  const featuredCard = document.getElementById("heroFeaturedCard");
  const cardImg = document.getElementById("heroCardImg");
  const cardCat = document.getElementById("heroCardCat");
  const cardTitle = document.getElementById("heroCardTitle");

  if (!bgImg || !featuredCard) return;

  const dots = [];
  let currentIndex = 0;
  let autoplayInterval;

  const updateCard = (item) => {
    cardImg.src = item.img;
    cardCat.textContent = item.category;
    cardTitle.textContent = item.thumbTitle;
  };

  // Init first item
  bgImg.src = heroData[0].img;
  catEl.innerHTML = heroData[0].category;
  titleEl.innerHTML = heroData[0].title;
  descEl.innerHTML = heroData[0].desc;
  updateCard(heroData[0]);

  const goToSlide = (index) => {
    if (index === currentIndex && dots.length) return;
    currentIndex = index;
    const item = heroData[index];

    // Update dots
    dots.forEach((d, i) => d.classList.toggle("active", i === index));

    // Fade out card image
    featuredCard.classList.add("fade-card");

    // Fade out left text
    contentWrap.classList.add("fade-out");
    bgImg.classList.add("fade-out");

    setTimeout(() => {
      // Update all content
      bgImg.src = item.img;
      catEl.innerHTML = item.category;
      titleEl.innerHTML = item.title;
      descEl.innerHTML = item.desc;
      updateCard(item);

      // Re-trigger slide-in animation
      contentWrap.classList.add("slide-reset");
      void contentWrap.offsetWidth;
      contentWrap.classList.remove("slide-reset");

      // Fade back in
      featuredCard.classList.remove("fade-card");
      contentWrap.classList.remove("fade-out");
      bgImg.classList.remove("fade-out");
    }, 150);
  };

  const startAutoplay = () => {
    clearInterval(autoplayInterval);
    autoplayInterval = setInterval(() => {
      goToSlide((currentIndex + 1) % heroData.length);
    }, 5000);
  };

  // Click on featured card → go next
  featuredCard.addEventListener("click", () => {
    goToSlide((currentIndex + 1) % heroData.length);
    startAutoplay();
  });

  // Render dots
  if (dotsContainer) {
    heroData.forEach((_, index) => {
      const dot = document.createElement("div");
      dot.className = "hero-carousel-dot" + (index === 0 ? " active" : "");
      dot.addEventListener("click", () => {
        goToSlide(index);
        startAutoplay();
      });
      dotsContainer.appendChild(dot);
      dots.push(dot);
    });
  }

  startAutoplay();
});

// ===== FEATURED CAROUSEL 3D LOGIC =====
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("fcSlider");
  if (!slider || typeof PRODUCTS === "undefined") return;

  // Get some featured products (max 10)
  let featuredProds = PRODUCTS.filter((p) => p.featured);
  if (featuredProds.length > 10) {
    featuredProds = featuredProds.slice(0, 10);
  }

  // Pre-render HTML for these products
  let html = "";
  featuredProds.forEach((prod) => {
    // Format price
    const formattedPrice = new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    }).format(prod.price);

    // Fallback if image doesn't exist just in case
    const imgUrl = prod.image || "assets/images/logo-nam-khánh.png";

    html += `
      <a href="product-detail.html?id=${prod.id}" class="fc-card">
        <div class="fc-card-img-wrap">
          <img src="${imgUrl}" alt="${prod.name}" loading="lazy">
        </div>
        <div class="fc-card-info">
          <div class="fc-card-meta">
            <span class="fc-card-cat">${prod.category}</span>
            <span class="fc-card-price">${formattedPrice}</span>
          </div>
          <h3 class="fc-card-name">${prod.name}</h3>
          <p class="fc-card-desc">${prod.description || ""}</p>
          <div><span class="fc-card-more">Xem chi tiết &rarr;</span></div>
        </div>
      </a>
    `;
  });
  slider.innerHTML = html;

  const cards = document.querySelectorAll(".fc-card");
  if (cards.length === 0) return;

  let currentIndex = Math.floor(cards.length / 2); // Start at middle

  const updateClasses = () => {
    cards.forEach((card, index) => {
      // Remove all classes
      card.classList.remove("active", "prev-1", "prev-2", "next-1", "next-2");

      let diff = index - currentIndex;

      if (cards.length >= 5) {
        if (diff < -2) diff += cards.length;
        if (diff > 2) diff -= cards.length;
      }

      if (diff === 0) {
        card.classList.add("active");
      } else if (diff === -1) {
        card.classList.add("prev-1");
      } else if (diff === -2) {
        card.classList.add("prev-2");
      } else if (diff === 1) {
        card.classList.add("next-1");
      } else if (diff === 2) {
        card.classList.add("next-2");
      }
    });
  };

  updateClasses(); // Init

  document.querySelector(".fc-prev").addEventListener("click", () => {
    currentIndex = currentIndex === 0 ? cards.length - 1 : currentIndex - 1;
    updateClasses();
  });

  document.querySelector(".fc-next").addEventListener("click", () => {
    currentIndex = currentIndex === cards.length - 1 ? 0 : currentIndex + 1;
    updateClasses();
  });
});
// ===== DECOR CAROUSEL LOGIC =====
// ===== DECOR CAROUSEL LOGIC =====
function initDecorCarousel() {
  const video = document.getElementById("decorVideo");
  const nameEl = document.getElementById("decorProductName");
  const dotsContainer = document.getElementById("decorDots");

  // Controls
  const playBtn = document.getElementById("decorVPlay");
  const muteBtn = document.getElementById("decorVMute");
  const muteIco = document.getElementById("decorVMuteIco");
  const prog = document.getElementById("decorVProg");
  const progFill = document.getElementById("decorVProgFill");
  const timeTxt = document.getElementById("decorVTime");

  if (!video || !nameEl || !dotsContainer) return;

  const data = [
    {
      name: "Bản đồ tráng gương 34 tỉnh thành",
      video: "Video/video bản đồ màu xanh.mp4",
    },
    {
      name: "Bản đồ gỗ vàng 34 tỉnh thành",
      video: "Video/video bản đồ vàng.mp4",
    },
    { name: "Đồng hồ bản đồ", video: "Video/video đồng hồ màu xanh.mp4" },
    { name: "Đồng hồ trống đồng", video: "Video/video đồng hồ trống đồng.mp4" },
    {
      name: "Đồng hồ decor cao cấp",
      video: "assets/images/Đồng hồ decor video.mp4",
    },
  ];

  let current = 0;
  let transitioning = false;

  const ICOS = {
    play: "M8 5v14l11-7z",
    pause: "M6 19h4V5H6v14zm8-14v14h4V5h-4z",
    vol: "M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.26 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77 0-4.28-2.99-7.86-7-8.77z",
    mute: "M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.796 8.796 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25A6.956 6.956 0 0 1 14 18.98v2.06c1.52-.36 2.93-1.05 4.13-1.99L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z",
  };

  function fmt(s) {
    if (!isFinite(s)) return "0:00";
    return (
      Math.floor(s / 60) + ":" + String(Math.floor(s % 60)).padStart(2, "0")
    );
  }

  // Play/Pause
  if (playBtn) {
    playBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (video.paused) video.play();
      else video.pause();
    });
  }

  video.addEventListener("play", () => {
    if (playBtn) playBtn.querySelector("path").setAttribute("d", ICOS.pause);
  });
  video.addEventListener("pause", () => {
    if (playBtn) playBtn.querySelector("path").setAttribute("d", ICOS.play);
  });

  // Mute
  if (muteBtn) {
    muteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      if (muteIco)
        muteIco.setAttribute("d", video.muted ? ICOS.mute : ICOS.vol);
    });
  }

  // Progress
  video.addEventListener("timeupdate", () => {
    if (progFill) {
      const p = (video.currentTime / video.duration) * 100;
      progFill.style.width = p + "%";
    }
    if (timeTxt) timeTxt.textContent = fmt(video.currentTime);
  });

  if (prog) {
    prog.addEventListener("click", (e) => {
      e.stopPropagation();
      const rect = prog.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      video.currentTime = pos * video.duration;
    });
  }

  // Init dots
  data.forEach((_, i) => {
    const dot = document.createElement("button");
    dot.className = "decor-dot" + (i === 0 ? " active" : "");
    dot.setAttribute("aria-label", "Slide " + (i + 1));
    dot.addEventListener("click", () => goToSlide(i));
    dotsContainer.appendChild(dot);
  });
  const dots = dotsContainer.querySelectorAll(".decor-dot");

  function goToSlide(idx) {
    if (transitioning || idx === current) return;
    transitioning = true;
    current = idx;

    video.classList.add("fading");
    dots.forEach((d, i) => d.classList.toggle("active", i === current));

    setTimeout(() => {
      video.src = data[current].video;
      nameEl.textContent = data[current].name;
      video.load();
      video.play().catch(() => {});
      video.classList.remove("fading");
      transitioning = false;
    }, 400);
  }

  video.addEventListener("ended", () => goToSlide((current + 1) % data.length));

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        if (!video.src) video.src = data[0].video;
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    },
    { threshold: 0.3 },
  );
  observer.observe(document.getElementById("decorShowcase"));
}
