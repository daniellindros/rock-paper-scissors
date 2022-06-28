import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import NewGameView from '@/views/NewGameView.vue';
import GameView from '@/views/GameView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/new-game',
      name: 'newGame',
      component: NewGameView,
    },
    {
      path: '/game/:id',
      name: 'game',
      component: GameView,
      props: true,
    },
  ],
});

export default router;
