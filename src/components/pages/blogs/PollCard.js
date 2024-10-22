import React, { useEffect, useState } from 'react';
import { FaChevronDown, FaShareAlt } from 'react-icons/fa';
import { MdMessage } from 'react-icons/md';
import axios from 'axios';

function PollCard() {
  const initialPollData = [
    { id: 1, option: 'Yes', votes: 0 },
    { id: 2, option: 'No', votes: 0 },
    { id: 3, option: 'Hm', votes: 0 },
  ];

  const [pollData, setPollData] = useState(initialPollData);
  const [totalVotes, setTotalVotes] = useState(0);
  const [loading, setLoading] = useState(true); // To handle loading state

  // Fetch poll data from the backend
  useEffect(() => {
    const fetchPollData = async () => {
      try {
        const response = await axios.get('/api/polls/'); // Change to your actual endpoint
        const poll = response.data; // Assume the backend returns an array of poll options
        if (poll) {
          setPollData(poll); // Update the poll data with data from backend
          setTotalVotes(poll.reduce((total, option) => total + option.votes, 0));
        }
        setLoading(false); // Set loading to false after fetching data
      } catch (error) {
        console.error("Error fetching poll data:", error);
        setLoading(false); // Even if an error occurs, stop loading
      }
    };

    fetchPollData();
  }, []);

  // Function to handle voting
    const handleVote = async (id, choice) => {
      try {
        const response = await axios.put(`/api/polls/${id}/vote/`, {
          choice: choice, // Send the choice (e.g., 'YES', 'NO', 'MAYBE')
        });
        console.log('Vote successful:', response.data);
      } catch (error) {
        console.error('Error submitting vote:', error);
      }
    };

  if (loading) {
    return <div>Loading poll...</div>; // Loading state
  }

  return (
    <div className="relative h-[281.016px] lg:h-[506px] w-auto lg:w-[352px] rounded-[10.546px] bg-white shadow-lg pt-[29px] block">
      <FaChevronDown className="absolute top-[42px] right-[20px] h-[18.949px] w-[30.053px] text-black cursor-pointer" />
      <h3 className="freshlyGreenText ml-[18px] lg:ml-[38px] text-[8.779px] lg:text-[18.238px]">Urban Farming?</h3>

      {/* Render poll data */}
      {pollData && pollData.map((option) => (
        <div key={option.id} className="flex lg:space-x-[24px] items-center ml-[18px] lg:ml-[38px]">
          <p className="text-[8.46px] lg:text-[17.576px] font-[700] text-black mt-[8px] align-middle lg:-mt-[0px]">{option.option}</p>
          <div
            onClick={() => handleVote(option.id)}
            className="bg-[#D9D9D9] rounded-[12px] h-[10.739px] w-[101.765px] lg:w-[211.418px] lg:h-[22.31px] ml-[11.87px] lg:ml-[0px] cursor-pointer"
          >
            <div
              style={{
                width: totalVotes > 0 ? `${(option.votes / totalVotes) * 100}%` : '0%',
              }}
              className="h-[10.739px] lg:h-[22.31px] rounded-[12px] bg-[#008000]"
            />
          </div>
        </div>
      ))}

      <h4 className="w-[152.873px] lg:w-[275.266px] text-[6.664px] lg:text-[12px] font-[700] font-inter ml-[21.49px] lg:ml-[38px]">
        Vote & Give A Reason For Your Choice
      </h4>

      <div className="flex justify-center">
        <textarea className="h-[53.871px] w-[140px] lg:h-[97px] lg:w-[284px] rounded-[19px] border-solid border-[#00000040]/[25%]" />
      </div>

      <div className="absolute flex justify-center w-[100%] bottom-[42px]">
        <div className="items-center space-x-[32px] mt-[26px]">
          <MdMessage className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]" />
          <FaShareAlt className="h-[23.127px] w-[21px] lg:h-[31.427px] lg:w-[27.617px]" />
        </div>
      </div>

      <div className="flex justify-center">
        <p className="absolute bottom-[0px] text-[10px] lg:text-[11.719px] text-center font-[400]">
          By Freshly Farms, on 04 Sept, 2024
        </p>
      </div>
    </div>
  );
}

export default PollCard;
