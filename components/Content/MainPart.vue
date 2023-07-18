<script setup>

const props = defineProps({
  vedioLink:{
    type:String,
    default:'http://cdn.papercut.com/video/home/home2.mp4'
  },
  vedioType:{
    type:String,
    default:'video/mp4'
  },
  downloadLink:{
    type:String,
    default:""
  }
});
</script>
<template>
  <header
    class=" text-blue-dark [direction:rtl] p-5 px-11 text-2xl font-bold mb-5 text-justify"
  >
    <slot name="title" />
  </header>
  <article class="flex justify-center items-center w-100 ">
    <video
      class="rounded-t-lg sm:rounded-lg sm:w-[50vw]"
      height="300"
      controls
      disablePictureInPicture
      controlsList="nofullscreen nodownload noplaybackrate"
    >
      <source :src="vedioLink" type="video/mp4" />
    </video>
  </article>
  <footer class="p-5 main-part-footer " dir="rtl">
    <h4 class="mb-8 text-blue-dark text-lg font-bold">
      <slot name="subtitle" />
    </h4>

    <div
      class="bg-gray p-10 flex flex-col gap-4 rounded sm:text-right text-center"
    >
      <div class=" text-lg font-bold text-blue-dark">
        <!-- دانلود متن ویدئو (پیشخوان داشبورد) به صورت PDF : -->
        <slot name="footer-heading" />
      </div>
      <div class=" text-base  text-blue-dark">
        حجم فایل:
        <slot name="footer-file-size" />
      </div>
      <a :href="downloadLink" class=" text-base  text-blue-dark">
        دانلود با لینک مستقیم
      </a>
      <div class="text-base  text-blue-dark"></div>
    </div>
  </footer>
</template>
