
import useState from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PopExit from './components/popups/PopExit.jsx'
import PopNewCard from './components/popups/PopNewCard.jsx'
import PopBrowse from './components/popups/PopBrowse.jsx'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'

function App() {

	return (
		<>
			<div className="wrapper">
				<PopExit />
				<PopNewCard />
				<PopBrowse />
				<Header />
				<Main />
			</div>
			<script src="js/script.js"></script>
		</>
	)
}

export default App


