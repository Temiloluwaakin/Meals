<template>
    <header class="bg-white shadow h-16 flex justify-between items-stretch px-10">
        <router-link :to="{name: 'home'}" class="items-center h-full inline-flex ">
            Home
        </router-link>
        
        <div class="hidden md:flex items-center gap-5">
            <router-link 
                :to="{name: 'byName'}"
                class=" inline-flex items-center h-full hover:bg-purple-100 transition-colors">
                Search Meals
            </router-link>
            <router-link 
                :to="{name: 'byLetter'}"
                class="inline-flex items-center h-full hover:bg-purple-100 transition-colors">
                Meals By Letter
            </router-link>
            <router-link 
                :to="{name: 'ingredients'}"
                class="inline-flex items-center h-full hover:bg-purple-100 transition-colors">
                Meal By Ingredients
            </router-link>
            <span
                @mouseenter="isAccountMenu = true"
                @mouseleave="isAccountMenu = false" 
                class="inline-flex items-center h-full relative hover:bg-red-100 cursor-pointer"
                :class="isAccountMenu ? 'bg-orange-300 text-white-50' : ''"
            >
                Dropdown

                <div
                    v-if="isAccountMenu"
                    class="absolute bg-white w-[220px] z-40 top-16 -left-[140px] border border-gray-200"
                >
                    <div v-if="true">
                        <div class="text-semibold">the dropdown menus</div>
                        <div class="text-semibold">the dropdown menus</div>
                        <div class="text-semibold">the dropdown menus</div>
                        <div class="text-semibold">the dropdown menus</div>
                    </div>
                </div>
            </span>
        </div>

    </header>
</template>

<script setup>
import { ref } from 'vue';


let isAccountMenu = ref(false)

</script>