import { useState } from "react";
import { PodcastDetails } from "./PodcastDetails";
import "./Podcast.css";

const podcasts = [
  { name: 'dotnetrocks', icon: 'dotnetrocks.jpg' },
  { name: 'chociazby', icon: 'chociazby.jpg' },
  { name: 'glodnaglowa', icon: 'glodnaglowa.jpg' },
];

export const PodcastList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [selectedPodcast, setSelectedPodcast] = useState(null);

  const fetchEpisodes = async (podcastName) => {
    const response = await fetch(`http://localhost:8080/podcast/${podcastName}`);
    if (response.ok) {
      const data = await response.json();
      console.log(data);
      setEpisodes(data);
      setSelectedPodcast(podcastName);
    } else {
      console.error('Error fetching podcast:', response.statusText);
    }
  };

  return (
    <>
      <div className="podcast-icons">
        <h1>My favorites podcasts ❤️</h1>
        {podcasts.map((podcast) => (
          <img
            key={podcast.name}
            src={podcast.icon}
            alt={podcast.name}
            onClick={() => fetchEpisodes(podcast.name)}
            style={{ cursor: 'pointer', margin: '10px' }}
          />
        ))}
      </div>
      {selectedPodcast && (
        <div>
          <h2>{selectedPodcast} Episodes</h2>
          <ul>
            {episodes.map((episode, index) => (
              <li key={index}>
                <PodcastDetails
                  title={episode.title}
                  mp3={episode.mp3}
                  content={episode.description}
                />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};