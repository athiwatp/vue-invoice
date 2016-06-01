<template>

  {{ msg }}

  <p>
    <a v-link="{ name: 'invoiceIndex' }">Invoices</a>      
  </p>

  <router-view></router-view>

  <hr>

  <div>
    <pre>
    Route: {{$route | json}}
    </pre>
  </div>

</template>

<script>
export default {
  data () {
    return {
      msg: 'Hello App!'
    }
  }
}
</script>


<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
