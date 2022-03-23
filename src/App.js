import {BrowserRouter} from 'react-router-dom';
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
				<a href='/' className="home" >deliciousss</a>
			</Nav>
			<BrowserRouter>
				<Search />
				<Categories />
				<Pages />
			</BrowserRouter>
    </div>
  );
}

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
