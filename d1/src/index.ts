export interface Env {
	DB: D1Database;
}

export default {
	async fetch(request, env): Promise<Response> {
		const { pathname } = new URL(request.url);

		if (pathname === '/api/beverages') {
			// If you did not use `DB` as your binding name, change it here
			const { results } = await env.DB.prepare('SELECT * FROM Customers WHERE CompanyName = ?').bind('Bs Beverages').all();
			return Response.json(results);
		}

		if (pathname === '/users') {
			const { results } = await env.DB.prepare('CREATE TABLE Users (id INTEGER PRIMARY KEY, name TEXT)').run();
			return Response.json(results);
		}

		return new Response('Call /api/beverages to see everyone who works at Bs Beverages');
	},
} satisfies ExportedHandler<Env>;
