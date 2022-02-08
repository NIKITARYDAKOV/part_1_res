class Pc {
    render() {
        let html_catalog_pc = '';
        CATALOG.forEach(({ id, img, text, price }) => {
            html_catalog_pc += `
            <img src="${img}">
            <div class="pc_content">${text}</div>
            <div>
                <div class="pc_price">${price}</div>
                <input type="text" placeholder="1">
                <button>Купить</button>
        </div>
            `;
        });

        const html_pc =`
        <div>
        ${html_catalog_pc}
        </div>
        `;

        ROOT_PC.innerHTML = html_pc;
    }
}
const pc_page = new Pc();
pc_page.render();