<template>
    <div>
        <v-row>
            <v-col cols="12" sm="6" style="display: inline-grid;">
                <v-row no-gutters>
                    <v-col cols="12" sm="2" style="display: flex">
                        <span class="font-weight-bold">Tên địa điểm:</span>
                    </v-col>
                    <v-col cols="12" sm="10">
                        <v-text-field
                            class="flex input-form"
                            solo
                            dense
                            hide-details="auto"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="3" style="display: inline-grid;">
                <v-row no-gutters>
                    <v-col cols="12" sm="4" style="display: flex">
                        <span class="font-weight-bold">Tọa độ:</span>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-text-field
                            class="flex input-form"
                            solo
                            dense
                            hide-details="auto"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="3">
                <v-row no-gutters>
                    <v-col cols="12" sm="4" style="display: flex">
                        <label class="font-weight-bold">Loại bản đồ: </label>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-autocomplete
                        class="flex input-form"
                        hide-no-data
                        v-model="loaiBanDo"
                        :items="loaiBanDoItems"
                        item-text="name"
                        item-value="value"
                        :rules="required"
                        placeholder="Chọn loại bản đồ"
                        required
                        dense
                        solo
                        hide-details="auto"
                        return-object
                        clearable
                        >
                        </v-autocomplete>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
        
        <v-row>
            <v-col cols="12" sm="6" style="display: inline-table;">
                <v-row no-gutters>
                    <v-col cols="12" sm="2" style="display: flex">
                        <span class="font-weight-bold">Mô tả:</span>
                    </v-col>
                    <v-col cols="12" sm="10">
                        <v-text-field
                            class="flex input-form"
                            solo
                            dense
                            hide-details="auto"
                        ></v-text-field>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="3" >
                <v-row no-gutters>
                    <v-col cols="12" sm="4" style="display: flex">
                        <span class="font-weight-bold">Trạng thái:</span>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-checkbox style="display: contents;" label=" Xuất bản"></v-checkbox>
                    </v-col>
                </v-row>
            </v-col>
            <v-col cols="12" sm="3" style="display: inline-table;">
                <v-row no-gutters>
                    <v-col cols="12" sm="4" style="display: flex">
                        <span class="font-weight-bold">Focus:</span>
                        <v-checkbox style="display: contents;"></v-checkbox>
                    </v-col>
                    <v-col cols="12" sm="8">
                        <v-autocomplete
                          class="flex input-form"
                          hide-no-data
                          v-model="khuVuc"
                          :items="khuVucItems"
                          item-text="name"
                          item-value="value"
                          :rules="required"
                          placeholder="Chọn khu vực"
                          required
                          dense
                          solo
                          hide-details="auto"
                          return-object
                          clearable
                        >
                        </v-autocomplete>
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
            khuVucItems: [
                {name: 'Hòa Lạc', value: 1 },
                {name: 'Xuân Thủy', value: 2 },
                {name: 'Khu vực khác', value: 3 }
            ],
            loaiBanDoItems: [
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