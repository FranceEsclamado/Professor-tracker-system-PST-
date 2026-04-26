import React, { useState, useEffect } from 'react';
import { updateProfessor } from "../api/professorApi";
import { ArrowLeft } from "lucide-react";

const EditFacultyModal = ({ open, onClose, onSuccess, selectedProf, showToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    facultyId: '',
    department: '',
    status: ''
  });

  useEffect(() => {
    if (selectedProf) {
      setFormData(selectedProf);
    }
  }, [selectedProf]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProfessor(selectedProf._id, formData);

      showToast?.("Faculty updated", "success");

      onSuccess();
      onClose();

    } catch (error) {
      showToast?.(
        error.response?.data?.message || "Update failed",
        "error"
      );
    }
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">

      <div className="bg-white rounded-3xl p-8 w-full max-w-xl relative shadow-xl">

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
          Edit Faculty
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">

          <input
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full p-4 bg-gray-50 rounded-xl"
          />

          <input
            value={formData.facultyId}
            onChange={(e) =>
              setFormData({ ...formData, facultyId: e.target.value })
            }
            className="w-full p-4 bg-gray-50 rounded-xl"
          />

          <select
            value={formData.department}
            onChange={(e) =>
              setFormData({ ...formData, department: e.target.value })
            }
            className="w-full p-4 bg-gray-50 rounded-xl"
          >
            <option>CCS Department</option>
            <option>Engineering</option>
            <option>Arts & Sciences</option>
          </select>

          <button className="w-full bg-yellow-500 text-white py-4 rounded-xl font-bold">
            Save Changes
          </button>

        </form>
      </div>
    </div>
  );
};

export default EditFacultyModal;