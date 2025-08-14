//plugins/store/plugin.ts
import type { Server } from 'stackpress/server';
import connect from './connect.js';

export default function plugin(server: Server) {
    //on config, register the store
    server.on('config', async _ => {
        server.register('database', await connect());
    });
    //on listen, add populate event
    server.on('listen', async _ => {
        server.on('populate', () => import('./populate.js'));
    });
};