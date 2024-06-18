import React from 'react';

interface Profile {
  id: number;
  name: string;
  email: string;
  phone: string;
  address: string;
  imageUrl: string;
  walletAccount: string;
}

const profile: Profile = {
  id: 1,
  name: 'John Doe',
  email: 'john@example.com',
  phone: '123-456-7890',
  address: '123 Main St, Anytown, USA',
  imageUrl: 'https://via.placeholder.com/150',
  walletAccount: '0x123456789',
};

const ProfileDetails: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Profile Detail</h2>
      <div className="bg-white p-4 rounded shadow">
        <img src={profile.imageUrl} alt={profile.name} className="w-24 h-24 rounded-full mb-4" />
        <p><strong>ID:</strong> {profile.id}</p>
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Email:</strong> {profile.email}</p>
        <p><strong>Phone:</strong> {profile.phone}</p>
        <p><strong>Address:</strong> {profile.address}</p>
        <p><strong>Wallet:</strong> {profile.walletAccount}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
