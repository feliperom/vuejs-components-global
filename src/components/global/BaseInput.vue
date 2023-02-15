<template>
  <BaseField :class="['base-input', size]" v-bind="$attrs">
    <input
      ref="baseinput"
      class="form-control form-control-lg"
      :class="{ 'search-box': searchBox, rounded: rounded }"
      v-bind="$attrs"
      :value="value"
      :disabled="disabled || loading"
      v-on="listeners"
      @blur="showSearchTip = false"
    />
  </BaseField>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    icon: { type: String, required: false, default: null },
    searchBox: Boolean,
    value: { default: null },
    size: {
      type: String,
      default: "is-full",
      validator: function (value) {
        return ["is-half", "is-full"].indexOf(value) !== -1;
      },
    },
    rounded: {
      type: Boolean,
      default: true,
    },
    debounce: {
      type: Boolean,
      default: false,
    },
    debounceTime: {
      type: Number,
      default: 800,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    listeners() {
      const listeners = { ...this.$listeners };
      const input = (event) => {
        this.$emit("input", event.target.value);
      };
      listeners.input = this.debounce
        ? _.debounce(input, this.debounceTime)
        : input;
      return listeners;
    },
  },
};
</script>

<style lang="scss" scoped>
</style>