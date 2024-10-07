<route lang="yaml">
meta:
    layout: blank
</route>

<script setup>
// import imgUrl from '@/assets/image/class.jpg'
import { db } from '@/db'
import { ElMessageBox } from 'element-plus';

const page = reactive({})

const $kit = inject('kit')
// 画布引用
const stage = ref()

const containerClass = ref('originalContainer')
const imgt = new Image()

async function initPageData() {
    // 从本地存储获取音频配置
    return await db.page.toCollection().last()
}

const btnText = ref()
const loadPage = async () => {
  if (stage.value) {  // 画布已存在，则清空画布
    stage.value.destroy()
    stage.value = null
  }
  imgt.src = ''
  imgt.src = page.image.base64
  if (imgt.src === '') {
    ElMessageBox.alert('当前设计未包含图片，请重新设计')
    return
  }      
  imgt.onload = function () {
        console.log('图片加载完成')
    }
    
    // page.value = JSON.parse(localStorage.getItem('page'))
    // 图片加载完成后设置图片的位置  这里等一会儿才会设置，不然图片还没加载完就设置位置会报错或不显示图片
    setTimeout(() => {
      let w = document.getElementById('idcanvas').offsetWidth
      let h = document.getElementById('idcanvas').offsetHeight
      let scaleW = w / imgt.width
      let scaleH = h / imgt.height
      stage.value = new Konva.Stage({
            container: 'idcanvas',
            width: w,
            height: h,
            draggable: false,
        })
        stage.value.add(new Konva.Layer())
        const layer = stage.value.getLayers()[0]
        const drawedImage = new Konva.Image({
            image: imgt,
            x: 0,
            y: 0,
            // width:  imgt.width, 
            // height: imgt.height,
            scaleX: scaleW,
            scaleY: scaleW,
            draggable: false,
        })
        layer.add(drawedImage)
        stage.value.draw()

        // 循环坐标 画矩形 并添加事件
        page.content.forEach(item => {
            const rect = new Konva.Rect({
                x: item.boundingPolygon[0].x * scaleW,
                y: item.boundingPolygon[0].y * scaleW,
                width:  parseFloat(item.width) * w / item.designWidth,
                height: parseFloat(item.height) * w / item.designWidth,
                fill: 'transparent',
                stroke: 'black',
                strokeWidth: 1,
                draggable: false,
            })
            layer.add(rect)
            rect.on('click', () => {
                btnText.value = item.text + ' ' + item.translateText
                // 播放音频
                const audio = document.getElementById('idaudio')
                audio.src = item.audio
                audio.play()
                audio.onended = () => {
                  if (item.translateAudio && item.translateAudio.length > 0) {
                    let audioT = new Audio(item.translateAudio)
                     audioT.play()
                  }                 
                }
            })
        })

        // // 画文本按钮 并添加事件
        // const textButton = new Konva.Rect({
        //     x: page.content[0].boundingPolygon[0].x * scaleW ,
        //     y: page.content[0].boundingPolygon[0].y * scaleW,
        //     width:  parseFloat(page.content[0].width) * w / page.content[0].designWidth,
        //     height: parseFloat(page.content[0].height) * w / page.content[0].designWidth,
        //     fill: 'transparent',
        //     stroke: 'black',
        //     strokeWidth: 1,
        //     draggable: false,
        // })
        // layer.add(textButton)
        // textButton.on('click', () => {
        //     btnText.value = page.content[0].text
        //     // 播放音频
        //     const audio = document.getElementById('idaudio')
        //     audio.src = page.content[0].audio
        //     audio.play()
        // })
    }, 1000);  
}
onMounted(() => {
    // 从db初始化page数据
  initPageData().then(data => {
    page.content = JSON.parse(data.content)
    page.image = JSON.parse(data.image)
    page.coordinates = JSON.parse(data.coordinates)
  })
})

watch(containerClass, (newValue, oldValue) => {
  loadPage()
  btnText.value = '请点击框定的文本区域播放音频'
})


// 下载设计页面
const downloadDesignPage = () => {
  $kit.downloadDesignPage(page)
}
</script>

<style scoped>
.originalContainer {
  width: 768px;
  height: 1024px;
  position: relative;
} 
.container23{
  width: 45vw;
  height: 67.5vw;
}
.container34 {
  width: 45vw;
  height: 60vw;
}

.container58 {
  width: 45vw;
  height: 72vw;
}
.container57 {
  width: 40vw;
  height: 63vw;
}

</style>

<template>
  <audio id="idaudio" class=" invisible"></audio>
  <div class="d-flex justify-content-center align-items-center" style="height: 60px;">
    <el-button type="primary" @click="loadPage" class="me-5">加载页面</el-button>
    <el-radio-group v-model="containerClass">
      <el-radio :value="'originalContainer'">设计时尺寸</el-radio>
      <el-radio :value="'container23'">宽高比2:3</el-radio>
      <el-radio :value="'container34'">宽高比3:4</el-radio>
      <el-radio :value="'container58'">宽高比5:8</el-radio>
      <el-radio :value="'container57'">宽高比5:7</el-radio>
    </el-radio-group>
  </div>
  <div class="d-flex justify-content-center align-items-center mb-3">
    <el-button type="primary" @click="downloadDesignPage" class="me-5">下载设计</el-button>
    <el-row class="ms-3 d-inline-block text-center" style="color: #999; font-size: 14px;">
      <el-text truncated>{{ btnText?? '请点击框定的文本区域播放音频' }}</el-text>
    </el-row>
  </div>
  
  <div class="d-flex justify-content-center align-items-center w-100">
    <div id="idcanvas" :class="containerClass" >
    </div>
  </div>
  <div class="" style="height: 120px;"> </div>
</template>
