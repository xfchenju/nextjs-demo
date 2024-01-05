'use client';
import { useEffect } from "react"

export default function WebAudio() {

  useEffect(() => {
    initAudio()
  })

  function initAudio() {
    // 获取<audio>节点
    const audio = document.getElementById('audio') as HTMLMediaElement;

    // const AudioContext = window.AudioContext;

    // const ctx = new AudioContext();

    // const analyser = ctx.createAnalyser();

    // analyser.fftSize = 512;

    // // 通过<audio>节点创建音频源
    // const source = ctx.createMediaElementSource(audio);

    // // 将音频源关联到分析器
    // source.connect(analyser);

    // // 将分析器关联到输出设备（耳机、扬声器）
    // analyser.connect(ctx.destination);

    // audio.play();

    // const bufferLength = analyser.frequencyBinCount;
    // const dataArray = new Uint8Array(bufferLength);

    // const a = analyser.getByteFrequencyData(dataArray);
    // console.log('a', a)
  }

  return (
    <div className="w-full h-full">
      333
      <audio id="audio" src="/audios/audio.mp3" controls></audio>
    </div>
  )
}