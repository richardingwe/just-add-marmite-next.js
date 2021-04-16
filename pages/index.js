import { createClient } from 'contentful';

export async function getStaticProps() {
	const client = createClient({
		space: process.env.CONTENTFUL_SPACE_ID,
		accessToken: process.env.CONTENTFUL_ACCESS_KEY,
	});
}

export default function Recipes() {
	return <div className='recipe-list'>Recipe List</div>;
}
