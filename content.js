const API_URL_BASE = 'https://api.alejandrodiego.com';
const IMG_SERVICE_PATH = '/miscellaneous/rest/google/images';
const API_TOKEN = '21786cd9fea89c97b479ef1ab04bf426';
const MARK = 'data-biutifered';

window.inload = function() {
  console.log('ESPINETE ONLOAD');
};

chrome.runtime.onMessage.addListener(async function(
  request,
  sender,
  sendResponse
) {
  console.log('Maqueando la web');
  debugger;

  const mode = request.mode || 'chiquito de la calzada';
  const chiquitos = await fetch(
    `${API_URL_BASE}${IMG_SERVICE_PATH}/?token=${API_TOKEN}&search=${mode}`
  ).then(resp => resp.json());

  let last_known_scroll_position = 0;
  let imagesLeft = 0;
  let images;
  let intervalId;

  function loadNext() {
    if (imagesLeft) {
      const nextImage = images[imagesLeft--];
      const index = Math.floor(Math.random() * chiquitos.data.length);
      ponBienLaFoto(index, nextImage);
    }
  }

  function ponBienLaFoto(index, image) {
    console.log(
      `CHANGING ${imagesLeft} : ${
        image && image.alt ? image.alt : 'noAlt'
      } >>> ${image.src}`
    );
    image.onload = loadNext;
    image.setAttribute('srcset', '');
    image.setAttribute('data-src', '');
    image.setAttribute('data-srcset', '');
    image.setAttribute('data-biutifered', true);
    const url = chiquitos.data[index].image.replace('http://', 'https://');
    image.src = url;
  }

  function ponMeGuapo() {
    if (imagesLeft) {
      console.log(`${images.length} a mejorar...`);
      ponBienLaFoto(0, images[0]);
    }
  }

  intervalId = setInterval(function() {
    images = document.querySelectorAll('img:not([data-biutifered="true"])');
    imagesLeft = images.length ? images.length - 1 : 0;
    if (imagesLeft) {
      ticking = false;
      window.requestAnimationFrame(function() {
        ponMeGuapo();
      });
    }
  }, 1000);

  ponMeGuapo();
  sendResponse({ success: true });
});
