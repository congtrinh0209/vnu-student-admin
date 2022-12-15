<template>
  <v-container class="container-news">
    <v-row>
      <v-col cols="12" sm="12">
        <div>
        <div class="header-news">
          <h1>{{data.TenBaiViet}}</h1>
        </div>
        <div class="content-news">
          <div v-html="data.NoiDungBaiViet"></div>
        </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
        data: {}
    };
  },

   created() {
    const vm = this;
    vm.getDetailsNews()
    console.log(vm.$route.params.id)
  },

  mounted() {},

  methods: {
    getDetailsNews() {
         let vm = this;
      const filter = {
        collectionName: `baiviettintuc/${vm.$route.params.id}`,
        data:  {}
      };
      vm.$store
        .dispatch("getDetailsItemData", filter)
        .then(function (response) {
         console.log("res: ", response)
         vm.data = {...response.resp}
        })
        .catch(function () {});
    }
  },
};
</script>

<style lang="scss" scoped>
.header-news h1{
    text-align: center;
        font-weight: bold;
        color: #007f48;
        padding-bottom: 10px;
        text-align: left;
}
</style>