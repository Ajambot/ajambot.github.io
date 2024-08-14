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
    for (const key in techStack) {
        const newKey = "/src/assets/images/logos/" + key;
        newPaths[newKey] = techStack[key];
    }
    return newPaths;
});
const imagePath = computed(() => "/src/assets/images/projects/" + image);
</script>
<template>
    <div class="flex flex-col xl:w-2/5 border-black border-2 mx-auto rounded-2xl bg-gray-50">
        <div class="flex flex-wrap p-5 items-center gap-5">
            <h2 class="w-4/5">{{ title }}</h2>
            <div class="flex items-center gap-3">
                <a :href="github" class="basis-full">
                    <img class="aspect-square w-16" src="/src/assets/images/logos/Github.png" alt="Github Icon" />
                </a>
                <a :href="link" class="basis-full">
                    <img class="aspect-square w-16" src="/src/assets/images/logos/Webpage Icon.png"
                        alt="Icon representing a webpage">
                </a>
            </div>
        </div>
        <ul class="flex overflow-x-auto overflow-y-hidden w-fit py-8 mx-5 gap-5 rounded-md">
            <li v-for="(link, img) in techStackPaths" class="flex-shrink-0 h-fit w-fit">
                <a :href="link" target="_blank" class="h-14 block">
                    <img class="drop-shadow-lg h-full object-contain hover:scale-110 transition ease-in-out" :src="img">
                </a>
            </li>
        </ul>
        <ul class="p-5 space-y-4 list-inside leading-relaxed overflow-scroll h-1/3">
            <li class="list-disc text-xl" v-for="(item) in bulletpoint">{{ item }}</li>
        </ul>
        <a :href="imagePath" class="hover:contrast-50 animation ease-in hover:cursor-zoom-in" target="_blank">
            <img class="rounded-b-2xl" :src="imagePath" />
        </a>
    </div>
</template>
