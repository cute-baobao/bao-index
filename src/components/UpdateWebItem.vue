<script setup lang="ts">
import { Icon } from "@iconify/vue";
import { onMounted, ref, watch } from "vue";
import type WebItemProps from "@/type/webItemProps.d.ts";
import initCheck from "@/utils/initCheck";

onMounted(() => {
    list.value = initCheck();
});
const init = ref(true)
const emits = defineEmits(["update"]);
const list = ref<WebItemProps[]>([]);
const active = ref<boolean>(false);
const item = ref<WebItemProps>({
    id:"",
    title: "",
    url: "",
    icon: "",
});

const changeState = () => {
    active.value = !active.value;
};
const addItem = () => {
    item.value.id = Date.now().toString();
    list.value = [...list.value, item.value];
    item.value = { id:"",title: "", url: "", icon: "" };
    active.value = false;
};
const removeItem = (id:string) => {
    list.value = list.value.filter((item) => item.id !== id);
}
const exportJson = () => {
  // 将 JSON 数据转换为字符串
  const jsonString = JSON.stringify(list.value, null, 4); // 使用缩进格式化 JSON
  // 创建 Blob 对象
  const blob = new Blob([jsonString], { type: 'application/json' });
  // 创建下载链接
  const downloadUrl = URL.createObjectURL(blob);
  // 创建隐藏的 <a> 标签
  const link = document.createElement('a');
  link.href = downloadUrl;
  link.download = 'data.json'; // 设置下载文件名
  link.style.display = 'none';
  // 将 <a> 标签添加到文档中并触发点击
  document.body.appendChild(link);
  link.click();
  // 移除 <a> 标签
  document.body.removeChild(link);
  // 释放对象 URL
  URL.revokeObjectURL(downloadUrl);
}

watch(
    () => list.value,
    (newValue) => {
        if(init.value) {
            // 防止onMounted赋值给 list 触发index页面的更新 浪费性能
            init.value = false;
            return
        }
        console.log(list.value)
        localStorage.setItem("webItem", JSON.stringify(newValue));
        emits("update");
    }
);

defineExpose({removeItem})
</script>

<template>
    <div>
        <div class="absolute top-5 right-8 flex items-center gap-4">
            <a href="https://github.com/cute-baobao/bao-index">
                <Icon
                    icon="openmoji:github"
                    class="icon-btn"
                />
            </a>
            <Icon
                @click="changeState"
                icon="material-symbols:add"
                class="icon-btn"
            />
            <Icon
                @click="exportJson" 
                icon="uil:export"
                class="icon-btn"
            />
        </div>
        <div class="cover" :class="[active ? '' : 'hidden']"></div>
        <div class="dialog" :class="[active ? '' : 'hidden']">
            <Icon
                @click="changeState"
                class="close"
                icon="material-symbols:close-small-rounded"
            />
            <header class="header">Add New WebItem</header>
            <main
                class="flex items-center justify-center flex-col w-full max-w-md mx-auto mt-5"
            >
                <section class="section">
                    <label for="title" class="w-24 text-right mr-4"
                        >Title:</label
                    >
                    <input
                        class="input"
                        type="text"
                        id="title"
                        v-model="item.title"
                        placeholder="title"
                    />
                </section>
                <section class="section">
                    <label for="url" class="w-24 text-right mr-4"
                        >Website:</label
                    >
                    <input
                        class="input"
                        type="text"
                        id="url"
                        v-model="item.url"
                        placeholder="website"
                    />
                </section>
                <section class="section">
                    <label for="icon" class="w-24 text-right mr-4">
                        <div class="flex items-center justify-end gap-2">
                            <Icon
                                :icon="
                                    item.icon === '' ? 'noto:bison' : item.icon
                                "
                            />
                            Icon:
                        </div>
                    </label>
                    <input
                        class="input"
                        type="text"
                        id="icon"
                        v-model="item.icon"
                        placeholder="input icon name from iconify.design"
                    />
                </section>
                <section class="flex justify-between items-center">
                    <button class="btn" @click="addItem">Add</button>
                </section>
            </main>
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
    rounded-[.5em] shadow-sm py-4 z-100;
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
    @apply w-full mb-4 flex items-center text-xl px-3;
}
.btn {
    @apply px-4 py-2 bg-blue-500 text-white rounded-md shadow-sm hover:bg-blue-600 cursor-pointer;
}
.icon-btn {
    @apply size-6 hover:scale-[1.1] hover:text-amber-300/80 cursor-pointer;
}
</style>
