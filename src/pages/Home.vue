<template>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
</template>



<script setup>

import { onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import MealItem from '../components/MealItem.vue';


const meals = ref([])

onMounted(async () => {
    for (let i = 0; i < 10; i++) {
        axiosClient
            .get('random.php')
            .then(({ data }) => meals.value.push(data.meals[0]));
    }
})

</script> 