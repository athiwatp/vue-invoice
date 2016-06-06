<template>

  <nav class="navbar navbar-default">
    <div class="container">      
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand" href="#">Appname</a>
      </div>
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li><a v-link="{ name: 'invoiceIndex' }">Invoices</a></li>
          <li><a v-link="{ name: 'customerIndex' }">Customers</a></li>
          <li><a v-link="{ name: 'productIndex' }">Products</a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li class="dropdown">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Account <span class="caret"></span></a>
            <ul class="dropdown-menu">
              <li><a href="#">Profile</a></li>
              <li><a href="#">Settings</a></li>
              <li role="separator" class="divider"></li>
              <li><a href="#">Log Out</a></li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view></router-view>

</template>

<script>

export default {
  components: { 
  },
  data () {
    return {
    }
  }
}
</script>


<style lang="sass">

$bg-main: #284f85;
$bg-active: #3c649b;

$nav-font-default: #d0dceb;
$nav-font-active: #fff;

$font-header: #173257;


.navbar-default {
  background: $bg-main;
  border-radius: 0px;
  border:0;
  margin:0;

  .navbar-brand {
    color:#fff;

    &:hover, &:focus {
      color:#fff;
    }
  }

  .navbar-nav {

    li > a {
      color: $nav-font-default;

      &:focus {
        color: $nav-font-default;        
      }

      &:hover {
        color: $nav-font-active;
      }
    }

    a.v-link-active {
      background: $bg-active;
      color: $nav-font-active;

      &:hover, &:focus {
        background: $bg-active;
        color: $nav-font-active;
      }
    }

    .dropdown {

      &.open {
        a {
          background: $bg-active;
          color: $nav-font-active;
        }
      }

      .dropdown-menu {
        a {
          background:#fff;
          color:#333;

          &:hover, &:focus {
            background:#eee;
            color:#000;
          }
        }
      }
    }

  }
}

a.btn-create {
  &:hover {
    background:#91ab46;
    border-color: #728a29;
    color:#fff;
  }
}

.section-header {
  background:#f0f0f0;
  padding-top:15px;
  min-height: 70px;
  border-bottom: 1px solid #ddd;

  h2 {
    color: $font-header;
    margin-top:10px;
    font-size:1.4em;
  }
}

.section-body {
  padding:30px 0;
}
</style>