import { useState } from "react";
import { X } from "lucide-react";
import api from "../api/axios";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const ScheduleModal = ({ onClose, onSuccess }) => {
  const [form, setForm] = useState({ subject: "", room: "", time: "", day: "" });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.subject || !form.room || !form.time || !form.day) {
      setError("All fields are required");
      return;
    }
    setLoading(true);
    setError("");
    try {
      await api.post("/schedules/create", form);
      onSuccess();
      onClose();
    } catch (err) {
      setError(err.response?.data?.message || "Failed to create schedule");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl p-8 shadow-xl border border-gray-100 w-full max-w-md">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-xl font-bold text-[#14234b]">Add Schedule</h3>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 transition-colors">
            <X size={22} />
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 border border-red-100 p-3 mb-4 rounded-xl text-sm font-semibold">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Subject</label>
            <input
              name="subject"
              value={form.subject}
              onChange={handleChange}
              placeholder="e.g. Microbiology II"
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#14234b] focus:ring-2 focus:ring-[#14234b]/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Room</label>
            <input
              name="room"
              value={form.room}
              onChange={handleChange}
              placeholder="e.g. FH201"
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#14234b] focus:ring-2 focus:ring-[#14234b]/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Time</label>
            <input
              type="time"
              name="time"
              value={form.time}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#14234b] focus:ring-2 focus:ring-[#14234b]/10 transition-all"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">Day</label>
            <select
              name="day"
              value={form.day}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#f8fafc] border border-gray-200 rounded-xl text-sm text-gray-800 focus:outline-none focus:border-[#14234b] focus:ring-2 focus:ring-[#14234b]/10 transition-all"
            >
              <option value="">Select a day</option>
              {DAYS.map((d) => (
                <option key={d} value={d}>{d}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 py-3 rounded-xl border border-gray-200 text-gray-600 font-semibold text-sm hover:bg-gray-50 transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="flex-1 py-3 rounded-xl bg-[#14234b] hover:bg-[#1e3470] text-white font-bold text-sm transition-colors disabled:opacity-60"
            >
              {loading ? "Saving..." : "Save Schedule"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ScheduleModal;
