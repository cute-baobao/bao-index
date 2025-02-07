<script setup lang="ts">
import { Icon } from "@iconify/vue"
import type WebItemProps from '@/type/webItemProps.d.ts';
const props =  defineProps<WebItemProps>()
const emits = defineEmits(['removeItem'])
const removeItem = () => {
    emits('removeItem',props.id)
}
</script>
<template>
    <div class="base">
        <a class=" flex flex-col items-center hover:scale-[1.05]" :href="props.url">
            <Icon :icon="props.icon" class="size-10"/>
            <p class="text-xl line-clamp-1 font-medium">
                {{ props.title }}
            </p>
        </a>
        <div @click="removeItem"  class="remove">
            <Icon icon="ic:baseline-delete" class="text-white"
                :class="['size-3','sm:size-4']"/>
        </div>
    </div>
</template>
<style scoped> 
@reference "tailwindcss";
.base {
    @apply  bg-[#FFA500] border-2 border-solid border-amber-500 rounded-sm 
    px-2 py-4 flex items-center justify-center relative duration-200 transition-colors;
}
.base:hover {
    @apply bg-amber-600/80;
}
.remove {
    @apply size-5 bg-red-500 rounded-full absolute -top-2 -right-2 gap-4 hidden items-center justify-center;
}
.base:hover .remove{
    display: flex;
}
.remove:hover {
    @apply bg-red-600;
}
</style>