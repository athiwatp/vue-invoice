<template>
  <div id="foo">
    <h1>{{ msg }}</h1>

    <div class="foo">
      <h2>Subheader</h2>

      <div>
        <a v-link="{ name: 'invoiceCreate' }">Create Invoice</a>
        <a v-link="{ name: 'invoiceUpdate', params: { id: 4 } }">Edit Invoice</a>
        <a v-link="{ name: 'invoiceDelete', params: { id: 4 } }">Delete Invoice</a>
      </div>

      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Invoice'
    }
  }
}
</script>

<style>
</style>