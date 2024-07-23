<script setup lang="ts">
import { defineProps, computed } from 'vue';
interface Props {
    title: string,
    github: string,
    link: string,
    bulletpoint: string[],
    techStack: Record<string, string | undefined>,
    image: string
}
const { title, bulletpoint, techStack, image } = defineProps<Props>();
const techStackPaths = computed(() => {
    let newPaths: Record<string, string | undefined> = {};
    for(const key in techStack){
        const newKey = "/src/assets/images/logos/"+key;
        newPaths[newKey] = techStack[key];
    }
    return newPaths;
});
const imagePath = computed(() => "/src/assets/images/projects/"+image);
</script>
<template>
    <div class="flex flex-col w-screen items-center font-terminal p-5 gap-3 bg-black">
        <div class="flex items-center gap-5 w-2/5">
            <h2 class="text-4xl font-semibold text-white">{{ title }}</h2>
            <a :href="github" >
                <img class="w-14 h-14" src="/src/assets/images/logos/Github.png" alt="Github Icon"/>
            </a>
            <a :href="link">
                <img class="w-16" src="/src/assets/images/logos/Webpage Icon.png" alt="Icon representing a webpage">
            </a>
        </div>
        <div class="w-2/5">
            <ul class="flex gap-10 w-fit flex-wrap bg-white p-3 rounded-md">
                <li v-for="(link, img) in techStackPaths">
                    <a :href="link" target="_blank">
                        <img class="drop-shadow-lg h-14 hover:scale-110 transition ease-in-out" :src="img">
                    </a>
                </li>
            </ul>
        </div>
        <ul class="w-2/5 space-y-4 list-inside leading-relaxed">
            <li class="list-disc text-xl" v-for="(item) in bulletpoint">{{ item }}</li>
        </ul>
        <a :href="imagePath" class="p-6 w-2/5 hover:scale-105 transition ease-in-out" target="_blank">
            <img :src="imagePath"/>
        </a>
    </div>
</template>