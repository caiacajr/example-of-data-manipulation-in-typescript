(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=n(a);fetch(a.href,o)}})();const y=(e,t)=>`Error on fetching: ${e} 
 HttpStatus: ${t}`,A=e=>`Invalid transaction data got from: ${e}
Example of expected Format:
[
{
    "Status": "Paga",
    "ID": 32323221,
    "Data": "01/09/2022 01:21",
    "Nome": "Owen Hill",
    "Forma de Pagamento": "Cartão de Crédito",
    "Email": "o.hill@email.com",
    "Valor (R$)": "452,00",
    "Cliente Novo": 1
  },
  {
    "Status": "Paga",
    "ID": 32323222,
    "Data": "01/09/2022 01:26",
    "Nome": "Miranda Higgins",
    "Forma de Pagamento": "Boleto",
    "Email": "m.higgins@email.com",
    "Valor (R$)": "120,00",
    "Cliente Novo": 1
  }
]`;class E extends Error{url;data;constructor(t,n,r){super((r||"")+A(t)),this.url=t,this.data=n}}class c extends Error{url;status;constructor(t,n,r="HTTP_REQUEST_ERROR"){super(r+y(t,n)),this.url=t,this.status=n}}async function S(e){try{const t=await fetch(e);if(!t.ok)throw new c(e,t.status);return await t.json()}catch(t){throw t instanceof c?t:new c(e,0,t instanceof Error?t.message:"INTERNET_CONNECTION_ERROR")}}const h=["Cartão de Crédito","Boleto"],R=["Paga","Recusada pela operadora de cartão","Aguardando pagamento","Estornada"],u=/^(\d{2})\/(\d{2})\/(\d{4})\s(\d{2}):(\d{2})$/;function g(e){return typeof e=="string"&&u.test(e)}function D(e){return typeof e=="string"&&(e==="-"||!Number.isNaN(Number(e.replaceAll(".","").replace(",","."))))}function N(e){return typeof e=="string"&&R.includes(e)}function P(e){return typeof e=="string"&&h.includes(e)}function I(e){return typeof e=="string"&&/^[\w.-]+@[\w-]+\.[\w-.]+$/i.test(e)}function C(e){if(!e||typeof e!="object"||Array.isArray(e))return!1;const t=e;return N(t.Status)&&typeof t.ID=="number"&&g(t.Data)&&typeof t.Nome=="string"&&P(t["Forma de Pagamento"])&&I(t.Email)&&D(t["Valor (R$)"])&&typeof t["Cliente Novo"]=="number"&&(t["Cliente Novo"]===0||t["Cliente Novo"]===1)}function _(e){return e&&Array.isArray(e)?e.every(t=>C(t)):!1}const $={"Cartão de Crédito":"CREDIT_CARD",Boleto:"BANK_SLIP"},M={Paga:"PAID","Recusada pela operadora de cartão":"DECLINED_BY_THE_CARD_ISSUER","Aguardando pagamento":"AWAITING_PAYMENT",Estornada:"REVERSED"};function w(e){const t=e.replace(u,"$3-$2-$1T$4:$5:00");return new Date(t)}function O(e){return e==="-"?null:Math.round(Number(e.replaceAll(".","").replace(",","."))*100)}function L(e){return{status:M[e.Status],id:e.ID,date:w(e.Data),name:e.Nome,paymentMethod:$[e["Forma de Pagamento"]],email:e.Email,value:O(e["Valor (R$)"]),newClient:!!e["Cliente Novo"]}}const l="https://api.origamid.dev/json/transacoes.json";async function x(){const e=await S(l);if(_(e))return e.map(L);throw new E(l,e)}function H(e){let t=[0,0,0,0,0,0,0];return e.forEach(n=>t[n.date.getDay()]++),t}function v(e){return e.reduce((t,n)=>t+=n.value?n.value:0,0)}const d=["CREDIT_CARD","BANK_SLIP"],f=["PAID","DECLINED_BY_THE_CARD_ISSUER","AWAITING_PAYMENT","REVERSED"];function b(e){let t={};d.forEach(n=>t[n]=0);for(let n of e)t[n.paymentMethod]++;return t}function B(e){let t={};f.forEach(n=>t[n]=0);for(let n of e)t[n.status]++;return t}function V(e,t){return`
    <h3>Day of the week with more sales: </h3>
    <p>${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e]}: <span>${t} total sales</span></p>
    `}function Y(e){if(e.length===7){const t=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];return"<h3>Total sales per day of the week:</h3>"+e.map((n,r)=>`
    <p>${t[r]}: <span>${n} total sales<span><p>
    `).join(`
`)}else return""}function p(e){if(!e)return"-";let t=e.toString().replace(/\d{2}$/,".$&");if(/^-?\d$/.test(t))return t.replace(/^(-?)(\d)$/,"$10.0$2");if(/^-?.\d{2}$/.test(t))return t.replace(/^(-?).(\d{2})$/,"$10.$2");const n=/(\d)(\d{3}[,.])/;for(;n.test(t);)t=t.replace(n,"$1,$2");return t}function F(e){return`<h3>Sales sum (R$): <span>${p(e)}</span></h3>`}const m={PAID:"Paid",AWAITING_PAYMENT:"Awaiting payment",DECLINED_BY_THE_CARD_ISSUER:"Declined",REVERSED:"Reversed"},T={BANK_SLIP:"Bank slip",CREDIT_CARD:"Credit card"};function U(e){return"<h3>Number of transactions per payment method:</h3>"+d.map(t=>`
    <p>${T[t]}: <span>${e[t]} total sales</span></p>
    `).join(`
`)}function W(e){return"<h3>Number of transactions per transaction stats:</h3>"+f.map(t=>`
      <p>${m[t]}: <span>${e[t]} total sales</span></p>
      `).join(`
`)}function G(e){const t=document.getElementById("transactionsStatistics");if(t){t.innerHTML+=s(F(v(e))),t.innerHTML+=s(U(b(e))),t.innerHTML+=s(W(B(e)));const n=H(e),r=Math.max(...n),a=n.indexOf(r);t.innerHTML+=s(Y(n)),t.innerHTML+=s(V(a,r))}}function s(e){return`<li>
      ${e}
    </li>`}function z(e){return e.getMonth().toString().padStart(2,"0")+"-"+e.getDay().toString().padStart(2,"0")+"-"+e.getFullYear()+" "+e.getHours().toString().padStart(2,"0")+":"+e.getMinutes().toString().padStart(2,"0")}function K(e){const t=document.querySelector("#transactionsTable tbody");if(t&&t instanceof HTMLTableSectionElement)for(const n of e){const r=t.insertRow(-1);r.insertCell().innerText=n.id.toString(),r.insertCell().innerText=m[n.status],r.insertCell().innerText=n.name,r.insertCell().innerText=n.email,r.insertCell().innerText=z(n.date),r.insertCell().innerText=p(n.value),r.insertCell().innerText=T[n.paymentMethod],r.insertCell().innerText=n.newClient?"Yes":"No"}}async function q(){try{const e=await x();K(e),G(e)}catch(e){console.error(e)}}q();
