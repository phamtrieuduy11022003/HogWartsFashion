<template>
  <div class="mainContent-theme">
    <div class="flex">
      <div class="box-info-contact p-11">
        <ul class="list-info">
          <h1 class="text-4xl w-40 border-b-4 border-black pb-3">Liên hệ</h1>

          <li class="py-3">
            <p>Địa chỉ chúng tôi</p>
            <p>
              <strong
                >Tầng 4, tòa nhà Flemington, số 182, đường Lê Đại Hành, phường 15, quận
                11, Tp. Hồ Chí Minh.</strong
              >
            </p>
          </li>
          <li class="py-3">
            <p>Email chúng tôi</p>
            <p><strong>hi@haravan.com</strong></p>
          </li>
          <li class="py-3">
            <p>Điện thoại</p>
            <p><strong>1900.636.099</strong></p>
          </li>
          <li>
            <p>Thời gian làm việc</p>
            <p>
              <strong
                >Thứ 2 đến Thứ 6 từ 8h đến 18h; Thứ 7 và Chủ nhật từ 8h00 đến
                17h00</strong
              >
            </p>
          </li>
        </ul>
      </div>
      <div class="layout-pageContact p-11">
        <div class="container mx-auto">
          <div class="col-span-12 md:col-span-6 wrapbox-content-page-contact">
            <div class="box-send-contact">
              <h2 class="text-4xl  border-b-4 border-black pb-3">Gửi thắc mắc cho chúng tôi</h2>
              <div id="col-left contactFormWrapper" class="py-5">
                <form
                  accept-charset="UTF-8"
                  action="/contact"
                  class="contact-form"
                  method="post"
                >
                  <input type="hidden" name="form_type" value="contact" />
                  <input type="hidden" name="utf8" value="✓" />
                  <div class="contact-form">
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div class="col-span-12">
                        <input
                          required
                          type="text"
                          name="contact[name]"
                          class="w-full p-2 rounded border"
                          placeholder="Tên của bạn"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="col-span-12 md:col-span-6">
                        <input
                          required
                          type="text"
                          name="contact[email]"
                          class="w-full p-2 rounded border"
                          placeholder="Email của bạn"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="col-span-12 md:col-span-6">
                        <input
                          pattern="[0-9]{10,12}"
                          required
                          type="text"
                          name="contact[phone]"
                          class="w-full p-2 rounded border"
                          placeholder="Số điện thoại của bạn"
                          aria-describedby="basic-addon1"
                        />
                      </div>
                      <div class="col-span-12">
                        <textarea
                          required
                          name="contact[body]"
                          class="w-full p-2 rounded border"
                          placeholder="Nội dung"
                        ></textarea>
                        <div class="sitebox-recaptcha">
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
                      </div>
                      <div class="col-span-12">
                        <button
                          class="w-full bg-gray-800 text-white p-2 rounded hover:bg-gray-600 transition duration-300"
                        >
                          Gửi cho chúng tôi
                        </button>
                      </div>
                    </div>
                  </div>
                  <input
                    id="bb87cf4e4bb843b186d1d07a71039299"
                    name="g-recaptcha-response"
                    type="hidden"
                    value="03AFcWeA4Q8eEwqo_eFPIotRJ4X82APdpT3oWMXZx9IBrgaxp5w56yoRnlvEgQDVSLYJUyQygMLZZyv0mjf4EE26f2oIXdCWWptE-T2tk67PTTpnIKFpNe3kNZvkoduwrNVTa8e3PhHn0ZVlhzjN7WtjzcipTs1qiTneeLj0XhVw02NlmEfae9M6rEkszOj3dAIUMUSp7JtQrVSp0Q6W8G_cPZ4vKNAH8-QtnNt7GV9dR4aQLBAWyaKswwF9jZX0MsmomyjG4ogaMWvr-4u8Fb-D-BZWLupfA70kMAHx02-KfrUfwCusdZ48mNac3j8pfb7VoZA8FbjpB18r5VmNAUje0et0K98bv-y22LXxvpGdMrJ3HLF03YyU3dwlx2ujY24gndE6zLETzcSNHiThSgQ0vNRmRW6ztOl0fpM32g81HT2DEznoBnAyQ-anTXzZJ9920n1fDvu8LY8oiUdn_ErDtU2K2fagTX5t-KGyH3gznhftluS022O1L8ANqdQgaiej0c1EW9ZcpbvRkap6DaEzbWAgEd1supLoGah75OJ9-jINK4NOlcBbr7Gvt5APT-bcndkSV87d6xS2u4xTfc4xhl9LINKEqQ2rbWnFKhSR3j4076JR3bHdUJjZ20mRmaoMaQ5vLgpbK5"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
