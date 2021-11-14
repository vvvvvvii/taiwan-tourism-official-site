<template>
  <Navbar @emit-navbar-data="getEmitNavbarData"></Navbar>
  <router-view
    :searchPropsContent="searchContent"
    :searchSpotPropsOption="searchSpotOption"
  ></router-view>
  <Footer></Footer>
</template>

<style lang="scss">
@import './assets/stylesheets/all';
</style>
<script>
import Navbar from '@/components/Navbar.vue';
import Footer from '@/components/Footer.vue';

export default {
  data() {
    return {
      searchContent: '',
      searchSpotOption: '',
    };
  },
  components: {
    Navbar,
    Footer,
  },
  methods: {
    getEmitNavbarData(searchContent, searchSpotOption) {
      this.searchContent = searchContent;
      this.searchSpotOption = searchSpotOption;
    },
  },
};
</script>
