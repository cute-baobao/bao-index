<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { ref } from "vue";
const emits = defineEmits(["changeColor"])
const active = ref<boolean>(false);
const changeState = () => {
    active.value = !active.value;
};
const colorList = ref<string[][]>([
    [
        "bg-red-100",
        "bg-red-200",
        "bg-red-300",
        "bg-red-400",
        "bg-red-500",
        "bg-red-600",
        "bg-red-700",
        "bg-red-800",
        "bg-red-900",
    ],
    [
        "bg-orange-100",
        "bg-orange-200",
        "bg-orange-300",
        "bg-orange-400",
        "bg-orange-500",
        "bg-orange-600",
        "bg-orange-700",
        "bg-orange-800",
        "bg-orange-900",
    ],
    [
        "bg-amber-100",
        "bg-amber-200",
        "bg-amber-300",
        "bg-amber-400",
        "bg-amber-500",
        "bg-amber-600",
        "bg-amber-700",
        "bg-amber-800",
        "bg-amber-900",
    ],
    [
        "bg-yellow-100",
        "bg-yellow-200",
        "bg-yellow-300",
        "bg-yellow-400",
        "bg-yellow-500",
        "bg-yellow-600",
        "bg-yellow-700",
        "bg-yellow-800",
        "bg-yellow-900",
    ],
    [
        "bg-lime-100",
        "bg-lime-200",
        "bg-lime-300",
        "bg-lime-400",
        "bg-lime-500",
        "bg-lime-600",
        "bg-lime-700",
        "bg-lime-800",
        "bg-lime-900",
    ],
    [
        "bg-green-100",
        "bg-green-200",
        "bg-green-300",
        "bg-green-400",
        "bg-green-500",
        "bg-green-600",
        "bg-green-700",
        "bg-green-800",
        "bg-green-900",
    ],
    [
        "bg-emerald-100",
        "bg-emerald-200",
        "bg-emerald-300",
        "bg-emerald-400",
        "bg-emerald-500",
        "bg-emerald-600",
        "bg-emerald-700",
        "bg-emerald-800",
        "bg-emerald-900",
    ],
    [
        "bg-teal-100",
        "bg-teal-200",
        "bg-teal-300",
        "bg-teal-400",
        "bg-teal-500",
        "bg-teal-600",
        "bg-teal-700",
        "bg-teal-800",
        "bg-teal-900",
    ],
    [
        "bg-cyan-100",
        "bg-cyan-200",
        "bg-cyan-300",
        "bg-cyan-400",
        "bg-cyan-500",
        "bg-cyan-600",
        "bg-cyan-700",
        "bg-cyan-800",
        "bg-cyan-900",
    ],
    [
        "bg-sky-100",
        "bg-sky-200",
        "bg-sky-300",
        "bg-sky-400",
        "bg-sky-500",
        "bg-sky-600",
        "bg-sky-700",
        "bg-sky-800",
        "bg-sky-900",
    ],
    [
        "bg-blue-100",
        "bg-blue-200",
        "bg-blue-300",
        "bg-blue-400",
        "bg-blue-500",
        "bg-blue-600",
        "bg-blue-700",
        "bg-blue-800",
        "bg-blue-900",
    ],
    [
        "bg-indigo-100",
        "bg-indigo-200",
        "bg-indigo-300",
        "bg-indigo-400",
        "bg-indigo-500",
        "bg-indigo-600",
        "bg-indigo-700",
        "bg-indigo-800",
        "bg-indigo-900",
    ],
    [
        "bg-violet-100",
        "bg-violet-200",
        "bg-violet-300",
        "bg-violet-400",
        "bg-violet-500",
        "bg-violet-600",
        "bg-violet-700",
        "bg-violet-800",
        "bg-violet-900",
    ],
    [
        "bg-purple-100",
        "bg-purple-200",
        "bg-purple-300",
        "bg-purple-400",
        "bg-purple-500",
        "bg-purple-600",
        "bg-purple-700",
        "bg-purple-800",
        "bg-purple-900",
    ],
    [
        "bg-fuchsia-100",
        "bg-fuchsia-200",
        "bg-fuchsia-300",
        "bg-fuchsia-400",
        "bg-fuchsia-500",
        "bg-fuchsia-600",
        "bg-fuchsia-700",
        "bg-fuchsia-800",
        "bg-fuchsia-900",
    ],
    [
        "bg-pink-100",
        "bg-pink-200",
        "bg-pink-300",
        "bg-pink-400",
        "bg-pink-500",
        "bg-pink-600",
        "bg-pink-700",
        "bg-pink-800",
        "bg-pink-900",
    ],
    [
        "bg-rose-100",
        "bg-rose-200",
        "bg-rose-300",
        "bg-rose-400",
        "bg-rose-500",
        "bg-rose-600",
        "bg-rose-700",
        "bg-rose-800",
        "bg-rose-900",
    ],
    [
        "bg-slate-100",
        "bg-slate-200",
        "bg-slate-300",
        "bg-slate-400",
        "bg-slate-500",
        "bg-slate-600",
        "bg-slate-700",
        "bg-slate-800",
        "bg-slate-900",
    ],
    [
        "bg-gray-100",
        "bg-gray-200",
        "bg-gray-300",
        "bg-gray-400",
        "bg-gray-500",
        "bg-gray-600",
        "bg-gray-700",
        "bg-gray-800",
        "bg-gray-900",
    ],
    [
        "bg-zinc-100",
        "bg-zinc-200",
        "bg-zinc-300",
        "bg-zinc-400",
        "bg-zinc-500",
        "bg-zinc-600",
        "bg-zinc-700",
        "bg-zinc-800",
        "bg-zinc-900",
    ],
    [
        "bg-neutral-100",
        "bg-neutral-200",
        "bg-neutral-300",
        "bg-neutral-400",
        "bg-neutral-500",
        "bg-neutral-600",
        "bg-neutral-700",
        "bg-neutral-800",
        "bg-neutral-900",
    ],
    [
        "bg-fuchsia-100",
        "bg-fuchsia-200",
        "bg-fuchsia-300",
        "bg-fuchsia-400",
        "bg-fuchsia-500",
        "bg-fuchsia-600",
        "bg-fuchsia-700",
        "bg-fuchsia-800",
        "bg-fuchsia-900",
    ],
    [
        "bg-pink-100",
        "bg-pink-200",
        "bg-pink-300",
        "bg-pink-400",
        "bg-pink-500",
        "bg-pink-600",
        "bg-pink-700",
        "bg-pink-800",
        "bg-pink-900",
    ],
    [
        "bg-rose-100",
        "bg-rose-200",
        "bg-rose-300",
        "bg-rose-400",
        "bg-rose-500",
        "bg-rose-600",
        "bg-rose-700",
        "bg-rose-800",
        "bg-rose-900",
    ],
    [
        "bg-slate-100",
        "bg-slate-200",
        "bg-slate-300",
        "bg-slate-400",
        "bg-slate-500",
        "bg-slate-600",
        "bg-slate-700",
        "bg-slate-800",
        "bg-slate-900",
    ],
    [
        "bg-gray-100",
        "bg-gray-200",
        "bg-gray-300",
        "bg-gray-400",
        "bg-gray-500",
        "bg-gray-600",
        "bg-gray-700",
        "bg-gray-800",
        "bg-gray-900",
    ],
    [
        "bg-zinc-100",
        "bg-zinc-200",
        "bg-zinc-300",
        "bg-zinc-400",
        "bg-zinc-500",
        "bg-zinc-600",
        "bg-zinc-700",
        "bg-zinc-800",
        "bg-zinc-900",
    ],
    [
        "bg-neutral-100",
        "bg-neutral-200",
        "bg-neutral-300",
        "bg-neutral-400",
        "bg-neutral-500",
        "bg-neutral-600",
        "bg-neutral-700",
        "bg-neutral-800",
        "bg-neutral-900",
    ],
    [
        "bg-stone-100",
        "bg-stone-200",
        "bg-stone-300",
        "bg-stone-400",
        "bg-stone-500",
        "bg-stone-600",
        "bg-stone-700",
        "bg-stone-800",
        "bg-stone-900",
    ],
]);
const changeColor = (color:string):void => {
    localStorage.setItem("color", color);
    emits("changeColor");
    active.value = !active.value;
}

