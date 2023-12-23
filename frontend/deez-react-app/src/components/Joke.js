// React component that shows a joke from deez_jokes.json

import React, { useState } from 'react';

import jokes from '../data/deez_jokes.json';

const Joke = () => {
    const [random_joke, setRandomJoke] = useState(jokes[Math.floor(Math.random() * jokes.length)]);
    const [showPunchline, setShowPunchline] = useState(false);

    const getRandomJoke = () => {
        setRandomJoke(jokes[Math.floor(Math.random() * jokes.length)]);
        setShowPunchline(false);
    };

    const revealPunchline = () => {
        setShowPunchline(true);
    };

    return (
        <main class="flex flex-col items-center justify-center min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm max-w-md w-full space-y-8" data-v0-t="card">
          <div class="flex flex-col space-y-1.5 p-6 text-center">
            <p class="mt-6 text-center text-4xl font-extrabold text-gray-900">
                {random_joke.prompt}
            </p>
          </div>

          <div class="mt-5 flex justify-center">
            <button onClick={revealPunchline} class="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-blue-500 text-white rounded-lg px-6 py-2 text-xl">
                {random_joke.reply.first}
            </button>
          </div>

          <div class="mt-5 flex justify-center">
            {showPunchline && 
                <p class="mt-6 text-center text-4xl font-extrabold text-gray-900">
                    {random_joke.reply.second}
                </p>
            }
          </div>

          <div class="mt-5 flex justify-center">
            {showPunchline && 
                <button onClick={getRandomJoke} class="inline-flex items-center justify-center font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-green-500 text-white rounded-lg px-6 py-2 text-sm">
                    New Joke
                </button>
            }
          </div>

        </div>
      </main>
        // <div>
        //     <h2>{random_joke.prompt}</h2>
        //     <button onClick={revealPunchline}>{random_joke.reply.first}</button>
        //     {showPunchline && <h3>{random_joke.reply.second}</h3>}

        //     <button onClick={getRandomJoke}>New Joke</button>
        // </div>
    );
};

export default Joke;




