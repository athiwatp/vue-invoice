import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import App from './App.vue'

import Invoice from './Invoice/App.vue'
import InvoiceIndex from './Invoice/Index.vue'
import InvoiceCreate from './Invoice/Create.vue'
import InvoiceUpdate from './Invoice/Update.vue'
import InvoiceDelete from './Invoice/Delete.vue'

import Customer from './Customer/App.vue'
import CustomerIndex from './Customer/Index.vue'
import CustomerCreate from './Customer/Create.vue'
import CustomerUpdate from './Customer/Update.vue'
import CustomerDelete from './Customer/Delete.vue'


Vue.use(VueRouter)
Vue.use(VueResource)

var router = new VueRouter()

router.map({
  '/invoice': {
    component: Invoice,
    subRoutes: {
      '/': {
        name: 'invoiceIndex',
        component: InvoiceIndex
      },
      '/create': {
        name: 'invoiceCreate',
        component: InvoiceCreate
      },
      '/update/:id': {
        name: 'invoiceUpdate',
        component: InvoiceUpdate
      },
      '/delete/:id': {
        name: 'invoiceDelete',
        component: InvoiceDelete
      }
    }
  },


  '/customer': {
    component: Customer,
    subRoutes: {
      '/': {
        name: 'customerIndex',
        component: CustomerIndex
      },
      '/create': {
        name: 'customerCreate',
        component: CustomerCreate
      },
      '/update/:id': {
        name: 'customerUpdate',
        component: CustomerUpdate
      },
      '/delete/:id': {
        name: 'customerDelete',
        component: CustomerDelete
      }
    }
  }

})

// start app
router.start(App, 'app')