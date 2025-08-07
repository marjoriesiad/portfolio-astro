<script setup>
const now = new Date;
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).toString(2, '0');
const getTime = `${hours} : ${minutes}`;
</script>



<template>
  <div class="w-full h-16 fixed bottom-0 flex items-center bg-windows-light-gray p-4 justify-between">
    <div class="flex items-center gap-3">
          <div class="border-2 py-2 px-3 border-b-windows-dark-gray border-r-windows-dark-gray border-t-white border-l-white cursor-pointer active:border-b-white active:border-r-white active:border-t-windows-dark-gray active:border-l-windows-dark-gray">
      <img src="/icons/start-button.png" alt="Icon Start de Windows 98" class="w-20">
    </div>
    <div class="h-10 w-[2px] bg-white shadow-[2px_0_0_0_#808080] mx-2"></div>
    </div>
    <div class="border-2 border-t-windows-dark-gray border-l-windows-dark-gray border-r-white border-b-white py-2 px-4">
      {{getTime}}
    </div>
  </div>


  <div class="w-70 h-96 bg-windows-light-gray border-2 border-white border-b-windows-dark-gray border-r-windows-dark-gray fixed bottom-15 left-1 hidden">
  <!-- Colonne 1 : barre bleue verticale -->
<div class="bg-windows-blue flex items-end pb-3 justify-center w-10">
<span class="[writing-mode:vertical-rl] [text-orientation:sideways] text-white font-bold text-lg mt-2 rotate-180">Windows 98</span>
</div>


  <!-- Colonne 2 : liens -->
  <div class="flex-1">
    <nav class="flex flex-col gap-3 p-4">
      <a href="">Lien 1</a>
      <a href="">Lien 2</a>
      <a href="">Lien 3</a>
    </nav>
  </div>
</div>

</template>