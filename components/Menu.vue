<template>
  <div>
    <div class="bg-black py-4 text-left">
      <div class="container mx-20 flex items-center">
        <div class="mx-auto flex items-center justify-center">
          <ul class="flex space-x-20">
            <li><a href="/" class="text-white hover:underline">Trang chủ</a></li>
            <li><NuxtLink to="/sanpham" class="text-white hover:underline">Sản phẩm</NuxtLink></li>
            <li>
              <a href="/" class="text-white hover:underline">Nhóm sản phẩm đa cấp</a>
            </li>  
            <li><a href="/gioithieu" class="text-white hover:underline">Giới thiệu</a></li>
            <li><a href="/lienhe" class="text-white hover:underline">Liên hệ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
