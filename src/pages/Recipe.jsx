import React, {useState, useEffect} from 'react'
import {useParams} from 'react-router-dom'
import styled from 'styled-components'
import {motion} from "framer-motion"

function Recipe() {

	const [details, setDetails] = useState({});
	const params = useParams();
	const [activeTab, setActiveTab] = useState('intructions')

	const fetchDetails = async () => {
		const data = await fetch(`https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`);
		const detailData = await data.json();
		setDetails(detailData);
	}

	useEffect(() => {
		fetchDetails();
	},[params.name])

	return (
		<DetailWrapper>
			<Image>
				<h2>{details.title}</h2>
				<img src={details.image} alt={details.title} />
			</Image>
			<Info>
				<Button 
					className = {activeTab === 'intructions' ? "active" : ""}
					onClick={() => setActiveTab("intructions")}
					>
					Instructions
					</Button>
				<Button
					className = {activeTab === "ingredients" ? "active" : ""}
					onClick={() => setActiveTab("ingredients")}
				>
					Ingredients
				</Button>
				{activeTab === 'intructions' && (
					<div>
						<h3 dangerouslySetInnerHTML={{__html: details.summary}}></h3>
						<h3 dangerouslySetInnerHTML={{__html: details.instructions}}></h3>
					</div>
				)}
				{activeTab === 'ingredients' && (
					<ul>
						{details.extendedIngredients.map((ingredient) => (
							<li key = {ingredient.id}>{ingredient.original}</li>
						))}
					</ul>
				)}
			
			</Info>
		</DetailWrapper>
	)
}

const DetailWrapper = styled.div`
	margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
	.active {
		background: linear-gradient(to right, #f27121, #e94057);
		color: #fff;
	}
	h2 {
		margin-bottom: 2rem;
	}
	h4 {
		font-size: 1.2rem;
		line-height: 1.5rem;
	}
	li {
		font-size: 1.2rem;
		line-height: 2.5rem;
	}
	ul {
		margin-top: 2rem;
	}
`
const Image = styled.div`
	width:50%;

`
const Button = styled.button`
	padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid #000;
  margin-right: 2rem;
	margin-bottom: 2rem;
  font-weight: 600;
	cursor: pointer;
`

const Info = styled.div`
	margin-left: 2rem;
	width:50%;
`
export default Recipe