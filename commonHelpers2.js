import"./assets/styles-5e354ec8.js";import{i as s}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".form");t.addEventListener("submit",i=>{i.preventDefault();const o=Number(t.delay.value),r=t.state.value;new Promise((e,m)=>{setTimeout(()=>{r==="fulfilled"?e(o):m(o)},o)}).then(e=>{console.log(`✅ Fulfilled promise in ${e}ms`),s.success({title:"Success",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{console.log(`❌ Rejected promise in ${e}ms`),s.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight"})})})});
//# sourceMappingURL=commonHelpers2.js.map
