<template>


<nav class="navbar">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#">Brand</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="#">Link <span class="sr-only">(current)</span></a></li>
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">One more separated link</a></li>
          </ul>
        </li>
      </ul>
      <form class="navbar-form navbar-left" role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search">
        </div>
        <button type="submit" class="btn btn-default">Submit</button>
      </form>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Link</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#">Action</a></li>
            <li><a href="#">Another action</a></li>
            <li><a href="#">Something else here</a></li>
            <li role="separator" class="divider"></li>
            <li><a href="#">Separated link</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>


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
      showTop: false
    }
  }
}
</script>


<style lang="sass">

$icon-font-path: "../node_modules/bootstrap-sass/assets/fonts/bootstrap/";
@import '../node_modules/bootstrap-sass/assets/stylesheets/_bootstrap';


body {
  font-family: Helvetica, sans-serif;
}
</style>