<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';

const now = new Date();
const hours = String(now.getHours()).padStart(2, '0');
const minutes = String(now.getMinutes()).padStart(2, '0');
const getTime = `${hours} : ${minutes}`;

const isMenuOpen = ref(false);
const menuRef = ref(null);
const startBtn = ref(null);

// Pour le sous-menu "Projets"
const showProjectsMenu = ref(false);
let projectsMenuTimeout = null;

// Exemple de liste de projets (tu remplaces par tes vrais projets)
const projects = [
  { id: 1, name: 'SkillCraft', href: "#" },
  { id: 2, name: 'Portfolio', href: "#" },
  { id: 3, name: 'Un autre projet', href: "#" }
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  // On ferme le sous-menu projets si on ferme le menu principal
  if (!isMenuOpen.value) {
    showProjectsMenu.value = false;
    if (projectsMenuTimeout) {
      clearTimeout(projectsMenuTimeout);
      projectsMenuTimeout = null;
    }
  }
}

function showProjectsSubMenu() {
  console.log('showProjectsSubMenu called');
  if (projectsMenuTimeout) {
    clearTimeout(projectsMenuTimeout);
    projectsMenuTimeout = null;
  }
  showProjectsMenu.value = true;
  console.log('showProjectsMenu.value:', showProjectsMenu.value);
}

function hideProjectsSubMenu() {
  console.log('hideProjectsSubMenu called');
  projectsMenuTimeout = setTimeout(() => {
    showProjectsMenu.value = false;
    console.log('Menu hidden after timeout');
  }, 150); // Délai de 150ms avant de fermer
}

function handleClickOutside(e) {
  if (
    menuRef.value && !menuRef.value.contains(e.target) &&
    startBtn.value && !startBtn.value.contains(e.target)
  ) {
    isMenuOpen.value = false;
    showProjectsMenu.value = false;
    if (projectsMenuTimeout) {
      clearTimeout(projectsMenuTimeout);
      projectsMenuTimeout = null;
    }
  }
}

onMounted(() => {
  document.addEventListener('mousedown', handleClickOutside);
});
onBeforeUnmount(() => {
  document.removeEventListener('mousedown', handleClickOutside);
});
</script>

<template>
  <!-- BARRE DU BAS -->
  <div class="w-full h-16 fixed bottom-0 flex items-center bg-windows-light-gray p-4 justify-between">
    <div class="flex items-center gap-3">
      <div
        class="border-2 py-2 px-3 border-b-windows-dark-gray border-r-windows-dark-gray border-t-white border-l-white cursor-pointer active:border-b-white active:border-r-white active:border-t-windows-dark-gray active:border-l-windows-dark-gray"
        @click="toggleMenu"
        ref="startBtn"
      >
        <img src="/icons/start-button.png" alt="Icon Start de Windows 98" class="w-20" />
      </div>
      <div class="h-10 w-[2px] bg-white shadow-[2px_0_0_0_#808080] mx-2"></div>
    </div>
    <div class="border-2 border-t-windows-dark-gray border-l-windows-dark-gray border-r-white border-b-white py-2 px-4">
      {{ getTime }}
    </div>
  </div>

  <!-- MENU PRINCIPAL WINDOWS -->
  <div
    class="w-80 h-96 bg-windows-light-gray border-2 border-white border-b-windows-dark-gray border-r-windows-dark-gray fixed bottom-16 left-1 flex z-50"
    v-if="isMenuOpen"
    ref="menuRef"
  >
    <!-- Colonne 1 : barre bleue verticale -->
    <div class="bg-windows-blue flex items-end pb-3 justify-center w-10">
      <span class="[writing-mode:vertical-rl] [text-orientation:sideways] text-white font-bold text-lg mt-2 rotate-180"
        >Windows 98</span
      >
    </div>

    <!-- Colonne 2 : liens -->
    <div class="flex-1">
      <nav class="flex flex-col p-3 text-lg">
        <a href="" class="flex items-center">
          <img src="/public/icons/help-book.png" alt="" class="w-12" />
          À Propos
        </a>
        <div class="h-0.5 w-5/6 bg-white shadow-[0_2px_0_0_#808080] mx-2"></div>

        <!-- LIEN PROJETS AVEC SOUS-MENU -->
        <div
          class="relative flex items-center cursor-pointer"
          @mouseenter="showProjectsSubMenu"
          @mouseleave="hideProjectsSubMenu"
        >
          <div class="flex items-center w-full justify-between select-none">
            <div class="flex items-center">
              <img src="/public/icons/directory-open.png" alt="" class="w-12" />
              Projets
            </div>
            <span>&gt;</span>
          </div>
          
          <!-- ZONE DE PONT INVISIBLE -->
          <div
            v-if="showProjectsMenu"
            class="absolute left-full top-0 w-2 h-full z-40"
            @mouseenter="showProjectsSubMenu"
            @mouseleave="hideProjectsSubMenu"
          ></div>
          
          <!-- SOUS-MENU -->
          <div
            v-if="showProjectsMenu"
            class="absolute left-full top-0 ml-2 w-48 bg-windows-light-gray border-2 border-white border-b-windows-dark-gray border-r-windows-dark-gray shadow-xl z-50"
            @mouseenter="showProjectsSubMenu"
            @mouseleave="hideProjectsSubMenu"
          >
            <ul>
              <li
                v-for="project in projects"
                :key="project.id"
                class="px-4 py-2 hover:bg-windows-blue hover:text-white cursor-pointer"
              >
                <a :href="project.href" class="block w-full h-full">{{ project.name }}</a>
              </li>
            </ul>
          </div>
        </div>

        <a href="" class="flex items-center gap-2">
          <img src="/public/icons//outlook.png" alt="" class="w-8 ml-2" />
          Contact
        </a>
      </nav>
    </div>
  </div>
</template>
