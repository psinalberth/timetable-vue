<!-- <div>
  <v-toolbar :color="$store.state.currentColor" fixed="fixed" dark="dark" app="app" id="main-toolbar">
    <v-toolbar-side-icon @click.stop="toggleSidebar"></v-toolbar-side-icon>
    <v-btn icon="icon" large="large" @click="isSearching = true">
      <v-icon>search</v-icon>
    </v-btn>
    <transition name="slide" mode="out-in">
      <v-toolbar-title class="d-flex" v-html="$store.state.h1" style="position: relative" v-bind:key="$store.state.h1"></v-toolbar-title>
    </transition>
  </v-toolbar>
  <v-toolbar :color="$store.state.currentColor" fixed="fixed" dark="dark" app="app" :manual-scroll="!isSearching" ref="toolbar" flat="flat">
    <v-btn icon="icon" dark="dark" large="large" @click="isSearching = false">
      <v-icon>arrow_back</v-icon>
    </v-btn>
    <v-text-field placeholder="Search" prepend-icon="search" id="search" clearable="clearable" single-line="single-line" solo="solo" key="search" v-model="search" ref="search"></v-text-field>
  </v-toolbar>
</div> -->
<template>
 <v-toolbar app fixed dark class="primary">
    <v-toolbar-side-icon 
      @click.native.stop="drawer = !drawer"
      class="hidden-sm-and-up">  
    </v-toolbar-side-icon>
    <v-toolbar-title>
      <router-link to="/" tag="span" style="cursor: pointer">Timetable</router-link>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-xs-only">
      <v-btn flat v-if="item.toolbar" 
        v-for="item in menuItems" 
        :key="item.title"
        :to="{name: item.link}">
        <v-icon left>{{ item.icon }}</v-icon>
        {{ item.title }}
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
 export default {
   props: ['menuItems']
 }
</script>