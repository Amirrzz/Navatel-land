<script setup>

onMounted(()=>{
  // Fetch all the details element.
const details = [...document.querySelectorAll(".large-screen-links-container details")];
document.addEventListener('click', function(e){
  if(details.some(f => f.contains(e.target)).length != 0){
    details.forEach(f => f.removeAttribute('open'));
  }
});

});
</script>

<template>
  <div class="hidden sm:block large-screen-links-container">
    <nav
      class=" px-4 py-4 text-lg font-bold  flex-row-reverse gap-4 justify-end 
"
    >
      <menu
        class=" px-4 py-4 text-lg font-bold flex flex-row-reverse gap-4 justify-end
"
      >
        <div class=" text-blue-light bg-white-500 flex gap-2 ">
          <div class="">ورود به پنل مدیریتی</div>
          <img height="18" width="18" src="@/assets/css/icons/nav/user.svg" />
        </div>
        <div class=" text-[#6377B9] flex gap-2 justify-end">
          <div class="">دانلود اپلیکیشن</div>
        </div>
        <div class=" text-[#6377B9] flex gap-2 justify-end">
          <div class="">وبلاگ</div>
        </div>
        <div class=" text-[#6377B9] flex gap-2 justify-end">
          <div class="">پشتیبانی</div>
        </div>
        <div class=" text-[#6377B9] flex gap-2 justify-end">
          <div class="">اعطای نمایندگی</div>
        </div>
        <a
          href="tel:02191691000"
          class=" text-blue-light flex gap-2 justify-end"
        >
          <div class="">021&nbsp;91&nbsp;69&nbsp;1000</div>
        </a>
      </menu>
    </nav>
    <nav
      class=" px-4 py-4 text-lg font-bold flex flex-row-reverse gap-4 justify-between
"
    >
      <menu class="flex justify-end gap-6 items-center">
        <details class="text-right w-100 my-3 relative">
          <summary class="text-blue-dark text-lg font-bold">
            ارتباط با ما
          </summary>
          <div class=" absolute bg-white p-4 rounded right-0 ">
            <ul class="text-blue-dark pr-4 pt-4  min-w-max flex flex-col gap-2">
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">درباره ما</div>
                <img
                  src="@/assets/css/icons/nav/about-us.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">تماس با ما</div>
                <img
                  src="@/assets/css/icons/nav/contact-us.svg"
                  height="16"
                  width="16"
                />
              </li>

              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">فرصت های شغلی</div>
                <img
                  src="@/assets/css/icons/nav/catalog.svg"
                  height="16"
                  width="16"
                />
              </li>
            </ul>
          </div>
        </details>

        <details class="text-right w-100 my-3 relative">
          <summary class="text-blue-dark text-lg font-bold">منابع</summary>
          <div class=" absolute bg-white p-4 rounded right-0 ">
            <ul class="text-blue-dark pr-4 pt-4  min-w-max flex flex-col gap-2">
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">آموزش</div>
                <img
                  src="@/assets/css/icons/nav/teacher.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">کاتالوگ</div>
                <img
                  src="@/assets/css/icons/nav/catalog.svg"
                  height="16"
                  width="16"
                />
              </li>
            </ul>
          </div>
        </details>

        <div class="[direction:rtl]  text-blue-dark text-lg font-bold my-3">
          تعرفه ها
        </div>

        <details class="text-right w-100 my-3 relative">
          <summary class="text-blue-dark text-lg font-bold">امکانات</summary>
          <div class=" absolute bg-white p-4 rounded right-0 ">
            <ul class="text-blue-dark pr-4 pt-4  min-w-max flex flex-col gap-2">
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">پنل مدیریتی</div>
                <img
                  src="@/assets/css/icons/nav/masonry.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">دفتر کار مجازی</div>
                <img
                  src="@/assets/css/icons/nav/labtop.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">تلفن گویا</div>
                <img
                  src="@/assets/css/icons/nav/assissant-men.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold [direction:rtl]">
                  اتصال به CRM
                </div>
                <img
                  src="@/assets/css/icons/nav/seeting-mobile.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">مرکز تماس</div>
                <img
                  src="@/assets/css/icons/nav/central-operator.svg"
                  height="16"
                  width="16"
                />
              </li>
            </ul>
          </div>
        </details>

        <details class="text-right w-100 my-3 relative">
          <summary class="text-blue-dark text-lg font-bold">محصولات</summary>
          <div class=" absolute bg-white p-4 rounded right-0">
            <ul class="text-blue-dark pr-4 pt-4 min-w-max flex flex-col gap-2">
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">مرکز تلفن ابری</div>
                <img
                  src="@/assets/css/icons/nav/assissant.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">تلفن اینترنتی</div>
                <img
                  src="@/assets/css/icons/nav/cloud-mobile.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">چت آنلاین</div>
                <img
                  src="@/assets/css/icons/nav/chat.svg"
                  height="16"
                  width="16"
                />
              </li>
              <li class="flex gap-4 justify-end items-center">
                <div class="text-lg font-bold">اپلیکیشن اختصاصی</div>
                <img
                  src="@/assets/css/icons/nav/seeting-mobile.svg"
                  height="16"
                  width="16"
                />
              </li>
            </ul>
          </div>
        </details>

        <img src="@/assets/css/icons/Logo.svg" width="120" height="60" />
      </menu>
      <button
        class=" bg-blue-light text-white rounded px-5 py-3 font-medium my-3"
      >
        خرید آنلاین
      </button>
    </nav>
  </div>
</template>

<style scoped>
details[open] summary{
  color: #1166FB;
}
summary{
transition: 0.5s;
}
</style>
