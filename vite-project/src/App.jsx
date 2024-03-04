
import useState from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import PopExit from './components/popupsFolder/PopExit.jsx'
import PopNewCard from './components/popupsFolder/PopNewCard.jsx'
import PopBrowse from './components/popupsFolder/PopBrowse.jsx'
import Header from './components/HeaderFolder/Header.jsx'
import Main from './components/MainFolder/Main.jsx'

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


