(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{"QMe+":function(e,t,a){"use strict";a.r(t);var l=a("q1tI"),n=a.n(l),r=a("87im"),c=a("KYPV"),o=a("Wbzz"),i=a("vOnD"),s=a("nNOZ"),m=a("jyLw"),u=a("Z/CU"),p=a("O4Du"),b=a("g2Kc"),h=a("RQdb"),g=a("DaBS"),E=Object(i.c)(r.p).withConfig({displayName:"_swap-calculator__StyledInputGroup",componentId:"sc-1el6eba-0"})(["margin:0;"]),d=function(){var e=Object(o.useStaticQuery)("3603673854"),t=Object(l.useState)("Synthetic"),a=t[0],i=t[1],d=function(e){i(e)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(r.a,null,n.a.createElement(b.e,{jc:"flex-start",ai:"center"},n.a.createElement(p.o,{to:"/trader-tools",color:"grey-5"},Object(u.g)("Traders' tools")),n.a.createElement("img",{src:g.a,alt:Object(u.g)("right arrow"),height:"16",width:"16",style:{margin:"0 8px"}}),n.a.createElement(p.x,null,Object(u.g)("Swap calculator")))),n.a.createElement(r.v,{direction:"column"},n.a.createElement(r.s,{as:"h3",type:"sub-section-title",align:"center",weight:"normal"},Object(u.g)("Our swap calculator helps you to estimate the swap charges required to keep your positions open overnight on Deriv MetaTrader 5 (DMT5).")),n.a.createElement(b.e,{mt:"80px",mb:"40px",tablet:{mt:"40px",mb:"24px"}},n.a.createElement(r.x,{active:"Synthetic"===a,onClick:function(){return d("Synthetic")}},n.a.createElement(p.x,{size:"var(--text-size-m)",align:"center"},Object(u.g)("Synthetic"))),n.a.createElement(r.x,{active:"Real"===a,onClick:function(){return d("Real")}},n.a.createElement(p.x,{size:"var(--text-size-m)",align:"center"},Object(u.g)("Financial")))),"Synthetic"===a?n.a.createElement(n.a.Fragment,null,n.a.createElement(r.l,{mb:"4.0rem"},n.a.createElement(r.w,null,n.a.createElement(c.c,{enableReinitialize:!0,initialValues:{swapCharge:0,swapChargeSymbol:"USD",symbol:"",volume:"",optionList:m.d,contractSize:"",swapRate:"",assetPrice:""},validate:s.m,onSubmit:function(e,t){var a=t.setFieldValue;a("swapCharge",Object(s.f)(e)),a("volume",Object(s.g)(e.volume)),a("swapRate",Object(s.h)(e.swapRate)),a("assetPrice",Object(s.g)(e.assetPrice))}},(function(e){var t=e.values,a=e.setFieldValue,l=e.handleBlur,o=e.errors,i=e.touched,g=e.setFieldError,d=e.setFieldTouched,w=e.isValid,f=e.dirty;return n.a.createElement(r.e,null,n.a.createElement(r.f,null,n.a.createElement(r.g,{htmlFor:"message"},Object(u.g)("Swap charge")),n.a.createElement(r.h,null,n.a.createElement(r.i,null,Object(s.i)(t.swapCharge)),n.a.createElement(r.j,null,t.swapChargeSymbol))),n.a.createElement(r.c,null,n.a.createElement(p.j,{mb:"3.6rem",option_list:t.optionList,label:Object(u.g)("Symbol"),default_option:m.c,selected_option:t.symbol,id:"symbol",onChange:function(e){a("swapCurrency",Object(s.b)(e)),a("contractSize",Object(s.a)(e)),a("symbol",e)},contract_size:t.contractSize,error:i.symbol&&o.symbol,onBlur:l}),n.a.createElement(r.p,null,n.a.createElement(c.a,{name:"volume",value:t.volume,onChange:function(e){a("volume",e)}},(function(e){var t=e.field;return n.a.createElement(h.a,Object.assign({},t,{id:"volume",type:"text",label:Object(u.g)("Volume"),autoComplete:"off",error:i.volume&&o.volume,onBlur:l,"data-lpignore":"true",handleError:function(e){a("volume","",!1),g("volume",""),d("volume",!1,!1),e.focus()},maxLength:"8",background:"white"}))}))),n.a.createElement(r.p,null,n.a.createElement(c.a,{name:"assetPrice",value:t.assetPrice,onChange:function(e){a("assetPrice",e)}},(function(e){var r=e.field;return n.a.createElement(h.a,Object.assign({},r,{id:"asset",type:"text",value:t.assetPrice,label:Object(u.g)("Asset price"),autoComplete:"off",error:i.assetPrice&&o.assetPrice,onBlur:l,"data-lpignore":"true",handleError:function(e){a("assetPrice","",!1),g("assetPrice",""),d("assetPrice",!1,!1),e.focus()},maxLength:"15",background:"white"}))}))),n.a.createElement(E,null,n.a.createElement(c.a,{name:"swapRate",value:t.swapRate,onChange:function(e){a("swapRate",e)}},(function(e){var r=e.field;return n.a.createElement(h.a,Object.assign({},r,{id:"swapRate",type:"text",value:t.swapRate,label:Object(u.g)("Swap rate"),autoComplete:"off",error:i.swapRate&&o.swapRate,onBlur:l,"data-lpignore":"true",handleError:function(e){a("swapRate","",!1),g("swapRate",""),d("swapRate",!1,!1),e.focus()},maxLength:"15",background:"white"}))}))),n.a.createElement(b.e,{mt:"1.5rem"},n.a.createElement(r.b,{secondary:!0,type:"submit",disabled:!w||!f},Object(u.g)("Calculate")))))}))),n.a.createElement(r.r,null,n.a.createElement(p.l,{as:"h3",type:"section-title",mb:"8px"},Object(u.g)("How to calculate swap charges")),n.a.createElement(p.x,null,n.a.createElement(u.c,{translate_text:"For synthetic, the swap charge is calculated on an annual basis for long and short positions based on this formula:"})),n.a.createElement(p.x,{mb:"2rem"},n.a.createElement(u.c,{translate_text:"<0>Swap charge = volume × contract size × asset price × (swap rate ÷ 100) ÷ 360</0>",components:[n.a.createElement("strong",{key:0})]})),n.a.createElement(p.x,{mb:"2rem"},n.a.createElement(u.c,{translate_text:"This gives you the swap charge in USD."})),n.a.createElement(p.l,{as:"h3",type:"section-title",mb:"16px"},Object(u.g)("Example calculation")),n.a.createElement(p.a,{has_single_state:!0},n.a.createElement(p.b,{header:Object(u.g)("Swap charge"),header_style:r.y,style:r.z,plus:!0},n.a.createElement(p.x,{mb:"2rem"},Object(u.g)("Let’s say you want to keep 0.01 lots of Volatility 75 Index with an asset price of 400,000 USD and swap rate of -7.5 open for one night.")),n.a.createElement(b.j.Desktop,null,n.a.createElement(p.s,{data:e.swap_synthetic_formula,alt:Object(u.g)("swap synthetic formula")})),n.a.createElement(b.j.Mobile,null,n.a.createElement(p.s,{data:e.swap_synthetic_formula_mobile,alt:Object(u.g)("swap synthetic formula mobile")})),n.a.createElement(r.n,{size:"14px"},n.a.createElement(r.u,null,n.a.createElement("li",null,n.a.createElement("span",null,n.a.createElement(u.c,{translate_text:"The contract size is one standard lot of Volatility 75 Index = 1"}))),n.a.createElement("li",null,n.a.createElement("span",null,n.a.createElement(u.c,{translate_text:"If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited."}))))),n.a.createElement(p.x,{mt:"1.6rem"},n.a.createElement(u.c,{translate_text:"So you will require a swap charge of <0>0.83 USD</0> to keep the position open for one night.",components:[n.a.createElement("strong",{key:0})]})))),n.a.createElement(r.q,{height:"auto"},n.a.createElement(r.t,{tertiary:"true",is_deriv_app_link:!0,to:"/mt5",external:"true",target:"_blank",rel:"noopener noreferrer"},Object(u.g)("Go to DMT5 dashboard")),n.a.createElement(r.t,{secondary:"true",to:"/trade-types/margin#swap-policy"},Object(u.g)("Learn more about swap")))))):n.a.createElement(n.a.Fragment,null,n.a.createElement(r.l,{mb:"2.0rem"},n.a.createElement(r.w,null,n.a.createElement(c.c,{enableReinitialize:!0,initialValues:{swapCharge:0,swapChargeSymbol:"USD",symbol:"",volume:"",optionList:m.a,contractSize:"",swapRate:"",pointValue:""},validate:s.j,onSubmit:function(e,t){var a=t.setFieldValue;a("swapCharge",Object(s.e)(e)),a("volume",Object(s.g)(e.volume)),a("swapRate",Object(s.h)(e.swapRate)),a("pointValue",Object(s.g)(e.pointValue))}},(function(e){var t=e.values,a=e.setFieldValue,l=e.handleBlur,o=e.errors,i=e.touched,g=e.isValid,d=e.dirty,w=e.setFieldTouched,f=e.setFieldError;return n.a.createElement(r.e,null,n.a.createElement(r.f,null,n.a.createElement(r.g,{htmlFor:"message"},Object(u.g)("Swap charge")),n.a.createElement(r.h,null,n.a.createElement(r.i,null,Object(s.i)(t.swapCharge)),n.a.createElement(r.j,null,t.swapChargeSymbol))),n.a.createElement(r.c,null,n.a.createElement(p.j,{default_option:m.c,option_list:t.optionList,label:Object(u.g)("Symbol"),selected_option:t.symbol,id:"symbol",onChange:function(e){a("swapCurrency",Object(s.b)(e)),a("contractSize",Object(s.a)(e)),a("symbol",e)},contractSize:t.contractSize,error:i.symbol&&o.symbol,onBlur:l}),n.a.createElement(r.p,null,n.a.createElement(c.a,{name:"volume",value:t.volume,onChange:function(e){a("volume",e)}},(function(e){var t=e.field;return n.a.createElement(h.a,Object.assign({},t,{id:"volume",type:"text",label:Object(u.g)("Volume"),autoComplete:"off",error:i.volume&&o.volume,onBlur:l,"data-lpignore":"true",handleError:function(e){a("volume","",!1),f("volume",""),w("volume",!1,!1),e.focus()},maxLength:"8",background:"white"}))}))),n.a.createElement(r.p,null,n.a.createElement(c.a,{name:"pointValue",value:t.pointValue,onChange:function(e){a("pointValue",e)}},(function(e){var r=e.field;return n.a.createElement(h.a,Object.assign({},r,{id:"pointValue",type:"text",value:t.pointValue,label:Object(u.g)("Point value"),autoComplete:"off",error:i.pointValue&&o.pointValue,onBlur:l,"data-lpignore":"true",handleError:function(e){a("pointValue","",!1),f("pointValue",""),w("pointValue",!1,!1),e.focus()},maxLength:"15",background:"white"}))}))),n.a.createElement(E,null,n.a.createElement(c.a,{name:"swapRate",value:t.swapRate,onChange:function(e){a("swapRate",e)}},(function(e){var r=e.field;return n.a.createElement(h.a,Object.assign({},r,{id:"swapRate",type:"text",value:t.swapRate,label:Object(u.g)("Swap rate"),autoComplete:"off",error:i.swapRate&&o.swapRate,onBlur:l,"data-lpignore":"true",handleError:function(e){a("swapRate","",!1),f("swapRate",""),w("swapRate",!1,!1),e.focus()},maxLength:"15",background:"white"}))}))),n.a.createElement(b.e,{mt:"1.5rem"},n.a.createElement(r.b,{secondary:!0,type:"submit",disabled:!g||!d},Object(u.g)("Calculate")))))}))),n.a.createElement(r.r,{direction:"column",max_width:"69rem"},n.a.createElement(p.l,{as:"h3",type:"section-title",mb:"8px"},Object(u.g)("How to calculate swap charges")),n.a.createElement(p.x,null,n.a.createElement(u.c,{translate_text:"For financial, the swap charge is calculated based on this formula:"})),n.a.createElement(p.x,{mb:"2rem"},n.a.createElement(u.c,{translate_text:"<0>Swap charge = volume × contract size × point value × swap rate</0>",components:[n.a.createElement("strong",{key:0})]})),n.a.createElement(p.x,{mb:"2rem"},n.a.createElement(u.c,{translate_text:"This gives you the swap charge in the quote currency for forex pairs, or in the denomination of the underlying asset for commodities."})),n.a.createElement(p.x,{mb:"2rem"},n.a.createElement(u.c,{translate_text:"For instance, if you are trading the USD/JPY forex pair, the swap charge will be computed in Japanese Yen (JPY) which is the quote currency. On the other hand, if you are trading oil,  then the swap charge will be computed in US Dollar (USD), which is the denomination of the underlying asset – oil."})),n.a.createElement(p.l,{as:"h3",type:"section-title",mb:"16px"},Object(u.g)("Example calculation")),n.a.createElement(p.a,{has_single_state:!0},n.a.createElement(p.b,{header:Object(u.g)("Swap charge"),header_style:r.y,style:r.z,plus:!0},n.a.createElement(p.x,{mb:"2rem"},Object(u.g)("Let’s say you want to keep two lots of EUR/USD with a point value of 0.00001 and swap rate of -0.12 open for one night.")),n.a.createElement(b.j.Desktop,null,n.a.createElement(p.s,{data:e.swap_forex_formula,alt:Object(u.g)("Swap forex formula")})),n.a.createElement(b.j.Mobile,null,n.a.createElement(p.s,{data:e.swap_forex_formula_mobile,alt:Object(u.g)("Swap forex formula mobile")})),n.a.createElement(r.n,{size:"14px"},n.a.createElement(r.u,null,n.a.createElement("li",null,n.a.createElement("span",null,n.a.createElement(u.c,{translate_text:"One standard lot for Forex = 100,000 units"}))),n.a.createElement("li",null,n.a.createElement("span",null,n.a.createElement(u.c,{translate_text:"The point value is derivied from the current digits of the asset. In this example, the digit is 5, so the point value is 0.00001."}))),n.a.createElement("li",null,n.a.createElement("span",null,n.a.createElement(u.c,{translate_text:"If the swap rate is positive, your account will be credited with the swap amount. If it is negative, your account will be debited."}))))),n.a.createElement(p.x,{mt:"1.6rem"},n.a.createElement(u.c,{translate_text:"So you will require a swap charge of <0>0.24 USD</0> to keep the position open for one night.",components:[n.a.createElement("strong",{key:0})]})))),n.a.createElement(r.q,{height:"auto"},n.a.createElement(r.t,{tertiary:"true",is_deriv_app_link:!0,to:"/mt5",external:"true",target:"_blank",rel:"noopener noreferrer"},Object(u.g)("Go to DMT5 dashboard")),n.a.createElement(r.t,{secondary:"true",to:"/trade-types/margin#swap-policy"},Object(u.g)("Learn more about swap"))))))))},w=a("8k0H");t.default=Object(u.e)()((function(){return n.a.createElement(w.b,null,n.a.createElement(b.h,{title:Object(u.g)("Swap Calculator"),description:Object(u.g)("Swap Calculator")}),n.a.createElement(r.o,{jc:"center",ai:"center"},n.a.createElement(b.b,null,n.a.createElement(p.l,{as:"h1",type:"display-title",color:"white",align:"center"},Object(u.g)("Swap Calculator")))),n.a.createElement(d,null))}))}}]);
//# sourceMappingURL=component---src-pages-trader-tools-swap-calculator-index-js-6e3b8e857008f2ec0bb6.js.map