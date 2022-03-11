<template>
  <ul class="error-messages">
    <li v-for="errM in errorMessages" :key="errM">
      {{ errM }}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'MdmValidationErrors',
  props: {
    validationErrors: {
      type: Object,
      required: true,
    },
  },
  computed: {
    errorMessages() {
      console.log('errors', this.validationErrors);
      return Object.keys(this.validationErrors).map((name) => {
        const messages = this.validationErrors[name].join(', ');
        return `${name} ${messages}`;
      });
    },
  },
};
</script>
