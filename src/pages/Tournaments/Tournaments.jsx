import "./Tournaments.scss";
import { useEffect, useState } from "react";
import { fetchTournaments } from "../../components/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import TournamentCard from "../../components/TournamentCard/TournamentCard";
import { formatDate } from "../../components/dateUtils";

const TournamentsPage = () => {
    const [tournaments, setTournaments] = useState([]);
    
    const [value, onChange ] = useState("");

    useEffect(() => {
        const getTournaments = async () => {
          const tournamentsData = await fetchTournaments();
          setTournaments(tournamentsData);
        };
    
        getTournaments();
      }, []);

    const filteredTournaments = tournaments
        .filter(tournament =>
            tournament.tournamentName.toLowerCase().includes(value.toLowerCase())
        )

        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    return (
        <div className="tournamentsPage container">
            <section className="page-upcoming-tournaments">
                <SearchBar value={value} onChange ={onChange } />
                <ul>
                    {filteredTournaments.length > 0 ? (
                        filteredTournaments.map((tournament) => (
                            <TournamentCard key={tournament.tournamentId} tournament={tournament} formatDate={formatDate} />
                        ))
                    ) : (
                        <p>Нічого не знайдено</p>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default TournamentsPage;