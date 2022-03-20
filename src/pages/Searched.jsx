import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
function Searched() {

	const [searchedRepice, setSearchedRepice] = useState([])
	let params = useParams();
	const getSearched = async (name) => {
		const data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`);
		const recipes = await data.json();
		setSearchedRepice(recipes.results);
	};

	useEffect(() => {
		getSearched(params.search);
	}, [params.search]);

	return (
		<Grid>
			{searchedRepice.map(item => {
				return (
					<Card key={item.id}>
						<Link to={"/recipe/" + item.id}>
							<img src ={item.image} alt={item.title} />
							<h4>{item.title}</h4>
						</Link>
					</Card>
				);
			})}
		</Grid>
	);
}
const Grid = styled.div`
	display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-gap: 3rem;
  margin-top: 5%;
` 
const Card = styled.div`
	img {
  width: 100%;
  border-radius: 2rem;
	}
	a {
  text-decoration: none;
	}
	h4 {
		text-align: center;
		padding: 1rem;
	}
`
export default Searched