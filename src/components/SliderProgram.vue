<template>
  
  <div class="md:hidden bg-[#ebebebd0] w-auto max-xl:w-[1500px] max-md:h-[1000px]">
    <vueper-slides
      class="no-shadow ml-12 py-16"
      :visible-slides="2"
      slide-multiple 
      :gap = "3"
      :slide-ratio="1/ 1.3"
      :dragging-distance="200"
      :breakpoints="breakpoints"
    >
      <vueper-slide v-for="(card, index) in cards" :key="index" :title="index.toString()">
        <template #content>
          <div class="h-full"
            :class="['h-auto w-[319px] mx-auto rounded-lg shadow-xl duration-500', card.background, 'transition-transform transform hover:scale-90 relative max-md:w-full']"
          >
            <!-- Content -->
            <img :src="getImagePath(card.image)" alt="Card image" class="w-full h-auto rounded-lg" />
            <p class="text-center text-[20px] font-[700] ">{{ card.title }}</p>
            <p class="text-center font-[400] text-[13px]">{{ card.content }}</p>
          </div>
        </template>
      </vueper-slide>
    </vueper-slides>
  </div>
  <div class="hidden md:block bg-[#ebebebd0] w-auto max-xl:w-[1500px] max-md:h-[1000px]">
    <vueper-slides
      class="no-shadow ml-12 py-16"
      :visible-slides="4"
      slide-multiple 
      :gap = "3"
      :slide-ratio="1 / 3"
      :dragging-distance="200"
      :breakpoints="breakpoints"
    >
      <vueper-slide v-for="(card, index) in cards" :key="index" :title="index.toString()">
        <template #content>
          <div class="h-full"
            :class="['h-auto w-[319px] mx-auto rounded-lg shadow-xl duration-500', card.background, 'transition-transform transform hover:scale-90 relative max-md:w-full']"
          >
            <!-- Content -->
            <img :src="getImagePath(card.image)" alt="Card image" class="w-full h-auto rounded-lg" />
            <p class="text-center text-[20px] font-[700] ">{{ card.title }}</p>
            <p class="text-center font-[400] text-[13px]">{{ card.content }}</p>
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
        { title: 'Metode Terbukti Efektif', content: 'Skill bahasa Inggris meningkat pesat dengan paket pembelajaran yang lengkap dan didukung dengan lingkungan English area.', background: 'bg-white', image: 'our1.png' },
        { title: 'Lingkungan Mendukung', content: 'Kamu bakal diwajibkan berkomunasi dengan bahasa Inggris biar kepedeananmu meningkat.', background: 'bg-white', image: 'our2.png' },
        { title: 'Tutor Berpengalaman', content: 'Dengan sistem seleksi yang ketat, LC menghadirkan tutor yang kompeten dan berpengalaman mengajar di Kampung Inggris selama bertahun-tahun.', background: 'bg-white', image: 'our3.png' },
        { title: 'Pembawaan Materi Fun', content: 'Materi bisa lebih gampang diterima dan dimengerti dengan metode pembawaan materi yang seru dan menyenangkan.', background: 'bg-white', image: 'our4.png' },
        { title: 'Kelas Kondusif', content: 'Biar suasana kelasnya kondusif, LC membatasi jumlah siswa dalam satu kelas maksimal 16 orang aja.', background: 'bg-white', image: 'our5.png' },
        { title: 'More than Just Learning', content: 'Nggak cuma bantu ningkatin skill bahasa Inggris, tapi LC juga bakal bantu kamu jadi pribadi yang berkarakter.', background: 'bg-white', image: 'our6.png' },
        { title: 'Fleksibilitas Jadwal Belajar', content: 'LC memberikan fleksibilitas jadwal belajar, memungkinkanmu untuk menyesuaikan waktu belajar sesuai kebutuhanmu.', background: 'bg-white', image: 'our7.png' },
        { title: 'Komunitas Aktif dan Beragam', content: 'Raih peluang untuk terlibat dalam beragam kegiatan dan bergabung dengan komunitas aktif, sehingga kamu dapat terus mempraktikkan bahasa Inggris dalam situasi nyata.', background: 'bg-white', image: 'our8.png' }, 
      ],
      breakpoints: {
        1200: {
          slideRatio: 1/3,
          visibleSlides: 5
        },
        600: {
          slideRatio: 1/3,
          visibleSlides: 3,
        }
      }
    };
  },

  methods: {
    getImagePath(image) {
      return new URL(`../assets/${image}`, import.meta.url).href;
    },
  },
};
</script>