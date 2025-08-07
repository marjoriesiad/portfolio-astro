export async function onRequest(context: any, next: any) {
  try {
    const ua = context.request.headers.get('user-agent') || '';
    const isMobile = /Mobile|Android|iP(hone|od|ad)/i.test(ua);
    
    // Skip middleware for static assets
    if (context.url.pathname.match(/\.(png|jpg|jpeg|gif|svg|css|js|ico|woff|woff2|ttf)$/)) {
      return next();
    }
    
    if (isMobile && !context.url.pathname.startsWith('/mobile')) {
      return Response.redirect(new URL('/mobile', context.url), 302);
    }
    
    if (!isMobile && context.url.pathname.startsWith('/mobile')) {
      return Response.redirect(new URL('/', context.url), 302);
    }
    
    return next();
  } catch (error) {
    console.error('Middleware error:', error);
    return next();
  }
}
