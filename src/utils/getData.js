async function getBurgerData(setStateMethod) {
  const URL = "https://norma.nomoreparties.space/api/ingredients";

  function checkStatus(response) {
    if (response.status !== 200) {
      return Promise.reject(
        new Error("Что-то пошло не так:" + response.statusText)
      );
    } else {
      return Promise.resolve(response);
    }
  }

  function toJson(response) {
    return response.json();
  }

  await fetch(URL)
    .then(checkStatus)
    .then(toJson)
    .then(({ data: burgerIngredients }) => {
      setStateMethod(burgerIngredients);
    });
}
export default getBurgerData;
