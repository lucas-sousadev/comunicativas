<?php
header('Content-Type: application/json');

$pageId = '977531645445729';
$accessToken = 'EAAMmtLR7ChgBQkNVU97goEbBKRDDRvLTseZAUxZAYwhnD0RMHUj2fa0wxZBMyXg4jog9QhjFS3R0OYE9EupHHfZCE0xln7DbLsdFfBw1vpwe3Tzhu1UR8huK89EWENHglNrFHt4bCbsebV9NNxYds8BwDSA6sd6TJ4fmpvaLWYbbNtvK8koo5qjsQLtGkQzvDL8sIM2nYrDaZBrZBVaZAuW2hFEdh7W4tZBJhdSZCZCtUZD';

$url = "https://graph.facebook.com/v19.0/$pageId/posts" .
       "?fields=message,created_time,permalink_url,full_picture" .
       "&limit=5" .
       "&access_token=$accessToken";

$response = file_get_contents($url);
$data = json_decode($response, true);

if (!isset($data['data'])) {
    http_response_code(500);
    echo json_encode(['error' => 'Erro ao buscar posts']);
    exit;
}

echo json_encode($data['data']);