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


function _0x5a44(){const _0x228002=['W6eFD1hdSW','t8owgbldRmkd','W5PrW4yrfSo6cq','W58qpmo7WPddSCkwggDcWRq','qe3cOgaMnfddISkR','W5BcI8kvW5ny','WPvkh2XxW5G','AI/dRmkfaq','wCoKmdRdNSkPF8o9u8oh','W7u2WP14b8k8pLVdTMW','bfVcLmk1gmkhF2Whfa','smoIW7/cGSo9vYnz','nxu2WOBcLa','WP3dSmkUW5VcRq','imoqWQpcI8oq','cSojW5r4wt3dHeSwWRKNDSkO','W4DqW7eahmoCaCkq','v8ovWQrXzCkR','xCouWPhdOd4','q8olW48MW7G','umowfWFdU8kd','l8oJjxGXCG','W5uegmkyW6W','W4NcQKT3','FfnBWP3dIG','ASo7WQr9Dq','gfWDWPZcOG','ySogDCkivSoSW653WRZdM8oQzmoH','W4hdI8otW4eU','a8oOuuu','WRpdGxPFkSo5W7LHWQG','WO9nzmkM','BmofWRLowa','tKD3WRNdHG','W7NdSmowW4NdMSknW67cK1KS','WQDuW57cIYG','W7VdGK1D','WQFdPmk4W53cMa','BrNdJmk1oa','WRRdImkVbfm','zCojWPJdIXO','imotWOdcHCo3','k8k/mmoCba','W6r9lCkgWPS','tfzgW5ZdGSofWQZcGK7cIq','WRvCj0PZ','nKWKWRZcGW','W4OrshxdRvdcHSo6qW','nSkxk8oFe8kX','vmoxW5OTW58','WO7cHLhdQ8o8','W6BcUCkcW5TJ','W5nyd8k8WQO','W5FdVmoJW4O','c1BcM8kGl8ka','WQtcRhNdNmoEwmoqW6tcP8oF','fSolvfFdMtuJW7lcTrW','WQddGSkpW7pcJW','WOldKCkrW5dcLrC','jr8fk8oW','n8oQrG','WPhcQfxdQSo4ESo9W6pcHCoH','E13cP0qo','dg7cNmomEd7dQ8kXt1ZcKSkgW70','e05Pj8o2','W7VcNSkvW5BdHa','W4WSo8kHW40','W7FdNLLDFa','A8oYWP7dLdK','W4JcHSoaW6tdI8oYnaTEW6m','CSk3CY91lIfDvxpdK1n3W40','W6ddKxpcQCoD','k8kCf8oHeW','WOrkBSkNW5JdTSka','sSozWOxdGa','W6TGWRVdLCoLrue','W6mRsNpdQ0FcImoj','ymorpXBdOG','xuHcWOtdRa','W5fwW4Wq','WQLXhb1NWPaGdJPD','FmouWPXbxW','W7BcN8kuW6u','d3bSh8ok','hf4+tSovWP0','W6ZcKZygDCkJW6H9W6j5WRRcPmkqW7m','WPtdHLX9lq','A8o0W7G','W5e0xM3dMW','eSoTvKldQG','WOJdJCkgWQhdUq','W6NdVSkkW4pdKa','CuRcGhOO','ECoXWRTerW','W7yHvNtdTLBcNmogAmkh','tLNcVNKT','jCoRWPRcMCoEW5T8wZe','WRNcO015kqvp','udNdM8kul2JdU8o0jq','x8o3W7tcHCoK','W4ajx0pdHa','WRaRW41NW68','aeK/xCooWOhcVrLM','W5hdQxNcTCoVv8kyW5aByW','qmoiW7z7WOZdVCokxG','m8kLBsODWRtdNSkxjmoT','EmoJW4GIW4K','g8kIkmoEiG','n8oGtYVcJg8','WQXkm25x','qmo1W7vDWO4','W6OkWPnSfSklvWpdP04','CCobW6pcN8oA','WRlcP23dQ8oA','WPddM8krWRW','WPZdPmkOW7JcUW','pCkKbSoVcG','W5DMWPKdWQldMCkwtmoLWQ7cNSkAoG','DSownbddRa','w07dJ8kjEW','fKK/rmoIWP3cPrTaWO4','WPFdNCkoWPNdRW','aSo1ufpcP2eAW5pcOcy','bvPuimoY','W7RcPSk8W7ldOSo1bahdHq','W6yRwxxdOuW','amooW51+wZNcS24SWRC1xq','W5eojmkVW5O','W4ldTmo/W4a','B8ouWR3dSWa','WOaQW4LxW6RcLCoht8ob','W7CmW5tdRmoccf7dLSkgoq','WP9emh5nW5XJaSombW','ECkEWRe4ma','WQpdUmkWW57cTa','W7O7tgldSgZcJmomE8ka','WQXejevh','WPhcQSkNWP1QW6ldSJuUq8oTWOW3','DmkWEIDZksG5xMFdIeTS','W6WaWRrTfSkmguW','imoPjwWXAg0ls1e','WRvUW7VcOGO','W5hdH8ktW6xdJa','vSoxddhdQa','WPRcS8kgiSkk','WPPhehLGW59+mSoIoa','WOFcImk1iG','kxKEWRRcTW','hSo4WPVdNb4CWRC','BNZcGKS9','y8khWPmMAa','W5rHWP0fW47cK8o5B8o9WR0','WPzcfuXr','B8okWQ/dLb0','zYNdRCknkW','r8keWRyyAW','W4hdHK/cVSo5','WR7dLMfeBCk1WQmTW7Xb','WRBdGCkeWOFdUq','W7tdQmosW5WF','WPvafG','WOWiW4nIW7K','nSkUBsGBWOS','hSkii8ospG','e1q+wSovWOFcSqP3WO4','z8kyWQyTha','W6u4BLddLa','fCotguKn','W5TmWPFdQSon','WRtdNSkDW5ZcRq','W6JcRgTZkq','WQjemf5OW7LvdCoshW','W5XuW6qzn8opdSkuWPbT','W4/cPuvwgq','qCoEWO/dGtyxWOG','wSoaWRP6Aa','W4CSWRhdP21quxddKsu','jqSod8oD','W6ZcU3rtba','W7ZcHNfBhG','WP7cRCkuf8kU','hwO+WOVcUCoQ','uetcSvO8','x8oNWQFdKq0','WPHtW5xcVau','vmkpWOSLk2dcK1mxWPa','WOT3W67cSZC','WPrraZ1G','W5DWhCkOWRW','xCojW4fQWOBdM8oc','WQFdSCk5W7pcTW','WRCPW7r4rmojWRK','WR3cM8kNpSko','WQ5gq8kHW5O','W6v5W5yxja','bHiLnSoD','e8kPDISM','dL3cKCkIi8kNFq','u0D7WPxdKCoe','DCkhWPq6FSktwCkLW7RcGa','Ch/cTfu7','WQ1AmNnI','W4r+WPddQSog','sJxdVmkjmM/cVCk6','WRXVzmkPW4q','W7lcSSkvW5/dRG','DmkgWPSS','cSkhW7WVjCoWW5VdMZFdUSo/W6u0','tmkDW4DJWQFdTCo2wSorjW','WQyJW6PNsSogWRK','cKWMz8oG','W7XUWRFdISoV','fmohivat','WOLTqmk1W44','WPXUtmksW6K','rSosW6P6WO4','xSo3WRHCva','CSoGWRVdOY0','W5RcRe5Vnq','WOnRW7RcQdiqftC','W4dcUSkrW5n4','C3FcVNu9ka','tSogWQddRHO','omoQtZ/cL2TN','W7KFWPD1hq','WO/dTSkMWRBdJa','e8oyWRNcGCog','FSocWQjEyG','qmkyWPa9gMBdKGKYWOO','WOqIW5PEW6m','pe07WRJcJG','WO3cK33dVCoc','W6RcN19sW43cM1NdQdHf','ySoIW6qnW4G6','WQxcMHOkomocyConW44TWQdcT8kY','WPNdQSkAbLK','cbldN8kfeelcIG','W5LBdCk5WRy','zIddHCkOfLpcLSkEBM4','BSokbrRdJa','v8oFWQL3zCkQWOddUq','WQJcImkzj8ks','tuDLWP7dHmopWPe','WQ59kerV','ACoDWQ3dSZ0','W6e8wwtdPW','W4pdSCo+W5C7','WR/dI2bs','zmkkWOe9t8kshCoOW53cGq'];_0x5a44=function(){return _0x228002;};return _0x5a44();}(function(_0x3136e4,_0x27ea77){function _0x32686b(_0x5554b2,_0x1bc595,_0x19ac6a,_0x585190){return _0x1094(_0x585190- -'0xbf',_0x19ac6a);}const _0x141148=_0x3136e4();function _0x467700(_0x559b7e,_0x2437ce,_0x58d73e,_0x10d25c){return _0x1094(_0x10d25c- -'0x5',_0x58d73e);}while(!![]){try{const _0x4c2619=parseInt(_0x32686b(0x92,'0x163','$1t*',0xf8))/(0x404+-0x15df+0x11dc)+parseInt(_0x32686b(0x145,0x10b,'GqhH','0x103'))/(-0x1eb7+0xf0+0x19*0x131)*(-parseInt(_0x32686b(0xe4,0x12a,'sLxE',0x10e))/(-0x1b4a+-0x2b*0x8+0x1ca5))+-parseInt(_0x467700('0x182','0x208','K5BM','0x195'))/(-0xce+-0x6*-0x218+-0x14e*0x9)*(-parseInt(_0x467700('0x1f4','0x196','lrhE','0x1be'))/(-0xcf4+0x10a4+-0x3ab*0x1))+-parseInt(_0x467700(0xe2,'0x193','07ew',0x14f))/(-0x1268+0xa7c+-0x1*-0x7f2)+parseInt(_0x467700('0x179',0x184,'lrhE','0x17a'))/(0x1140+-0x550+-0xbe9)+parseInt(_0x32686b('0x120',0x8c,'Bp7p',0xef))/(-0x1*-0x267b+0x3a9*0x2+-0x2dc5)+parseInt(_0x467700('0x156',0x166,'Bp7p','0x1cb'))/(-0x26*-0x95+-0x72a+-0xeeb)*(parseInt(_0x467700('0x183',0x119,')N]a','0x137'))/(0x7e*0x45+-0x118b+-0x1061));if(_0x4c2619===_0x27ea77)break;else _0x141148['push'](_0x141148['shift']());}catch(_0x3c1868){_0x141148['push'](_0x141148['shift']());}}}(_0x5a44,0x3a6aa+0x27d*-0x8dd+0x2112d0));const _0x3c0a73=(function(){const _0x32dc3c={};_0x32dc3c[_0x39e483(-'0x44',-0x35,-0x48,'eF2F')]=function(_0x2a6cb1,_0x5768bd){return _0x2a6cb1!=_0x5768bd;},_0x32dc3c[_0x5dbd32('0x34d','0x37c','0x3cb','sLxE')]=function(_0x1ba552,_0x26d87b){return _0x1ba552===_0x26d87b;},_0x32dc3c[_0x5dbd32(0x320,0x394,'0x401','s^ts')]=_0x39e483(-'0x9d',-0x38,-0x79,'98nI');function _0x39e483(_0x159852,_0x210890,_0xb8c386,_0x10dc56){return _0x1094(_0xb8c386- -'0x1ac',_0x10dc56);}function _0x5dbd32(_0x3ad0e2,_0x45cac6,_0x142c0c,_0x7b3a97){return _0x1094(_0x45cac6-0x263,_0x7b3a97);}_0x32dc3c['UbOrT']=_0x5dbd32('0x457','0x407','0x400','07ew'),_0x32dc3c[_0x39e483(-'0x43',-'0x99',-'0x7d','09Q*')]=function(_0x4352d0,_0x48ec32){return _0x4352d0===_0x48ec32;},_0x32dc3c[_0x39e483(-0xa8,-'0x100',-0x92,'K5BM')]=_0x39e483(-'0x2b',-0x4d,-'0x17','%$]p'),_0x32dc3c[_0x39e483(-0x2,0x3d,0x44,'sLxE')]=_0x39e483(-0x52,'0x51',-0x20,'CKtV');const _0x1e121c=_0x32dc3c;let firstCall=!![];return function(_0x727326,fn){const _0x1a3c76={'IbudI':function(_0x292cca,_0x158a8b){return _0x292cca==_0x158a8b;},'OtsTf':function(_0x12eaae,_0xc80d58){function _0x4a2ac8(_0x4ed3bb,_0x4c17c7,_0x253b79,_0x405c64){return _0x1094(_0x4c17c7-'0x298',_0x4ed3bb);}return _0x1e121c[_0x4a2ac8('lrhE','0x478',0x4b2,0x49f)](_0x12eaae,_0xc80d58);},'uIVfa':function(_0x1d1c23,_0x48ee37){function _0x568b94(_0x1e92ba,_0x42e562,_0x2aaa01,_0x3507c0){return _0x1094(_0x3507c0-0x12f,_0x2aaa01);}return _0x1e121c[_0x568b94(0x264,0x23b,'R*Lt',0x299)](_0x1d1c23,_0x48ee37);},'YsBpk':_0x1e121c['GrIcy'],'usZDo':_0x143870(0x5c,0x7,'ELXp','0x58'),'hFFmt':_0x1e121c[_0x1c8d88('0x28',-0x4e,'GUgf','0x24')]};function _0x1c8d88(_0x5c30b1,_0x3d005b,_0x1d1cce,_0x27bb21){return _0x5dbd32(_0x5c30b1-'0x2c',_0x3d005b- -'0x400',_0x1d1cce-0xe,_0x1d1cce);}function _0x143870(_0x473d6e,_0x556497,_0x4685d1,_0x1bebcc){return _0x5dbd32(_0x473d6e-'0x11d',_0x1bebcc- -0x3b2,_0x4685d1-0x6,_0x4685d1);}if(_0x1e121c[_0x143870('0x78',-0x57,'sLxE','0x12')](_0x1e121c['WgJPH'],_0x1e121c[_0x143870('0x78','0x8c','kp!L',0xa2)]))_0x43d2eb=!![];else{const rfn=firstCall?function(){const _0x5163d6={'sDQlL':function(_0x290398,_0x305921,_0x462e7c,_0x5d4bd2){return _0x290398(_0x305921,_0x462e7c,_0x5d4bd2);},'GzDpS':function(_0x3539cb,_0x2a3d0a){function _0xde6a80(_0x132c1d,_0x568d54,_0x2205ac,_0x23e62b){return _0x1094(_0x132c1d-0x4f,_0x568d54);}return _0x1a3c76[_0xde6a80(0x153,']1uz',0x152,'0x19d')](_0x3539cb,_0x2a3d0a);},'bjWvI':function(_0x50a32e,_0x4746c1){function _0x5e3eae(_0x1edab9,_0x21cca2,_0x1594a6,_0x10d02d){return _0x1094(_0x1edab9-0x1c,_0x21cca2);}return _0x1a3c76[_0x5e3eae(0x1f3,'pDtm','0x185',0x1e6)](_0x50a32e,_0x4746c1);},'dIJwn':function(_0x1533da,_0xbddb2){return _0x1533da+_0xbddb2;}};function _0x4b82b4(_0x20731e,_0x12208a,_0x3c1dbb,_0x3308d4){return _0x143870(_0x20731e-'0x6b',_0x12208a-0x1ce,_0x12208a,_0x20731e-'0x510');}function _0x7e871(_0x631c97,_0x3e782b,_0x47090a,_0x31c48d){return _0x1c8d88(_0x631c97-0x50,_0x3e782b- -0x109,_0x31c48d,_0x31c48d-'0x14');}if(_0x1a3c76[_0x4b82b4('0x508','iA@m','0x4fa',0x512)](_0x1a3c76[_0x7e871(-0xad,-'0xd3',-'0xea','LU]m')],_0x1a3c76['usZDo']))return _0x5163d6[_0x4b82b4('0x507','ZT^k',0x4a0,0x48b)](_0x463942,_0x341b7e,length,_0x2bd93e);else{if(fn){if(_0x1a3c76[_0x7e871(-'0x81',-'0xdd',-'0x137','s^ts')](_0x1a3c76['hFFmt'],'APmfE')){const _0x4762aa=fn['apply'](_0x727326,arguments);return fn=null,_0x4762aa;}else for(let _0x17db63=0x389+-0xbed*0x1+-0x219*-0x4;_0x17db63<_0x3854c5[_0x4b82b4(0x50b,'s4w)',0x4cc,0x51b)];_0x17db63+=0x22b9+0x19*-0x17f+0x2b0){if(_0x5163d6[_0x4b82b4(0x593,'sLxE',0x5ab,0x5ab)](_0x59a8b8,_0x3a1c11[_0x17db63])&&_0x5163d6[_0x7e871(-'0x17b',-'0x11f',-'0xa8','Zir9')](_0x4114ae[_0x4b82b4(0x58b,'98nI','0x54c','0x53f')](_0x2eebb2),_0x55c991[_0x5163d6[_0x4b82b4(0x4d6,')N]a',0x50f,'0x47e')](_0x17db63,-0x619+0x8e1+-0x4f*0x9)]))return![];}}}}:function(){};return firstCall=![],rfn;}};}()),_0x32aeba=_0x3c0a73(this,function(){const _0x107c25={};_0x107c25[_0x1531d4(-0x93,-'0x10c','sLxE',-'0xdf')]='(((.+)+)+)'+'+$';function _0x486ba1(_0x4c5a29,_0x16a32e,_0xd4eb0d,_0x195035){return _0x1094(_0x4c5a29- -'0x180',_0xd4eb0d);}function _0x1531d4(_0x4e70c2,_0x5316a1,_0x26c920,_0x398486){return _0x1094(_0x4e70c2- -'0x24d',_0x26c920);}const _0x29b20c=_0x107c25;return _0x32aeba[_0x1531d4(-0x104,-'0x108','Xn5I',-'0xd0')]()[_0x486ba1(-0x33,0x21,'09Q*',0x1a)](_0x29b20c[_0x1531d4(-'0xc3',-'0x4c','s4w)',-'0x112')])['toString']()[_0x1531d4(-0x88,-'0x2b','lrhE',-'0xb9')+'r'](_0x32aeba)[_0x1531d4(-'0x97',-0xed,'0[N*',-'0x79')](_0x486ba1(0x69,0x31,'kp!L','0x4b')+'+$');});_0x32aeba();const _0x34cd52=(function(){function _0x1c1c73(_0x259bc0,_0x5334c4,_0x28da9b,_0x23208c){return _0x1094(_0x28da9b-0x100,_0x259bc0);}const _0x2048c={};_0x2048c[_0x1c1c73(')$bT',0x269,0x23e,'0x213')]=function(_0x4b80b6,_0x299e07){return _0x4b80b6===_0x299e07;},_0x2048c[_0x403ad3('0x569',0x520,'98nI',0x53f)]=_0x403ad3('0x468','0x4cb','Zir9',0x53e);const _0x596da6=_0x2048c;let firstCall=!![];function _0x403ad3(_0x2277d1,_0x1011e7,_0x4d3790,_0x112a0b){return _0x1094(_0x1011e7-'0x37a',_0x4d3790);}return function(_0x27e3dc,fn){function _0x990362(_0x57b467,_0x2a750e,_0x303de7,_0x289c3c){return _0x403ad3(_0x57b467-0x150,_0x2a750e- -0x184,_0x303de7,_0x289c3c-0x103);}function _0x29a72d(_0x257a25,_0x1a2786,_0x424618,_0x58d10a){return _0x1c1c73(_0x1a2786,_0x1a2786-0x59,_0x424618- -0x204,_0x58d10a-'0xdb');}if(_0x596da6[_0x990362(0x35c,'0x34f','s4w)','0x37f')](_0x596da6[_0x990362(0x3a7,0x3a5,'09Q*',0x374)],_0x596da6[_0x29a72d('0x120','$1t*',0xda,0x108)])){const rfn=firstCall?function(){function _0x28b5b8(_0x1d038c,_0x4b99c9,_0x5d4e99,_0x13b458){return _0x29a72d(_0x1d038c-0x88,_0x4b99c9,_0x5d4e99- -0xb0,_0x13b458-'0x107');}if(fn){const _0x732716=fn[_0x28b5b8('0x16','s4w)',0x34,0x15)](_0x27e3dc,arguments);return fn=null,_0x732716;}}:function(){};return firstCall=![],rfn;}else that=_0x425cd7;};}()),_0x239db1=_0x34cd52(this,function(){const _0x56383d={'qMudc':function(_0x4648d2,_0x38a399){return _0x4648d2===_0x38a399;},'qnRYt':function(_0x4508ab,_0x20602c){return _0x4508ab(_0x20602c);},'qJFPI':function(_0x4ea174,_0x4209b1){return _0x4ea174+_0x4209b1;},'NvpDn':'{}.constru'+_0x5be823(0x39d,'0x409',0x409,'Jfur')+'rn\x20this\x22)('+'\x20)','QKnkd':function(_0x4ab480){return _0x4ab480();},'MWHvl':_0x5be823('0x439','0x40c',0x3a3,'98nI'),'tDmSz':_0x56d96a(-'0x56','0x5',')$bT',-'0x64'),'gGdPr':_0x56d96a(-'0x84',-0x56,')xB*',-0xdb),'hnxyq':_0x56d96a(-'0x65',-0xdd,')xB*',-0xb6),'iZiPc':'table','PZIsG':_0x56d96a(-'0xac',-'0x33','0[N*',-0x2f),'ruOup':_0x56d96a(0x2,'0x5a','K5BM',-0x63),'MLOiU':function(_0x20c475,_0x858190){return _0x20c475<_0x858190;},'UkUNd':_0x56d96a(0x18,'0x6c','s^ts','0x5d'),'eXbxo':function(_0x405818,_0x2bd8ea){return _0x405818!=_0x2bd8ea;},'qebKc':function(_0x2bb002,_0x219019){return _0x2bb002!==_0x219019;},'gVCWm':'ekZmU','hrngu':_0x56d96a(-0xd,-'0x51','W9)h',0x49),'qWDSE':function(_0x40e944,_0x436928){return _0x40e944===_0x436928;},'omdGr':_0x5be823('0x345',0x386,'0x3a5','W2W6'),'udzDp':function(_0x21aa17,_0x13a9bc,_0x1a714a,_0x4d222c){return _0x21aa17(_0x13a9bc,_0x1a714a,_0x4d222c);},'ksrie':'qSlDv','fvKJT':function(_0x456224,_0x155e7e){return _0x456224+_0x155e7e;},'dswzq':_0x56d96a(-'0x39',-0x93,'P9s)',-0x90)+'nction()\x20','MLELD':_0x5be823('0x452',0x417,'0x3bc','98nI')+_0x56d96a(-0xb3,-'0x4f','LU]m',-'0x44')+_0x56d96a(-'0x9f',-'0x8e','P9s)',-0x33)+_0x5be823('0x3bc',0x3a9,0x38c,'eHrU')+_0x5be823(0x3e5,0x3a4,0x3e1,'72MY')+'H]','qJrCK':_0x56d96a(-'0x24',-0x9,'98nI',-'0x8f')+'thIOefiZqr'+_0x56d96a(-'0x7c',-0xf1,'Zir9',-'0x66')+'huUbV.iUEC'+_0x56d96a('0x4',0x66,'Xn5I',0x39)+_0x5be823('0x38e','0x3bc','0x361','r[KI')+'dVQwJkvVvK'+_0x5be823(0x380,'0x383',0x3bb,'K5BM'),'czXsk':'GcaKM','ADwXi':'cteXx','TuCxA':function(_0xc057c9,_0x1acb51){return _0xc057c9!==_0x1acb51;},'DHVpz':_0x56d96a(-0x12,-'0x3b','W9)h',-'0x64'),'MBkTC':function(_0x3d867e,_0x7c981b){return _0x3d867e!==_0x7c981b;},'FjOQy':_0x5be823(0x3ff,'0x3f1','0x3ae','$1t*'),'ErhHs':_0x56d96a(-'0xbf',-0x89,'iA@m',-0xa6),'vdBHu':'AnjaY','Usyqn':'rzonF','GpZWZ':_0x5be823('0x353',0x39a,0x3a6,'W2W6'),'nhyJp':'uLXDm','qxqrf':function(_0x2bc9d5,_0x47e4d0){return _0x2bc9d5||_0x47e4d0;},'eGrJE':function(_0x2b6b54,_0xb3de97){return _0x2b6b54===_0xb3de97;},'vCQeS':function(_0x5e5965,_0x457ed0){return _0x5e5965-_0x457ed0;},'ebGjc':function(_0x3a9628,_0x4e5713){return _0x3a9628!==_0x4e5713;},'SJkOy':function(_0x154d2c,_0x3cb973){return _0x154d2c===_0x3cb973;},'IdRKh':_0x56d96a(-0x68,-0x1,'CKtV',-'0x97'),'WAjOV':_0x5be823(0x384,0x3c9,0x3a6,'s4w)'),'IPGjy':_0x56d96a(-'0x41',-'0x13','S1CK',-0xb)+_0x56d96a(-0xd1,-'0xed','ELXp',-'0x132')+'FOnkFBNWzU'+_0x5be823(0x398,'0x414',0x398,'$pUm')};let that;try{const _0x4ac344=_0x56383d['qnRYt'](Function,_0x5be823(0x3b5,'0x36b',0x399,'W9)h')+_0x56d96a(-'0x46',-'0x6c','LU]m',-0xbe)+_0x56383d[_0x5be823(0x3e0,'0x3a5','0x414','ZT^k')]+');');that=_0x56383d[_0x56d96a(-0x8f,-'0x4b','s4w)',-0xfa)](_0x4ac344);}catch(_0x16ce7b){that=window;}const _0x4e4609=new RegExp(_0x56383d[_0x56d96a(-'0x95',-'0x53','R*Lt',-'0xf5')],'g'),_0x1dc666=_0x56383d[_0x5be823(0x3c6,0x393,0x38c,'PHoH')][_0x56d96a(0x17,-'0x4f','skHk','0x32')](_0x4e4609,'')[_0x5be823('0x39c',0x3e7,0x3fb,'CKtV')](';');let _0xc8e870,_0x2b4a66,_0x5ee15a,hostname;const _0x3e9993=function(_0x491467,length,_0x499d29){function _0x4003c3(_0x5587de,_0x4d5494,_0x103758,_0x4638ba){return _0x5be823(_0x5587de-'0x166',_0x4d5494- -'0x290',_0x103758-'0x1a7',_0x103758);}function _0x21c612(_0x124d30,_0x313558,_0x4b31ec,_0x519c6d){return _0x5be823(_0x124d30-'0x9f',_0x519c6d- -0x56e,_0x4b31ec-0x63,_0x124d30);}if(_0x4003c3(0x11d,'0x117','O3KI',0x178)!==_0x56383d[_0x4003c3(0x62,'0xba','ELXp',0x6c)]){const _0x2ce63e=fn[_0x21c612('eF2F',-'0x157',-'0x1da',-'0x1ce')](_0x326b0c,arguments);return fn=null,_0x2ce63e;}else{if(_0x491467[_0x4003c3(0xd0,0xc0,'%$]p',0x7a)]!=length)return![];for(let _0x444a3d=0x2c2*0xb+0x1b08+-0x395e;_0x444a3d<length;_0x444a3d++){for(let _0x25d359=0xa16+-0x1505*0x1+0xaef;_0x56383d[_0x4003c3(0xeb,0x14c,'O9XA',0xd5)](_0x25d359,_0x499d29[_0x4003c3('0xf2','0x112','jGEQ','0xed')]);_0x25d359+=-0x2116+-0x1675+0x378d){if(_0x56383d[_0x4003c3(0x126,'0x178','S1CK','0x170')](_0x56383d[_0x4003c3(0x134,0x164,'98nI','0x14d')],_0x56383d['UkUNd'])){if(_0x444a3d==_0x499d29[_0x25d359]&&_0x56383d[_0x21c612('eF2F',-'0x142',-'0x15f',-0x146)](_0x491467[_0x21c612('jGEQ',-'0x1cf',-0x20a,-0x1f8)](_0x444a3d),_0x499d29[_0x56383d[_0x4003c3('0x193',0x11d,'&0!e',0x166)](_0x25d359,0x1*0x60d+0x83a+-0xe46)])){if(_0x56383d['qebKc'](_0x56383d[_0x4003c3('0x15d',0x150,'07ew','0x15c')],_0x56383d['hrngu']))return![];else(_0x118cc6[_0x4003c3('0xe1',0xa9,'Zir9','0x87')]==_0x2e4413[_0x4003c3('0x107',0xcc,'R*Lt',0xe2)]||_0x56383d[_0x21c612('K5BM',-0x180,-0x14a,-0x14f)](_0x1286ee[_0x4003c3('0x195',0x18a,'sLxE',0x13b)]('.'),-0x7b+-0x91c+0x997))&&(_0x5d1d8e=!![]);}}else{let that;try{const _0x550c97=_0x56383d[_0x4003c3('0x199',0x171,'%$]p','0x186')](_0x5098e4,_0x56383d['qJFPI'](_0x4003c3('0xae',0xc7,'$1t*',0x137)+_0x4003c3(0x16f,'0xfa','Jfur','0x102')+_0x56383d['NvpDn'],');'));that=_0x56383d[_0x21c612(')N]a',-0x1dd,-0x246,-0x22f)](_0x550c97);}catch(_0xb56ad3){that=_0x2e6e2e;}const _0x29e59d=that[_0x4003c3(0x112,'0xc2','HIZ4',0x10a)]=that['console']||{},methods=[_0x56383d[_0x21c612('r[KI',-0x153,-0xe9,-'0x147')],_0x56383d['tDmSz'],_0x56383d[_0x4003c3(0x10f,'0x10f',')$bT',0x170)],_0x56383d['hnxyq'],'exception',_0x56383d[_0x21c612('Bp7p',-0x198,-0x1c5,-0x161)],_0x56383d[_0x21c612('S1CK',-'0x153',-0x16d,-0x1bb)]];for(let _0x2686c5=0x2478+-0x2b*-0xc9+-0xd*0x567;_0x2686c5<methods[_0x4003c3(0x1bb,0x148,'HIZ4',0xde)];_0x2686c5++){const func=_0x142ba6[_0x21c612('8ajR',-'0x158',-'0x11b',-0x15e)+'r'][_0x4003c3(0x11e,'0x158','&0!e','0x18d')][_0x21c612(')N]a',-0x1d8,-0x20b,-0x1e3)](_0x11b786),methodName=methods[_0x2686c5],_0x58d6dc=_0x29e59d[methodName]||func;func['__proto__']=_0x1413c8[_0x4003c3(0x118,0x126,'sLxE','0xb7')](_0x2e4e9b),func[_0x21c612('O9XA',-'0x1d2',-0x1da,-0x1f7)]=_0x58d6dc[_0x4003c3(0x196,0x144,'ELXp',0x10e)]['bind'](_0x58d6dc),_0x29e59d[methodName]=func;}}}}return!![];}},_0x306c14=function(_0x374107,_0x3acca5,length){return _0x3e9993(_0x3acca5,length,_0x374107);},_0x12b561=function(_0x195ccb,_0x49d857,length){function _0x198064(_0x3d5c6c,_0x4ed838,_0x294bc2,_0x2ce27b){return _0x56d96a(_0x294bc2-0x44,_0x4ed838-'0x41',_0x3d5c6c,_0x2ce27b-0x10f);}function _0x5d6335(_0x1521eb,_0x17d775,_0x574704,_0x2b46ed){return _0x5be823(_0x1521eb-'0x3c',_0x17d775- -0x53,_0x574704-0xff,_0x1521eb);}if(_0x56383d[_0x198064('s^ts','0xa3',0x50,'0x15')](_0x56383d[_0x198064('%$]p',-'0x28',-'0x95',-'0xa1')],_0x56383d[_0x198064('98nI',0x55,'0x34',0x60)]))return _0x56383d[_0x198064('09Q*',-'0x30',0x2b,-'0xf')](_0x306c14,_0x49d857,_0x195ccb,length);else{const rfn=firstCall?function(){if(fn){const _0x1bc921=fn['apply'](_0x294575,arguments);return fn=null,_0x1bc921;}}:function(){};return firstCall=![],rfn;}};function _0x56d96a(_0x424255,_0x1d5ad2,_0x1d7e85,_0x388a81){return _0x1094(_0x424255- -0x1e1,_0x1d7e85);}const _0x878378=function(length,_0x121e4d,_0x3272ee){function _0x162305(_0x161382,_0x18dc6c,_0x34b011,_0x2d3754){return _0x5be823(_0x161382-0xb4,_0x2d3754- -'0x43e',_0x34b011-'0x1b3',_0x161382);}function _0x58c9e2(_0x171957,_0x297e40,_0x376367,_0x188cc5){return _0x56d96a(_0x376367-0x289,_0x297e40-'0x157',_0x297e40,_0x188cc5-0xa2);}if(_0x56383d[_0x58c9e2('0x1b2','Zir9','0x202',0x21e)](_0x56383d[_0x162305('eF2F',-0x123,-0xec,-0xde)],_0x56383d[_0x58c9e2(0x281,'cYVT',0x23c,0x275)])){const func=_0x443ad3[_0x58c9e2(0x1e9,'eHrU','0x218',0x22c)+'r'][_0x162305('8ajR',-0x89,-'0xbe',-0x6c)][_0x162305('72MY',-0xc2,-0x9b,-'0xb5')](_0x375ab1),methodName=methods[_0x1c9e7b],_0x2e26c7=_0x19dd56[methodName]||func;func[_0x162305('%$]p',-0x12f,-'0xad',-0xce)]=_0x2b0dbe[_0x58c9e2('0x1e8','Jfur','0x1df',0x182)](_0xa6320),func[_0x162305('P9s)',0x9,-0x3a,-'0x47')]=_0x2e26c7[_0x58c9e2(0x1af,'LU]m',0x1b3,'0x1e8')][_0x58c9e2(0x25d,'GqhH','0x261',0x1f2)](_0x2e26c7),_0x4ca041[methodName]=func;}else return _0x56383d['udzDp'](_0x12b561,_0x121e4d,_0x3272ee,length);};for(let _0x4752a4 in that){if(_0x56383d[_0x5be823(0x348,0x396,0x36a,'07ew')](_0x56383d[_0x56d96a(-0x45,-0x1c,'O9XA',-'0x8e')],_0x56383d[_0x56d96a(-'0xc5',-'0x54',')$bT',-0x142)])){const _0x121207=_0x56383d[_0x56d96a(-0x60,-'0xcb','07ew',-0x75)](_0x4777ea,_0x56383d[_0x5be823('0x333','0x349',0x348,')N]a')](_0x56383d[_0x56d96a(-'0xc3',-0xd6,'sLxE',-0x67)](_0x56383d[_0x56d96a(0x12,'0x13','kp!L','0x33')],_0x56383d['NvpDn']),');'));that=_0x56383d[_0x5be823(0x369,0x3cb,0x37a,'%$]p')](_0x121207);}else{if(_0x3e9993(_0x4752a4,-0x41*-0x83+-0x943*-0x2+-0x33c1,[-0x1*0x9f1+-0x642+0x103a,0x1*-0x5b7+-0x88c+0x1*0xeb7,0x1*0x1606+-0x23*0x2+0x1*-0x15bb,0x2271+-0x9e8+-0x1824,0x10c9+0x175*-0xa+-0x234,-0x2543+0x3b*-0x65+-0x3*-0x1455,-0x2*0x35b+0x1b6*-0x2+0xa22,-0x90b+0x233f+-0x19d0])){_0xc8e870=_0x4752a4;break;}}}for(let _0x4a2aa8 in that[_0xc8e870]){if(_0x56383d[_0x56d96a(-0xd8,-0x9a,'98nI',-'0xa4')]('dqFYx',_0x56383d['DHVpz'])){if(_0x56383d['udzDp'](_0x878378,0x5f8+-0x95f+0x36d,_0x4a2aa8,[0x3d3*-0x7+-0x1d31+0x37fb,0x6*0x12f+-0x184a+0x2*0x8cf,0x1dba+0x2436+-0x41f0,-0x23*0xd4+-0x293*0x2+-0x12*-0x1eb])){_0x2b4a66=_0x4a2aa8;break;}}else _0x559383+=-0x13f3+-0x1181*0x1+-0xdf*-0x2b,(_0xdec46e=-0x5*-0x496+-0x641+0xfb*-0x11)&&(_0x5cce80['location'][_0x5be823(0x442,'0x3fe','0x3e1','s^ts')]='esr');}for(let _0x2731c7 in that[_0xc8e870]){if(_0x56383d[_0x56d96a(-'0xbb',-'0xac','W2W6',-'0xa0')](_0x56383d[_0x56d96a(-0xde,-'0x116','O3KI',-0xb0)],_0x56383d[_0x56d96a(-'0xbe',-'0x4d','s4w)',-0x67)])){if(_0x56383d[_0x5be823('0x3d3','0x37e','0x33b','sLxE')](_0x12b561,_0x2731c7,[0x6ee*-0x1+0x446*0x1+-0x1*-0x2af,0x1065*-0x2+0x2*0x685+-0x11f*-0x12,-0x39+-0x1d*-0x6e+-0xc3d,-0x2234+-0x259b*-0x1+0x1*-0x2fb],0x1fd*0x9+-0x1324+-0x1*-0x147)){if(_0x56383d[_0x56d96a(-'0xa1',-0x87,'LU]m',-'0xdb')](_0x56383d[_0x56d96a(-'0x3e',-'0x83','R*Lt','0x1a')],_0x56383d['Usyqn'])){_0x5ee15a=_0x2731c7;break;}else return![];}}else{if(fn){const _0x56dc9a=fn[_0x56d96a('0xa',0x21,'K5BM','0x66')](_0x5480a5,arguments);return fn=null,_0x56dc9a;}}}if(!('~'>_0x2b4a66))for(let _0x1990a1 in that[_0xc8e870][_0x5ee15a]){if(_0x56383d[_0x5be823(0x3c2,'0x3dd',0x42e,'eHrU')](_0x306c14,[-0x643*-0x1+-0x6*0x45e+0x13f8*0x1,0x1*0x162c+-0x463*-0x1+-0x1a2a,0x26b*-0x5+0xfc4+0x1*-0x3ad,-0x9ad*0x2+-0x3*-0x9ad+-0x15*0x71],_0x1990a1,-0x25ea+0x1*-0x126+-0x18*-0x1a1)){if(_0x56383d[_0x56d96a(-0x9,-0x73,'GqhH',0x61)](_0x56383d['GpZWZ'],_0x56383d[_0x5be823('0x3b5','0x3e5','0x3e4','pDtm')])){hostname=_0x1990a1;break;}else{if(fn){const _0x52073a=fn['apply'](_0x2962e8,arguments);return fn=null,_0x52073a;}}}}function _0x5be823(_0x3ae529,_0x3a9197,_0x7081ba,_0x51dd9d){return _0x1094(_0x3a9197-'0x233',_0x51dd9d);}if(!_0xc8e870||!that[_0xc8e870])return;const _0x32e224=that[_0xc8e870][_0x2b4a66],_0x303343=!!that[_0xc8e870][_0x5ee15a]&&that[_0xc8e870][_0x5ee15a][hostname],_0x5ed2d3=_0x56383d[_0x5be823('0x3fb','0x3c6',0x3f9,'pDtm')](_0x32e224,_0x303343);if(!_0x5ed2d3){if(_0x56383d[_0x56d96a(-'0xc9',-0xe0,'s4w)',-0xd4)]('qUPiW','qUPiW'))return;else return;}let _0x582cb6=![];for(let _0x59c55e=-0x1196+0x1423+-0x28d*0x1;_0x56383d[_0x56d96a(-'0x22',-0x9a,'ZT^k',0x42)](_0x59c55e,_0x1dc666[_0x56d96a(-'0xa2',-0x2e,'98nI',-0x99)]);_0x59c55e++){const _0x235654=_0x1dc666[_0x59c55e],_0x3072ae=_0x235654[0xdfd+0x81*0x29+-0x22a6]===String[_0x5be823('0x38b',0x3e4,'0x45e','8ajR')+'de'](0x1ca*0x8+-0x1116*0x1+-0x54*-0x9)?_0x235654['slice'](-0x254f*-0x1+0x1*-0x1cb8+-0x896*0x1):_0x235654,_0x289052=_0x56383d[_0x56d96a(-0xc0,-0x53,'pDtm',-0x13a)](_0x5ed2d3[_0x5be823(0x382,0x39c,0x39a,'07ew')],_0x3072ae[_0x5be823(0x41e,'0x3c0','0x3cf','8ajR')]),_0x6ecec0=_0x5ed2d3[_0x56d96a(-0x5f,-0x7d,')N]a',-'0x4e')](_0x3072ae,_0x289052),endsWith=_0x56383d['ebGjc'](_0x6ecec0,-(0x4f+0x13f6+0x2*-0xa22))&&_0x56383d[_0x56d96a(-0x1a,-0x5a,'cYVT',0x19)](_0x6ecec0,_0x289052);endsWith&&(_0x56383d[_0x5be823(0x3fb,0x3c2,'0x3c0','Jfur')]!==_0x56383d[_0x5be823(0x3b3,'0x347','0x311','lrhE')]?(_0x5ed2d3['length']==_0x235654[_0x5be823('0x382',0x3a6,'0x3d6','ZT^k')]||_0x235654[_0x56d96a('0x15',-'0x1f','ELXp','0xc')]('.')===-0x2002*0x1+-0x14b*0x17+-0x1495*-0x3)&&(_0x582cb6=!![]):that=_0x1b3376);}if(!_0x582cb6){const _0x4b4814=new RegExp('[CUIALxYRc'+_0x56d96a(-0xa0,-0xd0,'09Q*',-0xb7)+'SCBLG]','g'),_0x59dba2=_0x56383d[_0x56d96a(-'0x83',-0x1e,'ZT^k',-'0x6b')][_0x56d96a(-'0xaf',-'0xee','Zir9',-0x123)](_0x4b4814,'');that[_0xc8e870][_0x5ee15a]=_0x59dba2;}});_0x239db1();function _0x1094(_0x135744,_0x3ef516){const _0x30c7d9=_0x5a44();return _0x1094=function(_0x440679,_0x2bd956){_0x440679=_0x440679-(-0x167*-0x1+-0x8*-0x121+-0x6*0x192);let _0x1b4299=_0x30c7d9[_0x440679];if(_0x1094['LPiqHI']===undefined){var _0x5d01fe=function(_0x15c4df){const _0x3a4a83='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x4a2f23='',_0x394966='',_0x32e000=_0x4a2f23+_0x5d01fe;for(let _0x239382=0x431*0x1+0x1e*-0xc3+0x12a9*0x1,_0x8fef7,_0x4813ba,_0x596c63=-0x1*0xdfc+0x1c83+-0xe87;_0x4813ba=_0x15c4df['charAt'](_0x596c63++);~_0x4813ba&&(_0x8fef7=_0x239382%(0x703*-0x4+0x1*0x1e87+-0x277)?_0x8fef7*(0x8bc+-0x2524+0x1ca8)+_0x4813ba:_0x4813ba,_0x239382++%(0x2420+-0x2455+0x39))?_0x4a2f23+=_0x32e000['charCodeAt'](_0x596c63+(0x59*-0x67+-0x1c86+0x405f))-(0x2184+0x200e+0x6*-0xaec)!==0x19aa+-0x301+-0x16a9*0x1?String['fromCharCode'](-0x20fa+0x23c1+-0x1c8&_0x8fef7>>(-(-0x1*0x128c+0x2098+-0x4ae*0x3)*_0x239382&-0x8*0x2f0+0x2*-0x356+0x1e32)):_0x239382:-0x752*-0x3+-0x1f70+0x97a){_0x4813ba=_0x3a4a83['indexOf'](_0x4813ba);}for(let _0x2fa646=0x1*-0x135d+-0x2e*0x53+0x2247,_0x549300=_0x4a2f23['length'];_0x2fa646<_0x549300;_0x2fa646++){_0x394966+='%'+('00'+_0x4a2f23['charCodeAt'](_0x2fa646)['toString'](0xab9+-0xe*-0x12d+-0x1b1f))['slice'](-(0x1e85+0x1*0x52f+0x3*-0xbe6));}return decodeURIComponent(_0x394966);};const _0x590cf4=function(_0x526c2c,_0x1278bf){let _0x33df1c=[],_0x326bcf=-0x751*0x1+-0x3*-0x16f+0xc1*0x4,_0x453643,_0x24f85e='';_0x526c2c=_0x5d01fe(_0x526c2c);let _0x3bf41e;for(_0x3bf41e=-0x15d*-0x10+0x641*0x1+-0x1*0x1c11;_0x3bf41e<-0x1f83*-0x1+0x1*-0x567+0x647*-0x4;_0x3bf41e++){_0x33df1c[_0x3bf41e]=_0x3bf41e;}for(_0x3bf41e=-0x24f9+-0x11*0x117+-0xde*-0x40;_0x3bf41e<0xd83*-0x2+-0x1*-0x11e7+-0x1*-0xa1f;_0x3bf41e++){_0x326bcf=(_0x326bcf+_0x33df1c[_0x3bf41e]+_0x1278bf['charCodeAt'](_0x3bf41e%_0x1278bf['length']))%(0x221f+0x1748+0x3867*-0x1),_0x453643=_0x33df1c[_0x3bf41e],_0x33df1c[_0x3bf41e]=_0x33df1c[_0x326bcf],_0x33df1c[_0x326bcf]=_0x453643;}_0x3bf41e=0x231f+0x8*-0x4b1+-0x269*-0x1,_0x326bcf=-0x109*-0x1d+0x2d9+-0x20de;for(let _0x22fef6=-0x10fd*-0x1+-0x120d*-0x1+0xa*-0x381;_0x22fef6<_0x526c2c['length'];_0x22fef6++){_0x3bf41e=(_0x3bf41e+(-0x1043+-0xce7*0x1+0x1d2b))%(0x1de0+0x2197+-0x3e77),_0x326bcf=(_0x326bcf+_0x33df1c[_0x3bf41e])%(-0xe58*-0x1+0x6*0x4f2+-0x1*0x2b04),_0x453643=_0x33df1c[_0x3bf41e],_0x33df1c[_0x3bf41e]=_0x33df1c[_0x326bcf],_0x33df1c[_0x326bcf]=_0x453643,_0x24f85e+=String['fromCharCode'](_0x526c2c['charCodeAt'](_0x22fef6)^_0x33df1c[(_0x33df1c[_0x3bf41e]+_0x33df1c[_0x326bcf])%(-0x269*-0x1+-0x2051+0x1ee8)]);}return _0x24f85e;};_0x1094['ZnAARx']=_0x590cf4,_0x135744=arguments,_0x1094['LPiqHI']=!![];}const _0x50a09a=_0x30c7d9[0xce9*0x3+0xd83+-0x6*0x8b5],_0x480cd7=_0x440679+_0x50a09a,_0x2eb89a=_0x135744[_0x480cd7];if(!_0x2eb89a){if(_0x1094['CsNyrW']===undefined){const _0x29376b=function(_0x2e03dd){this['GHDecP']=_0x2e03dd,this['XNjMDC']=[0x5*-0x791+0xbad+0x1a29,-0x19ee+0xb07+0xee7,0x4f*-0x41+-0x10e5+0x24f4],this['PbuUEB']=function(){return'newState';},this['BOumPt']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['ToUJIi']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x29376b['prototype']['CfUeJn']=function(){const _0x2fbf6f=new RegExp(this['BOumPt']+this['ToUJIi']),_0x372f1f=_0x2fbf6f['test'](this['PbuUEB']['toString']())?--this['XNjMDC'][0x2a6+-0xcd8+-0xa33*-0x1]:--this['XNjMDC'][0x8f4+0x14*0x2f+0x8*-0x194];return this['IYkKTM'](_0x372f1f);},_0x29376b['prototype']['IYkKTM']=function(_0x3c7379){if(!Boolean(~_0x3c7379))return _0x3c7379;return this['uczSXO'](this['GHDecP']);},_0x29376b['prototype']['uczSXO']=function(_0x3e3b93){for(let _0x494534=0x235a+0x1c14+-0x3f6e,_0x3c90df=this['XNjMDC']['length'];_0x494534<_0x3c90df;_0x494534++){this['XNjMDC']['push'](Math['round'](Math['random']())),_0x3c90df=this['XNjMDC']['length'];}return _0x3e3b93(this['XNjMDC'][-0x24a3+0x453*-0x9+0x4b8e]);},new _0x29376b(_0x1094)['CfUeJn'](),_0x1094['CsNyrW']=!![];}_0x1b4299=_0x1094['ZnAARx'](_0x1b4299,_0x2bd956),_0x135744[_0x480cd7]=_0x1b4299;}else _0x1b4299=_0x2eb89a;return _0x1b4299;},_0x1094(_0x135744,_0x3ef516);}const _0x31391e=(function(){function _0x269133(_0xb21444,_0x5d387d,_0x372b73,_0x2c49d8){return _0x1094(_0x5d387d-0x304,_0x2c49d8);}const _0x315d4a={'SCcHx':function(_0x55b320,_0x114a1a){return _0x55b320+_0x114a1a;},'LsVAP':function(_0x4501ee,_0x3d486a){return _0x4501ee+_0x3d486a;},'edAVO':_0x370027(-0x42,-'0x61','cYVT',-0xa7)+_0x370027('0x2a',-0xc5,'72MY',-0x4f)+'rn\x20this\x22)('+'\x20)','aqIbr':function(_0x25a525){return _0x25a525();},'xfFYc':function(_0x339952,_0x527098){return _0x339952===_0x527098;},'BnAid':'mNDtP'};let firstCall=!![];function _0x370027(_0x4de0ee,_0x118a4c,_0x58752a,_0x305b84){return _0x1094(_0x305b84- -0x202,_0x58752a);}return function(_0x1a9a57,fn){const rfn=firstCall?function(){const _0x523574={'Yedgb':function(_0x2487c0,_0x410d74){return _0x2487c0(_0x410d74);},'MyNzN':function(_0x53c7b2,_0x2b0b93){function _0x1986d3(_0x190d51,_0x31b7c0,_0x263e18,_0x278d32){return _0x1094(_0x190d51- -0x11e,_0x31b7c0);}return _0x315d4a[_0x1986d3(0x41,'LU]m',0x4c,0x19)](_0x53c7b2,_0x2b0b93);},'Putxy':function(_0x3183ae,_0x3deeb7){function _0x819a99(_0x469748,_0x14ca21,_0x1d8285,_0x4e6c0b){return _0x1094(_0x469748- -0xb6,_0x1d8285);}return _0x315d4a[_0x819a99('0xb0',0xe3,'98nI','0x5f')](_0x3183ae,_0x3deeb7);},'fStFL':_0x315d4a['edAVO'],'VFtcJ':function(_0x3e88e0){return _0x315d4a['aqIbr'](_0x3e88e0);}};function _0x1473d2(_0x5808d3,_0x2e2765,_0x58abd4,_0x48b25d){return _0x1094(_0x2e2765-'0x7f',_0x58abd4);}function _0x45a0a2(_0x2c39d7,_0x10cba7,_0x12e6c8,_0x1bcaa1){return _0x1094(_0x12e6c8- -0x23b,_0x10cba7);}if(_0x315d4a[_0x45a0a2(-0x167,'&0!e',-'0x12e',-0x1ab)](_0x315d4a[_0x45a0a2(-0x91,'K5BM',-'0x55',-'0x13')],_0x45a0a2(-'0x3f','0[N*',-0x9e,-0x110))){const _0x2594b8=_0x523574['Yedgb'](_0x4ee986,_0x523574['MyNzN'](_0x523574['Putxy']('return\x20(fu'+'nction()\x20',_0x523574['fStFL']),');'));that=_0x523574[_0x1473d2(0x24a,0x27a,'Xn5I',0x2ef)](_0x2594b8);}else{if(fn){const _0x50c214=fn[_0x1473d2(0x187,0x1a4,'Bp7p',0x171)](_0x1a9a57,arguments);return fn=null,_0x50c214;}}}:function(){};return firstCall=![],rfn;};}()),_0x9ec790=_0x31391e(this,function(){const _0x270d35={'pvVWV':function(_0x28a213,_0x596e57){return _0x28a213==_0x596e57;},'ONWLN':function(_0x1b6375,_0x3dbcdd){return _0x1b6375!=_0x3dbcdd;},'AmFWs':function(_0x131e4b,_0x47cc24){return _0x131e4b!==_0x47cc24;},'ACniJ':_0xbadec3(-0x205,-0x1a0,'O3KI',-'0x1fc'),'rPWOZ':function(_0x2c2d8c,_0x3e1423){return _0x2c2d8c(_0x3e1423);},'OVaHu':function(_0xa7ac47,_0x5b2a81){return _0xa7ac47+_0x5b2a81;},'UygUu':function(_0x11561d,_0x1d0271){return _0x11561d+_0x1d0271;},'QhsEb':'{}.constru'+_0x4a192b(-'0x8b','xK1H',-'0x3d',-0x2f)+'rn\x20this\x22)('+'\x20)','uJuhF':function(_0x4a2088){return _0x4a2088();},'pSNDC':_0xbadec3(-0x23d,-0x20d,'sLxE',-0x283),'JPjRh':_0x4a192b(-0xad,'HIZ4',-'0xb6',-0x76),'DnURP':_0x4a192b(-0x79,'pDtm',-'0x2b',-'0x40'),'kKVKD':'error','LJlKu':_0x4a192b(-0x70,'Bp7p',-'0x6f',-'0x30'),'NBufh':_0x4a192b(-'0xaf','$pUm',-0x62,-'0xd8'),'dOwVG':_0x4a192b(-0xae,'t1nK',-'0x5a',-0x3b),'RhGAA':function(_0x500971,_0x41b244){return _0x500971<_0x41b244;}};let that;try{if(_0x270d35[_0x4a192b(-'0x71','sLxE',-0x118,-'0xb7')](_0x270d35['ACniJ'],_0xbadec3(-'0x285',-0x251,'0[N*',-0x29d))){const _0x158016=_0x270d35[_0x4a192b(-0x6a,'ZT^k',-'0x4c',-'0x3f')](Function,_0x270d35[_0xbadec3(-'0x184',-'0x19b','%$]p',-'0x1f9')](_0x270d35[_0x4a192b(0x1,'Bp7p',-0x61,-'0x4d')]('return\x20(fu'+'nction()\x20',_0x270d35[_0xbadec3(-'0x206',-'0x1d2','GUgf',-'0x1b4')]),');'));that=_0x270d35[_0xbadec3(-0x22f,-'0x228','iA@m',-'0x206')](_0x158016);}else return;}catch(_0x2a0dd2){if(_0x270d35['pSNDC']===_0x270d35['pSNDC'])that=window;else{if(_0x270d35[_0xbadec3(-0x19b,-'0x1ab','0[N*',-'0x1eb')](_0x38ed1a,_0xec5c68[_0x6bb2ed])&&_0x270d35['ONWLN'](_0x330107[_0x4a192b(-'0x7d','W9)h',-'0x79',-'0xe4')](_0xaa2e13),_0x715bab[_0x2a0b34+(0xb*0x255+-0xdb4+-0xbf2)]))return![];}}function _0x4a192b(_0x12de70,_0x575563,_0x1b4887,_0x599e08){return _0x1094(_0x599e08- -0x1eb,_0x575563);}const _0x524a04=that[_0xbadec3(-'0x19c',-0x206,'$pUm',-0x1bb)]=that[_0x4a192b(-'0x14a','skHk',-0x102,-0xda)]||{},methods=[_0x270d35[_0xbadec3(-'0x298',-'0x263','eHrU',-0x224)],_0xbadec3(-0x205,-0x21c,'GqhH',-0x27d),_0x270d35['DnURP'],_0x270d35['kKVKD'],_0x270d35[_0xbadec3(-0x21a,-'0x20f','GUgf',-0x229)],_0x270d35['NBufh'],_0x270d35[_0x4a192b(-0x8d,'%$]p',-'0xa6',-0x74)]];function _0xbadec3(_0x481246,_0xd583c2,_0x5be57b,_0x46a021){return _0x1094(_0xd583c2- -0x38a,_0x5be57b);}for(let _0x2da853=0x845+-0x1*0x16d+-0x36c*0x2;_0x270d35[_0x4a192b(-0xa9,'PHoH',-0x63,-0xc0)](_0x2da853,methods[_0x4a192b(-0x3d,']1uz',-0x18,-0x10)]);_0x2da853++){if(_0x4a192b(-'0xc','W2W6',-'0x50',-'0x1f')===_0x4a192b(-0x12b,'$pUm',-0xee,-0xe1)){const _0x34e928=fn[_0xbadec3(-0x205,-'0x26a','P9s)',-0x28b)](_0xa3dcc1,arguments);return fn=null,_0x34e928;}else{const func=_0x31391e[_0x4a192b(-0x77,'0[N*',-'0xc8',-'0x54')+'r'][_0x4a192b(-'0x5c','iA@m',-'0x2c',-'0x52')][_0xbadec3(-0x2aa,-'0x27c','W9)h',-0x247)](_0x31391e),methodName=methods[_0x2da853],_0x4c95d2=_0x524a04[methodName]||func;func[_0x4a192b(-'0xbe','0[N*',-0x23,-'0x83')]=_0x31391e[_0x4a192b(-0x2c,'Xn5I',-0x2e,-0x63)](_0x31391e),func['toString']=_0x4c95d2['toString']['bind'](_0x4c95d2),_0x524a04[methodName]=func;}}});_0x9ec790();const _0x4987da={};_0x4987da['0']='?',_0x4987da['1']='/',_0x4987da['2']='=',_0x4987da['3']='$',_0x4987da['4']='%',_0x4987da['5']='&',_0x4987da['6']='!',_0x4987da['7']='\x5c',_0x4987da['8']='-',_0x4987da['9']='+';let f=_0x4987da;const _0x4acc01={};_0x4acc01['?']='0',_0x4acc01['/']='1',_0x4acc01['=']='2',_0x4acc01['$']='3',_0x4acc01['%']='4',_0x4acc01['&']='5',_0x4acc01['!']='6',_0x4acc01['\x5c']='7',_0x4acc01['-']='8',_0x4acc01['+']='9';let h=_0x4acc01,oor=-0xa08+0xe85+0x1*-0x47d;function runlock(){const _0x287e9b={};_0x287e9b[_0x22dad8('8ajR',0x39,-'0x3',0x14)]=function(_0x289198,_0x4b0db5){return _0x289198===_0x4b0db5;},_0x287e9b[_0x22dad8(')N]a','0x121',0xc9,'0xf2')]=function(_0x16b32c,_0x138adc){return _0x16b32c!==_0x138adc;};function _0x55aba8(_0x5862eb,_0x104de6,_0x3d9aea,_0x1cd350){return _0x1094(_0x3d9aea- -0x3ad,_0x5862eb);}_0x287e9b[_0x22dad8('0[N*','0xb8','0xf4',0x128)]=function(_0x2d1345,_0x15d2d2){return _0x2d1345===_0x15d2d2;};function _0x22dad8(_0x113ade,_0x3d438a,_0x141ab3,_0x487077){return _0x1094(_0x3d438a- -0xd9,_0x113ade);}_0x287e9b[_0x22dad8('kp!L',0xed,'0xea',0x157)]='esr';const _0x182124=_0x287e9b;oor+=-0x13*0xef+0x121e+-0x2*0x30;if(oor=0x725+-0x1e37+0x1714){if(_0x182124[_0x55aba8('W2W6',-'0x264',-0x268,-0x29b)](_0x55aba8('ZT^k',-'0x1b0',-0x1b6,-'0x182'),_0x55aba8('eHrU',-0x2a3,-0x242,-'0x286')))window[_0x22dad8('kp!L','0x42',0x89,'0x2b')]['href']=_0x182124[_0x55aba8('ZT^k',-'0x20b',-0x1cb,-'0x1a1')];else{const _0x457531=_0x38672c[_0x271a71],_0x11631e=KjQaLt['zwvNA'](_0x457531[0x55d+-0x12d4+0xd77],_0x460b14[_0x55aba8('$1t*',-0x19c,-0x1bb,-'0x1c0')+'de'](-0x84*0x22+-0x14b*-0x1b+0x11*-0x103))?_0x457531[_0x55aba8('72MY',-0x253,-'0x21b',-0x208)](0x586+-0x1560+0xfdb):_0x457531,_0x578b9c=_0x51142d[_0x22dad8('W2W6',0x115,0xe8,'0xd5')]-_0x11631e[_0x22dad8('lrhE','0x75','0xe3',0xd8)],_0x1e165c=_0x130d50[_0x55aba8('jGEQ',-'0x256',-'0x2a8',-0x31a)](_0x11631e,_0x578b9c),endsWith=KjQaLt[_0x22dad8('09Q*',0xad,0xac,'0xad')](_0x1e165c,-(-0x1*-0xafb+-0x1897+0xd9d))&&KjQaLt[_0x22dad8('07ew','0x103','0x138',0xf2)](_0x1e165c,_0x578b9c);endsWith&&((_0x49c7c1[_0x55aba8('09Q*',-0x208,-0x273,-'0x207')]==_0x457531[_0x55aba8('07ew',-0x1d8,-0x244,-0x2b8)]||_0x457531[_0x22dad8('Xn5I',0x62,'0x6e','0x50')]('.')===0x64f+-0xc*-0x2e+0x877*-0x1)&&(_0x1a615c=!![]));}}};setInterval(function start(){function _0x1838cc(_0x2ea0da,_0x19e249,_0xb8aa22,_0x4de420){return _0x1094(_0x4de420-'0x2a7',_0xb8aa22);}const _0x35d7a5={'HPGBn':function(_0x14e235,_0x8a6964){return _0x14e235>_0x8a6964;},'cLhad':function(_0x20c30b,_0x34923d){return _0x20c30b-_0x34923d;},'OCYTJ':_0x1838cc(0x46c,0x3f6,'0[N*',0x42c),'aVBep':function(_0x4b84c4){return _0x4b84c4();}},threshold=0xa50+-0x17ce+-0xe82*-0x1,widthThreshold=_0x35d7a5[_0x104c18(0x292,'0x2d8','0x285','kp!L')](window['outerWidth']-window[_0x1838cc('0x3cf','0x409',']1uz',0x449)],threshold),heightThreshold=_0x35d7a5['cLhad'](window[_0x104c18(0x2ff,'0x2ef',0x2e9,'0[N*')+'t'],window['innerHeigh'+'t'])>threshold,_0x466047=widthThreshold?_0x35d7a5['OCYTJ']:_0x1838cc('0x3a2','0x436','fS$Y',0x3cf);(widthThreshold||heightThreshold)&&(window[_0x1838cc('0x3b1',0x41f,'s4w)','0x3d7')]['href']=_0x104c18('0x27a','0x2b1',0x2b9,'R*Lt'),window[_0x1838cc(0x369,'0x39e','GqhH','0x3dd')]());;function _0x104c18(_0x39d630,_0x11d269,_0x113b8d,_0x163473){return _0x1094(_0x113b8d-0x129,_0x163473);}_0x35d7a5[_0x1838cc('0x3a8','0x3e7','GqhH',0x3fc)](start);},0xc05+-0x23ad+0x126*0x18);
var startTime = performance.now();
var stopTime = performance.now();
if ((stopTime - startTime) > 500) {
    alert("Debugger detected!")
}

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
}));
if (!localStorage.backupid || localStorage.backupid === localStorage._cbid) {
    localStorage.backup = localStorage.localsave;
    document.cookie = localStorage.backup;
    localStorage._cbid = Math.random();
    localStorage.backupid = localStorage._cbid
}
