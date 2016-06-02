<?php
// Routes

$app->get('/customers', function ($request, $response, $args) {
    
    $this->logger->info("GET /customers");

    $customers = ["foo","bar","baz"];

    $jsonResponse = $response->withJson([
		"status" => "success",
		"data" => $customers
	]);

	return $jsonResponse;

    // Render index view
    //return $this->renderer->render($response, 'index.phtml', $args);
});

