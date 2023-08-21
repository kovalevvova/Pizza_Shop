class Products {
  constructor() {
    this.classNameActive = "products-element__button_active";
    this.labelAdd = "Добавить в заказ";
    this.labelRemove = "Удалить из корзины";
  }

  handleSetLocationStorage(element, id) {
    const { pushProducts, products } = localStorageUtil.putProducts(id);
    if (pushProducts) {
      element.classList.add(this.classNameActive);
      element.innerHTML = this.labelRemove;
    } else {
      element.classList.remove(this.classNameActive);
      element.innerHTML = this.labelAdd;
    }
  }

  render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, disc, img, price }) => {
      let activeClass = "";
      let activeText = "";

      if (productsStore.indexOf(id) === -1) {
        activeText = this.labelAdd;
      } else {
        activeText = this.labelRemove;
        activeClass = this.classNameActive;
      }

      htmlCatalog += `
      <li class = "products-element">
      <span class = "products-element__name">${name}</span>
      <img class = "products-element__img" src="${img}" alt="photo">
      <span class = "products-element__disc">🤌🏼 ${disc}</span>
      <span class = "products-element__price">🫶 ${price.toLocaleString()} руб.</span>
      <button class = "products-element__button ${activeClass}" onclick = "productsPage.handleSetLocationStorage(this, '${id}')">${activeText}</button>
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
