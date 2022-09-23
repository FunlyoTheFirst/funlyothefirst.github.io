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


(function(_0x4e89b7,_0x3e7855){function _0x2ea53e(_0x46e768,_0x2d9653,_0x3b5b4c,_0x3c6c51){return _0x1445(_0x2d9653-'0xc6',_0x3b5b4c);}function _0x25a232(_0x2e2c58,_0x598d0d,_0x29b906,_0x503621){return _0x1445(_0x2e2c58-0x2dd,_0x29b906);}const _0x381a98=_0x4e89b7();while(!![]){try{const _0x2c6d11=-parseInt(_0x25a232(0x461,0x489,'YcZT',0x46b))/(0x52c*-0x5+-0x2279+0x3c56)*(parseInt(_0x25a232('0x471',0x483,'t65v','0x45a'))/(-0x3e*-0xe+0xc29*-0x2+0x14f0))+-parseInt(_0x25a232(0x446,0x442,'wT[d',0x42b))/(0xec6+0x1*0x15ce+0x17*-0x197)+-parseInt(_0x2ea53e('0x216',0x248,')R1o',0x247))/(-0x1706*-0x1+-0x23f6+-0x1*-0xcf4)+-parseInt(_0x2ea53e('0x22b','0x226','&HDP',0x216))/(-0x5f0*-0x2+0x1*0x1753+0x3*-0xbba)*(parseInt(_0x2ea53e('0x220','0x23a','SDJ%',0x207))/(-0x8*-0x27f+0x27*0x9f+0xeb9*-0x3))+-parseInt(_0x2ea53e('0x22f',0x224,'xyQl','0x211'))/(0x22c0+0x20c0+-0x2ef*0x17)+parseInt(_0x25a232('0x487',0x44f,'&MhX','0x499'))/(0x2074+0x706*-0x3+-0xb5a)+parseInt(_0x2ea53e(0x257,'0x220','Xc%&',0x1e9))/(-0x9*0x3c5+-0x83*0x3a+0x3fa4);if(_0x2c6d11===_0x3e7855)break;else _0x381a98['push'](_0x381a98['shift']());}catch(_0x2d4123){_0x381a98['push'](_0x381a98['shift']());}}}(_0x3d6d,-0x2703c+0x1*0x61ba9+-0xa912d*-0x1));const _0x113b09=(function(){let firstCall=!![];return function(_0x2dc263,fn){const rfn=firstCall?function(){function _0x138e93(_0x3be7c0,_0x2e024c,_0x175229,_0x2b8624){return _0x1445(_0x3be7c0-'0xc2',_0x175229);}if(fn){const _0x555db8=fn[_0x138e93('0x25c','0x26a','PWD9',0x293)](_0x2dc263,arguments);return fn=null,_0x555db8;}}:function(){};return firstCall=![],rfn;};}()),_0x2a51cd=_0x113b09(this,function(){function _0x6378ae(_0x21a35a,_0x28e7b1,_0x2cc939,_0x1aa24b){return _0x1445(_0x21a35a-0x3c0,_0x28e7b1);}function _0xbac96e(_0x3622bc,_0x510327,_0x544723,_0x1adc2b){return _0x1445(_0x3622bc- -0x278,_0x544723);}return _0x2a51cd[_0xbac96e(-0xc7,-'0xa3','YcZT',-0x9d)]()['search']('(((.+)+)+)'+'+$')[_0x6378ae(0x537,'u$5h',0x51c,0x513)]()['constructo'+'r'](_0x2a51cd)[_0x6378ae('0x53a','ZasP',0x518,'0x510')]('(((.+)+)+)'+'+$');});_0x2a51cd();const _0x11c121=(function(){let firstCall=!![];return function(_0x7c7b4,fn){const rfn=firstCall?function(){function _0x3bb513(_0x2e6d5e,_0x124726,_0x1e18ab,_0x37b336){return _0x1445(_0x37b336- -'0x1d2',_0x2e6d5e);}if(fn){const _0x31dddd=fn[_0x3bb513('1DWV',-0x22,0x2,-0x27)](_0x7c7b4,arguments);return fn=null,_0x31dddd;}}:function(){};return firstCall=![],rfn;};}()),_0x379169=_0x11c121(this,function(){const _0x38e1d4={'JXGkd':function(_0x4205e4,_0x56e774){return _0x4205e4<_0x56e774;},'jVWUL':function(_0xd63e37,_0xc0078d){return _0xd63e37==_0xc0078d;},'Dpdht':function(_0x5cd66c,_0x5957b5){return _0x5cd66c!=_0x5957b5;},'dipON':function(_0x24c22c,_0x501407){return _0x24c22c(_0x501407);},'fAyJy':function(_0x522e2a,_0x2d71a6){return _0x522e2a+_0x2d71a6;},'EZhyS':_0x374556(0x4f1,'^t]S',0x4ce,'0x526')+_0x374556('0x4c4','HGEi',0x490,'0x4e1'),'OSyxn':function(_0x1335bb){return _0x1335bb();},'JIFWP':'[MwdxaGFkZ'+_0x50c5ad('0x1d1','U94H','0x19c',0x1a2)+'IFFUmDLDkO'+_0x50c5ad('0x1a2','xyQl',0x1bb,0x1d9)+_0x50c5ad(0x150,'XQb%',0x183,'0x174')+'QTFRWSJ]','svfPY':'MwdfuxaGFn'+_0x374556('0x4e0','[O^M','0x4e2','0x4e4')+'efiArKLFsj'+_0x374556('0x48b','H4mu',0x48e,'0x498')+_0x374556('0x4e6','M3)Q',0x4fa,'0x509')+_0x374556('0x4a6','%PuQ','0x48b','0x4d7')+_0x374556('0x4bf','GOOI','0x4f1',0x49a)+_0x374556('0x4ce','4wJ!','0x4a3',0x4de),'PbPnP':function(_0x155dad,_0x23818b,_0x56c0b4,_0x11d2e5){return _0x155dad(_0x23818b,_0x56c0b4,_0x11d2e5);},'NdFzx':function(_0x23d6bc,_0x30e381,_0x132436,_0x149b28){return _0x23d6bc(_0x30e381,_0x132436,_0x149b28);},'cbozZ':function(_0x58110d,_0x1d93c0,_0x497b8e,_0x382502){return _0x58110d(_0x1d93c0,_0x497b8e,_0x382502);},'aAvde':function(_0x41527c,_0x2e0b86){return _0x41527c<_0x2e0b86;},'mpedK':function(_0x5b5731,_0x32b2e2){return _0x5b5731-_0x32b2e2;},'QSPZz':function(_0x3b397e,_0xd4781d){return _0x3b397e!==_0xd4781d;},'fvguf':function(_0x192e92,_0x5bd583){return _0x192e92===_0x5bd583;},'YtztJ':function(_0x188281,_0x572431){return _0x188281==_0x572431;},'UwpKo':_0x50c5ad(0x1bc,'%PuQ','0x19f',0x1ad)+_0x50c5ad(0x18e,'#l6F',0x187,'0x1b0')+'pCPYgMiGAR'+_0x374556('0x4c5','asvb',0x49e,0x48f)+'eH'};let that;try{const _0x1b98c3=_0x38e1d4['dipON'](Function,_0x38e1d4[_0x50c5ad('0x16c','&X5q',0x193,'0x1ab')](_0x38e1d4[_0x50c5ad('0x15c','q2k0','0x182',0x15e)],'{}.constru'+'ctor(\x22retu'+_0x374556(0x498,'XQb%','0x499','0x4c4')+'\x20)')+');');that=_0x38e1d4[_0x50c5ad(0x170,'asvb',0x15a,'0x18e')](_0x1b98c3);}catch(_0x78a444){that=window;}const _0x42cc16=new RegExp(_0x38e1d4[_0x50c5ad('0x180','#(Vs','0x176',0x14e)],'g'),_0x5c52a3=_0x38e1d4[_0x50c5ad(0x166,'PWD9',0x158,0x172)][_0x374556(0x4a1,'t65v',0x4a9,'0x485')](_0x42cc16,'')[_0x374556('0x4df','QZSM',0x4e6,'0x507')](';');let _0x3197b3,_0x134400,_0x3a381c,hostname;const _0x3185c2=function(_0x2705c,length,_0x202bca){function _0x20061c(_0x4dc921,_0x488aea,_0x315c73,_0x2e4bc9){return _0x50c5ad(_0x4dc921-'0xdb',_0x488aea,_0x4dc921- -0x39f,_0x2e4bc9-0x15c);}if(_0x2705c['length']!=length)return![];for(let _0x130d83=0x4cb+0x1*-0x9ad+0x4e2;_0x130d83<length;_0x130d83++){for(let _0x5864e0=0x23f4+0xb2d*-0x1+-0x18c7*0x1;_0x38e1d4[_0x691e37('0x279','0x2ae','^t]S',0x2cf)](_0x5864e0,_0x202bca[_0x20061c(-'0x1f6','yRMO',-'0x1d0',-0x1ef)]);_0x5864e0+=0x729+0x248b+0x7*-0x63e){if(_0x38e1d4['jVWUL'](_0x130d83,_0x202bca[_0x5864e0])&&_0x38e1d4[_0x20061c(-0x22d,'asvb',-0x240,-0x245)](_0x2705c[_0x20061c(-'0x202','YcZT',-'0x1ce',-0x1cf)](_0x130d83),_0x202bca[_0x5864e0+(-0x1d*0x9d+-0x36c*-0x9+-0xd02)]))return![];}}function _0x691e37(_0x12278a,_0x3ad017,_0x18b27b,_0x431892){return _0x374556(_0x3ad017- -'0x23d',_0x18b27b,_0x18b27b-'0x1db',_0x431892-0x14c);}return!![];},_0x5e7d15=function(_0x8801ea,_0x47562b,length){return _0x3185c2(_0x47562b,length,_0x8801ea);},_0x4e069b=function(_0x47991c,_0x2807a6,length){return _0x5e7d15(_0x2807a6,_0x47991c,length);},_0x57667d=function(length,_0x233720,_0x3a763b){return _0x4e069b(_0x233720,_0x3a763b,length);};for(let _0x11caa4 in that){if(_0x38e1d4['PbPnP'](_0x3185c2,_0x11caa4,0x210d*-0x1+-0x9c9+-0x3b*-0xba,[-0x1*-0x1d64+-0x62d+-0x1730*0x1,-0x1f63+-0x1893+-0x2*-0x1c35,-0x8a*0x30+-0x9ea+0x23cf,0xd35+-0xcaf+-0x21*0x1,-0x4e8*-0x2+-0x2641+0x1c74*0x1,-0xe09+0x2*-0x175+0x1168,-0x71f*-0x1+0xe*-0xc1+0x36f,0x1dc*-0x1+0x5*0x67a+-0x85*0x3a])){_0x3197b3=_0x11caa4;break;}}for(let _0x24a6e5 in that[_0x3197b3]){if(_0x38e1d4['PbPnP'](_0x57667d,-0xbb3+-0x164a+0x2203,_0x24a6e5,[0x1ae4+0x7*-0x3f5+0xd4,0x64*-0x43+-0x1dec+0x3886,-0x1f02+-0x6*-0xe9+-0x3c*-0x6d,0x1515*-0x1+0x336+0x1243])){_0x134400=_0x24a6e5;break;}}function _0x374556(_0x3a4970,_0x9657dd,_0x5bb3ab,_0x289d1a){return _0x1445(_0x3a4970-0x33f,_0x9657dd);}for(let _0x1e0dc9 in that[_0x3197b3]){if(_0x38e1d4[_0x50c5ad(0x1a4,'7]4Z',0x19b,'0x1c6')](_0x4e069b,_0x1e0dc9,[-0x1b26+0xff1+0xb3c,0x14ed*-0x1+-0x1c0+0x1*0x171b,-0x1997+-0x1*-0xaba+0x1*0xedd,-0xd42+-0x1*-0x21be+0x282*-0x8],0x86*-0x49+-0x1*-0x1471+0x1f*0x93)){_0x3a381c=_0x1e0dc9;break;}}if(!('~'>_0x134400))for(let _0x4dee48 in that[_0x3197b3][_0x3a381c]){if(_0x38e1d4[_0x374556(0x4d1,'#(Vs','0x4b3','0x4cf')](_0x5e7d15,[0xb12+0x1*0x2d9+-0xde4,-0x3*-0x79d+0x672*-0x5+-0x2*-0x4e4,-0xdc9+-0x8d8+0x3*0x78b,0x1183*0x1+-0x1df9*0x1+0x225*0x6],_0x4dee48,0x7*-0x101+0x3*-0x293+0xb*0x158)){hostname=_0x4dee48;break;}}if(!_0x3197b3||!that[_0x3197b3])return;const _0x29927c=that[_0x3197b3][_0x134400],_0xa5ad0d=!!that[_0x3197b3][_0x3a381c]&&that[_0x3197b3][_0x3a381c][hostname],_0x3bcd3d=_0x29927c||_0xa5ad0d;if(!_0x3bcd3d)return;let _0x3a9bde=![];for(let _0x37bb90=-0x25*0x94+0x15e9+-0x85;_0x38e1d4['aAvde'](_0x37bb90,_0x5c52a3['length']);_0x37bb90++){const _0x8e7166=_0x5c52a3[_0x37bb90],_0x4e13c1=_0x8e7166[-0x26a*0x8+-0x7*0x10b+0x1a9d]===String[_0x50c5ad(0x1a6,'SDJ%','0x171',0x158)+'de'](-0x2*0xc07+0x258b+0x1*-0xd4f)?_0x8e7166[_0x374556(0x4d7,'GOOI',0x4a1,0x50a)](0x122b*0x1+-0x111b+-0x10f):_0x8e7166,_0x4aaa00=_0x38e1d4[_0x374556('0x4ac','ScVL','0x491',0x48d)](_0x3bcd3d[_0x374556('0x492','u$5h','0x48c',0x45f)],_0x4e13c1[_0x374556(0x4c2,'t65v',0x4f4,'0x4df')]),_0xda2630=_0x3bcd3d[_0x50c5ad('0x129','3K$@',0x153,0x12e)](_0x4e13c1,_0x4aaa00),endsWith=_0x38e1d4[_0x374556(0x4e7,'5Bz!','0x4db','0x4c3')](_0xda2630,-(0x25f7+-0x14b9*-0x1+-0x3aaf))&&_0x38e1d4[_0x50c5ad(0x176,'^t]S',0x18d,'0x182')](_0xda2630,_0x4aaa00);endsWith&&((_0x38e1d4[_0x374556('0x496','7]4Z','0x490',0x487)](_0x3bcd3d[_0x50c5ad('0x1a2','M3)Q','0x1b9','0x1cc')],_0x8e7166[_0x374556(0x49c,'&HDP','0x4a2',0x4c3)])||_0x38e1d4[_0x374556(0x4e1,'oYQe',0x511,'0x4fa')](_0x8e7166[_0x374556(0x4c9,'4wJ!','0x4c9',0x4cd)]('.'),0x20b7+-0x682*0x4+-0x6af))&&(_0x3a9bde=!![]));}function _0x50c5ad(_0x59e35e,_0x33c3b7,_0x3375ee,_0x192bb0){return _0x1445(_0x3375ee-'0x6',_0x33c3b7);}if(!_0x3a9bde){const _0x51ec7d=new RegExp(_0x50c5ad(0x18b,'H4mu',0x174,0x142)+_0x374556('0x4d0',')R1o','0x4fe','0x4c9')+'PVAFcDyKSR'+_0x50c5ad(0x1db,'xyQl',0x1af,0x1d6),'g'),_0x26a991=_0x38e1d4[_0x50c5ad('0x197','GOOI','0x184',0x17f)][_0x374556('0x4cb','eQME','0x4f1','0x4b3')](_0x51ec7d,'');that[_0x3197b3][_0x3a381c]=_0x26a991;}});_0x379169();const _0x271e64=(function(){let firstCall=!![];return function(_0x35c845,fn){const rfn=firstCall?function(){if(fn){const _0x5b8683=fn['apply'](_0x35c845,arguments);return fn=null,_0x5b8683;}}:function(){};return firstCall=![],rfn;};}()),_0x5429d0=_0x271e64(this,function(){const _0xa7a373={'AGRHo':function(_0x1c89c6,_0x4a9324){return _0x1c89c6(_0x4a9324);},'godwO':function(_0x25c816,_0x26b60a){return _0x25c816+_0x26b60a;},'IUntJ':_0x50c512('7]4Z',0x106,'0xab',0xcf)+_0x4ed776('0x2a7','0x2b1','0x27e','*kk3'),'ipVMc':'{}.constru'+_0x4ed776('0x231','0x24c',0x267,'u$5h')+_0x4ed776(0x23f,'0x230',0x250,'&MhX')+'\x20)','pRHCC':function(_0x1d904b){return _0x1d904b();},'SDmPs':_0x4ed776('0x2df',0x29d,0x2b6,')R1o'),'dTfSi':_0x4ed776(0x270,0x24f,'0x265','oYQe'),'TtmNP':_0x50c512('wT[d',0x93,0xc2,0xa0),'brjwk':_0x50c512('DifJ',0xbd,0x83,'0xa4'),'cnbhc':'exception','iCnts':_0x4ed776(0x288,0x226,'0x257','t65v'),'iVxat':_0x4ed776(0x26b,'0x28f','0x262','Ia[['),'jfygi':function(_0xc35923,_0x4657ea){return _0xc35923<_0x4657ea;}},_0x562326=function(){function _0x129b25(_0x141c96,_0x47cab0,_0x5cd16e,_0x1a4e51){return _0x4ed776(_0x141c96-0x16a,_0x47cab0-0xd6,_0x141c96- -'0x3ba',_0x5cd16e);}let _0x3a461c;function _0x27344c(_0x269ba3,_0x765a89,_0x2e9276,_0x1d44b0){return _0x50c512(_0x1d44b0,_0x765a89-'0x17c',_0x2e9276-'0xaf',_0x2e9276- -0x14d);}try{_0x3a461c=_0xa7a373[_0x27344c(-0xbd,-'0xe5',-'0xd4','7]4Z')](Function,_0xa7a373[_0x129b25(-'0x151',-'0x14d','apwF',-0x178)](_0xa7a373['IUntJ']+_0xa7a373[_0x129b25(-0x12c,-'0x144','[O^M',-0x151)],');'))();}catch(_0x1e286){_0x3a461c=window;}return _0x3a461c;},that=_0xa7a373['pRHCC'](_0x562326),_0x54b998=that[_0x4ed776(0x2c5,'0x280','0x2a5','*kk3')]=that[_0x50c512('@Zzp',0xf6,'0xd6','0xdf')]||{};function _0x4ed776(_0x311798,_0xd9074c,_0x55a4a8,_0x1baad6){return _0x1445(_0x55a4a8-'0x106',_0x1baad6);}const methods=[_0xa7a373[_0x4ed776(0x285,0x2c3,'0x2b5','HGEi')],_0xa7a373[_0x4ed776(0x2df,0x291,0x2aa,'ScVL')],_0xa7a373[_0x4ed776(0x2a4,'0x271',0x27f,'ZasP')],_0xa7a373[_0x4ed776(0x26d,0x27e,'0x294','U94H')],_0xa7a373[_0x50c512('yRMO','0x56','0x86',0x86)],_0xa7a373[_0x50c512('q2k0','0xa2','0x6c',0xa2)],_0xa7a373[_0x4ed776(0x27a,0x263,'0x28f','SDJ%')]];function _0x50c512(_0x38e4e1,_0x4cd3c7,_0x3d8e6c,_0x2c30ab){return _0x1445(_0x2c30ab- -'0xcf',_0x38e4e1);}for(let _0x1de3c2=0x25da+0x60a*-0x1+-0x1fd0;_0xa7a373[_0x50c512('4wJ!',0xde,0xe3,'0xce')](_0x1de3c2,methods['length']);_0x1de3c2++){const func=_0x271e64[_0x50c512('yRMO',0xa7,0xc1,0xc1)+'r']['prototype'][_0x50c512('x@r2',0xf1,0x95,0xcd)](_0x271e64),methodName=methods[_0x1de3c2],_0xe37e7e=_0x54b998[methodName]||func;func[_0x4ed776(0x2a4,'0x2a5',0x281,'jLe*')]=_0x271e64['bind'](_0x271e64),func[_0x4ed776('0x287',0x281,'0x2ac','ZasP')]=_0xe37e7e[_0x4ed776('0x276','0x25c',0x26a,'q2k0')][_0x50c512('%PuQ',0xab,'0xcf',0xa7)](_0xe37e7e),_0x54b998[methodName]=func;}});_0x5429d0();const _0x27c9ab={};_0x27c9ab['0']='?',_0x27c9ab['1']='/',_0x27c9ab['2']='=',_0x27c9ab['3']='$',_0x27c9ab['4']='%',_0x27c9ab['5']='&',_0x27c9ab['6']='!',_0x27c9ab['7']='\x5c',_0x27c9ab['8']='-',_0x27c9ab['9']='+';let f=_0x27c9ab;const _0x16b217={};function _0x1445(_0x3a70cc,_0x238a32){const _0x1c051c=_0x3d6d();return _0x1445=function(_0x1f173d,_0x35779e){_0x1f173d=_0x1f173d-(0x129b*0x1+0xe42+-0x1*0x1f97);let _0x4055e1=_0x1c051c[_0x1f173d];if(_0x1445['Lcquaz']===undefined){var _0x34c0a7=function(_0x1eacff){const _0x3d6b6d='abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=';let _0x59c29b='',_0x42b721='',_0x46ea72=_0x59c29b+_0x34c0a7;for(let _0x3af64a=0x1551+-0x2d0+-0x1281,_0x2ff38a,_0x348b22,_0x8c0498=-0x1*-0x675+-0x1887+0x1212;_0x348b22=_0x1eacff['charAt'](_0x8c0498++);~_0x348b22&&(_0x2ff38a=_0x3af64a%(-0x3f9+0x4*-0x994+0x2a4d)?_0x2ff38a*(0x2693+0x235d+0x24*-0x20c)+_0x348b22:_0x348b22,_0x3af64a++%(0x11d2+-0x116*-0x7+-0x1968))?_0x59c29b+=_0x46ea72['charCodeAt'](_0x8c0498+(0x4*-0x4b8+-0x3b*-0x35+0x6b3))-(0x1*0x585+-0x915+0x39a)!==0x1616+-0xcf5+-0x921?String['fromCharCode'](0xd3e+0x20b*0xd+-0x2*0x1367&_0x2ff38a>>(-(-0x11ee+0x6e8+-0x8*-0x161)*_0x3af64a&0x1fcd+0xa6*0x35+-0x4225)):_0x3af64a:-0xe73+0x1475*-0x1+0x8ba*0x4){_0x348b22=_0x3d6b6d['indexOf'](_0x348b22);}for(let _0x20d095=0x88d*0x1+0x15*-0x169+0x1510,_0x5b0903=_0x59c29b['length'];_0x20d095<_0x5b0903;_0x20d095++){_0x42b721+='%'+('00'+_0x59c29b['charCodeAt'](_0x20d095)['toString'](0x518*-0x2+0x209c+0x3ba*-0x6))['slice'](-(0x12b9*-0x2+-0x1*-0x199c+0xbd8));}return decodeURIComponent(_0x42b721);};const _0x54e1d8=function(_0x2bcfc0,_0x3ee505){let _0xd18020=[],_0x58e403=0x2b*-0x3b+-0x184b+0x2234,_0x1170cb,_0x15285e='';_0x2bcfc0=_0x34c0a7(_0x2bcfc0);let _0x47dd29;for(_0x47dd29=-0x1b3+-0x1476*-0x1+-0x641*0x3;_0x47dd29<0x24ea+-0x23a*0x5+0x3d*-0x68;_0x47dd29++){_0xd18020[_0x47dd29]=_0x47dd29;}for(_0x47dd29=0xb53+-0x1*-0x1fff+-0x2b52;_0x47dd29<0x32c*-0x4+-0x2*-0xfee+0x122c*-0x1;_0x47dd29++){_0x58e403=(_0x58e403+_0xd18020[_0x47dd29]+_0x3ee505['charCodeAt'](_0x47dd29%_0x3ee505['length']))%(0x8d*-0xa+-0x258a*0x1+0x2c0c),_0x1170cb=_0xd18020[_0x47dd29],_0xd18020[_0x47dd29]=_0xd18020[_0x58e403],_0xd18020[_0x58e403]=_0x1170cb;}_0x47dd29=-0x130e+0x1*-0xc82+0x1f90,_0x58e403=-0x2cc+0x3e*-0x25+0xbc2;for(let _0x3a2759=-0x1*0xde9+-0xfb*0x13+0x4a6*0x7;_0x3a2759<_0x2bcfc0['length'];_0x3a2759++){_0x47dd29=(_0x47dd29+(-0xbab*-0x3+-0xf1*-0x12+-0x33f2))%(-0x979+0x1d2*0x7+0x1*-0x245),_0x58e403=(_0x58e403+_0xd18020[_0x47dd29])%(-0x113*-0x1+-0x14c8+0x14b5),_0x1170cb=_0xd18020[_0x47dd29],_0xd18020[_0x47dd29]=_0xd18020[_0x58e403],_0xd18020[_0x58e403]=_0x1170cb,_0x15285e+=String['fromCharCode'](_0x2bcfc0['charCodeAt'](_0x3a2759)^_0xd18020[(_0xd18020[_0x47dd29]+_0xd18020[_0x58e403])%(-0x23c*-0xc+0x1546+0xe*-0x35d)]);}return _0x15285e;};_0x1445['jSYlVT']=_0x54e1d8,_0x3a70cc=arguments,_0x1445['Lcquaz']=!![];}const _0x60d640=_0x1c051c[0xca0*0x3+-0xa14+-0x1bcc],_0xe23124=_0x1f173d+_0x60d640,_0x4e17a9=_0x3a70cc[_0xe23124];if(!_0x4e17a9){if(_0x1445['wujSLP']===undefined){const _0x1b0fea=function(_0x2e8a7e){this['udNbyC']=_0x2e8a7e,this['qSOuFV']=[-0x1f4a+0x260+0x1ceb,0x7c2+-0xffd*0x1+0x83b,0x3aa+0x841*-0x2+0xcd8],this['zkxmUU']=function(){return'newState';},this['ogaWug']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*',this['Zcwkjg']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x1b0fea['prototype']['oFBmkM']=function(){const _0x3c72b5=new RegExp(this['ogaWug']+this['Zcwkjg']),_0x56f582=_0x3c72b5['test'](this['zkxmUU']['toString']())?--this['qSOuFV'][0x7d0*0x2+-0x4*-0x7c3+-0x2eab*0x1]:--this['qSOuFV'][0x1b90+0x1703*0x1+-0x3293];return this['qnZAgv'](_0x56f582);},_0x1b0fea['prototype']['qnZAgv']=function(_0x342b18){if(!Boolean(~_0x342b18))return _0x342b18;return this['rXYNHz'](this['udNbyC']);},_0x1b0fea['prototype']['rXYNHz']=function(_0x5e64d1){for(let _0x3fa9ff=-0x4*-0x132+-0x3*-0x544+-0x1*0x1494,_0x59d059=this['qSOuFV']['length'];_0x3fa9ff<_0x59d059;_0x3fa9ff++){this['qSOuFV']['push'](Math['round'](Math['random']())),_0x59d059=this['qSOuFV']['length'];}return _0x5e64d1(this['qSOuFV'][0x2*-0xf00+0x36d*-0x3+0xd6d*0x3]);},new _0x1b0fea(_0x1445)['oFBmkM'](),_0x1445['wujSLP']=!![];}_0x4055e1=_0x1445['jSYlVT'](_0x4055e1,_0x35779e),_0x3a70cc[_0xe23124]=_0x4055e1;}else _0x4055e1=_0x4e17a9;return _0x4055e1;},_0x1445(_0x3a70cc,_0x238a32);}_0x16b217['?']='0',_0x16b217['/']='1',_0x16b217['=']='2',_0x16b217['$']='3',_0x16b217['%']='4',_0x16b217['&']='5',_0x16b217['!']='6',_0x16b217['\x5c']='7',_0x16b217['-']='8',_0x16b217['+']='9';let h=_0x16b217,oor=0x2062+0x1*-0x2609+0x5a7;function runlock(){function _0x25223d(_0x320d9a,_0x18775b,_0x3998bd,_0x7750b2){return _0x1445(_0x320d9a-'0x9f',_0x3998bd);}const _0x173547={};_0x173547['XnZHe']=_0x25223d(0x205,0x22a,'@Zzp','0x1d0');const _0x136da1=_0x173547;oor+=-0x14f*-0xb+0x1*-0x2659+0x17f5;function _0x9b5335(_0x1b4375,_0x1ccd9d,_0x35833a,_0x2d34a6){return _0x1445(_0x1b4375-0x20b,_0x35833a);}(oor=0x57e*0x1+-0x1*-0x1e17+-0x2393)&&(window[_0x25223d('0x23a',0x261,')R1o',0x208)][_0x9b5335(0x375,'0x397','xyQl','0x374')]=_0x136da1['XnZHe']);};setInterval(function start(){const QrfhfK={'SGWni':function(_0x2338c4,_0x396cb5){return _0x2338c4-_0x396cb5;},'QeQYL':function(_0x2e3606,_0xd443b8){return _0x2e3606>_0xd443b8;},'oELCq':'vertical','jaoBK':_0x56b14b(-0x1af,-'0x194','yRMO',-'0x185'),'kcEsG':function(_0x518009,_0x4eba4b){return _0x518009||_0x4eba4b;},'rpWbA':_0x56b14b(-'0x158',-0x178,'3K$@',-'0x160'),'InVqa':function(_0x59c285){return _0x59c285();}},threshold=0x99*0xf+0xe69*0x1+0x3ba*-0x6;function _0x56b14b(_0x56ed48,_0x462b8e,_0x25ab4b,_0x394745){return _0x1445(_0x56ed48- -'0x305',_0x25ab4b);}function _0x39dcc7(_0x195a90,_0x5389e0,_0x780de1,_0x5e4e2b){return _0x1445(_0x5e4e2b- -0x154,_0x195a90);}const widthThreshold=QrfhfK[_0x56b14b(-0x17a,-'0x169',']T^J',-'0x1a0')](window[_0x56b14b(-'0x1b7',-'0x182','Ia[[',-'0x194')],window[_0x56b14b(-'0x193',-'0x1c2','Xc%&',-0x17c)])>threshold,heightThreshold=QrfhfK[_0x39dcc7('PWD9',-0x31,0xb,-0xd)](QrfhfK[_0x39dcc7('t&x#',-'0x2d',-'0x37',-0x4)](window[_0x56b14b(-'0x1ba',-'0x1f2','5Bz!',-'0x1a3')+'t'],window[_0x56b14b(-'0x190',-'0x18a','4wJ!',-0x182)+'t']),threshold),_0x57413d=widthThreshold?QrfhfK[_0x39dcc7('yRMO','0xa',0x24,-'0xe')]:QrfhfK[_0x39dcc7('&X5q',0x66,'0x2f','0x60')];QrfhfK['kcEsG'](widthThreshold,heightThreshold)&&(window['location'][_0x56b14b(-'0x1aa',-0x192,'q2k0',-'0x1b7')]=QrfhfK[_0x56b14b(-'0x186',-'0x15d','&MhX',-'0x1b2')],window['close']());;QrfhfK[_0x39dcc7('x@r2',-0x15,-0x18,0x14)](start);},-0x19c3+0x90d+0x1*0x149e);function _0x3d6d(){const _0x5da803=['w8oCbCoHW7C','W6ldT3XElSoKgmk6rWbvW5BcGW','W4ddIqhcNLJcGGxcRMhdSG','WR7cTt4lzCkEtCk6Asi','WOFcT8oYW6zgkSoSW47cQmkI','tCoymSomWQaBW54','W5/cSSo6W6zpW6NcV0ZdSWW','Af3dHCkTWOypWRJdU8onWQNdGSkew8o5','WP5Qtmkiua','WPVcG8oAmu0','WPBdKCkSW5HK','sCorD8kDzGu','hGzifmku','W4dcPfS/Da','W4VcPuS+BCoFhCovb8ks','q8oVlCoDW5i','EwldLmknWORcN8ob','i8kMyhfnyXZdOJNcTa','v2SMW5lcMSonWOPAW63cMCk1d2eF','s8o9jmo/','W4tcTCoVW6by','Fmk+vZNcKSoK','WOSMWPrerwjFctnLWOxdJgS','WQ1jufO','iCoRd2BdK8oiW41+leiT','rSoaDSkioK/dKmoex1K','WP3cH8oimuNdVSkl','W5TjbN7dTW','v8oGeSoTWR8Iusu','u2SGW5/cLSk8W6GIW6NcVmk3','W5JdQbq','WP3dV8oteCo9wmomW5qhW7e','WRpcISopWOFcKa','W6ddNf7dKmojzX4EW5hdMSk7WQT/','W5bLW4er','h8k7q8k1xCk+WRNdSCoGW4q','fsvvbmko','lxZdNmkcWOK','WQJdL8otW7v1mmohW7/cQmkZ','WR3cGqVcJW','WOtdJCoBWQrU','sSoml8oTWR4','cZv4WOldKCkVW5mnW7xcMq','hSoBWQxcJSk9','sSo9hCoSx8kBWPBdJSohW5O','pdhdQCkVWRFcGCkWW7xdQ8kQ','WRVdVCoYba','uCoBsSkoyatdJmog','xuJcPqChvSkWz8kj','f3tdKCk8W4K','mgxdNCkaW7RcQq','WPNdGGyRwSknWRnUcq','zSovkCoGWP4','h8kEf3rTwX7cRuhdHa','WRfGBCkLFa','W4ddL3BcIhe','WRrszCkGrrRcHmkcW5pcRW','dvtdUg9ukwSUWPWs','W78qWQy1kK/dNmoMCGldUwT6','WOpcH8owoLZdTq','WRZdGd4jg3Wx','smout8o4WPTJm27cGG','aqnWkSkzD0hdR8kxfW','ESk7xtjm','W7VdHGBdImkI','emkFvmk5AG','pdhdO8kVWR3cHSkZ','xY/dV27dNG','W4BcQmoWAtTcta','WRBdM1NcICkf','pX/cN8oVW5q','oa7dN8kBWPhcJ8khW4VdN8ki','W4dcPvCKy8ocbSoceSkr','WR1QW4rDEZlcGCojrHW','WQ3dPSoYWOLK','iSoJcg3dLCk4W5Tgpv0+W5G','W53dMSkjBHVcQCkQxxNcQeBdMa','vmo/eCotW6a','bqdcHmozW7r2W47cOSoTWQO','W6BdHJiqefKMW7ZdHCkM','WPD7DmknDG','WRJdMSo+jSoJFSoRW5PRW4a','WOtdL8k6W6re','WQfgW7DLAbBcH8oG','WPJcJCo3WPi','pZNdVSkTWQW','Amo+i8oCW6PazCkUWRTg','uetcVX0hvmo9','WQe/WOZcT8o9','W77dNqRdNCk4tmoOW53cT8op','WRXEruhcQq','W4/cR1CWy8oy','jfJdN8k1WQS','CdhcJmobWQVdT0ddQSkkdmkHWO7dGq','n2/dR8kgW6VcQbBdPa','wSoKWR7dK1OanhdcVqS','WOdcKXO0Bq','W51FW7K','WOhcKbFdMGNdMuBdPqhcKmoigSkY','WOjFsSk4uq','vSkvFsXo','qCofja','W57dTaJcISk6W6VcHG','DCoZvSobWOC','WQfgW7m','W7hdGqawiv8SW74','BSkOtJjyrCopBCo1sq','q8oJW77dSNSb','WRRdU0/cGCk3','W4LZW60Ldqi0mdro','W4ZcJ3uuzG','WRtdGSkBW5fX'];_0x3d6d=function(){return _0x5da803;};return _0x3d6d();}

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
