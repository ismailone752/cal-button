!function(){const ue=({buttonText:i,buttonClasses:e,buttonColor:t,buttonTextColor:a})=>`<button class="z-[999999999999] hidden fixed ${e.join(" ")} flex h-16 origin-center bg-red-50 transform cursor-pointer items-center
rounded-full py-4 px-10 text-base outline-none drop-shadow-md transition focus:outline-none fo
cus:ring-4 focus:ring-gray-600 focus:ring-opacity-50 active:scale-95" 
style="
  /* POSITION ADJUSTMENT - change these values as needed */
  left: 85%; /* X position - 50% centers horizontally */
  top: 82%;  /* Y position - 50% centers vertically */
  transform: translate(-20%, -0%); /* Centers the button perfectly */
  
  /* STYLING */
  background-color:${t}; 
  color:${a}; 
  z-index: 10001;
">



<div id="button-icon" class="mr-3 flex items-center justify-center">
  <svg
  class="h-7 w-7"
  fill="none"
  stroke="currentColor"
  viewBox="0 0 24 24"
  xmlns="http://www.w3.org/2000/svg">
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeWidth="2"
    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
  </svg>
</div>
<div id="button" class="font-semibold leading-5 antialiased">${i}</div>
</button>`,ge=["data-button-text","data-hide-button-icon","data-button-position","data-button-color","data-button-text-color","data-toggle-off"];class $ extends HTMLElement{constructor(){super();const e=this.dataset,t=e.buttonText,a=e.buttonPosition,r=e.buttonColor,o=e.buttonTextColor,s=`<style>${window.Cal.__css}</style> ${ue({buttonText:t,buttonClasses:[$.updatedClassString(a,"")],buttonColor:r,buttonTextColor:o})}`;this.attachShadow({mode:"open"}),this.assertHasShadowRoot(),this.shadowRoot.innerHTML=s}static updatedClassString(e,t){return[t.replace(/hidden|md:right-10|md:left-10|left-4|right-4/g,""),e==="bottom-right"?"md:right-10 right-4":"md:left-10 left-4"].join(" ")}static get observedAttributes(){return ge}attributeChangedCallback(e,t,a){var l,n,h;const r=(l=this.shadowRoot)==null?void 0:l.querySelector("#button"),o=(n=this.shadowRoot)==null?void 0:n.querySelector("button"),s=(h=this.shadowRoot)==null?void 0:h.querySelector("#button-icon");if(!r)throw new Error("#button not found");if(!o)throw new Error("button element not found");if(!s)throw new Error("#button-icon not found");if(e==="data-button-text")r.textContent=a;else if(e==="data-hide-button-icon")s.style.display=a=="true"?"none":"block";else if(e==="data-button-position")o.className=$.updatedClassString(a,o.className);else if(e==="data-button-color")o.style.backgroundColor=a;else if(e==="data-button-text-color")o.style.color=a;else if(e==="data-toggle-off"){const d=a=="true";d&&(this.buttonWrapperStyleDisplay=o.style.display),o.style.display=d?"none":this.buttonWrapperStyleDisplay}else console.log("Unknown attribute changed",e,t,a)}assertHasShadowRoot(){if(!this.shadowRoot)throw new Error("No shadow root")}}function X(){return window.innerHeight-100}function pe(i){return window.matchMedia(i).matches}function B({layout:i}){if(pe("(max-width: 768px)"))return"mobile";const t="month_view";return i==="mobile"?t:i??t}function be(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function O(i){return i??"light"}function J(i){return i==="dark"||i==="light"}function F({theme:i}){const e=be();return J(i)?O(i):O(e)}let _=null;function Z(){return _||(_=window.matchMedia("(prefers-color-scheme: dark)")),_}function fe(i){Z().addEventListener("change",i)}function we(i){var e;(e=Z())==null||e.removeEventListener("change",i)}class ee extends HTMLElement{constructor(e){super(),this.skeletonContainerHeightTimer=null,{}.INTEGRATION_TEST_MODE&&Object.assign(this.dataset,e.dataset),this.isModal=e.isModal,this.layout=this.getLayout(),this.theme=this.dataset.theme,this.themeClass=F({theme:this.theme}),this.classList.add(this.themeClass),this.getSkeletonData=e.getSkeletonData,this.boundResizeHandler=this.resizeHandler.bind(this),this.boundPrefersDarkThemeChangedHandler=this.prefersDarkThemeChangedHandler.bind(this)}isSkeletonSupportedPageType(){const e=this.getPageType();return e==="user.event.booking.slots"||e==="team.event.booking.slots"||e==="user.event.booking.form"||e==="team.event.booking.form"}assertHasShadowRoot(){if(!this.shadowRoot)throw new Error("No shadow root")}getPageType(){return this.dataset.pageType}getLayout(){return B({layout:this.dataset.layout??null})}getSkeletonContainerElement(){this.assertHasShadowRoot();const e=this.shadowRoot.querySelector("#skeleton-container");if(!e)throw new Error("No skeleton container element");return e}getSkeletonElement(){this.assertHasShadowRoot();const e=this.shadowRoot.querySelector("#skeleton");if(!e)throw new Error("No skeleton element");return e}ensureContainerTakesSkeletonHeightWhenVisible(){const e=this.getSkeletonElement(),t=this.getSkeletonContainerElement(),a=this.isModal,r=parseFloat(getComputedStyle(e).height);if(a){const s=t;if(r)s.style.maxHeight=`${X()}px`,s.style.height=`${r}px`;else{s.style.height="",s.style.maxHeight="";return}}else{const s=t,n=r-300;if(r)n>0&&(s.style.height=`${n}px`);else{s.style.height="";return}}const o=requestAnimationFrame(this.ensureContainerTakesSkeletonHeightWhenVisible.bind(this));return this.skeletonContainerHeightTimer=o,o}getLoaderElement(){this.assertHasShadowRoot();const e=this.shadowRoot.querySelector(".loader");if(!e)throw new Error("No loader element");return e}toggleLoader(e){const t=this.getSkeletonElement(),a=this.getLoaderElement(),r=this.getSkeletonContainerElement();if(!this.isSkeletonSupportedPageType())a.style.display=e?"block":"none",t.style.display="none";else if(t.style.display=e?"block":"none",a.style.display="none",!this.isModal&&!e){const s=r;s.style.display="none"}this.ensureContainerTakesSkeletonHeightWhenVisible()}isSkeletonLoaderVisible(){return this.getSkeletonElement().style.display!=="none"}resizeHandler(){const e=B({layout:this.layout??null});if(e===this.layout||(this.layout=e,!this.isSkeletonLoaderVisible()))return;const{skeletonContent:t,skeletonContainerStyle:a,skeletonStyle:r}=this.getSkeletonData({layout:this.getLayout(),pageType:this.getPageType()??null}),o=this.getSkeletonContainerElement(),s=this.getSkeletonElement();o.setAttribute("style",a),s.setAttribute("style",r),s.innerHTML=t}prefersDarkThemeChangedHandler(e){const t=e.matches,a=["dark","light"];if(J(this.theme))return;const r=F({theme:t?"dark":"light"});r!==this.themeClass&&(this.classList.remove(...a),this.classList.add(r))}connectedCallback(){this.toggleLoader(!0),window.addEventListener("resize",this.boundResizeHandler),fe(this.boundPrefersDarkThemeChangedHandler)}disconnectedCallback(){this.skeletonContainerHeightTimer&&cancelAnimationFrame(this.skeletonContainerHeightTimer),window.removeEventListener("resize",this.boundResizeHandler),we(this.boundPrefersDarkThemeChangedHandler)}}const ye=`@keyframes loader{0%{transform:rotate(0)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(360deg)}to{transform:rotate(360deg)}}@keyframes loader-inner{0%{height:0%}25%{height:0%}50%{height:100%}75%{height:100%}to{height:0%}}.loader-inner{vertical-align:top;display:inline-block;width:100%;animation:loader-inner 2s infinite ease-in}.loader{display:block;width:30px;height:30px;position:relative;border-width:4px;border-style:solid;animation:loader 2s infinite ease}.loader.modal-loader{margin:60px auto}
`,te=({errorCode:i,errorMessage:e})=>{const t="Something went wrong.";return i==="404"?(e=e??"Cal Link seems to be wrong.",`Error Code: 404. ${e}`):i==="routerError"?(e=e??t,`Error Code: routerError. ${e}`):(e=e??t,`Error Code: ${i}. ${e}`)};function T(i){const e={};if(i===null)return e;for(const[t,a]of i)if(e.hasOwnProperty(t)){let r=e[t];Array.isArray(r)||(r=[r]),r.push(a),e[t]=r}else e[t]=a;return e}function ve(){return["flag.coep","layout","ui.color-scheme","theme","cal.embed.pageType"]}function S(i,e){return ve().includes(e)?i[e]??null:(console.warn(`Not reading unknown config prop: ${e}`),null)}function xe(i){return i.charAt(0).toLowerCase()+i.slice(1).replace(/[A-Z]/g,e=>`-${e.toLowerCase()}`)}function ke(i){return i.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function N(i){return Object.entries(i).filter(e=>!!e[1]).map(([e,t])=>`data-${xe(e)}="${ke(t)}"`).join(" ")}function Se(i){return new URL(i,"http://baseUrl.example").pathname==="/router"}async function Ce({headlessRouterPageUrl:i}){const e=new URL(i),t=e.searchParams,a=`${e.origin}${e.pathname.replace(/^\/?router/,"/api/router")}`,o=await(await fetch(a,{method:"POST",body:JSON.stringify(T(t.entries())),headers:{"Content-Type":"application/json"}})).json();if(o.status==="success"){if(!o.data.redirect&&!o.data.message)throw new Error("No `redirect` or `message` in response");return o.data}else{if(!o.data.message)throw new Error("No `message` in response");return console.warn("Error submitting response and getting routing result",o),{error:o.data.message}}}function Ee({bookingLinkPath1:i,bookingLinkPath2:e}){return i.replace(/^\/team\//,"/")===e.replace(/^\/team\//,"/")}const D=()=>`
        <div class="relative z-10 p-6" data-testid="event-meta">
          <div style="opacity: 1; transform: none;">
            <ul class="flex items-center border-muted">
              <li class="-mr-1 inline-block">
                <span class="bg-emphasis relative inline-flex aspect-square items-center justify-center border align-top w-6 h-6 min-w-6 min-h-6 rounded-full overflow-hidden border-subtle">
                  <div class="animate-pulse bg-emphasis w-full h-full"></div>
                </span>
              </li>
            </ul>
            <p class="text-subtle mt-2 text-sm font-semibold">
              <div class="animate-pulse bg-emphasis h-4 w-24 rounded-sm"></div>
            </p>
            <h1 data-testid="event-title" class="text-text text-xl font-semibold my-2 mb-4">
              <div class="animate-pulse bg-emphasis h-6 w-20 rounded-sm"></div>
            </h1>
            <div class="space-y-3 font-medium">
              
    <div class="flex items-start justify-start text-sm text-text">
      <div class="animate-pulse bg-emphasis h-4 w-4 mr-2 rounded-full"></div>
      <div class="animate-pulse bg-emphasis h-4 w-10 rounded-sm"></div>
    </div>
    <div class="flex items-start justify-start text-sm text-text">
      <div class="animate-pulse bg-emphasis h-4 w-4 mr-2 rounded-full"></div>
      <div class="animate-pulse bg-emphasis h-4 w-20 rounded-sm mr-1"></div>
      <div class="animate-pulse bg-emphasis h-4 w-4 rounded-sm"></div>
    </div>
  
            </div>
          </div>
        </div>
  `,U=()=>{const i=Array(7).fill(0).map(()=>`
      <div class="text-emphasis my-4 text-xs font-medium uppercase tracking-widest">
        <div class="animate-pulse bg-emphasis h-4 w-8 rounded-sm"></div>
      </div> 
    `).join(""),e=new Date,t=new Date(e.getFullYear(),e.getMonth(),1),a=0,r=t.getDay(),o=new Date(e.getFullYear(),e.getMonth()+1,0).getDate(),s=(r-a+7)%7,n=42-s-o;let h="";for(let c=0;c<s;c++)h+=`
  <div class="relative w-full pt-[100%]"></div>`;for(let c=1;c<=o;c++)h+=`
  <div class="relative w-full pt-[100%]">
    <button class="bg-muted text-muted absolute bottom-0 left-0 right-0 top-0 mx-auto flex w-full items-center justify-center rounded-sm border-transparent text-center font-medium opacity-90 transition" disabled="">
      <span class="font-size-0 bg-emphasis inline-block animate-pulse rounded-md empty:before:inline-block empty:before:content-[''] h-9 w-9"></span>
    </button>
  </div>`;for(let c=0;c<n;c++)h+=`
  <div class="relative w-full pt-[100%]"></div>`;return` 
          <div>
            <div class="mb-1 flex items-center justify-between text-xl">
              <span class="text-default w-1/2 text-base">
                <time datetime="${`${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,"0")}`}" data-testid="selected-month-label">
                  <span class="text-emphasis font-semibold">
                    <div class="animate-pulse bg-emphasis h-4 w-20 rounded-sm"></div>
                  </span> 
                </time>
              </span>
              <div class="text-emphasis">
                <div class="flex">
                  <button class="group whitespace-nowrap items-center font-medium relative rounded-[10px] disabled:cursor-not-allowed gap-1 flex justify-center text-subtle border border-transparent enabled:hover:bg-subtle enabled:hover:text-emphasis enabled:hover:border-subtle hover:border disabled:opacity-30 focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-0 focus-visible:border-subtle focus-visible:shadow-button-outline-gray-focused enabled:active:shadow-outline-gray-active duration-200 text-sm leading-none min-h-[36px] min-w-[36px] !p-2 hover:border-default group p-1 opacity-70 transition hover:opacity-100 rtl:rotate-180" data-testid="decrementMonth" aria-label="View previous month" type="button" disabled>
                    <svg height="16" width="16" class="fill-transparent visible button-icon group-active:translate-y-[0.5px] h-4 w-4" data-name="start-icon" aria-hidden="true">
                      <use href="#chevron-left"></use>
                    </svg>
                    <div class="contents visible group-active:translate-y-[0.5px]"></div>
                  </button>
                  <button class="group whitespace-nowrap items-center font-medium relative rounded-[10px] disabled:cursor-not-allowed gap-1 flex justify-center text-subtle border border-transparent enabled:hover:bg-subtle enabled:hover:text-emphasis enabled:hover:border-subtle hover:border disabled:opacity-30 focus-visible:bg-subtle focus-visible:outline-none focus-visible:ring-0 focus-visible:border-subtle focus-visible:shadow-button-outline-gray-focused enabled:active:shadow-outline-gray-active duration-200 text-sm leading-none min-h-[36px] min-w-[36px] !p-2 hover:border-default group p-1 opacity-70 transition hover:opacity-100 rtl:rotate-180 undefined" data-testid="incrementMonth" aria-label="View next month" type="button">
                    <svg height="16" width="16" class="fill-transparent visible button-icon group-active:translate-y-[0.5px] h-4 w-4" data-name="start-icon" aria-hidden="true">
                      <use href="#chevron-right"></use>
                    </svg>
                    <div class="contents visible group-active:translate-y-[0.5px]"></div>
                  </button>
                </div>
              </div>
            </div>
            <div class="border-subtle mb-2 grid grid-cols-7 gap-4 border-b border-t text-center md:mb-0 md:border-0">
              ${i}
            </div>
            <div class="relative grid grid-cols-7 grid-rows-6 gap-1 text-center">
             ${h}
            </div>
          </div>`},Q=({layout:i})=>i==="mobile"?`
  <div 
    data-testid="booker-container" 
    class="[--booker-timeslots-width:240px] lg:[--booker-timeslots-width:280px] [--booker-main-width:480px] [--booker-meta-width:340px] lg:[--booker-meta-width:424px] bg-default dark:bg-muted grid max-w-full items-start dark:[color-scheme:dark] sm:transition-[width] sm:duration-300 sm:motion-reduce:transition-none md:flex-row border-subtle rounded-md" 
    style="grid-template-areas: &quot;meta&quot; &quot;header&quot; &quot;main&quot; &quot;timeslots&quot;; width: 100%; grid-template-columns: 100%; grid-template-rows: minmax(min-content, max-content) 1fr; min-height: 0px; height: auto;">
     <div 
        class="relative z-10 flex [grid-area:meta]">
        <div class="[grid-area:meta] max-w-screen flex w-full flex-col md:w-[var(--booker-meta-width)]">
        ${D()}
        <div class="mt-auto px-5 py-3">
        ${U()}
        </div>
        </div>
      </div>
      <div class="[grid-area:main] md:border-subtle ml-[-1px] h-full flex-shrink px-5 py-3 md:border-l lg:w-[var(--booker-main-width)]" style="opacity: 1; transform: none;">
      </div>
  </div>
`:`
  <div 
    data-testid="booker-container" 
    class="[--booker-timeslots-width:240px] lg:[--booker-timeslots-width:280px] [--booker-meta-width:240px] [--booker-main-width:480px] lg:[--booker-meta-width:280px] bg-default dark:bg-muted grid max-w-full items-start dark:[color-scheme:dark] sm:motion-reduce:transition-none md:flex-row rounded-md sm:transition-[width] sm:duration-300 border-subtle border undefined" 
    style="grid-template-areas: &quot;meta main main&quot; &quot;meta main main&quot;; width: calc(var(--booker-meta-width) + var(--booker-main-width)); grid-template-columns: var(--booker-meta-width) var(--booker-main-width); grid-template-rows: 1fr 0fr; min-height: 450px; height: auto;">
     <div 
        class="relative z-10 flex [grid-area:meta]" 
        style="position: sticky; top: 0px;">
        ${D()}
      </div>
      <div class="[grid-area:main] md:border-subtle ml-[-1px] h-full flex-shrink px-5 py-3 md:border-l lg:w-[var(--booker-main-width)]" style="opacity: 1; transform: none;">
        ${U()}
      </div>
  </div>
`,ae=({layout:i="month_view",pageType:e})=>{const t=Q({layout:i});return e&&(e==="user.event.booking.slots"||e==="team.event.booking.slots")?Q({layout:i}):t},Le=({layout:i="month_view",pageType:e})=>{const{skeletonContent:t,skeletonContainerStyle:a,skeletonStyle:r}=re({layout:i,pageType:e});return`
<div id="skeleton-container" style="${a}">
  <div id="skeleton" style="${r}" class="absolute z-highest">
    ${t}
  </div>
  <div id="wrapper" style="top:50%; left:50%; transform:translate(-50%,-50%)" class="absolute z-highest">
    <div class="loader border-brand-default dark:border-darkmodebrand">
      <span class="loader-inner bg-brand dark:bg-darkmodebrand"></span>
    </div>
    <div id="error" style="transform:translate(-50%,-50%)" class="hidden">
      Something went wrong.
    </div>
  </div>
</div>
<slot></slot>
`},re=({layout:i,pageType:e})=>{const r=i==="mobile"?"width:100%;":"left:50%; transform:translate(-50%,0%)",o="width:100%;";return{skeletonContent:ae({layout:i,pageType:e}),skeletonContainerStyle:o,skeletonStyle:r}};class Te extends ee{static get observedAttributes(){return["loading"]}attributeChangedCallback(e,t,a){this.assertHasShadowRoot();const r=this.shadowRoot.querySelector("#error"),o=this.shadowRoot.querySelector("slot");if(!o||!r)throw new Error("One of loaderEl, slotEl or errorEl is missing");if(e==="loading"){if(a=="done")this.toggleLoader(!1);else if(a==="failed"){this.toggleLoader(!1),o.style.visibility="hidden",r.style.display="block";const s=te({errorCode:this.dataset.errorCode,errorMessage:this.dataset.message});r.innerText=s}}}constructor(){super({isModal:!1,getSkeletonData:re}),this.attachShadow({mode:"open"}),this.assertHasShadowRoot(),this.shadowRoot.innerHTML=`<style>${window.Cal.__css}</style><style>${ye}</style>${Le({layout:this.layout,pageType:this.getPageType()??null})}`}}const ze=`@keyframes loader{0%{transform:rotate(0)}25%{transform:rotate(180deg)}50%{transform:rotate(180deg)}75%{transform:rotate(360deg)}to{transform:rotate(360deg)}}@keyframes loader-inner{0%{height:0%}25%{height:0%}50%{height:100%}75%{height:100%}to{height:0%}}.loader-inner{vertical-align:top;display:inline-block;width:100%;animation:loader-inner 2s infinite ease-in}.loader{display:block;width:30px;height:30px;position:relative;border-width:4px;border-style:solid;animation:loader 2s infinite ease}.loader.modal-loader{margin:60px auto}
`;function Re(){return`
  <style>
    .my-backdrop {
      position:fixed;
      width:100%;
      height:100%;
      top:0;
      left:0;
      z-index:999999999999;
      display:block;
      background-color:rgb(5,5,5, 0.8)
    }

    .modal-box {
      margin:0 auto;
      margin-top:20px;
      margin-bottom:20px;
      position:absolute;
      width:100%;
      top:50%;
      left:50%;
      transform: translateY(-50%) translateX(-50%);
      overflow: auto;
    }

    .message-container {
      min-height: 200px;
      width: 600px;
    }

    .header {
      position: relative;
      float:right;
      top: 10px;
    }
    .close {
      font-size: 30px;
      left: -20px;
      position: relative;
      color:white;
      cursor: pointer;
    }
    /*Modal background is black only, so hardcode white */
    .loader {
      --cal-brand-color:white;
    }
  </style>
      `}const Ae=({layout:i="month_view",pageType:e})=>{const{skeletonContent:t,skeletonContainerStyle:a,skeletonStyle:r}=ie({layout:i,pageType:e});return`
${Re()}
<div class="my-backdrop">
  <div class="header">
    <button type="button" class="close" aria-label="Close">&times;</button>
  </div>
  <div id="message-container" style="left: 50%; top: 50%; transform: translate(-50%, -50%);" class="message-container flex items-center p-24 justify-center dark:bg-muted rounded-md border-subtle border bg-default text-default  absolute z-highest">
    <div id="message"></div>
  </div>
  <div class="modal-box">
    <div class="body" id="skeleton-container" style="${a}">
      <div id="wrapper" class="z-[999999999999] absolute flex w-full items-center">
        <div class="loader modal-loader border-brand-default dark:border-darkmodebrand">
          <span class="loader-inner bg-brand dark:bg-darkmodebrand"></span>
        </div>
      </div>
      <div id="skeleton" style="${r}" class="absolute z-highest">
        ${t}
      </div>
      <slot></slot>
    </div>
  </div>

</div>`},ie=({layout:i,pageType:e})=>{const r=i==="mobile"?"width:100%;":"left:50%; transform:translate(-50%,0%)",o="width:100%;";return{skeletonContent:ae({layout:i,pageType:e}),skeletonContainerStyle:o,skeletonStyle:r}};class I extends ee{static get observedAttributes(){return["state"]}show(e){this.assertHasShadowRoot(),this.shadowRoot.host.style.visibility=e?"visible":"hidden",e||(document.body.style.overflow=I.htmlOverflow)}open(){if(this.getAttribute("state")==="prerendering")return;this.show(!0);const e=new Event("open");this.dispatchEvent(e)}isLoaderRunning(){const e=this.getAttribute("state");return!e||e==="loading"}explicitClose(){this.show(!1);const e=new Event("close");this.dispatchEvent(e)}isShowingMessage(){const e=this.getAttribute("state");return e==="has-message"||e==="failed"}close(){this.isLoaderRunning()||this.isShowingMessage()||this.explicitClose()}collapseIframe(){const e=this.querySelector("iframe");e&&(e.style.display="none")}uncollapseIframe(){const e=this.querySelector("iframe");e&&(e.style.display="")}makeIframeInvisible(){const e=this.querySelector("iframe");e&&(e.style.visibility="hidden")}makeIframeVisible(){const e=this.querySelector("iframe");e&&(e.style.visibility="")}getMessageElement(){this.assertHasShadowRoot();const e=this.shadowRoot.querySelector("#message");if(!e)throw new Error("No message element");return e}getMessageContainerElement(){this.assertHasShadowRoot();const e=this.shadowRoot.querySelector("#message-container");if(!e)throw new Error("No message container element");return e}toggleMessageElement(e){const t=this.getMessageContainerElement();e?t.style.display="":t.style.display="none"}ensureIframeFullyVisible(){this.makeIframeVisible(),this.uncollapseIframe()}onStateLoaded(){this.toggleLoader(!1),this.toggleMessageElement(!1),this.open(),this.ensureIframeFullyVisible()}onStateFailedOrMessage(){this.toggleLoader(!1),this.toggleMessageElement(!0),this.collapseIframe();const e=this.dataset.message,a=(this.dataset.errorCode?te({errorCode:this.dataset.errorCode,errorMessage:e}):null)||e;a&&(this.getMessageElement().innerText=a)}attributeChangedCallback(e,t,a){e==="state"&&(a==="loading"?(this.toggleLoader(!0),this.open(),this.uncollapseIframe(),this.toggleMessageElement(!1),this.makeIframeInvisible()):a=="loaded"?this.onStateLoaded():a=="closed"?this.explicitClose():a==="failed"||a==="has-message"?this.onStateFailedOrMessage():a==="prerendering"?this.explicitClose():a==="reopened"&&this.open())}connectedCallback(){super.connectedCallback(),this.assertHasShadowRoot();const e=this.shadowRoot.querySelector(".close");document.addEventListener("keydown",t=>{t.key==="Escape"&&this.close()},{once:!0}),this.shadowRoot.host.addEventListener("click",()=>{this.close()}),e&&(e.onclick=()=>{this.explicitClose()})}constructor(){super({isModal:!0,getSkeletonData:ie});const e=`<style>${window.Cal.__css}</style><style>${ze}</style>${Ae({layout:this.getLayout(),pageType:this.getPageType()??null})}`;this.attachShadow({mode:"open"}),I.htmlOverflow=document.body.style.overflow,document.body.style.overflow="hidden",this.open(),this.assertHasShadowRoot(),this.shadowRoot.innerHTML=e}}const Me=()=>{const i=["cal-floating-button","cal-modal-box","cal-inline"];try{const e=`
    ${i.join(",")} {
    /* Spacing Scale */
    --cal-spacing-0: 0px;
    --cal-spacing-px: 1px;
    --cal-spacing-0_5: 0.125rem; /* 2px */
    --cal-spacing-1: 0.25rem;   /* 4px */
    --cal-spacing-1_5: 0.375rem; /* 6px */
    --cal-spacing-2: 0.5rem;    /* 8px */
    --cal-spacing-2_5: 0.625rem; /* 10px */
    --cal-spacing-3: 0.75rem;   /* 12px */
    --cal-spacing-3_5: 0.875rem; /* 14px */
    --cal-spacing-4: 1rem;      /* 16px */
    --cal-spacing-5: 1.25rem;   /* 20px */
    --cal-spacing-6: 1.5rem;    /* 24px */
    --cal-spacing-7: 1.75rem;   /* 28px */
    --cal-spacing-8: 2rem;      /* 32px */
    --cal-spacing-9: 2.25rem;   /* 36px */
    --cal-spacing-10: 2.5rem;   /* 40px */
    --cal-spacing-11: 2.75rem;  /* 44px */
    --cal-spacing-12: 3rem;     /* 48px */
    --cal-spacing-14: 3.5rem;   /* 56px */
    --cal-spacing-16: 4rem;     /* 64px */
    --cal-spacing-20: 5rem;     /* 80px */
    --cal-spacing-24: 6rem;     /* 96px */
    --cal-spacing-28: 7rem;     /* 112px */
    --cal-spacing-32: 8rem;     /* 128px */
    --cal-spacing-36: 9rem;     /* 144px */
    --cal-spacing-40: 10rem;    /* 160px */
    --cal-spacing-44: 11rem;    /* 176px */
    --cal-spacing-48: 12rem;    /* 192px */
    --cal-spacing-52: 13rem;    /* 208px */
    --cal-spacing-56: 14rem;    /* 224px */
    --cal-spacing-60: 15rem;    /* 240px */
    --cal-spacing-64: 16rem;    /* 256px */
    --cal-spacing-72: 18rem;    /* 288px */
    --cal-spacing-80: 20rem;    /* 320px */
    --cal-spacing-96: 24rem;    /* 384px */
  
    /* Border Radius */
    --cal-radius-none: 0px;
    --cal-radius-sm: 0.125rem;  /* 2px */
    --cal-radius: 0.25rem;      /* 4px */
    --cal-radius-md: 0.375rem;  /* 6px */
    --cal-radius-lg: 0.5rem;    /* 8px */
    --cal-radius-xl: 0.75rem;   /* 12px */
    --cal-radius-2xl: 1rem;     /* 16px */
    --cal-radius-3xl: 1.5rem;   /* 24px */
    --cal-radius-full: 9999px;
  
    /* Background Standard */
    --cal-bg-emphasis: hsla(220, 13%, 91%, 1); /* gray.200 - active items and emphasising */
    --cal-bg: hsla(0, 0%, 100%, 1); /* white - default background */
    --cal-bg-subtle: hsla(220, 14%, 94%, 1); /* gray.100 - hovering on items, subtle raising */
    --cal-bg-muted: hsla(210, 20%, 97%, 1); /* gray.50 - large items, sidebar, sections */
    --cal-bg-inverted: hsla(210, 30%, 4%, 1); /* gray.900 - tooltips */
  
    /* Background Primary */
    --cal-bg-primary: hsla(214, 30%, 16%, 1); /* stone-100 */
    --cal-bg-primary-emphasis: hsla(220, 6%, 25%, 1); /* stone-800 */
    --cal-bg-primary-muted: hsla(220, 14%, 94%, 1); /* stone-400 */
  
    /* Background Brand */
    --cal-bg-brand: hsla(214, 30%, 16%, 1); /* gray-50 */
    --cal-bg-brand-emphasis: hsla(220, 6%, 25%, 1); /* stone-100 */
    --cal-bg-brand-muted: hsla(220, 14%, 94%, 1); /* stone-100 */
    
    /* Background Semantic */
    --cal-bg-semantic-info-subtle: hsla(212, 88%, 97%, 1); /* blue-100 */
    --cal-bg-semantic-info-emphasis: hsla(236, 80%, 25%, 1); /* blue-500 */
    --cal-bg-semantic-success-subtle: hsla(167, 54%, 93%, 1); /* green-100 */
    --cal-bg-semantic-success-emphasis: hsla(158, 74%, 38%, 1); /* green-500 */
    --cal-bg-semantic-attention-subtle: hsla(34, 100%, 92%, 1); /* orange-100 */
    --cal-bg-semantic-attention-emphasis: hsla(15, 79%, 34%, 1); /* orange-500 */
    --cal-bg-semantic-error-subtle: hsla(0, 93%, 94%, 1); /* red-100 */
    --cal-bg-semantic-error-emphasis: hsla(0, 63%, 24%, 1); /* red-500 */
  
    /* Background Visualization */
    --cal-bg-visualization-1-subtle: hsla(326, 78%, 95%, 1); /* pink-100 */
    --cal-bg-visualization-1-emphasis: hsla(330, 81%, 60%, 1); /* pink-500 */
    --cal-bg-visualization-2-subtle: hsla(256, 86%, 91%, 1); /* purple-100 */
    --cal-bg-visualization-2-emphasis: hsla(256, 85%, 57%, 1); /* purple-500 */
    --cal-bg-visualization-3-subtle: hsla(217, 87%, 91%, 1); /* blue-100 */
    --cal-bg-visualization-3-emphasis: hsla(235, 100%, 63%, 1); /* blue-500 */
    --cal-bg-visualization-4-subtle: hsla(167, 54%, 93%, 1); /* green-100 */
    --cal-bg-visualization-4-emphasis: hsla(158, 74%, 38%, 1); /* green-500 */
    --cal-bg-visualization-5-subtle: hsla(55, 97%, 88%, 1); /* yellow-100 */
    --cal-bg-visualization-5-emphasis: hsla(45, 93%, 47%, 1); /* yellow-500 */
    --cal-bg-visualization-6-subtle: hsla(34, 100%, 92%, 1); /* orange-100 */
    --cal-bg-visualization-6-emphasis: hsla(25, 95%, 53%, 1); /* orange-500 */
    --cal-bg-visualization-7-subtle: hsla(0, 96%, 89%, 1); /* red-100 */
    --cal-bg-visualization-7-emphasis: hsla(0, 84%, 60%, 1); /* red-500 */
  
    /* Legacy Background Components - Consider deprecating */
    --cal-bg-info: hsla(221, 91%, 93%, 1); /* #dee9fc - info backgrounds */
    --cal-bg-success: hsla(142, 76%, 94%, 1); /* #e2fbe8 - success backgrounds */
    --cal-bg-attention: hsla(33, 100%, 92%, 1); /* #fceed8 - attention backgrounds */
    --cal-bg-error: hsla(3, 66%, 93%, 1); /* #f9e3e2 - error backgrounds */
    --cal-bg-dark-error: hsla(2, 55%, 30%, 1); /* Keeping existing dark error */
  
    /* Borders */
    --cal-border-emphasis: hsla(218, 11%, 65%, 1); /* gray.400 - input:hover */
    --cal-border: hsla(216, 12%, 84%, 1); /* gray.300 - inputs */
    --cal-border-subtle: hsla(220, 13%, 91%, 1); /* gray.200 - container borders */
    --cal-border-muted: hsla(220, 14%, 94%, 1); /* gray.100 */
    --cal-border-error: hsla(0, 96%, 89%, 1); /* Keeping existing error border */
    --cal-border-semantic-error: hsla(0, 96%, 89%, 1);
    --cal-border-booker: var(--cal-border-subtle);
  
    /* Content/Text Standard */
    --cal-text-emphasis: hsla(210, 30%, 4%, 1); /* gray-900 */
    --cal-text: hsla(220, 6%, 25%, 1); /* gray-700 */
    --cal-text-subtle: hsla(220, 9%, 46%, 1); /* gray-500 */
    --cal-text-muted: hsla(218, 11%, 65%, 1); /* gray-400 */
    --cal-text-inverted: hsla(0, 0%, 100%, 1); /* white */
  
    /* Content/Text Semantic */
    --cal-text-semantic-info: hsla(236, 80%, 25%, 1); /* blue-800 */
    --cal-text-semantic-success: hsla(150, 84%, 22%, 1); /* green-800 */
    --cal-text-semantic-attention: hsla(15, 79%, 34%, 1); /* orange-800 */
    --cal-text-semantic-error: hsla(0, 63%, 24%, 1); /* red-800 */
  
    /* Content/Text Visualization */
    --cal-text-visualization-1: hsla(332, 79%, 25%, 1); /* pink-800 */
    --cal-text-visualization-2: hsla(270, 91%, 25%, 1); /* purple-800 */
    --cal-text-visualization-3: hsla(217, 91%, 25%, 1); /* blue-800 */
    --cal-text-visualization-4: hsla(142, 71%, 25%, 1); /* green-800 */
    --cal-text-visualization-5: hsla(45, 93%, 25%, 1); /* yellow-800 */
    --cal-text-visualization-6: hsla(24, 95%, 25%, 1); /* orange-800 */
    --cal-text-visualization-7: hsla(0, 84%, 25%, 1); /* red-800 */
  
    /* Border/Semantic Subtle */
    --cal-border-semantic-attention-subtle: hsla(32, 98%, 83%, 1); 
    --cal-border-semantic-error-subtle: hsla(0, 96%, 89%, 1); 
  
    /* Legacy Content/Text Components - Consider deprecating */
    --cal-text-info: hsla(225, 57%, 33%, 1); /* #253985 - interactive text/icons */
    --cal-text-success: hsla(144, 34%, 24%, 1); /* #285231 */
    --cal-text-attention: hsla(16, 62%, 28%, 1); /* Keeping existing attention text */
    --cal-text-error: hsla(0, 63%, 31%, 1); /* Keeping existing error text */
  
    /* Brand */
    --cal-brand: hsla(221, 39%, 11%, 1); /* Keeping existing brand color */
    --cal-brand-emphasis: hsla(0, 0%, 6%, 1); /* Keeping existing brand emphasis */
    --cal-brand-text: hsla(0, 0%, 100%, 1); /* white */
  }
  
  ${i.map(a=>`${a}.dark`).join(",")} {
  /* Background Standard */
  --cal-bg-emphasis: hsla(0, 0%, 25%, 1); /* stone-700 */
  --cal-bg: hsla(0, 0%, 6%, 1); /* stone-950 */
  --cal-bg-subtle: hsla(0, 0%, 15%, 1); /* stone-800 */
  --cal-bg-muted: hsla(0, 0%, 9%, 1); /* stone-900 */
  --cal-bg-inverted: hsla(0, 0%, 98%, 1); /* stone-50 */

  /* Background Primary */
  --cal-bg-primary: hsla(0, 0%, 96%, 1); /* stone-100 */
  --cal-bg-primary-emphasis: hsla(0, 0%, 64%, 1); /* stone-800 */
  --cal-bg-primary-muted: hsla(0, 0%, 15%, 1); /* stone-400 */

  /* Background Brand */
  --cal-bg-brand: hsla(0, 0%, 98%, 1); /* gray-50 */
  --cal-bg-brand-emphasis: hsla(0, 0%, 96%, 1); /* stone-100 */
  --cal-bg-brand-muted: hsla(0, 0%, 96%, 1); /* stone-100 */

  /* Background Semantic */
  --cal-bg-semantic-info-subtle: hsla(236, 80%, 8%, 1); /* blue-800 */
  --cal-bg-semantic-info-emphasis: hsla(229, 90%, 74%, 1); /* blue-500 */
  --cal-bg-semantic-success-subtle: hsla(148, 88%, 16%, 1); /* green-800 */
  --cal-bg-semantic-success-emphasis: hsla(158, 74%, 38%, 1); /* green-500 */
  --cal-bg-semantic-attention-subtle: hsla(21, 86%, 8%, 1); /* orange-800 */
  --cal-bg-semantic-attention-emphasis: hsla(27, 96%, 61%, 1); /* orange-500 */
  --cal-bg-semantic-error-subtle: hsla(0, 70%, 8%, 1); /* red-800 */
  --cal-bg-semantic-error-emphasis: hsla(0, 91%, 71%, 1); /* red-500 */

  /* Background Visualization */
  --cal-bg-visualization-1-subtle: hsla(336, 74%, 35%, 1); /* pink-200 */
  --cal-bg-visualization-1-emphasis: hsla(330, 81%, 60%, 1); /* pink-500 */
  --cal-bg-visualization-2-subtle: hsla(252, 83%, 23%, 1); /* purple-200 */
  --cal-bg-visualization-2-emphasis: hsla(256, 85%, 57%, 1); /* purple-500 */
  --cal-bg-visualization-3-subtle: hsla(236, 74%, 35%, 1); /* blue-200 */
  --cal-bg-visualization-3-emphasis: hsla(235, 100%, 63%, 1); /* blue-500 */
  --cal-bg-visualization-4-subtle: hsla(150, 84%, 22%, 1); /* green-200 */
  --cal-bg-visualization-4-emphasis: hsla(158, 74%, 38%, 1); /* green-500 */
  --cal-bg-visualization-5-subtle: hsla(28, 73%, 26%, 1); /* yellow-200 */
  --cal-bg-visualization-5-emphasis: hsla(45, 93%, 47%, 1); /* yellow-500 */
  --cal-bg-visualization-6-subtle: hsla(15, 75%, 23%, 1); /* orange-200 */
  --cal-bg-visualization-6-emphasis: hsla(25, 95%, 53%, 1); /* orange-500 */
  --cal-bg-visualization-7-subtle: hsla(0, 70%, 35%, 1); /* red-200 */
  --cal-bg-visualization-7-emphasis: hsla(0, 84%, 60%, 1); /* red-500 */

  /* Legacy Background Components - Consider deprecating */
  --cal-bg-info: hsla(228, 56%, 33%, 1); /* Keeping existing info background */
  --cal-bg-success: hsla(133, 34%, 24%, 1); /* Keeping existing success background */
  --cal-bg-attention: hsla(16, 62%, 28%, 1); /* Keeping existing attention background */
  --cal-bg-error: hsla(2, 55%, 30%, 1); /* Keeping existing error background */
  --cal-bg-dark-error: hsla(2, 55%, 30%, 1); /* Keeping existing dark error */

  /* Border Standard */
  --cal-border: hsla(0, 0%, 30%, 1); /* stone-600 */
  --cal-border-muted: hsla(0, 0%, 9%, 1); /* stone-500 */
  --cal-border-subtle: hsla(0, 0%, 15%, 1); /* stone-700 */
  --cal-border-emphasis: hsla(0, 0%, 45%, 1); /* stone-800 */
  --cal-border-booker: var(--cal-border-subtle);
  /* Border Semantic */
  --cal-border-semantic-error: hsla(0, 63%, 24%, 1); /* red-800 */

  /* Border/Semantic Subtle */
  --cal-border-semantic-attention-subtle: hsla(15, 75%, 23%, 1);
  --cal-border-semantic-error-subtle: hsla(0, 63%, 24%, 1);

  /* Legacy Border - Consider deprecating */
  --cal-border-error: hsla(0, 63%, 24%, 1); /* Keeping existing error border */

  /* Content/Text Standard */
  --cal-text-emphasis: hsla(0, 0%, 98%, 1); /* stone-50 */
  --cal-text: hsla(0, 0%, 83%, 1); /* stone-300 */
  --cal-text-subtle: hsla(0, 0%, 64%, 1); /* stone-400 */
  --cal-text-muted: hsla(0, 0%, 64%, 1); /* stone-400 */
  --cal-text-inverted: hsla(0, 0%, 0%, 1); /* black */

  /* Content/Text Semantic */
  --cal-text-semantic-info: hsla(229, 90%, 74%, 1); /* blue-100 */
  --cal-text-semantic-success: hsla(161, 49%, 54%, 1); /* green-100 */
  --cal-text-semantic-attention: hsla(27, 96%, 61%, 1); /* orange-100 */
  --cal-text-semantic-error: hsla(0, 91%, 71%, 1); /* red-100 */

  /* Content/Text Semantic Emphasis */
  --cal-text-semantic-info-emphasis: hsla(217, 91%, 25%, 1); /* blue-800 */
  --cal-text-semantic-success-emphasis: hsla(142, 71%, 25%, 1); /* green-800 */
  --cal-text-semantic-attention-emphasis: hsla(24, 95%, 25%, 1); /* orange-800 */
  --cal-text-semantic-error-emphasis: hsla(0, 84%, 25%, 1); /* red-800 */

  /* Legacy Content/Text Components - Consider deprecating */
  --cal-text-info: hsla(218, 83%, 93%, 1); /* Keeping existing info text */
  --cal-text-success: hsla(134, 76%, 94%, 1); /* Keeping existing success text */
  --cal-text-attention: hsla(37, 86%, 92%, 1); /* Keeping existing attention text */
  --cal-text-error: hsla(3, 66%, 93%, 1); /* Keeping existing error text */

  /* Brand */
  --cal-brand: hsla(0, 0%, 100%, 1); /* white */
  --cal-brand-emphasis: hsla(218, 11%, 65%, 1); /* Keeping existing brand emphasis */
  --cal-brand-text: hsla(0, 0%, 0%, 1); /* black */
}  
  `,t=document.createElement("style");t.id="cal-css-vars",t.textContent=e,document.head.appendChild(t)}catch(e){console.error("Error adding app css vars - Report this issue to support",e)}},Pe=10*1e3,$e=2*60*1e3,Ie=`.cal-embed{border:0px;min-height:300px;margin:0 auto;width:100%}
`;function K(i,e){const t=new window.CustomEvent(i,{detail:e});window.dispatchEvent(t)}class oe{static parseAction(e){if(!e)return null;const[t,a,r]=e.split(":");return t!=="CAL"?null:{ns:a,type:r}}getFullActionName(e){return this.namespace?`CAL:${this.namespace}:${e}`:`CAL::${e}`}fire(e,t){const a=this.getFullActionName(e),r={type:e,namespace:this.namespace,fullType:a,data:t};K(a,r),K(this.getFullActionName("*"),r)}on(e,t){const a=this.getFullActionName(e);window.addEventListener(a,t)}off(e,t){const a=this.getFullActionName(e);window.removeEventListener(a,t)}constructor(e){e=e||"",this.namespace=e}}const He=`*,:before,:after{box-sizing:border-box;border-width:0;border-style:solid;border-color:#e5e7eb}:before,:after{--tw-content: ""}html{line-height:1.5;-webkit-text-size-adjust:100%;-moz-tab-size:4;-o-tab-size:4;tab-size:4;font-family:var(--font-inter),ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";font-feature-settings:normal;font-variation-settings:normal}body{margin:0;line-height:inherit}hr{height:0;color:inherit;border-top-width:1px}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,samp,pre{font-family:Roboto Mono,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{text-indent:0;border-color:inherit;border-collapse:collapse}button,input,optgroup,select,textarea{font-family:inherit;font-feature-settings:inherit;font-variation-settings:inherit;font-size:100%;font-weight:inherit;line-height:inherit;color:inherit;margin:0;padding:0}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dl,dd,h1,h2,h3,h4,h5,h6,hr,figure,p,pre{margin:0}fieldset{margin:0;padding:0}legend{padding:0}ol,ul,menu{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{opacity:1;color:#9ca3af}input::placeholder,textarea::placeholder{opacity:1;color:#9ca3af}button,[role=button]{cursor:pointer}:disabled{cursor:default}img,svg,video,canvas,audio,iframe,embed,object{display:block;vertical-align:middle}img,video{max-width:100%;height:auto}[hidden]{display:none}[type=text],[type=email],[type=url],[type=password],[type=number],[type=date],[type=datetime-local],[type=month],[type=search],[type=tel],[type=time],[type=week],[multiple],textarea,select{-moz-appearance:none;-webkit-appearance:none;appearance:none;background-color:#fff;border-color:#6b7280;border-width:1px;border-radius:0;padding:.5rem .75rem;font-size:1rem;line-height:1.5rem;--tw-shadow: 0 0 #0000}[type=text]:focus,[type=email]:focus,[type=url]:focus,[type=password]:focus,[type=number]:focus,[type=date]:focus,[type=datetime-local]:focus,[type=month]:focus,[type=search]:focus,[type=tel]:focus,[type=time]:focus,[type=week]:focus,[multiple]:focus,textarea:focus,select:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow);border-color:#2563eb}input::-moz-placeholder,textarea::-moz-placeholder{color:#6b7280;opacity:1}input::placeholder,textarea::placeholder{color:#6b7280;opacity:1}::-webkit-datetime-edit-fields-wrapper{padding:0}::-webkit-date-and-time-value{min-height:1.5em}::-webkit-datetime-edit,::-webkit-datetime-edit-year-field,::-webkit-datetime-edit-month-field,::-webkit-datetime-edit-day-field,::-webkit-datetime-edit-hour-field,::-webkit-datetime-edit-minute-field,::-webkit-datetime-edit-second-field,::-webkit-datetime-edit-millisecond-field,::-webkit-datetime-edit-meridiem-field{padding-top:0;padding-bottom:0}select{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");background-position:right .5rem center;background-repeat:no-repeat;background-size:1.5em 1.5em;padding-right:2.5rem;-webkit-print-color-adjust:exact;print-color-adjust:exact}[multiple]{background-image:initial;background-position:initial;background-repeat:unset;background-size:initial;padding-right:.75rem;-webkit-print-color-adjust:unset;print-color-adjust:unset}[type=checkbox],[type=radio]{-moz-appearance:none;-webkit-appearance:none;appearance:none;padding:0;-webkit-print-color-adjust:exact;print-color-adjust:exact;display:inline-block;vertical-align:middle;background-origin:border-box;-webkit-user-select:none;-moz-user-select:none;user-select:none;flex-shrink:0;height:1rem;width:1rem;color:#2563eb;background-color:#fff;border-color:#6b7280;border-width:1px;--tw-shadow: 0 0 #0000}[type=checkbox]{border-radius:0}[type=radio]{border-radius:100%}[type=checkbox]:focus,[type=radio]:focus{outline:2px solid transparent;outline-offset:2px;--tw-ring-inset: var(--tw-empty, );--tw-ring-offset-width: 2px;--tw-ring-offset-color: #fff;--tw-ring-color: #2563eb;--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow)}[type=checkbox]:checked,[type=radio]:checked{border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e")}[type=radio]:checked{background-image:url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e")}[type=checkbox]:checked:hover,[type=checkbox]:checked:focus,[type=radio]:checked:hover,[type=radio]:checked:focus{border-color:transparent;background-color:currentColor}[type=checkbox]:indeterminate{background-image:url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 16 16'%3e%3cpath stroke='white' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M4 8h8'/%3e%3c/svg%3e");border-color:transparent;background-color:currentColor;background-size:100% 100%;background-position:center;background-repeat:no-repeat}[type=checkbox]:indeterminate:hover,[type=checkbox]:indeterminate:focus{border-color:transparent;background-color:currentColor}[type=file]{background:unset;border-color:inherit;border-width:0;border-radius:0;padding:0;font-size:unset;line-height:inherit}[type=file]:focus{outline:1px solid ButtonText;outline:1px auto -webkit-focus-ring-color}*{scrollbar-color:initial;scrollbar-width:initial}*,:before,:after{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }::backdrop{--tw-border-spacing-x: 0;--tw-border-spacing-y: 0;--tw-translate-x: 0;--tw-translate-y: 0;--tw-rotate: 0;--tw-skew-x: 0;--tw-skew-y: 0;--tw-scale-x: 1;--tw-scale-y: 1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness: proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width: 0px;--tw-ring-offset-color: #fff;--tw-ring-color: rgb(59 130 246 / .5);--tw-ring-offset-shadow: 0 0 #0000;--tw-ring-shadow: 0 0 #0000;--tw-shadow: 0 0 #0000;--tw-shadow-colored: 0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.visible{visibility:visible}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.bottom-0{bottom:var(--cal-spacing-0)}.bottom-4{bottom:var(--cal-spacing-4)}.left-0{left:var(--cal-spacing-0)}.left-4{left:var(--cal-spacing-4)}.right-0{right:var(--cal-spacing-0)}.right-4{right:var(--cal-spacing-4)}.top-0{top:var(--cal-spacing-0)}.z-10{z-index:10}.z-\\[999999999999\\]{z-index:999999999999}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-top:var(--cal-spacing-2);margin-bottom:var(--cal-spacing-2)}.my-4{margin-top:var(--cal-spacing-4);margin-bottom:var(--cal-spacing-4)}.-mr-1{margin-right:calc(var(--cal-spacing-1) * -1)}.mb-1{margin-bottom:var(--cal-spacing-1)}.mb-2{margin-bottom:var(--cal-spacing-2)}.mb-4{margin-bottom:var(--cal-spacing-4)}.ml-\\[-1px\\]{margin-left:-1px}.mr-1{margin-right:var(--cal-spacing-1)}.mr-2{margin-right:var(--cal-spacing-2)}.mr-3{margin-right:var(--cal-spacing-3)}.mt-2{margin-top:var(--cal-spacing-2)}.mt-auto{margin-top:auto}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.grid{display:grid}.contents{display:contents}.hidden{display:none}.aspect-square{aspect-ratio:1 / 1}.h-16{height:var(--cal-spacing-16)}.h-4{height:var(--cal-spacing-4)}.h-6{height:var(--cal-spacing-6)}.h-7{height:var(--cal-spacing-7)}.h-9{height:var(--cal-spacing-9)}.h-full{height:100%}.min-h-6{min-height:var(--cal-spacing-6)}.min-h-\\[36px\\]{min-height:36px}.w-1\\/2{width:50%}.w-10{width:var(--cal-spacing-10)}.w-20{width:var(--cal-spacing-20)}.w-24{width:var(--cal-spacing-24)}.w-4{width:var(--cal-spacing-4)}.w-6{width:var(--cal-spacing-6)}.w-7{width:var(--cal-spacing-7)}.w-8{width:var(--cal-spacing-8)}.w-9{width:var(--cal-spacing-9)}.w-full{width:100%}.min-w-6{min-width:var(--cal-spacing-6)}.min-w-\\[36px\\]{min-width:36px}.max-w-full{max-width:100%}.max-w-screen{max-width:100vw}.flex-shrink{flex-shrink:1}.origin-center{transform-origin:center}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes pulse{50%{opacity:.5}}.animate-pulse{animation:pulse 2s cubic-bezier(.4,0,.6,1) infinite}.cursor-pointer{cursor:pointer}.grid-cols-7{grid-template-columns:repeat(7,minmax(0,1fr))}.grid-rows-6{grid-template-rows:repeat(6,minmax(0,1fr))}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-start{justify-content:flex-start}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:var(--cal-spacing-1)}.gap-4{gap:var(--cal-spacing-4)}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse: 0;margin-top:calc(var(--cal-spacing-3) * calc(1 - var(--tw-space-y-reverse)));margin-bottom:calc(var(--cal-spacing-3) * var(--tw-space-y-reverse))}.overflow-hidden{overflow:hidden}.whitespace-nowrap{white-space:nowrap}.rounded-\\[10px\\]{border-radius:10px}.rounded-full{border-radius:var(--cal-radius-full)}.rounded-md{border-radius:var(--cal-radius-md)}.rounded-sm{border-radius:var(--cal-radius-sm)}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-t{border-top-width:1px}.border-muted{border-color:var(--cal-border-muted)}.border-subtle{border-color:var(--cal-border-subtle)}.border-transparent{border-color:transparent}.bg-brand{background-color:var(--cal-brand-color, black)}.bg-default{background-color:var(--cal-bg, white)}.bg-emphasis{background-color:var(--cal-bg-emphasis)}.bg-muted{background-color:var(--cal-bg-muted)}.bg-red-50{--tw-bg-opacity: 1;background-color:rgb(254 242 242 / var(--tw-bg-opacity))}.fill-transparent{fill:transparent}.\\!p-2{padding:var(--cal-spacing-2)!important}.p-1{padding:var(--cal-spacing-1)}.p-24{padding:var(--cal-spacing-24)}.p-6{padding:var(--cal-spacing-6)}.px-5{padding-left:var(--cal-spacing-5);padding-right:var(--cal-spacing-5)}.px-6{padding-left:var(--cal-spacing-6);padding-right:var(--cal-spacing-6)}.py-3{padding-top:var(--cal-spacing-3);padding-bottom:var(--cal-spacing-3)}.py-4{padding-top:var(--cal-spacing-4);padding-bottom:var(--cal-spacing-4)}.pt-\\[100\\%\\]{padding-top:100%}.text-center{text-align:center}.align-top{vertical-align:top}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.leading-5{line-height:1.25rem}.leading-none{line-height:1}.tracking-widest{letter-spacing:.1em}.text-default{color:var(--cal-text)}.text-emphasis{color:var(--cal-text-emphasis)}.text-muted{color:var(--cal-text-muted)}.text-subtle{color:var(--cal-text-subtle)}.antialiased{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.opacity-70{opacity:.7}.opacity-90{opacity:.9}.outline-none{outline:2px solid transparent;outline-offset:2px}.drop-shadow-md{--tw-drop-shadow: drop-shadow(0 4px 3px rgb(0 0 0 / .07)) drop-shadow(0 2px 2px rgb(0 0 0 / .06));filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.duration-200{transition-duration:.2s}.\\[--booker-main-width\\:480px\\]{--booker-main-width: 480px}.\\[--booker-meta-width\\:240px\\]{--booker-meta-width: 240px}.\\[--booker-meta-width\\:340px\\]{--booker-meta-width: 340px}.\\[--booker-timeslots-width\\:240px\\]{--booker-timeslots-width: 240px}.\\[grid-area\\:main\\]{grid-area:main}.\\[grid-area\\:meta\\]{grid-area:meta}@font-face{font-family:Cal Sans;src:url(https://cal.com/cal.ttf)}h1,h2,h3,h4,h5,h6{font-family:Cal Sans;font-weight:400;letter-spacing:normal}html,body,:host{font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji}.empty\\:before\\:inline-block:empty:before{content:var(--tw-content);display:inline-block}.empty\\:before\\:content-\\[\\'\\'\\]:empty:before{--tw-content: "";content:var(--tw-content)}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-gray-600:focus{--tw-ring-opacity: 1;--tw-ring-color: rgb(75 85 99 / var(--tw-ring-opacity))}.focus\\:ring-opacity-50:focus{--tw-ring-opacity: .5}.focus-visible\\:border-subtle:focus-visible{border-color:var(--cal-border-subtle)}.focus-visible\\:bg-subtle:focus-visible{background-color:var(--cal-bg-subtle)}.focus-visible\\:outline-none:focus-visible{outline:2px solid transparent;outline-offset:2px}.focus-visible\\:ring-0:focus-visible{--tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow, 0 0 #0000)}.disabled\\:cursor-not-allowed:disabled{cursor:not-allowed}.disabled\\:opacity-30:disabled{opacity:.3}.group:active .group-active\\:translate-y-\\[0\\.5px\\]{--tw-translate-y: .5px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.hover\\:border:hover{border-width:1px}.hover\\:border-default:hover{border-color:var(--cal-border)}.hover\\:opacity-100:hover{opacity:1}.active\\:scale-95:active{--tw-scale-x: .95;--tw-scale-y: .95;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.enabled\\:hover\\:border-subtle:hover:not(:disabled){border-color:var(--cal-border-subtle)}.enabled\\:hover\\:bg-subtle:hover:not(:disabled){background-color:var(--cal-bg-subtle)}.enabled\\:hover\\:text-emphasis:hover:not(:disabled){color:var(--cal-text-emphasis)}.enabled\\:active\\:shadow-outline-gray-active:active:not(:disabled){--tw-shadow: 0px 2px 1px 0px rgba(0, 0, 0, .05) inset;--tw-shadow-colored: inset 0px 2px 1px 0px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000),var(--tw-ring-shadow, 0 0 #0000),var(--tw-shadow)}:is([dir=rtl] .rtl\\:rotate-180){--tw-rotate: 180deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skew(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}:is(.dark .dark\\:bg-muted){background-color:var(--cal-bg-muted)}:is(.dark .dark\\:\\[color-scheme\\:dark\\]){color-scheme:dark}@media (min-width: 640px){.sm\\:transition-\\[width\\]{transition-property:width;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.sm\\:duration-300{transition-duration:.3s}@media (prefers-reduced-motion: reduce){.sm\\:motion-reduce\\:transition-none{transition-property:none}}}@media (min-width: 768px){.md\\:bottom-6{bottom:var(--cal-spacing-6)}.md\\:left-10{left:var(--cal-spacing-10)}.md\\:right-10{right:var(--cal-spacing-10)}.md\\:mb-0{margin-bottom:var(--cal-spacing-0)}.md\\:w-\\[var\\(--booker-meta-width\\)\\]{width:var(--booker-meta-width)}.md\\:flex-row{flex-direction:row}.md\\:border-0{border-width:0px}.md\\:border-l{border-left-width:1px}.md\\:border-subtle{border-color:var(--cal-border-subtle)}}@media (min-width: 1024px){.lg\\:w-\\[var\\(--booker-main-width\\)\\]{width:var(--booker-main-width)}.lg\\:\\[--booker-meta-width\\:280px\\]{--booker-meta-width: 280px}.lg\\:\\[--booker-meta-width\\:424px\\]{--booker-meta-width: 424px}.lg\\:\\[--booker-timeslots-width\\:280px\\]{--booker-timeslots-width: 280px}}
`,_e="https://app.cal.com";Me();customElements.define("cal-modal-box",I);customElements.define("cal-floating-button",$);customElements.define("cal-inline",Te);const m=window.Cal;if(!m||!m.q)throw new Error("Cal is not defined. This shouldn't happen");Oe();document.head.appendChild(document.createElement("style")).innerHTML=Ie;function P(i,e){function t(r,o){return typeof o=="string"?typeof r==o:r instanceof o}function a(r){return typeof r>"u"}if(e.required&&a(i))throw new Error("Argument is required");for(const[r,o]of Object.entries(e.props||{})){if(o.required&&a(i[r]))throw new Error(`"${r}" is required`);let s=!0;if(o.type&&!a(i[r])&&(o.type instanceof Array?o.type.forEach(l=>{s=s||t(i[r],l)}):s=t(i[r],o.type)),!s)throw new Error(`"${r}" is of wrong type.Expected type "${o.type}"`)}}function se(i){const e=getComputedStyle(i).colorScheme;return e==="dark"||e==="light"?e:null}function W(i,e){if(!i["ui.color-scheme"]){const t=se(e);t&&(i["ui.color-scheme"]=t)}return i}const je=(i,e)=>!![...["month","date","slot","rescheduleUid","bookingUid","duration","overlayCalendar"]].includes(i);class f{constructor(e,t){this.iframeDoQueue=[],this.calLink=null,this.embedConfig=null,this.embedRenderStartTime=null,this.__config={calOrigin:_e},this.api=new ce(this),this.namespace=e,this.actionManager=new oe(e),f.actionsManagers=f.actionsManagers||{},f.actionsManagers[e]=this.actionManager,this.processQueue(t),this.actionManager.on("__dimensionChanged",a=>{const{data:r}=a.detail,o=this.iframe;if(!o)return;const s="px";r.iframeHeight&&(o.style.height=r.iframeHeight+s),this.modalBox&&(o.style.maxHeight=`${X()}px`)}),this.actionManager.on("__iframeReady",a=>{this.iframeReady=!0,this.iframe&&!a.detail.data.isPrerendering&&(this.iframe.style.visibility=""),this.doInIframe({method:"parentKnowsIframeReady"}),this.iframeDoQueue.forEach(r=>{this.doInIframe(r)})}),this.actionManager.on("__routeChanged",()=>{if(!this.inlineEl)return;const{top:a,height:r}=this.inlineEl.getBoundingClientRect();a<0&&Math.abs(a/r)>=.25&&this.inlineEl.scrollIntoView({behavior:"smooth"})}),this.actionManager.on("linkReady",()=>{var a,r;this.isPrerendering||(this.iframe.style.visibility="",(a=this.modalBox)==null||a.setAttribute("state","loaded"),(r=this.inlineEl)==null||r.setAttribute("loading","done"))}),this.actionManager.on("linkFailed",a=>{var o,s,l,n;this.iframe&&(this.isPrerendering||((o=this.inlineEl)==null||o.setAttribute("data-error-code",a.detail.data.code),(s=this.modalBox)==null||s.setAttribute("data-error-code",a.detail.data.code),(l=this.inlineEl)==null||l.setAttribute("loading","failed"),(n=this.modalBox)==null||n.setAttribute("state","failed")))})}static ensureGuestKey(e){return e=e||{},{...e,guest:e.guests??void 0}}processInstruction(e){const t=[].slice.call(e);if(typeof t[0]!="string"){t.forEach(o=>{this.processInstruction(o)});return}const[a,...r]=t;this.api[a]||G(`Instruction ${a} not FOUND`);try{this.api[a](...r)}catch(o){G("Instruction couldn't be executed",o)}return t}processQueue(e){e.forEach(t=>{this.processInstruction(t)}),e.splice(0),e.push=t=>{this.processInstruction(t)}}createIframe({calLink:e,config:t={},calOrigin:a}){const r=this.iframe=document.createElement("iframe");return r.className="cal-embed",r.name=`cal-embed=${this.namespace}`,r.title="Book a call",this.loadInIframe({calLink:e,config:t,calOrigin:a,iframe:r}),r}loadInIframe({calLink:e,config:t={},calOrigin:a,iframe:r}){b("Loading in iframe",e),r.dataset.calLink=e;const o=this.getCalConfig(),{iframeAttrs:s,...l}=t;s&&s.id&&r.setAttribute("id",s.id);const n=this.buildFilteredQueryParams(l),h=(a||o.calOrigin||"").replace("https://cal.com","https://app.cal.com"),d=new URL(`${h}/${e}`);d.pathname.endsWith("embed")||(d.pathname=`${d.pathname}/embed`),d.searchParams.set("embed",this.namespace),o.debug&&d.searchParams.set("debug",`${o.debug}`),r.style.visibility="hidden",o.uiDebug&&(r.style.border="1px solid green");for(const[c,g]of n)d.searchParams.append(c,g);return this.iframeReady=!1,r.src===d.toString()&&d.searchParams.append("__cal.reloadTs",Date.now().toString()),r.src=d.toString(),r}getCalConfig(){return this.__config}doInIframe(e){if(!this.iframeReady){this.iframeDoQueue.push(e);return}if(!this.iframe)throw new Error("iframe doesn't exist. `createIframe` must be called before `doInIframe`");this.iframe.contentWindow&&this.iframe.contentWindow.postMessage({originator:"CAL",method:e.method,arg:e.arg},"*")}filterParams(e){return Object.fromEntries(Object.entries(e).filter(([t,a])=>!je(t)))}getQueryParamsFromPage(){const e=qe();return this.filterParams(e)}buildFilteredQueryParams(e){var o;const a={...(o=m.config)!=null&&o.forwardQueryParams?this.getQueryParamsFromPage():{},...e},r=new URLSearchParams;for(const[s,l]of Object.entries(a))l!==void 0&&(l instanceof Array?l.forEach(n=>r.append(s,n)):r.set(s,l));return r}getNextActionForModal({modal:e,pathWithQueryToLoad:t,stateData:a}){const{embedConfig:r,previousEmbedConfig:o,isConnectionInitiated:s,previousEmbedRenderStartTime:l,embedRenderStartTime:n}=a,h=this.getCalConfig(),d=this.getLastLoadedLinkInframe(),c=(d==null?void 0:d.pathname)??null,g=new URL(t,h.calOrigin),u=document.querySelector(`cal-modal-box[uid="${e.uid}"]`),p=g.pathname,y=c&&Ee({bookingLinkPath1:c,bookingLinkPath2:p}),v=d==null?void 0:d.searchParams.toString(),C=g.searchParams.toString(),x=v===C,w=o&&he({embedConfig1:o,embedConfig2:r}),z=u&&u.getAttribute("state")==="failed",E=l?n-l:0,k=l?E>$e:!1,j=l?E>Pe:!1,q=!y||z||k?"fullReload":!w||!x||!s||j?"connect":"noAction";return b("Next Modal Action:",q,{path:{isSame:y,urlToLoadPath:p,lastLoadedPathInIframe:c},config:{isSame:w,previousEmbedConfig:o,embedConfig:r},queryParams:{isSame:x,lastLoadedUrlInIframeObjectSearchParams:v,urlToLoadObjectSearchParams:C},areSlotsStale:j,crossedReloadThreshold:k,isInFailedState:z,isConnectionInitiated:s}),q;function he({embedConfig1:R,embedConfig2:H}){return Object.keys(R).length!==Object.keys(H).length?!1:Object.keys(R).every(A=>{if(typeof R[A]!=typeof H[A])return!1;const L=R[A],M=H[A];return L instanceof Array&&M instanceof Array?L.length===M.length&&L.every(me=>M.includes(me)):typeof L=="string"?L===M:!0})}}getLastLoadedLinkInframe(){if(!this.iframe||!this.iframe.dataset.calLink)return null;const e=this.iframe.dataset.calLink;if(!e)return null;const t=new URL(e,new URL(this.iframe.src).origin);return new URL(`${t.pathname}${t.search}`,t.origin)}async submitThroughHeadlessRouterInModal({modal:e,calLinkUrlObject:t,stateData:a}){const{uid:r,element:o,calOrigin:s}=e,{embedConfig:l}=a,n=this.getLastLoadedLinkInframe(),h=(n==null?void 0:n.pathname)??null,d=this.getCalConfig(),c=s??d.calOrigin,u=await Ce({headlessRouterPageUrl:t.toString()});if(b("Headless router result",u),"redirect"in u){const p=new URL(u.redirect),y=T(p.searchParams.entries()),v=this.embedConfig={...l,...y};if(this.getNextActionForModal({modal:{uid:r},pathWithQueryToLoad:`${p.pathname}${p.search}`,stateData:{...a,embedConfig:v}})==="fullReload"){h&&console.error("Preloaded iframe couldn't be used",{preloadedPath:h,newPath:p.pathname});const x=p.pathname.replace(/^\//,"");this.loadInIframe({calLink:x,calOrigin:c,config:v,iframe:this.iframe})}else b("Reusing the same iframe for headless router",{routerRedirectUrl:p.toString(),lastLoadedPathInIframe:h}),this.doInIframe({method:"connect",arg:{config:v,params:T(p.searchParams.entries())}})}else"message"in u?(b("Setting message in modal",{message:u.message}),o.setAttribute("data-message",u.message),o.setAttribute("state","has-message")):"error"in u&&(b("Setting error in modal",{error:u.error}),o.setAttribute("data-error-code","routerError"),o.setAttribute("data-message",u.error),o.setAttribute("state","failed"))}}const ne=class le{constructor(e){this.cal=e}init(e,t={}){let a="";if(typeof e!="string"?t=e||{}:a=e,a!==this.cal.namespace)return;le.initializedNamespaces.push(this.cal.namespace);const{calOrigin:r,origin:o,...s}=t;this.cal.__config.calOrigin=r||o||this.cal.__config.calOrigin,this.cal.__config={...this.cal.__config,...s}}initNamespace(e){m.ns[e].instance=m.ns[e].instance||new f(e,m.ns[e].q)}inline({calLink:e,elementOrSelector:t,config:a}){if(P(arguments[0],{required:!0,props:{calLink:{required:!0,type:"string"},elementOrSelector:{required:!0,type:["string",HTMLElement]},config:{required:!1,type:Object}}}),this.cal.inlineEl&&document.body.contains(this.cal.inlineEl)){console.warn("Inline embed already exists. Ignoring this call");return}if(a=a||{},typeof a.iframeAttrs=="string"||a.iframeAttrs instanceof Array)throw new Error("iframeAttrs should be an object");const r=t instanceof HTMLElement?t:document.querySelector(t);if(!r)throw new Error("Element not found");a.embedType="inline";const o=this.cal.getCalConfig(),s=this.cal.createIframe({calLink:e,config:W(f.ensureGuestKey(a),r),calOrigin:o.calOrigin});s.style.height="100%",s.style.width="100%",r.classList.add("cal-inline-container");const l=document.createElement("template"),n=S(a,"layout"),h=S(a,"cal.embed.pageType"),d=S(a,"theme");l.innerHTML=`<cal-inline 
      ${N({pageType:h,theme:d,layout:n})}
      style="max-height:inherit;height:inherit;min-height:inherit;display:flex;position:relative;flex-wrap:wrap;width:100%">
    </cal-inline>
    <style>.cal-inline-container::-webkit-scrollbar{display:none}.cal-inline-container{scrollbar-width:none}</style>`,this.cal.inlineEl=l.content.children[0],this.cal.inlineEl.appendChild(s),r.appendChild(l.content)}floatingButton({calLink:e,buttonText:t="Book my Cal",hideButtonIcon:a=!1,attributes:r,buttonPosition:o="bottom-right",buttonColor:s="rgb(0, 0, 0)",buttonTextColor:l="rgb(255, 255, 255)",calOrigin:n,config:h}){let d=null;r!=null&&r.id&&(d=document.getElementById(r.id));let c;d?c=d:(c=document.createElement("cal-floating-button"),c.dataset.calLink=e,c.dataset.calNamespace=this.cal.namespace,c.dataset.calOrigin=n??"",h&&(c.dataset.calConfig=JSON.stringify(h)),r!=null&&r.id&&(c.id=r.id),document.body.appendChild(c));const g=c.dataset;g.buttonText=t,g.hideButtonIcon=`${a}`,g.buttonPosition=`${o}`,g.buttonColor=`${s}`,g.buttonTextColor=`${l}`}async modal({calLink:e,config:t={},calOrigin:a,__prerender:r=!1}){const o=this.modalUid||this.prerenderedModalUid||String(Date.now())||"0",s=!!(this.modalUid&&this.prerenderedModalUid),l=document.body;this.cal.isPrerendering=!!r,r&&(t.prerender="true",t["cal.skipSlotsFetch"]="true");const n=W(f.ensureGuestKey({...t,embedType:"modal"}),l),h=this.cal.getCalConfig();a=a||h.calOrigin;const d=Date.now(),c=this.cal.embedConfig,g=this.cal.embedRenderStartTime;this.cal.embedConfig=n;const u=document.querySelector(`cal-modal-box[uid="${o}"]`);if(u&&this.cal.iframe){const w=new URL(e,a),z=w?Se(w.toString()):!1;b(`Trying to reuse modal ${o}`);const E={embedConfig:n,previousEmbedConfig:c,embedRenderStartTime:d,previousEmbedRenderStartTime:g,isConnectionInitiated:s};if(z)u.setAttribute("state","loading"),await this.cal.submitThroughHeadlessRouterInModal({modal:{uid:o,element:u,calOrigin:a},calLinkUrlObject:w,stateData:E});else{const k=this.cal.getNextActionForModal({modal:{uid:o},pathWithQueryToLoad:`${w.pathname}${w.search}`,stateData:E});if(k==="noAction"){b(`Reopening modal without any other action needed ${o}`),u.setAttribute("state","reopened");return}b("Attempting to load/connect regular booking link"),u.setAttribute("state","loading"),k==="fullReload"?(b("Initiating full page load"),this.cal.loadInIframe({calLink:e,calOrigin:a,iframe:this.cal.iframe,config:n})):k==="connect"&&this.cal.doInIframe({method:"connect",arg:{config:n,params:T(w.searchParams.entries())}})}this.modalUid=o,this.cal.embedRenderStartTime=d;return}if(b(`Creating new modal ${o}`),r&&(this.prerenderedModalUid=o),typeof t.iframeAttrs=="string"||t.iframeAttrs instanceof Array)throw new Error("iframeAttrs should be an object");let p=null;p||(p=this.cal.createIframe({calLink:e,config:n,calOrigin:a})),p.style.borderRadius="8px",p.style.height="100%",p.style.width="100%";const y=document.createElement("template"),v=S(n,"cal.embed.pageType"),C=S(n,"theme"),x=S(n,"layout");y.innerHTML=`<cal-modal-box 
      ${N({pageType:v,theme:C,layout:x})}
      uid="${o}">
    </cal-modal-box>`,this.cal.modalBox=y.content.children[0],this.cal.modalBox.appendChild(p),this.cal.modalBox.setAttribute("state","loading"),r&&this.cal.modalBox.setAttribute("state","prerendering"),this.handleClose(),l.appendChild(y.content)}handleClose(){this.cal.actionManager.on("__closeIframe",()=>{var e;(e=this.cal.modalBox)==null||e.setAttribute("state","closed")})}on({action:e,callback:t}){P(arguments[0],{required:!0,props:{action:{required:!0,type:"string"},callback:{required:!0,type:Function}}}),this.cal.actionManager.on(e,t)}off({action:e,callback:t}){this.cal.actionManager.off(e,t)}preload({calLink:e,type:t,options:a={},pageType:r,calOrigin:o}){P(arguments[0],{required:!0,props:{calLink:{type:"string",required:!0},type:{type:"string",required:!1},options:{type:Object,required:!1}}});let s=m;const l=this.cal.namespace;if(l&&(s=m.ns[l]),!s)throw new Error(`Namespace ${l} isn't defined`);const n=this.cal.getCalConfig();let h=a.prerenderIframe;if(t&&h===void 0&&(h=!0),!t&&h)throw new Error("You should provide 'type'");h?t==="modal"||t==="floatingButton"?(this.cal.isPrerendering=!0,this.modal({calLink:e,calOrigin:o||n.calOrigin,__prerender:!0,...r?{config:{"cal.embed.pageType":r}}:{}})):(console.warn("Ignoring - full preload for inline embed and instead preloading assets only"),V({calLink:e,config:n})):V({calLink:e,config:n})}prerender({calLink:e,type:t,pageType:a,calOrigin:r}){this.preload({calLink:e,type:t,pageType:a,calOrigin:r})}ui(e){P(e,{required:!0,props:{theme:{required:!1,type:"string"},styles:{required:!1,type:Object}}}),this.cal.doInIframe({method:"ui",arg:e})}};ne.initializedNamespaces=[];let ce=ne;function qe(){const i=new URLSearchParams(window.location.search);return T(i.entries())}const de="";m.instance=new f(de,m.q);for(const[i,e]of Object.entries(m.ns))e.instance=e.instance??new f(i,e.q);window.addEventListener("message",i=>{const e=i.data,t=e.fullType,a=oe.parseAction(t);if(!a)return;const r=f.actionsManagers[a.ns];if(m.__logQueue=m.__logQueue||[],m.__logQueue.push({...a,data:e.data}),!r)throw new Error(`Unhandled Action ${a}`);r.fire(a.type,e.data)});document.addEventListener("click",i=>{var d;const e=i.target,t=h(e),a=(d=t==null?void 0:t.dataset)==null?void 0:d.calLink;if(!a)return;const r=t.dataset.calNamespace,o=t.dataset.calConfig||"",s=t.dataset.calOrigin||"";let l;try{l=JSON.parse(o)}catch{l={}}let n=m;if(r&&(n=m.ns[r]),!n)throw new Error(`Namespace ${r} isn't defined`);n("modal",{calLink:a,config:l,calOrigin:s});function h(c){let g;return!(c instanceof HTMLElement)||(c!=null&&c.dataset.calLink?g=c:g=Array.from(document.querySelectorAll("[data-cal-link]")).find(u=>u.contains(c)),!(g instanceof HTMLElement))?null:g}});let Y=null;(function(){setInterval(()=>{const e=se(document.body);e&&e!==Y&&(Y=e,ce.initializedNamespaces.forEach(t=>{Be(t)("ui",{colorScheme:e})}))},50)})();function Be(i){let e;return i===de?e=m:e=m.ns[i],e}function V({config:i,calLink:e}){const t=document.body.appendChild(document.createElement("iframe")),a=new URL(`${i.calOrigin}/${e}`);a.searchParams.set("preload","true"),t.src=a.toString(),t.style.width="0",t.style.height="0",t.style.display="none"}function Oe(){m.fingerprint="14b9e0c",m.version="1.5.3",m.__css=He,m.config||(m.config={}),m.config.forwardQueryParams=m.config.forwardQueryParams??!1}function b(...i){const e=location.search;m.__logQueue=m.__logQueue||[],m.__logQueue.push(i),(e.includes("cal.embed.logging=1")||{}.INTEGRATION_TEST_MODE==="true")&&console.log("Parent:",...i)}function G(...i){console.error(...i)}
}()
