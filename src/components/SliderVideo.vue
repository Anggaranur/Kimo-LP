<template>
  <div class="h-[450px] bg-[#FE9A03] relative">
    <vueper-slides
      class="no-shadow p-20 absolute top-[-40px]"
      :visible-slides="4"
      slide-multiple
      :gap="-1"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 1000: { visibleSlides: 2, slideMultiple: 2 } }"
    >
      <!-- Ensure vueper-slide is rendering content correctly -->
      <vueper-slide v-for="(card, index) in cards" :key="index" :title="index.toString()">
        <template #content>
          <div
            :class="['h-full w-[319px] mx-auto p-4 rounded-lg hover:shadow-xl duration-500', card.background, 'transition-transform transform hover:scale-90 ']"
          >
            <p class="text-center text-white">{{ card.titles }}</p>
            <p class="text-center text-white">{{ card.contents }}</p>
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
        { titles: 'Card 1', contents: 'Content for Card 1', background: 'bg-black' },
        { titles: 'Card 2', contents: 'Content for Card 2', background: 'bg-black' },
        { titles: 'Card 3', contents: 'Content for Card 3', background: 'bg-black' },
        { titles: 'Card 4', contents: 'Content for Card 4', background: 'bg-black' },
        { titles: 'Card 5', contents: 'Content for Card 5', background: 'bg-black' },
        { titles: 'Card 6', contents: 'Content for Card 6', background: 'bg-black' },
        { titles: 'Card 7', contents: 'Content for Card 7', background: 'bg-black' },
        { titles: 'Card 8', contents: 'Content for Card 8', background: 'bg-black' },
      ],
    };
  },
};
</script>
