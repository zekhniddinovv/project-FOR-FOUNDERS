'use strict'

const body = document.querySelector('body');
body.style.cssText = ' margin: 0px;padding: 0px;box-sizing: border-box;background-color: #FEFBF1;';

const container = document.querySelectorAll('.container');
container.forEach (item => {
    item.style.cssText = 'width: 1056px;margin: 0 auto;'
});

const menu = document.querySelector('.menu');
menu.style.cssText = 'width: 100%;height: 61px;'

const navbar = document.querySelector('.navbar');
navbar.style.cssText = 'display: flex;flex-direction: column;gap: 120px;'

const items = document.querySelector('.items');
items.style.cssText = 'display: flex;flex-direction: row;padding: 20px 0;gap: 40px;justify-content: center;'

const item = document.querySelectorAll('.item');
item.forEach(itemValue => {
    itemValue.style.cssText = 'list-style: none;'
})


const itema = items.querySelectorAll('a');
itema.forEach(itemaElement => {
    itemaElement.style.cssText = 'color: #703412;font-family:sans-serif;font-size: 14px;font-style: normal;font-weight: 400;line-height: 21px;text-decoration: none;width: 36px;'
});

const title = document.querySelector('.title');
title.style.cssText = 'height: 572px;flex-shrink: 0;display: flex;flex-direction: column;gap: 21px;'

const navbarH6 = navbar.querySelector('h6');
navbarH6.style.cssText = 'color: #703412;font-family:sans-serif;font-size: 11px;font-style: normal;font-weight: 400;line-height: 44px;letter-spacing: 1.6px;text-transform: uppercase;'

const navbarH1 = navbar.querySelector('h1');
navbarH1.style.cssText = ' width: 848px;color: #703412;font-family:sans-serif; font-size: 80px;font-style: normal;font-weight: 400;line-height: 88px;'

const section = document.querySelector('section');
const mainsech4 = section.querySelector('h4');
mainsech4.style.cssText = 'width: 571px;color: #703412;font-family:sans-serif;font-size: 32px;font-style: normal;font-weight: 400;line-height: 41.6px;'

const images1 = section.querySelectorAll('.images1');
images1.forEach(imageValue => {
    imageValue.style.cssText = ' padding-top: 194px;display: flex;justify-content: space-between;'
})


// const imageRow = section.querySelector('.image-row');
// imageRow.style.cssText = 'gap: 32px;'

const image1 = section.querySelectorAll('.image1');
image1.forEach(imgValue => {
    imgValue.style.cssText = 'transform: translateX(-20px);'
})


const imageImg = section.querySelectorAll('img');
imageImg.forEach(value => {
    value.style.cssText = 'width: 312px;height: 310px;'
});

const imageTxt = section.querySelectorAll('h3');
imageTxt.forEach(quantity => {
    quantity.style.cssText = 'width: 283px;color: #703412;font-family:sans-serif; font-size: 24px;font-style: normal;font-weight: 400;line-height: 28.8px;'
});

const imageTxtSpan = section.querySelectorAll('span');
imageTxtSpan.forEach(spanValue => {
    spanValue.style.cssText = 'width: 88px;color: rgba(112, 52, 18, 0.72);font-family:sans-serif; font-size: 12px;font-style: normal;font-weight: 400;line-height: 18px;letter-spacing: 1.6px;text-transform: uppercase;'
});

const footer = document.querySelector('footer');
footer.style.background = '#084935';

const footMain = footer.querySelector('.footer-main');
footMain.style.padding = '4rem';

const footTitle = footer.querySelector('h4');
footTitle.style.cssText = 'color: #FFF;font-size: 12px;font-style: normal;letter-spacing: 1.6px;text-transform: uppercase;'

const footTitle2 = footer.querySelectorAll('h2');
footTitle2.forEach(footValue => {
    footValue.style.cssText = ' color: #FFF;font-family: Roboto;font-size: 30px;font-style: normal;font-weight: 400;line-height: 38.4px;'
});

const footLink = footer.querySelector('.footer-link');
footLink.style.cssText = 'padding-top: 40px;display: flex;justify-content: space-between;margin-bottom: 50px;'

const linksUl = footer.querySelectorAll('ul');
linksUl.forEach(linkValue => {
    linkValue.style.listStyle = 'none';
});

const footLi = footer.querySelectorAll('li');
footLi.forEach(liValue => {
    liValue.style.paddingTop = '8px'
});

const linkA = footer.querySelectorAll('a');
linkA.forEach(aVAlue => {
    aVAlue.style.cssText = 'text-decoration: none;color: rgba(255, 255, 255, 0.72);font-family: Roboto;font-size: 16px;font-style: normal;font-weight: 400;'
});

const footBottom = footer.querySelector('h3');
footBottom.style.cssText = 'padding-top: 20px;border-top: 1px solid;color: white;font-size: 16px;font-style: normal;font-weight: 400;line-height: 24px;'