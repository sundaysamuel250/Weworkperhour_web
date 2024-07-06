import React, { useState, ChangeEvent } from 'react';
import Images from '../constant/Images';
import MapComponent from '../reusable/map/MapComponent';
import { UilTimes } from '@iconscout/react-unicons';

const ProfileImageUpload: React.FC = () => {
  const [image, setImage] = useState<string | ArrayBuffer | null>(null);
  const [links, setLinks] = useState([
    { id: 1, label: 'LinkedIn', placeholder: 'Network 1 URL' },
    { id: 2, label: 'Facebook', placeholder: 'Network 2 URL' },
    { id: 3, label: 'Instagram', placeholder: 'Network 3 URL' },
    { id: 4, label: 'Twitter', placeholder: 'Network 4 URL' },
  ]);

  const addLink = () => {
    const newLink = { id: links.length + 1, label: `Network ${links.length + 1}`, placeholder: `Network ${links.length + 1} URL` };
    setLinks([...links, newLink]);
  };

  const removeLink = (id: number) => {
    setLinks(links.filter(link => link.id !== id));
  };

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleImageDelete = () => {
    setImage(null);
  };

  return (
    <section className="px-2 py-8 max-w-[1100px] mx-auto">
      <div className="bg-white rounded-2xl py-8 px-[2rem] mt-8">
      <div className="flex items-center flex-wrap gap-4 py-4">
          {image ? (
            <div className="relative">
              <img
                src={image as string}
                alt="Profile"
                className="w-16 h-16 md:w-20 md:h-20 object-cover mb-4 rounded-full"
              />
              <button
                onClick={handleImageDelete}
                className="absolute top-0 right-0 bg-red-500 text-white rounded-full"
              >
                &times;
              </button>
            </div>
          ) : (
            <div className="flex items-center justify-center gap-4">
              <img
                className="h-16 w-16 md:h-20 md:w-20 rounded-full"
                src={Images.ProfileImage}
                alt="Profile"
              />
            </div>
          )}
          <label className="cursor-pointer bg-green-100 text-green-600 font-medium py-2 px-4 rounded">
            Upload new photo
            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
          </label>
          <button
            onClick={handleImageDelete}
            className="text-pink-600 py-2 px-4 rounded border border-pink-600"
          >
            Delete
          </button>
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-green-600 text-lg mb-2">Full Name*</label>
          <input type="text" placeholder='Marcel Shaw' className="w-full text-black border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none" />
        </div>
        <div className="mb-4">
          <label className="block font-semibold text-green-600 text-lg mb-2">Bio*</label>
          <textarea
            id="message"
            name="message"
            placeholder="Write something interesting about you..."
            rows={10}
            autoComplete="off"
            className="w-full text-black border rounded-lg border-gray-300 bg-white p-4 shadow-sm focus:ring-0 focus:outline-none"
          ></textarea>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-8 mt-8">
        <h2 className="font-semibold text-pink-600 text-xl mb-4">Social Media</h2>
        {links.map((link) => (
          <div key={link.id} className="mb-2 flex items-center">
            <div className="flex-grow">
              <label className="block font-semibold text-green-600 text-lg mb-2">{link.label}</label>
              <input type="text" placeholder={link.placeholder} className="w-full border rounded-lg border-gray-300 bg-white text-blue-600 p-2 shadow-sm focus:ring-0 focus:outline-none" />
            </div>
            <button className="ml-2 text-red-500" onClick={() => removeLink(link.id)}><UilTimes size={25} color='#ee009d' /></button>
          </div>
        ))}
        <button className="text-pink-600 text-lg" onClick={addLink}>Add more link</button>
      </div>

      <div className="bg-white rounded-2xl p-8 mt-8">
        <label className="block font-semibold text-[#ee009d] text-xl tracking-wide mb-2">Address & Location</label>
        <div className="flex flex-wrap -mx-2">
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <label className="block font-semibold text-green-600 text-lg mb-2">Country*</label>
            <select className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none" defaultValue="">
              <option value="" disabled>Country</option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="UK">UK</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <label className="block font-semibold text-green-600 text-lg mb-2">City*</label>
            <select className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none" defaultValue="">
              <option value="" disabled>City</option>
              <option value="New York">New York</option>
              <option value="Los Angeles">Los Angeles</option>
              <option value="Chicago">Chicago</option>
            </select>
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <label className="block font-semibold text-green-600 text-lg mb-2">Zip Code*</label>
            <input type="text" placeholder="1708" className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none" />
          </div>
          <div className="w-full sm:w-1/2 px-2 mb-4">
            <label className="block font-semibold text-green-600 text-lg mb-2">State*</label>
            <select className="w-full border rounded-lg border-gray-300 bg-white p-2 shadow-sm focus:ring-0 focus:outline-none" defaultValue="">
              <option value="" disabled>State</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
              <option value="Texas">Texas</option>
            </select>
          </div>
        </div>
        <div className="mb-2">
          <MapComponent />
        </div>
      </div>

      <div className="flex justify-start space-x-4 mt-8">
        <button className="bg-pink-600 text-white py-2 px-8 text-lg font-medium rounded-full">Save</button>
        <button className="text-green-600 text-lg py-2 px-4 rounded">Cancel</button>
      </div>
    </section>
  );
};

export default ProfileImageUpload;
