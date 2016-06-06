<template>
  
  <div class="container-fluid">      
    
    <div class="foo">
      <h2>Invoices</h2>

      <div>
        <a v-link="{ name: 'invoiceCreate' }" class="btn btn-default">Create New Invoice</a>
      </div>

      <hr>


      <button class="btn btn-default btn-lg"
        @click="showRight = !showRight">
        Click to toggle alert on right
      </button>
       
      <button class="btn btn-default btn-lg"
        @click="showTop = !showTop">
        Click to toggle alert on top
      </button>

      <hr>


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

      <router-view></router-view>
    </div>

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
      showTop: false
    }
  }
}
</script>