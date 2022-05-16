<template>
  <div class="sm:-mt-4">
    <section class="w-full bg-cgray-100 mt-24 sm:mt-32">
      <div
        class="box-border flex-grow w-full mx-auto leading-6 px-3 md:px-6 max-w-6xl sm:py-24 py-16"
      >
        <div
          class="relative w-full leading-6 text-center lg:flex-grow-0 lg:flex-shrink-0"
        >
          <p class="mb-2"><span class="text-cgreen text-sm">./home/services</span></p>
          <h1 class="ctitle--h1 md:text-3xl lg:text-4xl xl:text-4xl">Nos services</h1>
        </div>
      </div>
    </section>

    <section class="w-full bg-cblack-800">
      <div
        class="max-w-6xl mx-auto px-3 md:px-6 py-20 sm:py-28 space-y-8 sm:space-y-16 text-left"
      >
        <div class="md:grid md:grid-cols-4 md:gap-8 w-full">
          <div class="gri col-span-1 flex justify-items-center">
            <img
              src="/img/service1.svg"
              alt="Conseil en communication"
              class="sm:w-[140px] w-[100px]"
            />
          </div>
          <div class="col-span-3 sm:-ml-16">
            <h2 class="text text-cgreen font-extrabold text-2xl mb-4 mt-6 sm:mt-0">
              Falicitation d’affaires
            </h2>
            <p class="text-cgray">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
              eirmod tempor invidunt ut labore et dolore. Stet clita kasd gubergren, no
              sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
              amet, consetetur sadipscing elitr, sed diam nonumy
            </p>
          </div>
        </div>
        <div class="md:grid md:grid-cols-4 md:gap-8 w-full">
          <div class="gri col-span-1 flex justify-items-center md:-m-6">
            <img
              src="/img/service2.svg"
              alt="Conseil en communication"
              class="sm:w-[180px] w-[130px]"
            />
          </div>
          <div class="col-span-3 sm:-ml-16">
            <h2 class="text text-cgreen font-extrabold text-2xl mb-4 mt-6 sm:mt-0">
              Conseil en communication
            </h2>
            <p class="text-cgray">
              De tout ce qui passeeeee ouiiiiiiiii Lorem ipsum dolor sit amet, takimata
              sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
              consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
          </div>
        </div>
        <div class="md:grid md:grid-cols-4 md:gap-8 w-full">
          <div class="gri col-span-1 flex justify-items-center">
            <img
              src="/img/service3.svg"
              alt="Conseil en communication"
              class="sm:w-[130px] w-[110px]"
            />
          </div>
          <div class="col-span-3 sm:-ml-16">
            <h2 class="text text-cgreen font-extrabold text-2xl mb-4 mt-6 sm:mt-0">
              Conseil en communication
            </h2>
            <p class="text-cgray">
              Lorem ipsum dolor sit amet, takimata sanctus est Lorem ipsum dolor de la
              verture de tout ce qui se passe dans la mesure du tout sit amet. Lorem ipsum
              dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
              invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
            </p>
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

export default defineComponent({
  name: "ServicesView",
  setup() {
    onBeforeMount(() => {
      store.state.checkDarkMode = false;
      console.log(store.state.checkDarkMode);
    });

    onUnmounted(() => {
      store.state.checkDarkMode = true;
    });
  },
});
</script>
