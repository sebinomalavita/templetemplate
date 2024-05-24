<template>
  <div class="home">
    <h1>Homepage</h1>
    <!-- Includi la tua componente ImageEditor -->
    
    <ImageEditor />
  </div>
</template>


<template>
  <div class="sidebar"
       :style="sidebarStyle"
       :data-color="backgroundColor"
       :data-image="backgroundImage">
    <div class="sidebar-wrapper">
      <div class="logo">
        <a href="#" class="simple-text logo__container">
            <div class="logo-img">
                <img src="img/vue-logo.png" alt="">
            </div>
          {{title}}
        </a>
      </div>

      <slot name="content"></slot>
      <ul class="nav nav-main__links">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <slot>
          <sidebar-link v-for="(link,index) in sidebarLinks"
                        :key="link.name + index"
                        :to="link.path"
                        @click="closeNavbar"
                        :link="link">
            <i :class="link.icon"></i>
            <p>{{link.name}}</p>
          </sidebar-link>
        </slot>
      </ul>
      <ul class="nav nav-bottom" v-if="$slots['bottom-links']">
        <slot name="bottom-links"></slot>
      </ul>
    </div>
  </div>
</template>

<script>
// Importa la tua componente ImageEditor
import ImageEditor from '@/components/ImageEditor.vue'; // Assicurati di utilizzare il percorso corretto
import sidebar from '@/components/sidebar-menu/index.vue';
export default {
  name: 'Home',
  components: {
    ImageEditor // Registra la tua componente per poterla utilizzare nel template
  }
}
</script>

<style>
/* Stili specifici per questa vista */
</style>

