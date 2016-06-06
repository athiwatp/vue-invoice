<?php
// Routes

$app->get('/v1/customers', function ($request, $response, $args) {
    
    $this->logger->info("GET /customers");

	$results = $this->db->query('SELECT * FROM Customer');
	
	while ($row = $results->fetchArray( SQLITE3_ASSOC )) {
	    $customers[] = $row;
	}

    $jsonResponse = $response->withJson([
		"status" => "success",
		"data" => $customers
	]);

	header('Access-Control-Allow-Origin: *');

    return $jsonResponse;
});



$app->get('/v1/products', function ($request, $response, $args) {
    
    $this->logger->info("GET /products");

	$results = $this->db->query('SELECT * FROM Product');
	
	while ($row = $results->fetchArray( SQLITE3_ASSOC )) {
	    $products[] = $row;
	}

    $jsonResponse = $response->withJson([
		"status" => "success",
		"data" => $products
	]);

	header('Access-Control-Allow-Origin: *');

    return $jsonResponse;
});



// Render index view
//return $this->renderer->render($response, 'index.phtml', $args);