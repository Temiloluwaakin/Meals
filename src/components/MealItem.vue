<template>
    <div class="bg-white shadow rounded-xl">
        <router-link :to="{name: 'mealDetails', params:{ id: meal.idMeal }}">
            <img 
                :src="meal.strMealThumb" 
                :alt="meal.strMeal" 
                class="rounded-t-xl w-full hover:scale-95 transition h-48 object-cover"
            >
        </router-link>
        <div class="p-3">
            <h3 class="p-3 font-semibold">{{ meal.strMeal }}</h3>
            <p class="mb-5">
                {{ truncateWords(meal.strInstructions, 20) }}
            </p>
            <div class="flex items-center justify-between">
                <YoutubeButton :href="meal.strYoutube">Youtube</YoutubeButton>
            </div>
        </div>
        
    </div>
</template>


<script setup>
import { truncateWords } from '../filters';
import YoutubeButton from './YoutubeButton.vue';


const { meal } = defineProps({
    meal: {
        required: true,
        type: Object
    }
})

</script>