<template>
  <!-- Dekstop -->
  <div class="hidden md:block">
  <div class="h-[470px] bg-[#FE9A03] w-[105rem] max-uxl:w-[105rem] relative">
    <vueper-slides
      class=" no-shadow p-20 absolute top-[-40px]"
      :visible-slides="4"
      slide-multiple
      :gap="-1"
      :slide-ratio="1 / 4"
      :dragging-distance="200"
      :breakpoints="{ 1000: { visibleSlides: 2, slideMultiple: 2 } }">
   
      <vueper-slide v-for="(card, index) in cards" :key="index" :title="index.toString()">
        <template #content>
          <div
            :class="['h-full w-[319px] mx-auto rounded-lg hover:shadow-xl duration-500', card.background, 
            'transition-transform transform hover:scale-90']">

          <!-- Content -->
            <div>
            <!-- Card Video -->
            <iframe :src="card.video" class="w-full h-[240px] rounded-lg mb-[20px]" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowfullscreen></iframe>
              <!-- Icon LC -->
              <div class="relative">
                <img src="@/assets/border-icon.svg" class="absolute left-0 top-[-255px]"/>
                <img src="@/assets/lc-logo.png" class="absolute rounded-full left-[4.5px] top-[-250px]"/>
                <img src="@/assets/check-icon.svg" class="absolute rounded-full left-[45px] top-[-215px]"/>
              </div>
              <!-- Video Time -->
              
              <!-- Text Content -->
              <p class="text-white font-Poppins font-[600] text-[15px] text-start ml-3">{{ card.titles }}</p>

            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
</div>

<!-- Mobile -->
  <div class="md:hidden mt-[500px]">
    <div class="h-[100rem] bg-[#FE9A03] w-[105rem] max-ss:w-[95rem] max-mp:w-[100rem] max-us:w-[80rem] relative">
    <vueper-slides
      class="no-shadow p-20 pt-[150px]"
      :visible-slides="1"
      slide-multiple
      :gap="12"
      :slide-ratio="1"
      :dragging-distance="200"
      :breakpoints="{ 1000: { visibleSlides: 2, slideMultiple: 2 } }">
   
      <vueper-slide v-for="(card, index) in cards" :key="index" :title="index.toString()">
        <template #content>
          <div
            :class="['h-[1200px] w-[1200px] mx-auto rounded-lg hover:shadow-xl duration-500', card.background, 
            'transition-transform transform hover:scale-95']">

          <!-- Content -->
            <div>
            <!-- Card Video -->
            <iframe :src="card.video" class="w-full h-[800px] rounded-lg mb-[20px]" 
            frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
            picture-in-picture; web-share" allowfullscreen></iframe>
              <!-- Icon LC -->
              <!-- <div class="relative">
                <img src="@/assets/border-icon.svg" class="absolute left-0 top-[-715px] w-[200px] h-auto"/>
                <img src="@/assets/lc-logo.png" class="absolute rounded-full left-[5px] top-[-710px] w-[190px] h-auto"/>
                <img src="@/assets/check-icon.svg" class="absolute rounded-full left-[135px] top-[-590px] w-[65px]"/>
              </div> -->
              <!-- Video Time -->
              
              <!-- Text Content -->
              <p class="text-white font-Poppins font-[600] text-[80px] max-us:text-[65px] max-us:w-[1000px] text-start ml-10 mt-[20px]">
              {{ card.titles }}</p>

            </div>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
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
        { titles: 'BERHITUNG DALAM BAHASA INGGRIS - Kampung Inggris LC', background: 'bg-learning', video:  'https://www.youtube.com/embed/cnJbs9HPUNk?si=Dufo2gSYKaDdRCAQ' },
        { titles: '80 KATA YANG PALING SERING DIGUNAKAN DALAM BAHASA INGGRIS | TEATU with Ms Ervi', background: 'bg-learning' , video: 'https://www.youtube.com/embed/EH8QxyeRkfE?si=L8BfTbd1ETO52SJz' },
        { titles: 'KUPAS TUNTAS VERB 1, 2 DAN 3 DALAM BAHASA INGGRIS - Kampung Inggris LC', background: 'bg-learning', video : 'https://www.youtube.com/embed/XgnWNvl3P6A?si=wGza_foNUgChyBQn' },
        { titles: 'KOSAKATA BAHASA INGGRIS YANG MIRIP | CONFUSING WORDS IN ENGLISH - Kampung Inggris LC', background: 'bg-learning', video : 'https://www.youtube.com/embed/TEaqmgTTJmI?si=c2mx8m0Q3wuFt2hW' },
        { titles: 'CARA MUDAH BELAJAR COUNTABLE & UNCOUNTABLE NOUN - Kampung Inggris LC', background: 'bg-learning', video : 'https://www.youtube.com/embed/hpKJvcpD67c?si=XnZK2oBRJ007zm0J' },
        { titles: 'BAHASA INGGRISNYA KAMAR MANDI DARI BERBAGAI NEGARA - Kampung Inggris LC', background: 'bg-learning', video : 'https://www.youtube.com/embed/pSL9SmmTj-4?si=1naOSAdbEddXNhM7' },
        { titles: "TERNYATA WONT DAN WON'T ITU BEDA! - Kampung Inggris LC", background: 'bg-learning', video : 'https://www.youtube.com/embed/oNmDxZLYVTA?si=oPj0kQI5UhgewedZ' },
        { titles: 'PERBEDAAN HAVE, HAS, DAN HAD DALAM BAHASA INGGRIS - Kampung Inggris LC', background: 'bg-learning', video : 'https://www.youtube.com/embed/gdSwr2CkvZ0?si=eshYO4A8wfY3SFeL' },
      ],
    };
  },
};
</script>
