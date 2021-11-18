<template>
  <!-- 景點公告 -->
  <div class="swiper py-7">
    <Swiper
      :loop="true"
      :centeredSlides="true"
      :freeMode="true"
      :slides-per-view="4.5"
      :space-between="30"
      :breakpoints="swiperOption.warningBreakpoints"
      class="swiper-wrapper"
    >
      <SwiperSlide class="swiper-slide tab" v-for="warning in cxlWarning" :key="warning.ID">
        <i class="bi bi-exclamation-triangle-fill"></i>
        <span class="ms-5">{{ warning.WarningContent }}</span>
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
      :breakpoints="swiperOption.bannerBreakpoints"
      class="swiper-wrapper pb-4"
    >
      <SwiperSlide class="swiper-slide mb-4">
        <img
          src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true"
          alt="駁二特區彩虹步道即將開幕"
          class="w-100"
        />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide mb-4">
        <img
          src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/banner.png?raw=true"
          alt="駁二特區彩虹步道即將開幕"
          class="w-100"
        />
      </SwiperSlide>
      <SwiperSlide class="swiper-slide mb-4">
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
        <li class="col-md-6 mb-8">
          <router-link to="/article" class="card bg-primary">
            <img
              src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/kaohsiung.jpeg?raw=true"
              alt="2021 高雄旅遊景點一日遊"
              title="2021 高雄旅遊景點一日遊"
              class="card-img-top"
            />
            <div class="card-body">
              <h3 class="card-title mb-10">2021 高雄旅遊景點 一日遊</h3>
              <div class="position-relative float-end">
                <p class="card-text position-absolute">一起了解，你從未發現高雄</p>
                <img
                  src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/arrow.png?raw=true"
                  alt="arrow img"
                  class="w-lg-100 w-75"
                />
              </div>
            </div>
          </router-link>
        </li>
        <li class="col-md-6">
          <a href="#" class="card bg-primary">
            <img
              src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/taipei.jpeg?raw=true"
              alt="2021 台北旅遊景點一日遊"
              title="2021 台北旅遊景點一日遊"
              class="card-img-top"
            />
            <div class="card-body">
              <h3 class="card-title mb-10">2021 台北旅遊景點 一日遊</h3>
              <div class="position-relative float-end">
                <p class="card-text position-absolute">一起了解，你從未發現台北</p>
                <img
                  src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/arrow.png?raw=true"
                  alt="arrow img"
                  class="w-lg-100 w-75"
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
        <h2 class="fs-md-xxl fs-md">人氣景點探索</h2>
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
      <div class="swiper mb-md-10 mb-3">
        <Swiper
          :slidesPerView="3.5"
          :spaceBetween="20"
          :freeMode="true"
          :breakpoints="swiperOption.spotBreakpoints"
          class="swiper-wrapper"
        >
          <template v-for="(spot, spotIndex) in popularScenicSpots" :key="spot.Name">
            <SwiperSlide class="swiper-slide" v-if="spotIndex < 12">
              <a href="#" :title="spot.Name" class="text-dark">
                <div class="position-relative mb-4">
                  <img
                    :src="spot.Picture.PictureUrl1"
                    :alt="spot.Picture.PictureDescription1"
                    class="card-img"
                  />
                  <h4 class="card-img-title">{{ spot.City }}</h4>
                </div>
                <p class="fs-md text-center">{{ spot.Name }}</p>
              </a>
            </SwiperSlide>
          </template>
        </Swiper>
      </div>
      <div class="btn read-more-btn">
        <p class="fs-md-lg fs-xxs">了解更多詳情</p>
        <i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i>
      </div>
    </div>
    <!-- 投稿專區 -->
    <div class="section">
      <div class="row align-items-center mb-9">
        <div class="offset-4 col-4">
          <h2 class="fs-md-xxl fs-md text-center">〔 投稿專區 〕</h2>
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
      <div class="swiper mb-md-10 mb-3">
        <Swiper
          :slidesPerView="2.5"
          :spaceBetween="22"
          :freeMode="true"
          :breakpoints="swiperOption.contributeBreakpoints"
          class="swiper-wrapper"
        >
          <SwiperSlide class="swiper-slide">
            <a href="#" title="關於墾丁回憶..." class="text-dark">
              <img
                src="https://github.com/vvvvvvii/taiwan-tourism-official-site/blob/main/public/img/contribute.jpeg?raw=true"
                alt="關於墾丁回憶..."
                class="card-img-lg mb-5"
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
                class="card-img-lg mb-5"
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
                class="card-img-lg mb-5"
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
          <p class="fs-md-lg fs-xxs">了解更多詳情</p>
          <i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i>
        </div>
      </div>
    </div>
    <!-- 活動告示 -->
    <div class="section pt-0 text-center">
      <h2 class="section-title">〔 活動告示 〕</h2>
      <ul>
        <template v-for="(warning, warningIndex) in cxlWarning" :key="warning.ID">
          <template v-if="warningIndex < 3">
            <li class="list-item" v-if="warning.OpenTime">
              <div
                class="d-flex justify-content-md-between align-items-center w-md-50 mb-2 mb-md-0"
              >
                <p class="fs-lg-xxl fs-md-lg fs-xxs fw-bold text-center">
                  {{ warning.UpdateTime.split('T')[0].split('-').join('.') }}
                </p>
                <div class="bg-success list-item-title ms-3 ms-lg-0">景點維修</div>
              </div>
              <p class="w-md-50 ms-md-3 fs-md-md fs-xs">
                〔 {{ warning.Name }} 〕{{ warning.OpenTime }}
              </p>
            </li>
            <li class="list-item" v-if="warning.Cycle">
              <div
                class="d-flex justify-content-md-between align-items-center w-md-50 mb-2 mb-md-0"
              >
                <p class="fs-lg-xxl fs-md-lg fs-xxs fw-bold text-center">
                  {{ warning.StartTime.split('T')[0].split('-').join('.') }}
                </p>
                <div class="bg-primary text-dark list-item-title ms-3 ms-lg-0">暫停辦理</div>
              </div>
              <p class="w-md-50 ms-md-3 fs-md-md fs-xs">
                〔 {{ warning.Name }} 〕{{ warning.Cycle }}
              </p>
            </li>
          </template>
        </template>
      </ul>
      <div class="btn read-more-btn">
        <p class="fs-md-lg fs-xxs">了解更多詳情</p>
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
            <p class="fs-md-lg fs-xxs">了解更多詳情</p>
            <i class="bi bi-arrow-right-short arrow-icon btn-arrow"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import JsSHA from 'jssha';

