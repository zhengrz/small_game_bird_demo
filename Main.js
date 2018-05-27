import { ResourceLoader } from "./js/base/ResourceLoader.js";
import { Director } from "./js/Director.js";
import { BackGround } from "./js/runtime/BackGround.js";
import { Land } from './js/runtime/Land.js';
import { DataStore } from "./js/base/DataStore.js";
import { Birds } from "./js/player/Birds.js";
import { StartButton } from "./js/player/StartButton.js";
import { Score } from "./js/player/Score.js";
import { ApiExamples } from "./js/ApiExamples.js";

// 初始化整个游戏的精灵,作为游戏开始的入口
export class Main {
  constructor() {
    this.canvas = wx.createCanvas()
    // document.getElementById('game_canvas')
    this.ctx = this.canvas.getContext('2d')
    this.dataStore = DataStore.getInstance();
    this.director = Director.getInstance();
    const loader = ResourceLoader.create();
    loader.onLoaded(map => this.onResourceFirstLoaded(map))
  }

  createBackgrounMusic() {
    const bgm = wx.createInnerAudioContext()
    bgm.autoplay = true
    bgm.loop = true
    bgm.src = 'audios/bgm.mp3'
    return bgm;
  }

  onResourceFirstLoaded(map) {
    this.dataStore.canvas = this.canvas;
    this.dataStore.ctx = this.ctx;
    this.dataStore.res = map;
    // ApiExamples.getUserInfo()
    // ApiExamples.login();
    // ApiExamples.getSetting()
    // ApiExamples.httpExample();
    // ApiExamples.socketExample();
    this.init();
  }

  init() {
    this.director.isGameOver = false;
    this.dataStore
      .put('pencils', [])
      .put('background', BackGround)
      .put('land', Land)
      .put('birds', Birds)
      .put('startButton', StartButton)
      .put('score', Score)
    // .put('bgm', this.createBackgrounMusic());
    this.registerEvent();
    // 创建铅笔要在游戏逻辑运行之前
    this.director.createPencil();
    this.director.run();
  }

  registerEvent() {
    // this.canvas.addEventListener('touchstart', e => {
    //   // 屏蔽掉js事件冒泡
    //   e.preventDefault();
    //   if(this.director.isGameOver) {
    //     this.init();
    //   } else {
    //     this.director.birdEvent();
    //   }
    // })

    wx.onTouchStart(() => {
      if (this.director.isGameOver) {
        this.init();
      } else {
        this.director.birdEvent();
      }
    });


  }


}
