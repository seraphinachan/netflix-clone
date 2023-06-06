import React from 'react';
import { TitleCardList } from './components/Card/Title/TitleCard';
import Modal from './components/Modal/Modal';
import FakeEpisodeList from '../../data/episodes';

export default function Episode() {
  return (
    <Modal isOpen={true}>
      <TitleCardList episodes={FakeEpisodeList} />
    </Modal>
  );
}
