import DesiresPage from "@/views/DesiresPage.vue"
import VibesPage from "@/views/VibesPage.vue"
import ControllerPage from "@/views/ControllerPage.vue"
import SliderPage from "@/views/SliderPage.vue"
import { createRouter, createWebHistory } from "vue-router";

const routes = [
    // {
    //     path: '/',
    //     redirect: { name: 'MainMenu' }
    //   },
    // {
    //   path: "/awszilla",
    //   name: "MainMenu",
    //   component: MainMenu
    // },
    {
        path: "/godzillastem/desires",
        name: "DesiresPage",
        component: DesiresPage
      },
      {
        path: "/godzillastem/vibes",
        name: "VibesPage",
        component: VibesPage
      },
      {
        path: "/godzillastem/controller/generic",
        name: "ControllerPageGeneric",
        component: ControllerPage,
      },
      {
        path: "/godzillastem/controller/xbox",
        name: "ControllerPageXbox",
        component: ControllerPage,
      },
      {
        path: "/godzillastem/controller/ps2",
        name: "ControllerPagePS2",
        component: ControllerPage,
      },
      {
        path: "/godzillastem/sliderdemo",
        name: "SliderPage",
        component: SliderPage,
      },

]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;