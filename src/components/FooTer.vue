<template>
  <div id="footer--section" class="w-full">
    <section class="asFooter">
      <div class="max-w-6xl mx-auto px-3 md:px-6 sm:py-24 py-16">
        <div class="grid md:grid-cols-4 w-full">
          <div class="col-span-2 sm:flex sm:justify-between">
            <div class="col-span-1">
              <a href="https://vincejs77.github.io/landing001/">
                <img
                  src="https://vincejs77.github.io/landing001/public/img/logo_gray.svg"
                  alt="IRAGI SOLUTIONS"
                  width="120px"
                  class="-mt-4"
                />
              </a>
            </div>
            <div class="col-span-1 sm:mt-0 mt-8">
              <h3 class="font-semibold">
                Nos réseaux sociaux <br />
                <p class="h-1 w-6 mt-2 bg-cyellow"></p>
              </h3>
              <ul class="flex justify-left mt-6 space-x-8">
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://vincejs77.github.io/landing001/public/img/socials/insta.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://vincejs77.github.io/landing001/public/img/socials/tw.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://vincejs77.github.io/landing001/public/img/socials/fb.svg"
                      alt=""
                    />
                  </a>
                </li>
                <li>
                  <a href="http://" target="_blank" rel="noopener noreferrer">
                    <img
                      src="https://vincejs77.github.io/landing001/public/img/socials/in.svg"
                      alt=""
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-span-2 sm:flex sm:justify-between sm:ml-16">
            <div class="d col-span-1 sm:ml-16 sm:mt-0 mt-8">
              <div>
                <h3 class="font-semibold">
                  Liens utiles <br />
                  <p class="h-1 w-6 mt-2 bg-cyellow"></p>
                </h3>
                <ul class="mt-4 space-y-2">
                  <li>
                    <router-link to="/services" class="cnav--ul__li"
                      >Nos services</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/#sect3" class="cnav--ul__li"
                      >Nos partenaires</router-link
                    >
                  </li>
                </ul>
              </div>
            </div>

            <div class="d col-span-1 md:ml-16 sm:mt-0 mt-8 hidden sm:block">
              <div>
                <h3 class="font-semibold">
                  Infos de contact <br />
                  <p class="h-1 w-6 mt-2 bg-cyellow"></p>
                </h3>
                <ul class="mt-4 space-y-2">
                  <li><a href="" class="cnav--ul__li">email@iragisolutions.com</a></li>
                  <li><a href="" class="cnav--ul__li">+243 xx xxxx xxx</a></li>
                  <li><a href="" class="cnav--ul__li">Bukavu - RDC</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="bg-cgray-100">
      <div class="relative max-w-6xl mx-auto px-3 md:px-6 py-8">
        <div class="absolute -top-4 right-3 sm:right-6">
          <button class="text-cblack bg-cyellow p-2" onClick="window.scrollTo(0, 0)">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M5 15l7-7 7 7" />
            </svg>
          </button>
        </div>
        <div class="mt-0">
          <p>
            <span class="text- text-cgray-800 text-sm">
              © Copyright 2022 Iragi Solution. All Rights Reserved. Designed by
              <span class="font-medium underline text-cblack">
                <a
                  href="https://www.sighteddesign.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  >Sighted Design</a
                >
              </span>
            </span>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "FooTer",

  setup() {
    return {};
  },
});
</script>
