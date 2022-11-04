<template>
    <div>
        <v-row no-gutters>
            <v-col cols="12" sm="5">
                <input class="form-control" type="text" placeholder="Nhập tiêu đề chuyên đề..." autocomplete="off">
            </v-col>
            <v-col cols="12" sm="1">
                <button class="btn btn-search">
                    <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
                </button>
            </v-col>
            <v-col cols="12" sm="6">
                <div style="float:right;">
                    <button class="btn btn-add">   
                        <v-icon left dark size="22">mdi-file-plus</v-icon>
                        Thêm mới
                    </button>
                </div>
            </v-col>
        </v-row>

        <DemoTable></DemoTable>
    </div>
</template>
  
<script>
import DemoTable from './DemoTable.vue'

export default {
    components: {
      DemoTable
    },
    data() {
        return {
            
        }
    }
}
</script>
<style>


</style>