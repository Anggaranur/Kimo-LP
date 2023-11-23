<template>
  <div class="h-[635px] relative">
    <vueper-slides
      class="no-shadow p-20 h-[461px] mx-auto"
      :visible-slides="4"
      slide-multiple 
     
      :slide-ratio="1 / 3"
      :dragging-distance="200"
      :breakpoints="{ 1000: { visibleSlides: 2, slideMultiple: 2 } }">

      <vueper-slide v-for="(card, index) in cards" :key="index" :title="index.toString()">
        <template #content>
          <div
            :class="['h-full w-[319px] mx-auto p-4 rounded-lg hover:shadow-xl duration-500', card.background,
            'transition-transform transform hover:scale-90']">
            <p class="text-center text-white">{{ card.title }}</p>
            <p class="text-center text-white">{{ card.content }}</p>
          </div>
        </template>
      </vueper-slide>

    </vueper-slides>
  </div>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      cards: [
        { title: 'News 1', content: 'Content for News 1', background: 'bg-black' },
        { title: 'News 2', content: 'Content for News 2', background: 'bg-black' },
        { title: 'News 3', content: 'Content for News 3', background: 'bg-black' },
        { title: 'News 4', content: 'Content for News 4', background: 'bg-black' },
        { title: 'News 5', content: 'Content for News 5', background: 'bg-black' },
        { title: 'News 6', content: 'Content for News 6', background: 'bg-black' },
        { title: 'News 7', content: 'Content for News 7', background: 'bg-black' },
        { title: 'News 8', content: 'Content for News 8', background: 'bg-black' },
      ],
    };
  },
};
</script>
