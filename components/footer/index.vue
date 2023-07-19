<template>
  <div
    class="bg-gray pt-4 [direction:rtl] px-10 border-b-[5px]  border-b-blue-dark"
  >
    <section class="flex flex-col sm:flex-row">
      <div class=" sm:border-l-[2px]  border-l-blue-dark p-4  sm:w-1/3">
        <div class="text-lg text-blue-dark font-bold my-10 sm:text-3xl">
          به کسب و کار
          <span class="circle-gold-background ">بهتریی</span> تبدیل شوید
        </div>
        <div
          class="text-base ont-bold flex justify-start flex-row-reverse align-baseline text-blue-light arrow-after relative"
        >
          مشاهده مطالب وبلاگ
        </div>
      </div>
      <div
        class="inline-flex flex-col gap-2 sm:pr-6 sm:gap-1 w-full max-h-[380px] flex-wrap sm:flex-row sm:justify-between"
      >
        <div class="flex text-blue-dark flex-col gap-2 sm:order-1">
          <header class="font-bold text-lg">محصولات</header>
          <div class="text-base">مرکز تلفن ابری</div>
          <div class="text-base">تلفن اینترنتی</div>
          <div class="text-base">چت آنلاین</div>
          <div class="text-base">اپلیکیشن اختصاصی</div>
        </div>
        <div class="flex text-blue-dark flex-col gap-2 sm:order-4">
          <header class="font-bold text-lg">ارتباط با نواتل</header>
          <div class="text-base">درباره ما</div>
          <div class="text-base">تماس با ما</div>
          <div class="text-base">فرصت های شغلی</div>
        </div>

        <div class="flex text-blue-dark flex-col gap-2 sm:order-3">
          <header class="font-bold text-lg">منابع</header>
          <div class="text-base">آموزش</div>
          <div class="text-base">تماس با ما</div>
          <div class="text-base">کاتالوگ</div>
        </div>
        <div class="flex text-blue-dark flex-col gap-2 sm:order-2">
          <header class="font-bold text-lg">امکانات</header>
          <div class="text-base">داشبورد مدیریتی</div>
          <div class="text-base">دفتر کار مجازی</div>
          <div class="text-base">تلفن گویا</div>
          <div class="text-base [direction:rtl]">اتصال به CRM</div>
          <div class="text-base">مرکز تماس</div>
        </div>

        <div
          class="flex flex-col sm:w-1/5 gap-2  sm:[direction:ltr] sm:order-5  mt-[30px] sm:mt-0 "
        >
          <div class="flex w-100 gap-2 sm:gap-4">
            <div
              class=" bg-no-repeat bg-center  bg-contain rounded-lg sm:rounded-xl sm:p-1 p-2 bg-white shadow-xl h-[70px] sm:h-[5vw] w-[50%] max-w-[72px]  bg-[url('@/assets/images/footer/NSR-Nezam-Senfi-Logo.png')]"
            ></div>
            <div
              class=" bg-no-repeat bg-center bg-contain rounded-lg sm:rounded-xl sm:p-1 p-2 bg-white shadow-xl h-[70px] sm:h-[5vw] w-[50%] max-w-[72px]  bg-[url('@/assets/images/footer/Samane-pasokhgoei-Logo.png')]"
            ></div>
          </div>

          <div class="flex w-100 gap-2 sm:gap-4">
            <div
              class=" bg-no-repeat bg-center bg-contain rounded-lg sm:rounded-xl sm:p-1 p-2 bg-white shadow-xl h-[70px] sm:h-[5vw] w-[50%] max-w-[72px]  bg-[url('@/assets/images/footer/enamad_Logo.png')]"
            ></div>
            <div
              class=" bg-no-repeat bg-center bg-contain rounded-lg sm:rounded-xl sm:p-1 p-2 bg-white shadow-xl h-[70px] sm:h-[5vw] w-[50%] max-w-[72px]  bg-[url('@/assets/images/footer/Sazmandehi.png')]"
            ></div>
          </div>
        </div>
      </div>
    </section>
    <section class="mt-8">
      <div class="flex justify-between items-center gap-2">
        <div
          class="hirozintal-line bg-[#001D7E4D] rounded h-[1px] w-3/4 sm:w-full"
        ></div>
        <div class="social-medias-container flex gap-2 w-1/4 max-w-min">
          <div class="p-1 bg-blue-dark rounded-full">
            <Icon name="simple-icons:aparat" color="white" size="1.9rem" />
          </div>
          <div class="p-1 bg-blue-dark rounded-full">
            <Icon name="tabler:brand-instagram" color="white" size="1.9rem" />
          </div>
          <div class="p-1 bg-blue-dark rounded-full">
            <Icon name="entypo-social:linkedin" color="white" size="1.9rem" />
          </div>
        </div>
      </div>
      <div class="text-blue-dark text-xs sm:text-sm w-3/4 py-1 pb-6">
        تمام حقوق مادی و معنوی متعلق به نواتل، تنها سرویس یکپارچه ابری (UCaaS)
        در ایران می‌باشد.
      </div>
    </section>
  </div>
</template>
<style scoped>
.circle-gold-background{
  position: relative;
}
.circle-gold-background::after{
  position: absolute;
  content: "";
  display: block;
  width: 9vw;
  height: 9vw;
  border-radius: 50%;
  background-color: rgb(254 221 91);
  z-index: -1;
  top:50%;
  left: 60%;
  transform: translate(-50%,-50%);
      max-width: 45px;
    max-height: 45px;

}
.arrow-after::before{
    content:'\20D6';
    font-size: 30px;
    position: relative;
    padding: 0 1rem;
    bottom: -11px;

}
</style>
