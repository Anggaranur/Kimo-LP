
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
        <div class="bg-white h-52 w-full relative">
          <h1 class="font-extrabold font-Roboto text-[40px] text-center w-[900px] h-[112px] absolute left-[300px] pt-16 max-xl:left-[350px] max-md:text-[60px] max-md:max-w-[1200px]">
            Rasakan  Serunya Belajar Bahasa Inggris di Lingkungan yang Mendukung!
          </h1>
            <p class="font-Roboto text-center absolute left-[330px] top-[220px] text-[30px] max-xl:w-[900px] max-xl:left-[350px] max-md:text-[45px] max-md:max-w-[900px] max-md:top-[350px]">
              Bebas belajar bahasa inggris dimana aja dan kapan aja bareng  tutor terbaik  Kampung Inggris LC
            </p>
        </div>
        <!-- Program Component Slider -->
        <Slider class="max-md:mt-[420px] max-xl:mt-[180px]"/>
    </div>

    <!--Our Milestones Title  -->
    <div class="bg-white h-[154px] relative">
      <h1 class="font-Roboto font-bold text-[40px] absolute top-10 left-[600px]">
        Our Milestones
      </h1>
    </div>
    <!-- Our Milestones -->
  <div class="bg-default h-[373px] relative max-xl:w-[1555px]">
      <!-- Image Left -->
      <img class="w-[353px] h-[345px] absolute left-10" src="@/assets/milestones.png">

      <!-- Content Left -->
      <div>
          <!-- Text  1 -->
          <img class="absolute left-[500px] top-[51px]" src="@/assets/logo-people-arrow.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[42px]">
            Memiliki 47.449+ alumni
          </p>

          <!-- Text 2 -->
          <img class=" absolute left-[500px] top-[100px]" src="@/assets/logo-computer.svg" />
          <p class="text-[25px] font-[500] absolute left-[530px] top-[90px]">
            Memiliki program kelas online tatap muka
          </p>

          <!-- Text 3 -->
          <img class="absolute left-[500px] top-[150px]" src="@/assets/logo-teacher-chalkboard.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[140px]">
            Memiliki 143 tutor
          </p>

          <!-- Text 4 -->
          <img class="absolute left-[500px] top-[200px]" src="@/assets/logo-youtube.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[187px]">
            Memiliki 1,7 juta subscribers YouTube
          </p>

          <!-- Text 5 -->
          <img class="absolute left-[500px] top-[250px]" src="@/assets/logo-instagram.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[240px]">
            Memiliki 1,1 juta followers Instagram
          </p>

          <!-- Text 6 -->
          <img class="absolute left-[500px] top-[300px]" src="@/assets/logo-tiktok.svg"/>
          <p class="text-[25px] font-[500] absolute left-[530px] top-[290px]">
            Memiliki 700 ribu followers Tiktok
          </p>
      </div>
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
    <div class="relative max-xl:w-[1555px]">
      <div class="bg-default absolute z-20 right-0 left-0 h-[300px] top-[307px] text-default">
        .
      </div>
    </div>
    <sliderNews class="z-30"/>

    <!-- Kimo Image -->
    <img class="w-full h-[590px] object-contain max-xl:ml-[300px]" src="@/assets/logo-tab.jpg">
  </main>
  <!-- End Main -->

  <!-- Footer -->
  <FooterSection/>
</template>
<!-- End Main Content -->