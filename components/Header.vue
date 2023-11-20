<template>
  <div>
    <div class="bg-gray-500 py-1 text-center">
      <p>Miễn phí vận chuyển với đơn hàng trên 300k</p>
    </div>
    <div class="container flex py-5">
      <div class="mx-20 item flex items-center">
        <!--logo -->
        <div class="header-upper-logo">
          <div class="header-logo wrap-logo">
            <a
              href="/"
              itemprop="url"
              aria-label="Nơi quy tụ những thương hiệu thời trang hàng đầu"
            >
              <img
                width="200"
                height="93"
                itemprop="logo"
                src="//theme.hstatic.net/200000276673/1000671655/14/logo.png?v=202"
                alt="Nơi quy tụ những thương hiệu thời trang hàng đầu"
                class="img-responsive logoimg"
              />
            </a>
          </div>
        </div>
        <!-- logo -->
      </div>

      <div class="mx-auto flex items-center">
        <!-- kế logo -->
        <div class="header-policy hidden lg:flex justify-between space-x-5">
          <div class="item flex items-center">
            <div title="icon">
              <img
                src="//theme.hstatic.net/200000276673/1000671655/14/hd_policy_icon_1.png?v=202"
                alt="Miễn phí vận chuyển"
              />
            </div>
            <div class="info">
              <p>Miễn phí vận chuyển</p>
              <p>Cho đơn hàng trên 500k</p>
            </div>
          </div>
          <div class="item flex items-center">
            <div title="icon">
              <img
                src="//theme.hstatic.net/200000276673/1000671655/14/hd_policy_icon_2.png?v=202"
                alt="Hỗ trợ 24/7"
              />
            </div>
            <div class="info">
              <p>Hỗ trợ 24/7</p>
              <p>Hotline: 1900.636.099</p>
            </div>
          </div>
          <div class="item flex items-center">
            <div title="icon">
              <img
                src="//theme.hstatic.net/200000276673/1000671655/14/hd_policy_icon_3.png?v=202"
                alt="Giờ làm việc"
              />
            </div>
            <div class="info">
              <p>Giờ làm việc</p>
              <p>T2 - T7 Giờ hành chính</p>
            </div>
          </div>
          <div class="info">
            <NuxtLink to="/"> <button class="p-2"><Icon name="uil:search" size="24px"/></button> </NuxtLink>
           
            <NuxtLink to="/login"><button class="p-2" ><Icon name="uil:user" size="24px"/></button> </NuxtLink>
            <NuxtLink to="/gioihang"><button class="p-2" ><Icon name="uil:cart" size="24px"/></button> </NuxtLink>
          </div>
        </div>
        <!-- kế logo -->
      </div>
      <div></div>
    </div>
  </div>
</template>
container mx-auto flex items-center justify-between text-center
