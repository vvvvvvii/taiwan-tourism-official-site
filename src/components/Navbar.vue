<template>
  <!-- 手機版漢堡選單 -->
  <div class="hamburger-menu" :class="{ active: hamburgerMenuShow }">
    <p class="mb-10" @click="toggleHamburgerMenu">
      <i class="bi bi-chevron-left text-light fw-bold fs-xxxl"></i>
    </p>
    <div class="input-group bg-light rounded-3 mb-3">
      <input
        type="text"
        class="form-control"
        placeholder="你想去哪裡？台南景點"
        aria-label="你想去哪裡？台南景點"
        v-model="searchContent"
      />
      <router-link
        to="/attraction-list"
        class="btn btn-success px-6 py-2"
        type="button"
        @click="sendEmitNavbarData"
      >
        <i class="bi bi-search"></i>
      </router-link>
    </div>
    <div class="d-flex justify-content-end mb-6">
      <div
        class="navbar-select-btn justify-content-center rounded-3 w-50 position-relative"
        @click="showOptions"
      >
        <p class="fs-md">{{ searchSpotOption }}</p>
        <ul v-show="optionListShow" class="navbar-option-list" @click="changeSearchSpotOption">
          <li>全部景點</li>
          <li>熱門景點</li>
          <li>網美景點</li>
          <li>戶外景點</li>
          <li>運動景點</li>
          <li>DIY 活動</li>
        </ul>
        <i class="bi bi-caret-down-fill text-warning ms-6"></i>
      </div>
    </div>
    <p class="fs-xxxs mb-3">推薦景點</p>
    <ul>
      <li class="d-flex align-items-center mb-3">
        <div class="p-3 bg-light opacity-75 rounded-1"><i class="bi bi-geo-alt"></i></div>
        <p class="ms-3">Taipei‧台北 2021 燈節</p>
      </li>
    </ul>
  </div>
  <div class="navbar">
    <h1 class="header-logo mx-md-0 mx-auto mb-md-0 mb-4">
      <router-link to="/" title="回到首頁"></router-link>
    </h1>
    <div class="input-group d-md-flex d-none bg-light rounded-3 w-50">
      <input
        type="text"
        class="form-control"
        placeholder="你想去哪裡？台南景點"
        aria-label="你想去哪裡？台南景點"
        v-model="searchContent"
      />
      <div
        class="navbar-select-btn pe-4 py-2 position-relative"
        :class="{ active: optionListShow }"
        @click="showOptions"
      >
        <div class="border-warning ps-4" :class="{ 'border-start': !optionListShow }">
          <p class="fs-md text-warning">{{ searchSpotOption }}</p>
          <ul v-show="optionListShow" class="navbar-option-list" @click="changeSearchSpotOption">
            <li>全部景點</li>
            <li>熱門景點</li>
            <li>網美景點</li>
            <li>戶外景點</li>
            <li>運動景點</li>
            <li>DIY 活動</li>
          </ul>
        </div>
        <i class="bi bi-caret-down-fill text-warning ms-3"></i>
      </div>
      <router-link
        to="/attraction-list"
        class="btn btn-success px-6 py-2"
        type="button"
        @click="$emit('emit-navbar-data', searchContent, searchSpotOption)"
      >
        <i class="bi bi-search"></i>
      </router-link>
    </div>
    <ul class="d-flex mb-md-0 mb-4">
      <li class="d-md-block d-none">
        <a href="#" class="d-flex flex-column align-items-center fs-xxs">
          <i class="bi bi-facebook fs-xxxl mb-3"></i>
          facebook
        </a>
      </li>
      <li class="ms-md-8">
        <a href="#" class="d-flex flex-column align-items-center fs-xxs">
          <i class="bi bi-globe fs-xxxl mb-3"></i>
          語言
        </a>
      </li>
    </ul>
    <div class="input-group d-md-none align-items-center bg-light rounded-3">
      <input
        type="text"
        class="form-control text-center"
        placeholder="你想去哪裡？台南景點"
        aria-label="你想去哪裡？台南景點"
        @click="toggleHamburgerMenu"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionListShow: false,
      hamburgerMenuShow: false,
      searchContent: '',
      searchSpotOption: '全部景點',
    };
  },
  emits: ['emit-navbar-data'],
  methods: {
    showOptions() {
      this.optionListShow = !this.optionListShow;
    },
    changeSearchSpotOption(e) {
      if (e.target.innerHTML.length === 4) {
        this.searchSpotOption = e.target.innerHTML;
      }
    },
    toggleHamburgerMenu() {
      this.hamburgerMenuShow = !this.hamburgerMenuShow;
    },
    sendEmitNavbarData() {
      this.$emit('emit-navbar-data', this.searchContent, this.searchSpotOption);
      this.hamburgerMenuShow = false;
    },
  },
};
</script>
