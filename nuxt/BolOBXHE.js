import{_ as y}from"./Qu9TemJM.js";import{_ as g}from"./BEsmpgYe.js";import{_ as v}from"./I81M9Kyj.js";import{f as w,B as I,A as C,o as A,c as z,b as a,w as p,j as R,a as t,g as e,D as u,E as m,G as B,p as M,e as S,H as d}from"./DkmPUy5X.js";import{u as U}from"./C0L0qvym.js";import{u as $}from"./BaXB5ET8.js";import{t as V}from"./_UnaSTDn.js";import{I as E}from"./BgJR49Er.js";import{I as P,a as L,b as N}from"./BJuvBWP6.js";import{_ as T}from"./DlAUqK2U.js";import"./DxEWXAgR.js";const o=i=>(M("data-v-fecdb0ed"),i=i(),S(),i),k={class:"bg-primary-light px-0 pb-28 md:px-6"},O=o(()=>t("div",{class:"m-auto max-w-7xl pt-16 sm:pt-24 md:pt-16 lg:pt-14"},[t("h1",{class:"text-center text-h3 text-text-primary sm:text-h1"}," Report Abuse "),t("p",{class:"mt-6 text-center text-body2 text-text-secondary sm:mt-8 sm:text-body2"}," Cloudzy is dedicated to fostering a positive online environment. If you have come across instances of abuse or have been directly affected by abusive behavior on a website or a service hosted by Cloudzy, we encourage you to utilize this form to notify our dedicated team responsible for addressing such issues. ")],-1)),j={class:"m-auto mt-12 flex max-w-7xl flex-wrap rounded-2xl bg-white-default shadow-1"},D={class:"relative w-full sm:w-1/2"},G={class:"absolute bottom-0 left-0 right-0 top-0 p-5 sm:p-6 md:p-16"},Y=o(()=>t("h2",{class:"md:text-3 text-h4 text-white-default"}," Report Abuse or Illegal Issue ",-1)),F=o(()=>t("p",{class:"mt-6 text-body1 text-white-default"}," If you see any behavior that you believe breaches Cloudzy's Terms of Service, feel free to report it. ",-1)),H={class:"absolute bottom-7 flex text-white-default"},q=o(()=>t("span",{class:"ml-7 text-subtitle1"},"abuse-reports@cloudzy.com",-1)),J={class:"mx-auto mb-16 mt-16 w-full sm:w-1/2"},K={class:"w-full px-7 sm:px-4 md:px-16"},Q={class:"relative w-full"},W=o(()=>t("span",{class:"label absolute -top-[7px] left-3 bg-white-default px-1 text-caption font-normal text-grey-400 transition"},"Your name",-1)),X={class:"relative mt-6 w-full"},Z=o(()=>t("span",{class:"label absolute -top-[7px] left-3 bg-white-default px-1 text-caption font-normal text-grey-400 transition"},"Email",-1)),tt={class:"relative mt-6 w-full"},et=o(()=>t("span",{class:"label absolute -top-[7px] left-3 bg-white-default px-1 text-caption font-normal text-grey-400 transition"},"Messages",-1)),st=o(()=>t("span",null," REPORT ABUSE ",-1)),ot=w({__name:"report-abuse",setup(i){R(n=>({"5f2a286a":e(c)}));const c=V.theme.colors.primary.main,s=I({name:"",email:"",message:""}),f=C().public.API_URL,x=async()=>{if(!s.value.name||!s.value.email.trim()||!s.value.message.trim()){d().$toast.error("Please fill out all fields.",{theme:"auto"});return}try{const n=await $fetch(`${f}/report-abuse`,{method:"POST",body:{...s.value}});d().$toast.success(n.detail,{theme:"auto"})}catch{d().$toast.error("Your message could not be sent.",{theme:"auto"})}};return U("Report Abuse or Legal Issue at Cloudzy","Report Abuse"),$(),(n,r)=>{const _=y,b=g,h=v;return A(),z("div",k,[a(h,null,{default:p(()=>[O,t("div",j,[t("div",D,[a(_,{src:"/report-abuse/report-abuse.jpg",class:"w-full rounded-2xl sm:h-full"}),t("div",G,[Y,F,t("div",H,[a(e(E)),q])])]),t("div",J,[t("form",K,[t("div",Q,[u(t("input",{"onUpdate:modelValue":r[0]||(r[0]=l=>e(s).name=l),class:"input h-14 w-full rounded border border-grey-300 pl-10 text-body2 text-text-primary outline-none transition focus:border-primary-main focus:ring-primary-main"},null,512),[[m,e(s).name]]),W,a(e(P),{class:"absolute left-3 top-1/2 -translate-y-1/2 text-grey-300 transition",size:24})]),t("div",X,[u(t("input",{"onUpdate:modelValue":r[1]||(r[1]=l=>e(s).email=l),class:"input h-14 w-full rounded border border-grey-300 pl-10 text-body2 text-text-primary outline-none transition focus:border-primary-main focus:ring-primary-main"},null,512),[[m,e(s).email]]),Z,a(e(L),{class:"absolute left-3 top-1/2 -translate-y-1/2 text-grey-300 transition",size:24})]),t("div",tt,[u(t("textarea",{"onUpdate:modelValue":r[2]||(r[2]=l=>e(s).message=l),class:"input h-40 w-full resize-none overflow-y-auto rounded border border-grey-300 pl-10 pt-4 text-body2 text-text-primary outline-none transition focus:border-primary-main focus:ring-primary-main"},null,512),[[m,e(s).message]]),et,a(e(N),{class:"absolute left-3 top-4 text-grey-300 transition",size:24})]),a(b,{class:"mt-6 w-full",onClick:B(x,["prevent"])},{default:p(()=>[st]),_:1})])])])]),_:1})])}}}),xt=T(ot,[["__scopeId","data-v-fecdb0ed"]]);export{xt as default};
