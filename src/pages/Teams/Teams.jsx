import "./Teams.scss";
import { useEffect, useState } from "react";
import { fetchTeams } from "../../components/api";
import SearchBar from "../../components/SearchBar/SearchBar";
import TeamsCard from "../../components/TeamsCard/TeamsCard";


const TeamsPage = () => {
    const [stateTeams, setStateTeams] = useState([]);
    
    const [value, onChange ] = useState("");

    useEffect(() => {
        const getTeams = async () => {
          const teamsData = await fetchTeams();
          setStateTeams(teamsData);
        };
    
        getTeams();
      }, []);

    const filteredTeams = stateTeams
        .filter(team =>
            team.teamName.toLowerCase().includes(value.toLowerCase())
        )

        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate));

    return (
        <div className="teamsPage container">
            <section className="page-teams">
                <SearchBar value={value} onChange ={onChange } />
                <ul>
                    {filteredTeams.length > 0 ? (
                        filteredTeams.map((team) => (
                            <TeamsCard key={team.teamID} team={team} />
                        ))
                    ) : (
                        <p>Нічого не знайдено</p>
                    )}
                </ul>
            </section>
        </div>
    );
};

export default TeamsPage;