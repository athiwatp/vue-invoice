<template>

Create Invoice

<form>
	
	<div>
		<label>Invoice Number</label>
		<input type="text" name="invoice-number">
	</div>

	<div>
		<label>Customer Name</label>
		<input type="text" name="customer-name">
	</div>

	<div>
		<label>Invoice Date</label>
		<input type="text" name="invoice-date">
	</div>
	
	<div>
		<label>Payment Due Date</label>
		<input type="text" name="invoice-date">
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

</template>