import {
    getItem as e,
    giveItem as t,
    itemQualities as n,
    itemRarity as i,
    renderItem as o
} from "/js/items.js?v=2.17";
import {
    createNotification as a
} from "/js/notifications.js?v=2.17";
import {
    addStat as s
} from "/js/achievements.js?v=2.17";
import {
    game as r
} from "/js/game.js?v=2.17";
import {
    showPage as l,
    user as f
} from "/script.js?v=2.17";
import p from "/js/select.js?v=2.17";
import {
    displayWinnings as c
} from "/js/winnings.js?v=2.17";
const m = p("#pages").q(".page[page=opencase]").q(".opencase-wheels");
let d = [];
const h = {
    float5: .09,
    float4: .24,
    float3: .28,
    float2: .24,
    float1: .15
};
export function openCaseNavigateAway() {
    for (let t = 0; t < d.length; t++) {
        const n = e(d[t]);
        a({
            message: q("span").q("span", "You opened a ").s("span", {
                text: n.name,
                style: {
                    color: i[n.rarity].color
                }
            }).s("span", "!").parentNode,
            icon: "case_winnings"
        })
    }
    d = []
}
let u = 0;
export function openCase(n, i, a) {
    if (e(n).type !== "case") return;
    let p = [];
    m.innerHTML = "";
    m.classList.remove("opening-finished");
    for (let l = 0; l < i; l++) {
        if (!(f.inventory.includes(n) && (!e(n).keyName || f.inventory.includes(e(n).keyName)))) continue;
        s("opened_cases");
        let i = m.q(".opencase-wheel");
        let l = i.q(".opencase-wheel-scroller");
        let c;
        let h = e(n);
        let y = {};
        for (let t = 0; t < h.content.items.length; t++) {
            if (e(h.content.items[t]).stattrak) continue;
            let n = e(h.content.items[t]).rarity;
            if (!y[n]) y[n] = [];
            y[n].push(h.content.items[t])
        }
        let g = Object.keys(y).map((e => parseInt(e))).sort();
        let w = -1;
        f.inventory.splice(f.inventory.indexOf(n), 1);
        if (e(n).keyName) f.inventory.splice(f.inventory.indexOf(e(n).keyName), 1);
        if (a) {
            const e = v(y, g);
            t(e.name);
            let n = e.price / Math.max(Math.log(e.price / 10), 10) / 3;
            f.xp += n;
            s("earned_xp", n);
            s("opened_rarities_" + e.rarity);
            p.push(e);
            continue
        }
        for (let e = 0; e < 100; e++) {
            const n = v(y, g);
            let i = o(n, {
                clickable: e === 85
            });
            l.appendChild(i);
            if (e === 85) {
                w = i.offsetLeft;
                i.classList.add("case-item-won");
                c = n.name;
                d.push(c);
                t(n.name);
                let e = n.price / Math.max(Math.log(n.price / 10), 10) / 3;
                u += e;
                s("opened_rarities_" + n.rarity)
            }
        }
        let x = (alwaysCompact || window.innerHeight <= 650 ? 103 : 153) * Math.random();
        let M = () => {
            if (!l) {
                window.removeEventListener("resize", M);
                return
            }
            l.style.transform = "translateX(-" + (w - i.offsetWidth / 2 + x) + "px)"
        };
        setTimeout(M, 100);
        window.addEventListener("resize", M);
        setTimeout((() => {
            l.classList.add("opening-finished");
            l.style.transition = "0s";
            f.xp += u;
            s("earned_xp", u);
            u = 0;
            d.splice(d.indexOf(c), 1);
            r.emit("update", true)
        }), 1e4)
    }
    if (a) {
        c({
            title: "Items from " + i + " containers!",
            returnBtn: {
                text: "Go to inventory",
                page: "inventory"
            },
            items: p,
            sortBy: "value"
        });
        r.emit("update", true)
    } else if (m.innerHTML !== "") l("opencase", false, false, true);
    r.once("showPage", (() => {
        f.xp += u;
        s("earned_xp", u);
        u = 0
    }))
}

function v(t, i) {
    let o;
    let a = Math.random();
    if (a < .8) o = Math.floor(Math.random() * 3);
    else if (a < .96) o = 3;
    else if (a < .98) o = 4;
    else if (a < .994) o = 5;
    else o = 6;
    while (!i.includes(o)) {
        if (o < i[0]) {
            o = i[0];
            break
        }
        o -= 1
    }
    let s = t[o][Math.floor(Math.random() * t[o].length)];
    let r = e(e(s).short);
    let l = false;
    if (Math.random() < .1 && r.stattrakAvailable) l = true;
    let f = false;
    if (Math.random() < .02 && r.souvenirAvailable) f = true;
    if (r.skin === "Vanilla") return e((l ? "StatTrak " : "") + r.short + " (Vanilla)");
    let p;
    a = Math.random();
    if (a < h.float5) p = 5;
    else if (a < h.float5 + h.float4) p = 4;
    else if (a < h.float5 + h.float4 + h.float3) p = 3;
    else if (a < h.float5 + h.float4 + h.float3 + h.float2) p = 2;
    else p = 1;
    let c = -1;
    while (!r.qualities.includes(p) && p <= 5) {
        if (p === 0) c = 1;
        p += c
    }
    if (p > 5 || p < 1) alert("Something went wrong, please report this on the discord! " + "QOFR:" + p + "&" + c + "I:" + r.name);
    let m = (l ? "StatTrak " : "") + (f ? "Souvenir " : "") + r.short + " (" + n[p] + ")";
    let d = e(m);
    if (d.isUnknown && l) {
        console.log("Couldn't find " + m + ", trying non-stattrak version.");
        d = e((f ? "Souvenir " : "") + r.short + " (" + n[p] + ")")
    }
    return d
}