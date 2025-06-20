module.exports = {

"[project]/src/app/components/dashboard/page.tsx [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
// 'use client';
// import { useEffect, useState } from 'react';
// import { createClient } from '@supabase/supabase-js';
// import { Search, FileText, Bell, Settings } from 'lucide-react';
// import JobModal from '../JobModal';
// interface Job {
//   id: string | number;
//   title: string;
//   site: string;
//   date: string;
//   applied: boolean;
//   job_location?: string;
//   company?: string;
//   job_description?: string;
//   salary?: string;
//   url?: string;
//   job_state: string; // Added to match JobModal's Job type
// }
// const supabase = createClient(
//   process.env.NEXT_PUBLIC_SUPABASE_URL!,
//   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
// );
// export default function Dashboard() {
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [jobAlerts, setJobAlerts] = useState<Job[]>([]);
//   const [scrapingStatus, setScrapingStatus] = useState<{ active: boolean; lastRun: string | null }>({
//     active: false,
//     lastRun: null
//   });
//   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
// const [currentPage, setCurrentPage] = useState(1);
// const pageSize = 10;
//   useEffect(() => {
//  const fetchJobs = async (page = 1) => {
//   const from = (page - 1) * pageSize;
//   const to = from + pageSize - 1;
//   const { data, error } = await supabase
//     .from('jobs')
//     .select('*')
//     .order('date', { ascending: false })
//     .range(from, to);
//   if (error) {
//     console.error('Error fetching jobs:', error);
//   } else {
//     setJobAlerts(data || []);
//     setScrapingStatus({
//       active: true,
//       lastRun: new Date().toLocaleString()
//     });
//   }
// };
//     fetchJobs();
//   }, []);
//   useEffect(() => {
//     document.body.style.overflow = selectedJob ? 'hidden' : '';
//   }, [selectedJob]);
//   return (
//     <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
//       {/* Tab Navigation */}
//       <div className="flex space-x-6 border-b pb-2">
//         {[
//           { id: 'dashboard', label: 'Dashboard', icon: Search },
//           { id: 'resumes', label: 'Resumes', icon: FileText },
//           { id: 'settings', label: 'Settings', icon: Settings },
//           { id: 'notifications', label: 'Notifications', icon: Bell }
//         ].map(tab => (
//           <button
//             key={tab.id}
//             onClick={() => setActiveTab(tab.id)}
//             className={`flex items-center space-x-2 text-sm font-medium pb-2 border-b-2 ${
//               activeTab === tab.id
//                 ? 'border-blue-500 text-blue-600'
//                 : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
//             }`}
//           >
//             <tab.icon className="w-4 h-4" />
//             <span>{tab.label}</span>
//           </button>
//         ))}
//       </div>
//       {/* Dashboard Tab */}
//       {activeTab === 'dashboard' && (
//         <>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
//                   <Search className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-semibold text-gray-900">Scraping Status</h3>
//                   <p className={`text-sm ${scrapingStatus.active ? 'text-green-600' : 'text-red-600'}`}>
//                     {scrapingStatus.active ? 'Active' : 'Inactive'}
//                   </p>
//                   {scrapingStatus.lastRun && (
//                     <p className="text-xs text-gray-500 mt-2">Last run: {scrapingStatus.lastRun}</p>
//                   )}
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
//                   <FileText className="w-6 h-6 text-green-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-semibold text-gray-900">Active Resumes</h3>
//                   <p className="text-sm text-gray-600">Dynamic count can be passed via props</p>
//                 </div>
//               </div>
//             </div>
//             <div className="bg-white rounded-lg shadow p-6">
//               <div className="flex items-center">
//                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
//                   <Bell className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <div className="ml-4">
//                   <h3 className="text-lg font-semibold text-gray-900">Applications Sent</h3>
//                   <p className="text-sm text-gray-600">
//                     {jobAlerts.filter(j => j.applied).length} this week
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//           {/* Job Modal */}
//           {selectedJob && (
//             <JobModal job={selectedJob} onCloseAction={() => setSelectedJob(null)} />
//           )}
//           {/* Job List */}
//           <div className="bg-white rounded-lg shadow">
//             <div className="px-6 py-4 border-b">
//               <h2 className="text-lg font-semibold text-gray-900">Recent Job Matches</h2>
//             </div>
//             <div className="divide-y">
//               {jobAlerts.map(job => (
//                 <div
//                   key={job.id}
//                   onClick={() => setSelectedJob(job)}
//                   className="px-6 py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 transition"
//                 >
//                   <div>
//                     <h3 className="font-medium text-gray-900">{job.title}</h3>
//                     <p className="text-sm text-gray-500">
//                       Found on {job.site} • {job.date}
//                     </p>
//                   </div>
//                   <span
//                     className={`px-2 py-1 text-xs rounded-full ${
//                       job.applied ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
//                     }`}
//                   >
//                     {job.applied ? 'Applied' : 'Pending'}
//                   </span>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </>
//       )}
//       {/* Resumes Tab */}
//       {activeTab === 'resumes' && (
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-lg font-semibold text-gray-900">Resumes</h2>
//           <p className="text-sm text-gray-600">Resume management coming soon.</p>
//         </div>
//       )}
//       {/* Settings Tab */}
//       {activeTab === 'settings' && (
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-lg font-semibold text-gray-900">Settings</h2>
//           <p className="text-sm text-gray-600">Settings panel coming soon.</p>
//         </div>
//       )}
//       {/* Notifications Tab */}
//       {activeTab === 'notifications' && (
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="te<div className="flex justify-between items-center mt-4">
//   <button
//     onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
//     disabled={currentPage === 1}
//     className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
//   >
//     ← Previous
//   </button>
//   <span className="text-sm text-gray-600">Page {currentPage}</span>
//   <button
//     onClick={() => setCurrentPage((p) => p + 1)}
//     className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200"
//   >
//     Next →
//   </button>
// </div>
// xt-lg font-semibold text-gray-900">Notifications</h2>
//           <p className="text-sm text-gray-600">Notification center coming soon.</p>
//         </div>
//       )}
//     </div>
//   );
// }
}}),
"[project]/src/app/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>Home)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/page.tsx [app-ssr] (ecmascript)");
'use client';
;
;
;
function Home() {
    // const [user, setUser] = useState<UserType>(null);
    // const [activeTab, setActiveTab] = useState('dashboard');
    // const [resumes, setResumes] = useState<any[]>([]);
    // const [jobAlerts, setJobAlerts] = useState<any[]>([]);
    // const [scrapingStatus, setScrapingStatus] = useState<{ active: boolean; lastRun: string | null }>({ active: false, lastRun: null });
    // const [keywords, setKeywords] = useState<string[]>(['junior web developer', 'software engineer', 'data analyst']);
    // const [newKeyword, setNewKeyword] = useState('');
    // const handleLogin = () => {
    //   setUser({ id: '1', email: 'user@example.com', name: 'John Doe' });
    // };
    // const handleLogout = () => {
    //   setUser(null);
    //   setActiveTab('dashboard');
    // };
    // // File upload handler
    // const handleResumeUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    //   const files = event.target.files;
    //   if (!files || files.length === 0) {
    //     alert('Please upload a PDF file');
    //     return;
    //   }
    //   const file = files[0];
    //   if (file && file.type === 'application/pdf') {
    //     const newResume = {
    //       id: Date.now(),
    //       name: file.name,
    //       type: 'General',
    //       uploadDate: new Date().toISOString(),
    //       size: file.size,
    //       active: resumes.length === 0
    //     };
    //     setResumes([...resumes, newResume]);
    //   } else {
    //     alert('Please upload a PDF file');
    //   }
    // };
    // const toggleResumeActive = (id: any) => {
    //   setResumes(resumes.map(resume => ({
    //     ...resume,
    //     active: resume.id === id ? !resume.active : resume.active
    //   })));
    // };
    // const deleteResume = (id: any) => {
    //   setResumes(resumes.filter(resume => resume.id !== id));
    // };
    // const addKeyword = () => {
    //   if (newKeyword.trim() && !keywords.includes(newKeyword.trim())) {
    //     setKeywords([...keywords, newKeyword.trim()]);
    //     setNewKeyword('');
    //   }
    // };
    // const removeKeyword = (keyword: string) => {
    //   setKeywords(keywords.filter(k => k !== keyword));
    // };
    // useEffect(() => {
    //   if (user) {
    //     setJobAlerts([
    //       { id: 1, title: 'Frontend Developer at TechCorp', site: 'Indeed', applied: true, date: '2024-01-15' },
    //       { id: 2, title: 'React Developer at StartupXYZ', site: 'LinkedIn', applied: true, date: '2024-01-14' },
    //       { id: 3, title: 'Software Engineer at BigTech', site: 'Glassdoor', applied: false, date: '2024-01-14' }
    //     ]);
    //     setScrapingStatus({ active: true, lastRun: '2024-01-15 10:30 AM' });
    //   }
    // }, [user]);
    // if (!user) {
    //   return (
    //     <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center p-4">
    //       <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 w-full max-w-md border border-white/20">
    //         <div className="text-center mb-8">
    //           <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
    //             <Search className="w-8 h-8 text-white" />
    //           </div>
    //           <h1 className="text-3xl font-bold text-white mb-2">JobHunter AI</h1>
    //           <p className="text-white/70">Automate your job search with smart scraping</p>
    //         </div>
    //         <button
    //           onClick={handleLogin}
    //           className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105"
    //         >
    //           Sign In with Supabase
    //         </button>
    //         <p className="text-white/50 text-sm text-center mt-4">
    //           Secure authentication powered by Supabase
    //         </p>
    //       </div>
    //     </div>
    //   );
    // }
    // return (
    //   <div className="min-h-screen bg-gray-50">
    //     {/* Header */}
    //     <header className="bg-white shadow-sm border-b">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="flex justify-between items-center h-16">
    //           <div className="flex items-center">
    //             <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
    //               <Search className="w-5 h-5 text-white" />
    //             </div>
    //             <h1 className="text-xl font-bold text-gray-900">JobHunter AI</h1>
    //           </div>
    //           <div className="flex items-center space-x-4">
    //             <span className="text-sm text-gray-600">{user.email}</span>
    //             <button
    //               onClick={handleLogout}
    //               className="flex items-center space-x-1 text-gray-600 hover:text-gray-900"
    //             >
    //               <LogOut className="w-4 h-4" />
    //               <span>Logout</span>
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </header>
    //     {/* Navigation */}
    //     <nav className="bg-white shadow-sm">
    //       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    //         <div className="flex space-x-8">
    //           {[
    //             { id: 'dashboard', label: 'Dashboard', icon: Search },
    //             { id: 'resumes', label: 'Resumes', icon: FileText },
    //             { id: 'settings', label: 'Settings', icon: Settings },
    //             { id: 'notifications', label: 'Notifications', icon: Bell }
    //           ].map(tab => (
    //             <button
    //               key={tab.id}
    //               onClick={() => setActiveTab(tab.id)}
    //               className={`flex items-center space-x-2 py-4 px-1 border-b-2 font-medium text-sm ${
    //                 activeTab === tab.id
    //                   ? 'border-blue-500 text-blue-600'
    //                   : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    //               }`}
    //             >
    //               <tab.icon className="w-4 h-4" />
    //               <span>{tab.label}</span>
    //             </button>
    //           ))}
    //         </div>
    //       </div>
    //     </nav>
    //     {/* Main Content */}
    //     <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
    //       {activeTab === 'dashboard' && (
    //         <div className="space-y-6">
    //           {/* Status Cards */}
    //           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    //             <div className="bg-white rounded-lg shadow p-6">
    //               <div className="flex items-center">
    //                 <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
    //                   <Search className="w-6 h-6 text-blue-600" />
    //                 </div>
    //                 <div className="ml-4">
    //                   <h3 className="text-lg font-semibold text-gray-900">Scraping Status</h3>
    //                   <p className={`text-sm ${scrapingStatus.active ? 'text-green-600' : 'text-red-600'}`}>
    //                     {scrapingStatus.active ? 'Active' : 'Inactive'}
    //                   </p>
    //                 </div>
    //               </div>
    //               {scrapingStatus.lastRun && (
    //                 <p className="text-xs text-gray-500 mt-2">Last run: {scrapingStatus.lastRun}</p>
    //               )}
    //             </div>
    //             <div className="bg-white rounded-lg shadow p-6">
    //               <div className="flex items-center">
    //                 <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
    //                   <FileText className="w-6 h-6 text-green-600" />
    //                 </div>
    //                 <div className="ml-4">
    //                   <h3 className="text-lg font-semibold text-gray-900">Active Resumes</h3>
    //                   <p className="text-sm text-gray-600">
    //                     {resumes.filter(r => r.active).length} of {resumes.length}
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //             <div className="bg-white rounded-lg shadow p-6">
    //               <div className="flex items-center">
    //                 <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
    //                   <Bell className="w-6 h-6 text-purple-600" />
    //                 </div>
    //                 <div className="ml-4">
    //                   <h3 className="text-lg font-semibold text-gray-900">Applications Sent</h3>
    //                   <p className="text-sm text-gray-600">
    //                     {jobAlerts.filter(j => j.applied).length} this week
    //                   </p>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //           {/* Recent Job Alerts */}
    //           <div className="bg-white rounded-lg shadow">
    //             <div className="px-6 py-4 border-b">
    //               <h2 className="text-lg font-semibold text-gray-900">Recent Job Matches</h2>
    //             </div>
    //             <div className="divide-y">
    //               {jobAlerts.map(job => (
    //                 <div key={job.id} className="px-6 py-4 flex items-center justify-between">
    //                   <div>
    //                     <h3 className="font-medium text-gray-900">{job.title}</h3>
    //                     <p className="text-sm text-gray-500">Found on {job.site} • {job.date}</p>
    //                   </div>
    //                   <div className="flex items-center space-x-2">
    //                     <span className={`px-2 py-1 text-xs rounded-full ${
    //                       job.applied 
    //                         ? 'bg-green-100 text-green-800' 
    //                         : 'bg-yellow-100 text-yellow-800'
    //                     }`}>
    //                       {job.applied ? 'Applied' : 'Pending'}
    //                     </span>
    //                   </div>
    //                 </div>
    //               ))}
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //       {activeTab === 'resumes' && (
    //         <div className="space-y-6">
    //           <div className="flex justify-between items-center">
    //             <h2 className="text-2xl font-bold text-gray-900">Resume Management</h2>
    //             <label className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 cursor-pointer flex items-center space-x-2">
    //               <Upload className="w-4 h-4" />
    //               <span>Upload Resume</span>
    //               <input
    //                 type="file"
    //                 accept=".pdf"
    //                 onChange={handleResumeUpload}
    //                 className="hidden"
    //               />
    //             </label>
    //           </div>
    //           <div className="grid gap-4">
    //             {resumes.length === 0 ? (
    //               <div className="bg-white rounded-lg shadow p-8 text-center">
    //                 <FileText className="w-12 h-12 text-gray-400 mx-auto mb-4" />
    //                 <h3 className="text-lg font-medium text-gray-900 mb-2">No resumes uploaded</h3>
    //                 <p className="text-gray-500">Upload your first resume to get started with automated job applications.</p>
    //               </div>
    //             ) : (
    //               resumes.map(resume => (
    //                 <div key={resume.id} className="bg-white rounded-lg shadow p-6">
    //                   <div className="flex items-center justify-between">
    //                     <div className="flex items-center space-x-4">
    //                       <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
    //                         <FileText className="w-6 h-6 text-blue-600" />
    //                       </div>
    //                       <div>
    //                         <h3 className="font-medium text-gray-900">{resume.name}</h3>
    //                         <p className="text-sm text-gray-500">
    //                           {resume.type} • Uploaded {new Date(resume.uploadDate).toLocaleDateString()}
    //                         </p>
    //                       </div>
    //                     </div>
    //                     <div className="flex items-center space-x-2">
    //                       <button
    //                         onClick={() => toggleResumeActive(resume.id)}
    //                         className={`px-3 py-1 text-sm rounded-full ${
    //                           resume.active
    //                             ? 'bg-green-100 text-green-800'
    //                             : 'bg-gray-100 text-gray-800'
    //                         }`}
    //                       >
    //                         {resume.active ? 'Active' : 'Inactive'}
    //                       </button>
    //                       <button className="p-2 text-gray-400 hover:text-gray-600">
    //                         <Eye className="w-4 h-4" />
    //                       </button>
    //                       <button
    //                         onClick={() => deleteResume(resume.id)}
    //                         className="p-2 text-gray-400 hover:text-red-600"
    //                       >
    //                         <Trash2 className="w-4 h-4" />
    //                       </button>
    //                     </div>
    //                   </div>
    //                 </div>
    //               ))
    //             )}
    //           </div>
    //         </div>
    //       )}
    //       {activeTab === 'settings' && (
    //         <div className="space-y-6">
    //           <h2 className="text-2xl font-bold text-gray-900">Settings</h2>
    //           <div className="bg-white rounded-lg shadow p-6">
    //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Job Search Keywords</h3>
    //             <div className="flex space-x-2 mb-4">
    //               <input
    //                 type="text"
    //                 value={newKeyword}
    //                 onChange={(e) => setNewKeyword(e.target.value)}
    //                 placeholder="Add new keyword..."
    //                 className="flex-1 border border-gray-300 rounded-lg px-3 py-2"
    //                 onKeyPress={(e) => e.key === 'Enter' && addKeyword()}
    //               />
    //               <button
    //                 onClick={addKeyword}
    //                 className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 flex items-center space-x-1"
    //               >
    //                 <Plus className="w-4 h-4" />
    //                 <span>Add</span>
    //               </button>
    //             </div>
    //             <div className="flex flex-wrap gap-2">
    //               {keywords.map(keyword => (
    //                 <span
    //                   key={keyword}
    //                   className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center space-x-1"
    //                 >
    //                   <span>{keyword}</span>
    //                   <button
    //                     onClick={() => removeKeyword(keyword)}
    //                     className="text-blue-600 hover:text-blue-800"
    //                   >
    //                     ×
    //                   </button>
    //                 </span>
    //               ))}
    //             </div>
    //           </div>
    //           <div className="bg-white rounded-lg shadow p-6">
    //             <h3 className="text-lg font-semibold text-gray-900 mb-4">Scraping Settings</h3>
    //             <div className="space-y-4">
    //               <div className="flex items-center justify-between">
    //                 <span className="text-gray-700">Auto-scrape every 4 hours</span>
    //                 <label className="relative inline-flex items-center cursor-pointer">
    //                   <input type="checkbox" className="sr-only peer" defaultChecked />
    //                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    //                 </label>
    //               </div>
    //               <div className="flex items-center justify-between">
    //                 <span className="text-gray-700">Auto-apply to matching jobs</span>
    //                 <label className="relative inline-flex items-center cursor-pointer">
    //                   <input type="checkbox" className="sr-only peer" defaultChecked />
    //                   <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
    //                 </label>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //       {activeTab === 'notifications' && (
    //         <div className="space-y-6">
    //           <h2 className="text-2xl font-bold text-gray-900">Notifications</h2>
    //           <div className="bg-white rounded-lg shadow">
    //             <div className="px-6 py-4 border-b">
    //               <h3 className="text-lg font-semibold text-gray-900">Recent Activity</h3>
    //             </div>
    //             <div className="divide-y">
    //               <div className="px-6 py-4">
    //                 <div className="flex items-start space-x-3">
    //                   <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
    //                   <div>
    //                     <p className="text-sm text-gray-900">Resume submitted to Frontend Developer position at TechCorp</p>
    //                     <p className="text-xs text-gray-500">2 hours ago</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="px-6 py-4">
    //                 <div className="flex items-start space-x-3">
    //                   <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
    //                   <div>
    //                     <p className="text-sm text-gray-900">3 new job matches found for "React Developer"</p>
    //                     <p className="text-xs text-gray-500">4 hours ago</p>
    //                   </div>
    //                 </div>
    //               </div>
    //               <div className="px-6 py-4">
    //                 <div className="flex items-start space-x-3">
    //                   <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
    //                   <div>
    //                     <p className="text-sm text-gray-900">Scraping completed successfully</p>
    //                     <p className="text-xs text-gray-500">8 hours ago</p>
    //                   </div>
    //                 </div>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     </main>
    //   </div>
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 421,
        columnNumber: 5
    }, this);
}
}}),

};

//# sourceMappingURL=src_app_b2fcfc48._.js.map