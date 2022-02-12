class instruments {
    render() {
        let html_catalog_instruments = '';
        CATALOG_INSTRUMENTS.forEach(({ id, img, text, price }) => {
            html_catalog_instruments += `
            <div class="instruments_modal">
            <img class="instruments_modal_img" src="${img}">
            <div class="instruments_modal_text">${text}</div>
            <div class="instruments_modal_pib">
                <div class="instruments_modal_price">${price}</div>
                <input class="instruments_modal_input" type="text" placeholder="1">
                <button class="instruments_modal_button">Купить</button>
        </div>
        </div>
            `;
        });

        const html_instruments = `
        <div class="all_content_instruments" id="all_content_instruments" style="display: none">
        ${html_catalog_instruments}
        </div>
        `;

        ROOT_INSTRUMENTS.innerHTML = html_instruments;
    }
}
const instruments_page = new instruments();
instruments_page.render();