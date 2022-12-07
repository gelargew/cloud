window.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll(".contents");
  const toggler = () => {
    document.querySelectorAll(".toggler").forEach((el) => {
      el.addEventListener("click", () => {
        const id = el.dataset.listId;
        contents.forEach((content) => {
          if (content.dataset.listId === id) {
            content.classList.remove("none");
          } else {
            content.classList.add("none");
          }
        });
      });
    });
  };

  toggler();
});
