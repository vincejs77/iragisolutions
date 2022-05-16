<template>
  <div class="font-roboto font-Roboto">
    <div :class="[$store.state.checkDarkMode ? 'darkMode' : 'lightMode', 'relative']">
      <div
        :class="[
          scrollPosition < 100 ? 'normal--menu' : 'small--menu',
          '--transition w-full',
        ]"
      >
        <NavBar />
      </div>
    </div>
    <main class="mt-20 sm:mt-28">
      <router-view />
    </main>

    <FooTer />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import FooTer from "./components/FooTer.vue";
import store from "@/store/store";
import { defineComponent, onBeforeMount, onUnmounted } from "vue";

import { ref } from "vue";

export default defineComponent({
  name: "App",
  components: { NavBar, FooTer },
  setup() {
    var checkDarkMode = ref(store.state.checkDarkMode);

    console.log("=============", checkDarkMode.value);

    var scrollPosition = ref(0);

    function handleScroll(event) {
      scrollPosition.value = window.scrollY;
      console.log(scrollPosition.value, event);
    }

    onBeforeMount(() => {
      window.addEventListener("scroll", handleScroll);
    });

    onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    return {
      checkDarkMode,
      handleScroll,
      scrollPosition,
    };
  },
});
</script>
