
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

<template class="font-Roboto">
  <!-- Header -->
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
  <footer class="bg-black h-[416px] w-full mt-[500px] text-center relative">
    <!-- Text Left Content -->
      <h1 class=" text-[16px] text-textDefault font-[700] absolute top-20 left-20 w-[219px]">
        KIMO FOR STUDENTS
      </h1>
      <svg class="absolute top-[58px] left-[70px]" xmlns="http://www.w3.org/2000/svg" width="143" height="56" viewBox="0 0 143 56" fill="none">
        <path d="M19.9031 12.7239C17.2684 12.7241 14.7417 13.7898 12.8787 15.6867C11.0156 17.5836 9.96893 20.1563 9.96875 22.8389V23.0769H0V43.3909H20.2125V32.9469C22.8232 32.8705 25.2993 31.7503 27.1048 29.8288C28.9103 27.9072 29.8998 25.3389 29.8591 22.68C29.8184 20.021 28.7508 17.4854 26.8875 15.622C25.0241 13.7586 22.5149 12.7174 19.9031 12.7239ZM3.4375 39.8909V26.5769H9.96875V32.9539H16.775V39.8909H3.4375ZM20.2125 29.4469C20.1094 29.4539 20.0063 29.4539 19.9031 29.4539H13.4062V22.8389C13.4063 21.544 13.7797 20.2776 14.48 19.1968C15.1803 18.1159 16.1768 17.2681 17.3459 16.7584C18.515 16.2487 19.8053 16.0996 21.0569 16.3296C22.3084 16.5595 23.4662 17.1584 24.3866 18.052C25.307 18.9456 25.9496 20.0946 26.2347 21.3565C26.5197 22.6184 26.4348 23.9378 25.9904 25.1511C25.546 26.3643 24.7616 27.4181 23.7345 28.1817C22.7074 28.9453 21.4828 29.3852 20.2125 29.4469Z" fill="#F6121C"/>
      </svg>
      <p class="w-[261px] absolute text-white text-start text-[16px] font[400] left-[108px] top-32">
        Kimo for Students: Pantau jadwal, materi, dan progres kursus dengan mudah di LC Kampung Inggris Pare. Sukses belajar!
      </p>
      <p class="text-[16px] absolute top-[270px] text-white left-[108px] font-[400]">
        Copyright  LC Kampung Inggris Pare
      </p>
      <a class="text-[#08A0F7] absolute top-[300px] left-[108px]" href="https://www.kampunginggris.id/" target="_blank">
        https://www.kampunginggris.id/
      </a>

      <!--Contact Content-->
      <h1 class="text-textDefault text-[16px] font-[700] absolute top-20 left-[460px] leading-[22px]">
        Hubungi Kami :
      </h1>
      <!-- Location -->
      <svg class="absolute top-32 left-[460px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C15.87 2 19 5.13 19 9C19 14.25 12 22 12 22C12 22 5 14.25 5 9C5 5.13 8.13 2 12 2ZM7 9C7 11.85 9.92 16.21 12 18.88C14.12 16.19 17 11.88 17 9C17 6.24 14.76 4 12 4C9.24 4 7 6.24 7 9ZM12 11.5C10.6193 11.5 9.5 10.3807 9.5 9C9.5 7.61929 10.6193 6.5 12 6.5C13.3807 6.5 14.5 7.61929 14.5 9C14.5 10.3807 13.3807 11.5 12 11.5Z" fill="#F6121C"/>
      </svg>
      <p class="text-white w-[175px] text-[16px] leading-[24px] absolute top-32 left-[490px] text-start">
        Jl. Langkat No.88-93, Singgahan, Pelem, Kec. Pare, Kabupaten Kediri, Jawa Timur 64213
      </p>
      <!-- Email -->
      <svg class="absolute top-60 left-[460px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M22 6C22 4.9 21.1 4 20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6ZM20 6L12 11L4 6H20ZM20 18H4V8L12 13L20 8V18Z" fill="#F6121C"/>
      </svg>
      <p class="text-[16px] leading-[24px] text-white absolute top-60 left-[490px]">
        marketing@languagecenter.id
      </p>
      <!-- Phone Number -->
      <svg class="absolute top-[290px] left-[460px]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.54 5C6.6 5.89 6.75 6.76 6.99 7.59L5.79 8.79C5.38 7.59 5.12 6.32 5.03 5H6.54ZM16.4 17.02C17.25 17.26 18.12 17.41 19 17.47V18.96C17.68 18.87 16.41 18.61 15.2 18.21L16.4 17.02ZM7.5 3H4C3.45 3 3 3.45 3 4C3 13.39 10.61 21 20 21C20.55 21 21 20.55 21 20V16.51C21 15.96 20.55 15.51 20 15.51C18.76 15.51 17.55 15.31 16.43 14.94C16.33 14.9 16.22 14.89 16.12 14.89C15.86 14.89 15.61 14.99 15.41 15.18L13.21 17.38C10.38 15.93 8.06 13.62 6.62 10.79L8.82 8.59C9.1 8.31 9.18 7.92 9.07 7.57C8.7 6.45 8.5 5.25 8.5 4C8.5 3.45 8.05 3 7.5 3Z" fill="#F6121C"/>
      </svg>
      <p class="text-white font-[16px] leading-[24px] absolute top-[290px] left-[490px]">
        +6281231250390
      </p>

      <!-- Social Media Content -->
      <!-- Instagram -->
      <a href="https://www.instagram.com/kampunginggrislc/?utm_source=ig_web_button_share_sheet&igshid=MmVlMjlkMTBhMg==" target="_blank">
        <img class="w-[41px] h-[41px] absolute top-16 left-[760px] cursor-pointer" src="@/assets/logo-ig.svg"/>
      </a>
      <!-- Youtube -->
      <a href="https://www.youtube.com/@kampunginggrislc" target="_blank">
        <img class="absolute top-[70px] left-[820px] cursor-pointer" src="@/assets/logo-yt.svg"/>
      </a>
      <!-- Tiktok -->
      <a href="https://www.tiktok.com/@kampunginggrislccom?is_from_webapp=1&sender_device=pc" target="_blank">
        <img class="absolute top-16 left-[890px] cursor-pointer" src="@/assets/logo-tt.svg"/>
      </a>
      <!-- Text -->
      <p class="text-[16px] text-white w-[240px] text-start font-[700] absolute top-32 left-[760px] leading-[24px]">
        Jelajahi dunia bahasa Inggris bersama kami! Ikuti perjalanan belajar yang seru di media sosial kami. Kunjungi Sekarang!
      </p>

      <!-- Download Content -->
      <h1 class="text-[16px] font-[700] text-[#3A86FF] absolute top-[70px] left-[1100px]">
        JOIN OUR ENGLISH COURSE!
      </h1>
  </footer>
  
</template>
