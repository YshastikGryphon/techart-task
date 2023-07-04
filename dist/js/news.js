const newsList=document.querySelector(".news__list"),newsElements=document.querySelectorAll(".news__item"),newsControls=document.querySelector(".news__controls");let currentPage=1,currentPagination=1;function renderFourNewsStartingFrom(e){function n(e){let n=document.getElementById(`news-${e}`);null!==n&&n.classList.add("show")}let t=4*e;newsElements.forEach(e=>{e.classList.remove("show")}),n(t),n(t-1),n(t-2),n(t-3)}function noHighlightButton(){document.querySelectorAll(".news__control-button").forEach(e=>{e.classList.remove("control-here")})}const pagitanionMax=Math.ceil(newsElements.length/4),pagitanionGroupMax=Math.ceil(pagitanionMax/3);function createControlPanel(e){document.createElement("li").classList.add("news__control");let n=document.createElement("button");n.classList.add("news__control-arrow","btn","hidden"),n.value="prev",n.innerHTML='<svg width="24" height="16" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><path d="M21 12C21.5523 12 22 11.5523 22 11C22 10.4477 21.5523 10 21 10L21 12ZM5.53401 10.2929C5.14349 10.6834 5.14349 11.3166 5.53401 11.7071L11.898 18.0711C12.2885 18.4616 12.9217 18.4616 13.3122 18.0711C13.7027 17.6805 13.7027 17.0474 13.3122 16.6569L7.65533 11L13.3122 5.34315C13.7027 4.95262 13.7027 4.31946 13.3122 3.92893C12.9217 3.53841 12.2885 3.53841 11.898 3.92893L5.53401 10.2929ZM21 10L6.24112 10L6.24112 12L21 12L21 10Z" fill="#841844"/></svg>',n.addEventListener("click",()=>{renderPaginationFrom(currentPagination-=1),currentPagination<=1&&(n.classList.add("hidden"),t.classList.remove("hidden"),renderPaginationFrom(currentPagination))});let t=document.createElement("button");t.classList.add("news__control-arrow","btn"),t.value="next",t.innerHTML=' <svg width="24" height="16" viewBox="0 0 24 18" xmlns="http://www.w3.org/2000/svg"><path d="M3 10C2.44772 10 2 10.4477 2 11C2 11.5523 2.44772 12 3 12L3 10ZM18.466 11.7071C18.8565 11.3166 18.8565 10.6834 18.466 10.2929L12.102 3.92893C11.7115 3.53841 11.0783 3.53841 10.6878 3.92893C10.2973 4.31946 10.2973 4.95262 10.6878 5.34315L16.3447 11L10.6878 16.6569C10.2973 17.0474 10.2973 17.6805 10.6878 18.0711C11.0783 18.4616 11.7115 18.4616 12.102 18.0711L18.466 11.7071ZM3 12L17.7589 12L17.7589 10L3 10L3 12Z" fill="#841844"/></svg> ',t.addEventListener("click",()=>{renderPaginationFrom(currentPagination+=1),currentPagination>=pagitanionGroupMax&&(t.classList.add("hidden"),n.classList.remove("hidden"),renderPaginationFrom(currentPagination))}),newsControls.append(n);for(let e=1;e<=pagitanionMax;e++){let n=document.createElement("button");n.classList.add("news__control-button","btn"),n.value=e,n.textContent=e,n.addEventListener("click",()=>{console.log(n.value),renderFourNewsStartingFrom(currentPage=n.value),noHighlightButton(),n.classList.add("control-here")}),newsControls.append(n)}newsControls.append(t)}function renderPaginationFrom(e){function n(e){let n=document.querySelector(`[value="${e}"]`);null!==n&&n.classList.add("show")}let t=3*e;document.querySelectorAll(".news__control-button").forEach(e=>{e.classList.remove("show")}),n(t),n(t-1),n(t-2)}renderFourNewsStartingFrom(currentPage),createControlPanel(pagitanionMax),renderPaginationFrom(currentPagination),document.querySelector('[value="1"]').classList.add("control-here");
