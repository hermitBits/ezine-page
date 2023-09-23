class Banner extends HTMLElement {
    constructor() {
        super();
    }

    setStyle(){
        this.style.backgroundColor = 'black';
        this.style.color = 'white';
        this.style.textAlign = 'center';
        this.h1.style.borderBottom = '3px solid white';
    }

    connectedCallback() {
        this.innerHTML = `
            <div class="banner">
                <h1>© H E R M I T B I T S </h1>
            </div>
        `;

        this.h1 = this.getElementsByTagName('h1')[0];

        this.setStyle();
    }
}

customElements.define('banner-component', Banner);