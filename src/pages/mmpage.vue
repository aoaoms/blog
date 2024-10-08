<script setup>
import imgUrl from '@/assets/image/class.jpg'
import Konva from 'konva'
import * as shortid from 'shortid'
import axios from 'axios'
import { MsEdgeTTS, OUTPUT_FORMAT } from 'msedge-tts'

import ttsvoice from '@/json/ttsvoices.json'

import { db } from '@/db'
import { ElMessage, ElMessageBox } from 'element-plus'

import { useRouter } from 'vue-router'
import { computed, inject, reactive, ref } from 'vue'

const $kit = inject('kit')
const edgeTts = new MsEdgeTTS()
const activeTab = ref('common')
const book = reactive({
  name: '美国小学学地道口语',
  pages: [
    {
      page: 0,
      buttons: [
        {
          boundingPolygon: [
            { x: 100, y: 100 },
            { x: 200, y: 100 },
            { x: 200, y: 200 },
            { x: 100, y: 200 }
          ],
          width: 30,
          height: 30,
          text: '你好，世界！',
          audio: ''
        }
      ]
    }
  ]
})
const page = reactive({})
// const coordinates = reactive({})
const dialogTitle = ref('')
const dialogVisible = ref(false)
const dialogContent = ref('')

// ipad mini 屏幕大小
const canvasWidth = ref(768)
const canvasHeight = ref(1024)

// 处理中
const loading = ref(false)

// 图片宽
// const imageWidth = ref(460)
// const originalImage = reactive({})
// 宽高比
const ratio = ref()
// 画布引用
const stage = ref()

// 自由框定
const freeSelectRect = ref()
const freeSelectRectInfo = ref('随意拖动位置，确定框定区域.')
const freeSelectRectScaleX = ref()
const freeSelectRectScaleY = ref()
const freeSelectRectEndWidth = ref()
const freeSelectRectEndHeight = ref()
const SetFreeSelectRectInfo = (x, y, transformWidth, transformHeight, width, height) => {
  freeSelectRectInfo.value = `x:${x.toFixed(2)},\ny:${y.toFixed(2)},\ntransformWidth:${transformWidth.toFixed(2)},\ntransformHeight:${transformHeight.toFixed(2)},\nwidth:${width.toFixed(2)},\nheight:${height.toFixed(2)}`
}

// 矩形框定
const SelectRect = ref()
const SelectRectInfo = ref('请框定文本设置按钮')
const SelectRectScaleX = ref()
const SelectRectScaleY = ref()
const SelectRectEndWidth = ref()
const SelectRectEndHeight = ref()
const SetSelectRectInfo = (x, y, transformWidth, transformHeight, width, height) => {
  SelectRectInfo.value = `x:${x.toFixed(2)},\ny:${y.toFixed(2)},\ntransformWidth:${transformWidth.toFixed(2)},\ntransformHeight:${transformHeight.toFixed(2)},\nwidth:${width.toFixed(2)},\nheight:${height.toFixed(2)}`
  getFramedText()
}
const ttsText = ref('')

const getFramedText = () => {
  // 获取框定的文本
  let text = ''
  page.coordinates.readResults[0].lines.forEach((item, index) => {
    // if (index === 0){
    //     console.log((item.boundingPolygon[0].x* ratio.value).toFixed(2), (item.boundingPolygon[0].y* ratio.value).toFixed(2),(item.boundingPolygon[2].x * ratio.value).toFixed(2), (item.boundingPolygon[2].y * ratio.value).toFixed(2))
    //     console.log(SelectRect.value.x().toFixed(2), SelectRect.value.y().toFixed(2),(parseFloat(SelectRect.value.x().toFixed(2)) + parseFloat(SelectRectEndWidth.value) * ratio.value).toFixed(2), (parseFloat(SelectRect.value.y().toFixed(2)) + parseFloat(SelectRectEndHeight.value) * ratio.value *1.2).toFixed(2))
    // }
    if (
      (item.boundingBox[0] * ratio.value).toFixed(2) >= SelectRect.value.x().toFixed(2) &&
      (item.boundingBox[1] * ratio.value).toFixed(2) >= SelectRect.value.y().toFixed(2) &&
      (item.boundingBox[2] * ratio.value).toFixed(2) <=
      (
        parseFloat(SelectRect.value.x().toFixed(2)) + parseFloat(SelectRectEndWidth.value)
      ).toFixed(2) &&
      (item.boundingBox[3] * ratio.value).toFixed(2) >= SelectRect.value.y().toFixed(2) &&
      (item.boundingBox[4] * ratio.value).toFixed(2) <=
      (
        parseFloat(SelectRect.value.x().toFixed(2)) + parseFloat(SelectRectEndWidth.value)
      ).toFixed(2) &&
      (item.boundingBox[5] * ratio.value).toFixed(2) <=
      (
        parseFloat(SelectRect.value.y().toFixed(2)) + parseFloat(SelectRectEndHeight.value)
      ).toFixed(2) &&
      (item.boundingBox[6] * ratio.value).toFixed(2) >= SelectRect.value.x().toFixed(2) &&
      (item.boundingBox[7] * ratio.value).toFixed(2) <=
      (
        parseFloat(SelectRect.value.y().toFixed(2)) + parseFloat(SelectRectEndHeight.value)
      ).toFixed(2)
    ) {
      text += item.text + ' '
    }
  })
  ttsText.value = text.slice(0, -1)
  // console.log(text)
}

// 添加到页面
const addToPage = async () => {
  if (freeSelectRect.value && freeSelectRect.value !== 'undefined') {
    let newContent = {
      boundingPolygon: [
        {
          x: freeSelectRect.value.x().toFixed(2) / ratio.value,
          y: freeSelectRect.value.y().toFixed(2) / ratio.value
        },
        {
          x: (freeSelectRect.value.x() + freeSelectRect.value.width()) / ratio.value,
          y: freeSelectRect.value.y() / ratio.value
        },
        {
          x: (freeSelectRect.value.x() + freeSelectRect.value.width()) / ratio.value,
          y: (freeSelectRect.value.y() + freeSelectRect.value.height()) / ratio.value
        },
        {
          x: freeSelectRect.value.x() / ratio.value,
          y: (freeSelectRect.value.y() + freeSelectRect.value.height()) / ratio.value
        }
      ],
      designWidth: canvasWidth.value,
      designHeight: canvasHeight.value,
      width: freeSelectRectEndWidth.value,
      height: freeSelectRectEndHeight.value,
      text: ttsText.value,
      audio: '',
      audioName: shortid.generate(),
      // 原文本语言
      langfrom: '',
      // 翻译文本语言
      langto: '',
      // 原文本翻译结果
      translateText: '',
      // 原文本翻译后音频结果
      translateAudio: '',
      // 翻译文本翻译后音频文件名
      translateAudioName: shortid.generate()
    }
    page.content.push(newContent)
    // page.image = originalImage
    await savePageData()
    console.log(JSON.stringify(page))
    // dialogTitle.value = '成功'
    // dialogVisible.value = true
    // dialogContent.value = '添加成功'
    ElMessage({
      message: '添加成功',
      type: 'success'
    })
  }

  if (SelectRect.value && SelectRect.value !== 'undefined') {
    let newContent = {
      boundingPolygon: [
        {
          x: SelectRect.value.x().toFixed(2) / ratio.value,
          y: SelectRect.value.y().toFixed(2) / ratio.value
        },
        {
          x: (SelectRect.value.x() + SelectRect.value.width()) / ratio.value,
          y: SelectRect.value.y() / ratio.value
        },
        {
          x: (SelectRect.value.x() + SelectRect.value.width()) / ratio.value,
          y: (SelectRect.value.y() + SelectRect.value.height()) / ratio.value
        },
        {
          x: SelectRect.value.x() / ratio.value,
          y: (SelectRect.value.y() + SelectRect.value.height()) / ratio.value
        }
      ],
      designWidth: canvasWidth.value,
      designHeight: canvasHeight.value,
      width: SelectRectEndWidth.value,
      height: SelectRectEndHeight.value,
      text: ttsText.value,
      audio: '',
      audioName: shortid.generate(),
      // 原文本语言
      langfrom: '',
      // 翻译文本语言
      langto: '',
      // 原文本翻译结果
      translateText: '',
      // 原文本翻译后音频结果
      translateAudio: '',
      // 翻译文本翻译后音频文件名
      translateAudioName: shortid.generate()
    }
    page.content.push(newContent)
    // page.image = originalImage
    await savePageData()
    console.log(JSON.stringify(page))
    // dialogTitle.value = '成功'
    // dialogVisible.value = true
    // dialogContent.value = '添加成功'
    ElMessage({
      message: '添加成功',
      type: 'success'
    })
  }
}
// bing 翻译

