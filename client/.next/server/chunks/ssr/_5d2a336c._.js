module.exports = {

"[project]/.next-internal/server/app/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript)\" } [app-rsc] (structured image object, ecmascript)"));
}}),
"[project]/src/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/src/app/supabase/client.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// import { createClient } from '@supabase/supabase-js'
// const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
// const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
__turbopack_context__.s({
    "supabase": (()=>supabase)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$auth$2d$helpers$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/auth-helpers-nextjs/dist/index.js [app-rsc] (ecmascript)");
;
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$auth$2d$helpers$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createPagesBrowserClient"])();
// Example: Fetch jobs and log the result (remove or modify as needed)
async function fetchJobs() {
    const { data, error } = await supabase.from("jobs").select("*").order("date", {
        ascending: false
    }).limit(20);
    if (error) {
        console.error("Error fetching jobs:", error);
    } else {
        console.log("Fetched jobs:", data);
    }
} // fetchJobs(); // Uncomment and call this function from a React component or useEffect when needed
 // export const supabase = createClient(supabaseUrl, supabaseAnonKey)
}}),
"[project]/src/app/supabase/user.ts [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "getUserClient": (()=>getUserClient),
    "getUserServer": (()=>getUserServer)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/supabase/client.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$auth$2d$helpers$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@supabase/auth-helpers-nextjs/dist/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/headers.js [app-rsc] (ecmascript)");
;
;
;
async function getUserClient() {
    const { data, error } = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2f$client$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["supabase"].auth.getUser();
    if (error) {
        console.error('Client-side user fetch error:', error);
        return undefined;
    }
    return data.user;
}
async function getUserServer() {
    const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$auth$2d$helpers$2d$nextjs$2f$dist$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["createServerComponentClient"])({
        cookies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$headers$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["cookies"]
    });
    const { data, error } = await supabase.auth.getUser();
    if (error) {
        console.error('Server-side user fetch error:', error);
        return null;
    }
    return data.user;
}
}}),
"[project]/src/app/components/AppShell.tsx (client reference/proxy) <module evaluation>": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/AppShell.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/AppShell.tsx <module evaluation>", "default");
}}),
"[project]/src/app/components/AppShell.tsx (client reference/proxy)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server-edge.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2d$edge$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/app/components/AppShell.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/app/components/AppShell.tsx", "default");
}}),
"[project]/src/app/components/AppShell.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AppShell$2e$tsx__$28$client__reference$2f$proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/app/components/AppShell.tsx (client reference/proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AppShell$2e$tsx__$28$client__reference$2f$proxy$29$__ = __turbopack_context__.i("[project]/src/app/components/AppShell.tsx (client reference/proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AppShell$2e$tsx__$28$client__reference$2f$proxy$29$__);
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
// src/app/page.tsx
__turbopack_context__.s({
    "default": (()=>Page)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/supabase/user.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AppShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/app/components/AppShell.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@supabase/supabase-js/dist/module/index.js [app-rsc] (ecmascript) <locals>");
;
;
;
;
async function Page() {
    const user = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$supabase$2f$user$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getUserServer"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$components$2f$AppShell$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
        initialUser: user
    }, void 0, false, {
        fileName: "[project]/src/app/page.tsx",
        lineNumber: 12,
        columnNumber: 10
    }, this);
}
const supabase = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"])(("TURBOPACK compile-time value", "https://kebjyahvjvhtcohmxkdo.supabase.co"), ("TURBOPACK compile-time value", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImtlYmp5YWh2anZodGNvaG14a2RvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAyNjE3MjUsImV4cCI6MjA2NTgzNzcyNX0.I3qsrNHgUWtizSbS5AjdpfhGnTf9QS2m2M-SAtvcSjs")); // 'use client'
 // import React, { useState, useEffect } from 'react';
 // import { Upload, FileText, Settings, Bell, Search, User, LogOut, Eye, Trash2, Plus } from 'lucide-react';
 // import { getUserServer } from '@/app/supabase/user';
 // import type { AuthUser } from '@/app/types/auth';
 // import '../app/globals.css'
 // import { createClient } from '@supabase/supabase-js';
 // import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
 // import { cookies } from 'next/headers';
 // if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
 //   throw new Error('Supabase environment variables are not set.');
 // }
 // export default async function App() {
 //   const supabase = createServerComponentClient({ cookies });
 //   const {
 //     data: { user }
 //   } = await supabase.auth.getUser();
 //   const [currentPage, setCurrentPage] = useState('home');
 //   const [loading, setLoading] = useState(true);
 //   const user = await getUserServer(); 
 //   const supabase = createClient(
 //     process.env.NEXT_PUBLIC_SUPABASE_URL as string,
 //     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY as string
 //   );
 //   // Check for existing session on mount
 //   useEffect(() => {
 //     const checkSession = async () => {
 //       const { data: { session }, error } = await supabase.auth.getSession();
 //       if (error) {
 //         console.error('Error checking session:', error);
 //       } else if (session?.user) {
 //         setUser(session.user as AuthUser);
 //         setCurrentPage('dashboard');
 //       }
 //       setLoading(false);
 //     };
 //     checkSession();
 //     // Listen for auth state changes
 //     const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
 //       if (event === 'SIGNED_IN' && session?.user) {
 //         setUser(session.user as AuthUser);
 //         setCurrentPage('dashboard');
 //       } else if (event === 'SIGNED_OUT') {
 //         setUser(null);
 //         setCurrentPage('home');
 //       }
 //     });
 //     return () => subscription.unsubscribe();
 //   }, []);
 //   const handleLogout = async () => {
 //     await supabase.auth.signOut();
 //   };
 //   const handleAuthSuccess = (authUser: AuthUser) => {
 //     setUser(authUser);
 //     setCurrentPage('dashboard');
 //   };
 //   if (loading) {
 //     return (
 //       <div className="min-h-screen flex items-center justify-center bg-gray-50">
 //         <div className="text-center">
 //           <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto"></div>
 //           <p className="mt-4 text-gray-600">Loading...</p>
 //         </div>
 //       </div>
 //     );
 //   }
 //   return (
 //     <div className="min-h-screen bg-gray-50">
 //       <Navbar 
 //         user={user} 
 //         onLogout={handleLogout} 
 //         currentPage={currentPage} 
 //         setCurrentPage={setCurrentPage} 
 //       />
 //       <main className="flex-1">
 //         {currentPage === 'home' && <HomePage user={user} setCurrentPage={setCurrentPage} />}
 //         {currentPage === 'about' && <AboutPage />}
 //         {currentPage === 'contact' && <ContactPage />}
 //         {currentPage === 'login' && (
 //           <AuthForm 
 //             mode="login" 
 //             onSuccess={handleAuthSuccess} 
 //             setCurrentPage={setCurrentPage} 
 //           />
 //         )}
 //         {currentPage === 'register' && (
 //           <AuthForm 
 //             mode="register" 
 //             onSuccess={handleAuthSuccess} 
 //             setCurrentPage={setCurrentPage} 
 //           />
 //         )}
 //         {currentPage === 'dashboard' && user && <Dashboard user={user} />}
 //       </main>
 //       <Footer setCurrentPage={setCurrentPage} />
 //     </div>
 //   );
 // }
}}),
"[project]/src/app/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_5d2a336c._.js.map