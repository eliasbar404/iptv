// resources/js/Pages/Contacts/Index.jsx
import React, { useState, useMemo } from 'react';
import { Head, router } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout';
import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

const breadcrumbs = [
  { title: 'Contacts', href: '/dashboard/contacts' },
];

const DashboardMessages = () => {
  const { contacts: initialContacts, flash } = usePage().props;
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredContacts = useMemo(() => {
    return initialContacts.data.filter(contact => 
      contact.user_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      contact.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (contact.subject?.toLowerCase().includes(searchQuery.toLowerCase())) ||
      contact.message.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [initialContacts, searchQuery]);

  const totalPages = Math.ceil(filteredContacts.length / itemsPerPage);
  const paginatedContacts = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return filteredContacts.slice(start, start + itemsPerPage);
  }, [filteredContacts, currentPage]);

  const handleDelete = (id) => {
    if (confirm('Are you sure you want to delete this message?')) {
      router.delete(route('contacts.destroy', id), {
        preserveScroll: true,
      });
    }
  };

  const handleExport = () => {
    const data = filteredContacts.map(contact => ({
      'Name': contact.user_name,
      'Email': contact.email,
      'Subject': contact.subject,
      'Message': contact.message,
      'Date': contact.created_at
    }));

    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Contacts');
    const buffer = XLSX.write(wb, { type: 'array', bookType: 'xlsx' });
    const blob = new Blob([buffer], { type: 'application/octet-stream' });
    saveAs(blob, `contacts_${new Date().toISOString().split('T')[0]}.xlsx`);
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Contact Messages" />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between gap-4 mb-6">
            <h1 className="text-3xl font-bold text-gray-800">Contact Messages</h1>
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Search messages..."
                className="w-64 p-2 border rounded-lg"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                onClick={handleExport}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
              >
                Export to Excel
              </button>
            </div>
          </div>

          {flash?.success && (
            <div className="mb-4 p-4 bg-green-100 text-green-700 rounded-lg">
              {flash.success}
            </div>
          )}

          <div className="bg-white rounded-lg shadow overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Email</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Subject</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Message</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {paginatedContacts.map(contact => (
                  <tr key={contact.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">{contact.user_name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <a href={`mailto:${contact.email}`} className="text-blue-600 hover:underline">
                        {contact.email}
                      </a>
                    </td>
                    <td className="px-6 py-4 max-w-[200px] truncate">{contact.subject}</td>
                    <td className="px-6 py-4 max-w-[300px] line-clamp-2">{contact.message}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{contact.created_at}</td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-between items-center px-4 py-3 border-t">
              <button
                onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
                disabled={currentPage === 1}
                className="px-4 py-2 disabled:opacity-50"
              >
                Previous
              </button>
              <span>Page {currentPage} of {totalPages}</span>
              <button
                onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
                className="px-4 py-2 disabled:opacity-50"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
};

export default DashboardMessages;