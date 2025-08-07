import { e as createComponent, f as createAstro, k as renderHead, l as renderSlot, n as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_fHgpVean.mjs';
import 'kleur/colors';
/* empty css                                 */
import { ref, onMounted, onBeforeUnmount, useSSRContext } from 'vue';
import { ssrInterpolate, ssrRenderList, ssrRenderAttr } from 'vue/server-renderer';
export { renderers } from '../renderers.mjs';

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const _sfc_main = {
  __name: 'Footer',
  setup(__props, { expose: __expose }) {
  __expose();

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

const __returned__ = { now, hours, minutes, getTime, isMenuOpen, menuRef, startBtn, showProjectsMenu, get projectsMenuTimeout() { return projectsMenuTimeout }, set projectsMenuTimeout(v) { projectsMenuTimeout = v; }, projects, toggleMenu, showProjectsSubMenu, hideProjectsSubMenu, handleClickOutside, onBeforeUnmount, onMounted, ref };
Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true });
return __returned__
}

};

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<!--[--><div class="w-full h-16 fixed bottom-0 flex items-center bg-windows-light-gray p-4 justify-between"><div class="flex items-center gap-3"><div class="border-2 py-2 px-3 border-b-windows-dark-gray border-r-windows-dark-gray border-t-white border-l-white cursor-pointer active:border-b-white active:border-r-white active:border-t-windows-dark-gray active:border-l-windows-dark-gray"><img src="/icons/start-button.png" alt="Icon Start de Windows 98" class="w-20"></div><div class="h-10 w-[2px] bg-white shadow-[2px_0_0_0_#808080] mx-2"></div></div><div class="border-2 border-t-windows-dark-gray border-l-windows-dark-gray border-r-white border-b-white py-2 px-4">${ssrInterpolate($setup.getTime)}</div></div>`);
  if ($setup.isMenuOpen) {
    _push(`<div class="w-80 h-96 bg-windows-light-gray border-2 border-white border-b-windows-dark-gray border-r-windows-dark-gray fixed bottom-16 left-1 flex z-50"><div class="bg-windows-blue flex items-end pb-3 justify-center w-10"><span class="[writing-mode:vertical-rl] [text-orientation:sideways] text-white font-bold text-lg mt-2 rotate-180">Windows 98</span></div><div class="flex-1"><nav class="flex flex-col p-3 text-lg"><a href="" class="flex items-center"><img src="/icons/help-book.png" alt="" class="w-12"> À Propos </a><div class="h-0.5 w-5/6 bg-white shadow-[0_2px_0_0_#808080] mx-2"></div><div class="relative flex items-center cursor-pointer"><div class="flex items-center w-full justify-between select-none"><div class="flex items-center"><img src="/icons/directory-open.png" alt="" class="w-12"> Projets </div><span>&gt;</span></div>`);
    if ($setup.showProjectsMenu) {
      _push(`<div class="absolute left-full top-0 w-2 h-full z-40"></div>`);
    } else {
      _push(`<!---->`);
    }
    if ($setup.showProjectsMenu) {
      _push(`<div class="absolute left-full top-0 ml-2 w-48 bg-windows-light-gray border-2 border-white border-b-windows-dark-gray border-r-windows-dark-gray shadow-xl z-50"><ul><!--[-->`);
      ssrRenderList($setup.projects, (project) => {
        _push(`<li class="px-4 py-2 hover:bg-windows-blue hover:text-white cursor-pointer"><a${
          ssrRenderAttr("href", project.href)
        } class="block w-full h-full">${
          ssrInterpolate(project.name)
        }</a></li>`);
      });
      _push(`<!--]--></ul></div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</div><a href="" class="flex items-center gap-2"><img src="/icons//outlook.png" alt="" class="w-8 ml-2"> Contact </a></nav></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : undefined
};
const Footer = /*#__PURE__*/_export_sfc(_sfc_main, [['ssrRender',_sfc_ssrRender]]);

const $$Astro$1 = createAstro();
const $$MainLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MainLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="bg-windows-teal"> ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", Footer, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/marjorie/Desktop/Projets/portfolio/src/components/Footer.vue", "client:component-export": "default" })} </body></html>`;
}, "/Users/marjorie/Desktop/Projets/portfolio/src/layouts/MainLayout.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  if (Astro2.request.headers.get("user-agent")) {
    const ua = Astro2.request.headers.get("user-agent") || "";
    const isMobile = /Mobile|Android|iP(hone|od|ad)/i.test(ua);
    if (isMobile) {
      return Astro2.redirect("/mobile");
    }
  }
  return renderTemplate`${renderComponent($$result, "MainLayout", $$MainLayout, { "title": "Marjorie SIAD" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<p>Main</p> ` })}`;
}, "/Users/marjorie/Desktop/Projets/portfolio/src/pages/index.astro", void 0);

const $$file = "/Users/marjorie/Desktop/Projets/portfolio/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
