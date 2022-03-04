import React, { useState, useEffect } from 'react';

import Header from './Header';
import ToyForm from './ToyForm';
import ToyContainer from './ToyContainer';

function App() {
	const [showForm, setShowForm] = useState(false);
	const [toys, setToys] = useState([]);

	useEffect(() => {
		fetch('http://localhost:3001/toys')
			.then((res) => res.json())

			.then((toys) => setToys(toys));
	}, [toys]);

	function handleClick() {
		setShowForm((showForm) => !showForm);
	}

	function handleAddToy(newToy) {
		setToys([...toys, newToy]);
	}

	// function handleDeleteToy(toyToDelete) {
	// 	const updatedToys = toys.filter((toy) => toy.id !== toyToDelete.id);
	// 	setToys(updatedToys);
	// }

	// function handleUpdateToy(updatedToy) {
	// 	const updatedToys = toys.map((toy) =>
	// 		toy.id === updatedToy.id ? updatedToy : toy
	// 	);
	// 	setToys(updatedToys);
	// }

	return (
		<>
			<Header />
			{showForm ? <ToyForm onAddToy={handleAddToy} /> : null}
			<div className="buttonContainer">
				<button onClick={handleClick}>Add a Toy</button>
			</div>
			<ToyContainer
				// onUpdateToy={handleUpdateToy}
				// onDeleteToy={handleDeleteToy}
				toys={toys}
			/>
		</>
	);
}

export default App;
