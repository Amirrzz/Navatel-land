<template>
  <NavLargeScreen />
  <NavMobile />
  <!-- <ContentMainPart /> -->
  <main class="my-10 px-10">
    <NuxtPage />
    <NavSideBar />
  </main>
  <LazyFooter />
</template>
<style>
main{
    display: grid;
    grid-template-areas:
    "head head head"
    "content content content"
    "side side side"
    "foot foot foot";
    transition: 0.5s;
}

@media (min-width: 640px)  {
main{
    grid-template-areas:
    "head head head head head side"
    "content content content content content side"
    "foot foot foot foot foot side";
}
}


header {
    grid-area: head;
}
article {
    grid-area: content;
}
aside {
    grid-area: side;
    min-width: 215px;
}
footer {
    grid-area: foot;
}
</style>
