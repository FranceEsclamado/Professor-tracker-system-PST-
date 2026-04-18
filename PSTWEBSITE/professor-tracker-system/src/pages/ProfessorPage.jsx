import React from 'react';
import { 
  Building2, 
  Calendar, 
  MapPin, 
  Users, 
  ChevronDown, 
  Plus, 
  LogOut 
} from 'lucide-react';

const ProfessorPage = () => {
  const schedule = [
    {
      time: "09:00",
      title: "Microbiology II - Lecture",
      location: "FH201",
      students: "45 Students",
      status: "ACTIVE",
      isActive: true
    },
    {
      time: "10:30",
      title: "Advanced Genetics",
      location: "SB104",
      students: "32 Students",
      status: "UPCOMING",
      isActive: false
    },
    {
      time: "14:00",
      title: "Research Colloquium",
      location: "Conf-Room B",
      students: "Faculty",
      status: "UPCOMING",
      isActive: false
    }
  ];

  return (
    <div className="min-h-screen bg-[#eef1f8] p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        
        {}
        <div className="bg-white rounded-2xl p-6 shadow-sm flex flex-col md:flex-row justify-between items-center border border-gray-50">
          <div className="flex items-center gap-6">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-200 shrink-0 shadow-inner">
              <img 
                src="/api/placeholder/80/80" 
                alt="Dr. Julian Estrada" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-[#14234b]">Dr. Julian Estrada</h1>
              <div className="flex items-center gap-2 text-gray-500 mt-1 mb-2 text-sm">
                <Building2 size={16} />
                <span>Department of Biological Sciences</span>
              </div>
              <span className="bg-[#e4ebfa] text-[#4a6bdf] px-3 py-1 rounded-full text-xs font-semibold">
                Tenured Professor
              </span>
            </div>
          </div>

          <div className="flex flex-col items-end mt-4 md:mt-0">
            <div className="bg-gray-100/80 rounded-full p-1.5 flex items-center gap-3">
              <span className="text-xs font-bold text-gray-400 tracking-wider pl-3">STATUS</span>
              <div className="bg-[#e2f5ea] text-[#1f9254] px-3 py-1.5 rounded-full text-sm font-semibold flex items-center gap-2 shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#1f9254]"></div>
                On Campus
              </div>
            </div>
            <span className="text-[11px] text-gray-400 italic mt-2 pr-2">Last sync: 2 minutes ago</span>
          </div>
        </div>

        {}
        <div className="flex flex-col md:flex-row justify-between items-end gap-4">
          <div>
            <h2 className="text-4xl font-bold text-[#14234b] mb-2 font-serif tracking-tight">
              Welcome Back, Julian!
            </h2>
            <p className="text-gray-600 text-sm">
              It's a bright at the Xavier Main Campus. Here is your overview for today.
            </p>
          </div>
          
          {}
          <button className="flex items-center gap-2 bg-white hover:bg-red-50 text-[#14234b] hover:text-red-600 px-5 py-2.5 rounded-xl shadow-sm border border-gray-100 transition-all font-semibold text-sm">
            <LogOut size={18} />
            Log Out
          </button>
        </div>

        {}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
          
          {}
          <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-50">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-2xl font-bold text-[#14234b]">Today's Schedule</h3>
              <div className="flex items-center gap-2 text-gray-500 font-medium text-sm">
                <Calendar size={18} />
                October 24, 2023
              </div>
            </div>

            <div className="space-y-0 relative">
              {}
              <div className="absolute left-[39px] top-2 bottom-6 w-px bg-gray-200"></div>

              {schedule.map((item, index) => (
                <div key={index} className="flex gap-8 relative pb-8 last:pb-0">
                  <div className="w-16 pt-3 text-sm font-bold text-gray-600 shrink-0 bg-white z-10">
                    {item.time}
                  </div>
                  
                  <div className={`flex-1 rounded-xl p-5 flex flex-col md:flex-row justify-between items-start md:items-center border border-gray-100 transition-all ${
                    item.isActive ? 'bg-[#f8fafc] shadow-sm relative' : 'bg-white'
                  }`}>
                    {}
                    {item.isActive && (
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#f5b021] rounded-l-xl"></div>
                    )}
                    
                    <div>
                      <h4 className="text-lg font-bold text-[#14234b] mb-2">{item.title}</h4>
                      <div className="flex gap-5 text-gray-500 text-sm font-medium">
                        <span className="flex items-center gap-1.5">
                          <MapPin size={16} className="text-gray-400" /> 
                          {item.location}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Users size={16} className="text-gray-400" /> 
                          {item.students}
                        </span>
                      </div>
                    </div>
                    
                    <span className={`mt-3 md:mt-0 text-[10px] font-bold px-2.5 py-1 rounded tracking-wide ${
                      item.isActive 
                        ? 'bg-[#e2f5ea] text-[#1f9254]' 
                        : 'bg-gray-100 text-gray-500'
                    }`}>
                      {item.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <button className="w-full mt-6 pt-6 flex items-center justify-center gap-1 text-[#14234b] font-bold text-sm hover:text-blue-700 transition-colors">
              Expand Full Schedule 
              <ChevronDown size={18} />
            </button>
          </div>

          {}
          <div className="flex flex-col gap-6">
            
            {}
            <button className="w-full bg-white rounded-2xl p-5 shadow-sm border border-gray-50 flex items-center justify-center gap-3 text-[#14234b] font-bold text-lg hover:shadow-md transition-shadow">
              <Calendar size={22} className="text-[#14234b]" />
              Add/Edit Schedule
            </button>

            {}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-50 flex relative">
              <div className="flex-1 p-6 text-center border-r border-gray-100">
                <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2">ACTIVE LABS</p>
                <p className="text-4xl font-bold text-[#14234b]">04</p>
              </div>
              <div className="flex-1 p-6 text-center">
                <p className="text-[10px] font-bold text-gray-400 tracking-wider mb-2">ADVISEES</p>
                <p className="text-4xl font-bold text-[#14234b]">12</p>
              </div>
              
              {}
              <button className="absolute -bottom-4 -right-4 bg-[#fdbd21] hover:bg-[#eeb11d] text-white p-4 rounded-2xl shadow-lg transition-transform hover:scale-105 border-4 border-[#eef1f8]">
                <Plus size={28} />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessorPage;