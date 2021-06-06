import React, {useState, useEffect} from 'react';
import './TinderCards.css';

import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [people, setPeople]= useState([{
        name: 'Virat-Kohli',
        url: "https://media.gettyimages.com/photos/virat-kohli-of-india-gestures-to-australian-fans-after-india-took-the-picture-id507380948?s=2048x2048"
    },
    {
        name: 'Rohit-sharma',
        url: "https://media.gettyimages.com/photos/rohit-sharma-of-india-raises-his-bat-after-he-scores-100-runs-during-picture-id1160413155?s=2048x2048"
    },
    {
      name: 'Virat-Kohli',
        url: "https://media.gettyimages.com/photos/virat-kohli-of-india-gestures-to-australian-fans-to-be-quiet-after-picture-id507380762?s=2048x2048"
    },
    {
        name:"Dhoni",
        url:"https://media.gettyimages.com/photos/indias-mahendra-singh-dhoni-walks-off-for-50-during-the-2019-cricket-picture-id1154893839?s=2048x2048"
    },
    {
        name:"AB Devilliars ",
        url:"https://media.gettyimages.com/photos/de-villiers-of-the-tshwane-spartans-during-the-tshwane-spartans-media-picture-id1066686122?s=2048x2048 "
    },
     {
        name:"Avengers ",
        url:"https://images8.alphacoders.com/100/thumb-1920-1003220.png"
    },
    {
        name:"Captain-rogers ",
        url:"https://wallpapercave.com/wp/wp6914659.jpg"
    },
     {
        name:" Doctor strange",
        url:" https://wallpapercave.com/wp/wp3837516.jpg"
    },
    {
        name:" Howkaye",
        url:" https://wallpapercave.com/wp/wp1891373.jpg"
    },
     {
        name:" Royal enfield",
        url:" https://wallpapercave.com/wp/wp2616768.jpg"
    },
    {
        name:" lionel Messi",
        url:"https://media.gettyimages.com/photos/lionel-messi-of-argentina-celebrates-after-scoring-his-teams-first-picture-id984676900?s=2048x2048"
    },
     {
        name:"cristiano Ronaldo",
        url:" https://media.gettyimages.com/photos/juventus-portuguese-forward-cristiano-ronaldo-celebrates-his-teams-picture-id1165169235?s=2048x2048"
    },
     {
        name:"Virat Kohli  ",
        url:"https://wallpapercave.com/wp/wp9264434.jpg"
    },
     {
        name:"Virat Kohli ",
        url:" https://media.gettyimages.com/photos/virat-kohli-of-india-looks-on-during-game-three-of-the-one-day-picture-id1288966957?s=2048x2048"
    },
     {
        name:"Tony-stark ",
        url:"https://wallpapercave.com/wp/wp7494287.jpg"
    },
]);

    const swiped=(direction,nameToDelete)=>{
        console.log(nameToDelete+'is removed');
    }

    const outOfFrame=(name)=>{
        console.log(name+'left the screen');
    }

    return (
        <div className="tinderCards">
                <div className="tinderCards__cardContainer">
                    {people.map((person)=>(
                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={["up", "down"]}
                        onSwipe={(dir)=> swiped(dir,person.name)}
                        onCardLeftScreen={()=>outOfFrame(person.name)}
                    >
                        <div style={{backgroundImage: `url(${person.url})` }} className="card" >
                            <h3>{person.name}</h3>
                        </div>


                    </TinderCard>
                ))}
                </div>
        </div>
    )
}

export default TinderCards;
