const VITE_BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export const fetchTournaments = async () => {
    try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/TournamentsLists`);
  
      if (!response.ok) {
        throw new Error(`Помилка ${response.status}: ${response.statusText}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Помилка завантаження:", error);
      return []; 
    }
};

export const fetchMatches = async () => {
    try {
        const response = await fetch(`${VITE_BACKEND_URL}/api/Matches`);

        if (!response.ok) {
            throw new Error(`Помилка ${response.status}: ${response.statusText}`);
        }

        return await response.json();
    } catch (error) {
        console.error("Помилка завантаження матчів:", error);
        return [];
    }
};

export const fetchTeams = async () => {
  try {
      const response = await fetch(`${VITE_BACKEND_URL}/api/TeamsLists`);

      if (!response.ok) {
          throw new Error(`Помилка ${response.status}: ${response.statusText}`);
      }

      return await response.json();
  } catch (error) {
      console.error("Помилка завантаження матчів:", error);
      return [];
  }
};

