<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'MdmErrorMessage',
  props: {
    message: {
      type: String,
      required: false,
      default: 'From MdmErrorMessage: Smth went wrong!',
    },
  },
};
</script>
