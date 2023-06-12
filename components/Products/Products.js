class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, disc, img, price }) => {
      htmlCatalog += `
      <li class = "products-element">
      <span class = "products-element__name">${name}</span>
      <img class = "products-element__img" src="${img}" alt="photo">
      <span class = "products-element__disc">🤌🏼 ${disc}</span>
      <span class = "products-element__price">🫶 ${price.toLocaleString()} руб.</span>
      <button class = "products-element__button">Добавить в заказ</button>
      </li>`;
    });

    const html = `
    <ul class = "products-container">
    ${htmlCatalog}
    </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
