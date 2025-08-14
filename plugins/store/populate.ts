//plugins/store/populate.ts
import type { Profile } from 'stackpress';
import { action } from 'stackpress/server';

export default action(async function Populate(_req, _res, ctx) {
    const profile = await ctx.resolve<Profile>('profile-create', {
        type: 'person',
        name: 'Admin',
        roles: ['ADMIN']
    });
    await ctx.resolve('auth-create', {
        profileId: profile.results?.id,
        type: 'username',
        token: 'admin',
        secret: 'admin'
    });
    await ctx.resolve('application-create', {
        profileId: profile.results?.id,
        name: 'Example App',
        scopes: ['profile-write', 'auth-read'],
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 365)
    });
});