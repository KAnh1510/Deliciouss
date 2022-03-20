import {BrowserRouter, Link} from 'react-router-dom';
import Categories from './components/category/Categories';
import Pages from './pages/Pages';
import Search from './components/search/Search';
import styled from 'styled-components';
import {GiKnifeFork} from 'react-icons/gi';

function App() {
  return (
    <div className="App">
			<Nav>
				<GiKnifeFork />
				<Logo to={"/"} >deliciousss</Logo>
			</Nav>
			<BrowserRouter>
				<Search />
				<Categories />
				<Pages />
			</BrowserRouter>
    </div>
  );
}

const Logo = styled.div`
	text-decoration: none;
	font-size:1.5rem;
	font-weight:400;
	font-family:'Lobster Two', cursive;
`
const Nav = styled.div`
	padding: 4rem 0rem;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	svg {
		font-size: 2rem;
	}
`

export default App;
