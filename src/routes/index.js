import DesiresPage from "@/views/DesiresPage.vue"
import VibesPage from "@/views/VibesPage.vue"
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
]

  const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;