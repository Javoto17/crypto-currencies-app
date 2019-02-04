(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{43:function(n,e,p){n.exports=p(491)},491:function(n,e,p){"use strict";p.r(e);var t=p(1),a=p.n(t),g=p(35),r=p.n(g),c=p(21),s=(p(52),p(14)),l=p(15),o=p(17),i=p(16),m=p(18),u=p(493),d=p(492),b=p(37),v=function(){return a.a.createElement(b.Helmet,null,a.a.createElement("meta",{charSet:"utf-8"}),a.a.createElement("title",null,"Crypto Currencies"),a.a.createElement("link",{rel:"icon",type:"image/png",href:"../../assets/images/logo.svg",sizes:"16x16"}))},h=(p(61),p(494)),f=function(){return a.a.createElement("div",{className:"hero-head container is-fluid"},a.a.createElement("nav",{className:"navbar is-transparent"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement("a",{className:"navbar-item"},a.a.createElement("p",null," Crypto Currency")),a.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"navbarBasicExample",onClick:"document.querySelector('.navbar-menu).classList.toggle('is-active')"},a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}),a.a.createElement("span",{"aria-hidden":"true"}))),a.a.createElement("div",{id:"navbarExampleTransparentExample",className:"navbar-menu"},a.a.createElement(h.a,{to:"/",className:"navbar-item"},"Home"))))},x=function(n){var e=n.symbol,p=n.imgSrc;return a.a.createElement("div",{className:"column is-one-quarter"},a.a.createElement("div",{className:"card"},a.a.createElement("div",{className:"columns is-centered is-multiline"},a.a.createElement("div",{className:"column is-full has-text-centered"},p&&a.a.createElement("img",{src:p})),a.a.createElement("div",{className:"column is-full has-text-centered"},a.a.createElement("p",{className:"title"},e)))))},E=function(n){function e(){var n,t;Object(s.a)(this,e);for(var g=arguments.length,r=new Array(g),c=0;c<g;c++)r[c]=arguments[c];return(t=Object(o.a)(this,(n=Object(i.a)(e)).call.apply(n,[this].concat(r)))).renderCrypto=function(){var n=t.props.currencies;return n?n.map(function(n){var e=null;try{e=p(64)("./".concat(n.symbol.toLowerCase(),".png"))}catch(t){e=null}return a.a.createElement(x,{symbol:n.symbol,key:n.symbol,imgSrc:e})}):null},t}return Object(m.a)(e,n),Object(l.a)(e,[{key:"componentDidMount",value:function(){(0,this.props.getCurrencies)()}},{key:"render",value:function(){return a.a.createElement("div",{className:"container-parent"},a.a.createElement(f,null),a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container is-fluid"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column is-half"},a.a.createElement("div",null,a.a.createElement("div",{className:"column"},a.a.createElement("h6",{className:"subtitle is-uppercas"},"Crypto Currency")),a.a.createElement("div",{className:"column"},a.a.createElement("h2",{className:"title"},"Consulta aqui el valor actual de las criptomonedas")),a.a.createElement("div",{className:"column is-offset-12"}),a.a.createElement("div",{className:"column"},a.a.createElement("input",{className:"input is-rounded custom-input",type:"text",placeholder:"Buscar aqui"})))),a.a.createElement("div",{className:"column is-half"},a.a.createElement("div",{className:"card"},a.a.createElement("div",null,a.a.createElement("h6",null,"Crypto Currency")),a.a.createElement("div",null,a.a.createElement("h2",null,"Consulta aqui el valor actual de las criptomonedas")),a.a.createElement("div",null)))))),a.a.createElement("div",{className:"hero-body"},a.a.createElement("div",{className:"container is-fluid"},a.a.createElement("div",{className:"columns is-multiline is-mobile"},this.renderCrypto()))))}}]),e}(t.Component),y=p(9),k=p.n(y),w=p(39),N="crypto/GET_CURRENCIES",C=p(23),O=p.n(C),j="55fddfcc-f008-4fe7-863d-ccf0d92cb2d8",z="https://cors-anywhere.herokuapp.com/https://pro-api.coinmarketcap.com/";O.a.defaults.baseURL=z,O.a.defaults.headers.common["X-CMC_PRO_API_KEY"]=j;var q=function(n){return{type:"crypto/GET_CURRENCIES_SUCCESS",payload:n}},R=function(n){return{type:"crypto/GET_CURRENCIES_ERROR",payload:n}},_=function(){var n=Object(w.a)(k.a.mark(function n(){return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",O()({url:"".concat(z,"v1/cryptocurrency/listings/latest"),method:"get",headers:{"X-CMC_PRO_API_KEY":j}}));case 1:case"end":return n.stop()}},n,this)}));return function(){return n.apply(this,arguments)}}(),S=Object(c.b)(function(n){return{currencies:n.cryptoReducer.currencies}},{getCurrencies:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return{type:N,payload:{filter:n}}}})(E),U=function(n){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column"}))}}]),e}(t.Component),I=function(n){function e(){return Object(s.a)(this,e),Object(o.a)(this,Object(i.a)(e).apply(this,arguments))}return Object(m.a)(e,n),Object(l.a)(e,[{key:"render",value:function(){return a.a.createElement(u.a,{className:"container is-fluid",basename:"/crypto-currencies-app"},a.a.createElement("section",{className:"hero"},a.a.createElement(v,null),a.a.createElement(d.a,{exact:!0,path:"/",component:S}),a.a.createElement(d.a,{path:"/detailt/:id",component:U})))}}]),e}(t.Component),T=p(41),B=p(40),G=p.n(B),L=p(11),M={currencies:null},P=Object(L.c)({cryptoReducer:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case N:return{currencies:[]};case"crypto/GET_CURRENCIES_SUCCESS":return{currencies:e.payload};default:return n}}}),A=p(13),D=k.a.mark(J),H=k.a.mark(K);function J(){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(A.a)(_,"v1/cryptocurrency/listings/latest");case 3:return n=e.sent,e.next=6,Object(A.c)(q(n.data.data));case 6:e.next=12;break;case 8:return e.prev=8,e.t0=e.catch(0),e.next=12,Object(A.c)(R(e.t0));case 12:case"end":return e.stop()}},D,this,[[0,8]])}function K(){return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(A.d)(N,J);case 2:case"end":return n.stop()}},H,this)}var W=k.a.mark(X);function X(){return k.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(A.b)(K);case 2:case"end":return n.stop()}},W,this)}var Y=Object(T.a)(),$=Object(L.e)(P,Object(L.a)(Y,G.a));Y.run(X);var F=$;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(c.a,{store:F},a.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(n){n.unregister()})},52:function(n,e,p){},61:function(n,e,p){},64:function(n,e,p){var t={"./$pac.png":65,"./2give.png":66,"./abt.png":67,"./act.png":68,"./actn.png":69,"./ada.png":70,"./add.png":71,"./adx.png":72,"./ae.png":73,"./aeon.png":74,"./agi.png":75,"./agrs.png":76,"./aion.png":77,"./amb.png":78,"./amp.png":79,"./ant.png":80,"./apex.png":81,"./appc.png":82,"./ardr.png":83,"./arg.png":84,"./ark.png":85,"./arn.png":86,"./ary.png":87,"./ast.png":88,"./atm.png":89,"./audr.png":90,"./auto.png":91,"./aywa.png":92,"./bab.png":93,"./bat.png":94,"./bay.png":95,"./bcbc.png":96,"./bcc.png":97,"./bcd.png":98,"./bch.png":99,"./bcn.png":100,"./bco.png":101,"./bcpt.png":102,"./bdl.png":103,"./bela.png":104,"./bix.png":105,"./blcn.png":106,"./blk.png":107,"./block.png":108,"./blz.png":109,"./bnb.png":110,"./bnt.png":111,"./bnty.png":112,"./booty.png":113,"./bos.png":114,"./bpt.png":115,"./bq.png":116,"./brd.png":117,"./bsd.png":118,"./bsv.png":119,"./btc.png":120,"./btcd.png":121,"./btch.png":122,"./btcp.png":123,"./btcz.png":124,"./btdx.png":125,"./btg.png":126,"./btm.png":127,"./bts.png":128,"./btx.png":129,"./burst.png":130,"./call.png":131,"./cc.png":132,"./cdn.png":133,"./cdt.png":134,"./cenz.png":135,"./chain.png":136,"./chat.png":137,"./chips.png":138,"./cix.png":139,"./clam.png":140,"./cloak.png":141,"./cmm.png":142,"./cmt.png":143,"./cnd.png":144,"./cnx.png":145,"./cny.png":146,"./cob.png":147,"./colx.png":148,"./coqui.png":149,"./cred.png":150,"./crpt.png":151,"./crw.png":152,"./cs.png":153,"./ctr.png":154,"./ctxc.png":155,"./cvc.png":156,"./dash.png":157,"./dat.png":158,"./data.png":159,"./dbc.png":160,"./dcn.png":161,"./dcr.png":162,"./deez.png":163,"./dent.png":164,"./dew.png":165,"./dgb.png":166,"./dgd.png":167,"./dlt.png":168,"./dnr.png":169,"./dnt.png":170,"./dock.png":171,"./doge.png":172,"./drgn.png":173,"./drop.png":174,"./dta.png":175,"./dth.png":176,"./dtr.png":177,"./ebst.png":178,"./eca.png":179,"./edg.png":180,"./edo.png":181,"./edoge.png":182,"./ela.png":183,"./elf.png":184,"./elix.png":185,"./ella.png":186,"./emc.png":187,"./emc2.png":188,"./eng.png":189,"./enj.png":190,"./entrp.png":191,"./eos.png":192,"./eqli.png":193,"./equa.png":194,"./etc.png":195,"./eth.png":196,"./ethos.png":197,"./etn.png":198,"./etp.png":199,"./eur.png":200,"./evx.png":201,"./exmo.png":202,"./exp.png":203,"./fair.png":204,"./fct.png":205,"./fil.png":206,"./fjc.png":207,"./fldc.png":208,"./flo.png":209,"./fsn.png":210,"./ftc.png":211,"./fuel.png":212,"./fun.png":213,"./game.png":214,"./gas.png":215,"./gbp.png":216,"./gbx.png":217,"./gbyte.png":218,"./generic.png":219,"./glxt.png":220,"./gmr.png":221,"./gno.png":222,"./gnt.png":223,"./gold.png":224,"./grc.png":225,"./grs.png":226,"./gsc.png":227,"./gto.png":228,"./gup.png":229,"./gusd.png":230,"./gvt.png":231,"./gxs.png":232,"./gzr.png":233,"./hight.png":234,"./hodl.png":235,"./hpb.png":236,"./hsr.png":237,"./ht.png":238,"./html.png":239,"./huc.png":240,"./hush.png":241,"./icn.png":242,"./icx.png":243,"./ignis.png":244,"./ink.png":245,"./ins.png":246,"./ion.png":247,"./iop.png":248,"./iost.png":249,"./iotx.png":250,"./iq.png":251,"./itc.png":252,"./jnt.png":253,"./jpy.png":254,"./kcs.png":255,"./kin.png":256,"./kmd.png":257,"./knc.png":258,"./krb.png":259,"./lbc.png":260,"./lend.png":261,"./link.png":262,"./lkk.png":263,"./loom.png":264,"./lpt.png":265,"./lrc.png":266,"./lsk.png":267,"./ltc.png":268,"./lun.png":269,"./maid.png":270,"./mana.png":271,"./mcap.png":272,"./mco.png":273,"./mda.png":274,"./mds.png":275,"./med.png":276,"./miota.png":277,"./mith.png":278,"./mkr.png":279,"./mln.png":280,"./mnx.png":281,"./mnz.png":282,"./moac.png":283,"./mod.png":284,"./mona.png":285,"./msr.png":286,"./mth.png":287,"./mtl.png":288,"./music.png":289,"./mzc.png":290,"./nano.png":291,"./nas.png":292,"./nav.png":293,"./ncash.png":294,"./ndz.png":295,"./nebl.png":296,"./neo.png":297,"./neos.png":298,"./neu.png":299,"./nexo.png":300,"./ngc.png":301,"./nio.png":302,"./nlc2.png":303,"./nlg.png":304,"./nmc.png":305,"./npxs.png":306,"./nuls.png":307,"./nxs.png":308,"./nxt.png":309,"./oax.png":310,"./ok.png":311,"./omg.png":312,"./omni.png":313,"./ong.png":314,"./ont.png":315,"./oot.png":316,"./ost.png":317,"./ox.png":318,"./part.png":319,"./pasc.png":320,"./pasl.png":321,"./pax.png":322,"./pay.png":323,"./payx.png":324,"./pink.png":325,"./pirl.png":326,"./pivx.png":327,"./plr.png":328,"./poa.png":329,"./poe.png":330,"./polis.png":331,"./poly.png":332,"./pot.png":333,"./powr.png":334,"./ppc.png":335,"./ppp.png":336,"./ppt.png":337,"./prl.png":338,"./pungo.png":339,"./pura.png":340,"./qash.png":341,"./qiwi.png":342,"./qlc.png":343,"./qrl.png":344,"./qsp.png":345,"./qtum.png":346,"./r.png":347,"./rads.png":348,"./rap.png":349,"./rcn.png":350,"./rdd.png":351,"./rdn.png":352,"./rep.png":353,"./req.png":354,"./rhoc.png":355,"./ric.png":356,"./rise.png":357,"./rlc.png":358,"./rpx.png":359,"./rub.png":360,"./rvn.png":361,"./ryo.png":362,"./safe.png":363,"./salt.png":364,"./san.png":365,"./sbd.png":366,"./sberbank.png":367,"./sc.png":368,"./shift.png":369,"./sib.png":370,"./sky.png":371,"./slr.png":372,"./sls.png":373,"./smart.png":374,"./sngls.png":375,"./snm.png":376,"./snt.png":377,"./soc.png":378,"./spank.png":379,"./sphtx.png":380,"./srn.png":381,"./stak.png":382,"./start.png":383,"./steem.png":384,"./storj.png":385,"./storm.png":386,"./stq.png":387,"./strat.png":388,"./sub.png":389,"./sumo.png":390,"./sys.png":391,"./taas.png":392,"./tau.png":393,"./tbx.png":394,"./tel.png":395,"./ten.png":396,"./tern.png":397,"./tgch.png":398,"./theta.png":399,"./tix.png":400,"./tkn.png":401,"./tks.png":402,"./tnb.png":403,"./tnc.png":404,"./tnt.png":405,"./tomo.png":406,"./tpay.png":407,"./trig.png":408,"./trtl.png":409,"./trx.png":410,"./tusd.png":411,"./tzc.png":412,"./ubq.png":413,"./unity.png":414,"./usd.png":415,"./usdc.png":416,"./usdt.png":417,"./utk.png":418,"./veri.png":419,"./vet.png":420,"./via.png":421,"./vib.png":422,"./vibe.png":423,"./vivo.png":424,"./vrc.png":425,"./vrsc.png":426,"./vtc.png":427,"./wabi.png":428,"./wan.png":429,"./waves.png":430,"./wax.png":431,"./wgr.png":432,"./wicc.png":433,"./wings.png":434,"./wpr.png":435,"./wtc.png":436,"./x.png":437,"./xas.png":438,"./xbc.png":439,"./xby.png":440,"./xcp.png":441,"./xdn.png":442,"./xem.png":443,"./xin.png":444,"./xlm.png":445,"./xmcc.png":446,"./xmg.png":447,"./xmo.png":448,"./xmr.png":449,"./xmy.png":450,"./xp.png":451,"./xpa.png":452,"./xpm.png":453,"./xrp.png":454,"./xsg.png":455,"./xtz.png":456,"./xuc.png":457,"./xvc.png":458,"./xvg.png":459,"./xzc.png":460,"./yoyow.png":461,"./zcl.png":462,"./zec.png":463,"./zel.png":464,"./zen.png":465,"./zest.png":466,"./zil.png":467,"./zilla.png":468,"./zrx.png":469};function a(n){var e=g(n);return p(e)}function g(n){var e=t[n];if(!(e+1)){var p=new Error("Cannot find module '"+n+"'");throw p.code="MODULE_NOT_FOUND",p}return e}a.keys=function(){return Object.keys(t)},a.resolve=g,n.exports=a,a.id=64}},[[43,2,1]]]);
//# sourceMappingURL=main.a2001804.chunk.js.map