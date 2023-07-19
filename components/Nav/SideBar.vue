<script setup>

const showMenu = ref(false);
const sublink = ref(false)
const title = ref("");
const prependIcon = ref();
let isBigScreen = null;
const toggleShowMenu = ()=>{
  showMenu.value = !showMenu.value;
}
const testShowing = ref(false);

const openTargetDropDownLink = ()=>{
  showMenu.value = false;
  const paths = route.path.split("/");
  let targetDetailsId = paths[1];
  if(route.name == "index"){
    targetDetailsId = "index";
  }
  const targetElement =  document.querySelector(".side-bar #"+targetDetailsId).cloneNode(true);
  if(targetElement){
    targetElement.open = true;
    title.value = targetElement.innerText;
    prependIcon.value.innerHTML  = "";
    prependIcon.value.append(targetElement.querySelector("img"))
  }
  if(paths[2]){
    const subLinkTarget = targetElement.querySelector(`a[href="${route.path}"]`);
    sublink.value = true;
    title.value = subLinkTarget.innerText;
  }else{
    sublink.value = false;
  }
};

const route = useRoute();
onMounted(()=>{
  if(innerWidth >= 640){
    showMenu.value = true;
    isBigScreen = ref(true);
  }else{
    watch(() => route.name, () =>{
      openTargetDropDownLink();
    },{
        immediate:true
    })
  }

});
</script>
<template>
  <aside
    class="side-bar p-5 bg-blue-dark rounded-b-lg sm:rounded-lg sm:max-w-[250px]"
  >
    <div
      v-if="!isBigScreen"
      class="text-white text-right sublinks-contianer"
      @click="toggleShowMenu"
    >
      <div
        class="summary  down-arrow relative flex gap-4 items-center hover:bg-yellow p-2
         rounded text-lg font-bold [direction:rtl] min-h-[33px]"
      >
        <div class="prepend" ref="prependIcon" v-show="!showMenu"></div>
        <div v-show="!showMenu">{{ title }}</div>
      </div>
    </div>

    <div v-show="showMenu">
      <details
        :open="testShowing"
        class="details text-right w-100 my-3 no-arrow"
        id="index"
      >
        <summary
          class="summary text-white text-lg font-bold relative hover:bg-yellow p-2 rounded"
        >
          <NuxtLink
            to="/"
            class="sublink flex justify-end gap-4 "
            active-class="active"
          >
            <div>پیشخوان</div>
            <img
              src="@/assets/css/icons/sidebar/dashboard.png"
              class=" object-contain"
            />
          </NuxtLink>
        </summary>
      </details>
      <details class="details text-right w-100 my-3" id="user-setting">
        <summary
          class="summary text-white text-lg font-bold relative  hover:bg-yellow p-2 rounded"
        >
          <div class="flex justify-end gap-4">
            <div>تنظیمات کاربری</div>
            <img
              src="@/assets/css/icons/sidebar/user.png"
              class=" object-contain"
            />
          </div>
        </summary>
        <div class="text-white pt-4 sublinks-contianer">
          <NuxtLink
            to="/user-setting/operator"
            class="sublink flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
          >
            <div class="text-lg font-bold">تعریف اپراتور</div>
          </NuxtLink>
          <NuxtLink
            to="/user-setting/ip-phone"
            class="sublink flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
          >
            <div class="text-lg font-bold [direction:rtl]">
              تعریف اپراتور IP-Phone
            </div>
          </NuxtLink>
          <NuxtLink
            to="/user-setting/users"
            class="sublink flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
          >
            <div class="text-lg font-bold">لیست کاربران</div>
          </NuxtLink>

          <NuxtLink
            to="/user-setting/manage-role"
            class="sublink flex gap-4 justify-end items-center mb-2 hover:bg-yellow p-2
          pr-5 rounded"
          >
            <div class="text-lg font-bold">مدیریت نقش</div>
          </NuxtLink>
        </div>
      </details>
    </div>
  </aside>
</template>
<style scoped>
 .summary::after {
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
.down-arrow::after{
      transform: translateY(-60%) rotate(-90deg);

}
.side-bar  .details[open] .summary::after{
    transform: translateY(-60%) rotate(-90deg);
}
.summary::marker{
  content: "";
}
.no-arrow .summary::after{
  content: unset;
}
.sublinks-contianer .sublink::after{
  content: "";
  width: 15px;
  height: 15px;
  border-radius: 50%;
  border: 2px solid white;
}
</style>
