
<template>
    <nav class="bg-white flex flex-row items-center justify-between p-2 h-20 w-full ">
      <img class="h-auto w-auto" src="@/assets/logo-kimo-nav.png"/>
      <div class="flex">
        <a href="#download" v-smooth-scroll="{ duration: 1000, offset: -50 }"  class=" bg-redButton p-2 text-white font-Roboto 
          font-bold rounded-lg hover:shadow-md duration-300 active:opacity-60 transition-transform transform text-[10px] sm:text-[12px] lg:text-[20px]">
          DOWNLOAD SEKARANG!
        </a>
      </div>
    </nav>

    
    <!-- <nav class="bg-white flex flex-row items-center justify-between h-[77px] w-full lg:w-[105rem] ss fixed  z-50 shadow-xl max-md:h-[300px]">
    </nav> -->
    
 <!-- <header class="bg-default h-[708px]  w-[105rem] lg:w-[105rem] xl:w-[105rem] max-ss:w-[100rem] max-md:h-[2915px] max-mp:w-[100rem]  flex flex-row justify-center">
    <div class="bg-white flex flex-col lg:flex-row w-[92rem] xl:w-[95rem] lg:w-[99rem] max-ss:w-[85rem] max-ss:left-16 max-mp:left-12 absolute top-[120px] h-[546px] rounded-xl hover:shadow-2xl duration-300 max-md:top-[400px] max-md:h-[2390px]">
      <CircleMove class="absolute max-md:top-[1280px]" />
      <h1 class="absolute z-30 max-w-[780px] h-[162px] font-Roboto font-[700] text-[40px] top-44 left-10 pointer-events-none max-md:text-[80px] 
      max-md:top-[1500px] max-md:max-w-[1300px] max-md:left-20">
        Selamat datang di Kimo, pangkalan rahasia bagi para pemberani yang siap menjelajahi dunia bahasa Inggris! 🌍✨
      </h1>

      <div class="absolute bg-default top-[530px] h-[65px] w-[65px] rounded-full left-[760px] text-white animate-bounce shadow-2xl z-40 cursor-pointer
      max-md:h-[200px] max-md:w-[200px] max-md:top-[2300px] max-md:left-[635px] 2xl:left-[42rem] max-ss:left-[37rem] max-mp:left-[rem]" title="See News">
        <a href="#news" v-smooth-scroll="{ duration: 1000, offset: -50 }">
          <img src="@/assets/down-arrow.png">
        </a>
      </div>

      <div class=" absolute top-0  right-3 w-[820px]  max-md:w-[2400px]">
        <img class="absolute h-[546px] right-2  max-md:h-[1200px] max-md:right-28" src="@/assets/kimo-header.png">
      </div>
    </div>
  </header> -->
</template>

<script>
  import CircleMove from '@/components/CircleMove.vue';

  export default {
    components : {
      CircleMove
    }
  }
</script>