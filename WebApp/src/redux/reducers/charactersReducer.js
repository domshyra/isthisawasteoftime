/* eslint-disable import/no-anonymous-default-export */

import * as types from "../actions/actionTypes";

import initialState from "./initialState";

export default function characterReducer(state = initialState.characters, action) {
	let characters = []
	if (characters.length === 0){
		getCharacters()
		.then(results => {
			characters = results.map(character => (
				{
					id: character.id,
					name: character.name,
					status: character.status,
					species: character.species,
					gender: character.gender
				}
				
		))});
	}

	switch (action.type) {
		case types.LOAD_CHARACTERS:
			return { ...state, ...characters };

		default:
			return state;
	}
}

export const getCharacters = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const json = await response.json();
    return (json.results);
}
