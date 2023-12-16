<template>
  <div class="h-[635px] relative w-[1520px] max-xl:w-[1555px]">
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
            :class="['h-full w-[319px] mx-auto rounded-lg hover:shadow-xl duration-500', card.background,
            'transition-transform transform hover:scale-90 relative']">
              <!-- Card Image -->
            <img :src="getImagePath(card.image)" alt="Card image" class="w-full h-[289px] rounded-lg p-2" />
              <!--Text Content-->
            <p class="text-center text-white text-[20px] font-[800]">{{ card.title }}</p>
            <p class="text-center text-white text-[15px] font-[400] p-1">{{ card.content }}</p>
            <!-- Button -->
            <button class="bg-[#F6121C] w-[118px] h-[43px] rounded-sm text-white font-[700] text-[15px] absolute left-24 bottom-3  transition-opacity hover:opacity-90 active:opacity-60">
              Baca Detail
            </button>
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
        { title: 'Peluncuran English Immersion', content: 'Peserta didik kami membanggakan sekolah dengan meraih kemenangan dalam kompetisi bahasa Inggris tingkat nasional.', background: 'bg-news', image : 'contoh.png' },
        { title: 'LC Juarai Kompetisi Nasional' , content: 'Prestasi luar biasa dari peserta didik LC Kampung Inggris yang meraih gelar juara dalam kompetisi bahasa Inggris nasional. ', background: 'bg-news', image : 'contoh2.png' },
        { title: 'Hari Bahasa Inggris', content: 'Siswa LC Kampung Inggris merayakan Hari Bahasa Inggris Sedunia dengan antusias', background: 'bg-news', image: 'contoh3.png' },
        { title: 'Program Baru', content: 'Kami dengan bangga memperkenalkan program terbaru, "English Immersion"', background: 'bg-news', image : 'contoh4.jpg' },
        { title: 'Peluncuran English Immersion', content: 'Peserta didik kami membanggakan sekolah dengan meraih kemenangan dalam kompetisi bahasa Inggris tingkat nasional.', background: 'bg-news', image : 'contoh.png' },
        { title: 'LC Juarai Kompetisi Nasional' , content: 'Prestasi luar biasa dari peserta didik LC Kampung Inggris yang meraih gelar juara dalam kompetisi bahasa Inggris nasional. ', background: 'bg-news', image : 'contoh2.png' },
        { title: 'Hari Bahasa Inggris', content: 'Siswa LC Kampung Inggris merayakan Hari Bahasa Inggris Sedunia dengan antusias', background: 'bg-news', image: 'contoh3.png' },
        { title: 'Program Baru', content: 'Kami dengan bangga memperkenalkan program terbaru, "English Immersion"', background: 'bg-news', image : 'contoh4.jpg' },
      ],
    };
  },
  methods : {
     getImagePath(image) {
       return new URL(`../assets/${image}`, import.meta.url).href;
    },
  }
};
</script>