// 增强的文字音频数据设置
const enhanceAudioDialogVisible = ref(false)
const enhanceAudioSettingItemIndex = ref(-1)
const enhanceAudioOption = reactive({
  currentVoice: 'zh-CN-XiaoxiaoNeural',
  lang: 'zh-CN',
  volume: 'default',
  speed: 'default',
  pitch: 'default',
  originalTextvoice: 'zh-CN-XiaoxiaoNeural',
  originalTextlang: 'zh-CN',
  originalTextVoiceVolume: 'default',
  originalTextVoiceSpeed: 'default',
  originalTextVoicePitch: 'default',
  translateTextvoice: 'en-US-EmmaMultilingualNeural',
  translateTextlang: 'en-US',
  translateTextVoiceVolume: 'default',
  translateTextVoiceSpeed: 'default',
  translateTextVoicePitch: 'default'
})
const translateOption = reactive({
  langfrom: null,
  langto: 'zh-hans',
  translateText: ''
})
const translateResult = reactive({
  translateText: '',
  langfrom: '',
  langto: ''
})
const enhanceAudioSetting = (index) => {
  enhanceAudioSettingItemIndex.value = index
  // 打开音频设置弹窗
  enhanceAudioDialogVisible.value = true
  translateOption.langfrom = page.content[index].langfrom
  translateOption.langto = page.content[index].langto
  translateResult.translateText = page.content[index].translateText
  translateResult.langfrom = page.content[index].langfrom
  translateResult.langto = page.content[index].langto
}

// 增强的文字 翻译
const translateText = async (index) => {
  if (!page.content[index]) {
    return
  }
  let url = '/bingtranslate'
  axios
    .post(url, {
      text: page.content[index].text,
      from: translateOption.langfrom,
      to: translateOption.langto
    })
    .then((res) => {
      console.log(res)
      if (res.status === 200) {
        translateResult.translateText = res.data.translation
        translateResult.langfrom = res.data.language.from
        translateResult.langto = res.data.language.to
      } else {
        ElMessage({
          message: '翻译失败',
          type: 'error',
          duration: 2000
        })
      }
    })
}

// 增强的文字 更新翻译内容
const updateTranslateText = () => {
  page.content[enhanceAudioSettingItemIndex.value].translateText = translateResult.translateText
  page.content[enhanceAudioSettingItemIndex.value].langfrom = translateResult.langfrom
  page.content[enhanceAudioSettingItemIndex.value].langto = translateResult.langto?? 'zh-hans'

  console.log(page.content[enhanceAudioSettingItemIndex.value])
}

// 增强的文字音频数据内容生成 original translate both
const enhanceAudioContentCreate = async (type) => {
  if (!page.content[enhanceAudioSettingItemIndex.value]) {
    return
  }
  // 生成文字 音频base64
  let text = page.content[enhanceAudioSettingItemIndex.value].text
  let translateText = page.content[enhanceAudioSettingItemIndex.value].translateText

  // 未设置音频选项
  if (type === 'original' && enhanceAudioOption.originalTextvoice === '') {
    ElMessage.warning('请设置语音播报选项！')
    return
  }
  if (type === 'translate' && enhanceAudioOption.translateTextvoice === '') {
    ElMessage.warning('请设置翻译语音播报选项！')
    return
  }
  if (type === 'both' && (enhanceAudioOption.originalTextvoice === '' || enhanceAudioOption.translateTextvoice === '')) {
    ElMessage.warning('请设置所有语音播报选项！')
    return
  }

  if (type === 'original' && text === '') return
  if (type === 'translate' &&  translateText === '') return
  if (type === 'both' && (text === '' || translateText === '')) return
  // 原文本音频合成
  let originalTextAudioPromise = (type === 'original' || type === 'both') ? new Promise(async (resolve, reject) => {
    try {
      
      let edgeTtsTemp = new MsEdgeTTS()
      await edgeTtsTemp.setMetadata(
        enhanceAudioOption.originalTextvoice,
        OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
      )
      let options = {
        volume: enhanceAudioOption.originalTextVoiceVolume,
        rate: enhanceAudioOption.originalTextVoiceSpeed,
        pitch: enhanceAudioOption.originalTextVoicePitch
      }
      let readable = edgeTtsTemp.toStream(text, options)
      let audioUnit8Array = new Uint8Array()
      readable.on('data', (data) => {
        audioUnit8Array = new Uint8Array([...audioUnit8Array, ...data])
      })

      readable.on('end', () => {
        let originalTextBase64 = base64js.fromByteArray(audioUnit8Array)
        page.content[enhanceAudioSettingItemIndex.value].audio =
          'data:audio/mp3;base64,' + originalTextBase64
        resolve()
      })
      readable.on('closed', () => {
        console.log('STREAM CLOSED')
        resolve()
      })
    } catch (error) {
      console.log(error)
      reject('error')
    }
  }) : null
  // 翻译文本音频合成
  let translateTextAudioPromise = (type === 'translate' || type === 'both') ? new Promise(async (resolve, reject) => {
    try {      
      let edgeTtsTemp = new MsEdgeTTS()
      await edgeTtsTemp.setMetadata(
        enhanceAudioOption.translateTextvoice,
        OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
      )
      let options = {
        volume: enhanceAudioOption.translateTextVoiceVolume,
        rate: enhanceAudioOption.translateTextVoiceSpeed,
        pitch: enhanceAudioOption.translateTextVoicePitch
      }
      let readable = edgeTtsTemp.toStream(translateText, options)
      let audioUnit8Array = new Uint8Array()
      readable.on('data', (data) => {
        audioUnit8Array = new Uint8Array([...audioUnit8Array, ...data])
      })

      readable.on('end', () => {
        let translateTextBase64 = base64js.fromByteArray(audioUnit8Array)
        page.content[enhanceAudioSettingItemIndex.value].translateAudio =
          'data:audio/mp3;base64,' + translateTextBase64
        resolve()
      })
      readable.on('closed', () => {
        console.log('STREAM CLOSED')
        resolve()
      })
    } catch (error) {
      console.log(error)
      ElMessage({
        message: '增强的文字音频生成失败！',
        type: 'error',
        duration: 3000
      })
      reject('error')
    }
  }) : null

  // 等待音频合成完成
  await Promise.all([originalTextAudioPromise, translateTextAudioPromise])
  // 保存到本地
  await savePageData()
  console.log(
    '-------------enhanceAudioContentCreate-',
    page.content[enhanceAudioSettingItemIndex.value]
  )
  // 弹窗提示
  ElMessage({
    message: `增强的文字音频数据设置成功-${type}`,
    type: 'success'
  })
}

