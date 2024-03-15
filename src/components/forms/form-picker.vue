<template>
  <div>
     <validation-provider
        :name="label"
        :vid="vid"
        :rules="rules"
        v-slot="{ valid, errors, required }"
     >
        <b-form-group v-bind="$attrs">
           <label v-if="label">
              {{ label
              }}
              <span
                 v-if="required"
                 style="
             color: red;
             font-size: 14px;
             position: absolute;
             top: 0;
             margin-left: 2px;
           "
              >*</span>
           </label>

           <div
              style="border: 1px solid #d8d6de"
              :class="`my-datepicker ${label === '' ? 'no-label' : ''} 
         ${disabled ? 'my-datepicker-disabled' : ''}
         ${ errors.length > 0 && required ? 'RedBorder':''}
         ${
           uppertext ? 'uppercase-text' : ''
         } my-bg-${bg}`"
           >
              <date-picker
                 ref="datepicker"
                 v-bind="$attrs"
                 v-on="$listeners"
                 v-model="updateVal"
                 :format="format"
                 value-type="format"
                 :type="type"
                 :range="range"
                 :disabled="disabled"
                 :lang="lang"
                 :placeholder="placeholder || label"
                 :disabled-date="
                 !!cdisabledDate ? cdisabledDate : disabledBeforeStartDay
                 "
                 @focus="$emit('focus', value)"
                 @keyup="$emit('keyup', $event)"
                 @blur="onBlur"
                 @input="updateValue($event)"
                 @close="onClose"
                 @change="onChange"
                 @pick="onPick"
              >
                 <template #input>
                    <input
                       v-model="updateVal"
                       v-mask="
                          type == 'datetime'
                             ? '##.##.#### ##:##'
                             : type == 'time' ?  '##:##'
                                :type != 'year' && type != 'month'
                                   ? '##.##.####'
                                   : ''
                             "
                       :disabled="disabled"
                       :placeholder="placeholder || label"
                       type="text"
                       maxlength="10"
                       :style="
                             todayDate == updateVal
                             ? 'color:green;font-size:1rem'
                             : 'color:#6e6b7b;font-size:1rem'
                          "
                       class="my-custom-date"
                       @keyup="$emit('keyup', $event)"
                       @input="Change"
                       :state="errors[0] ? false : valid ? true : null"
                    />
                 </template>
              </date-picker>
           </div>

           <b-form-invalid-feedback
              :state="errors[0] ? false : valid ? true : null"
           >{{ errors[0] }}</b-form-invalid-feedback>
        </b-form-group>
     </validation-provider>
  </div>
</template>

<script>
import { ValidationProvider } from 'vee-validate';
import { BFormGroup, BFormInvalidFeedback } from 'bootstrap-vue';
import { ref } from '@vue/composition-api';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
  components: {
     DatePicker,
     ValidationProvider,
     BFormGroup,
     BFormInvalidFeedback
  },
  props: {
     vid: {
        type: String,
        default: ''
     },
     rules: {
        type: [Object, String],
        default: ''
     },
     label: {
        type: String,
        default: ''
     },
     format: {
        type: String,
        default: 'DD.MM.YYYY'
     },
     type: {
        type: String,
        default: ''
     },
     placeholder: {
        type: String,
        default: ''
     },
     mask: {
        type: String,
        default: ''
     },
     disabled: {
        type: [Boolean, Number],
        default: false
     },
     uppertext: {
        type: Boolean,
        default: false
     },
     range: {
        type: Boolean,
        default: false
     },
     bg: {
        type: String,
        default: ''
     },
     required: {
        type: Boolean,
        default: false
     },
     state: {
        type: Boolean,
        default: false
     },
     value: {},
     startdate: {},
     enddate: {},
     cdisabledDate: {}
  },
  data() {
     return {
        inputVal: false,
        todayDate: '',
        // updateVal: null,
        lang: {},
        lang_Uz: {
           formatLocale: {
              // MMMM
              months: ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'August', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'],
              // MMM
              monthsShort: ['Yan', 'Fev', 'Mar', 'Apr', 'May', 'Iyun', 'Iyul', 'Avg', 'Sen', 'Okt', 'Noy', 'Dek'],
              // dddd
              weekdays: ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'],
              // ddd
              weekdaysShort: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'],
              // dd
              weekdaysMin: ['Ya', 'Du', 'Se', 'Ch', 'Pa', 'Ju', 'Sh'],
              // first day of week
              firstDayOfWeek: 1
           }
        },
        lang_Ru: {
           formatLocale: {
              // MMMM
              months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
              // MMM
              monthsShort: ['Янв', 'Фев', 'Март', 'Апрь', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
              // dddd
              weekdays: ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'],
              // ddd
              weekdaysShort: ['Вос', 'Пон', 'Вто', 'Сре', 'Чет', 'Пят', 'Суб'],
              // dd
              weekdaysMin: ['Во', 'По', 'Вт', 'Ср', 'Че', 'Пят', 'Су'],
              // first day of week
              firstDayOfWeek: 1
           }
        },
        lang_UzCyrl: {
           formatLocale: {
              // MMMM
              months: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
              // MMM
              monthsShort: ['Янв', 'Фев', 'Март', 'Апрь', 'Май', 'Июнь', 'Июль', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
              // dddd
              weekdays: ['Якшанба', 'Душанба', 'Сешанба', 'Чоршанба', 'Пайшанба', 'Жума', 'Шанба'],
              // ddd
              weekdaysShort: ['Якш', 'Ду', 'Се', 'Чор', 'Пай', 'Жу', 'Шан'],
              // dd
              weekdaysMin: ['Якш', 'Ду', 'Се', 'Чор', 'Пай', 'Жу', 'Шан'],
              // first day of week
              firstDayOfWeek: 1
           }
        }
     };
  },

  computed: {
     ErrorClass() {
        if (this.inputVal) {
           if (this.state) {
              return this.state;
           } else {
              return !this.value;
           }
        }
        return '';
     },
     updateVal: {
        get() {
           return this.value == 0 || (this.value && this.value.length == 0) ? null : this.value;
        },
        set(val) {
           if (val == 0 || (val && val.length == 0)) {
              this.$emit('input', null);
           } else {
              this.$emit('input', val);
           }
        }
     },
     language() {
        return localStorage.getItem('locale') || 'uz';
     }
  },
  // watch: {
  //   updateVal (val) {
  //     if (val && val.length > 9) {
  //       this.$emit('input', val)
  //     }
  //   }
  // },
  created() {
     const today = new Date();
     const day = String(today.getDate()).padStart(2, '0');
     const month = String(today.getMonth() + 1).padStart(2, '0');
     const year = today.getFullYear();
     this.todayDate = day + '.' + month + '.' + year;
     if (this.language == 'ru') {
        this.lang = this.lang_Ru;
     } else if (this.language == '') {
        this.lang = this.lang_UZ;
     } else {
        this.lang = this.lang_UzCyrl;
     }
  },

  methods: {
     Change() {
        if (this.inputVal == null) {
           this.updateVal = null;
        }
     },
     onClose() {
        // this.checkInput()
     },
     onChange(newValue) {
        this.$emit('change', newValue);
     },
     checkInput() {
        this.inputVal = true;
     },
     resetInput() {
        this.inputVal = false;
     },
     onBlur($event) {
        this.$emit('blur', $event);
     },
     updateValue(value) {
        this.$emit('input', this.uppertext ? value.toUpperCase() : value);
     },
     onPick() {
        if (this.type != 'datetime') {
           this.$refs.datepicker.closePopup();
        }
     },
     disabledBeforeStartDay(date) {
        if (this.enddate) {
           const dFormat1 = this.enddate
              .slice(0, 10)
              .split('.')
              .reverse()
              .join('-');
           const endDate = new Date(dFormat1);
           return date > endDate;
        }
        if (this.enddate && this.startdate) {
           const dFormat = this.startdate
              .slice(0, 10)
              .split('.')
              .reverse()
              .join('-');
           const dFormat1 = this.enddate
              .slice(0, 10)
              .split('.')
              .reverse()
              .join('-');
           const startDate = new Date(dFormat);
           const endDate = new Date(dFormat1);
           return date > endDate || date < startDate;
        }
        if (this.startdate) {
           const dFormat = this.startdate
              .slice(0, 10)
              .split('.')
              .reverse()
              .join('-');
           const startDate = new Date(dFormat);
           return date < startDate;
        }
     }
  }
};
</script>

<style lang="scss" scoped>
@import '../../assets/form-date.scss';
.RedBorder {
  border: 1px solid red !important;
  // :style="

  //          ? 'border: 1px solid red'
  //          : 'border: 1px solid #d8d6de'
  //      "
}
</style>
