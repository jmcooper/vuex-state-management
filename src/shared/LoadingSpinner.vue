<template>
  <img v-if="loading" src="../assets/images/loading.gif" />
</template>
<script>
export default {
  name: 'LoadingSpinner',
  props: {
    loading: {
      type: Boolean,
      required: false,
    },
  },
};
</script>
