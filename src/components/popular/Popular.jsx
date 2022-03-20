import React, {useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import styles from './Popular.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Popular() {
	const [popular, setPopular] = useState([]);

	useEffect(() => {
		getPopular();
	}, []);

	const getPopular = async () => {
		const check = localStorage.getItem("popular");

		if(check) {
			setPopular(JSON.parse(check));
		} else {
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9`);
			const data = await api.json();

			localStorage.setItem("popular", JSON.stringify(data.recipes));
			setPopular(data.recipes);
		}
	};
	return (
		<div className = {styles.wrapper}>
			<h3>Popular Picks</h3>

			<Splide options={{
				perPage: 4,
				arrows: false,
				pagination: false,
				drag: "free",
				gap: "5rem"
			}}>
				{popular.map((recipe) => {
					return (
						<SplideSlide key = {recipe.id} >	
							<div className = {styles.card}>
								<Link to={"/recipe/" + recipe.id}>
									<p >{recipe.title}</p>
									<img src={recipe.image} alt={recipe.title} />
									<div className={styles.gradient}></div>
								</Link>
							</div>
						</SplideSlide>
					);
				})}			
			</Splide>
		</div>
	)
}

export default Popular