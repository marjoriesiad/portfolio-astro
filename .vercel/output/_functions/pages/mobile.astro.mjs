import { e as createComponent, f as createAstro, k as renderHead, l as renderSlot, r as renderTemplate, n as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_fHgpVean.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
/* empty css                                  */
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$MobileLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$MobileLayout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="fr"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>${title}</title>${renderHead()}</head> <body class="bg-windows-blue text-white min-h-screen flex items-center justify-center"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "/Users/marjorie/Desktop/Projets/portfolio/src/layouts/MobileLayout.astro", void 0);

const $$Astro = createAstro();
const $$Mobile = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Mobile;
  if (Astro2.request.headers.get("user-agent")) {
    const ua = Astro2.request.headers.get("user-agent") || "";
    const isMobile = /Mobile|Android|iP(hone|od|ad)/i.test(ua);
    if (!isMobile) {
      return Astro2.redirect("/");
    }
  }
  return renderTemplate`${renderComponent($$result, "MobileLayout", $$MobileLayout, { "title": "Erreur Mobile", "data-astro-cid-tzi6dhhv": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="w-full max-w-xl p-6 font-mono text-[clamp(12px,4vw,18px)] leading-relaxed select-none" data-astro-cid-tzi6dhhv> <div class="flex flex-col items-center gap-2 mb-8" data-astro-cid-tzi6dhhv> <span class="px-4 py-1 bg-windows-dark-gray text-lg font-bold tracking-widest" data-astro-cid-tzi6dhhv>Windows</span> </div> <p class="mb-5" data-astro-cid-tzi6dhhv>Une erreur s'est produite. Pour continuer :</p> <ul class="mb-5 pl-6 list-disc" data-astro-cid-tzi6dhhv> <li data-astro-cid-tzi6dhhv>
Appuyez sur Entrée pour retourner à Windows,
<span class="italic text-gray-200/70" data-astro-cid-tzi6dhhv>(fonctionnalité non disponible sur mobile)</span> </li> <li data-astro-cid-tzi6dhhv>
Appuyez sur CTRL+ALT+SUPPR pour redémarrer votre appareil,
<br data-astro-cid-tzi6dhhv> <span class="italic text-gray-200/70" data-astro-cid-tzi6dhhv>ou essayez avec un vrai ordinateur.</span> </li> </ul> <p class="mb-5" data-astro-cid-tzi6dhhv> <span class="block" data-astro-cid-tzi6dhhv>Ce site web n'est <b data-astro-cid-tzi6dhhv>pas disponible</b> sur mobile.</span> <span class="block mt-2" data-astro-cid-tzi6dhhv>Veuillez utiliser un ordinateur pour accéder à l'expérience complète.</span> </p> <div class="mb-8" data-astro-cid-tzi6dhhv> <span class="block" data-astro-cid-tzi6dhhv>Error: <span class="font-bold" data-astro-cid-tzi6dhhv>0E : 016F : BFF9B3D4</span></span> <span class="block text-gray-200/70 text-xs mt-1" data-astro-cid-tzi6dhhv>mobile_not_supported_exception</span> </div> <div class="animate-pulse" data-astro-cid-tzi6dhhv> <span class="border border-white px-2 py-1 rounded" data-astro-cid-tzi6dhhv>
Appuyez sur une touche pour continuer <span class="animate-blink" data-astro-cid-tzi6dhhv>_</span> </span> </div>  </main> ` })}`;
}, "/Users/marjorie/Desktop/Projets/portfolio/src/pages/mobile.astro", void 0);

const $$file = "/Users/marjorie/Desktop/Projets/portfolio/src/pages/mobile.astro";
const $$url = "/mobile";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Mobile,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
