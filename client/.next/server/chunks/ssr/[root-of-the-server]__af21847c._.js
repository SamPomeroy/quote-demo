module.exports = {

"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/src/app/components/dashboard/page.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
'use client';
;
 // if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
 //   throw new Error('Supabase environment variables are not set.');
 // }
 // const supabase = createClient(
 //   process.env.NEXT_PUBLIC_SUPABASE_URL,
 //   process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
 // );
 // export default function Dashboard() {
 //   const [activeTab, setActiveTab] = useState('dashboard');
 //   const [jobAlerts, setJobAlerts] = useState<Job[]>([]);
 //   const [scrapingStatus, setScrapingStatus] = useState<{ active: boolean; lastRun: string | null }>({
 //     active: false,
 //     lastRun: null
 //   });
 //   const [selectedJob, setSelectedJob] = useState<Job | null>(null);
 //   const [currentPage, setCurrentPage] = useState(1);
 //   const pageSize = 10;
 //   useEffect(() => {
 //     const fetchJobs = async (page: number) => {
 //       const from = (page - 1) * pageSize;
 //       const to = from + pageSize - 1;
 //       const { data, error } = await supabase
 //         .from('jobs')
 //         .select('*')
 //         .order('date', { ascending: false })
 //         .range(from, to);
 //       if (error) {
 //         console.error('Error fetching jobs:', error);
 //       } else {
 //         setJobAlerts(data || []);
 //         setScrapingStatus({
 //           active: true,
 //           lastRun: new Date().toLocaleString()
 //         });
 //       }
 //     };
 //     fetchJobs(currentPage);
 //   }, [currentPage]);
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
 //             {/* Scraping Status */}
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
 //             {/* Resume Placeholder */}
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
 //             {/* Applications Sent */}
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
 //           {/* Job List & Modal */}
 //           {selectedJob && (
 //             <JobModal job={selectedJob} onCloseAction={() => setSelectedJob(null)} />
 //           )}
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
 //           {/* Pagination */}
 //           <div className="flex justify-between items-center mt-4">
 //             <button
 //               onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
 //               disabled={currentPage === 1}
 //               className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200 disabled:opacity-50"
 //             >
 //               ← Previous
 //             </button>
 //             <span className="text-sm text-gray-600">Page {currentPage}</span>
 //             <button
 //               onClick={() => setCurrentPage((p) => p + 1)}
 //               className="px-4 py-2 text-sm bg-gray-100 rounded hover:bg-gray-200"
 //               disabled={jobAlerts.length < pageSize}
 //             >
 //               Next →
 //             </button>
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
 //           <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
 //           <p className="text-sm text-gray-600">Notification center coming soon.</p>
 //         </div>
 //       )}
 //     </div>
 //   );
 // }
}}),
"[project]/src/app/layout.tsx [app-ssr] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>RootLayout)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/dashboard/page.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
'use client';
;
;
;
;
function RootLayout({ children }) {
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('dashboard');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$dashboard$2f$page$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                    activeTab: activeTab
                }, void 0, false, {
                    fileName: "[project]/src/app/layout.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/layout.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 17,
        columnNumber: 5
    }, this);
} // <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
 //           {/* Scraping Status */}
 //           <div className="bg-white rounded-lg shadow p-6">
 //             <div className="flex items-center">
 //               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
 //                 <Search className="w-6 h-6 text-blue-600" />
 //               </div>
 //               <div className="ml-4">
 //                 <h3 className="text-lg font-semibold text-gray-900">Scraping Status</h3>
 //                 <p className={`text-sm ${scrapingStatus.active ? 'text-green-600' : 'text-red-600'}`}>
 //                   {scrapingStatus.active ? 'Active' : 'Inactive'}
 //                 </p>
 //                 {scrapingStatus.lastRun && (
 //                   <p className="text-xs text-gray-500 mt-2">Last run: {scrapingStatus.lastRun}</p>
 //                 )}
 //               </div>
 //             </div>
 //           </div>
 //           {/* Resume Placeholder */}
 //           <div className="bg-white rounded-lg shadow p-6">
 //             <div className="flex items-center">
 //               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
 //                 <FileText className="w-6 h-6 text-green-600" />
 //               </div>
 //               <div className="ml-4">
 //                 <h3 className="text-lg font-semibold text-gray-900">Active Resumes</h3>
 //                 <p className="text-sm text-gray-600">Dynamic count can be passed via props</p>
 //               </div>
 //             </div>
 //           </div>
 //           {/* Applications Sent */}
 //           <div className="bg-white rounded-lg shadow p-6">
 //             <div className="flex items-center">
 //               <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
 //                 <Bell className="w-6 h-6 text-purple-600" />
 //               </div>
 //               <div className="ml-4">
 //                 <h3 className="text-lg font-semibold text-gray-900">Applications Sent</h3>
 //                 <p className="text-sm text-gray-600">
 //                   {jobAlerts.filter(j => j.applied).length} this week
 //                 </p>
 //               </div>
 //             </div>
 //           </div>
 //         </div>
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
if ("TURBOPACK compile-time falsy", 0) {
    "TURBOPACK unreachable";
} else {
    if ("TURBOPACK compile-time falsy", 0) {
        "TURBOPACK unreachable";
    } else {
        if ("TURBOPACK compile-time truthy", 1) {
            if ("TURBOPACK compile-time truthy", 1) {
                module.exports = __turbopack_context__.r("[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)");
            } else {
                "TURBOPACK unreachable";
            }
        } else {
            "TURBOPACK unreachable";
        }
    }
} //# sourceMappingURL=module.compiled.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
"use strict";
module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-ssr] (ecmascript)").vendored['react-ssr'].React; //# sourceMappingURL=react.js.map
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__af21847c._.js.map