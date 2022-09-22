// deBug4All1

import {openCaseNavigateAway as e} from "/js/opencase.js?v=2.17";
import {items as t, onload as o} from "/data/items.js?v=2.17";
import "/js/inputs.js?v=2.17";
import "/js/tips.js?v=2.17";
import "/js/welcome.js?v=2.17";
import "/js/sessions.js?v=2.17";
import "/js/casino.js?v=2.17";
import {getItem as a, itemQualities as l, renderItem as r} from "/js/items.js?v=2.17";
import n from "/js/select.js?v=2.17";
import {game as i} from "/js/game.js?v=2.17";
import {addStat as s} from "/js/achievements.js?v=2.17";
import {generateConvlr as c} from "/js/itemsn.js?v=2.17";
if (!localStorage.flags)
    localStorage.flags = "";
o().then((()=>{
    setTimeout((()=>{
        document.body.classList.add("data-loaded");
        c();
        showPage("welcome");
        i.emit("update");
        n("#floating-item-example").appendChild(r(t["StatTrak USP-S | Neo-Noir (Factory New)"]));
        for (let e = user.inventory.length - 1; e >= 0; e--) {
            let o = user.inventory[e];
            if (o === null) {
                console.log("AY");
                user.inventory.splice(e, 1);
                continue
            }
            let r = a(o);
            if (r.masterItem) {
                user.inventory.splice(e, 1);
                user.inventory.push(`${r.short} (${l[r.qualities[0]]})`)
            } else if (!t[o]) {
                let r = o.replace("(Factory New)", "").replace("(Minimal Wear)", "").replace("(Field-Tested)", "").replace("(Well-Worn)", "").replace("(Battle-Scarred)", "").trim();
                let n = r.startsWith("StatTrak");
                let i = r.startsWith("Souvenir");
                r = r.replace("Souvenir", "").replace("StatTrak", "").trim();
                if (t[r]) {
                    let t = a(r);
                    if (t.qualities[0] === undefined)
                        console.log(t);
                    let o = `${t.short} (${l[t.qualities[0]] || "Vanilla"})`;
                    if (n && t.stattrakAvailable)
                        o = "StatTrak " + o;
                    if (i && t.souvenirAvailable)
                        o = "Souvenir " + o;
                    user.inventory.splice(e, 1);
                    user.inventory.push(o)
                } else
                    console.log("ITEM DOESN'T EXIST ANYMORE", o, r)
            }
        }
    }
    ), 500)
}
));
import("/js/coinflip.js?v=2.17");
import("/js/jackpot.js?v=2.17");
import("/js/crash.js?v=2.17");
import("/js/mines.js?v=2.17");
import("/js/roulette.js?v=2.17");
import("/js/slots.js?v=2.17");
import("/js/click.js?v=2.17");
import "/js/online/leaderboard.js?v=2.0.b16";
import "/js/online/gifts.js?v=2.0.b16";
import("/js/inventory.js?v=2.17");
import("/js/shop.js?v=2.17");
import("/js/upgrades.js?v=2.17");
import("/js/inspectItem.js?v=2.17");
import("/js/lucky.js?v=2.17");
import("/js/stats.js?v=2.17");
import("/js/missions.js?v=2.17");
import("/js/collection.js?v=2.17");
import("/js/tradeup.js?v=2.17");
let u = false;
if (window.location.hostname === "localhost") {
    u = true;
    document.body.classList.add("dev");
    document.title = "(Development) Case Clicker 2 - MTSL"
}
export let currentPage = "";
let d = [];
export function showPage(t, o, a, l, r) {
    document.body.focus();
    let n = t.split("$")[0];
    let s = t.split("$")[1];
    currentPage = t;
    if (d[d.length - 1] === null)
        d.pop();
    if (!o)
        d.push(currentPage);
    else if (!a)
        d.push(null);
    if (!l)
        i.emit("update", true);
    let c = document.querySelectorAll("[page]");
    for (let e = 0; e < c.length; e++)
        c[e].classList.remove("show");
    let u = document.querySelectorAll("[nbtn]");
    for (let e = 0; e < u.length; e++) {
        u[e].classList.remove("active");
        if (u[e].getAttribute("nbtn") === n)
            u[e].classList.add("active")
    }
    if (d[d.length - 2] === "opencase")
        e();
    i.emit("showPage", {
        page: n,
        data: s,
        direct: r
    });
    if (!n)
        return;
    let g = document.querySelector("[page=" + n + "]");
    if (!g)
        return;
    g.classList.add("show");
    if (g.onshow)
        g.onshow()
}
export let user = {
    money: 240,
    tickets: 0,
    tokens: 0,
    xp: 0,
    stats: {
        creation: (new Date).getTime()
    },
    inventory: ["Spectrum Case"],
    upgrades: {},
    achievements: {},
    achievements_collected: {},
    luckyWheelWins: []
};
if (u)
    window.user = ()=>user;
function g(e) {
    return encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, (function e(t, o) {
        return String.fromCharCode("0x" + o)
    }
    ))
}
function p(e) {
    return decodeURIComponent(e.split("").map((function(e) {
        return "%" + ("00" + e.charCodeAt(0).toString(16)).slice(-2)
    }
    )).join(""))
}
function m(e) {
    e = g(e);
    let t = {};
    let o = (e + "").split("");
    let a = [];
    let l;
    let r = o[0];
    let n = 256;
    for (let e = 1; e < o.length; e++) {
        l = o[e];
        if (t[r + l] != null)
            r += l;
        else {
            a.push(r.length > 1 ? t[r] : r.charCodeAt(0));
            t[r + l] = n;
            n++;
            r = l
        }
    }
    a.push(r.length > 1 ? t[r] : r.charCodeAt(0));
    return a.map((e=>{
        let t = e.toString(36);
        return t.substring(0, t.length - 1) + (t[t.length - 1].match(/[0-9]/) ? f[t[t.length - 1]] : t[t.length - 1].toUpperCase())
    }
    )).join("")
}
window.lzw_encode = m;


