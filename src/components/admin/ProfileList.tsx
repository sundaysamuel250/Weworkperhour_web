import React from 'react';

interface Profile {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
  walletAccount: string;
}

const profiles: Profile[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', imageUrl: 'https://via.placeholder.com/150', walletAccount: '0x123456789' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', imageUrl: 'https://via.placeholder.com/150', walletAccount: '0x987654321' },
];

const ProfileList: React.FC = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Profiles</h2>
      <table className="min-w-full bg-white">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Image</th>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Wallet</th>
          </tr>
        </thead>
        <tbody>
          {profiles.map(profile => (
            <tr key={profile.id}>
              <td className="py-2 px-4 border-b"><img src={profile.imageUrl} alt={profile.name} className="w-12 h-12 rounded-full" /></td>
              <td className="py-2 px-4 border-b">{profile.id}</td>
              <td className="py-2 px-4 border-b">{profile.name}</td>
              <td className="py-2 px-4 border-b">{profile.email}</td>
              <td className="py-2 px-4 border-b">{profile.walletAccount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileList;
