<template>
  <div id="app">
    <router-view />
  </div>
</template>
<script >
import HeadNavVue from './views/HeadNav.vue';
export default {
    data() {
      return{
      }
    },
    props:[],
    components: {
      HeadNavVue
    },
    created() {
    },
    mounted() {
    },
    methods:{
    }
  };
</script>
<style lang="scss">

</style>
