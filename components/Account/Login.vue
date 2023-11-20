<template>
  <div class="py-10  flex justify-center items-center bg-gray-100 ">
    <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md ">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">Đăng nhập</h2>
      <form @submit.prevent="login">
        <div class="mb-4">
          <label for="email" class="block text-gray-600 text-sm font-medium mb-2"
            >Email</label
          >
          <input
            type="email"
            id="email"
            v-model="email"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div class="mb-4">
          <label for="password" class="block text-gray-600 text-sm font-medium mb-2"
            >Mật khẩu</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600
             focus:outline-none focus:ring focus:ring-indigo-300"
             to="/index"
          >
            Đăng nhập
          </button>
        </div>
        <NuxtLink to="/register" class="text-blue-700 hover:text-sm hover:">Đăng ký tại đây!</NuxtLink>
      </form>
    </div>
  </div>
</template>
min-h- flex items-center justify-center bg-gray-100
<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    login() {
      // Xử lý đăng nhập ở đây
      console.log("Đã đăng nhập với email:", this.email);
    },
  },
};
</script>
