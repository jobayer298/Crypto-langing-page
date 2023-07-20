import React from 'react';

const Modal = ({ modalRef, singleData }) => {
  return (
    <dialog
      ref={modalRef}
      id="my_modal_3"
      className="modal bg-[#11062f69] text-white"
    >
      <form method="dialog" className="modal-box bg-[#11062F] text-whit">
        <button className="btn e btn-sm btn-circle btn-ghost absolute right-2 top-2">
          ✕
        </button>
        <img className='h-full w-full' src={singleData.image} alt="" />
      </form>
    </dialog>
  );
};

export default Modal;