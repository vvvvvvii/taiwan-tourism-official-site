<template>
  <!-- 景點公告 -->
  <div class="swiper py-7">
    <Swiper
      :slidesPerView="4.5"
      :spaceBetween="30"
      :loop="true"
      :centeredSlides="true"
      :freeMode="true"
      class="swiper-wrapper"
    >
      <SwiperSlide class="swiper-slide tab">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span class="ms-5">slide</span>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide tab">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span class="ms-5">slide</span>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide tab">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span class="ms-5">slide</span>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide tab">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span class="ms-5">slide</span>
      </SwiperSlide>
      <SwiperSlide class="swiper-slide tab">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span class="ms-5">slide</span>
      </SwiperSlide>
    </Swiper>
  </div>
  <!-- banner -->
  <div class="swiper">
    <Swiper
      :slidesPerView="2.05"
      :spaceBetween="15"
      :loop="true"
      :centeredSlides="true"
      :freeMode="true"
      :pagination="true"
      class="swiper-wrapper pb-4"
    >
      <SwiperSlide class="swiper-slide mb-4">
        <img
          src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true"
          alt="駁二特區彩虹步道即將開幕"
          class="w-100"
        />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img
          src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true"
          alt="駁二特區彩虹步道即將開幕"
          class="w-100"
        />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide">
        <img
          src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true"
          alt="駁二特區彩虹步道即將開幕"
          class="w-100"
        />
      </SwiperSlide>
    </Swiper>
  </div>
  <div class="container">
    <!-- 從台灣發現更多美好 -->
    <div class="section">
      <h2 class="section-title mb-0">從台灣發現更多美好</h2>
      <h2 class="section-title">兩大城市 教你拍起 EMO 圖！</h2>
      <ul class="row">
        <li class="col-md-6">
          <a href="#" class="card bg-primary">
            <img
              src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/kaohsiung.jpeg?raw=true"
              alt="2021 高雄旅遊景點一日遊"
              title="2021 高雄旅遊景點一日遊"
              class="card-img-top"
            />
            <div class="card-body p-6">
              <h3 class="card-title mb-10">2021 高雄旅遊景點 一日遊</h3>
              <div class="position-relative float-end">
                <p class="card-text position-absolute">一起了解，你從未發現高雄</p>
                <img
                  src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/arrow.png?raw=true"
                  alt="arrow img"
                />
              </div>
            </div>
          </a>
        </li>
        <li class="col-md-6">
          <a href="#" class="card bg-primary">
            <img
              src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/taipei.jpeg?raw=true"
              alt="2021 台北旅遊景點一日遊"
              title="2021 台北旅遊景點一日遊"
              class="card-img-top"
            />
            <div class="card-body p-6">
              <h3 class="card-title mb-10">2021 台北旅遊景點 一日遊</h3>
              <div class="position-relative float-end">
                <p class="card-text position-absolute">一起了解，你從未發現台北</p>
                <img
                  src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/arrow.png?raw=true"
                  alt="arrow img"
                />
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <!-- 人氣景點探索 -->
    <div class="section pt-0 text-center">
      <div class="d-flex justify-content-between align-items-center mb-9">
        <h2 class="fs-xxl">人氣景點探索</h2>
        <div class="d-flex align-items-center">
          <div class="btn btn-success btn-pagination">
            <i class="bi bi-chevron-left"></i>
          </div>
          <p class="ms-10">1/4</p>
          <div class="btn btn-success btn-pagination ms-10">
            <i class="bi bi-chevron-right"></i>
          </div>
        </div>
      </div>
      <div class="swiper mb-10">
        <Swiper :slidesPerView="3.5" :spaceBetween="20" :freeMode="true" class="swiper-wrapper">
          <SwiperSlide class="swiper-slide">
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
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="btn read-more-btn">
        <p class="fs-lg">了解更多詳情</p>
        <i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i>
      </div>
    </div>
    <!-- 投稿專區 -->
    <div class="section">
      <div class="row align-items-center mb-9">
        <div class="offset-4 col-4">
          <h2 class="fs-xxl text-center">〔 投稿專區 〕</h2>
        </div>
        <div class="col-4">
          <div class="d-flex justify-content-end align-items-center">
            <div class="btn btn-success btn-pagination">
              <i class="bi bi-chevron-left"></i>
            </div>
            <p class="ms-10">1/3</p>
            <div class="btn btn-success btn-pagination ms-10">
              <i class="bi bi-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper mb-10">
        <Swiper :slidesPerView="2.5" :spaceBetween="22" :freeMode="true" class="swiper-wrapper">
          <SwiperSlide class="swiper-slide">
            <a href="#" title="關於墾丁回憶..." class="text-dark">
              <img
                src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/contribute.jpeg?raw=true"
                alt="關於墾丁回憶..."
                class="card-img mb-5"
              />
              <div class="border border-warning rounded-1 px-3 pt-3 pb-7">
                <h4 class="mb-2">
                  <span class="fs-xxxl fw-bold align-middle">Q</span>
                  <span class="fs-lg align-middle ms-3">關於墾丁回憶...</span>
                </h4>
                <div class="d-flex align-items-center">
                  <p>人與景點猶如夏天般的炙熱，是我所熟悉墾丁。</p>
                  <i class="bi bi-arrow-right-short arrow-icon"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <a href="#" title="對於台北巷弄早午餐？" class="text-dark">
              <img
                src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/contribute2.jpeg?raw=true"
                alt="對於台北巷弄早午餐？"
                class="card-img mb-5"
              />
              <div class="border border-warning rounded-1 px-3 pt-3 pb-7">
                <h4 class="mb-2">
                  <span class="fs-xxxl fw-bold align-middle">Q</span>
                  <span class="fs-lg align-middle ms-3">對於台北巷弄早午餐？</span>
                </h4>
                <div class="d-flex align-items-center">
                  <p>台北的巷弄藏著不同風格早午餐，是我每次來到台北的動力...</p>
                  <i class="bi bi-arrow-right-short arrow-icon"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
          <SwiperSlide class="swiper-slide">
            <a href="#" title="廟的文化" class="text-dark">
              <img
                src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/contribute3.jpeg?raw=true"
                alt="廟的文化"
                class="card-img mb-5"
              />
              <div class="border border-warning rounded-1 px-3 pt-3 pb-7">
                <h4 class="mb-2">
                  <span class="fs-xxxl fw-bold align-middle">Q</span>
                  <span class="fs-lg align-middle ms-3">廟的文化</span>
                </h4>
                <div class="d-flex align-items-center">
                  <p>每當去不同的地方，就一定要到附近的廟宇感受不同的背景時空及信仰。</p>
                  <i class="bi bi-arrow-right-short arrow-icon"></i>
                </div>
              </div>
            </a>
          </SwiperSlide>
        </Swiper>
      </div>
      <div class="text-center">
        <div class="btn read-more-btn">
          <p class="fs-lg">了解更多詳情</p>
          <i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i>
        </div>
      </div>
    </div>
    <!-- 活動告示 -->
    <div class="section pt-0 text-center">
      <h2 class="section-title">〔 活動告示 〕</h2>
      <ul>
        <li class="list-item">
          <p class="fs-xxl fw-bold text-center w-25">2021.10.29</p>
          <div class="bg-warning list-item-title">疫情說明</div>
          <p class="ms-3">【 二級警戒延長至 11/15 】五大口罩鬆綁場所一次看！</p>
        </li>
      </ul>
      <div class="btn read-more-btn">
        <p class="fs-lg">了解更多詳情</p>
        <i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i>
      </div>
    </div>
    <!-- 募集 -->
    <div class="section">
      <div class="contribute-note">
        <h4 class="contribute-note-title">募集</h4>
        <p class="contribute-note-subtitle">歡迎投稿 讓台灣更美好</p>
        <p class="contribute-note-text">
          號召熱愛台灣的旅遊人，需要你們熱情投稿來創造台灣旅遊勝地。<br />
          台灣有許多未被發現美好景點，不管是鄉村、網美以及廟宇的景點等等，都需要你們一起分享！
        </p>
        <div class="text-center">
          <div class="btn btn-success fw-bold w-50 position-relative">
            <p class="fs-lg">了解更多詳情</p>
            <i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>
