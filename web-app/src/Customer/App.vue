<template>
  <div id="foo">
    <h1>{{ msg }}</h1>

    <div class="foo">
      <h2>Subheader</h2>

      <div>
        <a v-link="{ name: 'customerCreate' }">Create Customer</a>
        <a v-link="{ name: 'customerUpdate', params: { id: 4 } }">Edit Customer</a>
        <a v-link="{ name: 'customerDelete', params: { id: 4 } }">Delete Customer</a>
      </div>

      <router-view></router-view>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Customer'
    }
  }
}
</script>

<style>
</style>