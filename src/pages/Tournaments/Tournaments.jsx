import "./Tournaments.scss";
import { useEffect, useState } from "react";
import { fetchTournaments } from "../../components/api";
import SearchBar from "../../components/SearchBar";
import TournamentCard from "../../components/TournamentCard";


const TournamentsPage = () => {
    const [stateTournaments, setStateTournaments] = useState([]);
    
    const [value, onChange ] = useState("");

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit' });
    };

    useEffect(() => {
        const getTournaments = async () => {
          const tournamentsData = await fetchTournaments();
          setStateTournaments(tournamentsData);
        };
    
        getTournaments();
      }, []);

    const filteredTournaments = stateTournaments
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