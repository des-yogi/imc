document.documentElement.className = document.documentElement.className.replace('no-js', 'js');
function cth(c) {document.documentElement.classList.add(c)}
'ontouchstart' in window?cth('touch'):cth('no-touch');
if(typeof InstallTrigger!=='undefined')cth('firefox');
if(/constructor/i.test(window.HTMLElement)||(function(p){return p.toString()==="[object SafariRemoteNotification]"})(!window['safari']||(typeof safari!=='undefined'&&safari.pushNotification)))cth('safari');
if(/*@cc_on!@*/false||!!document.documentMode)cth('ie');
if(!(/*@cc_on!@*/false||!!document.documentMode)&&!!window.StyleMedia)cth('edge');
if(!!window.chrome&&(!!window.chrome.webstore||!!window.chrome.runtime))cth('chrome');
if(~navigator.appVersion.indexOf("Win"))cth('windows');
if(~navigator.appVersion.indexOf("Mac"))cth('osx');
if(~navigator.appVersion.indexOf("Linux"))cth('linux');

(function(){
  // Поддержка формата webp для background-img
  // 1. Проверяем, можно ли использовать Webp формат
  function canUseWebp() {
    // Создаем элемент canvas
    let elem = document.createElement('canvas');
    // Приводим элемент к булеву типу
    if (!!(elem.getContext && elem.getContext('2d'))) {
        // Создаем изображение в формате webp, возвращаем индекс искомого элемента и сразу же проверяем его
        return elem.toDataURL('image/webp').indexOf('data:image/webp') == 0;
    }
    // Иначе Webp не используем
    return false;
  }
  // 2. Заменв формата изображений
  window.onload = function () {
    // Получаем все элементы с дата-атрибутом data-bg
    let images = document.querySelectorAll('[data-bg]');
    // Проходимся по каждому
    for (let i = 0; i < images.length; i++) {
      // Получаем значение каждого дата-атрибута
      let image = images[i].getAttribute('data-bg');
      // Каждому найденному элементу задаем свойство background-image с изображение формата jpg
      images[i].style.backgroundImage = 'url(' + image + ')';
    }
    // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
    let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
    let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;
    // Если есть поддержка Webp или браузер Firefox версии больше или равно 65
    if (canUseWebp() || firefoxVer >= 65) {
      // Делаем все то же самое что и для jpg, но уже для изображений формата Webp
      let imagesWebp = document.querySelectorAll('[data-bg-webp]');
      for (let i = 0; i < imagesWebp.length; i++) {
        let imageWebp = imagesWebp[i].getAttribute('data-bg-webp');
        imagesWebp[i].style.backgroundImage = 'url(' + imageWebp + ')';
      }
    }
  };
  // Разметка:
  //<div style="background-image: url('/images/image.webp')" data-bg="/images/image.jpg" data-bg-webp="/images/image.webp"></div>
}());

// Изоляция без jQuery
// (function(){
//   // code
// }());


// $(document).ready(function(){
//   if(window.matchMedia('(min-width: 1366px)').matches){
//   // do functionality on screens bigger than 1366px
//     $("#sticker").sticky({
//       topSpacing: 100
//     });
//   }
//   return false;
// });

/*(function () {
  //const agreementElems = document.querySelectorAll('.contacts__agreement');
  const agreementElems = document.querySelectorAll('[class$="__agreement"]');

  for (let i = 0; i < agreementElems.length; i++) {
    let agreementElem = agreementElems[i];
    if (!agreementElem) return;
    //const submitBtn = agreementElem.querySelector('.contacts__submit');
    const submitBtn = agreementElem.querySelector('button[type=submit]');
    const agreementCheckbox = agreementElem.querySelector('.agreement-field');

    if (agreementCheckbox) {
      agreementCheckbox.addEventListener('change', function (e) {
        if (!e.target.checked) {
          submitBtn.disabled = true;
        } else {
          submitBtn.disabled = false;
        }
      });
    }
  }

})();*/

(function(){
  const aLazyLoad = new LazyLoad({
    elements_selector: ".lazy"
  });
}());

(function(){
  // lazy video

  // selector of all videos on the page
  const videos = document.querySelectorAll('.lazy-video');

  // generate video url
  let generateUrl = function(id) {
    let query = '?rel=0&showinfo=0&autoplay=1';

    return 'https://www.youtube.com/embed/' + id + query;
  };

  // creating iframe
  let createIframe = function(id,title) {
    let iframe = document.createElement('iframe');

    iframe.setAttribute('allowFullScreen', '');
    iframe.setAttribute('allow', 'autoplay; encrypted-media');
    iframe.setAttribute('frameborder', '0');
    iframe.setAttribute('title', title);
    iframe.setAttribute('src', generateUrl(id));

    return iframe;
  };

  const replaceTag = function (el) {
    const elementNew = document.createElement('div');
    elementNew.innerHTML = el.innerHTML;

    Array.prototype.forEach.call( el.attributes, function( attr ) {
        elementNew.setAttribute( attr.name, attr.value );
        elementNew.removeAttribute('href');
        elementNew.removeAttribute('title');
    });

    el.parentNode.insertBefore( elementNew, el );
    el.parentNode.removeChild( el );
    return elementNew;
  };

  // main code
  videos.forEach((el) => {
    let videoCode = el.getAttribute('data-video');

    el.addEventListener('click', (e) => {
      e.preventDefault();

      let title = el.title;
      //console.log(title);
      let iframe = createIframe(videoCode,title);
      el.querySelector('picture').remove();
      el.appendChild(iframe);
      if (el.querySelector('.ytb-btn')) {
        el.querySelector('.ytb-btn').remove();
      }
      replaceTag(el);
    });
  });

}());

(function(){
  Fancybox.bind("[data-fancybox]", {
    // Your custom options if need
  });
}());

(function(){
  var phoneElems = document.getElementsByClassName('phone-mask');
  Array.prototype.forEach.call(phoneElems, function (item) {
    var phoneMask = IMask(
      item, {
        mask: '+{38} (\\000) 000 00 00',
        lazy: false // make placeholder always visible
    });
  });
}());
