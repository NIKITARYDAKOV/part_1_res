class Phone {
    render() {
        let html_catalog_phone = '';
        CATALOG_PHONE.forEach(({ id, img, text, price }) => {
            html_catalog_phone += `
            <div class="phone_modal">
            <img class="phone_modal_img" src="${img}">
            <div class="phone_modal_text">${text}</div>
            <div class="phone_modal_pib">
                <div class="phone_modal_price">${price}</div>
                <input class="phone_modal_input" type="text" placeholder="1">
                <button class="phone_modal_button">Купить</button>
        </div>
        </div>
            `;
        });

        const html_phone = `
        <div class="all_content_phone">
        ${html_catalog_phone}
        </div>
        `;

        ROOT_PHONE.innerHTML = html_phone;
    }
}
const phone_page = new Phone();
phone_page.render();