
<script>
  import  Slider  from '@/components/SliderProgram.vue';
  import  SliderVideo  from '@/components/SliderVideo.vue';
  import  SliderNews  from '@/components/SliderNews.vue';
  import CircleMove from '@/components/CircleMove.vue';
  import ScrollAnimated from '@/components/ScrollAnimated.vue';

  export default {
    components : {
      Slider,
      SliderVideo,
      SliderNews,
      CircleMove,
      ScrollAnimated
    },
    }
</script>

<template>
  <header class="bg-default h-[708px] w-full relative">
    <!-- NavBar -->
    <nav class="bg-white h-[77px] fixed w-full z-50 shadow-xl">
      <img class="h-[77px] w-[212px]" src="@/assets/logo-kimo-nav.png"/>
      <button class="absolute top-3.5 right-5 bg-redButton p-3 text-white font-Roboto 
      font-bold rounded-md hover:opacity-70 hover:shadow-md duration-300 active:opacity-100">
        DOWNLOAD SEKARANG!
      </button>
    </nav>
    <!-- Header Content -->
    <div class="bg-white absolute top-[120px] right-12 left-12 h-[546px] rounded-xl hover:shadow-2xl duration-300">
     <!-- Circle Animation -->
     <CircleMove />
     <h1 class="absolute z-30 max-w-[780px] h-[162px] font-Roboto font-[700] text-[40px] top-44 left-10 pointer-events-none flex">
      Selamat datang di Kimo, pangkalan
      rahasia bagi para pemberani yang siap menjelajahi dunia bahasa Inggris! 🌍✨
    </h1>

      <!-- menu page scroll bounce -->
      <div class="absolute bg-default top-[530px] h-[65px] w-[65px] rounded-full left-[700px] text-white animate-bounce shadow-2xl z-40 cursor-pointer" title="See News">
        <a href="#news" v-smooth-scroll="{ duration: 1000, offset: -50 }">
          <img src="@/assets/down-arrow.png">
        </a>
      </div>

      <!-- Logo Header -->
      <div class=" absolute top-0  right-3 w-[820px] h-[546px]">
        <img class="absolute h-[546px] right-2" src="@/assets/kimo-header.png">
      </div>
    </div>
  </header>

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

  <footer class="bg-black h-[416px] w-full mt-[500px] text-center">
      <p class="text-white font-Bold text-3xl pt-[250px]">kuhfskuh</p>
  </footer>
  
</template>
