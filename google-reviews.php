<?php
header("Content-Type: application/json");

// 🔒 SECURITY
$placeId = "CSyV6Gi2mI3HEBI";
$apiKey  = "AIzaSyCgO57sHVcLhAtkDWZxuVcnLYc5XSDYzdo"; // ONLY ON SERVER

$url = "https://maps.googleapis.com/maps/api/place/details/json" .
       "?place_id=$placeId&fields=reviews,rating,user_ratings_total&key=$apiKey";

$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_TIMEOUT, 10);

$response = curl_exec($ch);
$httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

curl_close($ch);

// ❌ API FAIL
if ($httpCode !== 200 || !$response) {
  echo json_encode(["status" => "ERROR"]);
  exit;
}

// ✅ SEND RAW GOOGLE RESPONSE
echo $response;
