import React, {useEffect, useState}  from 'react'
import {Link} from 'react-router-dom'
import styles from './Veggie.module.css'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

function Veggie() {
	const [veggie, setVeggie] = useState([]);

	useEffect(() => {
		getVeggie();
	}, []);

	const getVeggie = async () => {
		const check = localStorage.getItem("veggie");

		if(check) {
			setVeggie(JSON.parse(check));
		} else {
			const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=9&tags=vegetarian`);
			const data = await api.json();

			localStorage.setItem("veggie", JSON.stringify(data.recipes));
			setVeggie(data.recipes);
		}
	};
	return (
		<div className = {styles.wrapper}>
			<h3>Our Vegetarian Picks</h3>

			<Splide options={{
				perPage: 3,
				arrows: false,
				pagination: false,
				drag: "free",
				gap: "5rem"
			}}>
				{veggie.map((recipe) => {
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

export default Veggie