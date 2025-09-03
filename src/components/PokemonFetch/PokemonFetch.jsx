import { useState } from "react";
import { useFetch } from "../../hooks/useFetch";

export const PokemonFetch = () => {
	const [id, setId] = useState(1);

	const { data: pokemons, loading, error } = useFetch(`https://pokeapi.co/api/v2/pokemon/${id}`);

	const handleChange = (event) => {
		setId(event.target.value);
	};

	return (
		<div className="pokemon-container">
			<h2 className="pokemon-title">Pokemon Viewer</h2>

			<input type="number" value={id} min="1" onChange={handleChange} style={{ marginBottom: "10px" }} />

			{loading && <h1 className="loading">Loading...</h1>}

			{error && <h1 className="error">{error.message}</h1>}

			{!loading && pokemons && (
				<div className="pokemon-card">
					<h3>
						#{pokemons?.id} {pokemons?.name?.toUpperCase()}
					</h3>
					<img src={pokemons?.sprites?.front_default} alt={pokemons?.name} />
				</div>
			)}
		</div>
	);
};
