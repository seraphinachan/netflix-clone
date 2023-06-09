import { Modal, TitleCardList } from '@components/';
import FakeEpisodeList from '@data/episodes';
import React, { useState } from 'react';

export default function Episode() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <button onClick={() => setOpen(true)}>Click Me</button>
      <Modal isOpen={open} handleClose={handleClose}>
        <TitleCardList episodes={FakeEpisodeList} />
      </Modal>
    </>
  );
}
