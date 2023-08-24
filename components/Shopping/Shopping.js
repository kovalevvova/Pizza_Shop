class Shopping {
render() {
    const productsStore = localStorageUtil.getProducts();
    let htmlCatalog = "";
    CATALOG.forEach(({ id, name, price }) => {
        if(productsStore.indexOf(id) !== -1)
        htmlCatalog += `
    <tr>
        <td></td>
        <td></td>
    </tr>
    `;
     })

    const html = '';
    ROOT_SHOPPING.innerHTML = html;
}
}

const shoppingPage = new Shopping();
