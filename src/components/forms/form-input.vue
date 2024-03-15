<template>
  <validation-provider
     :name="label"
     :vid="vid"
     :rules="rules"
     v-slot="{ valid, errors, required }"
  >
     <label for="form-input" v-show="label">
        {{ label }}
        <span v-show="required" style="color: red">*</span>
     </label>

     <b-input-group v-bind="$attrs">
        <b-form-input
           id="form-input"
           v-model="model"
           v-bind="$attrs"
           :type="type"
           v-mask="mask"
           :state="errors[0] ? false : valid ? true : null"
           :name="label"
           :placeholder="placeholder ? placeholder : label"
           :disabled="disabled"
        />
        <slot></slot>
     </b-input-group>
     <b-form-invalid-feedback style="display: block">{{ errors[0] }}</b-form-invalid-feedback>
  </validation-provider>
</template>
 
<script>
/* eslint-disable global-require */
import { ValidationProvider } from 'vee-validate';
import { BFormInput, BInputGroup, BFormInvalidFeedback } from 'bootstrap-vue';
export default {
  components: {
     BFormInput,
     BInputGroup,
     BFormInvalidFeedback,
     ValidationProvider
  },
  name: 'FormInput',
  data() {
     return {
        //   required,
        vData: ''
     };
  },
  computed: {
     model: {
        get() {
           return this.value == 0 ? null : this.value;
        },
        set(value) {
           if (value == 0) {
              this.$emit('input', null);
           } else {
              this.$emit('input', value);
           }
        }
     }
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
     value: {
        type: null,
        default: ''
     },
     mask: {
        type: String,
        default: ''
     },

     placeholder: {
        type: String,
        default: ''
     },
     type: {
        type: String,
        default: 'text'
     },
     label: {
        type: String,
        default: ''
     },
     disabled: {
        type: Boolean,
        default: false
     }
  },

  methods: {}
};
</script>
<style lang="scss">
</style>
 