</script>

<template>
    <div class="">
        <div class="absolute top-5 left-8 flex items-center gap-4">
            <div>
                <Icon
                    @click="changeState"
                    icon="fluent-mdl2:color-solid"
                    class="icon-btn"
                />
            </div>
        </div>
        <div class="cover relative" :class="[active ? '' : 'hidden']">
            <div class="dialog" :class="[active ? '' : 'hidden']">
                <Icon
                    @click="changeState"
                    class="close"
                    icon="material-symbols:close-small-rounded"
                />
                <header class="header">Change WebItem Bg-Color</header>
                <span class="header">click a color</span>
                <main
                    class="flex items-center justify-center flex-col w-full max-w-md mx-auto mt-5"
                >
                    <section v-if="active" v-for="colors in colorList" class="section">
                        <div
                            v-for="color in colors"
                            :key="color"
                            @click="changeColor(color)"
                            class="size-10 rounded-md"
                            :class="[`${color}`,'hover:scale-[1.1] cursor-pointer']"
                        />
                    </section>
                </main>
            </div>
        </div>
    </div>
</template>
<style scoped>
@reference "tailwindcss";
.cover {
    position: absolute;
    inset: 0;
    z-index: 10;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(0.5em);
}
.dialog {
    @apply w-[40svw] h-fit bg-gradient-to-b from-zinc-300 to-zinc-200 absolute 
    top-[30%] left-[50%] translate-x-[-50%] translate-y-[-30%]
    rounded-[.5em] shadow-sm py-4 z-100
    flex items-center flex-col
    min-w-[400px] max-h-[50svh] overflow-auto;
}
.close {
    @apply absolute right-2 top-2 size-8
    hover:scale-[1.1] hover:text-white/40;
}
.header {
    @apply text-2xl font-[600] text-center;
}
.input {
    @apply flex-grow px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500;
}
.section {
    @apply w-full mb-4 flex items-center text-xl px-3 gap-3;
}
.btn {
    @apply px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 cursor-pointer;
}
.icon-btn {
    @apply size-6 hover:scale-[1.1] hover:text-amber-300/80 cursor-pointer;
}
</style>
