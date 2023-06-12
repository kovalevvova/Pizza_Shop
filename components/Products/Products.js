class Products {
  render() {
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, disc, img, price }) => {
      htmlCatalog += `
      <li>
      <span>${name}</span>
      <img src="${img}" alt="photo">
      <span>${disc}</span>
      <span>${price}</span>
      <button>Добавить в заказ</button>
      </li>`;
      console.log(img);
    });

    const html = `
    <ul clsass = "products-container">
    ${htmlCatalog}
    </ul>
    `;

    ROOT_PRODUCTS.innerHTML = html;
  }
}

const productsPage = new Products();
productsPage.render();
