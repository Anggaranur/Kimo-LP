<script>
import SliderProgram from "@/components/SliderProgram.vue";
import SliderVideo from "@/components/SliderVideo.vue";
import SliderNews from "@/components/SliderNews.vue";
import ScrollAnimated from "@/components/ScrollAnimated.vue";
import FooterSection from "@/views/Footer.vue";
import HeaderSection from "@/views/HeaderNew.vue";
import { VueperSlides, VueperSlide } from 'vueperslides';
import 'vueperslides/dist/vueperslides.css';


export default {
  components: {
    SliderProgram,
    SliderVideo,
    SliderNews,
    ScrollAnimated,
    FooterSection,
    HeaderSection,
    VueperSlides, 
    VueperSlide
  },
  data(){
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
  }
};
</script>

<!--Main Content  -->
<template class="font-Roboto">
  <HeaderSection/>
    <main class="w-full bg-red-500 ">
      <vueper-slides class=" no-shadow p-20 absolute top-[-40px]"
        :visible-slides="4"
        slide-multiple
        :gap="2"
        :slide-ratio="1 / 4"
        :dragging-distance="200"
        :breakpoints="{ 
          400: { 
            visibleSlides: 1, 
            slideMultiple: 4,
            slideRatio: 1 / 2,
            arrows: false,
            bullets: false
          },  // Small screens
          900: { visibleSlides: 2, slideMultiple: 2 , bullets:true},  // Medium screens
          1200: { visibleSlides: 3, slideMultiple: 3, bullets:true, arrows:false },  // Large screens
        }">

        <vueper-slide v-for="(card, index) in cards" :key="index" :title="index.toString()">
          <template #content>
              <iframe :src="card.video" class="w-auto h-auto rounded-lg" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
              picture-in-picture; web-share" allowfullscreen></iframe>
          </template>
            
        </vueper-slide>
   
     
      </vueper-slides>
    </main>
 
</template>
<!-- End Main Content -->
