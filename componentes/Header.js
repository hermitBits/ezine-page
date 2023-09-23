class Header extends HTMLElement {
    constructor() {
        super();
    }
  
    connectedCallback() {
        this.innerHTML = `
            <header> 
		        <menu-component></menu-component>
            </header>
        `;
    }
}

customElements.define('header-component', Header);