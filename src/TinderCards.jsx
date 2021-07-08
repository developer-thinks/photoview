import React, {useState, useEffect} from 'react';
import './TinderCards.css';

import TinderCard from 'react-tinder-card';

function TinderCards() {

    const [people, setPeople]= useState([
   
    // {
    //     name:"Rohit-sharma",
    //     url:"https://media.gettyimages.com/photos/rohit-sharma-of-india-during-the-group-stage-match-of-the-icc-cricket-picture-id1156458403?s=2048x2048"
    //  },
     
     {
        name:"Rohit-sharma",
        url:"https://media.gettyimages.com/photos/rohit-sharma-of-india-in-action-batting-as-mushfiqur-rahim-of-looks-picture-id1159579854?s=2048x2048"
     },
   
     {
        name:"Dhoni",
        url:"https://wallpapercave.com/wp/wp1859027.jpg"
     },
     {
        name:"Dhoni",
        url:"https://wallpapercave.com/wp/wp6390941.jpg"
     },
    // {
    //     name:"AB Devilliars ",
    //     url:"https://media.gettyimages.com/photos/de-villiers-of-the-tshwane-spartans-during-the-tshwane-spartans-media-picture-id1066686122?s=2048x2048 "
    // },
     {
        name:"AB Devilliars ",
        url:"https://wallpapercave.com/wp/wp1894307.jpg"
    },
    {
        name:"AB Devilliars ",
        url:"https://wallpapercave.com/wp/wp1894297.jpg"
    },
    // {
    //     name:"AB Devilliars ",
    //     url:" https://wallpapercave.com/wp/wp1894278.jpg"
    // },
    // {
    //     name:"AB Devilliars ",
    //     url:" https://wallpapercave.com/wp/wp1894275.jpg"
    // },
   
    //  {
    //     name:"AB Devilliars ",
    //     url:" https://wallpapercave.com/wp/wp1894261.jpg"
    // },
    //  {
    //     name:"AB Devilliars ",
    //     url:"https://wallpapercave.com/wp/wp1894259.jpg "
    // },
    //  {
    //     name:"AB Devilliars ",
    //     url:"https://wallpapercave.com/wp/wp1894254.jpg "
    // },
     {
        name:"AB Devilliars ",
        url:" https://wallpapercave.com/wp/wp1894272.jpg"
    },
    
     {
        name:"Kiccha sudeep ",
        url:"https://wallpapercave.com/wp/wp4050016.jpg"
    },

    //   {
    //     name:"Kiccha sudeep ",
    //     url:"https://wallpapercave.com/wp/wp4050025.jpg"
    // },
    
    {
        name:"Professor ",
        url:"https://wallpapercave.com/wp/wp5854959.png"
    },
    
    // {
    //     name:"Professor ",
    //     url:"https://wallpapercave.com/wp/wp4631429.jpg "
    // },
    
    // {
    //     name:"Professor ",
    //     url:" https://wallpapercave.com/wp/wp4537923.jpg"
    // },
//    {
//         name:"Professor",
//         url:"https://wallpapercave.com/wp/wp5854923.jpg "
//     },
     {
        name:"Avengers ",
        url:"https://images8.alphacoders.com/100/thumb-1920-1003220.png"
    },
    // {
    //     name:"Captain-rogers ",
    //     url:"https://wallpapercave.com/wp/wp6914659.jpg"
    // },

     {
        name:"Captain-rogers ",
        url:"https://wallpapercave.com/uwp/uwp942212.jpeg "
    },
     {
        name:"Captain-rogers ",
        url:"https://wallpapercave.com/uwp/uwp942202.jpeg"
    },
    {
        name:"Sammed AS",
        url:"https://www.linkpicture.com/q/myself_2-1.jpg"
    },
    // {
    //     name:"Sammed AS",
    //     url:"https://www.linkpicture.com/q/myself-5-1.jpg"
    // },
    // {
    //     name:"Sammed AS",
    //     url:"https://www.linkpicture.com/q/myself-7-2.jpg"
    // },
    
    {
        name:"Sammed AS",
        url: "https://www.linkpicture.com/q/IMG_20210415_113840-1-2.jpg"
    },
    //  {
    //     name:"Captain-rogers ",
    //     url:"https://wallpapercave.com/uwp/uwp942201.jpeg"
    // },

    // {
    //     name:"Captain-rogers ",
    //     url:"https://wallpapercave.com/uwp/uwp942198.jpeg"
    // },
     
    // {
    //     name:" Howkaye",
    //     url:" https://wallpapercave.com/wp/wp1891373.jpg"
    // },
    // {
    //     name:" lionel Messi",
    //     url:"https://media.gettyimages.com/photos/lionel-messi-of-argentina-celebrates-after-scoring-his-teams-first-picture-id984676900?s=2048x2048"
    // },
    //  {
    //     name:"cristiano Ronaldo",
    //     url:" https://media.gettyimages.com/photos/juventus-portuguese-forward-cristiano-ronaldo-celebrates-his-teams-picture-id1165169235?s=2048x2048"
    // },
    //  {
    //     name: 'Virat-Kohli',
    //     url: "https://media.gettyimages.com/photos/virat-kohli-of-india-gestures-to-australian-fans-after-india-took-the-picture-id507380948?s=2048x2048"
    // },
    // {
    //   name: 'Virat-Kohli',
    //     url: "https://media.gettyimages.com/photos/virat-kohli-of-india-gestures-to-australian-fans-to-be-quiet-after-picture-id507380762?s=2048x2048"
    // },
     {
        name:"Virat Kohli  ",
        url:"https://wallpapercave.com/wp/wp9264434.jpg"
    },
     {
        name:"Virat Kohli ",
        url:" https://media.gettyimages.com/photos/virat-kohli-of-india-looks-on-during-game-three-of-the-one-day-picture-id1288966957?s=2048x2048"
    },
    //  {
    //     name:"Tony-stark ",
    //     url:"https://wallpapercave.com/wp/wp5138348.jpg"
    // },
    {
        name:"Tony-stark ",
        url:"https://wallpapercave.com/wp/wp7201324.jpg"
    },
    {
        name:"Tony-stark ",
        url:"https://wallpapercave.com/wp/wp7201240.jpg"
    }
    
    //  {
    //     name:"Sammed AS",
    //     url:"https://www.linkpicture.com/q/myself-1.jpg"
    // },
    // {
    //     name:"Sammed AS",
    //     url:"https://www.linkpicture.com/q/myself-6-1.jpg"
    // },
    
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
