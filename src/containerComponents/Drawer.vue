<template>
  <v-navigation-drawer
    id="core-navigation-drawer"
    v-model="drawer"
    :mini-variant.sync="mini"
    :expand-on-hover="expandOnHover"
    :right="$vuetify.rtl"
    src=""
    mobile-breakpoint="960"
    app
    v-bind="$attrs"
  >
    <template v-slot:prepend>
      <v-list-item two-line :class="mini ? 'px-0 pl-2' : ''">
        <v-list-item-avatar v-if="mini">
          <img :src="`${publicPath}/images/image-acc.png`" style="width: 24px;height: 24px;">
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title class="text-drawer mb-2" style="font-size: 16px">{{userInfo.hoVaTen ? userInfo.hoVaTen : ''}}</v-list-item-title>
          <div style="color: #6EC1FE">{{userInfo.maSoCanBo ? userInfo.maSoCanBo : ''}}</div>
        </v-list-item-content>
        <v-btn
          icon
          @click.stop="mini = !mini"
        >
          <v-icon class="text-drawer">mdi-chevron-left</v-icon>
        </v-btn>
      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-list dense>

      <v-list-item v-if="isAdmin" :class="menuName === 'QuanLyTinTuc' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/quan-ly-tin-tuc')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-newspaper</v-icon>
            </template>
            <span>Quản Lý Tin Tức</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Quản Lý Tin Tức</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="isAdmin" :class="menuName === 'QuanLyLoaiBanDo' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/quan-ly-loai-ban-do')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-map-outline</v-icon>
            </template>
            <span>Quản Lý Loại Bản Đồ</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Quản Lý Loại Bản Đồ</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="isAdmin" :class="menuName === 'QuanLyDiaDiemBDS' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/quan-ly-dia-diem-ban-do-so')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-map-marker-path</v-icon>
            </template>
            <span>Quản Lý Địa Điểm Bản Đồ Số</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Quản Lý Địa Điểm Bản Đồ Số</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-list-item v-if="isAdmin" :class="menuName === 'QuanLyDiaChuyenMuc' ? 'item-active' : ''" class="mb-3 list-menu" @click.stop="goToPage('/quan-ly-chuyen-muc')">
        <v-list-item-icon >
          <v-tooltip top color="#0073C8">
            <template v-slot:activator="{ on, attrs }">
              <v-icon v-bind="attrs" v-on="on" class="icon-draw" style="font-size: 24px !important">mdi-certificate</v-icon>
            </template>
            <span>Quản Lý Chuyên Mục</span>
          </v-tooltip>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title class="text-drawer text-list">Quản Lý Chuyên Mục</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <!--  -->
    </v-list>
    <template v-slot:append>
      <div class="pa-2">
        <v-tooltip top color="#0073C8">
          <template v-slot:activator="{ on, attrs }">
            <v-btn @click.stop="logout" v-bind="attrs" v-on="on" text style="padding-left: 0px !important;" class="px-2 ml-2">
              <v-icon class="icon-draw" >mdi-logout-variant</v-icon> <span class="text-drawer ml-3">&nbsp; &nbsp;{{ $t('drawer.dangXuat') }}</span>
            </v-btn>
          </template>
          <span class="ml-3">{{ $t('drawer.dangXuat') }}</span>
        </v-tooltip>
      </div>
    </template>
  </v-navigation-drawer>
</template>

<script>
  export default {
    name: 'Drawer',

    props: {
      expandOnHover: {
        type: Boolean,
        default: false,
      },
    },

    data: () => ({
      publicPath: process.env.VUE_APP_PULIC_PATH,
      mini: true,
      menuName: '',
      userInfo: ''
    }),
    created () {
      let vm = this
      let currentQuery = vm.$router.history.current
      console.log('currentQuery', currentQuery)
      vm.menuName = currentQuery.name
      if (currentQuery.name == 'ThongTinDonVi') {
        vm.menuName = 'CoQuanDonVi'
      }
      if (currentQuery.name == 'ThongTinCanBo') {
        vm.menuName = 'CanBo'
      }
      if (currentQuery.name == 'ThongKe') {
        vm.menuName = 'ThongKe'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'cho-xu-ly') {
        vm.menuName = 'BaoCaoChoXuLy'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'cho-duyet') {
        vm.menuName = 'BaoCaoChoDuyet'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'xu-ly-lai') {
        vm.menuName = 'BaoCaoXuLyLai'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'bao-cao-moi') {
        vm.menuName = 'BaoCaoMoi'
      }
      if (currentQuery.params.hasOwnProperty('type') && currentQuery.params.type == 'tra-cuu') {
        vm.menuName = 'TraCuu'
      }
      vm.$store.commit('SET_DRAWER', !vm.isMobile)
      vm.userInfo = vm.$cookies.get('UserInfo', '')
    },
    mounted () {
      let vm = this
      vm.mini = vm.isMobile ? false : true
    },
    computed: {
      drawer: {
        get () {
          return this.$store.state.drawer
        },
        set (val) {
          this.$store.commit('SET_DRAWER', val)
        },
      }
    },
    watch: {
      '$route': function (newRoute, oldRoute) {
        let vm = this
        let currentQuery = newRoute.query
        // console.log('currentQuery-watch', newRoute)
        vm.menuName = newRoute.name
        if (newRoute.name == 'ThongTinDonVi') {
          vm.menuName = 'CoQuanDonVi'
        }
        if (newRoute.name == 'ThongTinCanBo') {
          vm.menuName = 'CanBo'
        }
        if (newRoute.name == 'ThongKe') {
          vm.menuName = 'ThongKe'
        }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'cho-xu-ly') {
          vm.menuName = 'BaoCaoChoXuLy'
        }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'cho-duyet') {
          vm.menuName = 'BaoCaoChoDuyet'
        }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'xu-ly-lai') {
          vm.menuName = 'BaoCaoXuLyLai'
        }
        // if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'bao-cao-moi') {
        //   vm.menuName = 'BaoCaoMoi'
        // }
        if (newRoute.params.hasOwnProperty('type') && newRoute.params.type == 'tra-cuu') {
          vm.menuName = 'TraCuu'
        }
      },
      isMobile (val) {
        this.mini = val ? false : true
        this.$store.commit('SET_DRAWER', !val)
      }
    },
    methods: {
      goToPage (pathname) {
        let vm = this
        vm.$router.push({ path: pathname })
      },
      logout () {
        let vm = this
        vm.$store.commit('SET_ISSIGNED', false)
        localStorage.setItem('user', null)
        vm.$cookies.set('Token', '')
        vm.$cookies.set('RefreshToken', '')
        vm.$cookies.set('admin', '')
        window.location.href = window.location.origin + window.location.pathname + "#/login"
      }
    },
  }
</script>

<style lang="sass">
  .v-navigation-drawer
    background-color: #0468B1 !important
    max-height: none !important
  .v-avatar
    margin-top: 3px !important
  .text-drawer
    color: #ffffff !important
  .item-active
    background: #0073C8
    border-left: 6px solid #2D98E5
    padding: 0 8px !important    
  .item-active .v-icon
    color: #ffffff !important
  .icon-draw
    color: #ffffff !important
  .text-list
    font-size: 14px !important
    text-transform: uppercase
    line-height: 24px !important
    font-weight: 400 !important
  .list-menu
    cursor: pointer
</style>
