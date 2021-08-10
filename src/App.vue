<template>
  <div v-if="$isPageBlank()">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"/>
    </transition>
  </div>

  <platon-layout v-else-if="$route.name === 'table'">
    <transition name="fade" mode="out-in">
      <router-view :key="$route.fullPath"/>
    </transition>
  </platon-layout>

  <platon-layout v-else>
    <transition name="fade" mode="out-in">
      <router-view :key="$route.path"/>
    </transition>
  </platon-layout>
</template>
