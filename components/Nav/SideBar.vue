<template>
  <aside class="p-5 bg-blue-dark rounded-b-lg sm:rounded-lg sm:max-w-[250px] ">
    <details class="text-right w-100 my-3 no-arrow">
      <summary
        class=" text-white text-lg font-bold relative hover:bg-yellow p-2 rounded"
      >
        <router-link to="/" class="flex justify-end gap-4 ">
          <div>پیشخوان</div>
          <img
            src="@/assets/css/icons/sidebar/dashboard.png"
            class=" object-contain"
          />
        </router-link>
      </summary>
    </details>
    <details class="text-right w-100 my-3  ">
      <summary
        class=" text-white text-lg font-bold relative hover:bg-yellow p-2 rounded hover:bg-yellow p-2 rounded"
      >
        <div class="flex justify-end gap-4">
          <div>تنظیمات کاربری</div>
          <img
            src="@/assets/css/icons/sidebar/user.png"
            class=" object-contain"
          />
        </div>
      </summary>
      <ul class="text-white pt-4">
        <router-link
          to="/usert-setting/operator"
          class="flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
        >
          <div class="text-lg font-bold">تعریف اپراتور</div>
        </router-link>
        <router-link
          to="/usert-setting/ip-phone"
          class="flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
        >
          <div class="text-lg font-bold [direction:rtl]">
            تعریف اپراتور IP-Phone
          </div>
        </router-link>
        <router-link
          to="/usert-setting/users"
          class="flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
        >
          <div class="text-lg font-bold">لیست کاربران</div>
        </router-link>

        <router-link
          to="/usert-setting/manage-role"
          class="flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
        >
          <div class="text-lg font-bold">مدیریت نقش</div>
        </router-link>
      </ul>
    </details>
  </aside>
</template>
<style scoped>
 summary::after {
    width: 1em;
    height: 1em;
    position: absolute;
    left: 2%;
    content: "";
    background-image: url("@/assets/css/icons/sidebar/arrow.png");
    background-repeat: no-repeat;
    top: 50%;
    transform: translateY(-50%);
    transition: 0.25s;
}
details[open] summary::after{
    transform: translateY(-60%) rotate(-90deg);
}
summary::marker{
  content: "";
}
.no-arrow summary::after{
  content: unset;
}
ul li::after{
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
}
</style>
