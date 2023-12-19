<template>
  <div @mouseover="onMouseOver" @mouseleave="onMouseLeave">
    <Transition
      @before-enter="onBeforeEnter"
      @enter="onEnter"
      @leave="onLeave"
      :css="false">
      <div class="gsap-box">
        <div class="w-[341px] h-[546px]">
          <div class="absolute bg-default top-16 h-[418px] w-[441px] rounded-full left-5 text-white shadow-2xl max-md:h-[820px] max-md:w-[820px]">
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import gsap from 'gsap';

const direction = ref(-1); // -1 for left, 1 for right

const onBeforeEnter = () => {};
const onEnter = () => {};
const onLeave = () => {};
const onMouseOver = () => {
  direction.value = 1; // Move to the right when hovered
  gsap.to('.gsap-box', {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    x: 330, // Move right based on the direction
  });
};

const onMouseLeave = () => {
  direction.value = -1; // Move back to the left when not hovered
  gsap.to('.gsap-box', {
    duration: 0.3,
    scaleX: 1,
    scaleY: 1,
    x:0,
  });
};
</script>