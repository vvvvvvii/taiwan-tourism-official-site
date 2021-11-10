<template>
  <div class="navbar">
    <h1 class="header-logo"><a href="/" title="回到首頁"></a></h1>
    <div class="input-group bg-light rounded-3 w-50">
      <input
        type="text"
        class="form-control"
        placeholder="你想去哪裡？台南景點"
        aria-label="你想去哪裡？台南景點"
      />
      <div
        class="navbar-select-btn pe-4 py-2 position-relative"
        :class="{ active: optionListShow }"
        @click="showOptions"
      >
        <div class="border-warning ps-4" :class="{ 'border-start': !optionListShow }">
          <p class="fs-md text-warning">{{ optionListContent }}</p>
          <ul v-show="optionListShow" class="navbar-option-list" @click="changeoptionListContent">
            <li>全部景點</li>
            <li>熱門景點</li>
            <li>網美景點</li>
            <li>戶外景點</li>
            <li>鄉下景點</li>
            <li>DIY 活動</li>
          </ul>
        </div>
        <i class="bi bi-caret-down-fill text-warning ms-3"></i>
      </div>
      <button class="btn btn-success px-6 py-2" type="button">
        <i class="bi bi-search"></i>
      </button>
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
      optionListContent: '全部景點',
    };
  },
  methods: {
    showOptions() {
      this.optionListShow = !this.optionListShow;
    },
    changeoptionListContent(e) {
      if (e.target.innerHTML.length === 4) {
        this.optionListContent = e.target.innerHTML;
      }
    },
  },
};
</script>
