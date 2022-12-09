window.addEventListener("DOMContentLoaded", () => {
  const contents = document.querySelectorAll(".contents");
  const previousContent = document.querySelector(".previousContent");
  const nextContent = document.querySelector(".nextContent");
  const featuredContents = document.querySelectorAll(".featuredTitle");
  let selectedContents = null;
  let offset = 0;
  const resetState = () => {
    offset = 0;
    contents.forEach((_content) => {
      _content.style.transform = "translateX(0)";
    });
    previousContent.classList.add("none");
    if (selectedContents.children.length < 3) {
      nextContent.classList.add("none");
    } else {
      nextContent.classList.remove("none");
    }
  };

  const toggleFeaturedTitle = (id) => {
    featuredContents.forEach((el) => {
      if (el.dataset.listId === id) {
        el.classList.remove("none");
      } else {
        el.classList.add("none");
      }
      console.log(el.classList);
    });
  };

  const toggler = () => {
    selectedContents = contents[0];
    const togglers = document.querySelectorAll(".toggler");
    togglers.forEach((el) => {
      el.addEventListener("click", () => {
        togglers.forEach((_el) => {
          _el.classList.remove("active");
        });
        el.classList.add("active");

        const id = el.dataset.listId;
        contents.forEach((content) => {
          if (content.dataset.listId === id) {
            content.classList.remove("none");
            selectedContents = content;
            resetState();
          } else {
            content.classList.add("none");
          }
        });
        toggleFeaturedTitle(id);
      });
    });
  };
  const navigation = () => {
    nextContent.addEventListener("click", () => {
      previousContent.classList.remove("none");
      if (offset + 3 > selectedContents.children.length) {
        return;
      } else if (offset + 4 > selectedContents.children.length) {
        nextContent.classList.add("none");
      }
      const width = selectedContents.children[0].getBoundingClientRect().width;
      selectedContents.style.transform = `translateX(-${
        width * (offset + 1)
      }px)`;
      offset++;
    });
    previousContent.addEventListener("click", () => {
      nextContent.classList.remove("none");
      console.log(offset);
      if (!offset) {
        return;
      } else if (offset - 1 === 0) {
        previousContent.classList.add("none");
      }
      const width = selectedContents.children[0].getBoundingClientRect().width;
      selectedContents.style.transform = `translateX(-${
        width * (offset - 1)
      }px)`;
      offset--;
    });
  };

  toggler();
  navigation();
  resetState();
});
