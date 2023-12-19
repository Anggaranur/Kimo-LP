<template>
  <!-- Dekstop -->
  <div class="hidden md:block">
  <div class="h-[470px] bg-[#FE9A03] w-[105rem] 2xl:w-[95rem] relative">
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
    <div class="h-[100rem] bg-[#FE9A03] w-[105rem] max-ss:w-[95rem] max-mp:w-[100rem] relative">
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
              <p class="text-white font-Poppins font-[600] text-[80px] text-start ml-10 mt-[20px]">{{ card.titles }}</p>

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
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning', video: 'https://www.youtube.com/embed/8W7x_-mMOtU?si=2f8tIWOOI11riT1H' },
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning' , video: 'https://www.youtube.com/embed/WO23Sl2t2OM?si=9IVppVsYewIb3MyQ' },
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning', video : 'https://www.youtube.com/embed/8w7QDjrrPaM?si=pSv5pf8RkWCNNy58' },
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning', video : 'https://www.youtube.com/embed/o-qGwAKNfT4?si=7t8G7yS6P1NoTBdh' },
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning', video : 'https://www.youtube.com/embed/UDFw5IuUQAQ?si=2mybwxeQQI0Z79cx' },
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning', video : 'https://www.youtube.com/embed/FxJ3zPUU6Y4?si=3hA1pB_hohhy7prA' },
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning', video : 'https://www.youtube.com/embed/hVyUE5kDq88?si=k9H-r4W9i9lmeDkt' },
        { titles: 'Belajar Bahasa Inggris Anti Ribet Bareng Ahlinya Langsung Pasti Fun!', background: 'bg-learning', video : 'https://www.youtube.com/embed/UTtbOGRfG9E?si=7hKL79WMxSbbxJFK' },
      ],
    };
  },
};
</script>
