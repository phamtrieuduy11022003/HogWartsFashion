<script>
import { defineComponent } from "@vue/composition-api";

export default {
  data() {
    return {
      isHidden: false,
    };
  },
  methods: {
    toggleMenu() {
      if (window.innerWidth <= 640) {
        this.isHidden = !this.isHidden;
      }
    },
  },
  mounted() {
    window.addEventListener("resize", this.toggleMenu);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.toggleMenu);
  },
};
</script>

<template>
  <div
    class="group-sidebox group-sidebox mt-[30px] relative px-[20px] py-[15px] border border-inherit"
  >
    <div class="sidebox-title">
      <button
        class="w-full text-left font-medium text-base py-2 border-b border-gray-300"
        @click="toggleMenu"
      >
        <h3 class="text-lg font-bold mb-4 relative">
          Danh mục bài viết
          <svg
            v-if="isHidden"
            class="h-5 w-5 inline-block ml-2"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 14a.75.75 0 01-.53-.22L6 10.47a.75.75 0 011.06-1.06L10 12.94l3.94-3.53a.75.75 0 011.06 1.06l-4.47 4.25a.75.75 0 01-.53.22z"
            ></path>
          </svg>
          <svg
            v-else
            class="h-5 w-5 inline-block ml-2 transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M10 14a.75.75 0 01-.53-.22L6 10.47a.75.75 0 011.06-1.06L10 12.94l3.94-3.53a.75.75 0 011.06 1.06l-4.47 4.25a.75.75 0 01-.53.22z"
            ></path>
          </svg>
        </h3>
      </button>
    </div>
    <div
      class="sidebox-content sidebox-content-togged"
      style="border-top: 1px solid #e7e7e7"
    >
      <ul class="menuList-links" v-if="!isHidden">
        <li
          class="relative py-[12px] font-medium text-base"
          style="border-bottom: 1px dashed #e7e7e7"
        >
          <a href="/" title="Trang chủ"> <span>Trang chủ</span></a>
        </li>

        <li
          class="relative py-[12px] font-medium text-base"
          style="border-bottom: 1px dashed #e7e7e7"
        >
          <a href="/" title="Header"
            >Header <span class="icon-plus-submenu plus-nClick1"></span
          ></a>
        </li>

        <li
          class="relative py-[12px] font-medium text-base"
          style="border-bottom: 1px dashed #e7e7e7"
          title="Sản phẩm"
        >
          <a href="/product" title="Header"
            >Sản phẩm <span class="icon-plus-submenu plus-nClick1"></span
          ></a>
        </li>

        <li
          class="relative py-[12px] font-medium text-base"
          style="border-bottom: 1px dashed #e7e7e7"
          title="Product Views"
        >
          Product Views <span class="icon-plus-submenu plus-nClick1"></span>
        </li>

        <li
          class="relative py-[12px] font-medium text-base"
          style="border-bottom: 1px dashed #e7e7e7"
          title="Blog"
        >
          <a href="/blog" title="Header"
            >Blog<span class="icon-plus-submenu plus-nClick1"></span
          ></a>
        </li>
        <li
          class="relative py-[12px] font-medium text-base"
          style="border-bottom: 1px dashed #e7e7e7"
          title="Giới thiệu"
        >
          <a href="/intro" title="Header"
            >Giới thiệu<span class="icon-plus-submenu plus-nClick1"></span
          ></a>
        </li>
        <li class="relative py-[12px] font-medium text-base" title="Liên hệ">
          <span>Liên hệ</span>
        </li>
      </ul>
    </div>
  </div>
</template>
