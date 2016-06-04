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
						<input type="text" name="invoice-number">
					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-2 control-label">Invoice Date</label>
					<div class="col-sm-10">
						<input type="text" name="invoice-date">
					</div>
				</div>

				<div class="form-group">
					<label class="col-sm-2 control-label">Due Date</label>
					<div class="col-sm-10">
						<input type="text" name="invoice-number">
					</div>
				</div>
				
				<div class="form-group">
					<label class="col-sm-2 control-label">Customer</label>
					<div class="col-sm-10">
						<input type="text" name="invoice-number">
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
