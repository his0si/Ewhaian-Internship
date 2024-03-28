const faqBtns = document.querySelectorAll(".faq-btn");
const faqContainers = document.querySelectorAll(".qna-container");

faqBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        const targetId = btn.getAttribute("data-target");
        faqContainers.forEach(container => {
            if (container.id === targetId) {
                container.style.display = "block";
            } else {
                container.style.display = "none";
            }
        });
    });
});
