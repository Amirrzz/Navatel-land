<script setup>
const menuIsOpen = ref(false);

const toggleMenu = ()=>{
let bodyDocument = document.querySelector("html body");
let mainTagElement = bodyDocument.querySelector("main");
menuIsOpen.value = !menuIsOpen.value;
if(menuIsOpen.value){
bodyDocument.classList.add("overflow-hidden");
mainTagElement.classList.add("blur-[3px]");
}else{
bodyDocument.classList.remove("overflow-hidden");
mainTagElement.classList.remove("blur-[3px]");
}

}

onBeforeUnmount(() => {
let bodyDocument = document.querySelector("html body");
let mainTagElement = bodyDocument.querySelector("main");
bodyDocument.classList.remove("overflow-hidden");
mainTagElement.classList.remove("blur-[3px]");

});
</script>

<template>
  <div class="sm:hidden">
    <div class="[direction:rtl] py-1 pr-4">
      <a href="tel:02191691000" class="text-blue-dark font-bold text-sm ">
        021&nbsp;91&nbsp;69&nbsp;1000
      </a>
    </div>
    <hr class="h-[1px] bg-gray opacity-10" />

    <div class="[direction:rtl] flex justify-between py-1 pr-2 pl-4">
      <div
        class="hamburger-icon"
        @click="toggleMenu"
        :class="{open:menuIsOpen}"
      >
        <div class="bar1 bg-blue-dark"></div>
        <div class="bar2 bg-blue-dark"></div>
        <div class="bar3 bg-blue-dark"></div>
      </div>
      <img src="@/assets/css/icons/Logo.svg" width="82" height="40" />
    </div>
    <nav
      class="flex w-full fixed max-h-[85vh] overflow-auto flex-col items-end pr-8 pb-8 bg-white z-10"
      v-show="menuIsOpen"
    >
      <menu class="w-full ">
        <!-- First Link -->
        <details class="text-right w-100 my-3 ">
          <summary class=" text-blue-dark text-base font-bold">محصولات</summary>
          <ul class="text-blue-dark pr-4 pt-4">
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">مرکز تلفن ابری</div>
              <img
                src="@/assets/css/icons/nav/assissant.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">تلفن اینترنتی</div>
              <img
                src="@/assets/css/icons/nav/cloud-mobile.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">چت آنلاین</div>
              <img
                src="@/assets/css/icons/nav/chat.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">اپلیکیشن اختصاصی</div>
              <img
                src="@/assets/css/icons/nav/seeting-mobile.svg"
                height="16"
                width="16"
              />
            </li>
          </ul>
        </details>

        <!-- Sec Link -->
        <details class="text-right w-100 my-3">
          <summary class=" text-blue-dark text-base font-bold">امکانات</summary>
          <ul class="text-blue-dark pr-4 pt-4">
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">پنل مدیریتی</div>
              <img
                src="@/assets/css/icons/nav/masonry.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">دفتر کار مجازی</div>
              <img
                src="@/assets/css/icons/nav/labtop.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">تلفن گویا</div>
              <img
                src="@/assets/css/icons/nav/assissant-men.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold [direction:rtl]">
                اتصال به CRM
              </div>
              <img
                src="@/assets/css/icons/nav/seeting-mobile.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">مرکز تماس</div>
              <img
                src="@/assets/css/icons/nav/central-operator.svg"
                height="16"
                width="16"
              />
            </li>
          </ul>
        </details>

        <!-- Third Link -->
        <div class="[direction:rtl]  text-blue-dark text-base font-bold my-3">
          تعرفه ها
        </div>

        <!-- Fourth Link -->
        <details class="text-right w-100 my-3 ">
          <summary class=" text-blue-dark text-base font-bold">منابع</summary>
          <ul class="text-blue-dark pr-4 pt-4">
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">آموزش</div>
              <img
                src="@/assets/css/icons/nav/teacher.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">کاتالوگ</div>
              <img
                src="@/assets/css/icons/nav/catalog.svg"
                height="16"
                width="16"
              />
            </li>
          </ul>
        </details>

        <!-- Fifth Link -->
        <details class="text-right w-100 my-3 ">
          <summary class=" text-blue-dark text-base font-bold">
            ارتباط با ما
          </summary>
          <ul class="text-blue-dark pr-4 pt-4">
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">درباره ما</div>
              <img
                src="@/assets/css/icons/nav/about-us.svg"
                height="16"
                width="16"
              />
            </li>
            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">تماس با ما</div>
              <img
                src="@/assets/css/icons/nav/contact-us.svg"
                height="16"
                width="16"
              />
            </li>

            <li class="flex gap-4 justify-end items-center">
              <div class="text-base font-bold">فرصت های شغلی</div>
              <img
                src="@/assets/css/icons/nav/catalog.svg"
                height="16"
                width="16"
              />
            </li>
          </ul>
        </details>
      </menu>
      <button
        class=" bg-blue-light text-white rounded px-8 py-2 font-medium my-3"
      >
        خرید آنلاین
      </button>
      <menu class="w-full">
        <section
          class=" text-blue-light text-lg font-bold flex gap-2 justify-end"
        >
          <div class="">ورود به پنل مدیریتی</div>
          <img height="18" width="18" src="@/assets/css/icons/nav/user.svg" />
        </section>
        <section
          class="flex justify-between flex-wrap w-full items-center [direction:rtl]  text-blue-dark text-base font-bold"
        >
          <div class="my-2 w-1/2">دانلود اپلیکیشن</div>
          <div class="my-2 w-1/2">پشتیبانی</div>
          <div class="my-2 w-1/2">اعطای نمایندگی</div>
          <div class="my-2 w-1/2">وبلاگ</div>
        </section>
      </menu>
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
.hamburger-icon {
  display: inline-block;
  cursor: pointer;
  transform: scale(0.5);
}

.bar1, .bar2, .bar3 {
  width: 35px;
  height: 5px;
  margin: 6px 0;
  transition: 0.4s;
}

/* Rotate first bar */
.open .bar1 {
  transform: translate(0, 11px) rotate(-45deg);
}

/* Fade out the second bar */
.open .bar2 {opacity: 0;}

/* Rotate last bar */
.open .bar3 {
  transform: translate(0, -11px) rotate(45deg);
}
</style>
