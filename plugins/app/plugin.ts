//plugins/app/plugin.ts
import type { Server } from 'stackpress/server';

export default function plugin(server: Server) {
  //on route, add app routes
  server.on('route', async _ => {
        //add about page
        server.get('/api/about', () => import('./pages/about.js'));
        server.get('/about', '@/plugins/app/views/about');
        server.get('/', () => import('./pages/home.js'));
        server.get('/', '@/plugins/app/views/home', -100);
       
    });
};