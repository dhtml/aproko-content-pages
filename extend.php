<?php

/*
 * This file is part of dhtml/aproko-content-pages.
 *
 * Copyright (c) 2024 Anthony Ogundipe.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace dhtml\FlarumContentPages;

use Flarum\Extend;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/resources/less/forum.less')
        ->route('/about-aprokonation', 'content-pages.about-aprokonation')
        ->route('/privacy-policy', 'content-pages.privacy-policy')
        ->route('/terms-of-service', 'content-pages.terms-of-service')
        ->route('/guidelines', 'content-pages.guidelines')
];
