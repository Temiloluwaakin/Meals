<template>
    <div>
        <h1>Meals by Letter</h1>
        
        <div class="flex gap-1 justify-center">
            <router-link 
                :to="{name: 'byLetter', params: {letter}}" 
                v-for="letter of letters" 
                :key="letter"
            >
                <pre class="bg-red-100 p-2">{{  letter }}</pre>
                
            </router-link>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
            <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
        </div>
        
    </div>
</template>

<script setup>
import { computed, onMounted, watch} from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';


const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const meals = computed(() => store.state.mealsByLetter);


//we can use this: watch the route and use the below 
watch(route, () => {
    store.dispatch('searchMealsByLetter', route.params.letter)
})

onMounted(() => {
    if (route.params.letter) {
        store.dispatch('searchMealsByLetter', route.params.letter);
    }
})


//instead of this: using click in the letter and using the function to search if the path is there
/*
@click="searchMealsByLetter(letter)"
function searchMealsByLetter(letter) {
    store.dispatch('searchMealsByLetter', letter)//dispatch will call action of the store
}

onMounted(() => { 
    const letter = route.params.letter
    if (letter) {
        searchMealsByLetter(letter)
    }
})*/


</script>