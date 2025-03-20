// // import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
// import AppLayout from '@/layouts/app-layout';
// import { type BreadcrumbItem } from '@/types';
// import { Head, router } from '@inertiajs/react';
// import { usePage } from '@inertiajs/react';


// const breadcrumbs: BreadcrumbItem[] = [
//     {
//         title: 'Users',
//         href: '/dashboard/users',
//     },
// ];

// export default function DashboardUsers() {
//     const { users, flash } = usePage().props; // Access users and flash messages from Inertia

//   const handleDelete = (userId) => {
//     if (confirm('Are you sure you want to delete this user?')) {
//       // Use Inertia's delete method to send a DELETE request
//       router.delete(route('admin.users.destroy', userId), {
//         onSuccess: () => {
//           console.log('User deleted');
//         },
//         preserveScroll: true, // Keeps scroll position after deletion
//       });
//     }
//   };
//     return (
//         <AppLayout breadcrumbs={breadcrumbs}>
//             <Head title="Dashboard" />
//             <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">

                



//             <div className="min-h-screen bg-gray-100 p-6">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Users</h1>

//         {/* Flash Messages */}
//         {flash?.success && (
//           <div className="mb-4 p-4 bg-green-100 text-green-700 rounded">
//             {flash.success}
//           </div>
//         )}
//         {flash?.error && (
//           <div className="mb-4 p-4 bg-red-100 text-red-700 rounded">
//             {flash.error}
//           </div>
//         )}

//         {/* Users Table */}
//         {users.length > 0 ? (
//           <div className="overflow-x-auto">
//             <table className="w-full bg-white shadow-md rounded">
//               <thead>
//                 <tr className="bg-gray-200 text-gray-600 uppercase text-sm">
//                   <th className="py-3 px-6 text-left">Full Name</th>
//                   <th className="py-3 px-6 text-left">Email</th>
//                   <th className="py-3 px-6 text-center">Active</th>
//                   <th className="py-3 px-6 text-center">Created At</th>
//                   <th className="py-3 px-6 text-center">Actions</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {users.map((user) => (
//                   <tr key={user.id} className="border-b hover:bg-gray-50">
//                     <td className="py-4 px-6">{user.full_name}</td>
//                     <td className="py-4 px-6">{user.email}</td>
//                     <td className="py-4 px-6 text-center">
//                       {user.is_active ? 'Yes' : 'No'}
//                     </td>
//                     <td className="py-4 px-6 text-center">
//                       {new Date(user.created_at).toLocaleDateString()}
//                     </td>
//                     <td className="py-4 px-6 text-center">
//                       <button
//                         onClick={() => handleDelete(user.id)}
//                         className="text-red-500 hover:text-red-700 font-semibold"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//           </div>
//         ) : (
//           <p className="text-gray-600">No non-admin users found.</p>
//         )}
//       </div>
//     </div>















//             </div>
//         </AppLayout>
//     );
// }


import React, { useState, useMemo } from 'react';
import { Head, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout'; // Adjust path as needed
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

// Define TypeScript interfaces
interface User {
  id: number;
  full_name: string;
  email: string;
  is_active: boolean;
  created_at: string;
}

interface PageProps {
  users: User[];
  flash?: {
    success?: string;
    error?: string;
  };
}

interface BreadcrumbItem {
  title: string;
  href: string;
}

const breadcrumbs: BreadcrumbItem[] = [
  {
    title: 'Users',
    href: '/dashboard/users',
  },
];

const DashboardUsers: React.FC = () => {
  const { users: initialUsers, flash } = usePage<PageProps>().props;

  // State for search and pagination
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  // Filter users based on search query
  const filteredUsers = useMemo(() => {
    return initialUsers.filter(
      (user) =>
        user.full_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [initialUsers, searchQuery]);

  // Pagination logic
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const paginatedUsers = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    return filteredUsers.slice(start, end);
  }, [filteredUsers, currentPage]);

  const handleDelete = (userId: number) => {
    if (confirm('Are you sure you want to delete this user?')) {
      router.delete(route('admin.users.destroy', userId), {
        preserveScroll: true,
        onSuccess: () => {
          console.log('User deleted successfully');
        },
        onError: (errors) => {
          console.error('Error deleting user:', errors);
        },
      });
    }
  };

  const handleToggleActive = (userId: number, currentStatus: boolean) => {
    if (confirm(`Are you sure you want to ${currentStatus ? 'deactivate' : 'activate'} this user?`)) {
      router.patch(route('admin.users.toggle-active', userId), {}, {
        preserveScroll: true,
        onSuccess: () => {
          console.log('User status toggled successfully');
        },
        onError: (errors) => {
          console.error('Error toggling user status:', errors);
        },
      });
    }
  };

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const handleExportToExcel = () => {
    const exportData = filteredUsers.map((user) => ({
      'Full Name': user.full_name,
      Email: user.email,
      Active: user.is_active ? 'Yes' : 'No',
      'Created At': new Date(user.created_at).toLocaleDateString(),
    }));

    const ws = XLSX.utils.json_to_sheet(exportData);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Users');
    const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });
    saveAs(blob, `users_export_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard - Manage Users" />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Header, Search, and Export */}
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h1 className="text-3xl font-bold text-gray-800">Manage Users</h1>
            <div className="flex gap-4">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search by name or email..."
                className="w-64 p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={handleExportToExcel}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Export to Excel
              </button>
            </div>
          </div>

          {/* Flash Messages */}
          {flash?.success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">
              {flash.success}
            </div>
          )}
          {flash?.error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">
              {flash.error}
            </div>
          )}

          {/* Users Table */}
          {filteredUsers.length > 0 ? (
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                    <th className="py-4 px-6">Full Name</th>
                    <th className="py-4 px-6">Email</th>
                    <th className="py-4 px-6 text-center">Active</th>
                    <th className="py-4 px-6 text-center">Created At</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b hover:bg-gray-50 transition-colors"
                    >
                      <td className="py-4 px-6 font-medium text-gray-800">
                        {user.full_name}
                      </td>
                      <td className="py-4 px-6 text-gray-600">{user.email}</td>
                      <td className="py-4 px-6 text-center">
                        <span
                          className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                            user.is_active
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {user.is_active ? 'Yes' : 'No'}
                        </span>
                      </td>
                      <td className="py-4 px-6 text-center text-gray-600">
                        {new Date(user.created_at).toLocaleDateString()}
                      </td>
                      <td className="py-4 px-6 text-center space-x-2">
                        <button
                          onClick={() => handleToggleActive(user.id, user.is_active)}
                          className={`px-3 py-1 rounded-md text-white transition-colors ${
                            user.is_active
                              ? 'bg-yellow-500 hover:bg-yellow-600'
                              : 'bg-green-500 hover:bg-green-600'
                          }`}
                        >
                          {user.is_active ? 'Deactivate' : 'Activate'}
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="flex justify-between items-center p-4 border-t">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 hover:bg-gray-300"
                >
                  Previous
                </button>
                <span className="text-gray-600">
                  Page {currentPage} of {totalPages}
                </span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50 hover:bg-gray-300"
                >
                  Next
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-12 bg-white rounded-lg shadow-md">
              <p className="text-lg text-gray-600">No users match your search.</p>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardUsers;