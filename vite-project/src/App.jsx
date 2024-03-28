import { useEffect, useState } from 'react'

import './App.css'

import PopExit from './components/popups/PopExit/PopExit.jsx'
import PopNewCard from './components/popups/PopNewCard/PopNewCard.jsx'
import PopBrowse from './components/popups/PopBrowse/PopBrowse.jsx'
import Header from './components/Header/Header.jsx'
import Main from './components/Main/Main.jsx'
import { Wrapper } from "./App.styled.js";
import { GlobalStyle } from "./Global.styled.js";



function App() {

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(false);
		}, 2000)
	}, [])

	const getUuid = () => {
		return self.crypto.randomUUID();
	}

	const [cards, setCards] = useState([
		[
			{
				id: self.crypto.randomUUID(),
				theme: "Web Design",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",
			},
			{
				id: self.crypto.randomUUID(),
				theme: "Research",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
			{
				id: self.crypto.randomUUID(),
				theme: "Web Design",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
			{
				id: self.crypto.randomUUID(),
				theme: "Copywriting",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
			{
				id: self.crypto.randomUUID(),
				theme: "Web Design",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
		],
		[
			{
				id: self.crypto.randomUUID(),
				theme: "Research",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
		],
		[
			{
				id: self.crypto.randomUUID(),
				theme: "Research",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
			{
				id: self.crypto.randomUUID(),
				theme: "Copywriting",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
			{
				id: self.crypto.randomUUID(),
				theme: "Web Design",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
		],
		[
			{
				id: self.crypto.randomUUID(),
				theme: "Research",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
		],
		[
			{
				id: self.crypto.randomUUID(),
				theme: "Research",
				title: "Название задачи",
				date: "30.10.23",
				status: "Без статуса",

			},
		]
	]);

	const [isLoaded, setIsLoaded] = useState(true);



	return (
		<>

			<GlobalStyle />

			<Wrapper >
				<PopExit />
				<PopNewCard cards={cards} setCards={setCards} />
				<PopBrowse />
				<Header />
				<Main cards={cards} isLoaded={isLoaded} />
			</Wrapper >

		</>

	)
}

export default App



