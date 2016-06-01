import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'


import App from './App.vue'
import Invoice from './Invoice/App.vue'
import InvoiceIndex from './Invoice/Index.vue'
import InvoiceCreate from './Invoice/Create.vue'
import InvoiceUpdate from './Invoice/Update.vue'
import InvoiceDelete from './Invoice/Delete.vue'


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
  }
})

// start app
router.start(App, 'app')