//plugins/app/pages/home.ts
import { action } from 'stackpress/server';

export default action(function HomePage(req, res) {
    const name = req.data<string>('name');
    const age = req.data<number>('age');

    res.setResults({name, age });
    res.data.set('title', 'Home Page');
});