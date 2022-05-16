<template>
  <div id="nav--section" class="fixed w-full top-0 left-0 right-0">
    <section class="w-full" x-data="{ showMenu: false }">
      <nav
        class="box-border flex items-center justify-between w-full h-35 px-3 md:px-6 mx-auto my-0 py-4 leading-6 sm:max-w-6xl"
      >
        <router-link
          @click="showMenu = !showMenu"
          to="/"
          class="flex --transition items-center font-medium text-gray-900 lg:w-auto title-font lg:items-center lg:justify-center md:mb-0"
        >
          <span class="text-xl --logo font-black leading-none text-gray-900 select-none">
            <img
              src="/img/logo.png"
              alt="IRAGI SOLUTIONS"
              class="sm:w-[160px] w-[120px] --light --transition"
            />
            <img
              src="/img/logo_white.svg"
              alt="IRAGI SOLUTIONS"
              class="sm:w-[160px] w-[120px] --dark --transition"
            />
          </span>
        </router-link>
        <div
          class="relative flex list-none lg:block --transition"
          :class="{ 'flex fixed': showMenu, hidden: !showMenu }"
        >
          <ul
            class="cnav--ul transition lg:space-x-8 lg:static lg:w-auto lg:flex lg:space-y-0 lg:mt-0"
          >
            <li class="box-border w-full my-3 text-lg text-center lg:w-auto">
              <router-link
                to="/services"
                @click="showMenu = !showMenu"
                class="cnav--ul__li"
                >Nos services</router-link
              >
            </li>
            <!-- <li class="box-border w-full my-3 text-lg text-center lg:w-auto">
						<a href="#sect2" class="cnav--ul__li">Nos clients</a>
					</li> -->
            <li class="box-border w-full my-3 text-lg text-center lg:w-auto">
              <a @click="showMenu = !showMenu" href="#sect3" class="cnav--ul__li"
                >Nos partenaires</a
              >
            </li>
            <li class="box-border w-full my-3 text-lg text-center lg:w-auto">
              <router-link
                @click="showMenu = !showMenu"
                to="/contacts"
                class="btn--primary btn--primary__y lg:py-3 lg:px-8"
                >Contactez-nous</router-link
              >
            </li>
          </ul>
        </div>
        <div
          @click="showMenu = !showMenu"
          class="absolute right-0 flex flex-col items-center justify-center w-10 h-10 mr-5 -mt-1 rounded-full cursor-pointer lg:hidden hover:bg-gray-100"
        >
          <svg
            class="w-6 h-6 menu--btn"
            v-if="!showMenu"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
            x-cloak=""
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            class="w-6 h-6 menu--btn"
            v-if="showMenu"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            x-cloak=""
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </nav>
    </section>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavBar",
  setup() {
    var showMenu = ref(false);

    return {
      showMenu,
    };
  },
});
</script>
