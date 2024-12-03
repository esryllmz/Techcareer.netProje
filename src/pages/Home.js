import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Events from '../components/Events'
import Courses from '../components/Courses'
import Jobs from '../components/Jobs'
import Slider from '../components/Slider'
import Why from '../components/Why'
import Blog from '../components/Blog'
import Dictionary from '../components/Dictionary'
import Komunite from '../components/Komunite'
import Comments from '../components/Comments'

function Home() {
	return (
		<>
			<Header />
			<Carousel/>
			<Slider/>
			<Events/>
			<Courses/>
			<Jobs/>
			<Why/>
			<Blog/>
			<Dictionary/>
			<Komunite/>
			<Comments/>
			<Footer />
		
			
		</>
	)
}

export default Home