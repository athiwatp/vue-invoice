<template>

  {{ msg }}

  <p>
    <a v-link="{ name: 'customerIndex' }">Customers</a> 
    <a v-link="{ name: 'invoiceIndex' }">Invoices</a>      
  </p>

  <router-view></router-view>



<button class="btn btn-default btn-lg"
  @click="showRight = !showRight">
  Click to toggle alert on right
</button>
 
<button class="btn btn-default btn-lg"
  @click="showTop = !showTop">
  Click to toggle alert on top
</button>

<hr>

<!--
<alert type="success" >
  <strong>Well Done!</strong>
  You successfully read this important alert message.
</alert>
 
<alert type="info" >
  <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</alert>
 
<alert type="danger" dismissable>
  <strong>Oh snap!</strong> Change a few things up and try submitting again.
</alert>
 
<alert type="warning" dismissable>
  <strong>Warning!</strong> Better check yourself, you're not looking too good.
</alert>
 -->

<alert
  :show.sync="showRight"  
  :duration="3000"
  type="success"
  width="400px"
  placement="top-right"
  dismissable
>
  <span class="icon-ok-circled alert-icon-float-left"></span>
  <strong>Well Done!</strong>
  <p>You successfully read this important alert message.</p>
</alert>
 
<alert
  :show.sync="showTop"
  :duration="3000"
  type="danger"
  width="400px"
  placement="top"
  dismissable>
  <span class="icon-info-circled alert-icon-float-left"></span>
  <strong>Heads up!</strong>
  <p>This alert needs your attention.</p>
</alert>


  <hr>

  <div>
    <pre>
    Route: {{$route | json}}
    </pre>
  </div>

</template>

<script>

import { alert, modal } from 'vue-strap'

export default {
  components: { 
    'alert': alert,

  },
  data () {
    return {
      showRight: false,
      showTop: false,
      msg: 'Hello Martin!'
    }
  }
}
</script>


<style lang="sass">

// Import bootstrap-sass CSS
$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
@import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';


body {
  font-family: Helvetica, sans-serif;
}
</style>