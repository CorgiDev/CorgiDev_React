import React from 'react';
import * as contentful from 'contentful'
import BlogPost from './blog/blogPost';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default class Blog extends React.Component {
	state = {
		posts: []
	  }
	  client = contentful.createClient({
		space: 'StoredInPasswordSafe',
		accessToken: 'StoredInPasswordSafe'
	  })
	  componentDidMount() {
		this.fetchPosts().then(this.setPosts);
	  }
	  fetchPosts = () => this.client.getEntries()
	  setPosts = response => {
		this.setState({
		  posts: response.items
		})
	  }

	render() {
		return (
			<div id="wholePageContainer">
				<Header />
				<div id="wrapper">
					<h1 id="blogHeader">CorgiDev Blog</h1>
					<br/>
					<hr />
					<br/>
					{ this.state.posts.map(({fields}, i) =>
						<BlogPost key={i} {...fields} />
					)}
					<Footer />
				</div>
			</div>
		)
	}
}