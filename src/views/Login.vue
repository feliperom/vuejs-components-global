<template>
  <div>
    <h1>Login</h1>
    <BaseCard size="is-small">
      <BaseInput
        v-model="email"
        type="email"
        placeholder="e.g. feliperom@gmail.com"
        required
      />
      <BaseInput
        v-model="password"
        type="password"
        placeholder="*******"
        required
      />
      <BaseButton
        size="full"
        type="primary"
        label="Login"
        button-type="submit"
        class="btn-primary w-100"
      />
    </BaseCard>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
};
</script>