// 音频设置
const processDialogVisible = ref(false)
const isProcessing = ref(false)
const audioSettingDialogVisible = ref(false)
const filterVoiceKey = ref('zh-CN')
const audioOption = reactive({
  name: '',
  lang: '',
  speed: 'default',
  pitch: 'default',
  volume: 'default',
  currentVoice: 'zh-CN-XiaoxiaoNeural',
  voices: [],
  text: '你好，今天天气不错哦。'
})

// 在线语音合成
const OnlineSpeechSynthesis = () => {
  // 如果不是EDGE浏览器 则不支持在线语音合成
  // console.log(navigator.userAgent)
  if (navigator.userAgent.indexOf('Edg') === -1) {
    ElMessageBox.alert('非edge浏览器仅支持部分角色的在线音频合成，推荐使用Edge浏览器！', '提示', {
      confirmButtonText: '确定',
      callback: () => {
        console.log('close')
      }
    })
    // return
  }
  audioSettingDialogVisible.value = true
}

// 增强的在线语音合成
const enhanceOnlineSpeechSynthesis = () => {
  audioSettingDialogVisible.value = false
  enhanceAudioDialogVisible.value = true
}

// 获取支持的音频需要异步 获取浏览器支持的tts voices 仅EDGE浏览器支持
const allVoicesObtained = new Promise(function (resolve, reject) {
  let voices = window.speechSynthesis.getVoices()
  if (voices.length !== 0) {
    resolve(voices)
  } else {
    window.speechSynthesis.addEventListener('voiceschanged', function () {
      voices = window.speechSynthesis.getVoices()
      resolve(voices)
    })
  }
})
// 设置音频配置
const settingAudioConfig = async () => {
  if (typeof speechSynthesis === 'undefined') {
    return
  }
  // 获取edge voices 可用音频 并设置到audioOption
  let voices = allVoicesObtained.then((voices) => {
    audioOption.voices = voices
    console.log(audioOption.voices.filter((voice) => voice.lang === 'en-US'))
    // return voices
    // console.log(voices)
  })
  setTimeout(() => {
    console.log(voices)
  }, 500)
}

// 播放音频
const playAudio = async (text) => {
  if (audioOption.currentVoice === '' || text === '') {
    return
  }
  //"zh-CN-XiaoxiaoNeural"
  await edgeTts.setMetadata(audioOption.currentVoice, OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3)
  let options = {
    volume: audioOption.volume,
    rate: audioOption.speed,
    pitch: audioOption.pitch
  }
  const readable = edgeTts.toStream(text, options)
  //

  let audioUnit8Array = new Uint8Array()
  readable.on('data', (data) => {
    // console.log("DATA RECEIVED", data, data.length);
    // raw audio file data
    audioUnit8Array = new Uint8Array([...audioUnit8Array, ...data])
    // console.log('audioUnit8Array ----',audioUnit8Array.length);
  })

  readable.on('end', () => {
    // unit8array 转 base64
    let originalBase64 = base64js.fromByteArray(audioUnit8Array)

    // console.log("STREAM END",tttt, audioUnit8Array.length);
    let audio = document.getElementById('idaudio')
    audio.src = 'data:audio/mp3;base64,' + originalBase64
    audio.play()
  })
  readable.on('closed', () => {
    console.log('STREAM CLOSED')
  })
}

// 音频文档生成 统一格式设置 生成所有音频
const audioContentCreate = async () => {
  if (page.content.length === 0) {
    return
  }
  processDialogVisible.value = true
  try {
    let primiseAll = []
    isProcessing.value = true
    for (let i = 0; i < page.content.length; i++) {
      let text = page.content[i].text
      // 如果以及存在音频 则不再合成
      if (page.content[i].audio && page.content[i].audio.length > 0) {
        continue
      }
      primiseAll.push(
        new Promise(async (resolve, reject) => {
          try {
            let edgeTtsTemp = new MsEdgeTTS()
            await edgeTtsTemp.setMetadata(
              audioOption.currentVoice,
              OUTPUT_FORMAT.AUDIO_24KHZ_48KBITRATE_MONO_MP3
            )
            let options = {
              volume: audioOption.volume,
              rate: audioOption.speed,
              pitch: audioOption.pitch
            }
            let readable = edgeTtsTemp.toStream(text, options)
            let audioUnit8Array = new Uint8Array()
            readable.on('data', (data) => {
              audioUnit8Array = new Uint8Array([...audioUnit8Array, ...data])
            })

            readable.on('end', () => {
              let originalBase64 = base64js.fromByteArray(audioUnit8Array)
              page.content[i].audio = 'data:audio/mp3;base64,' + originalBase64
              resolve()
            })
            readable.on('closed', () => {
              console.log('STREAM CLOSED')
              resolve()
            })
            resolve()
          } catch (error) {
            console.log(error)
            reject('error')
          }
        })
      )
    }
    Promise.all(primiseAll).then(async (resolve, reject) => {
      isProcessing.value = false
      if (resolve) {
        ElMessage({
          message: '音频文档生成成功',
          type: 'success'
        })
        await savePageData()
      } else {
        ElMessage({
          message: '音频文档生成失败',
          type: 'error' + reject.message
        })
      }
    })
  } catch (error) {
    console.log(error)
    isProcessing.value = false
    ElMessage({
      message: '音频文档生成失败' + error,
      type: 'error'
    })
  }
}

// 下载音频
const downloadAudio = async (text) => {
  if (
    typeof speechSynthesis === 'undefined' ||
    text === '' ||
    navigator.mediaDevices === undefined
  ) {
    return
  }
}

// 保存音频配置
const saveAudioConfig = () => {
  // console.log(audioOption)
  // 保存音频配置
  // 保存到本地存储
  localStorage.setItem('audioOption', JSON.stringify(audioOption))
  // 关闭音频设置弹窗
  audioSettingDialogVisible.value = false
}

// 查看page数据
const viewPageData = () => {
  console.log(JSON.stringify(page))
}

const moveBody = ref(false)
const cursorClass = computed(() => {
  return moveBody ? 'cursor-grab' : 'cursor-default'
})

const imgt = new Image()
const imgtW = ref(0)
const imgtH = ref(0)
// imgt.width = 400
// imgt.height = 600
imgt.src = imgUrl

// 载入图片
const loadImage = () => {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = 'image/*'
  input.onchange = (e) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      imgt.src = reader.result
      imgt.onload = () => {
        imgtW.value = imgt.width
        imgtH.value = imgt.height
        page.image.width = imgt.width
        page.image.height = imgt.height
        page.image.canvasWimageWRatio = canvasWidth.value / imgt.width
        page.image.base64 = reader.result
        ratio.value = canvasWidth.value / imgt.width

        buildCanvas()
        ElMessageBox({
          title: '提示',
          message: '图片已加载完成，请获取图片文本分析结果',
          type: 'info',
          confirmButtonText: '确定'
          // callback: () => {
          //     // 显示图片文本分析
          //     ocrAnalyzeImage()
          // }
        })
      }
    }
  }
  input.click()
}

