
import useState from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PopExit from './components/PopExit.jsx'
import PopNewCard from './components/PopNewCard.jsx'
import PopBrowse from './components/PopBrowse.jsx'
import HeaderContainer from './components/HeaderContainer.jsx'
import MainContainer from './components/MainContainer.jsx'

function App() {
	
	return (
		<>
			<div className="wrapper">				
				<PopExit />
				<PopNewCard />
				<PopBrowse />
				<HeaderContainer />
				<MainContainer />				
			</div>
			<script src="js/script.js"></script>
		</>
	)
}

export default App


