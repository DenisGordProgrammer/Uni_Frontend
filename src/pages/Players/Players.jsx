import "./Players.scss";
import { useEffect, useState } from "react";
import { fetchPlayers } from "../../components/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import PlayersCard from "../../components/PlayersCard/PlayersCard";


const PlayersPage = () => {
    const [players, setPlayers] = useState([]);
    
    const [value, onChange ] = useState("");

    useEffect(() => {
        const getPlayers = async () => {
          const playersData = await fetchPlayers();
          setPlayers(playersData);
        };
    
        getPlayers();
      }, []);

    const filteredPlayers = players
        .filter(player =>
            player.plNickname.toLowerCase().includes(value.toLowerCase())
        )

        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    return (
        <div className="playersPage container">
            <section className="page-players">
                <SearchBar value={value} onChange ={onChange } />
                <ul>
                    {filteredPlayers.length > 0 ? (
                        filteredPlayers.map((player) => (
                            <PlayersCard key={player.playerId} player={player} />
                        ))
                    ) : (
                        <p>Нічого не знайдено</p>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default PlayersPage;