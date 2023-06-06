import React from 'react';
import './TitleCard.css';
import PropTypes from 'prop-types';

function TitleCard({ episode }) {
  const { image, description, title, index } = episode;

  return (
    <div
      className={index === 1 ? 'card_container is_active' : 'card_container'}
    >
      <div className="title_index">{index}</div>
      <div className="image_wrapper">
        <div>
          <img src={image} width={130} height={70} />
        </div>
        <div className="play_icon"></div>
      </div>
      <div className="metadata_wrapper">
        <div className="title">
          <span>Episode {title}</span>
          <span>64m</span>
        </div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
}

export const TitleCardList = ({ episodes }) => {
  return (
    <div className="titlecard_list_container">
      <div className="header"></div>
      <div className="content">
        {episodes.map((episode, index) => (
          <TitleCard episode={episode} key={index} />
        ))}
      </div>
    </div>
  );
};

export default TitleCard;

TitleCard.propTypes = {
  episode: PropTypes.object,
};

TitleCardList.propTypes = {
  episodes: PropTypes.arrayOf(JSON),
};
