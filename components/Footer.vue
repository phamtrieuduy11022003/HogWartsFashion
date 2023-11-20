<template>
  <div class="">
    <footer class="bg-gray-900 text-white py-12">
      <div class="container mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="col-span-1 md:col-span-2 lg:col-span-1">
            <div class="mb-4">
              <h4 class="text-xl font-bold mb-2">Thông tin liên hệ</h4>
              <div class="text-gray-400">
                <p>
                  <i class="fas fa-map-marker mr-2"></i>Tầng 4, tòa nhà Flemington, số
                  182, đường Lê Đại Hành, phường 15, quận 11, Tp. Hồ Chí Minh.
                </p>
                <p><i class="fas fa-phone mr-2"></i>1900.636.099</p>
                <p><i class="fas fa-envelope mr-2"></i>hi@haravan.com</p>
              </div>
            </div>
            <div class="logo-footer">
              <a href="/" target="_blank" rel="nofollow noreferrer">
                <img
                  src="https://file.hstatic.net/1000300454/file/logo_bct_019590229b4c4dfda690236b67f7aff4.png"
                  alt="Bộ Công Thương"
                  class="w-24"
                />
              </a>
            </div>
          </div>

          <div class="col-span-1 lg:col-span-1">
            <div class="mb-4">
              <h4 class="text-xl font-bold mb-2">Liên kết</h4>
              <ul class="text-gray-400">
                <li class="mb-2">
                  <a href="/search" title="Tìm kiếm" class="hover:text-gray-200"
                    >Tìm kiếm</a
                  >
                </li>
                <li class="mb-2">
                  <a href="/pages/about-us" title="Giới thiệu" class="hover:text-gray-200"
                    >Giới thiệu</a
                  >
                </li>
                <li class="mb-2">
                  <a
                    href="/pages/chinh-sach-doi-tra"
                    title="Chính sách đổi trả"
                    class="hover:text-gray-200"
                    >Chính sách đổi trả</a
                  >
                </li>
                <li class="mb-2">
                  <a
                    href="/pages/chinh-sach-bao-mat"
                    title="Chính sách bảo mật"
                    class="hover:text-gray-200"
                    >Chính sách bảo mật</a
                  >
                </li>
                <li class="mb-2">
                  <a
                    href="/pages/dieu-khoan-dich-vu"
                    title="Điều khoản dịch vụ"
                    class="hover:text-gray-200"
                    >Điều khoản dịch vụ</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-span-1 lg:col-span-1">
            <div class="mb-4">
              <h4 class="text-xl font-bold mb-2">Liên kết 2</h4>
              <ul class="text-gray-400">
                <li class="mb-2">
                  <a
                    href="/collections/onsale"
                    title="Sản phẩm khuyến mãi"
                    class="hover:text-gray-200"
                    >Sản phẩm khuyến mãi</a
                  >
                </li>
                <li class="mb-2">
                  <a
                    href="/collections/hot-products"
                    title="Sản phẩm nổi bật"
                    class="hover:text-gray-200"
                    >Sản phẩm nổi bật</a
                  >
                </li>
                <li class="mb-2">
                  <a
                    href="/collections/all"
                    title="Tất cả sản phẩm"
                    class="hover:text-gray-200"
                    >Tất cả sản phẩm</a
                  >
                </li>
              </ul>
            </div>
          </div>

          <div class="col-span-1 md:col-span-2 lg:col-span-1">
            <div class="mb-4">
              <div class="footer-newsletter">
                <h4 class="text-xl font-bold mb-2">Đăng kí nhận tin</h4>
                <div class="footer-newsletter-form">
                  <form
                    accept-charset="UTF-8"
                    action="/account/contact"
                    class="contact-form"
                    method="post"
                  >
                    <input name="form_type" type="hidden" value="customer" />
                    <input name="utf8" type="hidden" value="✓" />
                    <div class="input-group">
                      <input
                        type="hidden"
                        id="newsletter-tags"
                        name="contact[tags]"
                        value="khách hàng tiềm năng, bản tin"
                      />
                      <input
                        required 
                        type="email"
                        id="newsletter-email"
                        value=""
                        placeholder="Nhập email của bạn"
                        name="contact[email]"
                        aria-label="Email Address"
                        class="bg-gray-800 text-white border border-gray-700 py-2 px-4 rounded-full focus:outline-none focus:border-blue-500"
                      />
                      <button
                        type="submit"
                        class="btn btn-dark text-uppercase font-bold bg-blue-500 hover:bg-blue-600 py-2 px-4 ml-2 rounded-full"
                      >
                        Đăng kí
                      </button>
                    </div>
                    <div class="sitebox-recaptcha hidden">
                      This site is protected by reCAPTCHA and the Google
                      <a
                        href="https://policies.google.com/privacy"
                        target="_blank"
                        rel="noreferrer"
                        >Privacy Policy</a
                      >
                      and
                      <a
                        href="https://policies.google.com/terms"
                        target="_blank"
                        rel="noreferrer"
                        >Terms of Service</a
                      >
                      apply.
                    </div>
                    <input
                      id="c7bd8baa75b8451e9b180349cbd9f6a6"
                      name="g-recaptcha-response"
                      type="hidden"
                      value="03AFcWeA7WPUxqOfNPeJvMVgmMbYdBHbHumx2_8ac43kqM_BMfBWpRiN-6NbtGmDKqFZIkUv8Pt_fMeH_MN-7TeOnLsx45CIDLlgdecYmHC03ptRbslgj2vAgT1GT6zbbwohgmMu5vnGdhjor94WbVDRmAvUHUrfmZ0IWpXHEwfpKUoiiS-7bozVSevSYY4iK34jZyv2nblxF3wj42lgW9MyoCAI4b1YOTVEUwu7m0VDz6ERGn2N6Fdwr8m_75aqU8LzT8h1SSZKc_vcxY5muewaKQiqgilK3K75OtuP94RWGi26Ejk8PMFJmRGbvlAczT6FhPVEB2kcOkrwTOPMGpH-SSt4NmN57dPJSbkXyqNyEx88JaVJmgvMDqMs6E_Z1Z_mwaSL6VaabOP8ekKA16inOTHRymhShlME7EgXC4eRHahW7qSQ4iaYaW64fWdGJtkXe5Ncc5vnuGpv96yZfA3PCSEg8QY8_5ofPgYlgtesvaNZoNGy674xDy0R7gHKCYdPDHGuagZYUcAT6WN1j1_VuMT1jocyhTUjF-wa1RC_1nymnTUwHz8qmFo38eTTzFtbTgkxzUI4hflsoK2yr28nsgTmihb6-i3AdWFzbDOv7CnR17VQErM-pDOqDUysJ-k35rx82mev9g"
                    />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-footer text-center">
        <div class="container">
          <p>
            Copyright © 2023
            <a href="https://hogwarts-fashion.myharavan.com">
              Nơi quy tụ những thương hiệu thời trang hàng đầu</a
            >.
            <a
              target="_blank"
              href="https://www.haravan.com/?utm_campaign=poweredby&amp;utm_medium=haravan&amp;utm_source=onlinestore"
              >Powered by Haravan</a
            >
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>
