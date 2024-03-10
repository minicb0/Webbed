import React, { useEffect, useState } from 'react';
import { apiKey } from "../../../config"
import './cards.css';
import CardItem from '../cardItem/cardItem';

const Cards: React.FC = () => {

  const [responseData, setResponseData] = useState([]);

  const animals = [
    "Lion",
    "Tiger",
    "Elephant",
    "Giraffe",
    "Zebra",
    "Gorilla",
    "Rhinoceros",
    "Hippopotamus",
    "Cheetah",
    "Leopard",
    "Jaguar",
    "Chimpanzee",
    "Orangutan",
    "Panda",
    "Koala",
    "Kangaroo",
    "Platypus",
    "Crocodile",
    "Alligator",
    "Komodo Dragon",
    "Python",
    "Anaconda",
    "King Cobra",
    "Black Mamba",
    "Bald Eagle",
    "Golden Eagle",
    "Falcon",
    "Hawk",
    "Owl",
    "Peregrine Falcon",
    "Polar Bear",
    "Grizzly Bear",
    "Black Bear",
    "Brown Bear",
    "Panda Bear",
    "Red Panda",
    "Snow Leopard",
    "Lynx",
    "Cougar",
    "Jaguarundi",
    "Wolf",
    "Coyote",
    "Fox",
    "Red Fox",
    "Arctic Fox",
    "Gray Wolf",
    "African Wild Dog",
    "Hyena"
  ];

  useEffect(() => {
    const randomPositions: any = [];
    while (randomPositions.length < 10) {
      const randomPosition = Math.floor(Math.random() * animals.length);
      if (!randomPositions.includes(randomPosition)) {
        randomPositions.push(randomPosition);
      }
    }


    randomPositions.forEach((position: number) => {
      const animal = animals[position];
      fetch(`https://api.api-ninjas.com/v1/animals?name=${animal}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey,
          'Content-Type': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(result => {
          const newa = responseData;
          newa.push(result);
          setResponseData(newa);
        })
        .catch(error => {
          console.error(`Error fetching data for ${animal}:`, error);
        });
    });
  }, []);

  return (
    <div className='cards' id="animals">

      <h1>Check out these AMAZING Sights!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
            {/* {animals.map((animal, index) => (
              <CardItem
                key={index}
                src='images/Lion.jpg' // You can pass your actual image src here
                text={responseData}
                label='Lions'
                path='/animals'
              />
            ))} */}
            <ul className='cards__items'>
              <CardItem
                src='images/Lion.jpg'
                text='The lion, belonging to the genus Panthera, is a majestic feline native to the vast landscapes of Africa and India.'
                label='Lions'
                path='/animals'
              />
              <CardItem
                src='images/gorilla.jpg'
                text='Gorillas, characterized as herbivorous, ground-dwelling great apes, inhabit the lush tropical forests of equatorial Africa.'
                label='Gorillas'
                path='/animals'
              />
            </ul>
            <ul className='cards__items'>
              <CardItem
                src='images/elephant.jpg'
                text='Elephants, known as the largest land animals on Earth, possess remarkable strength and intelligence.'
                label='Elephants'
                path='/animals'
              />
              <CardItem
                src='images/penguin.jpg'
                text='Penguins are a fascinating group of aquatic flightless birds, distinguished by their black backs and wings contrasting with their white fronts, which aids in camouflage.'
                label='Penguins'
                path='/animals'
              />
            </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
