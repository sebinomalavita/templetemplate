<template>
    <div
      class="panel-container"
      :style="{ width: panelWidth, height: panelHeight + 'px' }"
      :class="transition ? 'transition' : ''"
    >
      <div
        ref="topBarElement"
        @mousedown="startResize"
        class="topBar"
        :style="{ bottom: panelHeight + 'px' }"
      ></div>
      <div
        ref="panelElement"
        class="scroll-container"
        :style="{ width: panelWidth, height: panelHeight - 1 + 'px', overflow: 'scroll' }"
      >
        <slot />
      </div>
    </div>
  </template>
  
  <script setup lang="ts" name="resizePanel">
  import { ref, onMounted, watch, nextTick } from 'vue'
  const props = defineProps({
    widthChangeable: {
      type: Boolean,
      default: false
    },
    heightChangeable: {
      type: Boolean,
      default: true
    },
    defaultWidth: {
      type: String,
      default: '100%'
    },
    defaultHeight: {
      type: Number,
      default: 200
    }
  })
  
  const emits = defineEmits(['update:defaultHeight'])
  
  const panelWidth = ref(props.defaultWidth)
  const panelHeight = ref(props.defaultHeight)
  
  const transition = ref(false)
  
  watch(
    () => props.defaultHeight,
    (newVal, oldVal) => {
      console.log('change', newVal)
      transition.value = true
      // let delta = Math.abs(newVal - oldVal)
      // const deltaSlice = delta / numFrame
      // while(delta !== 0){
      // 	setTimeout(()=>{
      // 		panelHeight.value = newVal > oldVal ? panelHeight.value + deltaSlice : panelHeight.value - deltaSlice
      // 	}, 200)
      // }
      panelHeight.value = newVal
      setTimeout(() => {
        transition.value = false
      }, 200)
      //
    }
  )
  
  const panelElement = ref<HTMLElement | null>(null)
  let isResizing = false
  const startResize = (e: MouseEvent) => {
    const initialSize = panelHeight.value
    const initialY = e.clientY
  
    isResizing = true
  
    const handleMouseMove = (e: MouseEvent) => {
      if (!isResizing) return
  
      const delta = initialY - e.clientY
      const newHeight = initialSize + delta
  
      panelHeight.value = newHeight
      emits('update:defaultHeight', panelHeight.value)
    }
  
    const handleMouseUp = () => {
      isResizing = false
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseup', handleMouseUp)
  }
  </script>
  
  <style scoped>
  .panel-container {
    /* background-color: #e8e8e8; */
    background-color: white;
    position: absolute;
    bottom: 0px;
    left: 0px;
    overflow: scroll;
    /* transition: height .2s; */
  }
  /* .panel-container::-webkit-scrollbar{
      display: none;
  }
  .panel-container::-webkit-scrollbar-thumb{
      display: none;
  } */
  .transition {
    transition: height 0.2s;
  }
  .topBar {
    height: 1px;
    /* background-color: #efefef; */
    background-color: #fff;
    width: 100%;
    cursor: move;
  }
  
  .scroll-container::-webkit-scrollbar {
    display: none;
  }
  </style>
  