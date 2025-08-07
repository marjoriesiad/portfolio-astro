export async function onRequest(context, next) {
  const ua = context.request.headers.get('user-agent') || '';
  const isMobile = /Mobile|Android|iP(hone|od|ad)/i.test(ua);
  
  if (isMobile) {
    // Les mobiles ne peuvent accéder qu'à /mobile
    if (!context.url.pathname.startsWith('/mobile')) {
      return Response.redirect(new URL('/mobile', context.url), 302);
    }
  } else {
    // Les desktop ne peuvent pas accéder à /mobile
    if (context.url.pathname.startsWith('/mobile')) {
      return Response.redirect(new URL('/', context.url), 302);
    }
  }
  
  return next();
}
