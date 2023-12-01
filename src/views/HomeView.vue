
<script>
  import  Slider  from '@/components/SliderProgram.vue';
  import  SliderVideo  from '@/components/SliderVideo.vue';
  import  SliderNews  from '@/components/SliderNews.vue';
  import ScrollAnimated from '@/components/ScrollAnimated.vue';
  import FooterSection from '@/views/Footer.vue';
  import HeaderSection from '@/views/Header.vue';

  export default {
    components : {
      Slider,
      SliderVideo,
      SliderNews,
      ScrollAnimated,
      FooterSection,
      HeaderSection
    },
    }
</script>

<template class="font-Roboto">
  <!-- Header -->
  <HeaderSection/>
  <!-- End Header -->

  <!-- Main -->
  <main class="h-[3000px]">
    <div>
      <!-- On Scroll Animate belum done -->
      <ScrollAnimated/>
        <!-- Our Program Title -->
        <div class="bg-white h-52 w-full relative">
          <h1 class="font-extrabold font-Roboto text-[40px] text-center w-[900px] h-[112px] absolute left-[300px] top-5">
            Rasakan  Serunya Belajar Bahasa Inggris di Lingkungan yang Mendukung!</h1>
            <p class="font-Roboto text-center  absolute left-[300px] top-36 text-[20px]">
              Bebas belajar bahasa inggris dimana aja dan kapan aja bareng  tutor terbaik  Kampung Inggris LC
            </p>
        </div>
        <!-- Program Component Slider -->
        <Slider/>
    </div>
    <!--Our Milestones Title  -->
    <div class="bg-white h-[154px] relative">
      <h1 class="font-Roboto font-bold text-[40px] absolute top-10 left-[600px]">
        Our Milestones
      </h1>
    </div>
    <!-- Our Milestones -->
    <div class="bg-default h-[373px] relative">
      <img class="w-[353px] h-[345px] absolute left-10" src="@/assets/milestones.png">
    </div>

    <!-- Learning Video Title -->
    <div class="bg-white h-[226px] relative">
      <h1 class="font-Roboto font-bold text-[40px] absolute top-10 w-[682px] text-center left-[450px]">
        Seru-seruan Bareng Tutor yang Asik! Learning Video
      </h1>
    </div>
    <!-- Learning Video -->
    <SliderVideo/>

    <!-- Berita Title -->
    <div id="news" class="bg-white h-[150px] relative">
      <h1 class="font-Roboto font-bold text-[40px] absolute top-20 w-[682px] text-center left-[450px]">
        Berita Terbaru
      </h1>
    </div>
    <!-- Berita Content -->
    <div class="relative">
      <div class="bg-default absolute z-20 right-0 left-0 h-[300px] top-[307px] text-default">
        .
      </div>
    </div>
    <sliderNews class="z-30"/>

    <!-- Kimo Image -->
    <img class="w-full h-[590px] object-contain" src="@/assets/logo-tab.jpg">
  </main>
  <!-- End Main -->

  <!-- Footer -->
  <FooterSection/>
  
</template>
