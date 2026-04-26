import React, { useState, useEffect } from 'react';
import AddFacultyModal from "/src/components/AddFacultyModal";
import EditFacultyModal from "/src/components/EditFacultyModal";
import Toast from "/src/components/Toast";

import { getProfessors, deleteProfessor } from "../api/professorApi";

import {
  Bell,
  Trash2,
  Search,
  ListFilter,
  Pencil
} from 'lucide-react';

const AdminDashboard = () => {
  const [open, setOpen] = useState(false);
  const [professors, setProfessors] = useState([]);

  const [isRemoveOpen, setIsRemoveOpen] = useState(false);
  const [selectedProf, setSelectedProf] = useState(null);
  const [isEditOpen, setIsEditOpen] = useState(false);

 
  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });

   
    setTimeout(() => setToast(null), 3000);
  };

  const fetchProfessors = async () => {
    try {
      const { data } = await getProfessors();
      setProfessors(data);
    } catch (error) {
      console.error(error);
      showToast("Failed to load faculty", "error");
    }
  };

  useEffect(() => {
    fetchProfessors();
  }, []);

  const confirmDelete = (prof) => {
    setSelectedProf(prof);
    setIsRemoveOpen(true);
  };

  const handleEdit = (prof) => {
    setSelectedProf(prof);
    setIsEditOpen(true);
  };

  const handleRemove = async () => {
    try {
      await deleteProfessor(selectedProf._id);

      showToast("Faculty deleted successfully", "success");

      fetchProfessors();
      setIsRemoveOpen(false);
      setSelectedProf(null);

    } catch (error) {
      console.error(error);
      showToast("Delete failed", "error");
    }
  };

  return (
    <>
      {toast && (
  <Toast
    message={toast.message}
    type={toast.type}
    onClose={() => setToast(null)}
  />
)}

      <div className="p-6 max-w-7xl mx-auto space-y-10 min-h-screen">

        <header className="bg-white rounded-[25px] p-4 flex justify-between shadow-md">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 flex items-center justify-center font-black text-blue-600 bg-gray-100 rounded-full">
              L
            </div>
            <div>
              <span className="text-[10px] font-bold text-gray-400 uppercase">Admin</span>
              <h1 className="text-xl font-bold text-gray-800"></h1>
            </div>
          </div>

          <button className="p-3 text-gray-400">
            <Bell size={24} />
          </button>
        </header>

       
        <div className="flex justify-between items-end">

          <div>
            <p className="font-bold opacity-60 uppercase text-sm">Admin Dashboard</p>
            <h2 className="text-5xl font-black mt-2">
              Welcome Back,<br />Admin
            </h2>
          </div>

          <div className="text-right">
            <p className="text-xs font-bold uppercase opacity-70">
              Total Faculty
            </p>
            <h2 className="text-5xl font-black">
              {professors.length}
            </h2>

            <button
              onClick={() => setOpen(true)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg mt-3"
            >
              Add Faculty
            </button>
          </div>

        </div>

       
        <section className="bg-white rounded-[35px] p-8 shadow-2xl">

          <h3 className="font-black text-2xl mb-4">
            Active Faculty Accounts
          </h3>

          <table className="w-full">

            <thead>
              <tr className="text-xs uppercase text-gray-300">
                <th>ID</th>
                <th>Name</th>
                <th className="text-center">Department</th>
                <th className="text-right">Actions</th>
              </tr>
            </thead>

            <tbody>
              {professors.map((prof) => (
                <tr key={prof._id} className="hover:bg-gray-50">

                  <td className="py-4 text-blue-600 font-bold">
                    {prof.facultyId}
                  </td>

                  <td className="font-bold">{prof.name}</td>

                  <td className="text-center">{prof.department}</td>

                  <td className="text-right space-x-3">

                    <button onClick={() => handleEdit(prof)}>
                      <Pencil size={18} />
                    </button>

                    <button onClick={() => confirmDelete(prof)}>
                      <Trash2 size={18} />
                    </button>

                  </td>

                </tr>
              ))}
            </tbody>

          </table>
        </section>
      </div>

      {/* MODALS */}
      <AddFacultyModal
        open={open}
        onClose={() => setOpen(false)}
        onSuccess={() => fetchProfessors()}
        showToast={showToast}
      />

      <EditFacultyModal
        open={isEditOpen}
        onClose={() => setIsEditOpen(false)}
        onSuccess={() => fetchProfessors()}
        selectedProf={selectedProf}
        showToast={showToast}
      />

      {isRemoveOpen && (
  <div className="fixed inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm">

    <div className="bg-white w-full max-w-sm p-6 rounded-2xl shadow-2xl space-y-4 animate-fade">

      <h3 className="text-xl font-bold text-gray-800">
        Delete Faculty?
      </h3>

      <p className="text-gray-500">
        This action cannot be undone. Remove{" "}
        <span className="font-bold">{selectedProf?.name}</span>?
      </p>

      <div className="flex gap-3 pt-2">

        <button
          onClick={() => setIsRemoveOpen(false)}
          className="flex-1 py-3 rounded-xl bg-gray-100 hover:bg-gray-200"
        >
          Cancel
        </button>

        <button
          onClick={handleRemove}
          className="flex-1 py-3 rounded-xl bg-red-500 text-white font-bold hover:bg-red-600"
        >
          Delete
        </button>

      </div>

    </div>
  </div>
)}
    </>
  );
};

export default AdminDashboard;