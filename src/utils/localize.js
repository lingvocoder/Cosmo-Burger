function localize(item) {
  return item === "bun"
    ? item === "main"
      ? "начинки"
      : "булки"
    : item === "sauce"
    ? "соусы"
    : "начинки";
}

export default localize;
