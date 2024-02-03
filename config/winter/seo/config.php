<?php

return [
    'default_social_image' => \Url::asset('/themes/blizzard/assets/src/images/opengraph_default.jpg'),

    'robots_txt' => [
        'path' => env('APP_ENV', 'local') === 'production' ? base_path('robots.txt') : base_path('robots-deny.txt'),
    ],
];
