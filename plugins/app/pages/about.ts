import { action } from 'stackpress/server';

export default action(function AboutPage(req, res) {
    const info = req.data<string>('info');

    res.setResults({ info });
});