<template>
  <div class="home">
    <section class="bg-cblack w-full" id="sect1">
      <div class="max-w-6xl mx-auto pt-16 pb-16 sm:pb-24 px-3 sm:px-6">
        <div class="lg:flex lg:justify-between items-center">
          <div class="max-w-[400px]">
            <h1 class="ctitle--h1 md:text-3xl lg:text-4xl xl:text-4xl text-white">
              “Notre fierté est de faire en sorte que le monde vous voit sous votre
              meilleur

              <span class="relative inline-block">
                <span class="relative z-10 p-4 text-cyellow">jour.</span>
                <svg
                  class="w-full fill-current opacity-50 z-0 rotate-12 -mt-2 text-yellow-300 absolute right-0 top-0"
                  viewBox="0 0 386 189"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M91.315 32.349c-43.9 18.5-66.3 38.1-72.8 63.8-1.3 5.3-2.9 8.5-6.1 12.5-19.2 24.1-15.9 50.4 8.3 66.5 25.5 16.9 97.2 17.9 174 2.4 11-2.2 28.8-5.4 39.5-7 133.3-20.1 177.8-79 137.4-119.6-24.6-24.8-60.9-35.4-121.4-35.8-57.6-.3-134.1 23.6-189.2 56.5-14.4 8.6-16.1 5.2-11.9.8 14.8-15.6 54.7-35.9 96.4-48.2 37.2-11 54.4-15.5 82.3-15.7 10.9-.1 17.2-7.6.4-8.5-17.8-.8-89.2 12.2-136.9 32.3Zm268.1 74.9c-17.7 22.2-58.5 38.7-124.6 50.2-220.9 38.4-203.5-44.7-203.5-44.7.2-.1 69.7-68.8 206.5-85.5 67.3-8.3 174.6 13.5 121.6 80Zm-263.8 67.4c22.8 3.1-4 3.7-37.8.9-63-5.2-44.8-41.5-39-47.5 18.8 27.1 44.9 42.3 76.8 46.6Z"
                  ></path>
                </svg>
              </span>
              ”
            </h1>
            <p class="text-cwhite mt-8">
              Vous aider à simplifier la vie au maximum est notre objectif en vous
              proposant des services de conseil et d’assistance technique
            </p>
            <div class="mt-8">
              <a href="#_" class="btn--primary btn--primary__y lg:py-3 lg:px-8"
                >Contactez-nous</a
              >
              <a href="#_" class="btn--segondary btn--segondary__y lg:py-3 lg:px-8">
                <div class="flex justify-center">
                  <span>En savoir plus</span>
                  <span class="my-auto ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div class="md:mt-0 mt-8">
            <img
              src="/img/contents/hero1.svg"
              alt="IRAGI SERVICES hero1.svg"
              class="w-[700px] lg:w-[1000px] md:ml-16"
            />
          </div>
        </div>
      </div>
    </section>
    <section class="bg-cgreen w-full" id="sect2">
      <div class="max-w-6xl mx-auto pt-16 pb-24 px-3 sm:px-6">
        <div class="flex justify-center">
          <h1 class="ctitle--h1 md:text-3xl lg:text-4xl xl:text-4xl text-white">
            Nos services
          </h1>
        </div>
        <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12">
          <div class="cbox--services">
            <img
              src="/img/service1.svg"
              alt="Conseil en communication"
              class="sm:w-[75px] w-[80px] mx-auto"
            />
            <p class="mt-6 text-xl font-bold">Conseil en communication</p>
            <div class="flex justify-center">
              <router-link
                to="/services"
                class="btn--segondary hover:underline opacity-80 lg:py-3 lg:px-8"
              >
                <div class="flex justify-center">
                  <span>En savoir plus</span>
                  <span class="my-auto ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="cbox--services">
            <img
              src="/img/service2.svg"
              alt="Conseil en communication"
              class="sm:w-[120px] w-[100px] mx-auto"
            />
            <p class="mt-6 text-xl font-bold">Facilitationd’affaires</p>
            <div class="flex justify-center">
              <router-link
                to="/services"
                class="btn--segondary hover:underline opacity-80 lg:py-3 lg:px-8"
              >
                <div class="flex justify-center">
                  <span>En savoir plus</span>
                  <span class="my-auto ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </router-link>
            </div>
          </div>
          <div class="cbox--services">
            <img
              src="/img/service3.svg"
              alt="Conseil en communication"
              class="sm:w-[67px] w-[100px] mx-auto"
            />
            <p class="mt-6 text-xl font-bold">Gestion et renforcement des compétences</p>
            <div class="flex justify-center">
              <router-link
                to="/services"
                class="btn--segondary hover:underline opacity-80 lg:py-3 lg:px-8"
              >
                <div class="flex justify-center">
                  <span>En savoir plus</span>
                  <span class="my-auto ml-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="sect3">
      <div class="mw max-w-6xl mx-auto px-3 sm:px-6 py-16 sm:py-24">
        <div
          class="flex flex-col items-start mx-auto space-y-20 lg:space-y-0 lg:flex-row"
        >
          <div
            class="flex flex-col justify-center flex-shrink-0 w-full h-full max-w-lg space-y-5 text-gray-800 lg:max-w-none lg:w-5/12 xl:w-6/12"
          >
            <div class="max-w-sm">
              <h1 class="ctitle--h1 md:text-3xl lg:text-4xl xl:text-4xl">
                Ils nous ont fait confiance
              </h1>
              <p class="tex text-cgray-900">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ddelectus
                aliquid? Cum minus excepturi possimus. Quaerat libero eaque voluptates.
              </p>
            </div>
          </div>

          <div class="lg:max-w-none lg:w-7/12 lg:pl-8 xl:w-6/12">
            <div
              class="w-full -mt-12 grid grid-cols-3 text-gray-400 gap-x-2 sm:gap-x-12 gap-y-6"
            >
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-20 sm:h-20"
                  src="/img/partners/C1.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-24 sm:h-28"
                  src="/img/partners/C2.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-32 sm:h-32"
                  src="/img/partners/C3.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-8 sm:h-20"
                  src="/img/partners/C4.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-8 sm:h-20"
                  src="/img/partners/C5.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-8 sm:h-12"
                  src="/img/partners/C6.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-24 sm:h-28"
                  src="/img/partners/C7.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-6 sm:h-16"
                  src="/img/partners/C8.png"
                  alt=""
                />
              </a>
              <a href="#_" class="flex items-center justify-center hover:text-gray-600">
                <img
                  class="w-auto fill-current h-8 sm:h-16"
                  src="/img/partners/C9.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Section 1 -->
    <section class="relative w-full bg-white overflow-x-hidden">
      <div class="absolute inset-0 w-full h-full opacity-25 sm:opacity-50">
        <svg
          class="absolute top-0 right-0 w-auto h-full opacity-75"
          viewBox="0 0 150 350"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path d="M0 0h50v50H0z"></path>
            <path d="M0 0h50v50H0z"></path>
            <path d="M0 0h150v150H0z"></path>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g>
              <g fill="#DEB9FF" fill-rule="nonzero">
                <path
                  d="M25 25c13.807 0 25-11.193 25-25H0c0 13.807 11.193 25 25 25z"
                ></path>
              </g>
              <g transform="translate(0 100)">
                <mask fill="#fff"><use xlink:href="#path-1"></use></mask>
                <path
                  d="M25 0c13.807 0 25 11.193 25 25S38.807 50 25 50H0V0h25z"
                  fill="#F9C7FF"
                  mask="url(#mask-2)"
                ></path>
              </g>
              <g transform="translate(100 100)">
                <mask fill="#fff"><use xlink:href="#path-3"></use></mask>
                <path
                  d="M25 25c13.807 0 25-11.193 25-25H0c0 13.807 11.193 25 25 25z"
                  fill="#93FFFD"
                  fill-rule="nonzero"
                  mask="url(#mask-4)"
                ></path>
              </g>
              <g transform="translate(0 200)">
                <mask fill="#fff"><use xlink:href="#path-5"></use></mask>
                <path
                  d="M75 75c0 41.421 33.579 75 75 75V0c-41.421 0-75 33.579-75 75z"
                  fill="#93FFFD"
                  fill-rule="nonzero"
                  mask="url(#mask-6)"
                ></path>
              </g>
            </g>
          </g>
        </svg>
        <svg
          class="absolute top-0 left-0 w-auto h-full opacity-30"
          viewBox="0 0 150 150"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
        >
          <defs>
            <path d="M0 0h50v50H0z"></path>
            <path d="M0 0h50v50H0z"></path>
          </defs>
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="matrix(-1 0 0 1 150 0)">
              <g transform="translate(0 25)" fill="#93FFFD" fill-rule="nonzero">
                <path d="M25 0C11.193 0 0 11.193 0 25h50C50 11.193 38.807 0 25 0z"></path>
              </g>
              <path
                d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0h25v50H25z"
                transform="translate(100)"
                fill="#DEB9FF"
              ></path>
              <g transform="translate(0 100)">
                <mask fill="#fff"><use xlink:href="#path-1"></use></mask>
                <path
                  d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0h25v50H25z"
                  fill="#B3EBFF"
                  mask="url(#mask-2)"
                ></path>
              </g>
              <g transform="translate(100 200)">
                <mask fill="#fff"><use xlink:href="#path-3"></use></mask>
                <path
                  d="M25 50C11.193 50 0 38.807 0 25S11.193 0 25 0h25v50H25z"
                  fill="#93FFFD"
                  mask="url(#mask-4)"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div
        class="relative w-full px-8 pt-16 pb-16 ml-auto mr-auto bg-top bg-cover sm:max-w-xl md:max-w-full md:px-24 lg:px-8 lg:py-24 lg:pb-32"
      >
        <div
          class="max-w-xl mb-10 ml-auto mr-auto bg-top bg-cover md:mx-auto sm:text-center lg:max-w-2xl md:mb-12"
        >
          <p
            class="inline-block px-4 py-2 mb-4 text-xs font-semibold tracking-wider uppercase bg-cgreen rounded-full text-white"
          >
            Notre équipe
          </p>
          <div
            class="max-w-2xl mb-6 ml-auto mr-auto font-sans tracking-tight text-gray-900 bg-top bg-cover sm:text-4xl md:mx-auto"
          >
            <p
              class="inline max-w-lg font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"
            >
              Notre formidable équipe d'individus uniques
            </p>
          </div>
          <p class="text-base text-gray-700 md:text-lg">
            Unique et qui se démarquant de la concurrence. Nous sommes une équipe de
            personnes concentrées et talentueuses.
          </p>
        </div>
        <div
          class="grid gap-10 row-gap-8 ml-auto mr-auto sm:row-gap-10 lg:max-w-screen-lg sm:grid-cols-2 lg:grid-cols-3"
        >
          <div class="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1628260412297-a3377e45006f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              class="object-cover w-20 h-20 mr-4 rounded-full shadow"
            />
            <div class="relative">
              <p class="text-lg font-bold text-gray-800">Iragi Solutions</p>
              <p class="text-sm text-gray-600">CEO &amp; Founder</p>
            </div>
          </div>
          <div class="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1637858868799-7f26a0640eb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              class="object-cover w-20 h-20 mr-4 rounded-full shadow"
            />
            <div class="relative">
              <p class="text-lg font-bold text-gray-800">Joe Mushamuka</p>
              <p class="text-sm text-gray-600">Co-Founder</p>
            </div>
          </div>
          <div class="flex items-center">
            <img
              src="https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"
              class="object-cover w-20 h-20 mr-4 rounded-full shadow"
            />
            <div class="relative">
              <p class="text-lg font-bold text-gray-800">Vin Zobozo</p>
              <p class="text-sm text-gray-600">Marketing Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <CtA />
  </div>
</template>

<script>
import { defineComponent, onBeforeMount, onUnmounted } from "vue";

import store from "@/store/store";
import CtA from "../components/CtA.vue";

export default defineComponent({
  name: "HomeView",
  components: { CtA },
  setup() {
    onBeforeMount(() => {
      store.state.checkDarkMode = true;
      console.log(store.state.checkDarkMode);
    });

    onUnmounted(() => {
      store.state.checkDarkMode = false;
    });
    return {};
  },
});
</script>
