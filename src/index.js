/**
 * @param {HTMLDivElement} el
 */
function isElementInViewport(el) {
  const { top, bottom } = el.getBoundingClientRect();
  const { innerHeight } = window;

  return (
    (top > 0 && top < innerHeight - 80) || (bottom > 0 && bottom < innerHeight)
  );
}

document.addEventListener("DOMContentLoaded", () => {
  let articles = Array.from(document.querySelectorAll(".js-animation"));

  articles.forEach((article) => {
    article.setAttribute(
      "style",
      "opacity: 0; transform: translate(0, 150px);"
    );
  });

  document.addEventListener("scroll", animateElements);

  function animateElements() {
    articles.forEach((article) => {
      if (isElementInViewport(article)) {
        article.setAttribute(
          "style",
          "transition: all 500ms ease-out; opacity: 100%; transform: translate(0, 0px);"
        );

        articles = articles.filter((el) => el.innerHTML !== article.innerHTML);
        if (articles.length === 0) {
          document.removeEventListener("scroll", animateElements);
        }
      }
    });
  }
});
