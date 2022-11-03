<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" style="display: inline-table;">
                <span>Tên loại bản đồ:</span>
                <input type="text" class="form-control"></input>
            </v-col>
            <v-col cols="12" sm="3" style="display: inline-table;">
                <span>Thứ tự:</span>
                <input type="text" class="form-control"></input>
            </v-col>
            <v-col cols="12" sm="3" >
                <v-row no-gutters style="justify-content: center; align-items: center;">
                    <v-col cols='12' sm='4'><span style="font-weight: 500;">Trạng thái:</span></v-col>
                    <v-col cols='12' sm='5'>
                        <v-checkbox label=" Xuất bản"></v-checkbox>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row>
            <v-col cols="12" sm="6"></v-col>
            <v-col cols="12" sm="6">
                <v-row no-gutters style="float: right;">
                    <div>
                        <button class="btn btn-add">
                            <v-icon left dark size="22">mdi-file-plus</v-icon>
                            Thêm mới
                        </button>
                    </div>
                    <!-- <div>
                        <button class="btn btn-add">
                            <v-icon left dark size="22">mdi-camera-retake-outline</v-icon>
                            Cập nhật
                        </button>
                    </div> -->
                    <div>
                        <button class="btn btn-add">
                            <v-icon left dark size="22">mdi mdi-magnify-minus-outline</v-icon>
                            Tìm kiếm
                        </button>
                    </div>
                </v-row>
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