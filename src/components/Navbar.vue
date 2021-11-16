<template>
  <div class="navbar">
    <h1 class="header-logo">
      <router-link to="/" title="回到首頁"></router-link>
    </h1>
    <div class="input-group bg-light rounded-3 w-50">
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
    <ul class="d-flex">
      <li>
        <a href="#" class="d-flex flex-column align-items-center fs-xxs">
          <i class="bi bi-facebook fs-xxxl mb-3"></i>
          facebook
        </a>
      </li>
      <li class="ms-8">
        <a href="#" class="d-flex flex-column align-items-center fs-xxs">
          <i class="bi bi-globe fs-xxxl mb-3"></i>
          語言
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      optionListShow: false,
      searchSpotOption: '全部景點',
      searchContent: '',
    };
  },
  methods: {
    showOptions() {
      this.optionListShow = !this.optionListShow;
    },
    changeSearchSpotOption(e) {
      if (e.target.innerHTML.length === 4) {
        this.searchSpotOption = e.target.innerHTML;
      }
    },
  },
};
</script>
