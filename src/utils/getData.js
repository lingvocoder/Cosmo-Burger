async function getBurgerData(setStateMethod) {
  const URL = "https://norma.nomoreparties.space/api/ingredients";

  function checkStatus(response) {
    if (response.status !== 200) {
      return Promise.reject(new Error(response.statusText));
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
    })
    .catch(function (e) {
      throw new Error("There is no data for the request" + e.message);
    });
}
export default getBurgerData;