// 初始化一个自由框定器
const initFreeSelectRect = () => {
  console.log('initFreeSelectRect', freeSelectRect.value)
  // 如果存在选择器 则退出
  if (freeSelectRect.value) {
    return
  }
  // 画选择器
  freeSelectRect.value = new Konva.Rect({
    x: 100,
    y: 100,
    width: 100,
    height: 100,
    fill: 'transparent',
    stroke: 'black',
    strokeWidth: 1,
    draggable: true
  })

  let tr = new Konva.Transformer({
    resizeEnabled: true,
    rotateEnabled: false
  })
  tr.nodes([freeSelectRect.value])
  tr.on('transform', function (e) {
    // console.log('------------transform----------------', e, e.target.attrs.height * e.target.attrs.scaleY)
    freeSelectRectScaleX.value = e.target.attrs.scaleX
    freeSelectRectScaleY.value = e.target.attrs.scaleY
    freeSelectRectEndWidth.value = e.target.attrs.width * e.target.attrs.scaleX
    freeSelectRectEndHeight.value = e.target.attrs.height * e.target.attrs.scaleY
    SetFreeSelectRectInfo(
      freeSelectRect.value.x(),
      freeSelectRect.value.y(),
      freeSelectRect.value.width() * e.target.attrs.scaleX,
      freeSelectRect.value.height() * e.target.attrs.scaleY,
      freeSelectRect.value.width(),
      freeSelectRect.value.height()
    )
  })
  tr.on('dragmove', function (e) {
    SetFreeSelectRectInfo(
      freeSelectRect.value.x(),
      freeSelectRect.value.y(),
      freeSelectRect.value.width() * e.target.attrs.scaleX,
      freeSelectRect.value.height() * e.target.attrs.scaleY,
      freeSelectRect.value.width(),
      freeSelectRect.value.height()
    )
  })

  stage.value.getLayers()[0].add(tr)
  stage.value.getLayers()[0].add(freeSelectRect.value)
  stage.value.draw()
}

// 构建画布对象
const buildCanvas = () => {
  if (stage.value) {
    stage.value.destroy()
  }
  // 图片加载完成后设置图片的位置  这里等一会儿才会设置，不然图片还没加载完就设置位置会报错或不显示图片
  setTimeout(() => {
    stage.value = new Konva.Stage({
      container: 'idcanvas',
      width: screen.availWidth - 20,
      height: screen.availHeight,
      // width: canvasWidth.value,
      // height: canvasHeight.value,
      draggable: true
    })
    stage.value.add(new Konva.Layer())
    const layer = stage.value.getLayers()[0]
    const drawedImage = new Konva.Image({
      image: imgt,
      x: 0,
      y: 0,
      // width:  imgt.width,
      // height: imgt.height,
      scaleX: canvasWidth.value / imgt.width,
      scaleY: canvasWidth.value / imgt.width,
      draggable: false
    })
    layer.add(drawedImage)
  }, 500)
}

async function initPageData() {
  // db.delete('page')
  const count = await db.page.count()
  if (count === 0) {
    // 初始化page数据
    let newPage = {
      content: '[]',
      image: '{}',
      coordinates: '{}'
    }
    const id = await db.page.add(newPage)
    console.log('page data---------', id)
    return db.page.get(id)
  } else {
    // 从本地存储获取音频配置
    return await db.page.toCollection().last()
  }
}

async function savePageData() {
  console.log('save page data', page)
  // 保存page数据到本地存储
  await db.page.update(page.id, {
    content: JSON.stringify(page.content),
    image: JSON.stringify(page.image),
    coordinates: JSON.stringify(page.coordinates)
  })
  console.log('save page data success')
}

// 清空设计语音
const clearAllAudio = async () => {
  page.content.forEach((item) => {
    item.audio = '',
      item.translateAudio = ''
  })

  ElMessage({
    message: '清空成功',
    type: 'success'
  })
  // localStorage.setItem('page', JSON.stringify(page))
  await savePageData()
}

// 清空设计项目
async function resetPageData() {
  page.content = []
  page.coordinates = {}
  await db.page.clear()
}

onMounted(() => {
  // 从db初始化page数据
  initPageData().then((data) => {
    page.id = data.id
    page.content = JSON.parse(data.content)
    page.image = JSON.parse(data.image)
    page.coordinates = JSON.parse(data.coordinates)
    console.log('init page data success', JSON.parse(data.content))

    if (page.image.base64 && page.image.base64.length > 0) {
      imgt.src = page.image.base64
      imgt.onload = () => {
        // imgtW.value = imgt.width
        // imgtH.value = imgt.height
        // originalImage.width = imgt.width
        // originalImage.height = imgt.height
        // originalImage.canvasWimageWRatio = canvasWidth.value / imgt.width
        ratio.value = page.image.canvasWimageWRatio
        buildCanvas()
      }
    }
  })

  initConfig()

  // initOcrSetting()

  // 获取edge voices 可用音频 并设置到audioOption
  settingAudioConfig().then(() => { })
})

// 框定文本框
const drawRectTextOutlines = () => {

  // 询问是否清空画布
  if (stage.value.getLayers()[0].find('Rect').length > 0) {
    alert('已存在的框定，暂无法操作。如果需要重载，请更换图片。')
    return

    // console.log('getTransform ----------', stage.value.getLayers()[0].find('Transformer'))

    // // stage.value.getLayers()[0].find('Shape').forEach((item) => {
    // //   item.destroy()
    // // })

    // // 清空画布内的所有 rect
    // stage.value.getLayers()[0].find('Rect').forEach((item) => {
    //   // stage.value.getLayers()[0].des
    //   item.destroy()
    // })
    // stage.value.draw()
    // return
  }

  // 重新画框
  if (page.coordinates) {
    try {
      page.coordinates.readResults[0].lines.forEach((item) => {
        // 使用azure version 4
        // let rectItem = new Konva.Rect({    // 矩形
        //     x: item.boundingPolygon[0].x * ratio.value,
        //     y: item.boundingPolygon[0].y * ratio.value,
        //     width: (item.boundingPolygon[1].x - item.boundingPolygon[0].x) * ratio.value,
        //     height: (item.boundingPolygon[3].y - item.boundingPolygon[0].y) * ratio.value * 1.2,
        //     fill: 'transparent',
        //     stroke: 'red',
        //     strokeWidth: 1,
        //     draggable: false,
        // })
        // 使用 azure rest api version 3.2
        console.log(
          'item.boundingBox',
          item.boundingBox[0] * ratio.value,
          item.boundingBox[1] * ratio.value,
          (item.boundingBox[3] - item.boundingBox[0]) * ratio.value,
          (item.boundingBox[5] - item.boundingBox[1]) * ratio.value * 1.2
        )
        let rectItem = new Konva.Rect({
          // 矩形
          x: item.boundingBox[0] * ratio.value,
          y: item.boundingBox[1] * ratio.value,
          width: (item.boundingBox[2] - item.boundingBox[0]) * ratio.value,
          height: (item.boundingBox[5] - item.boundingBox[1]) * ratio.value,
          fill: 'transparent',
          stroke: 'red',
          strokeWidth: 1,
          draggable: false
        })
        stage.value.getLayers()[0].add(rectItem)
        stage.value.draw()
      })

      // 画选择器
      SelectRect.value = new Konva.Rect({
        x: 100,
        y: 100,
        width: 100,
        height: 100,
        fill: 'transparent',
        stroke: 'black',
        strokeWidth: 1,
        draggable: true
      })

      let tr = new Konva.Transformer({
        resizeEnabled: true,
        rotateEnabled: false
      })
      tr.nodes([SelectRect.value])
      tr.on('transform', function (e) {
        // console.log('------------transform----------------', e, e.target.attrs.height * e.target.attrs.scaleY)
        SelectRectScaleX.value = e.target.attrs.scaleX
        SelectRectScaleY.value = e.target.attrs.scaleY
        SelectRectEndWidth.value = e.target.attrs.width * e.target.attrs.scaleX
        SelectRectEndHeight.value = e.target.attrs.height * e.target.attrs.scaleY
        SetSelectRectInfo(
          SelectRect.value.x(),
          SelectRect.value.y(),
          SelectRect.value.width() * e.target.attrs.scaleX,
          SelectRect.value.height() * e.target.attrs.scaleY,
          SelectRect.value.width(),
          SelectRect.value.height()
        )
      })
      tr.on('dragmove', function (e) {
        SetSelectRectInfo(
          SelectRect.value.x(),
          SelectRect.value.y(),
          SelectRect.value.width() * e.target.attrs.scaleX,
          SelectRect.value.height() * e.target.attrs.scaleY,
          SelectRect.value.width(),
          SelectRect.value.height()
        )
      })

      stage.value.getLayers()[0].add(tr)
      stage.value.getLayers()[0].add(SelectRect.value)
      stage.value.draw()
    } catch (error) {
      dialogTitle.value = '错误'
      dialogVisible.value = true
      dialogContent.value = error.message
    }
  }
}

