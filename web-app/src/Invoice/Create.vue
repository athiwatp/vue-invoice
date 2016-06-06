<template>

	<div class="row section-header">
		<div class="col-sm-6">
			<h2>New Invoice</h4>
		</div>
		<div class="col-sm-6 text-right">			
			
		</div>
	</div>


	<div class="row section-body" v-cloak>

		<div class="col-sm-12">
			
			<form class="form-horizontal">
				
				<div class="form-group">
					<label class="col-sm-2 control-label">Invoice Number</label>
					<div class="col-sm-3">
						<div class="input-group">
    						<span class="input-group-addon">#</span>
							<input type="text" class="form-control" placeholder="0001" v-model="invoiceNumber">
						</div>
					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-2 control-label">Invoice Date</label>
					<div class="col-sm-3">
						<datepicker 
							v-ref:formDatePicker 
							:value.sync="invoiceDate" 
      				:format="datePickerFormat.toString()">
      			</datepicker> 				
					</div>
				</div>
				
				<div class="form-group">
					<label class="col-sm-2 control-label">Customer</label>
					<div class="col-sm-3">
						<input type="text" class="form-control" placeholder="Customer Name" v-model="invoiceCustomer">
					</div>
				</div>
  				
        <hr>

				<div class="form-group">


					<div class="col-sm-12">

						<table class="table table-striped table-bordered">
							<thead>
								<tr>
									<th width="50%">Product Name</th>
									<th width="15%">Unit Price</th>
									<th width="15%">Quantity</th>
									<th width="20%">Subtotal</th>
								</tr>
							</thead>

							<tbody>

                <!-- list items -->
								<tr v-for="(index, item) in invoiceItems">
									<td><input type="text" value="{{ item.productName }}" v-model="invoiceItems[ index ].productName" class="form-control"></td>
									<td class="form-inline">
                    <div class="input-group">
                      <div class="input-group-addon">$</div>
                      <input type="text" value="{{ item.unitPrice | round 2 }}" v-model="invoiceItems[ index ].unitPrice" class="form-control">
                    </div>
                  </td>
									<td class="form-inline"><input type="text" value="{{ item.quantity | round }}" v-model="invoiceItems[ index ].quantity" class="form-control"></td>
									<td>${{ item.unitPrice * item.quantity | round 2 }}</td>
								</tr>

                <!-- add new item -->
                <tr>
                  <td>
                    <typeahead
                      placeholder="Product Name" 
                      :data="products" 
                      :on-hit="productSelectCallback"
                      v-if="this.newLineItem.productName.length==0"
                    >
                    </typeahead>
                    <input v-show="this.newLineItem.productName.length!=0" class="form-control" v-model="newLineItem.productName">                     
                  </td>
                  <td class="form-inline">
                    <div class="input-group">
                      <div class="input-group-addon">$</div>
                      <input type="text" class="form-control" placeholder="Unit Price" v-model="newLineItem.unitPrice">
                    </div>
                  </td>
                  <td><input type="text" class="form-control" placeholder="Quantity" v-model="newLineItem.quantity"></td>
                  <td><button type="button" class="btn btn-primary" @click='addLineItem'>Add Item</button></td>
                </tr>

							</tbody>

						</table>


					</div>
				</div>

        <hr>

				<div class="form-group">
				    <div class="col-sm-12 text-right">
				      <button class="btn btn-success" @click.prevent="saveInvoice" disabled="">Save</button> <button class="btn btn-default">Cancel</button>
				    </div>
				</div>

<pre>
Invoice Number: {{ invoiceNumber}}
Invoice Date: {{ invoiceDate }}
Invoice Customer: {{ invoiceCustomer }}
Invoice Line Items:
{{ invoiceItems | json }}
</pre>

			</form>

		</div>

	</div>

</template>



<script>
import { datepicker, typeahead, modal } from 'vue-strap'
import round from 'vue-round-filter'
import moment from 'moment'
import jquery from 'jquery'

export default {
  filters: {
    round,
  },
  components: { 
    'datepicker': datepicker,
    'typeahead': typeahead,
    'modal': modal
  },
  data () {
    return {
      invoiceNumber: '0001',      
      invoiceDate: moment().format('L'),
      invoiceCustomer: '',
      invoiceItems: [],      
      
      newLineItem: { productName: '', unitPrice: '', quantity: '' },      
      addItemModal: false,
     	datePickerFormat: ['MM/dd/yyyy'],
	    products: [],
      saveable: false,
      saveForm: false      
    }
  },
  methods: {
    getProducts() {      
      
      this.$http.get('http://localhost:8888/products').then(function (response) {

          var products = []

          jquery.each( response.data.data, function(k,v) {
            products.push( v.product_name )
          });
          
          this.$set('products', products)

      }, function (response) {

          // error callback
          console.log(response)
          
      });

    },
    productSelectCallback(item, vm) {
      //console.log(item)
      //console.log(targetVM)
      this.newLineItem.productName = item
      
    },
    addLineItem() {
      
      if(this.newLineItem.productName && this.newLineItem.unitPrice && this.newLineItem.quantity)
      {
        this.invoiceItems.push({ 
          productName: this.newLineItem.productName,  
          unitPrice: this.newLineItem.unitPrice,
          quantity: this.newLineItem.quantity
        })

        this.resetAddLineItem()
      }

    },
    resetAddLineItem() {
      this.newLineItem = { productName: '', unitPrice: '', quantity: '' }
    },
    cancelLineItem() {

    },
    saveInvoice() {
      console.log("saved!")
    }
  },
  ready: function() {
    this.getProducts()
  }
}
</script>


<style lang="sass">

[v-cloak] {
  display: none;
}

.button-wrapper {
  margin-bottom: 10px;
}

</style>