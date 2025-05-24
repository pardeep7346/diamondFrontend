import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UserDashboard = () => {
  const [userData, setUserData] = useState(null);
  const [error, setError] = useState(null);
  const [pdfs, setPDFs] = useState([]);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [pdfError, setPDFError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        
        const response = await axios.get(`https://diamondcc.onrender.com/users`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          withCredentials: true
        });
      
        
        if (response.data.success) {
          const currentUser = response.data.data[0]
            setUserData(currentUser);
                   
        }
      } catch (err) {
        console.error('Error fetching user data:', err);
        if (err.response?.status === 401) {
          setError('Unauthorized access. Please log in again.');
        } else {
          setError('An error occurred while fetching user data.');
        }
      }
    };
    fetchUserData();
  }, []);

  useEffect(() => {
    const fetchPDFs = async () => {
      try {
        const response = await axios.get(`https://diamondcc.onrender.com/users/pdfs`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('accessToken')}`
          },
          withCredentials: true
        });
        if (response.data.success) {
          setPDFs(response.data.data);
        } else {
          setPDFError('Failed to fetch PDFs.');
        }
      } catch (err) {
        console.error('Error fetching PDFs:', err);
        setPDFError('An error occurred while fetching PDFs.');
      } finally {
        setLoading(false);
      }
    };
    fetchPDFs();
  }, []);
  // View PDF inline
  const viewPDF = async(filename) => {
   
 try {
    const response = await fetch(`https://your-render-backend.com/users/view/${filename}`);
    if (!response.ok) throw new Error('Failed to fetch PDF');
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    setSelectedPdf(filename);
  } catch (error) {
    console.error('Error fetching PDF:', error);
  }

  };

  // Close the PDF viewer
  const closePDF = () => {
    setSelectedPdf(null);
  };

  // Download PDF
  // const downloadPDF = (filename) => {
  //   const link = document.createElement('a');
  //   link.href = `https://diamondcc.onrender.com/users/download/${filename}`;
  //   link.download = filename;
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <div className='min-h-screen bg-zinc-950 text-white'>
      <div className='bg-white/20 backdrop-blur-sm p-4 shadow-lg'>
        <div className='max-w-7xl mx-auto'>
          {userData ? (
            <h1 className='text-2xl font-semibold'>
              Hello 👋 {userData.fullName}
            </h1>
          ) : error ? (
            <p className='text-red-500'>{error}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <div className='max-w-7xl mx-auto mt-8'>
        <h2 className='text-xl font-semibold mb-4'>Your PDFs</h2>
        {loading ? (
          <p>Loading PDFs...</p>
        ) : pdfError ? (
          <p className='text-red-500'>{pdfError}</p>
        ) : pdfs.length > 0 ? (
          <ul className="space-y-4">
          {pdfs.map((filename) => (
            <li
              key={filename}
              className="flex items-center justify-between p-4 bg-white/20 backdrop-blur-2xl  rounded-lg "
            >
              <span className="text-lg text-white font-mono">{filename}</span>
              <div className="space-x-2">
                <button
                  onClick={() => viewPDF(filename)}
                  className="px-4 py-2 bg-gradient-to-tr from-red-500 via-pink-500 to-blue-500 text-white drop-shadow-sm drop-shadow-white "
                >
                  View
                </button>
                 
              </div>
            </li>
          ))}
        </ul>
        ) : (
          <p>No PDFs available.</p>
        )}    
        {/* PDF Viewer */}
      {selectedPdf && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white/20 p-4 rounded-lg w-full h-screen overflow-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Viewing: {selectedPdf}</h2>
              <button
                onClick={closePDF}
                className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
              >
                Close
              </button>
            </div>
           {pdfUrl && <iframe src={pdfUrl} width="100%" height="600px" />}
          </div>
        </div>
      )}

      
  
    </div>
    </div>
  );
};

export default UserDashboard;