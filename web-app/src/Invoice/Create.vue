<template>

	<div class="row section-header">
		<div class="col-sm-6">
			<h2>New Invoice</h4>
		</div>
		<div class="col-sm-6 text-right">			
			
		</div>
	</div>


	<div class="row section-body">

		<div class="col-sm-12">
			
			<form class="form-horizontal">
				
				<div class="form-group">
					<label class="col-sm-2 control-label">Invoice Number</label>
					<div class="col-sm-10">
						<div class="input-group">
    						<span class="input-group-addon">#</span>
							<input type="text" name="invoice-number" class="form-control" placeholder="0001">
						</div>
					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-2 control-label">Invoice Date</label>
					<div class="col-sm-10">
						<datepicker 
							v-ref:dp 
							:value.sync="value" 
							:disabled-days-of-Week="disabled"
      						:format="format.toString()">
      					</datepicker>
      					<input type="hidden" value="{{ value }}" name="invoice-date" class="form-control">      				
					</div>
				</div>
				
				<div class="form-group">
					<label class="col-sm-2 control-label">Customer</label>
					<div class="col-sm-10">
						<input type="text" name="invoice-number" class="form-control">
					</div>
				</div>
				

				<div>
					<label>Items</label>
					
					<table>
						<tr>
							<td>Product Name</td>
							<td>Unit Price</td>
							<td>Quantity</td>
							<td>Subtotal</td>
						</tr>
					</table>

					<div>
						<a href="#">+ Add Product</a>
					</div>

				</div>

				<div>
					<input type="submit" value="Save">
				</div>

			</form>

		</div>

	</div>

</template>



<script>

import { datepicker } from 'vue-strap'
import moment from 'moment'

var today = moment().format('L');


export default {
  components: { 
    'datepicker': datepicker
  },
  data () {
    return {
     	disabled: [],
	    value: today,
        format: ['MM/dd/yyyy'],
	    reset: true
    }
  },
  watch: {
	  disabled() {
	    this.$refs.dp.getDateRange()
	  },
	  format(newV) {
	    this.value = this.$refs.dp.stringify(new Date(this.value))
	  }
	}

}
</script>
