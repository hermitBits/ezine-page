class Menu extends HTMLElement {
    constructor() {
        super();
    }

    setStyle(){
        this.style.margin = '6px 6px 6px 6px';
        this.style.color = 'white';
        this.style.textAlign = 'center';
    }

    connectedCallback() {
        this.innerHTML = `
            <div>
                <menu-link-component href="./index.html" title="Início"></menu-link-component>
                <menu-link-component href="./sobre.html" title="Quem sou eu"></menu-link-component>
                <menu-link-component href="./contato.html" title="Contato"></menu-link-component>
                <menu-link-component href="./anotacoes.html" title="Algumas anotações"></menu-link-component>
            </div>
        `;
        this.setStyle();
    }
}

customElements.define('menu-component', Menu);