const images = [
    'https://dq19r96s0yq25.cloudfront.net/files/66d1ddb78c98b10008e43710/3.jpg?width=728',
    'https://dq19r96s0yq25.cloudfront.net/files/66c910b282c870000806fe4f/2408X7364.jpg?width=728',
    'https://dq19r96s0yq25.cloudfront.net/files/669a73e3ab83eb0008e9c899/DesktopBanner.png?width=728',
    'https://dq19r96s0yq25.cloudfront.net/files/66cf2891db23c40008e9dda5/2408x736.jpg?width=728',
    'https://dq19r96s0yq25.cloudfront.net/files/66d1dd928c98b10008e4370e/2.jpg?width=728'
];

let index = 0;

function chengeImages(){
    const imgElement = document.querySelector(".img img");
    index = (index + 1 ) % images.length;
    imgElement.src = images[index]; 
}
setInterval(chengeImages,4000);



ScrollReveal({ 
    distance: '80px',
    duration: 2000,
    deley: 200,
 });

 ScrollReveal().reveal('.social', { origin: 'top' });