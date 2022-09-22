let e = [];
const i = document.body.q(".notifications.hide");
const t = i.q(".notifications-clear-all.hide", {
    text: "Clear All",
    onclick() {
        e.forEach((e => {
            i.removeChild(e.el)
        }));
        e = [];
        n()
    }
});
export function createNotification(t) {
    let o = q(".notification");
    let l = {
        el: e.length > 0 ? i.insertBefore(o, e[e.length - 1].el) : i.appendChild(o),
        content: t
    };
    if (t.message instanceof HTMLElement) l.el.q(".notification-message").appendChild(t.message);
    else {
        const o = l.el.q(".notification-message", {
            text: t.message,
            onclick: () => {
                if (t.onclick) {
                    e.splice(e.indexOf(l), 1);
                    i.removeChild(l.el);
                    n();
                    t.onclick()
                }
            }
        });
        if (t.useHTML) o.innerHTML = t.message
    }
    l.el.q(".notification-close", {
        onclick: () => {
            e.splice(e.indexOf(l), 1);
            i.removeChild(l.el);
            n()
        }
    });
    e.push(l);
    n()
}
export function pageBGNotification(e, i) {
    createNotification(e)
}

function n() {
    i.classList.toggle("hide", e.length === 0);
    t.classList.toggle("hide", e.length < 2)
}