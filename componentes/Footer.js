class Footer extends HTMLElement {
    constructor() {
        super();
    }

    setStyle(){
        this.style.padding = 20;
        this.style.marginTop = 'auto';
        this.style.color = 'white';
        this.style.textAlign = 'right';
    }

    connectedCallback() {
        this.innerHTML = `
            <footer>
                <menu-component></menu-component>
                <hr>
                <p style="font-size:10px;">© Copyleft 2023, hermitBits.</p>
            </footer>
        `;

      this.setStyle();
    }
}
  
customElements.define('footer-component', Footer);