import React from 'react';
import BasketballPlayerCard from '../src/component/basketballPlayerCard';
import "./App.css"

function App() {
  const players = [
    {
      name: 'LeBron James',
      image: "https://img.olympics.com/images/image/private/t_s_pog_staticContent_hero_xl_2x/f_auto/primary/c5r52rbifxn2srhp9no0",
      position: 'Forward',
      stats: {
        pointsPerGame: 25.4,
        assistsPerGame: 7.1,
        reboundsPerGame: 10.5,
      },
    },
    {
      name: 'Kevin Durant',
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnu0cRkpEIaihb-FZXOij0i0aRWar3-bGy5A&s",
      position: 'Forward',
      stats: {
        pointsPerGame: 27.0,
        assistsPerGame: 5.5,
        reboundsPerGame: 7.1,
      },
    },
    {
      name: 'Stephen Curry',
      image: "https://www.investopedia.com/thmb/T1dEXpSMZQ_QEf3yabnz1u80BMc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-1795186767-94867a77abd7454dac19f032c053c541.jpg",
      position: 'Guard',
      stats: {
        pointsPerGame: 26.6,
        assistsPerGame: 6.5,
        reboundsPerGame: 5.2,
      },
    },
    // Add more players here
  ];

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basketball Players</h1>
        <div style={{
          display: 'flex',
          justifyContent: 'flex-end', // Align items to the right
          flexWrap: 'wrap',
          position: 'relative',
          right: '0'
        }}>
          {players.map((player, index) => (
            <BasketballPlayerCard
              key={index}
              name={player.name}
              image={player.image}
              position={player.position}
              stats={player.stats}
            />
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;