"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const CurrencyConverter = () => {
  const [amount, setAmount] = useState('');
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [error, setError] = useState(null);

  const currencies = [

    { country: 'United Arab Emirates', currency: 'AED' },
    { country: 'Afghanistan', currency: 'AFN' },
    { country: 'Albania', currency: 'ALL' },
    { country: 'Armenia', currency: 'AMD' },
    { country: 'Netherlands Antilles', currency: 'ANG' },
    { country: 'Angola', currency: 'AOA' },
    { country: 'Argentina', currency: 'ARS' },
    { country: 'Australia', currency: 'AUD' },
    { country: 'Aruba', currency: 'AWG' },
    { country: 'Azerbaijan', currency: 'AZN' },
    { country: 'Bosnia and Herzegovina', currency: 'BAM' },
    { country: 'Barbados', currency: 'BBD' },
    { country: 'Bangladesh', currency: 'BDT' },
    { country: 'Bulgaria', currency: 'BGN' },
    { country: 'Bahrain', currency: 'BHD' },
    { country: 'Burundi', currency: 'BIF' },
    { country: 'Bermuda', currency: 'BMD' },
    { country: 'Brunei', currency: 'BND' },
    { country: 'Bolivia', currency: 'BOB' },
    { country: 'Brazil', currency: 'BRL' },
    { country: 'Bahamas', currency: 'BSD' },
    { country: 'Bhutan', currency: 'BTN' },
    { country: 'Botswana', currency: 'BWP' },
    { country: 'Belarus', currency: 'BYN' },
    { country: 'Belize', currency: 'BZD' },
    { country: 'Canada', currency: 'CAD' },
    { country: 'Democratic Republic of the Congo', currency: 'CDF' },
    { country: 'Switzerland', currency: 'CHF' },
    { country: 'Chile', currency: 'CLP' },
    { country: 'China', currency: 'CNY' },
    { country: 'Colombia', currency: 'COP' },
    { country: 'Costa Rica', currency: 'CRC' },
    { country: 'Cuba', currency: 'CUP' },
    { country: 'Cape Verde', currency: 'CVE' },
    { country: 'Czech Republic', currency: 'CZK' },
    { country: 'Djibouti', currency: 'DJF' },
    { country: 'Denmark', currency: 'DKK' },
    { country: 'Dominican Republic', currency: 'DOP' },
    { country: 'Algeria', currency: 'DZD' },
    { country: 'Egypt', currency: 'EGP' },
    { country: 'Eritrea', currency: 'ERN' },
    { country: 'Ethiopia', currency: 'ETB' },
    { country: 'Eurozone', currency: 'EUR' },
    { country: 'Fiji', currency: 'FJD' },
    { country: 'Falkland Islands', currency: 'FKP' },
    { country: 'Faroe Islands', currency: 'FOK' },
    { country: 'United Kingdom', currency: 'GBP' },
    { country: 'Georgia', currency: 'GEL' },
    { country: 'Guernsey', currency: 'GGP' },
    { country: 'Ghana', currency: 'GHS' },
    { country: 'Gibraltar', currency: 'GIP' },
    { country: 'Gambia', currency: 'GMD' },
    { country: 'Guinea', currency: 'GNF' },
    { country: 'Guatemala', currency: 'GTQ' },
    { country: 'Guyana', currency: 'GYD' },
    { country: 'Hong Kong', currency: 'HKD' },
    { country: 'Honduras', currency: 'HNL' },
    { country: 'Croatia', currency: 'HRK' },
    { country: 'Haiti', currency: 'HTG' },
    { country: 'Hungary', currency: 'HUF' },
    { country: 'Indonesia', currency: 'IDR' },
    { country: 'Israel', currency: 'ILS' },
    { country: 'Isle of Man', currency: 'IMP' },
    { country: 'India', currency: 'INR' },
    { country: 'Iraq', currency: 'IQD' },
    { country: 'Iran', currency: 'IRR' },
    { country: 'Iceland', currency: 'ISK' },
    { country: 'Jersey', currency: 'JEP' },
    { country: 'Jamaica', currency: 'JMD' },
    { country: 'Jordan', currency: 'JOD' },
    { country: 'Japan', currency: 'JPY' },
    { country: 'Kenya', currency: 'KES' },
    { country: 'Kyrgyzstan', currency: 'KGS' },
    { country: 'Cambodia', currency: 'KHR' },
    { country: 'Kiribati', currency: 'KID' },
    { country: 'Comoros', currency: 'KMF' },
    { country: 'South Korea', currency: 'KRW' },
    { country: 'Kuwait', currency: 'KWD' },
    { country: 'Cayman Islands', currency: 'KYD' },
    { country: 'Kazakhstan', currency: 'KZT' },
    { country: 'Laos', currency: 'LAK' },
    { country: 'Lebanon', currency: 'LBP' },
    { country: 'Sri Lanka', currency: 'LKR' },
    { country: 'Liberia', currency: 'LRD' },
    { country: 'Lesotho', currency: 'LSL' },
    { country: 'Libya', currency: 'LYD' },
    { country: 'Morocco', currency: 'MAD' },
    { country: 'Moldova', currency: 'MDL' },
    { country: 'Madagascar', currency: 'MGA' },
    { country: 'North Macedonia', currency: 'MKD' },
    { country: 'Myanmar', currency: 'MMK' },
    { country: 'Mongolia', currency: 'MNT' },
    { country: 'Macau', currency: 'MOP' },
    { country: 'Mauritania', currency: 'MRU' },
    { country: 'Mauritius', currency: 'MUR' },
    { country: 'Maldives', currency: 'MVR' },
    { country: 'Malawi', currency: 'MWK' },
    { country: 'Mexico', currency: 'MXN' },
    { country: 'Malaysia', currency: 'MYR' },
    { country: 'Mozambique', currency: 'MZN' },
    { country: 'Namibia', currency: 'NAD' },
    { country: 'Nigeria', currency: 'NGN' },
    { country: 'Nicaragua', currency: 'NIO' },
    { country: 'Norway', currency: 'NOK' },
    { country: 'Nepal', currency: 'NPR' },
    { country: 'New Zealand', currency: 'NZD' },
    { country: 'Oman', currency: 'OMR' },
    { country: 'Panama', currency: 'PAB' },
    { country: 'Peru', currency: 'PEN' },
    { country: 'Papua New Guinea', currency: 'PGK' },
    { country: 'Philippines', currency: 'PHP' },
    { country: 'Pakistan', currency: 'PKR' },
    { country: 'Poland', currency: 'PLN' },
    { country: 'Paraguay', currency: 'PYG' },
    { country: 'Qatar', currency: 'QAR' },
    { country: 'Romania', currency: 'RON' },
    { country: 'Serbia', currency: 'RSD' },
    { country: 'Russia', currency: 'RUB' },
    { country: 'Rwanda', currency: 'RWF' },
    { country: 'Saudi Arabia', currency: 'SAR' },
    { country: 'Solomon Islands', currency: 'SBD' },
    { country: 'Seychelles', currency: 'SCR' },
    { country: 'Sudan', currency: 'SDG' },
    { country: 'Sweden', currency: 'SEK' },
    { country: 'Singapore', currency: 'SGD' },
    { country: 'Saint Helena', currency: 'SHP' },
    { country: 'Sierra Leone', currency: 'SLE' },
    { country: 'Sierra Leone', currency: 'SLL' },
    { country: 'Somalia', currency: 'SOS' },
    { country: 'Suriname', currency: 'SRD' },
    { country: 'South Sudan', currency: 'SSP' },
    { country: 'Sao Tome and Principe', currency: 'STN' },
    { country: 'Syria', currency: 'SYP' },
    { country: 'Eswatini', currency: 'SZL' },
    { country: 'Thailand', currency: 'THB' },
    { country: 'Tajikistan', currency: 'TJS' },
    { country: 'Turkmenistan', currency: 'TMT' },
    { country: 'Tunisia', currency: 'TND' },
    { country: 'Tonga', currency: 'TOP' },
    { country: 'Turkey', currency: 'TRY' },
    { country: 'Trinidad and Tobago', currency: 'TTD' },
    { country: 'Tuvalu', currency: 'TVD' },
    { country: 'Taiwan', currency: 'TWD' },
    { country: 'Tanzania', currency: 'TZS' },
    { country: 'Ukraine', currency: 'UAH' },
    { country: 'Uganda', currency: 'UGX' },
    { country: 'United States', currency: 'USD' },
    { country: 'Uruguay', currency: 'UYU' },
    { country: 'Uzbekistan', currency: 'UZS' },
    { country: 'Venezuela', currency: 'VES' },
    { country: 'Vietnam', currency: 'VND' },
    { country: 'Vanuatu', currency: 'VUV' },
    { country: 'Samoa', currency: 'WST' },
    { country: 'Central African CFA', currency: 'XAF' },
    { country: 'East Caribbean Dollar', currency: 'XCD' },
    { country: 'Special Drawing Rights', currency: 'XDR' },
    { country: 'West African CFA', currency: 'XOF' },
    { country: 'CFP Franc', currency: 'XPF' },
    { country: 'Yemen', currency: 'YER' },
    { country: 'South Africa', currency: 'ZAR' },
    { country: 'Zambia', currency: 'ZMW' },
    { country: 'Zimbabwe', currency: 'ZWL' }
  ];

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
              {currencies.map(({ country, currency }) => (
                <option key={currency} value={currency}>{`${country} (${currency})`}</option>
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
              {currencies.map(({ country, currency }) => (
                <option key={currency} value={currency}>{`${country} (${currency})`}</option>
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
