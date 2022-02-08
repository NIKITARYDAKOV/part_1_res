class Pc {
    render() {
        let html_catalog_pc = '';
        CATALOG.forEach(({ id, img, text, price }) => {
            html_catalog_pc += `
            <div class="pc_modal">
            <img class="pc_modal_img" src="${img}">
            <div class="pc_modal_text">${text}</div>
            <div class="pc_modal_pib">
                <div class="pc_modal_price">${price}</div>
                <input class="pc_modal_input" type="text" placeholder="1">
                <button class="pc_modal_button">Купить</button>
        </div>
        </div>
            `;
        });

        const html_pc = `
        <div class="all_content_pc">
        ${html_catalog_pc}
        </div>
        `;

        ROOT_PC.innerHTML = html_pc;
    }
}
const pc_page = new Pc();
pc_page.render();