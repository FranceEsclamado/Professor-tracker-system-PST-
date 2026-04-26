import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, UserPlus } from 'lucide-react';

const AddFacultyPage = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    facultyId: '',
    department: 'CCS Department',
    status: 'Off Campus'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

  
    console.log("Form submitted:", formData);

    navigate('/admin');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col items-center">
      <div className="w-full max-w-2xl space-y-8">

        <button
          onClick={() => navigate('/admin')}
          className="flex items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors font-bold"
        >
          <ArrowLeft size={20} /> Back to Admin
        </button>

        <div className="bg-white rounded-[35px] p-10 shadow-2xl space-y-8 text-left border border-gray-100">

          <div className="text-center space-y-2">
            <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <UserPlus size={32} />
            </div>
            <h1 className="text-3xl font-black text-gray-800">New Faculty Member</h1>
            <p className="text-gray-400 text-sm font-medium">
              Register a new professor to the system
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">
                Full Name
              </label>
              <input
                required
                className="w-full p-5 bg-gray-50 border border-gray-100 rounded-[20px] outline-none"
                placeholder="e.g. Dr. Luke Jamis"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">
                Faculty ID
              </label>
              <input
                required
                className="w-full p-5 bg-gray-50 border border-gray-100 rounded-[20px] outline-none"
                placeholder="e.g. CCS-2026-01"
                onChange={(e) => setFormData({ ...formData, facultyId: e.target.value })}
              />
            </div>

            <div>
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest ml-4">
                Department
              </label>
              <select
                className="w-full p-5 bg-gray-50 border border-gray-100 rounded-[20px] outline-none cursor-pointer"
                onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              >
                <option>CCS Department</option>
                <option>Engineering</option>
                <option>Arts & Sciences</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-bold py-5 rounded-[20px] hover:scale-[1.02] active:scale-95 transition-all text-lg"
            >
              Create Faculty Profile
            </button>

          </form>
        </div>
      </div>
    </div>
  );
};

export default AddFacultyPage;