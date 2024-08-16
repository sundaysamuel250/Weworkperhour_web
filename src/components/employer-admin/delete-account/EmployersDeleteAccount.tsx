import React, { useState } from 'react';
import DeleteModal from './DeleteModal';

const EmployersDeleteAccount: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);
  const handleConfirmDelete = () => {
    // Handle delete action here
    setModalOpen(false);
    console.log('Account deleted');
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <button
        className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        onClick={handleOpenModal}
      >
        Delete Account
      </button>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onConfirm={handleConfirmDelete}
      />
    </div>
  );
};

export default EmployersDeleteAccount;
