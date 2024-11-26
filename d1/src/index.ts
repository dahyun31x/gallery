export default {
	async fetch(request: Request, env: any) {
		const { pathname } = new URL(request.url);

		if (pathname === '/api/users') {
			const { results } = await env.DB.prepare('SELECT * FROM users').run();
			return Response.json(results);
		}

		if (pathname === '/api/devlogs') {
			const { results } = await env.DB.prepare('SELECT * FROM dev_logs ORDER BY id DESC').run();
			return Response.json(results);
		}

		if (pathname === '/api/bookreports') {
			const { results } = await env.DB.prepare('SELECT * FROM book_reports').run();
			return Response.json(results);
		}

		return new Response('Hello, world!👋');
	},
};
