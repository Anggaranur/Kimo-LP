<template>
  <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false">

    <div class="gsap-box absolute bg-default top-16 h-[418px] w-[441px] rounded-full left-5 text-white">
    </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const direction = ref(-1); // -1 for left, 1 for right

const onMouseOver = () => {
  direction.value = 1; // Move to the right when hovered
  gsap.to('.gsap-box', {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    x: 300, // Move right based on the direction
  });
};

const onMouseLeave = () => {
  direction.value = -1; // Move back to the left when not hovered
  gsap.to('.gsap-box', {
    duration: 1,
    scaleX: 1,
    scaleY: 1,
    x:0,
  });
};
</script>
