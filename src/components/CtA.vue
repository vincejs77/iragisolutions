<template>
  <div>
    <!-- Section 1 -->
    <section class="">
      <div class="mx-auto max-w-6xl px-3 sm:px-6">
        <div
          class="irBg after:right-8 after:bottom-4 sm:after:right-16 sm:after:bottom-8 rounded-md px-8 py-8 sm:px-16 sm:py-16 flex flex-col items-start justify-between lg:flex-row"
        >
          <div class="relative">
            <h2 class="text-2xl font-extrabold text-white xl:text-3xl">
              Êtes-vous prêt à améliorer votre business ?
            </h2>
            <p class="mt-6 sm:mt-4 sm:text-xl text-cwhite">
              N'hésitez pas à nous contacter, nous sommes disponibles à tout moement pour
              un éventuel échange
            </p>
          </div>
          <div class="md:mt-0 mt-6">
            <router-link
              to="/contacts"
              class="btn--primary btn--primary__y lg:py-3 lg:px-8 truncate"
              >Contactez-nous</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "CtA",
  setup() {},
};
</script>
