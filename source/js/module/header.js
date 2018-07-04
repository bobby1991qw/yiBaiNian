import $ from 'jquery';

const _header = $('header');

_header.find('a').map((index, elem) => {
    console.log(elem)
    $(elem).attr('href', _pageConfig.headerUrlArr[index]);
})


export {}