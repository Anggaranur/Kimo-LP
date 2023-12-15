<template>
 <header class="bg-default h-[708px] max-xl:w-[1500px]  relative">
    <!-- NavBar -->
    <nav class="bg-white h-[77px] fixed w-full z-50 shadow-xl max-xl:h-[150px]">
      <img class="h-[77px] w-[212px]" src="@/assets/logo-kimo-nav.png"/>
      <!-- Button Dowmload -->
      <a href="#download" v-smooth-scroll="{ duration: 1000, offset: -50 }">
        <button class="absolute top-3.5 right-5 bg-redButton p-3 text-white font-Roboto 
        font-bold rounded-md hover:shadow-md duration-300 active:opacity-60 transition-transform transform hover:scale-110" title="Download Apps">
          DOWNLOAD SEKARANG!
        </button>
      </a>
    </nav>

    <!-- Header Content -->
    <div class="bg-white absolute top-[120px] right-12 left-12 h-[546px] rounded-xl hover:shadow-2xl duration-300">
      <!-- Circle Animation -->
      <CircleMove />
      <h1 class="absolute z-30 max-w-[780px] h-[162px] font-Roboto font-[700] text-[40px] top-44 left-10 pointer-events-none">
        Selamat datang di Kimo, pangkalan rahasia bagi para pemberani yang siap menjelajahi dunia bahasa Inggris! 🌍✨
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
</template>

<script>
  import CircleMove from '@/components/CircleMove.vue';

  export default {
    components : {
      CircleMove
    }
  }
</script>