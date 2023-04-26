import React, { useState } from 'react';
import { CardBlock, CardImage, CardLine, CardLogo } from './Card.styled';
import Avatar from '../Avavtar/Avatar';
import StatisticsList from '../StatisticsList/StatisticsList';
import Button from '../Button/Button';
import { updateFollowers } from '../../utils/backend';

const Card = ({ imageURL, folowers, tweets, id }) => {
  const [isLoading, setIsLoading] = useState(false);
  const TOKEN = 'followingsList';
  const [currentFollwers, setCurrentFollwers] = useState(folowers);
  const [isActive, setIsActive] = useState(
    JSON.parse(localStorage.getItem(TOKEN)) !== null &&
      JSON.parse(localStorage.getItem(TOKEN)).find(user => user === id)
      ? false
      : true
  );

  const handleClick = async () => {
    if (isActive) {
      setIsLoading(true);
      const storedData = JSON.parse(localStorage.getItem(TOKEN)) || [];
      const updatedData = storedData.includes(id)
        ? storedData.filter(user => user !== id)
        : [...storedData, id];
      localStorage.setItem(TOKEN, JSON.stringify(updatedData));
      const { folowers } = await updateFollowers(id, 'increment');
      setCurrentFollwers(folowers);
      setIsActive(false);
      setIsLoading(false);
    }
    if (!isActive) {
      setIsLoading(true);
      const followingsList = JSON.parse(localStorage.getItem(TOKEN)) || [];
      const updatedFollowingsList = followingsList.filter(user => user !== id);
      localStorage.setItem(TOKEN, JSON.stringify(updatedFollowingsList));
      const { folowers } = await updateFollowers(id, 'decrement');

      setCurrentFollwers(folowers);
      setIsActive(!isActive);
      setIsLoading(false);
    }
  };

  return (
    <CardBlock>
      <CardLogo src="./img/avatar.png" />
      <CardImage src="./img/card-image.png" alt="card-image" />
      <CardLine />
      <Avatar src={imageURL} />
      <StatisticsList folowers={currentFollwers} tweets={tweets} />
      <Button isActive={isActive} onClick={handleClick} isLoading={isLoading} />
    </CardBlock>
  );
};

export default Card;
