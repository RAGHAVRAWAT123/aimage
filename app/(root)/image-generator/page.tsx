"use client"
import React, { useState } from 'react';
import axios from 'axios';


const GenerateImagePage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleGenerateImage = async () => {
    try {
      setLoading(true);
      setError('');

      const response = await axios.post(
        'https://api.openai.com/v1/images/generations',
        {
          prompt: prompt,
          n: 1,
          size: '1024x1024', // Specify the size of the generated image
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer YOUR_OPENAI_API_KEY`, // Replace with your OpenAI API key
          },
        }
      );

      // Extract the URL of the generated image from the response
      const generatedImageUrl = response.data.data[0].url;
      setImageUrl(generatedImageUrl);
    } catch (error) {
      console.error('Error generating image:', error);
      setError('Error generating image. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  

  return (
    <div >
      <section className="animate-fadeIn">
        <h1 className="home-heading">
        Create Images using advanced AI Algorithms
        </h1>
     </section>
     
      {/* Introduction and welcome message */}
      <div className="text-center mb-8">
        
        
      </div>
      {/* Image generation form */}
      <div className="w-80 mb-8">
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Enter prompt"
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-300 focus:border-transparent"

        />
      </div>
      <button
        onClick={handleGenerateImage}
        disabled={loading}
        className={`bg-gray-500 text-white font-bold py-2 px-4 rounded-full ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-green-600'} transition duration-300`}

      >
        {loading ? 'Generating...' : 'Generate Image'}
      </button>
      {error && <p className="text-red-500 mt-2">{error}</p>}
      {/* Display the generated image */}
      {imageUrl && (
        <div className="mt-8">
          <h2 className="text-xl font-bold mb-4">Generated Image</h2>
          <img src={imageUrl} alt="Generated Image" className="w-80 h-auto" />
        </div>
      )}
      
<div className="mt-20 text-center">
  <h2 className="text-white font-bold mb-4"> Access Feature</h2>
  <p className="text-white font-bold mb-4"> To use this feature, you need to purchase OpenAI API keys</p>
 
  {/* Buttons and Links */}
  <div className="mt-10 flex justify-center space-x-4">
    <a href="https://openai.com/pricing" className='underline'>Learn More</a>
  
  </div>
 
  
</div>


    </div>
  );
};

export default GenerateImagePage;





