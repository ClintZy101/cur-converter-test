"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const currencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CNY', 'INR'];

  const fetchConversionRate = async () => {
    try {
      const response = await fetch(`https://api.exchangerate-api.com/v4/latest/${fromCurrency}`);
      if (!response.ok) {
        throw new Error('Failed to fetch conversion rate');
      }
      const data = await response.json();
      const rate = data.rates[toCurrency];
      setConvertedAmount((amount * rate).toFixed(2));
      setError(null);
    } catch (err) {
      setError(err.message);
      setConvertedAmount(null);
    }
  };

  const handleConvert = (e) => {
    e.preventDefault();
    if (!amount || isNaN(amount)) {
      setError('Please enter a valid number');
      return;
    }
    fetchConversionRate();
  };

  const deployToCloudflare = async () => {
    try {
      const response = await fetch('https://api.cloudflare.com/client/v4/accounts/YOUR_ACCOUNT_ID/pages/projects/YOUR_PROJECT_NAME/deployments', {
        method: 'POST',
        headers: {
          'Authorization': 'Bearer YOUR_API_TOKEN',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          // Your deployment configuration here
        })
      });
      if (!response.ok) {
        throw new Error('Failed to deploy to Cloudflare');
      }
      const data = await response.json();
      console.log('Deployment successful:', data);
    } catch (err) {
      console.error('Deployment error:', err.message);
    }
  };

  // Call the deployToCloudflare function when needed
  deployToCloudflare();

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h1 className="text-2xl font-bold text-gray-800 mb-4 text-center">Currency Converter</h1>
        <form onSubmit={handleConvert}>
          <div className="mb-4">
            <label htmlFor="amount" className="block text-gray-700 font-medium mb-2">Amount</label>
            <input
              id="amount"
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter amount"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">From</label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">To</label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              {currencies.map((currency) => (
                <option key={currency} value={currency}>{currency}</option>
              ))}
            </select>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Convert
          </button>
        </form>

        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
        {convertedAmount && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="mt-4 text-center text-lg font-medium text-gray-800"
          >
            {`${amount} ${fromCurrency} = ${convertedAmount} ${toCurrency}`}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default CurrencyConverter;
