<script setup lang="ts">
import { onMounted, ref } from "vue";
import WebItem from "./components/WebItem.vue";
import type WebItemProps from "./type/webItemProps";
import AddButton from "./components/AddButton.vue";
import initCheck from "./utils/initCheck";

const itemList = ref<WebItemProps[]>([]);
onMounted(() => {
  itemList.value = initCheck();
});

const updateList = () => {
  itemList.value = initCheck();
};
</script>
<template>
  <div class="relative">
    <component @update="updateList" :is="AddButton" />
    <div
      class="w-full min-h-svh bg flex flex-col justify-center py-5 px-[9%]">
      <div class=" text-center font-bold text-3xl m-10" >BAO INDEX</div>
      <div class="grid gap-5 grid-flow-row-dense" :class="[
        'grid-cols-[repeat(auto-fill,minmax(100px,1fr))] ',
        'sm:grid-cols-[repeat(auto-fill,minmax(120px,1fr))] ',
        'md:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] ',
        'lg:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] ',
      ]">
        <WebItem v-for="item in itemList" :key="item.url" :title="item.title" :url="item.url" :icon="item.icon" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.bg {
  background-image: url(/bg.png);
  background-repeat: no-repeat;
  background-position: left top;
  background-attachment: fixed;
}
</style>
