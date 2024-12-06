import{_ as m,i as b,A as p,c as e,d as c,e as s,t as l,F as r,f as d,n as h,j as u,k as v,p as f,h as y}from"./index-27oD5cL4.js";const j={setup(){return{project:b(()=>p.activeProject),goBack(){p.activeProject=null}}}},o=n=>(f("data-v-ee7cc556"),n=n(),y(),n),g={class:"container-fluid"},k={class:"bg-main d-flex align-items-center pt-4 pt-md-3 sticky-top"},x={key:0,class:"row px-md-5 justify-content-center"},w={class:"col-12 col-md-10 pb-3 fw-light text-md-start"},I={class:"fw-bold pb-4 m-0 text-center"},S={class:"col-12 px-md-5 d-flex justify-content-center"},C={id:"carouselIndicators",class:"carousel slide"},B={class:"carousel-indicators"},P=["data-bs-slide-to","aria-label"],N=["data-bs-slide-to","aria-label"],D={class:"carousel-inner"},T=["src"],U=v('<button class="carousel-control-prev" type="button" data-bs-target="#carouselIndicators" data-bs-slide="prev" data-v-ee7cc556><span class="carousel-control-prev-icon" aria-hidden="true" data-v-ee7cc556></span><span class="visually-hidden" data-v-ee7cc556>Previous</span></button><button class="carousel-control-next" type="button" data-bs-target="#carouselIndicators" data-bs-slide="next" data-v-ee7cc556><span class="carousel-control-next-icon" aria-hidden="true" data-v-ee7cc556></span><span class="visually-hidden" data-v-ee7cc556>Next</span></button>',2),V={class:"col-12 px-md-4"},A={class:"pt-4"},F=o(()=>s("h2",{class:"fw-semibold py-3"},"Project Details:",-1)),z={class:"row separation-line py-2"},E={class:"col-6 detail-section pb-3"},G=o(()=>s("h3",{class:"fs-5"},"Client",-1)),L={class:"m-0 fw-light"},W={class:"col-6 detail-section pb-3"},q=o(()=>s("h3",{class:"fs-5"},"Category",-1)),H={class:"d-flex align-items-center justify-content-center"},J={class:"m-0 fw-light"},K={class:"row separation-line py-2"},M={class:"col-6 detail-section pb-3"},O=o(()=>s("p",{class:"fs-5"},"Technologies",-1)),Q={class:"m-0"},R={class:"col-6 detail-section pb-3"},X=o(()=>s("p",{class:"fs-5"},"Status",-1)),Y={key:0,class:"d-flex align-items-center"},Z=o(()=>s("i",{class:"mdi mdi-progress-clock px-2 fs-5 text-warning"},null,-1)),$=o(()=>s("small",null,"In Progress",-1)),ss=[Z,$],ts={key:1,class:"d-flex align-items-center"},es=o(()=>s("i",{class:"mdi mdi-check-circle-outline px-2 fs-5 text-success"},null,-1)),cs=o(()=>s("small",null,"Completed",-1)),os=[es,cs],as={key:0,class:"py-4"},is={key:0,class:"fs-5"},ls=["href"],ns={key:1,class:"py-4"};function rs(n,_,ds,t,_s,ps){return e(),c("div",g,[s("div",k,[s("i",{onClick:_[0]||(_[0]=i=>t.goBack()),class:"mdi mdi-arrow-left fs-1 back-arrow",title:"Back to projects"})]),t.project?(e(),c("section",x,[s("div",w,[s("h1",I,l(t.project.name),1),(e(!0),c(r,null,d(t.project.details,i=>(e(),c("p",{key:i},l(i),1))),128))]),s("div",S,[s("div",C,[s("div",B,[(e(!0),c(r,null,d(t.project.slideImages,(i,a)=>(e(),c("div",{key:i,class:"px-1"},[a==0||!1?(e(),c("button",{key:0,class:"active carousel-indicator",type:"button","data-bs-target":"#carouselIndicators","data-bs-slide-to":a,"aria-current":"true","aria-label":`Slide ${a+1}`},null,8,P)):(e(),c("button",{key:1,class:"carousel-indicator",type:"button","data-bs-target":"#carouselIndicators","data-bs-slide-to":a,"aria-current":"true","aria-label":`Slide ${a+1}`},null,8,N))]))),128))]),s("div",D,[(e(!0),c(r,null,d(t.project.slideImages,(i,a)=>(e(),c("div",{key:i,class:h(["carousel-item",a==0?"active":""])},[s("img",{src:t.project.slideImages[a],class:"d-block w-100"},null,8,T)],2))),128))]),U])]),s("div",V,[s("div",A,[F,s("section",z,[s("div",E,[G,s("p",L,l(t.project.client),1)]),s("div",W,[q,s("div",H,[s("i",{class:h(["mdi pe-2 fs-3 text-primary",t.project.icon])},null,2),s("p",J,l(t.project.projectType),1)])])]),s("section",K,[s("div",M,[O,s("p",Q,l(t.project.technologies),1)]),s("div",R,[X,t.project.isCompleted?(e(),c("div",ts,os)):(e(),c("div",Y,ss))])]),t.project.projectUrl?(e(),c("p",as,[t.project.projectType!="Games"?(e(),c("p",is,"Website")):u("",!0),s("a",{href:t.project.projectUrl,class:"btn btn-light",target:"_blank",rel:"noopener noreferrer"},l(t.project.displayUrl),9,ls)])):(e(),c("div",ns))])])])):u("",!0)])}const us=m(j,[["render",rs],["__scopeId","data-v-ee7cc556"]]);export{us as default};
