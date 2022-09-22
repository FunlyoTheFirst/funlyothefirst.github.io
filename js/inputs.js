class t extends HTMLElement {
    constructor() {
        super();
        this.addEventListener("click", (() => {
            this.state = this.state !== "on" ? "on" : "off"
        }))
    }
    update() {
        this.classList.toggle("vertical-switch-on", this.state === "on")
    }
    _state = "off";
    get state() {
        return this._state
    }
    set state(t) {
        this._state = t === "on" || t === true || t === 1 ? "on" : "off";
        this.update();
        this.dispatchEvent(new Event("change"))
    }
    set startState(t) {
        this._state = t === "on" || t === true || t === 1 ? "on" : "off";
        this.update()
    }
}
customElements.define("vertical-switch", t);