<script setup lang="ts">
  import projects from './assets/content/projects.json';
  import jobsAndEd from './assets/content/jobsAndEducation.json';
  import skills from './assets/content/skills.json'
  import Project from './components/Project.vue';
  import JobOrEducation from './components/JobOrEducation.vue'
  import SkillSection from './components/SkillSection.vue';
</script>

<template>
  <Project v-for="(project, index) in projects"
    :key="index"
    :title="project.title"
    :github="project.github"
    :link="project.link"
    :bulletpoint="project.bulletpoints"
    :tech-stack="project.techStack"
    :image="project.image"
    ></Project>
  <JobOrEducation v-for="(job, index) in jobsAndEd"
    :key="index"
    :bulletpoint="job.bulletpoints"
    :titleOrDegree="job.titleOrDegree"
    :companyOrSchool="job.companyOrSchool"
    :dateRange="job.dateRange"
    :type="job.type"
    ></JobOrEducation>
  <SkillSection v-for="(content, section) in skills"
    :key="section"
    :title="section"
    :skills="content"
  ></SkillSection>
</template>