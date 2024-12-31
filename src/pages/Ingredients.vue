<template>
    <div class="p-8">
        <div>
            <h1 class="text-4xl font-bold mb-4">Ingredients</h1>
        </div>
        <input 
            type="text"
            v-model="keyword"
            class="border border-red-800 w-full rounded h-10" 
            placeholder="search for ingredients"
        />
        <div class="grid-cols-3 md:grid-cols-6 gap-5 p-8">
            <router-link 
                :to="{name: 'byIngredient', params:{ingredient: ingredient.strIngredient}}"
                v-for="ingredient of computedIngredients" 
                :key="ingredient.idIngredient"
                class="block bg-white rounded p-3 mb-3 shadow"
            >
                <pre class="font-bold text-[20px]">{{ ingredient.strIngredient }}</pre>
                
            </router-link>
        </div>
        
    </div>
</template>



<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';


const keyword = ref('')
const ingredients = computed(() => store.state.Ingredients)//access the data from store state
const computedIngredients = computed(() => {
    if (!computedIngredients) return ingredients;
    return ingredients.value.filter((i) => i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
 })

onMounted(() => {
    store.dispatch('getIngredients')
})

</script>