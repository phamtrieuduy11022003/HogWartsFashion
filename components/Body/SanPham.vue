

<template>
  <div class="bg-gray-100">
    <div class="container mx-auto" style="width: 1200px">
      <span class="text-black text-sm p-6"><a href="/">Trang chủ</a> / Sản Phẩm</span>
      <div class="flex flex-row space-x-6 mt-5">
        <!-- Danh mục -->
        <BodyLogu/>
        <!-- Show-->
        <div class="w-4/5 mb-8">
          <!-- header -->
          <div class="flex justify-between items-center mb-3">
            <span class="text-black text-2xl font-medium relative">Sản Phẩm</span>
            <div class="flex space-x-3">
              <div class="wrap-box-sort">
                <label for="SortBy" class="text-black mr-2">Sắp xếp:</label>
                <select class="sort-by custom-dropdown__select">
                  <option d>Sản phẩm nổi bật</option>
                  <option>Giá: Tăng dần</option>
                  <option>Giá: Giảmdần</option>
                  <option>Tên: A-Z</option>
                  <option>Tên: Z-A</option>
                  <option>Cũ nhất</option>
                  <option>Mớinhất</option>
                  <option>Bán chạynhất</option>
                  <option>Tồnkho: Giảm dần</option>
                </select>
              </div>
            </div>
          </div>
          <!-- Product -->
          <div class="grid grid-cols-3 gap-4">
            <div class="bg-white rounded-md pb-7">
              <div class="relative">
                <img
                  class="pb-5"
                  src="https://product.hstatic.net/200000276673/product/1_8a1e280f5d1345de9b1e208af5b40b3b_grande.jpg"
                  alt=""
                />
                <div
                  class="absolute bottom-0 right-0 text-white mt-3 w-10 h-10 flex items-center justify-center"
                >
                  <button
                    class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-blue-200"
                    type="button"
                    aria-label="Like"
                  >
                    <img
                      src="https://theme.hstatic.net/200000525917/1000876879/14/add-to-cart-hv.svg?v=3642"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <p class="text-sm ml-1 pt-2 pb-5">Áo thun ChunKy NewYork</p>
              <strong class="text-red-400 text-sm ml-1"> 2,000,900₫</strong>
            </div>

            <div class="bg-white rounded-md pb-7">
              <div class="relative">
                <img
                  class="pb-5"
                  src="https://product.hstatic.net/200000276673/product/1_4934a58e584f439a838bfdfd3034e89b_grande.jpg"
                  alt=""
                />
                <div
                  class="absolute bottom-0 right-0 text-white mt-3 w-10 h-10 flex items-center justify-center"
                >
                  <button
                    class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-blue-200"
                    type="button"
                    aria-label="Like"
                  >
                    <img
                      src="https://theme.hstatic.net/200000525917/1000876879/14/add-to-cart-hv.svg?v=3642"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <p class="text-sm ml-1 pt-2 pb-5">
                Áo thun nam cổ tròn tay ngắn Just For Fun
              </p>
              <strong class="text-red-400 text-sm ml-1"> 1,000,000₫ </strong>
            </div>

            <div class="bg-white rounded-md pb-7">
              <div class="relative">
                <img
                  class="pb-5"
                  src="https://product.hstatic.net/200000276673/product/1_03a26b815a6843289a338490c3dcaf18_grande.jpg"
                  alt=""
                />
                <div
                  class="absolute bottom-0 right-0 text-white mt-3 w-10 h-10 flex items-center justify-center"
                >
                  <button
                    class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-blue-200"
                    type="button"
                    aria-label="Like"
                  >
                    <img
                      src="https://theme.hstatic.net/200000525917/1000876879/14/add-to-cart-hv.svg?v=3642"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <p class="text-sm ml-1 pt-2 pb-5">Áo thun tay ngắn Skull Badge</p>
              <strong class="text-red-400 text-sm ml-1"> 1,500,000₫ </strong>
            </div>

            <div class="bg-white rounded-md pb-7">
              <div class="relative">
                <img
                  class="pb-5"
                  src="https://product.hstatic.net/200000276673/product/somixanh_02c3b82f74cc44fa87350eda0fc21865_grande.jpg"
                  alt=""
                />
                <div
                  class="absolute bottom-0 right-0 text-white mt-3 w-10 h-10 flex items-center justify-center"
                >
                  <button
                    class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-blue-200"
                    type="button"
                    aria-label="Like"
                  >
                    <img
                      src="https://theme.hstatic.net/200000525917/1000876879/14/add-to-cart-hv.svg?v=3642"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <p class="text-sm ml-1 pt-2 pb-5">Áo sơmi xanh Tommy Hilfiger</p>
              <strong class="text-red-400 text-sm ml-1">3,000,000₫ </strong>
            </div>

            <div class="bg-white rounded-md pb-7">
              <div class="relative">
                <img
                  class="pb-5"
                  src="https://product.hstatic.net/200000276673/product/aophao_d22bfb083ba64a42a21870062d214547_grande.jpg"
                  alt=""
                />
                <div
                  class="absolute bottom-0 right-0 text-white mt-3 w-10 h-10 flex items-center justify-center"
                >
                  <button
                    class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-blue-200"
                    type="button"
                    aria-label="Like"
                  >
                    <img
                      src="https://theme.hstatic.net/200000525917/1000876879/14/add-to-cart-hv.svg?v=3642"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <p class="text-sm ml-1 pt-2 pb-5">Áo phao 2 trong 1 Bellfield</p>
              <strong class="text-red-400 text-sm ml-1">1,900,000₫ </strong>
            </div>

            <div class="bg-white rounded-md pb-7">
              <div class="relative">
                <img
                  class="pb-5"
                  src="https://product.hstatic.net/200000276673/product/quanvai_4be3f1fce2bf456b9b839202aad8e712_grande.jpg"
                  alt=""
                />
                <div
                  class="absolute bottom-0 right-0 text-white mt-3 w-10 h-10 flex items-center justify-center"
                >
                  <button
                    class="flex-none flex items-center justify-center w-9 h-9 rounded-full bg-blue-200"
                    type="button"
                    aria-label="Like"
                  >
                    <img
                      src="https://theme.hstatic.net/200000525917/1000876879/14/add-to-cart-hv.svg?v=3642"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <p class="text-sm ml-1 pt-2 pb-5">Quần ống suông Farah</p>
              <strong class="text-red-400 text-sm ml-1">2,400,000₫ </strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isOpenList1: true,
      isOpenList2: true,
      isOpenList3: true,
    };
  },
  methods: {
    toggleList1() {
      this.isOpenList1 = !this.isOpenList1;
    },
    toggleList2() {
      this.isOpenList2 = !this.isOpenList2;
    },
    toggleList3() {
      this.isOpenList3 = !this.isOpenList3;
    },
  },
};
</script>
