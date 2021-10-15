import { Api } from "../../Api/Api";

export const gamesList = () => {

    const[games, setGames] = useState([]);

    useEffect(() =>{
        const loadGamesList = async () =>{

            const response = await  api.buildApiGetRequest(api.readAllUrl());
            
            const result = await response.json();

            setGames(result);
        };
        
        loadGamesList();

    },[]);




    return (
        <div className="cards">
            {games.map((game,index) => {
                <GameCard 
                key={`game_list_${index} `}
                game={game}
                ></GameCard>


            })}


        </div>
    )
}
