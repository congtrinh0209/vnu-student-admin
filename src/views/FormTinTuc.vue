<template>
<div class="dialog-body" >

    <v-row>
        <v-col cols="12" sm="2">
            <div class="titleText">Tiêu đề: <span style="color:red;">*</span></div>
        </v-col>
        <v-col cols="12" sm="10">
            <v-text-field
                class="flex input-form"
                solo
                label="Nhập tiêu đề..."
                dense
                hide-details="auto"
                required
                :rules="rules.text"
            ></v-text-field>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="2">
            <div class="titleText">Nội dung: </div>
        </v-col>
        <v-col cols="12" sm="10">
            <TinymceDemo></TinymceDemo>
        </v-col>
    </v-row>

    <v-row style="display: -webkit-box;">
        <v-col cols="12" sm="2">
            <div class="titleText">Chuyên mục: </div>
        </v-col>
        <v-col cols="12" sm="4" style="display: table;">
            <select class="form-control">
                <option value="0">-- Không --</option>
                <option value="1">Trung tâm hỗ trợ sinh viên</option>
                <option value="2">Thông tin nội trú</option>
                <option value="4">Cẩm nang Hòa Lạc</option>
                <option value="5">Chuyên mục 1</option>
                <option value="6">Chuyên mục 2</option>
                <option value="7">Chuyên mục 3</option>
                <option value="8">Tin tức chung</option>
            </select>
        </v-col>
        
        <v-col cols="12" sm="2">
            <div class="titleText">Ngày xuất bản: </div>
        </v-col>
        <v-col cols="12" sm="4" style="display: table;margin-top:-18px;">
            <!-- <v-flex xs4>
                <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                        v-model="datetime"
                        placeholder="dd/mm/yyyy, ddmmyyyy"
                        label="Birthday date"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                    ></v-text-field>
                </template>
                <v-datetime-picker 
                    v-model="datetime" 
                    :active-picker.sync="activePicker"
                >
                </v-datetime-picker>
            </v-flex> -->
            
            <!-- <div class="mb-6">Active picker: <code>{{ activePicker || 'null' }}</code></div> -->
            <v-flex xs6>
                <v-menu
                    ref="menuDate"
                    v-model="menuDate"
                    :close-on-content-click="true"
                    transition="scale-transition"
                    offset-y
                    min-width="auto"
                >
                    <template v-slot:activator="{ on, attrs }">
                        <v-text-field
                            v-model="datetime"
                            placeholder="dd/mm/yyyy HH:mm"
                            prepend-icon="mdi-calendar"
                            readonly
                            v-bind="attrs"
                            v-on="on"
                        ></v-text-field>
                    </template>
                    <v-datetime-picker 
                        v-model="datetime" 
                        :active-picker.sync="activePicker"
                    ></v-datetime-picker> 
                </v-menu>
            </v-flex>
        </v-col>
    </v-row>

    <v-row>
        <v-col cols="12" sm="2">
            <div class="titleText">Ảnh đại diện: </div>
        </v-col>
        <v-col cols="12" sm="10">
            <v-file-input
                chips
                show-size
                label="Tải ảnh đại diện"
                small-chips
                truncate-length="25"
            ></v-file-input>
        </v-col>
    </v-row>
        
    <v-row>
        <v-col cols="12" sm="2">
            <div class="titleText">Tải file: </div>
        </v-col>
        <v-col cols="12" sm="10">
            <v-file-input
                chips
                show-size
                label="Tải tài liệu"
                small-chips
                truncate-length="25"
                multiple
            ></v-file-input>
            <div class="note italic">
                Chỉ nhận file jpg, jpeg, png, pdf, doc, docx, xls, xlsx, rar, zip, pptx, ppt
            </div>  
        </v-col>
    </v-row>
    
    <v-row>
        <v-col cols="12" sm="2">
            <div class="titleText">Trạng thái: </div>
        </v-col>
        <v-col cols="12" sm="10" style="margin-top: -16px;">
            <v-switch
                v-model="switchTinhTrang"
                :label="textTinhTrang"
                flat
                @click="setTinhTrang"
            ></v-switch>
        </v-col>
    </v-row>               
</div>
</template>
  
<script>
import Pagination from './Pagination.vue'
import '@fortawesome/fontawesome-free/css/all.css'
import TinymceDemo from './FormTinymce.vue'

export default {
    components: {
      Pagination, TinymceDemo
    },
    data() {
        return {
            itemsPerPage: 10,
            pageCount: 1,
            page: 0,
            dialogTinTuc: false,
            readonlyForm: false,
            editTinTuc: false,
            datetime: new Date(),
            switchTinhTrang: true,
            textTinhTrang: '',
            rules: {
              text: [val => (val || '').length > 0 || 'Đây là trường bắt buộc nhập'],
            },
            activePicker: null,
            datetime: null,
            date: null,
            menuDate: false,
        }
    },
    created() {
        if (this.switchTinhTrang === true) {
            this.textTinhTrang = "Kích hoạt"
        } else {
            this.textTinhTrang = "Không kích hoạt"
        }
    },
    watch: {
        menuDate (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
    methods: {
        editChiTietTinTuc() {
            this.dialogTinTuc = true
            this.editTinTuc = true
        },
        addChiTietTinTuc() {
            this.dialogTinTuc = true
            this.editTinTuc = false
        },
        exitForm() {
            this.dialogTinTuc = false
        },
        setTinhTrang() {
            if (this.switchTinhTrang === true) {
                this.textTinhTrang = "Kích hoạt"
            } else {
                this.textTinhTrang = "Không kích hoạt"
            }
        },
        save (date) {
            this.$refs.menu.save(date)
        },
    }
}
</script>
<style>

</style>