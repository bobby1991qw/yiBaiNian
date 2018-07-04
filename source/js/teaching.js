import './module/Dvideo';

var videoWrap = document.getElementById('testVideo')
var video = new Dvideo ({
    ele: '#testVideo',
    title: 'TL',
    width: '1200px',
    height: '80%',
    src: 'http://pc.v.k.360kan.com/vod-xinxiliu-tv-q2-bj/45966782_054f58375-b8ea-4e15-917b-c92b29853932.mp4?time=1530711721&sign=a34dc8f1b248f3387bd261af00d0ac53&from=pc_from_3149478344',
    autoplay: false
})