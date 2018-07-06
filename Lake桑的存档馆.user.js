// ==UserScript==
// @name         Lake桑的存档馆
// @namespace    https://lakejason0.wordpress.com/
// @contributionURL    https://github.com/lakejason0/lakejason0.wordpress.com
// @include      https://lakejason0.wordpress.com/*
// @include      http://lakejason0.wordpress.com/*
// @version      0.1
// @description  Lake桑的存档馆。增强Crisp。
// @author       Lake桑
// @grant        none
// @run-at       document-start
// ==/UserScript==


window.$crisp=[];
window.CRISP_WEBSITE_ID="0e35ddce-1fe7-4f98-b916-3a83ed049d82";
(function(){
    d=document;
    s=d.createElement("script");
    s.src="https://client.crisp.chat/l.js";
    s.async=1;
    d.getElementsByTagName("head")[0].appendChild(s);
})();
