import"./assets/styles-5e354ec8.js";import{f as m,i as s}from"./assets/vendor-77e16229.js";let a;const o=document.querySelector("[data-start]"),f=document.querySelector("#datetime-picker");o.disabled=!0;function r(e){return String(e).padStart(2,"0")}function h(e){const d=Math.floor(e/864e5),u=Math.floor(e%864e5/36e5),i=Math.floor(e%864e5%36e5/6e4),l=Math.floor(e%864e5%36e5%6e4/1e3);return{days:d,hours:u,minutes:i,seconds:l}}const y={enableTime:!0,time_24hr:!0,defaultDate:new Date,minuteIncrement:1,onClose(e){const t=e[0];t<=new Date?(s.error({title:"Error",message:"Please choose a date in the future"}),o.disabled=!0):(a=t,o.disabled=!1)}};m("#datetime-picker",y);function p(){const t=a-new Date,n=h(t);t>0?(document.querySelector("[data-days]").textContent=r(n.days),document.querySelector("[data-hours]").textContent=r(n.hours),document.querySelector("[data-minutes]").textContent=r(n.minutes),document.querySelector("[data-seconds]").textContent=r(n.seconds)):(clearInterval(c),s.success({title:"Completed",message:"The countdown has finished!"}))}let c;o.addEventListener("click",()=>{a>new Date&&(f.disabled=!0,o.disabled=!0,c=setInterval(p,1e3))});
//# sourceMappingURL=commonHelpers.js.map
