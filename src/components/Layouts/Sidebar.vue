<script lang="ts" setup>
import { defineComponent } from "vue";
import SidebarItem from "./SidebarItem.vue";
import Logo from "../icons/Logo.vue";
</script>

<template>
  <div
    class="p-10 side-bar fixed top-0 left-0 bottom-0 min-h-screen min-w-[300px] border-r-[1px] border-gray-400 flex flex-col gap-5 justify-between overflow-y-auto"
  >
    <div class="flex flex-col gap-10">
      <div class="flex gap-3 items-center pl-2">
        <Logo />
        <span class="text-lg font-medium">Vue.js</span>
      </div>
      <div class="items flex flex-col gap-3">
        <SidebarItem
          v-for="item of items"
          :title="item.title"
          :key="item.key"
          :icon="item.icon"
          :is-actived="getPath === item.link"
          v-on:redirect="redirect(item.link)"
        />
      </div>

      <div>
        <span class="font-medium text-[14px] text-gray-600 pb-1 inline-block"
          >Your teams</span
        >
        <div class="flex flex-col gap-2 pl-2">
          <div
            v-for="item in Array.from({ length: 4 })"
            class="flex gap-3 items-center"
          >
            <span
              class="inline-block p-2 border-[1px] border-gray-400 rounded-lg"
              >H</span
            >
            <span>Super man</span>
          </div>
        </div>
      </div>
    </div>

    <div class="pl-2 flex gap-3 items-center cursor-pointer">
      <IconSetting />
      <span>Setting</span>
    </div>
  </div>
</template>

<script lang="ts">
import IconHome from "../icons/IconHome.vue";
import IconProject from "../icons/IconProject.vue";
import IconTeam from "../icons/IconTeam.vue";
import IconCaleendar from "../icons/IconCaleendar.vue";
import IconDocument from "../icons/IconDocument.vue";
import IconReport from "../icons/IconReport.vue";
import IconSetting from "../icons/IconSetting.vue";
export default defineComponent({
  components: {
    IconHome,
    IconProject,
    IconTeam,
    IconCaleendar,
    IconDocument,
    IconReport,
    IconSetting,
  },
  data() {
    return {
      items: [
        {
          key: 1,
          title: "Home",
          icon: IconHome,
          link: "/",
        },
        {
          key: 2,
          title: "Project",
          icon: IconProject,
          link: "/project",
        },
        {
          key: 3,
          title: "Team",
          icon: IconTeam,
          link: "/team",
        },
        {
          key: 4,
          title: "Calendar",
          icon: IconCaleendar,
          link: "/calendar",
        },
        {
          key: 5,
          title: "Document",
          icon: IconDocument,
          link: "/document",
        },
        {
          key: 6,
          title: "Reports",
          icon: IconReport,
          link: "/reports",
        },
      ],
    };
  },
  methods: {
    redirect(url: string) {
      this.$router.push(url);
    },
  },
  computed: {
    getPath() {
      return this.$route.path;
    },
  },
  async mounted() {},
});
</script>
