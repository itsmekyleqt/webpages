function menuClick(menuItem){
    alert(`You Clicked on ${menuItem}`);
}
const banner = document.querySelector( '.banner');
const images = [
    'url("image1.png")',
    'url("image2.png")',
    'url("image3.png")'
];
let index  = 0;
function changeBannerImage() {
    banner.style.backgroundImage =images[index];
    index = (index + 1) % images.length;

}
setInterval(changeBannerImage,  3000);
changeBannerImage();








