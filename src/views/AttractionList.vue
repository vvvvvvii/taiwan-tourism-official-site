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
        <template v-for="(spot, spotIndex) in popularScenicSpots" :key="spot.Name">
          <div class="col-4" :class="{ 'mb-10': spotIndex < 9 }" v-if="spotIndex < 12">
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
          </div>
        </template>
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
import JsSHA from 'jssha';

export default {
  data() {
    return {
      scenicSpots: [],
      popularScenicSpots: [],
      optionListShow: false,
      optionListContent: '地區',
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
          // 若景點有 Class1 / Class2 / Class3 把景點的分類放進 scenicSpots 自建陣列 Classes
          this.scenicSpots.forEach((spot, spotIndex) => {
            this.scenicSpots[spotIndex].Classes = [];
            if (spot.Class1) {
              this.scenicSpots[spotIndex].Classes.push(spot.Class1);
            }
            if (spot.Class2) {
              this.scenicSpots[spotIndex].Classes.push(spot.Class2);
            }
            if (spot.Class3) {
              this.scenicSpots[spotIndex].Classes.push(spot.Class3);
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
    showOptions() {
      this.optionListShow = !this.optionListShow;
    },
    changeoptionListContent(e) {
      if (e.target.innerHTML.length === 2) {
        this.optionListContent = e.target.innerHTML;
      }
    },
  },
  created() {
    this.getAllScenicSpotData();
  },
};
</script>
