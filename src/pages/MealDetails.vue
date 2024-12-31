<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal  }}</h1>
        <img 
            :src="meal.strMealThumb" 
            :alt="strMeal" 
            class="max-w-[100%]"
        >

        <div class="my-3">
            {{ meal.strInstructions }}
        </div>

        <div class="grid grid-cols-2">
            <div>
                <div v-for="(el, ind) of new Array(20)"><!--for every element of new array indices 0-20-->
                    <li v-if="meal[`strIngredient${ind + 1}`]" class="list-none"><!--if meal.strIngredient0+1, 0+2 has value, return it -->
                        {{ind + 1}}. {{ meal[`strIngredient${ind + 1}`] }}
                    </li>
                </div>
            </div>
            <div>
                <div v-for="(el, ind) of new Array(20)"><!--for every element of new array indices 0-20-->
                    <li v-if="meal[`strMeasure${ind + 1}`]" class="list-none"><!--if meal.strMeasure0+1, 0+2 has value, return it -->
                        {{ind + 1}}. {{ meal[`strMeasure${ind + 1}`] }}
                    </li>
                </div>
            </div>

            <div class="mt-4">
                <YoutubeButton :href="meal.strYoutube"> Youtube </YoutubeButton>
                <a 
                    :href="meal.strSource" 
                    target="_blank"
                    class="px-3 py-2 rounded bg-indigo-600 text-white hover:bg-indigo-700 transition-colors"
                >
                    View Original source
                </a>
            </div>

        </div>
        <div class="mt-4">
            <DefaultButton color="secondary" label="hello" tag="a" :href="meal.strSource"/>
        </div>

    </div>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';
import axiosClient from '../axiosClient';
import YoutubeButton from '../components/YoutubeButton.vue';
import DefaultButton from '../components/DefaultButton.vue';

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
        .then(({data}) => {
            meal.value = data.meals[0] || {}
        })
    
})

</script>