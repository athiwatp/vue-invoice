<template>

	<div class="row section-header">
		<div class="col-sm-6">			
			<a v-link="{ name: 'customerCreate' }" class="btn btn-default btn-create">
				<span class="glyphicon glyphicon-plus" aria-hidden="true"></span> 
				Create Customer
			</a>
		</div>
	</div>


	<div class="row section-body">

		<div class="col-sm-12">
			
<pre>
{{ customers | json }}
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
      'customers' : {}
    }
  },
  methods: {
    getCustomers() {      
      
      this.$http.get('http://invoice-api-v1.kmsquared.net/customers').then(function (response) {

          this.$set('customers', response.data)

      }, function (response) {

          // error callback
          console.log(response)
          
      });

    }
  },
  ready: function() {
    this.getCustomers()
  }
}
</script>