<script setup>
import UnityWebgl from 'unity-webgl'
import VueUnity from 'unity-webgl/vue'

const unityContext = new UnityWebgl({
  loaderUrl: './Build/Build.loader.js',
  dataUrl: './Build/Build.data.br',
  frameworkUrl: './Build/Build.framework.js.br',
  codeUrl: './Build/Build.wasm.br',
})

unityContext.on('device', () => alert('click device...'))
</script>

<template>
  <VueUnity :unity="unityContext" width="1920" height="1080" />
</template>