<template>

	<div class="row section-header">
		<div class="col-sm-6">			
			<a v-link="{ name: 'productCreate' }" class="btn btn-default btn-create">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 
				Add Product
			</a>
		</div>
	</div>


	<div class="row section-body">

		<div class="col-sm-12">
			
<pre>
{{ products | json }}
</pre>

		</div>

	</div>

</template>


<script>

export default {
  components: { 
  },
  data () {
    return {
      'products' : ''
    }
  },
  methods: {
    getProducts() {      
      
      this.$http.get('http://invoice-api-v1.kmsquared.net/products').then(function (response) {

          this.$set('products', response.data)

      }, function (response) {

          // error callback
          console.log(response)
          
      });

    }
  },
  ready: function() {
    this.getProducts()
  }
}
</script>



<style>
</style>