export default {
  name: 'Home',
  data() {
    return {
      scenicSpots: [],
      activities: [],
      popularScenicSpots: [],
      cxlScenicSpots: [],
      cxlActivities: [],
      swiperOption: {
        warningBreakpoints: {
          1: {
            slidesPerView: 1.5,
            spaceBetween: 12,
          },
          576: {
            slidesPerView: 2.1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 3.5,
            spaceBetween: 15,
          },
          992: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
          1200: {
            slidesPerView: 4.5,
            spaceBetween: 30,
          },
        },
        bannerBreakpoints: {
          1: {
            slidesPerView: 1.2,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 2.05,
            spaceBetween: 15,
          },
        },
        spotBreakpoints: {
          1: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 2.5,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 3.5,
            spaceBetween: 20,
          },
        },
        contributeBreakpoints: {
          1: {
            slidesPerView: 1.25,
            spaceBetween: 8,
          },
          576: {
            slidesPerView: 1.5,
            spaceBetween: 8,
          },
          1200: {
            slidesPerView: 2.5,
            spaceBetween: 22,
          },
        },
      },
    };
  },
  methods: {
    // 取得、整理景點資料
    getAllScenicSpotData() {
      this.axios
        .get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON', {
          headers: this.getAuthorizationHeader(),
        })
        .then((res) => {
          this.scenicSpots = res.data;
          // 篩出可能正在施工、維修而暫停開放的設施
          // 刪掉正常開放、但關鍵字仍有打到「如遇颱風天、其他天然災害之影響或實施整修工程等」之類的項目
          this.cxlScenicSpots = this.scenicSpots.filter(
            (spot) => spot.OpenTime
              && (spot.OpenTime.includes('施工')
                || spot.OpenTime.includes('暫停')
                || spot.OpenTime.includes('整修')
                || spot.OpenTime.includes('封閉'))
              && !spot.OpenTime.includes('遇颱風天')
              && !spot.OpenTime.includes('遇天候不佳')
              && !spot.OpenTime.includes('上午')
              && !spot.OpenTime.includes('下午'),
          );
          this.cxlScenicSpots.forEach((cxlSpot, cxlSpotIndex) => {
            const item = this.cxlScenicSpots[cxlSpotIndex];
            item.Name = cxlSpot.Name.split('(部分封閉中)').join('');
            item.Name = cxlSpot.Name.split('(封閉整修中)').join('');
            item.WarningContent = `${cxlSpot.Name} 整修中`;
          });
          // 篩出人氣景點
          this.popularScenicSpots = this.scenicSpots.filter(
            (spot) => spot.Description
              && Object.keys(spot.Picture).length !== 0
              && spot.Description.includes('熱門'),
          );
          // 如果人氣景點裡沒有 City 屬性，補上去
          this.popularScenicSpots.forEach((spot, spotIndex) => {
            if (Object.keys(spot).includes('City') === false) {
              this.popularScenicSpots[spotIndex].City = spot.Address.includes('縣')
                ? `${spot.Address.split('縣')[0]}縣`
                : `${spot.Address.split('市')[0]}市`;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // 取得、整理活動資料
    getAllActivitiesData() {
      this.axios
        .get('https://ptx.transportdata.tw/MOTC/v2/Tourism/Activity?$format=JSON', {
          headers: this.getAuthorizationHeader(),
        })
        .then((res) => {
          const { data } = res;
          // 資料以 StartTime 從新排到舊
          const activitiesTime = data
            .map((activity) => activity.StartTime)
            .sort()
            .reverse();
          // 依照新舊順序放進 this.activities
          activitiesTime.forEach((item, index) => {
            for (let key = 0; key < data.length; key += 1) {
              if (data[key].StartTime === item) {
                this.activities[index] = data[key];
                break;
              }
            }
          });
          // 重複的資料刪掉
          this.activities = [...new Set(this.activities)];
          // 處理 cxlActivities
          this.cxlActivities = this.activities.filter(
            (activity) => (activity.Cycle && activity.Cycle.includes('暫停'))
              || (activity.Description
                && (activity.Description.includes('延期')
                  || activity.Description.includes('暫停')
                  || activity.Description.includes('取消'))),
          );
          this.cxlActivities.forEach((cxlActivity, cxlActivityIndex) => {
            const item = this.cxlActivities[cxlActivityIndex];
            // 整理要顯示在畫面上的警告提示字串
            if (cxlActivity.Description.includes('延期')) {
              item.cxlReason = '延期';
            } else if (cxlActivity.Description.includes('暫停')) {
              item.cxlReason = '暫停';
            } else {
              item.cxlReason = '取消';
            }
            item.Name = cxlActivity.Name.split('2021').join('');
            item.Name = cxlActivity.Name.split('年').join('');
            item.Name = cxlActivity.Name.split('【取消辦理】').join('');
            item.Name = cxlActivity.Name.split('[取消辦理]').join('');
            item.Name = cxlActivity.Name.split('取消辦理').join('');
            item.Name = cxlActivity.Name.split('[延期舉辦]').join('');
            item.Name = cxlActivity.Name.split('(因應近日疫情嚴峻，活動已取消)').join('');
            item.WarningContent = `${cxlActivity.Name} ${cxlActivity.cxlReason}`;
            // 如果 cxlActivity 裡沒有 Cycle 屬性，補上去
            if (Object.keys(cxlActivity).includes('Cycle') === false) {
              item.Cycle = item.WarningContent;
            }
          });
        })
        .catch((err) => {
          console.log(err);
        });
    },
    // api header setting
    getAuthorizationHeader() {
      const GMTString = new Date().toGMTString();
      const ShaObj = new JsSHA('SHA-1', 'TEXT');
      ShaObj.setHMACKey(process.env.VUE_APP_PATH, 'TEXT');
      ShaObj.update(`x-date: ${GMTString}`);
      const HMAC = ShaObj.getHMAC('B64');
      const Authorization = `hmac username="${process.env.VUE_APP_API}",algorithm="hmac-sha1", headers="x-date", signature="${HMAC}"`;
      return { Authorization, 'X-Date': GMTString };
    },
  },
  computed: {
    cxlWarning() {
      // cxlScenicSpots 和 cxlActivities 照順序擺在一起從最新排到最後，取前六項
      // 如果 cxlActivities 的 startDate 比 cxlScenicSpots 的 UpdateTime 更新，就 push 進 this.cxlWarning
      // 保留上一筆 cxlScenicSpots 的 UpdateTime 比較舊的資料，繼續跟下一筆 cxlActivities 的 startDate 比較
      // 直到 this.cxlWarning 長度為 6
      const arr = [];
      if (this.cxlActivities.length !== 0 && this.cxlScenicSpots.length !== 0) {
        let o = this.cxlActivities[0];
        let n = this.cxlScenicSpots[0];
        for (let i = 0; i < 6; i += 1) {
          if (o.StartTime > n.UpdateTime) {
            arr.push(o);
            o = this.cxlActivities[i + 1];
          } else {
            arr.push(n);
            n = this.cxlScenicSpots[i + 1];
          }
        }
      }
      return arr;
    },
  },
  created() {
    this.getAllScenicSpotData();
    this.getAllActivitiesData();
  },
};
</script>
