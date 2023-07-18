import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSearchQuery } from '../applicantSlice';
import { showOverlay } from '../overlaySlice';
import ApplicantOverlay from './Applicant';

const ApplicantList = () => {
  const dispatch = useDispatch();
  const applicants = useSelector(state => state.applicants);
  const [query, setQuery] = useState('');
  const [selectedApplicant, setSelectedApplicant] = useState(null);

  const handleSearch = () => {
    dispatch(setSearchQuery(query));
  };

  const filteredApplicants = applicants.filter(applicant =>
    applicant.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleApplicantClick = applicant => {
    setSelectedApplicant(applicant);
    dispatch(showOverlay(applicant.id)); // Trigger the overlay to show when an employee is clicked
  };

  return (
    <div className="max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold border-b-2 pb-2 mb-4">Applicants</h2>
      <div className="flex mb-4">
        <input
          type="text"
          value={query}
          onChange={e => setQuery(e.target.value)}
          placeholder="Search applicants..."
          className="w-full px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Search
        </button>
      </div>
      {filteredApplicants.map(applicant => (
        <div
          key={applicant.id}
          className="border border-gray-300 p-4 mb-4 cursor-pointer"
          onClick={() => handleApplicantClick(applicant)}
        >
          <h3 className="text-lg font-semibold">{applicant.name}</h3>
          <p>{applicant.position}</p>
          {/* Display additional employee information here */}
        </div>
      ))}
      {selectedApplicant && <ApplicantOverlay applicant={selectedApplicant} />}
    </div>
  );
};

export default ApplicantList;