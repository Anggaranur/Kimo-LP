
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

<!--Main Content  -->
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
        <div class="bg-white h-52 w-full max-md:bg-[#0000000a] max-md:min-w-[1555px] max-md:h-[600px] relative">
          <h1 class="font-extrabold font-Roboto text-[40px] text-center w-[900px] h-[112px] absolute left-[300px] pt-16 max-xl:left-[350px] max-md:text-[60px] max-md:max-w-[1200px]">
            Rasakan  Serunya Belajar Bahasa Inggris di Lingkungan yang Mendukung!
          </h1>
            <p class="font-Roboto text-center absolute left-[150px] top-[220px] text-[30px] max-xl:w-[900px] max-xl:left-[350px] max-md:text-[45px] max-md:max-w-[900px] max-md:top-[350px]">
              Bebas belajar bahasa inggris dimana aja dan kapan aja bareng  tutor terbaik  Kampung Inggris LC
            </p>
        </div>
        <!-- Program Component Slider -->
        <Slider class="mt-[130px] max-md:mt-[320px] max-xl:mt-[180px]"/>
    </div>

    <!--Our Milestones Title  -->
    <div class="bg-white h-[154px]  max-md:bg-[#0000000a] max-md:w-[1555px] max-md:h-[600px] relative">
      <h1 class="font-Roboto font-bold text-[40px] absolute top-20 left-[650px] max-lg:w-[300px] max-md:text-[90px] max-md:left-[500px] max-md:w-[700px] max-md:pt-36">
        Our Milestones
      </h1>
    </div>
    <!-- Our Milestones -->
  <div class="bg-default h-[373px] relative w-[1520px] max-xl:w-[1555px] max-md:h-[2300px]">
      <!-- Image Left -->
      <img class="w-[353px] h-[345px] absolute left-10 max-md:w-[900px] max-md:h-[900px] max-md:left-[300px]" 
      src="@/assets/milestones.png">

      <!-- Content Left -->
      <div class=" absolute w-[1100px] max-md:top-[1000px]">
          <!-- Text  1 -->
          <img class="absolute left-[500px] top-[51px] max-md:h-[60px] max-md:left-[100px] max-md:top-[100px]" src="@/assets/logo-people-arrow.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[45px] max-md:top-[90px] max-md:left-[200px] max-md:text-[60px] max-md:w-[1200px]">
            Memiliki 47.449+ alumni
          </p>

          <!-- Text 2 -->
          <img class=" absolute left-[500px] top-[100px] max-md:h-[60px] max-md:left-[100px] max-md:top-[280px]" src="@/assets/logo-computer.svg" />
          <p class="text-[25px] font-[500] absolute left-[530px] top-[90px] max-md:top-[270px] max-md:left-[200px] max-md:text-[60px] max-md:w-[1200px]">
            Memiliki program kelas online tatap muka
          </p>

          <!-- Text 3 -->
          <img class="absolute left-[500px] top-[150px] max-md:h-[60px] max-md:left-[100px] max-md:top-[460px]" src="@/assets/logo-teacher-chalkboard.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[140px] max-md:top-[450px] max-md:left-[200px] max-md:text-[60px] max-md:w-[1200px]">
            Memiliki 143 tutor
          </p>

          <!-- Text 4 -->
          <img class="absolute left-[500px] top-[200px] max-md:h-[60px] max-md:left-[100px] max-md:top-[620px]" src="@/assets/logo-youtube.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[187px] max-md:top-[610px] max-md:left-[210px] max-md:text-[60px] max-md:w-[1200px]">
            Memiliki 1,7 juta subscribers YouTube
          </p>

          <!-- Text 5 -->
          <img class="absolute left-[500px] top-[250px] max-md:h-[80px] max-md:left-[100px] max-md:top-[810px]" src="@/assets/logo-instagram.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[240px] max-md:top-[810px] max-md:left-[200px] max-md:text-[60px] max-md:w-[1200px]">
            Memiliki 1,1 juta followers Instagram
          </p>

          <!-- Text 6 -->
          <img class="absolute left-[500px] top-[300px] max-md:h-[80px] max-md:left-[100px] max-md:top-[1020px]" src="@/assets/logo-tiktok.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[290px] max-md:top-[1030px] max-md:left-[200px] max-md:text-[60px] max-md:w-[1200px]">
            Memiliki 700 ribu followers Tiktok
          </p>
      </div>
    </div>

    <!-- Learning Video Title -->
    <div class="bg-white h-[226px] relative">
      <h1 class="font-Roboto font-bold text-[40px] absolute top-10 w-[682px] text-center left-[450px]  max-md:text-[100px] max-md:left-[300px] max-md:w-[1000px] max-md:pt-28">
        Seru-seruan Bareng Tutor yang Asik! Learning Video
      </h1>
    </div>
    <!-- Learning Video -->
    <SliderVideo/>

    <!-- Berita Title -->
    <div id="news" class="bg-white h-[150px] max-md:bg-[#0000000a] max-md:w-[1555px] max-md:h-[500px] relative">
      <h1 class="font-Roboto font-bold text-[40px] absolute top-20 w-[682px] text-center left-[450px]  max-md:text-[100px] max-md:left-[300px] max-md:w-[1000px] max-md:pt-28">
        Berita Terbaru
      </h1>
    </div>
    <!-- Berita Content -->
    <div class="relative w-[1520px] max-xl:w-[1555px]">
      <div class="bg-default absolute right-0 left-0 h-[300px] top-[307px] max-md:top-[1100px] max-md:h-[600px] text-default">
        .
      </div>
    </div>
    <sliderNews class="z-30"/>

    <!-- Kimo Image -->
    <img class="w-full h-[590px] absolute  max-xl:left-[-30px] max-lg:left-[100px] object-contain  max-xl:ml-[300px] max-sm:hidden ml-[50px]" 
    src="@/assets/logo-tab.jpg">
  </main>
  <!-- End Main -->

  <!-- Footer -->
  <FooterSection class="absolute top-[80px] max-lg:top-[150px] max-xl:top-[120px] max-md:top-[6547px]"/>
</template>
<!-- End Main Content -->