"use client";
import { useRouter } from 'next/navigation';
import {useState} from  'react';
import { userService } from '../services/userService';

export default function PostPage() {
  const router = useRouter();
    const [responseGet, setResponseGet] = useState(null);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [admin, setAdmin] = useState(false);

  const handleSubmit = () => {
    if (lastName && firstName && username && password) {
        userService.addUser(lastName, firstName, username, password, admin, email);
        setResponseGet("Post Success")
        router.push('/volunteer');
    }
  };

  return (
    <div> 
    
  <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-indigo-950 p-8">
       <br />
       <br />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white-800 mb-8">Create New User</h1>
        
        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-indigo-900 to-indigo-950 rounded-lg shadow-md p-6 space-y-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-white-900 mb-1">First Name</label>
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-500 bg-indigo-950"
                placeholder="Enter first name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-white-900 mb-1">Last Name</label>
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-500 bg-indigo-950"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white-900 mb-1">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-500 bg-indigo-950"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white-900 mb-1">Password</label>
              <input
                type="text"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-500 bg-indigo-950"
                placeholder="Enter last name"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-white-900 mb-1">Email Address</label>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-900 focus:border-blue-500 bg-indigo-950"
                placeholder="Enter last name"
              />
            </div>

            <div className="flex items-center justify-between space-x-4">
              <label className="text-sm font-medium text-white">Admin?</label>
              <input
                type="checkbox"
                checked={admin}
                onChange={(e) => setAdmin(e.target.checked)}
                className="h-5 w-5 border rounded focus:ring-2 focus:ring-blue-900 focus:border-blue-500 bg-indigo-950"
              />
            </div>

          
          </div>

          

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={() => router.push('/')}
              className="px-4 py-2 border rounded-md text-gray-600 hover:bg-gray-50"
            >
              Cancel
            </button>
            {!responseGet && <button
              type="button"
              onClick={() => handleSubmit()}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors"
            >
              Create User
            </button>}
            <label className="block text-sm font-medium text-red-700 mb-1">{responseGet}</label>
          </div>
        </form>
      </div>
    </div>   
    </div>

  );
}