<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="max-w-md w-full p-6 bg-white rounded-md shadow-md">
      <h2 class="text-2xl font-semibold text-center text-gray-800 mb-6">
        Đăng ký tài khoản
      </h2>
      <form @submit.prevent="register">
        <div class="mb-4">
          <label for="name" class="block text-gray-600 text-sm font-medium mb-2"
            >Họ và tên</label
          >
          <input
            type="text"
            id="name"
            v-model="name"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            required
          />
        </div>
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
          <label
            for="confirmPassword"
            class="block text-gray-600 text-sm font-medium mb-2"
            >Xác nhận mật khẩu</label
          >
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring focus:ring-indigo-300"
            required
          />
        </div>
        <div class="mb-4">
          <button
            type="submit"
            class="w-full bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-300"
          >
            Đăng ký
          </button>
        </div>
        <div>
            <a href="/" class="hover:text-red-600">Quay lại trang chủ </a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  },
  methods: {
    register() {
      // Xử lý đăng ký tài khoản ở đây
      console.log("Đã đăng ký với email:", this.email);
    },
  },
};
</script>
