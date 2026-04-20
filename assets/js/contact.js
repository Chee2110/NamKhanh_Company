
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("[data-contact-form]");
  const notice = document.querySelector("[data-contact-notice]");
  if (!form || !notice) return;
  form.addEventListener("submit", event => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();
    if (name.length < 2) return showNotice("Vui lòng nhập họ tên hợp lệ.", "error");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showNotice("Email chưa đúng định dạng.", "error");
    if (!/^[0-9+\s]{8,15}$/.test(phone)) return showNotice("Số điện thoại cần từ 8 đến 15 ký tự số.", "error");
    if (message.length < 10) return showNotice("Vui lòng nhập nội dung chi tiết hơn để chúng tôi hỗ trợ nhanh hơn.", "error");
    showNotice(`Cảm ơn ${name}! Chúng tôi đã ghi nhận yêu cầu và sẽ liên hệ qua ${email}.`, "success");
    form.reset();
  });
  function showNotice(text, type) { notice.textContent = text; notice.className = `notice ${type}`; }
});