const router = useRouter()
// 预览页面
const previewPage = async () => {
  if (page.content.length === 0) return
  // 保存到本地存储
  // localStorage.setItem('page', JSON.stringify(page))
  await savePageData()

  let routeData = router.resolve({
    path: '/preview-mmpage'
  })
  window.open(routeData.href, '_blank')
}

const activeIndex = ref(-1)
// 移出活动项目
const removeItemFromPage = async (index) => {
  page.content.splice(index, 1)
  activeIndex.value = -1
  // localStorage.setItem('page', JSON.stringify(page))
  await savePageData()
  ElMessage({
    message: '删除成功',
    type: 'success'
  })
}

// 编辑活动项目音频
const audioEditDialogVisible = ref(false)
// 上传本地音频
const uploadItemAudio = (index) => {
  // 选择音频文件
  let input = document.createElement('input')
  input.type = 'file'
  input.accept = 'audio/*'
  input.onchange = (e) => {
    let file = e.target.files[0]
    let reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = async () => {
      page.content[index].audio = reader.result
      // 如果设置了保持原有音频文件名 则删除原有音频文件名
      if (config.common.keepOriFileNameAudioIfExist) {
        page.content[index].audioName = file.name
      }
      // localStorage.setItem('page', JSON.stringify(page))
      await savePageData()
      // ElMessage({
      //     message: '保存成功',
      //     type:'success'
      // })
      // 播放音频
      let audio = new Audio(page.content[index].audio)
      audio.play()
    }
  }
  input.click()
}

const playItemAudio = (index) => {
  // 如果音频为空 则询问是否本地上传音频
  if (page && page.content[index].audio === '') {
    window.confirm('当前项目没有音频，是否上传本地音频？') ? uploadItemAudio(index) : null
  } else {
    // 顺序播放音频 和 翻译音频
    let audio = new Audio(page.content[index].audio)
    audio.play()
    audio.addEventListener('ended', () => {
      // 如果翻译音频存在 则播放翻译音频
      if (page.content[index].translateText !== '' && page.content[index].translateAudio !== '') {
        let audio2 = new Audio(page.content[index].translateAudio)
        audio2.play()
      }
    })
  }
}

// 下载json数据
const downloadPage = () => {
  if (page.content.length === 0) {
    return
  }
  // let a = document.createElement('a')
  // a.href = URL.createObjectURL(new Blob([JSON.stringify(page)], { type: 'text/plain' }))
  // a.download = 'page.json'
  // a.click()
  // URL.revokeObjectURL(a.href)
  // a.remove()
  $kit.downloadDesignPage(page)
}

const showConfig = ref(false)
const config = reactive({
  common: {
    keepOriFileNameAudioIfExist: false
  },
  ocr: {
    servicefrom: 'azure',
    azure: {
      endpoint: '',
      key: '',
      region: '',
      ocrUrl: ''
    },
    baidu: {
      apiKey: '',
      secretKey: '',
      ocrUrl: ''
    },
    tencent: {
      secretId: '',
      secretKey: '',
      ocrUrl: ''
    }
  }
})
// ocr 服务配置
// const ocrSettingDialogVisible = ref(false)
const ocr = reactive({
  servicefrom: 'azure',
  azure: {
    endpoint: '',
    key: '',
    region: '',
    ocrUrl: ''
  },
  baidu: {
    apiKey: '',
    secretKey: '',
    ocrUrl: ''
  },
  tencent: {
    secretId: '',
    secretKey: '',
    ocrUrl: ''
  }
})

const initConfig = () => {
  if (localStorage.getItem('config')) {
    config.common = JSON.parse(localStorage.getItem('config')).common
    config.ocr = JSON.parse(localStorage.getItem('config')).ocr
    ocr.servicefrom = config.ocr.servicefrom
    ocr.azure = config.ocr.azure
    ocr.baidu = config.ocr.baidu
    ocr.tencent = config.ocr.tencent
  }
}
const saveConfig = () => {
  localStorage.setItem('config', JSON.stringify(config))
  showConfig.value = false
  ElMessage({
    message: '保存成功',
    type: 'success'
  })
}

// const initOcrSetting = () => {
//   if (localStorage.getItem('ocr')) {
//     ocr.servicefrom = JSON.parse(localStorage.getItem('ocr')).servicefrom
//     ocr.azure = JSON.parse(localStorage.getItem('ocr')).azure
//     ocr.baidu = JSON.parse(localStorage.getItem('ocr')).baidu
//     ocr.tencent = JSON.parse(localStorage.getItem('ocr')).tencent
//   }
// }
// const saveOcrSetting = () => {
//   localStorage.setItem('ocr', JSON.stringify(ocr))
//   // ocrSettingDialogVisible.value = false
//   showConfig.value = false
//   ElMessage({
//     message: '保存成功',
//     type: 'success'
//   })
// }

// orc 识别 使用axios请求
const ocrAnalyzeImage = () => {
  if (imgt.src === '') {
    ElMessage({
      message: '请先载入图片',
      type: 'error'
    })
    return
  }
  /**
   *Base64字符串转二进制
   */
  function dataURLtoBlob(dataurl) {
    var arr = dataurl.split(','),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n)
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n)
    }
    return new Blob([u8arr], {
      type: mime
    })
  }
  console.log('ocrAnalyzeImage', ocr)
  if (ocr.servicefrom === 'azure') {
    if (ocr.azure.endpoint === '' || ocr.azure.key === '') {
      ElMessage({
        message: '请先配置Azure OCR服务',
        type: 'error'
      })
      return
    }


    // let form = new FormData()
    // form.append('file', imgt)
    // let form = imgt.src
    // let form = new Blob([imgt], { type: 'image/jpeg' })
    let form = dataURLtoBlob(imgt.src)
    // let url = `https://${ocr.azure.endpoint}/vision/v3.2/read/analyze`
    let url = import.meta.env.PROD ? ocr.azure.endpoint + 'vision/v3.2/read/analyze' : '/azure1'
    let headers = {
      'Ocp-Apim-Subscription-Key': ocr.azure.key,
      'Content-Type': 'image/jpeg'
    }

    loading.value = true
    axios
      .post(url, form, { headers: headers })
      .then((res) => {
        console.log('ocrAnalyzeImage res.data', res.data)
        let OperationLocation = res.headers['operation-location']
        let operationId = OperationLocation.substring(OperationLocation.lastIndexOf('/') + 1)
        let url2 = import.meta.env.PROD
          ? ocr.azure.endpoint + 'vision/v3.2/read/analyzeResults/' + operationId
          : '/azure2' + `${operationId}`
        let timer = setInterval(() => {
          let header2 = {
            'Ocp-Apim-Subscription-Key': ocr.azure.key
          }
          axios.get(url2, { headers: header2 }).then((res) => {
            if (res.data.status === 'succeeded') {
              clearInterval(timer)
              console.log(
                'ocrAnalyzeImage res.data.recognitionResult.lines',
                res.data.analyzeResult
              )
              page.coordinates = res.data.analyzeResult
              drawRectTextOutlines()
              savePageData()
              loading.value = false
            } else if (res.data.status === 'failed') {
              clearInterval(timer)
              console.log('ocrAnalyzeImage res.data.status', res.data.status)
              ElMessageBox({
                message: 'Azure OCR服务获取文字识别结果失败',
                type: 'error'
              })
              loading.value = false
            }
          }).catch((err) => {
            console.log(err)
            clearInterval(timer)
            ElMessageBox({
              message: 'Azure OCR服务请求失败' + err.message,
              type: 'error'
            })
            loading.value = false
          })
        }, 1500)
        // loading.value = false
      })
      .catch((err) => {
        console.log(err)
        loading.value = false
        ElMessageBox({
          message: 'Azure OCR服务请求失败' + err.message,
          type: 'error'
        })
      })
  }
}

