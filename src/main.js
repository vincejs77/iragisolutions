import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "@/store/store";

import CtA from "./components/CtA.vue";

const app = createApp(App);

app.use(router);
app.use(store);
app.component("CtA", CtA);
app.mount("#app");
