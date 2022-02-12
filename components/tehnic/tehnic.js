class tehnic {
    render() {
        let html_catalog_tehnic = '';
        CATALOG_TEHNIC.forEach(({ id, img, text, price }) => {
            html_catalog_tehnic += `
            <div class="tehnic_modal">
            <img class="tehnic_modal_img" src="${img}">
            <div class="tehnic_modal_text">${text}</div>
            <div class="tehnic_modal_pib">
                <div class="tehnic_modal_price">${price}</div>
                <input class="tehnic_modal_input" type="text" placeholder="1">
                <button class="tehnic_modal_button">Купить</button>
        </div>
        </div>
            `;
        });

        const html_tehnic = `
        <div class="all_content_tehnic" id="all_content_tehnic" style="display: none">
        ${html_catalog_tehnic}
        </div>
        `;

        ROOT_TEHNIC.innerHTML = html_tehnic;
    }
}
const tehnic_page = new tehnic();
tehnic_page.render();