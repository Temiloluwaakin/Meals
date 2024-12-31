import { createRouter, createWebHistory } from "vue-router";
import Home from "../pages/Home.vue";
import MealsByName from "../pages/MealsByName.vue";
import MealsByLetter from "../pages/MealsByLetter.vue";
import MealsByIngredients from "../pages/MealsByIngredients.vue";
import DefaultLayout from "../components/DefaultLayout.vue";
import DiffLayout from "../components/DiffLayout.vue";
import DiffPage from "../pages/DiffPage.vue";
import MealDetails from "../pages/MealDetails.vue";
import Ingredients from "../pages/Ingredients.vue";

const routes = [
    {
        path: '/',
        component: DefaultLayout,
        children: [
            {
                path: '/',
                name: 'home',
                component: Home,
            },
            {
                path: '/by-name/:name?',
                name: 'byName',
                component: MealsByName,
            },
            {
                path: '/by-letter/:letter?',
                name: 'byLetter',
                component: MealsByLetter,
            },
            {
                path: '/ingredients',
                name: 'ingredients',
                component:  Ingredients,
            },
            {
                path: '/by-ingredient/:ingredient?',
                name: 'byIngredient',
                component: MealsByIngredients,
            },
            {
                path: '/meal/:id',
                name: 'mealDetails',
                component: MealDetails,
            },
        ]
    },
    {
        path: '/',
        component: DiffLayout,
        children: [
            {
                path: '/diffpage',
                name: 'diipage',
                component: DiffPage,
            },
        ]
    }
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router