<template>
  <div
    class="flex flex-col justify-around items-center border-solid border-2 p-4 my-3 border-red-300 w-full h-3/6 rounded-md"
  >
    <!--  Name -->
    <div class="red text-xl text-blue-500 bg-slate-200 p-4">
      <slot name="firstName"> </slot>
    </div>
    <!--  LastName-->
    <slot> </slot>

    <!-- ID -->
    <slot name="id"> Default ID </slot>
  </div>
</template>
