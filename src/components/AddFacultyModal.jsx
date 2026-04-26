import React, { useState } from 'react';
import { UserPlus, ArrowLeft } from 'lucide-react';
import { createProfessor } from "../api/professorApi";

const AddFacultyModal = ({ open, onClose, onSuccess, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    facultyId: '',
    department: 'CCS Department',
    status: 'Off Campus'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createProfessor(formData);

      showToast?.("Faculty created successfully", "success");

      onSuccess();
      onClose();

    } catch (error) {
      showToast?.(
        error.response?.data?.message || "Create failed",
        "error"
      );
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-xl shadow-xl relative">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-6">

          <button
            onClick={onClose}
            className="text-sm text-gray-500 hover:text-gray-800 flex items-center gap-2"
          >
            <ArrowLeft size={16} />
            Go back to dashboard
          </button>

          

        </div>

        <h1 className="text-2xl font-bold text-center mb-6">
          New Faculty Member
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            placeholder="Full Name"
            className="w-full p-4 bg-gray-50 rounded-xl"
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
          />

          <input
            placeholder="Faculty ID"
            className="w-full p-4 bg-gray-50 rounded-xl"
            onChange={(e) =>
              setFormData({ ...formData, facultyId: e.target.value })
            }
          />

          <select
            className="w-full p-4 bg-gray-50 rounded-xl"
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
          >
            <option>CCS Department</option>
            <option>Engineering</option>
            <option>Arts & Sciences</option>
          </select>

          <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold">
            Create Faculty
          </button>

        </form>
      </div>
    </div>
  );
};

export default AddFacultyModal;