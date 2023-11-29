<template>
  <div class="h-[635px] bg-[#EBEBEB]">

    

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
            :class="['h-full w-[319px] mx-auto p-4 rounded-lg hover:shadow-xl duration-500', card.background, 'transition-transform transform hover:scale-90 ' ]"
          >

            
            <p class="text-center">{{ card.title }}</p>
            <p class="text-center">{{ card.content }}</p>
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
        { title: 'Card 1', content: 'Content for Card 1', background: 'bg-red-500' },
        { title: 'Card 2', content: 'Content for Card 2', background: 'bg-blue-500' },
        { title: 'Card 3', content: 'Content for Card 3', background: 'bg-green-500' },
        { title: 'Card 4', content: 'Content for Card 4', background: 'bg-purple-500' },
        { title: 'Card 5', content: 'Content for Card 5', background: 'bg-pink-500' },
        { title: 'Card 6', content: 'Content for Card 6', background: 'bg-orange-500' },
        { title: 'Card 7', content: 'Content for Card 7', background: 'bg-yellow-500' },
        { title: 'Card 8', content: 'Content for Card 8', background: 'bg-blue-900' },
      ],
    };
  },
};
</script>
