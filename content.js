
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log('>>>>HITLER');
  }
);

/*
chrome.runtime.onMessage.addListener(handler);

function handler(request, sender, sendResponse) {
  console.log("Maqueando la web");
  debugger;  
  const mode = request.mode || 'chiquito de la calzada';
  const chiquitos = await fetch(`https://api.alejandrodiego.com/google/rest/pics/?token=21786cd9fea89c97b479ef1ab04bf426&search=${mode}`).then(resp => resp.json());
  let last_known_scroll_position = 0;
  let imagesLeft = 0;
  let images;

  function loadNext() {      
    if (imagesLeft) {
        const nextImage = images[imagesLeft--];                
        const index = Math.floor((Math.random() * chiquitos.data.length));            
        ponBienLaFoto(index, nextImage);                
    }
  }


  function ponBienLaFoto(index, image) {        
    console.log(`CHANGING ${imagesLeft} : ${image && image.alt?image.alt:'noAlt'} >>> ${image.src}`);
    image.onload = loadNext;
    image.src = chiquitos.data[index].image;
    image.srcset = '';
  }

  function ponMeGuapo() {                
    if (imagesLeft) {
      console.log(`${images.length} a mejorar...`);                 
      ponBienLaFoto(0, images[0]);        
    }
  }

  setInterval(function() {
    images = document.querySelectorAll('img:not([src^="https://encrypted-tbn0.gstatic.com"])');
    imagesLeft = images.length ? images.length - 1 : 0;
    if (imagesLeft) {
        ticking = false;
        window.requestAnimationFrame(function() {
          ponMeGuapo();       
        });
      }
  }, 1000);

  ponMeGuapo();
  sendResponse({success: true});
}
*/