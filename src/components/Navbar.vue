<template>
  <ul class="flex items-center bg-gradient-to-b from-green-500 to-green-300 font-bold">
    <div class="">
    <li class="p-2 active:bg-teal-400"><router-link to="/">home</router-link></li>
    </div> 
    <li class="p-2"><router-link to='/products'>products</router-link></li>
    <li class="p-2"><router-link to='/location' >where</router-link></li>
    <li class="p-2"><router-link to='/members'>members</router-link></li>
    <li class="p-2"><router-link to='/members-two'>members-</router-link></li>
  </ul>
</template>