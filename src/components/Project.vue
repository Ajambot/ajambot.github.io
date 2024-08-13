<script setup lang="ts">
import { computed } from 'vue';
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
    <div class="flex flex-col xl:w-2/5 border-black border-2 mx-auto rounded-2xl bg-gray-50">
        <div class="flex flex-wrap p-5 items-center gap-5">
            <h2  class="w-4/5">{{ title }}</h2>
            <div class="flex items-center gap-3">
                <a :href="github" class="basis-full">
                    <img class="aspect-square w-16" src="/src/assets/images/logos/Github.png" alt="Github Icon"/>
                </a>
                <a :href="link" class="basis-full">
                    <img class="aspect-square w-16" src="/src/assets/images/logos/Webpage Icon.png" alt="Icon representing a webpage">
                </a>
            </div>
        </div>
        <div class="p-5 ">
            <ul class="flex overflow-x-scroll gap-10 w-fit p-3 rounded-md">
                <li v-for="(link, img) in techStackPaths">
                    <a :href="link" target="_blank">
                        <img class="drop-shadow-lg h-14 hover:scale-110 transition ease-in-out" :src="img">
                    </a>
                </li>
            </ul>
        </div>
        <ul class="p-5 space-y-4 list-inside leading-relaxed overflow-scroll h-1/3">
            <li class="list-disc text-xl" v-for="(item) in bulletpoint">{{ item }}</li>
        </ul>
        <a :href="imagePath" class="hover:contrast-50 animation ease-in hover:cursor-zoom-in" target="_blank">
            <img class="rounded-b-2xl" :src="imagePath" />
        </a>
    </div>
</template>