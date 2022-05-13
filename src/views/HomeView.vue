<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script>
// @ is an alias to /src
import store from "@/store/store";

export default {
  name: "HomeView",
  components: {},
  setup() {
    console.log("Is store data", store.state.checkDarkMode);
    return {};
  },
};
</script>
