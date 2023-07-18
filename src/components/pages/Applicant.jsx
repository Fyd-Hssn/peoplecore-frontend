import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { hideOverlay, updateApplicant } from '../overlaySlice';


const ApplicantOverlay = ({ applicant }) => {
    const dispatch = useDispatch();
    const isVisible = useSelector(state => state.applicantOverlay.isVisible);
  
    const [id, setId] = React.useState(null);
    const [name, setName] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [applicationStatus, setApplicationStatus] = React.useState('');
  
    React.useEffect(() => {
      if (applicant) {
        setId(applicant.id);
        setName(applicant.name || '');
        setAddress(applicant.address || '');
        setEmail(applicant.email || '');
        setApplicationStatus(applicant.applicationStatus || '');
      }
    }, [applicant]);
  
    const handleUpdate = () => {
      dispatch(updateApplicant({ id, name, address, email, applicationStatus }));
      dispatch(hideOverlay());
    };
  
    const handleClose = () => {
      dispatch(hideOverlay());
    };
  
    if (!isVisible || !applicant) {
      return null;
    }
  
    return (
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-semibold mb-4">{name}</h2>
          <div className="mb-4">
            <label className="block font-semibold">Address:</label>
            <input
              type="text"
              value={address}
              onChange={e => setAddress(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={applicant.address || 'Placeholder Address'}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Email:</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={applicant.email || 'Placeholder Email'}
            />
          </div>
          <div className="mb-4">
            <label className="block font-semibold">Application Status:</label>
            <input
              type="text"
              value={applicationStatus}
              onChange={e => setApplicationStatus(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder={applicant.applicationStatus || 'Placeholder Application Status'}
            />
          </div>
          <div className="flex justify-end">
            <button
              onClick={handleUpdate}
              className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Update
            </button>
            <button
              onClick={handleClose}
              className="ml-2 px-4 py-2 bg-gray-300 text-gray-800 font-semibold rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ApplicantOverlay;