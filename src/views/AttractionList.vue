<template>
  <div class="container">
    <!-- 選單 -->
    <div class="section">
      <p class="mb-10">
        首頁
        <i class="bi bi-chevron-right ms-4"></i>
        <span class="ms-4 pb-1 border-bottom border-dark">人氣景點探索</span>
      </p>
      <h2 class="fs-xxxl fw-bold text-center mb-4">景點列表</h2>
      <p class="fs-lg text-center mb-10">地點</p>
      <ul class="d-flex justify-content-center">
        <li
          class="btn btn-lg btn-outline-warning fs-lg position-relative"
          :class="{ active: optionListShow }"
          @click="showOptions"
        >
          <div class="d-flex">
            <p class="fs-md">{{ optionListContent }}</p>
            <i class="bi bi-chevron-down ms-10"></i>
          </div>
          <ul v-show="optionListShow" class="navbar-option-list" @click="changeoptionListContent">
            <li>台北</li>
            <li>新北</li>
            <li>桃園</li>
            <li>新竹</li>
            <li>苗栗</li>
            <li>台中</li>
            <li>南投</li>
          </ul>
        </li>
        <li class="btn btn-sm btn-outline-warning fs-lg ms-10">熱門景點</li>
        <li class="btn btn-sm btn-outline-warning fs-lg ms-5">網美景點</li>
        <li class="btn btn-sm btn-outline-warning fs-lg ms-5">戶外景點</li>
        <li class="btn btn-sm btn-outline-warning fs-lg ms-5">鄉下景點</li>
        <li class="btn btn-sm btn-outline-warning fs-lg ms-5">DIY 景點</li>
      </ul>
    </div>
    <!-- 列表 -->
    <div class="section pt-0">
      <div class="row">
        <div class="col-4">
          <a href="#" title="花蓮星巴克貨櫃屋" class="text-dark">
            <div class="position-relative mb-4">
              <img
                src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/hualien.png?raw=true"
                alt="花蓮"
                class="w-100"
              />
              <h4 class="card-img-title">花蓮</h4>
            </div>
            <p class="fs-md text-center">花蓮星巴克貨櫃屋</p>
          </a>
        </div>
      </div>
    </div>
    <!-- 頁碼 -->
    <div class="section d-flex justify-content-center align-items-center pt-0">
      <div class="btn btn-success btn-pagination">
        <i class="bi bi-chevron-left"></i>
      </div>
      <p class="ms-10">1/4</p>
      <div class="btn btn-success btn-pagination ms-10">
        <i class="bi bi-chevron-right"></i>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      optionListShow: false,
      optionListContent: '地區',
    };
  },
  methods: {
    showOptions() {
      this.optionListShow = !this.optionListShow;
    },
    changeoptionListContent(e) {
      if (e.target.innerHTML.length === 2) {
        this.optionListContent = e.target.innerHTML;
      }
    },
  },
};
</script>