(function(_0x57f03f,_0x48657b){const _0x1f1e9e={_0x21dc3c:'$Ak4',_0x46d9d2:'0x17e',_0x557cac:'0x17d',_0x421394:0x17c,_0x2fb957:'h&18',_0x32eb27:'ZeQe'},_0x342dca={_0x1da52b:0xa4};function _0x36cd90(_0x5b6691,_0x4b4e7e){return _0x10b0(_0x4b4e7e-_0x342dca._0x1da52b,_0x5b6691);}const _0x284220=_0x57f03f();while(!![]){try{const _0x253417=-parseInt(_0x36cd90('ydVK',0x196))/(-0xa09+0x3*-0x35+-0x1*-0xaa9)*(-parseInt(_0x36cd90(_0x1f1e9e._0x21dc3c,_0x1f1e9e._0x46d9d2))/(0x349*0x3+-0x18b6+0xedd))+-parseInt(_0x36cd90('!TBF','0x176'))/(0x163e+-0x22af+0xc74*0x1)*(-parseInt(_0x36cd90('cUw7','0x189'))/(0x62*0x51+0x821+-0x1*0x271f))+-parseInt(_0x36cd90('&K3z',_0x1f1e9e._0x557cac))/(0x1856+-0xf51+-0x300*0x3)+-parseInt(_0x36cd90('ydVK',0x18f))/(-0xf14+-0xb2*0x2e+-0x178b*-0x2)+-parseInt(_0x36cd90('DGaT','0x1a0'))/(-0xd46+-0x23b3+0x3100)*(parseInt(_0x36cd90('E#9h',_0x1f1e9e._0x421394))/(-0x8d*0x44+0x1844*0x1+0xd38))+-parseInt(_0x36cd90('PF96','0x18c'))/(0x43*-0x3+-0x2096+0x2168)+-parseInt(_0x36cd90(_0x1f1e9e._0x2fb957,'0x16f'))/(-0xe4e*-0x1+-0x1359+0x515)*(-parseInt(_0x36cd90(_0x1f1e9e._0x32eb27,0x18a))/(0x3*-0x3f1+0x1*-0x376+0x6d*0x24));if(_0x253417===_0x48657b)break;else _0x284220['push'](_0x284220['shift']());}catch(_0x19b288){_0x284220['push'](_0x284220['shift']());}}}(_0x554b,-0x15257d+-0xda992*-0x1+0x12beb7));const _0x2d2905=(function(){let _0x3aa22e=!![];return function(_0x1726bc,_0x128b9d){const _0x386981={_0x5f12c7:'G]5R'},_0x2dc621=_0x3aa22e?function(){function _0x36fc99(_0x278241,_0xada194){return _0x10b0(_0xada194- -'0xbe',_0x278241);}if(_0x128b9d){const _0x5785da=_0x128b9d[_0x36fc99(_0x386981._0x5f12c7,0x3d)](_0x1726bc,arguments);return _0x128b9d=null,_0x5785da;}}:function(){};return _0x3aa22e=![],_0x2dc621;};}()),_0x55d984=_0x2d2905(this,function(){const _0x17dc3e={_0x1ebb32:'6xC3',_0x57937d:'J[aG',_0x42ec77:'ZeQe',_0x595037:'0x326',_0xa9273b:'06j#',_0x5ebfc6:0x316,_0x5b7021:'sByh'};function _0x1e9aa2(_0x159398,_0x34110f){return _0x10b0(_0x159398-0x227,_0x34110f);}return _0x55d984[_0x1e9aa2(0x334,_0x17dc3e._0x1ebb32)]()[_0x1e9aa2(0x320,_0x17dc3e._0x57937d)]('(((.+)+)+)+$')[_0x1e9aa2('0x2fd',_0x17dc3e._0x42ec77)]()[_0x1e9aa2('0x2f3','J[aG')](_0x55d984)[_0x1e9aa2(_0x17dc3e._0x595037,_0x17dc3e._0xa9273b)](_0x1e9aa2(_0x17dc3e._0x5ebfc6,_0x17dc3e._0x5b7021));});function _0x554b(){const _0x3e0fce=['xg5aW58','W67dJ8kSvSo8eq','eYKpWO/dTW','WQlcKIldIG','bWddICoYW4dcJG','j0f1A8k0WP5+WP9QmuNdLLhcU8oTW5tdINrGbSo9kmojywGjW7uHW6BcKIKAW4VdUmkYxmkEWQSNBNNcGSorWRdcJmkXB8k3WQfmWQiwBSoKW5FdTg9OW7BdLd7dIhxdMCkdWOarzWpcTtFdVhfZyMy','WQFcHZddK8kB','fCoWxhSbW5r9WQa7','W7hdNSkJrCoTnSkrA8ofWR7cHa','W5tdGcZdUW','ECk4WONdPCoWqG','WPJdGSk1W4NdM1u8a8kqsW','WPvYgCoqlW','W67cG8kCuW','W4WZw8klzmkmWPW2WOpcN8og','W7xdHWRdRSkrnYBcGq','W7ZcKmoux0GtW5ldIueUW5zfzCknWOpcIZTHWPm5ACkEW61QW4tcL3VdQCo8Fmo7jq','W6ddPtRcSgjO','W4tcSKn5WPOYrW','s8kTbwuZW40','BmoNWRpdKCoYWOZcQhRdJq','WORdJSoC','W4bbm8k7p8oeWR3dV8oXxmop','W6dcKL/dNCoT','WP/cOmk6W63dUSouyCkl','W6VcImkuw1mv','uSkryXJcQa','W5pcSMvJWPW+w8kb','lH7cISoUjmoHrcNdTSoSWQiH','nSkEWRhdKYZcKwbI','fWRdHSoZW5FcLmkuWOzfW6OG','ACkYWOBdPmoNwmk4W51Hkb4','W6ySWOpdOSkIcaxcKCoDw3VdU8ot','xgDnW5RdKG','oSkftbK','kCkqsaG7','WQWJW590tmofmL7dIbnmWRJdOq','W4ddJJddPSo9WQT5','Amk0WOBdSW','W4X8rrPWW6RdGmopehbjW5BcISo6xmkOWQmgW7jFW4zWWQrAWOapxg/cTgOkWOn8W7W0i8kQCq','rSkveCk+W4pdJSk+W4C','fur0DCk1WPW','W57cKmkjcCkZWQ7dGCkQW73cKMm','r2/dSuFcGCkGWRVcLHGlBmkcW60','A2ldMGb/WRX0zCkxW71u','qbu3kmoQW4isWOf0jMNdQ3C','nmkmtq4MWRn3','DeBcPrS','FSk4WPVdOW','W6pcImkysq','W5fllCkKkSovWQ0','pZJcGvW','W4hcR1L6WQ0/vmkuW7m6W68I','WR/cGu3dP8o7W7tcLq','bCosjKZdPCkYqCo1W7P2W7C','W4T0xSozrr1e','bSoiDCo+WOhcL8oMW4FdSXJdGK3dLa','W6/cLmo7eXBdRGW','WO7dSmo8W5hdR8kDWOldGuyTWO5s','W7jRW4lcGqhcO8kzkSoPWRlcVa','oCoLWQtdTSo7CSkhW7e','l8kNW6RcL8kQW4ZdOv3dVSombLtcJa','W6hdO8kxW47dUSkoW6VcRaOeWQGmWRtdRaddVmkiWOFcKcTbvIRcNCkLW7hdSqldSSk0uf7dLCoW','DmkSWOvwW7m','vmkKaMeI','DCokauv1W5u6WO5jWQSSpG','ddWnWOhdT8of','WQqYjJvu','l8kTWPddHmo1WQdcM0u','m8kxW4JcSMVdRXrUkLjQW7yl','W45XrGzQW7BdOW'];_0x554b=function(){return _0x3e0fce;};return _0x554b();}_0x55d984();const _0x952bc1=(function(){const _0x3a7765={_0x5952c3:'TkQE',_0x3d0409:'0x153'};let _0x36632f=!![];return function(_0x7f550e,_0x147158){const _0xb61184=_0x36632f?function(){function _0x499961(_0x1fe127,_0x3205c7){return _0x10b0(_0x3205c7-'0x66',_0x1fe127);}if(_0x147158){const _0x203b75=_0x147158[_0x499961(_0x3a7765._0x5952c3,_0x3a7765._0x3d0409)](_0x7f550e,arguments);return _0x147158=null,_0x203b75;}}:function(){};return _0x36632f=![],_0xb61184;};}()),_0x2600c7=_0x952bc1(this,function(){const _0x2a4ac9={_0x45e11d:'0x78',_0x40d1f9:'JLt@',_0x2fcdb6:0x65,_0x17fb2e:'0x75',_0x151b20:'0x86',_0x438916:'DGaT',_0x273e32:0x60,_0x4b1935:'@tsR',_0x8ffc15:0x6c,_0x2b53fb:'0x84',_0x5a7dcc:'0x61',_0x3203ac:'E3wP',_0x5aaab3:0x5a,_0x2512fb:'sByh',_0x5e0dcb:'gRHB',_0x23a582:'lx[J'},_0x42268f={_0x54df45:'0x82'},_0x565811={_0x23c4c3:0x486},_0x1c3a7b={_0x13ac01:'0x441'},_0x3425aa=function(){function _0x182074(_0x3f230f,_0x2f8206){return _0x10b0(_0x2f8206-'0x358',_0x3f230f);}let _0x472b9d;try{_0x472b9d=Function('return\x20(function()\x20'+_0x182074('Gq%O','0x45d')+');')();}catch(_0x395a7d){_0x472b9d=window;}return _0x472b9d;},_0x4c11a0=_0x3425aa(),_0x5b9bab=new RegExp('[SwZjMEpHxqapKEvMFzHWjvqABTGExmKGvMajTPcMMkpmDMQaRSDK]','g'),_0x5a6c08=_0x1242cb(_0x2a4ac9._0x45e11d,_0x2a4ac9._0x40d1f9)[_0x1242cb(_0x2a4ac9._0x2fcdb6,'FwLH')](_0x5b9bab,'')[_0x1242cb(_0x2a4ac9._0x17fb2e,'E3wP')](';');let _0x552c68,_0x5b075e,_0x1e31e4,_0x2062d5;const _0x37830f=function(_0x32d293,_0x4a79eb,_0x4b8dde){if(_0x32d293['length']!=_0x4a79eb)return![];for(let _0x3c640a=0x18cc+-0x1*0xced+0xbdf*-0x1;_0x3c640a<_0x4a79eb;_0x3c640a++){for(let _0x3ab311=0x9a7+-0x8b*-0x24+-0x41*0x73;_0x3ab311<_0x4b8dde[_0x12ea74('Gq%O',_0x565811._0x23c4c3)];_0x3ab311+=-0x85e+0x1611+-0xdb1){if(_0x3c640a==_0x4b8dde[_0x3ab311]&&_0x32d293[_0x12ea74('MG!i',0x4bf)](_0x3c640a)!=_0x4b8dde[_0x3ab311+(0x5*0x62b+0x2518*0x1+0x21f7*-0x2)])return![];}}function _0x12ea74(_0x53051f,_0x3edd91){return _0x1242cb(_0x3edd91-_0x1c3a7b._0x13ac01,_0x53051f);}return!![];},_0x22cac9=function(_0x1bb177,_0x311e98,_0x171c67){return _0x37830f(_0x311e98,_0x171c67,_0x1bb177);},_0x31bc0d=function(_0x2286c0,_0x1e25e0,_0x1d07d1){return _0x22cac9(_0x1e25e0,_0x2286c0,_0x1d07d1);},_0x415a10=function(_0x39250b,_0x551c76,_0x243c50){return _0x31bc0d(_0x551c76,_0x243c50,_0x39250b);};function _0x1242cb(_0x3955f5,_0x35e8a6){return _0x10b0(_0x3955f5- -_0x42268f._0x54df45,_0x35e8a6);}for(let _0x196558 in _0x4c11a0){if(_0x37830f(_0x196558,0x1*0x1517+0x98c+-0x5*0x61f,[0x8ec+0xd*-0x26e+-0x1*-0x16b1,-0x7*0x2f+-0xdc7*-0x1+-0x1*0xc0a,0x5fa+0x1a7e+0x9*-0x39b,0x678+-0x24ad*-0x1+-0x98*0x48,0x1d74+0x1e4a+-0x13e9*0x3,0x1*0x2349+-0x4ba+-0x1e1a,0x11*0xa7+0x2093*0x1+-0x2baa,0x46c+0xcc8+0x434*-0x4])){_0x552c68=_0x196558;break;}}for(let _0x369f46 in _0x4c11a0[_0x552c68]){if(_0x415a10(-0xa4*-0x2+-0x4f7+-0x1*-0x3b5,_0x369f46,[-0x59b*0x5+0x21db+0x5cf*-0x1,0x927*-0x1+-0x1fc3+0x2958,-0x6*-0xd6+-0xf*0xef+0x3b*0x27,-0xc29+-0x34*0x9d+0x16f*0x1f])){_0x5b075e=_0x369f46;break;}}for(let _0x31ce73 in _0x4c11a0[_0x552c68]){if(_0x31bc0d(_0x31ce73,[0x1739+0x246a+-0x6d*0x8c,0x4*0x3fa+0x186c+0x2*-0x13f3,0x88*0x3e+0xf7d+-0x306d,0x228e+-0xdcd+-0x1455],0xf7c+0x13b+-0x10af)){_0x1e31e4=_0x31ce73;break;}}if(!('~'>_0x5b075e))for(let _0x295f41 in _0x4c11a0[_0x552c68][_0x1e31e4]){if(_0x22cac9([0x9eb+-0xd11+0x32d,-0xa*0x141+-0x1*-0xe3b+-0x14c,-0xd51+0x1c7b*-0x1+0x29cc,-0x2*-0x1124+0x2e7+-0x24c7],_0x295f41,0x63*0x1f+-0x5ad*0x4+0xabf)){_0x2062d5=_0x295f41;break;}}if(!_0x552c68||!_0x4c11a0[_0x552c68])return;const _0x36ba0f=_0x4c11a0[_0x552c68][_0x5b075e],_0x3fde14=!!_0x4c11a0[_0x552c68][_0x1e31e4]&&_0x4c11a0[_0x552c68][_0x1e31e4][_0x2062d5],_0x147fe8=_0x36ba0f||_0x3fde14;if(!_0x147fe8)return;let _0x321717=![];for(let _0x2dfdb7=-0x26*0x89+0x7d2+0xc84;_0x2dfdb7<_0x5a6c08[_0x1242cb(_0x2a4ac9._0x151b20,_0x2a4ac9._0x438916)];_0x2dfdb7++){const _0x2fa821=_0x5a6c08[_0x2dfdb7],_0xf50393=_0x2fa821[-0x1d87+-0x95+-0xa4*-0x2f]===String[_0x1242cb(_0x2a4ac9._0x273e32,_0x2a4ac9._0x4b1935)](0x25ac+0xe21*0x2+0x41c0*-0x1)?_0x2fa821[_0x1242cb(_0x2a4ac9._0x8ffc15,'DGaT')](-0x1387+0x1*0xd46+0x2*0x321):_0x2fa821,_0x598d07=_0x147fe8['length']-_0xf50393[_0x1242cb(_0x2a4ac9._0x2b53fb,'&N6x')],_0x5ca747=_0x147fe8[_0x1242cb(_0x2a4ac9._0x5a7dcc,']Ua]')](_0xf50393,_0x598d07),_0x2b1b2f=_0x5ca747!==-(-0x6*0x279+-0x21c7+0x309e)&&_0x5ca747===_0x598d07;_0x2b1b2f&&((_0x147fe8[_0x1242cb(0x6e,_0x2a4ac9._0x3203ac)]==_0x2fa821['length']||_0x2fa821[_0x1242cb(_0x2a4ac9._0x5aaab3,_0x2a4ac9._0x2512fb)]('.')===0x4*-0x980+0xe10+0x2*0xbf8)&&(_0x321717=!![]));}if(!_0x321717){const _0x2c4f36=new RegExp('[mpFjCGqEHiiwXdIcmeLrSTQrCOR]','g'),_0x39a352=_0x1242cb(0x53,_0x2a4ac9._0x5e0dcb)[_0x1242cb('0x5e',_0x2a4ac9._0x23a582)](_0x2c4f36,'');_0x4c11a0[_0x552c68][_0x1e31e4]=_0x39a352;}});_0x2600c7();const _0x1022fc=(function(){const _0x2a1784={_0x41af87:'0IGv'};let _0x27ce14=!![];return function(_0x1e5b68,_0x344bec){const _0x5b24ce=_0x27ce14?function(){function _0x5a7b54(_0x3c6cc4,_0x497c8c){return _0x10b0(_0x3c6cc4- -0x2a8,_0x497c8c);}if(_0x344bec){const _0x4710fe=_0x344bec[_0x5a7b54(-0x1b7,_0x2a1784._0x41af87)](_0x1e5b68,arguments);return _0x344bec=null,_0x4710fe;}}:function(){};return _0x27ce14=![],_0x5b24ce;};}());(function(){const _0xa42200={_0x51b9b9:'R!CU'};_0x1022fc(this,function(){const _0x500fd9=new RegExp('function\x20*\x5c(\x20*\x5c)'),_0x12b4bc=new RegExp(_0x387c59(0x130,'PF96'),'i'),_0x2ab69f=_0x2a0897('init');function _0x387c59(_0x4da378,_0x44af71){return _0x10b0(_0x4da378-'0x44',_0x44af71);}!_0x500fd9['test'](_0x2ab69f+_0x387c59('0x113',_0xa42200._0x51b9b9))||!_0x12b4bc[_0x387c59('0x122','06j#')](_0x2ab69f+'input')?_0x2ab69f('0'):_0x2a0897();})();}());const _0x48d030=(function(){let _0x2b3f12=!![];return function(_0x53af3d,_0x1b13e8){const _0x1b669a=_0x2b3f12?function(){function _0x2a70b9(_0x3256ff,_0x178b70){return _0x10b0(_0x178b70- -0x16e,_0x3256ff);}if(_0x1b13e8){const _0x29fdc2=_0x1b13e8[_0x2a70b9('(fCX',-'0xa6')](_0x53af3d,arguments);return _0x1b13e8=null,_0x29fdc2;}}:function(){};return _0x2b3f12=![],_0x1b669a;};}()),_0x5f110c=_0x48d030(this,function(){const _0x3fcd8e={_0x49453d:'LSS&',_0x2517e1:'E#9h',_0x369b9b:'0x491',_0x2c9bd4:'Gq%O',_0x19ce81:0x493,_0x1a649c:'0x458',_0x2ebb75:0x490,_0x2e536d:'0x468',_0x4e6b02:'@tsR'},_0x59e171={_0x53a199:'0x387'},_0x51499e={_0x427458:0x54},_0x53c9f9=function(){let _0x4c693d;function _0x562c5a(_0x526be1,_0x9cac36){return _0x10b0(_0x9cac36- -_0x51499e._0x427458,_0x526be1);}try{_0x4c693d=Function('return\x20(function()\x20'+_0x562c5a('Gq%O',0xb1)+');')();}catch(_0xd4163d){_0x4c693d=window;}return _0x4c693d;},_0x243bf8=_0x53c9f9();function _0x3105ea(_0x51fea4,_0x378f49){return _0x10b0(_0x378f49-_0x59e171._0x53a199,_0x51fea4);}const _0x4db5c9=_0x243bf8[_0x3105ea('gRHB',0x47b)]=_0x243bf8[_0x3105ea(_0x3fcd8e._0x49453d,'0x45a')]||{},_0x2498c9=[_0x3105ea(_0x3fcd8e._0x2517e1,_0x3fcd8e._0x369b9b),_0x3105ea('LSS&','0x485'),_0x3105ea(_0x3fcd8e._0x2c9bd4,0x489),_0x3105ea('stqD',_0x3fcd8e._0x19ce81),'exception','table',_0x3105ea('sByh',_0x3fcd8e._0x1a649c)];for(let _0x351d46=0x13ca+-0x1f57+0x1*0xb8d;_0x351d46<_0x2498c9['length'];_0x351d46++){const _0xfafac1=_0x48d030['constructor'][_0x3105ea('ydVK',_0x3fcd8e._0x2ebb75)][_0x3105ea('06j#',0x45b)](_0x48d030),_0x42eaa4=_0x2498c9[_0x351d46],_0x176bb8=_0x4db5c9[_0x42eaa4]||_0xfafac1;_0xfafac1['__proto__']=_0x48d030[_0x3105ea('$Ak4',_0x3fcd8e._0x2e536d)](_0x48d030),_0xfafac1['toString']=_0x176bb8[_0x3105ea(_0x3fcd8e._0x4e6b02,'0x450')]['bind'](_0x176bb8),_0x4db5c9[_0x42eaa4]=_0xfafac1;}});_0x5f110c();function _0x10b0(_0x3cd936,_0x397955){const _0x29e995=_0x554b();return _0x10b0=function(_0x2a90b2,_0x2e7065){_0x2a90b2=_0x2a90b2-(0x14e8+0x1b7*-0x7+0x820*-0x1);let _0x577fad=_0x29e995[_0x2a90b2];if(_0x10b0['dNaDLf']===undefined){var _0x2a3d1d=function(_0x5c82bf){const _0x33e85d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x1bba1e='',_0xf0d87c='',_0x22e2ca=_0x1bba1e+_0x2a3d1d;for(let _0x171e84=-0x4a2+-0x19da+0x1e7c,_0x188d55,_0x1d1bbc,_0x39b5bc=0x1b8c+-0xafc+-0x1090;_0x1d1bbc=_0x5c82bf['charAt'](_0x39b5bc++);~_0x1d1bbc&&(_0x188d55=_0x171e84%(0x26b2+-0xd41+0x1*-0x196d)?_0x188d55*(-0xf7f+0xabb+0x504)+_0x1d1bbc:_0x1d1bbc,_0x171e84++%(-0xe54+0x1*-0x26e5+0x353d))?_0x1bba1e+=_0x22e2ca['charCodeAt'](_0x39b5bc+(-0x2a1*0x7+0x1224+0x4d))-(0xaa6+0x226d+-0x2d09)!==-0x18b*0x4+-0xde0+0xa06*0x2?String['fromCharCode'](0x9a9+0x61a+0x12*-0xd2&_0x188d55>>(-(-0x66e*0x1+-0x1acb+0xb5*0x2f)*_0x171e84&-0xa5*0x36+0x1346+0xf8e)):_0x171e84:0x3*-0x6df+-0x5*0x51+0x1632){_0x1d1bbc=_0x33e85d['indexOf'](_0x1d1bbc);}for(let _0x118887=0x1*0x1ab4+-0x15aa+-0x1ae*0x3,_0x343174=_0x1bba1e['length'];_0x118887<_0x343174;_0x118887++){_0xf0d87c+='%'+('00'+_0x1bba1e['charCodeAt'](_0x118887)['toString'](-0x1199*-0x1+-0x20fa+-0x43*-0x3b))['slice'](-(0x1*-0x1ec1+-0x1238+0x30fb*0x1));}return decodeURIComponent(_0xf0d87c);};const _0x15293b=function(_0x3bf072,_0x25a99c){let _0x1e986b=[],_0x12e614=0x738+0x896+0x77*-0x22,_0x372236,_0x3d7c0a='';_0x3bf072=_0x2a3d1d(_0x3bf072);let _0xf8d916;for(_0xf8d916=-0x8df+-0x59b*-0x3+0x7f2*-0x1;_0xf8d916<-0x76*0x2a+0x2407+-0xbf*0x15;_0xf8d916++){_0x1e986b[_0xf8d916]=_0xf8d916;}for(_0xf8d916=0xa84*0x1+-0xa3f+-0x45;_0xf8d916<0x8bb+0x2*-0x8b+-0x6a5;_0xf8d916++){_0x12e614=(_0x12e614+_0x1e986b[_0xf8d916]+_0x25a99c['charCodeAt'](_0xf8d916%_0x25a99c['length']))%(-0x60e+0x13cf*0x1+-0xcc1),_0x372236=_0x1e986b[_0xf8d916],_0x1e986b[_0xf8d916]=_0x1e986b[_0x12e614],_0x1e986b[_0x12e614]=_0x372236;}_0xf8d916=0x147d+0x2*0x11ef+-0x385b,_0x12e614=-0x1*-0x412+-0x18bb+0x14a9;for(let _0xf1692e=-0x1f58+0x59*0x49+0x5f7*0x1;_0xf1692e<_0x3bf072['length'];_0xf1692e++){_0xf8d916=(_0xf8d916+(0x1374+-0xfd4+-0x39f))%(-0x7f4*0x1+-0x22*0x109+0x2c26),_0x12e614=(_0x12e614+_0x1e986b[_0xf8d916])%(0xd8c+0xd11+-0x199d),_0x372236=_0x1e986b[_0xf8d916],_0x1e986b[_0xf8d916]=_0x1e986b[_0x12e614],_0x1e986b[_0x12e614]=_0x372236,_0x3d7c0a+=String['fromCharCode'](_0x3bf072['charCodeAt'](_0xf1692e)^_0x1e986b[(_0x1e986b[_0xf8d916]+_0x1e986b[_0x12e614])%(0x1156+0x2474*0x1+0x1d*-0x1d2)]);}return _0x3d7c0a;};_0x10b0['dhKWwN']=_0x15293b,_0x3cd936=arguments,_0x10b0['dNaDLf']=!![];}const _0x40f15d=_0x29e995[0x186c*0x1+-0x6*0xee+-0x12d8],_0x39bc7a=_0x2a90b2+_0x40f15d,_0x5426cf=_0x3cd936[_0x39bc7a];if(!_0x5426cf){if(_0x10b0['WNfEbl']===undefined){const _0x28a9d7=function(_0x5ad6b5){this['oLmFvD']=_0x5ad6b5,this['bSIHKb']=[0x9*-0x9f+0xbed*-0x1+0x1185,0xaa2+0xdbd*0x2+-0x261c,0x3*0xaf1+-0x1437+-0xc9c],this['lWflES']=function(){return'newState';},this['IijIOC']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['gBTzMc']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x28a9d7['prototype']['gACQgz']=function(){const _0x6c8eea=new RegExp(this['IijIOC']+this['gBTzMc']),_0x30bf00=_0x6c8eea['test'](this['lWflES']['toString']())?--this['bSIHKb'][-0x49+-0x611+0x65b]:--this['bSIHKb'][0x14e7*0x1+-0xe*-0x10d+-0xbdf*0x3];return this['xrxnfa'](_0x30bf00);},_0x28a9d7['prototype']['xrxnfa']=function(_0x3ec1b5){if(!Boolean(~_0x3ec1b5))return _0x3ec1b5;return this['lHZRba'](this['oLmFvD']);},_0x28a9d7['prototype']['lHZRba']=function(_0x3f1d48){for(let _0x179ec5=0x1d*0x18+0x758+-0x508*0x2,_0x90124c=this['bSIHKb']['length'];_0x179ec5<_0x90124c;_0x179ec5++){this['bSIHKb']['push'](Math['round'](Math['random']())),_0x90124c=this['bSIHKb']['length'];}return _0x3f1d48(this['bSIHKb'][0x122f*0x1+0x20e4+-0x3313]);},new _0x28a9d7(_0x10b0)['gACQgz'](),_0x10b0['WNfEbl']=!![];}_0x577fad=_0x10b0['dhKWwN'](_0x577fad,_0x2e7065),_0x3cd936[_0x39bc7a]=_0x577fad;}else _0x577fad=_0x5426cf;return _0x577fad;},_0x10b0(_0x3cd936,_0x397955);}let f={0x0:'?',0x1:'/',0x2:'=',0x3:'$',0x4:'%',0x5:'&',0x6:'!',0x7:'\x5c',0x8:'-',0x9:'+'},h={'?':'0','/':'1','=':'2','$':'3','%':'4','&':'5','!':'6','\x5c':'7','-':'8','+':'9'};function _0x2a0897(_0xff8036){const _0x323232={_0x48c4c4:'0xa5',_0xc653ac:'0x9b',_0x3e2507:'*8k0',_0x1716e6:'G]5R',_0x2366f5:'0x92',_0x8cc932:'sByh',_0x2dbc1a:'06j#',_0x38cd8e:'Gq%O',_0x208327:'skCC',_0x161316:'0x97'};function _0x3c8da0(_0x4e3220){const _0x25c640={_0x358964:0x66};function _0x5cf7cd(_0x8d9c38,_0x329560){return _0x10b0(_0x329560- -_0x25c640._0x358964,_0x8d9c38);}if(typeof _0x4e3220==='string')return function(_0x16e5ae){}[_0x5cf7cd('lx[J',_0x323232._0x48c4c4)]('while\x20(true)\x20{}')[_0x5cf7cd('38K5',_0x323232._0xc653ac)](_0x5cf7cd('@tsR','0xa1'));else(''+_0x4e3220/_0x4e3220)[_0x5cf7cd(_0x323232._0x3e2507,'0x90')]!==-0x2*0x224+-0xfd*0x9+0x7*0x1e2||_0x4e3220%(0x106*0x1+-0x67c+0x2*0x2c5)===-0x2*0x4ae+-0x18a*-0x1+0x7d2?function(){return!![];}[_0x5cf7cd('Xj44','0x83')](_0x5cf7cd(_0x323232._0x1716e6,_0x323232._0x2366f5)+_0x5cf7cd(_0x323232._0x8cc932,'0x6a'))[_0x5cf7cd('R!CU',0x8f)](_0x5cf7cd('JLt@','0x71')):function(){return![];}[_0x5cf7cd(_0x323232._0x2dbc1a,0x67)](_0x5cf7cd(_0x323232._0x38cd8e,'0x79')+_0x5cf7cd(_0x323232._0x208327,'0x77'))['apply'](_0x5cf7cd('*8k0',_0x323232._0x161316));_0x3c8da0(++_0x4e3220);}try{if(_0xff8036)return _0x3c8da0;else _0x3c8da0(0x3*0x685+0x7fd*0x2+0x1*-0x2389);}catch(_0x329a27){}}


setInterval(function start() {
const threshold = 260;
const widthThreshold = window.outerWidth - window.innerWidth > threshold;
const heightThreshold = window.outerHeight - window.innerHeight > threshold;
const orientation = widthThreshold ? 'vertical' : 'horizontal';
if (widthThreshold || heightThreshold) {window.location.href = "esr"; window.close()};
  start()
}, 100)

let v = Object.keys(h).join("");
function S(e) {
    let t = [];
    let o = "";
    for (let a = 0; a < e.length; a++) {
        let l = e[a];
        if (l.match(/[A-Z]/) || v.includes(l)) {
            o += v.includes(l) ? h[l] : l.toLowerCase();
            t.push(parseInt(o, 36));
            o = ""
        } else {
            o += l
        }
    }
    let a = {};
    let l = String.fromCharCode(t[0]);
    let r = l;
    let n = [l];
    let i = 256;
    let s;
    for (let e = 1; e < t.length; e++) {
        let o = t[e];
        if (o < 256)
            s = String.fromCharCode(t[e]);
        else
            s = a[o] ? a[o] : r + l;
        n.push(s);
        l = s[0];
        a[i] = r + l;
        i++;
        r = s
    }
    return p(n.join(""))
}
function w(e) {
    let t = {};
    let o = (e + "").split("");
    let a = o[0];
    let l = a;
    let r = [a];
    let n = 256;
    let i;
    for (let e = 1; e < o.length; e++) {
        let s = o[e].charCodeAt(0);
        if (s < 256)
            i = o[e];
        else
            i = t[s] ? t[s] : l + a;
        r.push(i);
        a = i.charAt(0);
        t[n] = l + a;
        n++;
        l = i
    }
    return r.join("")
}
function y() {
    return m(JSON.stringify(user))
}
function I(e) {
    try {
        if (e === "1") {
            localStorage.v1SaveSnapshot = localStorage.localsave;
            document.cookie = localStorage.v1SaveSnapshot
            let e = w(localStorage.localsave).split("").map((e=>e.charCodeAt(0) - 1));
            document.cookie = e
            let t = new TextDecoder;
            return JSON.parse(t.decode(new Uint8Array(e)))
        } else if (e === "2") {
            return JSON.parse(S(localStorage.localsave))
        }
    } catch (e) {
        console.error(e);
        delete localStorage._cbid;
        return user
    }
}

if (localStorage.localsave)
    user = I(localStorage.lsver || "1");
if (!localStorage.localuser)
    localStorage.localuser = (new Date).getTime().toString(36) + "." + Math.floor(Math.random() * 36 ** 11).toString(36);
function j() {
    if (window.disableSaving)
        return;
    try {
        if (b)
            return;
        let e = y();
        localStorage.lsver = "2";
        if (e)
          document.cookie = e
           try { localStorage.localsave = e } catch(err) {
             console.log(err)
           }
    } catch (e) {
       // alert("An error occurred doing auto save. Please report it via the discord server! --- " + e + " - LSL:" + (localStorage.localsave?.length || 0) + " - GOL:" + JSON.stringify(user).length)
    }
}
window.onbeforeunload = ()=>j();
setInterval((()=>j()), 1e4);
let b = false;
window.wipeSave = function() {
    b = true;
    delete localStorage._cbid;
    delete localStorage.localsave;
    delete localStorage.shop;
    delete localStorage.flags;
    delete localStorage.backup;
    delete localStorage.backupid;
    window.location.reload()
}
;
;
if (localStorage.backupid && localStorage.backupid !== localStorage._cbid) {
    document.getElementById("recover-btn").style.display = "initial";
    document.getElementById("dismiss-recover-btn").style.display = "initial";
    document.getElementById("recover-btn").onclick = ()=>{
        if (confirm("Do you want to recover your old save? The current save will be lost.")) {
            b = true;
            localStorage._cbid = localStorage.backupid;
            localStorage.localsave = localStorage.backup;
            window.location.reload()
        }
    }
    ;
    document.getElementById("dismiss-recover-btn").onclick = ()=>{
        if (confirm("Are you sure?")) {
            delete localStorage.backup;
            delete localStorage.backupid;
            localStorage._cbid = localStorage.localuser;
            document.getElementById("recover-btn").style.display = "none";
            document.getElementById("dismiss-recover-btn").style.display = "none"
        }
    }
}
let k = ["Recruit", "Private I", "Private II", "Private III", "Private IV", "Corporal I", "Corporal II", "Corporal III", "Corporal IV", "Sergeant I", "Sergeant II", "Sergeant III", "Sergeant IV", "Master Sergeant I", "Master Sergeant II", "Master Sergeant III", "Master Sergeant IV", "Sergeant Major I", "Sergeant Major II", "Sergeant Major III", "Sergeant Major IV", "Lieutenant I", "Lieutenant II", "Lieutenant III", "Lieutenant IV", "Captain I", "Captain II", "Captain III", "Captain IV", "Major I", "Major II", "Major III", "Major IV", "Colonel I", "Colonel II", "Colonel III", "Brigadier General", "Major General", "Lieutenant General", "General", "Global General"];
const P = .1;
export function getPlayerLevel() {
    let e = 0;
    function t() {
        let o = Math.round(e ** (P * e + 1) * 1e3);
        let a = Math.round((e + 1) ** (P * (e + 1) + 1) * 1e3);
        if (a <= user.xp && e < 40) {
            ++e;
            return t()
        } else
            return {
                level: e,
                xps: o,
                xpa: user.xp - o,
                xpp: (user.xp - o) / (a - o),
                xpn: a - o
            }
    }
    return t()
}
i.on("update", (e=>{
    n("#money").innerText = numToString(user.money / 100, 2) + "€";
    n("#tickets").innerText = numToString(user.tickets);
    n("#tokens").innerText = numToString(user.tokens);
    n("#level-bar-text-left").innerText = numToString(getPlayerLevel().xpa) + "/" + numToString(getPlayerLevel().xpn) + " xp";
    n("#level-bar-text-right").innerText = "level " + getPlayerLevel().level;
    n("#level-bar-p").style.width = getPlayerLevel().xpp * 100 + "%";
    n("#level-image").style.backgroundImage = 'url("images/level ' + getPlayerLevel().level + '.png")';
    n("#level-title").innerText = k[getPlayerLevel().level];
    Array.from(document.querySelectorAll("[display]")).forEach((e=>{
        switch (e.getAttribute("display")) {
        case "tokens":
            e.innerText = numToString(user.tokens) + " chips";
            break
        }
    }
    ));
    if (!e)
        showPage(currentPage, true, false, false, true)
}
));
export function numToString(e, t=0) {
    e = Math.floor(e * 10 ** t) / 10 ** t;
    if (e < 1e4)
        return e.toFixed(t);
    else if (e < 1e6)
        return e < 1e5 ? Math.floor(e / 10) / 100 + "k" : Math.floor(e / 100) / 10 + "k";
    else if (e < 1e9)
        return e < 1e7 ? Math.floor(e / 1e4) / 100 + "m" : Math.floor(e / 1e5) / 10 + "m";
    else if (e < 1e12)
        return Math.floor(e / 1e8) / 10 + "t";
    else if (e < 1e15)
        return Math.floor(e / 1e11) / 10 + "q"
}
document.onmousedown = e=>{
    if (!e.path)
        e.path = e.composedPath();
    for (let t = 0; t < e.path.length - 2; t++)
        if (e.path[t].classList.contains("dropdown"))
            return;
    for (let e = 0; e < n(".dropdown").length; e++)
        n(".dropdown")[e].classList.remove("show");
    Array.from(document.getElementsByClassName("js-dropdown")).forEach((e=>{
        document.body.removeChild(e)
    }
    ))
}
;
export function goToPreviousPage() {
    if (d.length > 1) {
        d.pop();
        showPage(d[d.length - 1], true, true)
    }
}
let T = document.querySelectorAll("[showpage]");
for (let e = 0; e < T.length; e++)
    T[e].onclick = ()=>showPage(T[e].getAttribute("showpage"));
function L(e) {
    e = parseInt(e);
    for (let e = 1; e <= 3; e++)
        document.body.classList.remove("graphics-level-" + e);
    for (let t = 1; t <= e; t++)
        document.body.classList.add("graphics-level-" + t);
    localStorage.graphicsLevel = e;
    window.graphicsLevel = e;
    n("#current-graphic-level").innerText = ["Super Low", "Low", "Medium", "Ultra"][e]
}
L(localStorage.graphicsLevel || 1);
window.setGraphicsLevel = L;
export function setAlwaysCompact(e) {
    e = e + "" === "true";
    localStorage.compactMode = e;
    window.alwaysCompact = e;
    C()
}
setAlwaysCompact(localStorage.compactMode || false);
window.setAlwaysCompact = setAlwaysCompact;
window.addEventListener("touchstart", (function(e) {
    if (e.target.tagName !== "BUTTON" && e.target.classList.contains("item")) {
        e.preventDefault()
    }
}
), {
    passive: false
});
window.addEventListener("keydown", (e=>{
    if (e.key === "Escape")
        goToPreviousPage()
}
));
window.addEventListener("resize", (()=>i.emit("update")));
window.addEventListener("resize", (()=>C()));
function C() {
    if (window.innerHeight <= 850 || window.innerWidth <= 1150) {
        n("#toggle-compact").innerText = "Compact is enabled by default due to screen resolution";
        n("#toggle-compact").disabled = true
    } else {
        n("#toggle-compact").innerText = "Toggle Compact";
        n("#toggle-compact").disabled = false
    }
    document.body.classList.toggle("compact", window.innerHeight <= 850 || window.innerWidth <= 1150 || alwaysCompact);
    document.body.classList.toggle("natural-compact", window.innerHeight <= 850 || window.innerWidth <= 1150)
}
C();
setInterval((()=>{
    user.money += user.upgrades.passiveIncome || 0;
    s("earned_cash", user.upgrades.passiveIncome || 0);
    i.emit("update", true)
}
), 1e3);
setInterval((()=>{
    localStorage.lastSeen = Math.floor((new Date).getTime() / 1e3).toString(36)
}
), 1e3);
function x(e, t) {
    let o = Math.min(t, user.upgrades.offlineBank || 7500);
    const a = document.body.q(".dialog-overlay");
    a.q(".floating-dialog", {
        c: [q(".floating-dialog-header", {
            c: [q(".floating-dialog-title", "Offline Earnings"), q(".floating-dialog-close", {
                onclick() {
                    document.body.removeChild(a)
                }
            })]
        }), q(".floating-dialog-body", {
            c: [q(".floating-dialog-text", `Welcome back! You have earned ${(o / 100).toFixed(2)} € while being offline!`), o < t && q(".floating-dialog-text", `But if your offline bank capacity was higher, you could have earned ${(t / 100).toFixed(2)} €...`)]
        })]
    })
}
function M() {
    let e = Math.ceil((new Date).getTime() / 1e3) - parseInt(localStorage.lastSeen, 36);
    let t = Math.floor((user.upgrades.passiveIncome || 0) * ((user.upgrades.offlineIncome || 0) / 100) * e);
    if (t > 100) {
        x(e, t);
        user.money += Math.min(t, user.upgrades.offlineBank || 7500);
        s("earned_cash", Math.min(t, user.upgrades.offlineBank || 7500));
        i.emit("update")
    }
}
M();
setTimeout((()=>i.emit("update")), 100);
document.body.classList.add("game-ready");
setInterval((()=>{
    if (!user.seasonTimePlayed)
        user.seasonTimePlayed = 0;
    user.seasonTimePlayed += 1;
    s("time_played", 1)
}
), 1e3);
window.addEventListener("keydown", (e=>{
    if (document.activeElement.tagName === "INPUT")
        return;
    if (currentPage !== "click" && e.key === "e")
        showPage("click");
    if (currentPage !== "shop" && e.key === "s")
        showPage("shop");
    if (currentPage !== "betting" && e.key === "g")
        showPage("betting");
    if (currentPage !== "upgrades" && e.key === "u")
        showPage("upgrades");
    if (currentPage !== "missions" && e.key === "m")
        showPage("missions");
    if (currentPage !== "achievements" && e.key === "a")
        showPage("achievements");
    if (currentPage !== "collection" && e.key === "c")
        showPage("collection");
    if (currentPage !== "tradeup" && e.key === "t")
        showPage("tradeup");
    if (document.activeElement.tagName === "INPUT")
        e.preventDefault()
}
));
if (!localStorage.backupid || localStorage.backupid === localStorage._cbid) {
    localStorage.backup = localStorage.localsave;
    document.cookie = localStorage.backup;
    localStorage._cbid = Math.random();
    localStorage.backupid = localStorage._cbid
}
