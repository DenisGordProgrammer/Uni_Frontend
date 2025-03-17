import "./CommandsList.scss";

const CommandsList = ({ commands }) => {
    return (
        <div className="commands-list">
            <h2 className="title">Топ команд</h2>
            <div className="content">
                {commands.map((command, index) => (
                    <div className="commands-row" key={command.name}>
                        <div className="commands-info">
                            <span>#{index +1}. {command.name}</span>
                            <img src={command.icon} className="icon" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CommandsList;
