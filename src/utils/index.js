import { saveAs } from 'file-saver'
import JSZip from 'jszip'

// base64字符串转blob
function dataURItoBlob(dataURI) {
    var byteString = atob(dataURI.split(',')[1]);
    var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
    var ab = new ArrayBuffer(byteString.length);
    var ia = new Uint8Array(ab);
    for (var i = 0; i < byteString.length; i++) {
        ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: mimeString });
}

function downloadDesignPage(page) {
    console.log('下载设计页面', page)
    // 实例化一个zip
    let zip = new JSZip()
    let pageF = zip.folder('/')
    pageF.file('image.jpg', dataURItoBlob(page.image.base64))
    let json = {}
    json.content = []
    json.image = {}
    // 音频文件
    page.content.forEach(item => {
        if (item.audio !== '') {
            // 如果文件名有后缀 则直接保存 否则加上后缀 mp3
            if (item.audioName.indexOf('.') !== -1) {
                pageF.file(item.audioName, dataURItoBlob(item.audio))
            } else {            
                pageF.file(item.audioName + '.mp3', dataURItoBlob(item.audio))
            }
        }
        if (item.translateAudio !== '') {
            pageF.file(item.translateAudioName + '.mp3', dataURItoBlob(item.translateAudio))
        }
        json.content.push({
            text: item.text,
            translateText: item.translateText,
            audioName: item.audioName,
            translateAudioName: item.translateAudioName,
            boundingPolygon: item.boundingPolygon,
            width: item.width,
            height: item.height,
            designWidth: item.designWidth,
        })
    })
    json.image = {
        width: page.image.width,
        height: page.image.height
    }
    pageF.file('page.json', JSON.stringify(json))

    // 文件添加zip完成 执行导出zip
    zip.generateAsync({ type: "blob" }).then(function (content) {
        if (page.name){
            saveAs(content, page.name?? 'page' + "_" + new Date().toLocaleString() + ".zip");
        } else {
            saveAs(content, "aoaoms_design_mmpage_" + new Date().toLocaleString() + ".zip");
        }
    })
}

const kit = {
    dataURItoBlob, downloadDesignPage
}

export default kit