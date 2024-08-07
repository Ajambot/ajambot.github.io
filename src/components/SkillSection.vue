<script setup lang="ts">
interface Props {
    title: string,
    skills: { title: string, image: string }[]
}
const { title, skills } = defineProps<Props>();
</script>
<template>
    <div>
        <h3 class="text-black text-4xl font-semibold">{{ title }}</h3>
        <ul>
            <li v-for="(skill) in skills" class="p-5">
                <div class="flex text-black gap-2 items-center">
                    <img :src="'/src/assets/images/logos/' + skill.image"
                    class="h-10">
                    <p>{{ skill.title }}</p>
                </div>
            </li>
        </ul>
    </div>
</template>