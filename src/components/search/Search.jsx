import {useState} from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import styles from './Search.module.css'

import React from 'react'

function Search() {
	const [input, setInput] = useState('');
	const navigate = useNavigate();

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/searched/" + input)
	};

	return (
		<form className={styles.form_style} onSubmit={handleSubmit}>
			<div >
				<FaSearch></FaSearch>
				<input type="text" 
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
			</div>
		</form>
	)
}

export default Search