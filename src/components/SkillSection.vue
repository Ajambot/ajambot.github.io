<script setup lang="ts">
interface Props {
    title: string,
    skills: { title: string, image: string }[]
}
const { title, skills } = defineProps<Props>();
</script>
<template>
    <div class="flex flex-col w-screen p-5 gap-5">
        <h3 class="text-black text-4xl font-semibold underline">{{ title }}</h3>
        <ul class="flex gap-10 w-fit flex-wrap p-3 rounded-md">
            <li v-for="(skill) in skills" class="p-5 border-2 border-black border-solid">
                <div class="flex text-black gap-3 items-center ">
                    <img :src="'/src/assets/images/logos/' + skill.image" class="h-10">
                    <p>{{ skill.title }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>
