<template>
    <div class="p-8">
        

        <div class="grid grid-cols-2 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        <div v-if="!meals.length" class="justify-center text gray">
            There are no meals
        </div>
    </div>
</template>

<script setup>
import { computed, onMounted } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';

const route = useRoute();
const meals = computed(() => store.state.mealsByIngredient)//access the data from store state


onMounted(() => {
    if (route.params.ingredient) {
        store.dispatch('searchMealsByIngredient', route.params.ingredient);
    }
})

</script>