<template>
  <div>
    <label for="" v-if="label">
      {{ label }} <code style="color: red" v-if="required"> * </code>
    </label>
    <b-form-input
      v-if="type == 'text'"
      :placeholder="placeholder || label"
      :disabled="disabled"
      v-model="newValue"
    ></b-form-input>
    <b-input-group v-if="type == 'group'">
      <b-form-input
        :disabled="disabled"
        :placeholder="placeholder || label"
        v-model="newValue"
      ></b-form-input>
      <slot></slot>
    </b-input-group>
    <v-select
      v-if="type == 'select'"
      :options="options"
      :disabled="disabled"
      :label="valuename"
      :reduce="(item) => item[valueid]"
      :placeholder="placeholder || label"
      v-model="newValue"
    >
    </v-select>
  </div>
</template>

<script>
import vSelect from "vue-select";
export default {
  components: { vSelect },
  props: {
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    valuename: {
      type: String,
      default: "text",
    },
    valueid: {
      type: String,
      default: "value",
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    placeholder: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {},

    value: {},
  },
  computed: {
    newValue: {
      get: function () {
        return this.value;
      },
      set: function (val) {
        this.$emit("input", val);
      },
    },
  },
};
</script>

<style></style>
