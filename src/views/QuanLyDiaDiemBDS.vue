<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" style="display: inline-grid;">
                <span class="font-weight-bold">Tên địa điểm:</span>
                <v-text-field
                    class="flex input-form"
                    solo
                    dense
                    hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" style="display: inline-grid;">
                <span class="font-weight-bold">Tọa độ:</span>
                <v-text-field
                    class="flex input-form"
                    solo
                    dense
                    hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" style="display: inline-grid;">
                <span class="font-weight-bold">Loại bản đồ:</span>
                <select class="form-control" name="pets" id="pet-select">
                    <option value="">Chọn địa điểm</option>
                    <option value="1">Tòa nhà</option>
                    <option value="2">Bãi đỗ xe</option>
                    <option value="3">Ký túc</option>
                    <option value="4">Check in</option>
                    <option value="5">Ăn uống</option>
                    <option value="6">Hiệu thuốc</option>
                </select>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="12" sm="6" style="display: inline-table;">
                <span class="font-weight-bold">Mô tả:</span>
                <v-text-field
                    class="flex input-form"
                    solo
                    dense
                    hide-details="auto"
                ></v-text-field>
            </v-col>
            <v-col cols="12" sm="3" >
                <v-row no-gutters style="justify-content: center; align-items: center;">
                    <v-col cols='12' sm='4'><span class="font-weight-bold">Trạng thái:</span></v-col>
                    <v-col cols='12' sm='5'>
                        <v-checkbox label=" Xuất bản"></v-checkbox>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="3" style="display: inline-table;">
                <v-row no-gutters>
                    <v-col cols="12" sm="3" style="display: flex">
                        <span class="font-weight-bold">Focus:</span>
                        <v-checkbox style="display: contents;"></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="9" style="display: contents;">
                        <select class="form-control" name="pets" id="pet-select" style="margin-top:-15px;">
                            <option value="">Chọn khu vực</option>
                            <option value="1">Hòa Lạc</option>
                            <option value="2">Xuân Thủy</option>
                            <option value="3">Khu Vực Khác</option>
                        </select>
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
            loaiBanDoItems: [
                {name: 'Hòa Lạc', value: 1 },
                {name: 'Xuân Thủy', value: 2 },
                {name: 'Khu vực khác', value: 3 }
            ],
            toaNhaItems: [
                {name: 'Tòa nhà', value: 1 },
                {name: 'Bãi đỗ xe', value: 2},
                {name: 'Ký túc xá', value: 3},
                {name: 'Check in', value: 4},
                {name: 'Ăn uống', value: 5},
                {name: 'Hiệu thuốc', value: 6}
            ],
        }
    }
}
</script>
<style>


</style>