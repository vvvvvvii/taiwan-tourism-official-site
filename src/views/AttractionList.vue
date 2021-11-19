<template>
  <div class="container">
    <!-- 選單 -->
    <div class="section">
      <p class="mb-10 fs-md-sm fs-xxs">
        首頁
        <i class="bi bi-chevron-right ms-4"></i>
        <span class="ms-4 pb-1 border-bottom border-dark">人氣景點探索</span>
      </p>
      <h2 class="fs-md-xxxl fs-lg fw-bold text-center mb-4">景點列表</h2>
      <p class="fs-md-lg fs-xxs text-center mb-md-10 mb-4">地點</p>
      <div @click="changeSearchSpotOption">
        <!-- 手機版地點 -->
        <div
          class="btn btn-lg btn-outline-warning d-md-none mb-3 fs-xs position-relative"
          :class="{ active: optionListShow }"
          @click="showOptions"
        >
          <div class="d-flex">
            <p class="fs-md-lg fs-xs">{{ optionListContent }}</p>
            <i class="bi bi-chevron-down ms-10"></i>
          </div>
          <ul v-show="optionListShow" class="navbar-option-list">
            <li v-for="city in cities" :key="city">{{ city }}</li>
          </ul>
        </div>
        <ul
          class="
            d-md-flex
            justify-content-md-center
            overflow-md-visible
            white-space-md-normal white-space-nowrap
            overflow-scroll
          "
        >
          <li
            class="btn btn-lg btn-outline-warning d-md-inline-block d-none position-relative"
            :class="{ active: optionListShow }"
            @click="showOptions"
          >
            <div class="d-flex">
              <p class="fs-lg-md fs-md-sm fs-xs">{{ optionListContent }}</p>
              <i class="bi bi-chevron-down ms-lg-10 ms-2"></i>
            </div>
            <ul v-show="optionListShow" class="navbar-option-list">
              <li v-for="city in cities" :key="city">{{ city }}</li>
            </ul>
          </li>
          <li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-10 ms-2">
            熱門景點
          </li>
          <li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2">
            網美景點
          </li>
          <li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2">
            戶外景點
          </li>
          <li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2">
            運動景點
          </li>
          <li class="btn btn-sm btn-outline-warning fs-lg-md fs-md-sm fs-xs ms-lg-5 ms-2">
            DIY 景點
          </li>
        </ul>
      </div>
    </div>
    <!-- 列表 -->
    <div class="section pt-0">
      <div class="row">
        <template v-for="(spot, spotIndex) in filterSpot" :key="spot.ID">
          <div
            class="col-md-4 col-6"
            :class="{ 'mb-md-10': spotIndex < 9, 'mb-7': spotIndex < 9 }"
            v-if="spotIndex < 12"
          >
            <a href="#" :title="spot.Name" class="text-dark">
              <div class="position-relative mb-4">
                <img
                  :src="spot.Picture.PictureUrl1"
                  :alt="spot.Picture.PictureDescription1"
                  class="card-img"
                />
                <h4 class="card-img-title">{{ spot.City }}</h4>
              </div>
              <p class="fs-md-md fs-xxs text-center">{{ spot.Name }}</p>
            </a>
          </div>
        </template>
      </div>
      <p v-if="filterSpot.length === 0" class="text-center fs-lg text-success">暫無資料</p>
    </div>
    <!-- 頁碼 -->
    <div
      class="section d-flex justify-content-center align-items-center pt-0"
      :class="{ 'd-none': filterSpot.length === 0 }"
    >
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
      cities: [
        '基隆市',
        '台北市',
        '新北市',
        '桃園縣',
        '新竹市',
        '新竹縣',
        '苗栗縣',
        '台中市',
        '彰化縣',
        '南投縣',
        '雲林縣',
        '嘉義市',
        '嘉義縣',
        '台南市',
        '高雄市',
        '屏東縣',
        '台東縣',
        '花蓮縣',
        '宜蘭縣',
        '澎湖縣',
        '金門縣',
        '連江縣',
      ],
      optionListShow: false,
      optionListContent: '地區',
      searchSpotOption: '',
    };
  },
  props: ['searchPropsContent', 'searchSpotPropsOption'],
  methods: {
    // 取得、整理景點資料
    getAllScenicSpotData() {
      this.axios
        .get('https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$format=JSON', {
          headers: this.getAuthorizationHeader(),
        })
        .then((res) => {
          this.scenicSpots = res.data;
          // 沒照片的刪掉
          this.scenicSpots = this.scenicSpots.filter(
            (spot) => Object.keys(spot.Picture).length !== 0,
          );
          this.scenicSpots.forEach((spot, spotIndex) => {
            // 如果沒有 City 屬性，補上去
            if (Object.keys(spot).includes('City') === false) {
              this.scenicSpots[spotIndex].City = spot.Address.includes('縣')
                ? `${spot.Address.split('縣')[0]}縣`
                : `${spot.Address.split('市')[0]}市`;
            }
            // 若景點有 Class1 / Class2 / Class3 把景點的分類放進 scenicSpots 自建陣列 Classes
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
    changeSearchSpotOption(e) {
      if (e.target.innerHTML.trim().length <= 6 && e.target.innerHTML.length > 3) {
        // 點了「地點」以外的景點種類選項
        for (let i = 1; i <= 5; i += 1) {
          if (e.target.parentNode.children[i] !== e.target) {
            e.target.parentNode.children[i].classList.remove('active');
          }
        }
        // 不是 e.target 的 remove 掉
        if (e.target.classList.value.includes('active')) {
          // 已經點過
          e.target.classList.remove('active');
          this.searchSpotOption = '';
        } else {
          // 還沒點過
          e.target.classList.add('active');
          this.searchSpotOption = e.target.innerHTML;
        }
      } else if (e.target.innerHTML.length === 3) {
        // 代表點了「地點」
        this.optionListContent = e.target.innerHTML;
      }
    },
  },
  computed: {
    filterSpot() {
      let filterArr;
      if (this.optionListContent === '地區' && this.searchPropsContent === '') {
        filterArr = this.scenicSpots;
      } else if (this.searchPropsContent !== '') {
        // 有輸搜尋欄時，先篩地點
        filterArr = this.scenicSpots.filter((spot) => spot.Name.includes(this.searchPropsContent));
      } else {
        // 有選地點時，先篩地點
        filterArr = this.scenicSpots.filter((spot) => spot.City.includes(this.optionListContent));
      }
      if (
        this.searchSpotOption.trim() === '熱門景點'
        || this.searchSpotPropsOption === '熱門景點'
      ) {
        filterArr = filterArr.filter(
          (spot) => spot.Description && spot.Description.includes('熱門'),
        );
      } else if (
        this.searchSpotOption.trim() === '網美景點'
        || this.searchSpotPropsOption === '網美景點'
      ) {
        filterArr = filterArr.filter(
          (spot) => spot.Classes
            && (spot.Classes.includes('都會公園類')
              || spot.Classes.includes('溫泉類')
              || spot.Classes.includes('文化類')),
        );
      } else if (
        this.searchSpotOption.trim() === '戶外景點'
        || this.searchSpotPropsOption === '戶外景點'
      ) {
        filterArr = filterArr.filter(
          (spot) => spot.Classes
            && (spot.Classes.includes('自然風景類') || spot.Classes.includes('生態類')),
        );
      } else if (
        this.searchSpotOption.trim() === '運動景點'
        || this.searchSpotPropsOption === '運動景點'
      ) {
        filterArr = filterArr.filter((spot) => spot.Classes && spot.Classes.includes('體育健身類'));
      } else if (
        this.searchSpotOption.trim() === 'DIY 景點'
        || this.searchSpotPropsOption === 'DIY 景點'
      ) {
        filterArr = filterArr.filter((spot) => spot.Classes && spot.Classes.includes('觀光工廠類'));
      }
      return filterArr;
    },
  },
  created() {
    this.getAllScenicSpotData();
  },
};
</script>
