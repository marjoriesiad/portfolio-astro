export async function middleware(request: Request) {
  const ua = request.headers.get('user-agent') || '';
  const isMobile = /Mobile|Android|iP(hone|od|ad)/i.test(ua);
  const url = new URL(request.url);
  
  if (isMobile) {
    // Les mobiles ne peuvent accéder qu'à /mobile
    if (!url.pathname.startsWith('/mobile')) {
      return Response.redirect(new URL('/mobile', url), 302);
    }
  } else {
    // Les desktop ne peuvent pas accéder à /mobile
    if (url.pathname.startsWith('/mobile')) {
      return Response.redirect(new URL('/', url), 302);
    }
  }
  
  return new Response(null, { status: 200 });
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
