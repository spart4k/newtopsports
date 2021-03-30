(function() {
'use strict';
if (Object.prototype.hasOwnProperty.call(window, 'hhScriptCounter')) {
window.hhScriptCounter++;
} else {
window.hhScriptCounter = 0;
}

var postfix = Math.random().toString(36).substring(2);

var head = document.getElementsByTagName('head')[0];
var script = document.querySelectorAll('.hh-script')[window.hhScriptCounter];
var hostname = '';
try {
hostname = window.top.location.hostname;
} catch (ignore) {}
var pathname = '';
try {
pathname = window.top.location.pathname;
} catch (ignore) {}
var div = document.createElement('div');
div.innerHTML = '<div class="hh-widget-css_class_postfix">\n\n<div class="hh-header-css_class_postfix hh-header-css_class_postfix_empty"\ndata-qa="widget-title">\n\n</div>\n\n\n<div class="hh-vacancies-css_class_postfix">\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/42612865?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u041c\u0430\u0440\u043a\u0435\u0442\u043e\u043b\u043e\u0433\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\n\u0421\u0430\u043c\u0430\u0440\u0430\n\n\n</span>\n</div>\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/42612911?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u041f\u0440\u043e\u0433\u0440\u0430\u043c\u043c\u0438\u0441\u0442 1C/\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a 1\u0421\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\n\u0421\u0430\u043c\u0430\u0440\u0430\n\n\n</span>\n</div>\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/42677755?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u0420\u0435\u0433\u0438\u043e\u043d\u0430\u043b\u044c\u043d\u044b\u0439 \u043c\u0435\u043d\u0435\u0434\u0436\u0435\u0440 \u0426\u0424\u041e\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\n\u041c\u043e\u0441\u043a\u0432\u0430\n\n\n</span>\n</div>\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/42677760?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u0411\u0443\u0445\u0433\u0430\u043b\u0442\u0435\u0440\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\u043e\u0442 40000 \u0440\u0443\u0431.,\n\n\n\u0421\u0430\u043c\u0430\u0440\u0430\n\n\n</span>\n</div>\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/43108931?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u041a\u043b\u0430\u0434\u043e\u0432\u0449\u0438\u043a\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\u043e\u0442 25000 \u0440\u0443\u0431.,\n\n\n\u0421\u0430\u043c\u0430\u0440\u0430\n\n\n</span>\n</div>\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/43177883?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u0412\u0435\u0434\u0443\u0449\u0438\u0439 backend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a/\u0442\u0435\u0445\u043b\u0438\u0434\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\u043e\u0442 100000 \u0440\u0443\u0431.,\n\n\n\u0421\u0430\u043c\u0430\u0440\u0430\n\n\n</span>\n</div>\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/43177884?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u0412\u0435\u0434\u0443\u0449\u0438\u0439 backend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a/\u0442\u0435\u0445\u043b\u0438\u0434\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\u043e\u0442 100000 \u0440\u0443\u0431.,\n\n\n\u041d\u043e\u0432\u043e\u043a\u0443\u0439\u0431\u044b\u0448\u0435\u0432\u0441\u043a\n\n\n</span>\n</div>\n\n<div class="hh-vacancy-css_class_postfix" data-qa="vacancy">\n<a class="hh-vacancy__link-css_class_postfix"\nhref="https://hh.ru/vacancy/43177885?utm_medium=widgetemployer&utm_campaign=hh.ru_vacancy&utm_source=host_placeholder&utm_term=path_placeholder"\ntarget="_blank"\ndata-qa="title">\n\u0412\u0435\u0434\u0443\u0449\u0438\u0439 backend-\u0440\u0430\u0437\u0440\u0430\u0431\u043e\u0442\u0447\u0438\u043a/\u0442\u0435\u0445\u043b\u0438\u0434\n</a>\n<span class="hh-vacancy__description-css_class_postfix" data-qa="description">\n\n\u043e\u0442 100000 \u0440\u0443\u0431.,\n\n\n\u0422\u043e\u043b\u044c\u044f\u0442\u0442\u0438\n\n\n</span>\n</div>\n\n</div>\n\n\n<div class="hh-logo-wrapper-css_class_postfix">\n<a href="https://hh.ru/search/vacancy/advanced?utm_medium=widgetemployer&amp;utm_campaign=hh.ru_logo&amp;utm_source=host_placeholder&amp;utm_term=path_placeholder"\nclass="hh-logo-css_class_postfix hh-logo-css_class_postfix_hh-ru"\ntarget="_blank"\ndata-qa="logo">\n</a>\n</div>\n</div>\n'
.replace(/css_class_postfix/g, postfix)
.replace(/host_placeholder/g, encodeURIComponent(hostname))
.replace(/path_placeholder/g, encodeURIComponent(pathname));
script.parentNode.insertBefore(div.firstChild, script.nextSibling);
var style = document.createElement('style');
head.appendChild(style);
var css = '.hh-widget-css_class_postfix,\n.hh-widget-css_class_postfix:hover,\n.hh-widget-css_class_postfix:first-child,\n.hh-header-css_class_postfix,\n.hh-header-css_class_postfix:hover,\n.hh-header-css_class_postfix:first-child,\n.hh-vacancies-css_class_postfix,\n.hh-vacancies-css_class_postfix:hover,\n.hh-vacancies-css_class_postfix:first-child,\n.hh-vacancy-css_class_postfix,\n.hh-vacancy-css_class_postfix:hover,\n.hh-vacancy-css_class_postfix:first-child,\n.hh-vacancy__link-css_class_postfix,\n.hh-vacancy__link-css_class_postfix:visited,\n.hh-vacancy__link-css_class_postfix:active,\n.hh-vacancy__link-css_class_postfix:hover,\n.hh-vacancy__link-css_class_postfix:first-child,\n.hh-vacancy__description-css_class_postfix,\n.hh-vacancy__description-css_class_postfix:hover,\n.hh-vacancy__description-css_class_postfix:first-child,\n.hh-footer-css_class_postfix,\n.hh-footer-css_class_postfix:hover,\n.hh-footer-css_class_postfix:first-child,\n.hh-footer__link-css_class_postfix,\n.hh-footer__link-css_class_postfix:visited,\n.hh-footer__link-css_class_postfix:active,\n.hh-footer__link-css_class_postfix:hover,\n.hh-footer__link-css_class_postfix:first-child,\n.hh-error-link-css_class_postfix,\n.hh-error-link-css_class_postfix:visited,\n.hh-error-link-css_class_postfix:active,\n.hh-error-link-css_class_postfix:hover,\n.hh-error-link-css_class_postfix:first-child,\n.hh-logo-css_class_postfix,\n.hh-logo-css_class_postfix:visited,\n.hh-logo-css_class_postfix:active,\n.hh-logo-css_class_postfix:hover,\n.hh-logo-css_class_postfix:first-child,\n.hh-logo-wrapper,\n.hh-logo-wrapper:hover,\n.hh-logo-wrapper:first-child {\n    font-family: Arial, sans-serif;\n    font-size: 14px;\n    font-weight: normal;\n    text-decoration: none;\n    text-align: left;\n    vertical-align: baseline;\n    line-height: normal;\n    letter-spacing: normal;\n\n    display: block;\n    margin: 0;\n    margin-top: 0;\n    margin-right: 0;\n    margin-bottom: 0;\n    margin-left: 0;\n    padding: 0;\n    padding-top: 0;\n    padding-right: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n    position: relative;\n    overflow: hidden;\n    box-sizing: border-box;\n    width: auto;\n    height: auto;\n    max-width: none;\n    max-height: none;\n    visibility: visible;\n    float: none;\n\n    color: #000;\n    background: #fff;\n    background-color: #fff;\n    border: none;\n    border-color: transparent;\n}\n\n.hh-widget-css_class_postfix:before,\n.hh-widget-css_class_postfix:after,\n.hh-header-css_class_postfix:before,\n.hh-header-css_class_postfix:after,\n.hh-vacancy-css_class_postfix:before,\n.hh-vacancy-css_class_postfix:after,\n.hh-vacancy__link-css_class_postfix:before,\n.hh-vacancy__link-css_class_postfix:after,\n.hh-vacancy__description-css_class_postfix:before,\n.hh-vacancy__description-css_class_postfix:after,\n.hh-footer-css_class_postfix:before,\n.hh-footer-css_class_postfix:after,\n.hh-footer__link-css_class_postfix:before,\n.hh-footer__link-css_class_postfix:after,\n.hh-error-link-css_class_postfix:before,\n.hh-error-link-css_class_postfix:after,\n.hh-logo-css_class_postfix:before,\n.hh-logo-css_class_postfix:after {\n    content: none;\n}\n\n.hh-widget-css_class_postfix,\n.hh-widget-css_class_postfix:hover,\n.hh-widget-css_class_postfix:first-child {\n    min-width: 200px;\n    padding: 15px;\n    border: 1px solid #53606f;\n}\n\n.hh-widget-css_class_postfix_column,\n.hh-widget-css_class_postfix_column:hover,\n.hh-widget-css_class_postfix_column:first-child {\n    max-width: 300px;\n}\n\n.hh-widget_3-css_class_postfix,\n.hh-widget_3-css_class_postfix:hover,\n.hh-widget_3-css_class_postfix:first-child {\n    height: 400px;\n}\n\n.hh-header-css_class_postfix,\n.hh-header-css_class_postfix:hover,\n.hh-header-css_class_postfix:first-child {\n    font-weight: bold;\n    margin: 0 0 10px 0;\n}\n\n    .hh-header-css_class_postfix_empty,\n    .hh-header-css_class_postfix_empty:hover,\n    .hh-header-css_class_postfix_empty:first-child {\n        margin: 0;\n    }\n\n    .hh-widget_3-css_class_postfix .hh-vacancies-css_class_postfix,\n    .hh-widget_3-css_class_postfix .hh-vacancies-css_class_postfix:hover,\n    .hh-widget_3-css_class_postfix .hh-vacancies-css_class_postfix:first-child {\n        overflow: hidden;\n        max-height: 240px;\n        margin-bottom: 10px;\n        position: relative;\n    }\n\n.hh-vacancy-css_class_postfix,\n.hh-vacancy-css_class_postfix:hover,\n.hh-vacancy-css_class_postfix:first-child {\n    margin: 0 0 10px 0;\n}\n\n    .hh-widget_3-css_class_postfix .hh-vacancy-css_class_postfix:last-child {\n        margin-bottom: 0px;\n    }\n\n    .hh-vacancy__link-css_class_postfix,\n    .hh-vacancy__link-css_class_postfix:visited,\n    .hh-vacancy__link-css_class_postfix:active,\n    .hh-vacancy__link-css_class_postfix:hover,\n    .hh-vacancy__link-css_class_postfix:first-child {\n        font-weight: bold;\n        text-overflow: ellipsis;\n        margin-bottom: 2px;\n        color: #53606f;\n    }\n\n        .hh-vacancy__link-css_class_postfix:active,\n        .hh-vacancy__link-css_class_postfix:hover {\n            text-decoration: underline;\n        }\n\n    .hh-vacancy__description-css_class_postfix,\n    .hh-vacancy__description-css_class_postfix:hover,\n    .hh-vacancy__description-css_class_postfix:first-child {\n        font-size: 12px;\n        color: #858585;\n        line-height: 18px;\n    }\n\n.hh-footer-css_class_postfix,\n.hh-footer-css_class_postfix:hover,\n.hh-footer-css_class_postfix:first-child {\n    margin-bottom: 15px;\n    z-index: 100;\n}\n\n    .hh-footer__link-css_class_postfix,\n    .hh-footer__link-css_class_postfix:visited,\n    .hh-footer__link-css_class_postfix:hover,\n    .hh-footer__link-css_class_postfix:first-child {\n        font-size: 12px;\n        color: #858585;\n        text-decoration: underline;\n    }\n\n    .hh-footer__link-css_class_postfix:active,\n    .hh-footer__link-css_class_postfix:hover {\n        color: #303030;\n    }\n\n.hh-error-link-css_class_postfix,\n.hh-error-link-css_class_postfix:visited,\n.hh-error-link-css_class_postfix:active,\n.hh-error-link-css_class_postfix:hover,\n.hh-error-link-css_class_postfix:first-child {\n    font-weight: bold;\n    margin: 0 0 15px 0;\n    color: #53606f;\n}\n\n    .hh-error-link-css_class_postfix:hover {\n        text-decoration: underline;\n    }\n\n.hh-logo-wrapper-css_class_postfix,\n.hh-logo-wrapper-css_class_postfix:hover,\n.hh-logo-wrapper-css_class_postfix:first-child {\n    left: 15px;\n    right: 15px;\n}\n\n.hh-logo-css_class_postfix,\n.hh-logo-css_class_postfix:visited,\n.hh-logo-css_class_postfix:active,\n.hh-logo-css_class_postfix:hover,\n.hh-logo-css_class_postfix:first-child {\n    display: block;\n}\n\n    .hh-logo-css_class_postfix_hh-ru,\n    .hh-logo-css_class_postfix_hh-kz,\n    .hh-logo-css_class_postfix_jobs-day-az,\n    .hh-logo-css_class_postfix_career-ru,\n    .hh-logo-css_class_postfix_headhunter-com-kz,\n    .hh-logo-css_class_postfix_hh-ru:hover,\n    .hh-logo-css_class_postfix_hh-kz:hover,\n    .hh-logo-css_class_postfix_jobs-day-az:hover,\n    .hh-logo-css_class_postfix_career-ru:hover,\n    .hh-logo-css_class_postfix_headhunter-com-kz:hover,\n    .hh-logo-css_class_postfix_hh-ru:first-child,\n    .hh-logo-css_class_postfix_hh-kz:first-child,\n    .hh-logo-css_class_postfix_jobs-day-az:first-child,\n    .hh-logo-css_class_postfix_career-ru:first-child,\n    .hh-logo-css_class_postfix_headhunter-com-kz:first-child {\n        width: 50px;\n        height: 50px;\n        background: url(https://i-api.hh.ru/static/images/hh.png?utm_source=host_placeholder&utm_term=path_placeholder);\n        background-image: url(https://i-api.hh.ru/static/images/hh.svg?utm_source=host_placeholder&utm_term=path_placeholder), none;\n    }\n\n    .hh-logo-css_class_postfix_jobs-tut-by,\n    .hh-logo-css_class_postfix_jobs-tut-by:hover,\n    .hh-logo-css_class_postfix_jobs-tut-by:first-child {\n        width: 100px;\n        height: 37px;\n        background: url(https://i-api.hh.ru/static/images/jobs.tut.by.png?utm_source=host_placeholder&utm_term=path_placeholder);\n        background-image: url(https://i-api.hh.ru/static/images/jobs.tut.by.svg?utm_source=host_placeholder&utm_term=path_placeholder), none;\n    }\n\n    .hh-logo-css_class_postfix_hh-ua,\n    .hh-logo-css_class_postfix_hh-ua:hover,\n    .hh-logo-css_class_postfix_hh-ua:first-child {\n        width: 139px;\n        height: 55px;\n        background: url(https://i-api.hh.ru/static/images/grc.ua.png?utm_source=host_placeholder&utm_term=path_placeholder);\n        background-image: url(https://i-api.hh.ru/static/images/grc.ua.svg?utm_source=host_placeholder&utm_term=path_placeholder), none;\n    }\n\n    .hh-widget_3-css_class_postfix .hh-logo-wrapper-css_class_postfix,\n    .hh-widget_3-css_class_postfix .hh-logo-wrapper-css_class_postfix:visited,\n    .hh-widget_3-css_class_postfix .hh-logo-wrapper-css_class_postfix:active,\n    .hh-widget_3-css_class_postfix .hh-logo-wrapper-css_class_postfix:hover,\n    .hh-widget_3-css_class_postfix .hh-logo-wrapper-css_class_postfix:first-child {\n        position: absolute;\n        bottom: 15px;\n    }\n\n    .hh-widget_3-css_class_postfix .hh-logo-wrapper-css_class_postfix:before {\n        content: "";\n        display: block;\n        position: absolute;\n        top: -70px;\n        width: 100%;\n        height: 20px;\n        background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1));\n    }\n'
.replace(/css_class_postfix/g, postfix)
.replace(/host_placeholder/g, encodeURIComponent(hostname))
.replace(/path_placeholder/g, encodeURIComponent(pathname))
.replace(/;/g, ' !important;');
if (style.styleSheet) {
style.styleSheet.cssText = css;
} else {
style.appendChild(document.createTextNode(css));
}
})();