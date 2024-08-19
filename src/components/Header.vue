<script setup lang="ts">
import { ref } from "vue";

const burgerToggle = ref(false);
</script>

<template>
  <div class="bg-black text-white sticky z-10 min-h-14 w-screen p-3 top-0 sm:p-5">
    <button @click="burgerToggle = !burgerToggle" class="sm:hidden w-8 float-right mx-5">
      <img src="../assets/images/logos/hamburger.png" alt="hamburger menu icon" />
    </button>
    <ul v-bind:class="(burgerToggle) ? '' : 'hidden'"
      class="sm:flex sm:visible sm:flex-row gap-2 flex-wrap px-5 sm:gap-5 justify-end sm:px-5">
      <li @click="burgerToggle = !burgerToggle" class="hover:underline"><a href="#about">About Me</a></li>
      <li @click="burgerToggle = !burgerToggle" class="hover:underline"><a href="#education">Education</a></li>
      <li @click="burgerToggle = !burgerToggle" class="hover:underline"><a href="#work">Work</a></li>
      <li @click="burgerToggle = !burgerToggle" class="hover:underline"><a href="#projects">Projects</a></li>
      <li @click="burgerToggle = !burgerToggle" class="hover:underline"><a href="#skills">Skills</a></li>
    </ul>
  </div>
</template>
