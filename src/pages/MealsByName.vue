<template>
    <div class="h-full">
        By Name
    </div>

    <div class="flex p-8">
        <input 
            type="text"
            v-model="keyword"
            class="border border-red-800 w-full rounded h-10" 
            placeholder="search for meal"
            @change="searchMeals"
        >
        <img
            v-if="isSearching"
            :alt="loading"
        />
        <button class="flex items-center h-10 bg-red-400">
            search
        </button>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-5 p-8">
        <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
    <div v-if="!meals.length" class="justify-center text gray">
        There are no meals
    </div>
    
</template>





<script setup>
import { computed, onMounted, ref } from 'vue';
import store from '../store';
import { useRoute } from 'vue-router';
import MealItem from '../components/MealItem.vue';


const route = useRoute();//current route for path searching

const keyword = ref('');// the keyword is from input above

const isSearching =ref(true)

const meals = computed(() => store.state.searchedMeals)//access the data from store state


//on enter of input, 
function searchMeals() {
    if (keyword.value) {
        store.dispatch('searchMeals', keyword.value)//dispatch will call action of the store
    } else {
        store.commit('setSearchedMeals', [])
    }
}

//for url search if there is keyword value in the route
onMounted(() => { 
    keyword.value = route.params.name
    if (keyword.value) {
        searchMeals()
    }
})

</script>