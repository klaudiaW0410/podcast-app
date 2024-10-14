import RSSParser from 'rss-parser';
import cors from 'cors';
import express from 'express';

const feedURLs = {
	dotnetrocks: 'https://pwop.com/feed.aspx?show=dotnetrocks',
	chociazby: 'https://anchor.fm/s/ebad54d0/podcast/rss',
	glodnaglowa: 'https://www.spreaker.com/show/4745455/episodes/feed',
};

const parser = new RSSParser();

const parse = async (url) => {
	const feed = await parser.parseURL(url);
	return feed.items.map((item) => ({
		title: item.title,
		link: item.link,
		publishDate: item.pubDate,
		description: item.contentSnippet,
		mp3: item.enclosure.url,
	}));
};

let app = express();
app.use(cors());

app.get('/podcast/:name', async (req, res) => {
	const podcastName = req.params.name;
	const url = feedURLs[podcastName];
	if (url) {
		const episodes = await parse(url);
		res.send(episodes);
	} else {
		res.status(404).send({ error: 'Podcast not found' });
	}
});

const server = app.listen('8080', () => {
	console.log(`Server started on port ${server.address().port}`);
});
