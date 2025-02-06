<script setup lang="ts">
import { Icon } from "@iconify/vue"

import type WebItemProps from '../type/webItemProps';
const props =  defineProps<WebItemProps>()
</script>
<template>
    <div class="bg-[#FFA500] border-2 border-solid border-amber-500 rounded-sm  px-2 py-4 flex items-center justify-center
        hover:bg-amber-600/80 transition-colors duration-200">
        <a class=" flex flex-col items-center hover:scale-[1.05]" :href="props.url">
            <Icon :icon="props.icon" class="size-10"/>
            <p class="text-xl line-clamp-1 font-medium">
                {{ props.title }}
            </p>
        </a>
    </div>
</template>
<style scoped> 

</style>