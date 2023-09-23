class MenuLink extends HTMLElement {
    constructor() {
        super();
    }

    setStyle(){
        this.style.color = 'white';

        this.a.style.color = 'white';
        this.a.style.textDecoration = 'none';
    }

    ativarUnderline() {
        this.a.style.textDecoration = 'underline';
    }

    desativarUnderline() {
        this.a.style.textDecoration = 'none';
    }

    connectedCallback() {
        this.innerHTML = `
            [ <a href="${this.getAttribute('href')}" title="${this.getAttribute('title')}">${this.getAttribute('title')}</a> ]
        `;

        this.a = this.getElementsByTagName('a')[0];

        this.setStyle();

        this.addEventListener('mouseover', this.ativarUnderline);
        this.addEventListener('mouseout', this.desativarUnderline);
    }
}
  
customElements.define('menu-link-component', MenuLink);