import React from 'react';
import { modalState } from '../atom/modalAtom';
import { useRecoilState } from 'recoil';

const UploadModal = () => {
  const [open, setOpen] = useRecoilState(modalState);
  return (
    <>
      <div>UploadModal</div>
      {open && <h1>THe modal is open</h1>}
    </>
  )
}

export default UploadModal;