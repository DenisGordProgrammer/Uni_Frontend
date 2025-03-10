import "./Tournaments.scss";
import { useState } from "react";
import navi from '../../assets/images/naviLogo.png'

const TournamentsPage = () => {
    const [stateTournaments] = useState([{
        "tournamentId": 14899, "tournamentName": "World Cyber Games 2011 China Finals",
        "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2011-08-02T00:00:00", "endDate": "2011-08-03T00:00:00",
        "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 5455.99, "tournamentGame": "dota",
        "tournamentDate": null, "tournamentResults": []
    }, {
        "tournamentId": 14780, "tournamentName": "World Cyber Games 2009 China Finals",
        "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2012-09-02T00:00:00", "endDate": "2012-09-03T00:00:00",
        "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 81233, "tournamentGame": "dota",
        "tournamentDate": null, "tournamentResults": []
    },{
        "tournamentId": 14590, "tournamentName": "World Cyber Games 2008 China Finals",
        "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2012-09-02T00:00:00", "endDate": "2012-09-03T00:00:00",
        "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 87623, "tournamentGame": "dota",
        "tournamentDate": null, "tournamentResults": []
    },{
        "tournamentId": 14870, "tournamentName": "World Cyber Games 2007 China Finals",
        "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2012-09-02T00:00:00", "endDate": "2012-09-03T00:00:00",
        "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 81653, "tournamentGame": "dota",
        "tournamentDate": null, "tournamentResults": []
    },
    { "tournamentId": 14900, "tournamentName": "WCG Asian Championship 2010", "organizer": { "organizer1": "World Cyber Games" }, "startDate": "2010-07-09T00:00:00", "endDate": "2010-07-11T00:00:00", "location": { "country1": "sg", "city1": "Singapore", "region1": "Southeast Asia" }, "prizePool": 6519.02, "tournamentGame": "dota", "tournamentDate": null, "tournamentResults": [] }, { "tournamentId": 14901, "tournamentName": "CCT Series 7", "organizer": { "organizer2": "GRID", "organizer1": "GAM3RS X" }, "startDate": "2025-02-25T00:00:00", "endDate": "2025-03-07T00:00:00", "location": { "region1": "Europe", "region2": "CIS" }, "prizePool": 50000, "tournamentGame": "dota2", "tournamentDate": null, "tournamentResults": [] }, { "tournamentId": 14902, "tournamentName": "Universal League Season 2", "organizer": { "organizer1": "Nitro Studios" }, "startDate": "2025-02-27T00:00:00", "endDate": "2025-03-15T00:00:00", "location": { "region1": "South America" }, "prizePool": 10000, "tournamentGame": "dota2", "tournamentDate": null, "tournamentResults": [] }, { "tournamentId": 14903, "tournamentName": "ACL X ESL Challenger China", "organizer": { "organizer2": "ESL Gaming", "organizer1": "Hero Esports" }, "startDate": "2025-05-01T00:00:00", "endDate": "2025-05-03T00:00:00", "location": { "country1": "cn", "city1": "Shanghai", "region1": "China" }, "prizePool": 100000, "tournamentGame": "dota2", "tournamentDate": null, "tournamentResults": [] }])
    const [searchQuery, setSearchQuery] = useState("");

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit' });
    };

    const filteredTournaments = stateTournaments
        .filter(tournament =>
            tournament.tournamentName.toLowerCase().includes(searchQuery.toLowerCase())
        )

        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    return (
        <div className="tournamentsPage container">
            <section className="page-upcoming-tournaments">
                <div className="search-container">
                    <input
                        id="search"
                        type="text"
                        placeholder="Пошук..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                <ul>
                    {filteredTournaments.length > 0 ? (
                        filteredTournaments.map((tournament) => {
                            const formattedPrize = Math.ceil(tournament.prizePool).toLocaleString('en-US');
                            return (
                                <li key={tournament.tournamentId}>
                                    <a href={`/${tournament.tournamentName}`} className="page-tournament">
                                        <span>{formatDate(tournament.startDate)} - {formatDate(tournament.endDate)}</span>
                                        <img
                                            src={navi || ''}
                                            alt={tournament.tournamentName || 'No logo'}
                                            className="page-tournament-logo"
                                        />
                                        <span>{tournament.tournamentName || 'No name'}</span>
                                        <span>${formattedPrize || 'N/A'}</span>
                                        <span>Команд: {tournament.teams || 'N/A'}</span>
                                    </a>
                                </li>
                            );
                        })
                    ) : (
                        <p>Нічого не знайдено</p>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default TournamentsPage;