// 活动的框定信息
const ActiveSelectRectInfo = computed(() => {
  return freeSelectRect.value ? freeSelectRectInfo.value : SelectRectInfo.value
})
</script>

<route lang="yaml">
meta:
  layout: blank
</route>

<style scoped>
.cursor-default {
  cursor: default;
}

.cursor-grab {
  cursor: grab;
}

.cursor-grabbing {
  cursor: -webkit-grabbing;
  cursor: grabbing;
}

:root {
  --el-fill-color-light: #e3e3e3fc;
}

.scrollbar-demo-item {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50px;
  margin: 10px;
  text-align: center;
  border-radius: 4px;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>

<style>
.el-card__header {
  padding: 5px !important;
}

.el-card__body {
  padding: 2px !important;
}
</style>

<template>
  <div v-loading="loading">
    <audio id="idaudio" controls src="" class="visually-hidden"></audio>
    <div class="z-3 position-fixed d-flex justify-content-center align-items-center" style="bottom: 50px; right: 60px">
      <el-tooltip class="box-item" effect="light" content="<span>所有数据仅存储在本地。<br/>客户端仅用于设计和接口数据转发服务。</span>"
        placement="top" raw-content>
        <el-icon size="45x45" color="#999">
          <InfoFilled />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="position-fixed top-0 start-0 w-auto bg-body d-flex justify-content-center align-items-center p-4 z-3">
      aoaoms 多媒体音频图片制作工具
    </div>
    <div
      class="position-fixed top-0 start-50 translate-middle-x bg-body mt-3 align-center d-flex justify-content-center align-items-center z-3">
      <div class="shadow-sm border py-3 rounded-pill px-3">
        <!-- <button type="button" class="btn btn-info">载入图片</button>
        <button type="button" class="btn btn-info" @click="startCrop">开始裁剪</button>
        <button type="button" class="btn btn-info" @click="saveCrop">保存裁剪</button>
        <button type="button" class="btn btn-info">载入图片</button>
        <button type="button" class="btn btn-info" @click="moveBody = !moveBody">
            {{ moveBody ? '停止拖动' : '开始拖动'}}
        </button> -->
        <!-- <el-button type="info" plain @click="moveBody = !moveBody">{{ moveBody ? '停止拖动' : '开始拖动'}}</el-button> -->
        <el-tooltip class="box-item" effect="light" content="载入图片" placement="bottom">
          <el-button icon="DocumentAdd" class="p-2" type="" siz="large" text @click="loadImage"></el-button>
        </el-tooltip>

        <el-tooltip class="box-item" effect="light" content="初始化自由框定器" placement="bottom">
          <el-button icon="Crop" class="p-2" type="" siz="large" text @click="initFreeSelectRect"></el-button>
        </el-tooltip>

        <el-tooltip class="box-item" effect="light" content="OCR识别" placement="bottom">
          <el-button icon="DataAnalysis" class="p-2" type="" siz="large" text @click="ocrAnalyzeImage"></el-button>
        </el-tooltip>
        <el-tooltip class="box-item" effect="light" content="框定文本参考线" placement="bottom">
          <el-button icon="FullScreen" class="p-2" type="" siz="large" text @click="drawRectTextOutlines"></el-button>
        </el-tooltip>

        <span class="mx-3 d-inline-block" style="font-size: 14px; color: #999">图片：{{ imgtW }} x {{ imgtH }}</span>
        <span class="d-inline-block" style="font-size: 14px; color: #999">画布宽高比：3:4</span>

        <!-- <el-badge value="语音合成" class="item">
          <el-button icon="Medal" class="p-2 mx-2" type="" siz="large"
          @click="enhanceOnlineSpeechSynthesis"></el-button>
        </el-badge> -->
      </div>
    </div>
    <!-- <div class="d-flex justify-content-center align-items-end" style="height: 30px">
  </div> -->
    <div class="d-flex justify-content-center align-items-center">
      <div id="idcanvas" class="" :class="cursorClass"></div>
    </div>
    <div class="z-3 position-fixed start-0 ms-3" style="height: 90px"></div>

    <div class="z-3 position-fixed start-0 ms-3" style="top: 75px">
      <el-card style="width: 300px" class="">
        <template #header>
          <div class="card-header d-flex justify-content-around align-items-center">
            <el-tooltip class="box-item" effect="light" content="添加框定" placement="top">
              <el-button icon="Plus" class="p-2" type="" siz="large" text @click="addToPage"></el-button>
            </el-tooltip>

            <el-tooltip class="box-item" effect="light" content="预览设计" placement="top">
              <el-button icon="View" class="p-2" type="" siz="large" text @click="previewPage"></el-button>
            </el-tooltip>

            <el-tooltip class="box-item" effect="light" content="下载设计" placement="top">
              <el-button icon="Download" class="p-2" type="" siz="large" text @click="downloadPage"></el-button>
            </el-tooltip>

            <el-tooltip class="box-item" effect="light" content="清空设计项" placement="top">
              <el-button icon="Brush" class="p-2" type="" siz="large" text @click="resetPageData"></el-button>
            </el-tooltip>

            <el-tooltip class="box-item" effect="light" content="清空所有音频" placement="top">
              <el-button icon="Mute" class="p-2" type="" siz="large" text @click="clearAllAudio"></el-button>
            </el-tooltip>

            <el-tooltip class="box-item" effect="light" content="设置" placement="top">
              <el-button icon="Setting" class="p-2" type="" siz="large" text @click="showConfig = true"></el-button>
            </el-tooltip>
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                <el-icon class="el-icon--right">
                  <More />
                </el-icon>
              </span>
              <template #dropdown>
                <el-dropdown-menu class="p-1 d-flex flex-column justify-content-start align-items-center">
                  <el-tooltip class="box-item" effect="light" content="online语音合成" placement="right">
                    <el-button icon="Operation" class="p-2" type="" siz="large" text
                      @click="OnlineSpeechSynthesis"></el-button>
                  </el-tooltip>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>
        </template>

        <div class="overflow-auto px-0 pb-2 w-100" style="height: 40vh">
          <div v-for="(item, index) in page.content" :key="index" class="w-100 position-relative d-flex justify-content-start align-items-start"
            :class="[enhanceAudioSettingItemIndex === index ? 'border border-primary' : '']">
            <el-button icon="VideoPlay" class="p-2"
              :type="item.audio === '' || item.translateAudio === '' ? 'warning' : 'success'" siz="large" text
              @click="playItemAudio(index)"></el-button>
            <div class="d-flex flex-column justify-content-start align-items-start w-100">
              <el-text class="d-inline-block w-100" truncated style="max-width: 250px;">
                <span class="btn m-0 p-0" @click="enhanceAudioSetting(index)">{{
                  item.text
                }}</span>
              </el-text>
              <el-text v-if="item.translateText !== ''" class="d-inline-block w-100" style="max-width: 250px;" truncated>
                <span class="btn m-0 p-0" style="font-size: 14px;">
                  {{ item.translateText }}</span>
              </el-text>
            </div>
            <el-popconfirm confirm-button-text="确定" cancel-button-text="取消" icon="Warning" icon-color="red"
              title="确定删除?" @confirm="removeItemFromPage(index)">
              <template #reference>
                <div class="end-0 position-absolute" :class="[index === activeIndex ? 'opacity-100' : 'opacity-0']"
                  @mouseover="activeIndex = index" @mouseout="activeIndex = -1">
                  <el-button icon="Close" class="p-2" type="danger" siz="small" text></el-button>
                </div>
              </template>
            </el-popconfirm>
          </div>
        </div>
        <template #footer>
          <el-tabs class="demo-tabs">
            <el-tab-pane label="识别文本">
              <el-input size="small" v-model="ttsText" :rows="5" type="textarea" placeholder="" />
            </el-tab-pane>
            <el-tab-pane label="框定信息">
              <el-input size="small" readonly v-model="ActiveSelectRectInfo" :rows="5" type="textarea" placeholder="" />
            </el-tab-pane>
          </el-tabs>
        </template>
      </el-card>
    </div>

    <!-- confirm dialog -->
    <el-dialog v-model="dialogVisible" :title="dialogTitle" width="800">
      <span>{{ dialogContent }}</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false">知道了</el-button>
        </div>
      </template>
    </el-dialog>

    <!-- enhanceAudioDialogVisible -->
    <el-dialog v-model="enhanceAudioDialogVisible" title="增强音频设置" width="45vw" destroy-on-close center>
      <div class="d-flex flex-column justify-content-around align-content-start">
        <div>
          <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="filterVoiceKey" class="ml-4">
              <el-radio value="zh-CN" size="large">zh-CN</el-radio>
              <el-radio value="en-US" size="large">en-US</el-radio>
              <el-radio value="en-GB" size="large">en-GB</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="d-flex justify-content-between align-content-start w-100">
          <el-scrollbar height="35vh" class="col-7">
            <!-- <p v-for="item in audioOption.voices.filter(item => item.lang.includes(filterVoiceKey))"
                        :key="item.name" class="btn scrollbar-demo-item text-start"
                        @click="audioOption.currentVoice = item.name;audioOption.lang = item.lang;">{{ item.name }}</p> -->
            <p v-for="(item, index) in ttsvoice.filter((item) => item.locale.includes(filterVoiceKey))" :key="index"
              class="btn scrollbar-demo-item text-start" @click="
                enhanceAudioOption.currentVoice = item.voice;
              enhanceAudioOption.lang = item.locale;
              ">
              {{ item.alias }}
              <span class="ms-2">{{ item.name }}</span>
              <span v-if="item.gender === 'Female'" class="ms-2">女士</span>
              <span v-else-if="item.gender === 'Male'" class="ms-2">男士</span>
              <span v-else-if="item.gender === 'Female,Child'" class="ms-2">女童</span>
              <span v-else-if="item.gender === 'Male,Child'" class="ms-2">男童</span>
            </p>
          </el-scrollbar>
          <div class="text-start col-4 me-2">
            <span class="mt-3">Voicer</span>
            <el-input disabled v-model="enhanceAudioOption.currentVoice" class="w-100" placeholder="Please input" />
            <div style="height: 20px"></div>
            <span class="mt-2">速度</span>
            <el-select v-model="enhanceAudioOption.speed" placeholder="Select">
              <el-option v-for="item in [
                { label: '默认', value: 'default' },
                { label: '超快', value: 'x-fast' },
                { label: '快速', value: 'fast' },
                { label: '中等', value: 'medium' },
                { label: '慢速', value: 'slow' },
                { label: '超慢', value: 'x-slow' }
              ]" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <!-- <el-slider v-model="audioOption.speed" :min="0.5" :max="2" :step="0.1"></el-slider> -->
            <br /><span>音调</span>
            <el-select v-model="enhanceAudioOption.pitch" placeholder="Select" class="my-2">
              <el-option v-for="item in [
                { label: '默认', value: 'default' },
                { label: '超高', value: 'x-high' },
                { label: '高', value: 'high' },
                { label: '中等', value: 'medium' },
                { label: '底', value: 'low' },
                { label: '超低', value: 'x-low' }
              ]" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <!-- <el-slider v-model="audioOption.pitch" :min="0.1" :max="1" :step="0.1"></el-slider> -->
            <br /><span>音量</span>
            <el-select v-model="enhanceAudioOption.volume" placeholder="Select">
              <el-option v-for="item in [
                { label: '默认', value: 'default' },
                { label: '大声', value: 'loud' },
                { label: '平静', value: 'silent' },
                { label: '中等', value: 'medium' },
                { label: '温柔', value: 'soft' },
                { label: '聒噪', value: 'x-loud' },
                { label: '细语', value: 'x-soft' }
              ]" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
          </div>
        </div>
        <div class="my-2 d-flex justify-content-end align-content-center">
          <el-button type="primary" @click="
            enhanceAudioOption.originalTextvoice = enhanceAudioOption.currentVoice;
          enhanceAudioOption.originalTextlang = enhanceAudioOption.lang;
          enhanceAudioOption.originalTextVoiceSpeed = enhanceAudioOption.speed;
          enhanceAudioOption.originalTextVoicePitch = enhanceAudioOption.pitch;
          enhanceAudioOption.originalTextVoiceVolume = enhanceAudioOption.volume;
          ">设置源音频播报</el-button>
          <el-button type="primary" @click="
            enhanceAudioOption.translateTextvoice = enhanceAudioOption.currentVoice;
          enhanceAudioOption.translateTextlang = enhanceAudioOption.lang;
          enhanceAudioOption.translateTextVoiceSpeed = enhanceAudioOption.speed;
          enhanceAudioOption.translateTextVoicePitch = enhanceAudioOption.pitch;
          enhanceAudioOption.translateTextVoiceVolume = enhanceAudioOption.volume;
          ">设置翻译音频播报</el-button>
        </div>
        <!-- 翻译设置 -->
        <div class="mt-2 d-flex justify-content-between align-content-center">
          <span class="">翻译目标语言</span>
          <el-select class="mx-2" v-model="translateOption.langto" placeholder="Select" style="width: 90px">
            <el-option v-for="item in ['en', 'zh-hans']" :key="item" :label="item" :value="item" />
          </el-select>

          <!-- <el-input v-model="translateOption.from" placeholder="源语言"></el-input> -->
          <!-- <el-input v-model="translateOption.to" placeholder="目标语言"></el-input> -->
          <el-button disabled type="primary" @click="translateText(enhanceAudioSettingItemIndex)">翻译</el-button>
          <el-input size="small" class="mx-1" v-model="translateResult.translateText" :rows="3" type="textarea"
            placeholder="" style="width: 35%" />
          <el-button type="primary" @click="updateTranslateText">更新翻译</el-button>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer d-flex justify-content-end">
          <el-button @click="enhanceAudioContentCreate('original')">生成源音频</el-button>
          <el-button @click="enhanceAudioContentCreate('translate')">生成翻译音频</el-button>
          <el-button @click="enhanceAudioContentCreate('both')">同时生成音频</el-button>
          <el-button @click="enhanceAudioDialogVisible = false; enhanceAudioSettingItemIndex = -1;">关闭</el-button>
        </div>
      </template>
    </el-dialog>

    <el-dialog v-model="audioSettingDialogVisible" title="批量设置音频" width="45vw" destroy-on-close center>
      <div class="d-flex flex-column justify-content-around align-content-start">
        <div>
          <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="filterVoiceKey" class="ml-4">
              <el-radio value="zh-CN" size="large">zh-CN</el-radio>
              <el-radio value="en-US" size="large">en-US</el-radio>
              <el-radio value="en-GB" size="large">en-GB</el-radio>
            </el-radio-group>
          </div>
        </div>
        <div class="d-flex justify-content-between align-content-start w-100">
          <el-scrollbar height="50vh" class="col-7">
            <!-- <p v-for="item in audioOption.voices.filter(item => item.lang.includes(filterVoiceKey))"
                        :key="item.name" class="btn scrollbar-demo-item text-start"
                        @click="audioOption.currentVoice = item.name;audioOption.lang = item.lang;">{{ item.name }}</p> -->
            <p v-for="(item, index) in ttsvoice.filter((item) => item.locale.includes(filterVoiceKey))" :key="index"
              class="btn scrollbar-demo-item text-start" @click="
                audioOption.currentVoice = item.voice;
              audioOption.lang = item.locale;
              ">
              {{ item.alias }}
              <span class="ms-2">{{ item.name }}</span>
              <span v-if="item.gender === 'Female'" class="ms-2">女士</span>
              <span v-else-if="item.gender === 'Male'" class="ms-2">男士</span>
              <span v-else-if="item.gender === 'Female,Child'" class="ms-2">女童</span>
              <span v-else-if="item.gender === 'Male,Child'" class="ms-2">男童</span>
            </p>
          </el-scrollbar>
          <div class="text-start col-4 me-2">
            <span class="mt-3">Voicer</span>
            <el-input disabled v-model="audioOption.currentVoice" class="w-100" placeholder="Please input" />
            <!-- <el-text class="w-100 d-block" truncated>
                        {{ audioOption.currentVoice ?? '当前未设置音频' }}
                    </el-text> -->
            <div style="height: 20px"></div>
            <span class="mt-3">速度</span>
            <el-select v-model="audioOption.speed" placeholder="Select" class="mt-1">
              <el-option v-for="item in [
                { label: '默认', value: 'default' },
                { label: '超快', value: 'x-fast' },
                { label: '快速', value: 'fast' },
                { label: '中等', value: 'medium' },
                { label: '慢速', value: 'slow' },
                { label: '超慢', value: 'x-slow' }
              ]" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <!-- <el-slider v-model="audioOption.speed" :min="0.5" :max="2" :step="0.1"></el-slider> -->
            <br /><span>音调</span>
            <el-select v-model="audioOption.pitch" placeholder="Select" class="my-1">
              <el-option v-for="item in [
                { label: '默认', value: 'default' },
                { label: '超高', value: 'x-high' },
                { label: '高', value: 'high' },
                { label: '中等', value: 'medium' },
                { label: '底', value: 'low' },
                { label: '超低', value: 'x-low' }
              ]" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <!-- <el-slider v-model="audioOption.pitch" :min="0.1" :max="1" :step="0.1"></el-slider> -->
            <br /><span>音量</span>
            <el-select v-model="audioOption.volume" placeholder="Select" class="mt-1">
              <el-option v-for="item in [
                { label: '默认', value: 'default' },
                { label: '大声', value: 'loud' },
                { label: '平静', value: 'silent' },
                { label: '中等', value: 'medium' },
                { label: '温柔', value: 'soft' },
                { label: '聒噪', value: 'x-loud' },
                { label: '细语', value: 'x-soft' }
              ]" :key="item.value" :label="item.label" :value="item.value" />
            </el-select>
            <!-- <el-slider v-model="audioOption.volume" :min="20" :max="100" :step="10"></el-slider> -->
            <el-input size="small" class="my-3" v-model="audioOption.text" :rows="3" type="textarea"
              placeholder="注意:输入文本必须与播音选项的语言类型一致。" />
            <el-button type="primary" @click="playAudio(audioOption.text)">播放测试</el-button>
            <!-- <el-button type="primary" @click="downloadAudio(audioOption.text)">Download Audio</el-button> -->
            <!-- <el-link class="ms-5" href="https://www.text-to-speech.cn/" target="_blank">文本转语音在线</el-link>                     -->
          </div>
        </div>
      </div>
      <template #footer>
        <div class="dialog-footer d-flex justify-content-end">
          <!-- <el-button @click="settingAudioConfig">load voices</el-button> -->
          <el-button @click="audioContentCreate">处理当前设计</el-button>
          <el-button @click="audioSettingDialogVisible = false">取消</el-button>
          <el-button type="primary" @click="audioSettingDialogVisible = false"> 确定 </el-button>
        </div>
      </template>
    </el-dialog>

    <!-- 设置对话框 -->
    <el-dialog v-model="showConfig" title="设置" width="35vw" center>
      <div class="d-flex flex-column justify-content-around align-content-start p-2">
        <el-tabs v-model="activeTab" class="demo-tabs">
          <el-tab-pane label="通用" name="common" class="p-2">
            <span class="me-2">保持音频原文件名</span> <el-switch v-model="config.common.keepOriFileNameAudioIfExist"
              size="large" />
          </el-tab-pane>
          <el-tab-pane label="OCR service" name="OCR" class="p-2">
            <el-collapse accordion>
              <el-collapse-item title="azureOCR" name="1">
                <el-input class="mt-3" v-model="ocr.azure.endpoint" style="width: 340px"
                  placeholder="Please input azure endpoint" clearable type="password" show-password />
                <div style="height: 20px"></div>
                <el-input v-model="ocr.azure.key" style="width: 340px" placeholder="Please input azure key" clearable
                  type="password" show-password />
              </el-collapse-item>
              <el-collapse-item title="paddleOCR" name="2">
                <div>
                  暂不支持
                </div>
              </el-collapse-item>

            </el-collapse>
          </el-tab-pane>
        </el-tabs>
      </div>
      <template #footer>
        <div class="dialog-footer">
          <div class="d-flex justify-content-end">
            <el-button @click="showConfig = false">取消</el-button>
            <el-button type="primary" @click="saveConfig"> 保存 </el-button>
          </div>
        </div>
      </template>
    </el-dialog>

    <!-- process dialog -->
    <el-dialog v-model="processDialogVisible" title="事务处理" width="420px" :show-close="false"
      :close-on-click-modal="false" :close-on-press-escape="false">
      <div class="d-flex justify-content-start align-content-center my-3">
        <el-icon color="red" class="is-loading me-2" v-show="isProcessing">
          <Loading />
        </el-icon>
        <span v-if="isProcessing">正在处理，请稍候...</span>
        <span v-else>处理完成，请查看结果</span>
      </div>
      <span>设计项音频请求较多时，将耗费更多时间，请耐心等待。</span>
      <template #footer>
        <div class="dialog-footer">
          <el-button :disabled="isProcessing" @click="processDialogVisible = false">关闭</el-button>
          <el-button :disabled="isProcessing" type="primary" @click="processDialogVisible = false">
            确定
          </el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>
