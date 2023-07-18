<template>
  <div
    class="bg-gray pt-4 [direction:rtl] px-10 border-b-[5px]   border-b-blue-dark"
  >
    <section>
      <div class="text-lg text-blue-dark font-bold my-10">
        به کسب و کار
        <sapn class="circle-gold-background ">بهتریی</sapn> تبدیل شوید
      </div>
      <div
        class="text-base text-blue-light font-bold flex justify-start flex-row-reverse align-baseline arrow-after relative"
      >
        مشاهده مطالب وبلاگ
      </div>
    </section>
    <section class="flex">
      <div class="inline-flex flex-col gap-3 w-1/2">
        <header class="text-blue-dark font-bold text-lg">محصولات</header>
        <div class="text-blue-light  text-base">مرکز تلفن ابری</div>
        <div class="text-blue-light  text-base">تلفن اینترنتی</div>
        <div class="text-blue-light  text-base">چت آنلاین</div>
        <div class="text-blue-light  text-base">اپلیکیشن اختصاصی</div>
        <header class="text-blue-dark font-bold text-lg">
          ارتباط با نواتل
        </header>
        <div class="text-blue-light  text-base">درباره ما</div>
        <div class="text-blue-light  text-base">تماس با ما</div>
        <div class="text-blue-light  text-base">فرصت های شغلی</div>
        <header class="text-blue-dark font-bold text-lg">منابع</header>
        <div class="text-blue-light  text-base">آموزش</div>
        <div class="text-blue-light  text-base">تماس با ما</div>
        <div class="text-blue-light  text-base">کاتالوگ</div>
      </div>
      <div class="flex flex-col gap-3 w-1/2 justify-between">
        <div class="flex flex-col gap-2">
          <header class="text-blue-dark font-bold text-lg">امکانات</header>
          <div class="text-blue-light  text-base">داشبورد مدیریتی</div>
          <div class="text-blue-light  text-base">دفتر کار مجازی</div>
          <div class="text-blue-light  text-base">تلفن گویا</div>
          <div class="text-blue-light  text-base [direction:rtl]">
            اتصال به CRM
          </div>
          <div class="text-blue-light  text-base">مرکز تماس</div>
        </div>

        <div class="inline-flex  flex-wrap gap-3">
          <div
            class=" bg-no-repeat bg-center rounded p-2 bg-white shadow h-[70px] w-[45%] bg-[url('@/assets/images/footer/NSR-Nezam-Senfi-Logo.png')]"
          ></div>
          <div
            class=" bg-no-repeat bg-center rounded p-2 bg-white shadow h-[70px] w-[45%] bg-[url('@/assets/images/footer/Samane-pasokhgoei-Logo.png')]"
          ></div>
          <div
            class=" bg-no-repeat bg-center rounded p-2 bg-white shadow h-[70px] w-[45%] bg-[url('@/assets/images/footer/enamad_Logo.png')]"
          ></div>
          <div
            class=" bg-no-repeat bg-center rounded p-2 bg-white shadow h-[70px] w-[45%] bg-[url('@/assets/images/footer/Sazmandehi.png')]"
          ></div>
        </div>
      </div>
    </section>
    <section>
      <div class="flex justify-between items-center gap-2">
        <div class="hirozintal-line bg-[#001D7E4D] rounded h-[1px] w-3/4"></div>
        <div class="social-medias-container flex gap-2 w-1/4">
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
      <div class="text-blue-dark text-xs w-3/4 py-1 pb-6">
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

}
.arrow-after::before{
    content:'\20D6';
    font-size: 30px;
    position: relative;
    padding: 0 20px;
    bottom: -11px;

}
</style>
