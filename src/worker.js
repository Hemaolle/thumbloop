// Serves the single-page app. The HTML is bundled as a text module.
import html from '../public/index.html';

export default {
  fetch(request) {
    const { pathname } = new URL(request.url);
    if (pathname !== '/' && pathname !== '/index.html') return new Response('Not found', { status: 404 });
    return new Response(html, {
      headers: { 'content-type': 'text/html; charset=utf-8', 'cache-control': 'public, max-age=300' },
    });
  },
};
