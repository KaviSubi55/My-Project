'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AlertCircle, User, LogIn } from 'lucide-react';

const LoginPage: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation: Check username length
    if (username.length === 0) {
      setError('Please enter a username');
      return;
    }

    if (username.length < 4) {
      setError('Username must be at least 4 characters');
      return;
    }

    if (username.length > 10) {
      setError('Username must not exceed 10 characters');
      return;
    }

    // Check if username contains only letters
    const onlyLetters = /^[A-Za-z]+$/;
    if (!onlyLetters.test(username)) {
      setError('Username must contain only letters (no numbers or special characters)');
      return;
    }

    // Simulate login process
    setIsLoading(true);

    setTimeout(() => {
      // Store username in localStorage
      localStorage.setItem('username', username);
      localStorage.setItem('isLoggedIn', 'true');
      
      // Redirect to home page
      router.push('/');
    }, 1000);
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Only allow letters
    const onlyLetters = value.replace(/[^A-Za-z]/g, '');
    setUsername(onlyLetters);
    setError(''); // Clear error when user types
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 to-red-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="text-5xl font-bold text-[#C41E3A] mb-2">skistar</div>
          <p className="text-gray-600">Welcome back! Please login to continue.</p>
        </div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Login</h2>

          <form onSubmit={handleLogin}>
            {/* Username Input */}
            <div className="mb-6">
              <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  id="username"
                  value={username}
                  onChange={handleUsernameChange}
                  placeholder="Enter your username"
                  maxLength={10}
                  className={`block w-full pl-10 pr-3 py-3 border rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    error
                      ? 'border-red-500 focus:ring-red-500 focus:border-red-500'
                      : 'border-gray-300 focus:ring-[#C41E3A] focus:border-[#C41E3A]'
                  }`}
                />
              </div>
              
              {/* Character count */}
              <div className="mt-1 text-xs text-gray-500 text-right">
                {username.length}/10 characters
              </div>
            </div>

            {/* Error Message */}
            {error && (
              <div className="mb-6 bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <div className="flex items-start">
                  <AlertCircle className="w-5 h-5 text-red-500 mt-0.5 mr-3 shrink-0" />
                  <div>
                    <p className="text-sm text-red-800 font-medium">{error}</p>
                  </div>
                </div>
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={isLoading || username.length < 4}
              className={`w-full py-3 px-4 rounded-lg font-bold text-white transition-colors flex items-center justify-center gap-2 ${
                isLoading || username.length < 4
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-[#C41E3A] hover:bg-[#A01830]'
              }`}
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Logging in...
                </>
              ) : (
                <>
                  <LogIn className="w-5 h-5" />
                  Login
                </>
              )}
            </button>
          </form>

          {/* Info Box */}
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
            <h3 className="text-sm font-semibold text-blue-900 mb-2">Username Requirements:</h3>
            <ul className="text-sm text-blue-800 space-y-1">
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Minimum 4 characters</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Maximum 10 characters</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>Only letters allowed (A-Z, a-z)</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">•</span>
                <span>No numbers or special characters</span>
              </li>
            </ul>
          </div>

          {/* Example usernames */}
          <div className="mt-4 text-center">
            <p className="text-xs text-gray-500">
              Example: <span className="font-medium text-gray-700">john</span>, <span className="font-medium text-gray-700">maria</span>, <span className="font-medium text-gray-700">alexander</span>
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-6 text-center text-sm text-gray-600">
          <p>Don't have an account? Just enter any username to get started!</p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
