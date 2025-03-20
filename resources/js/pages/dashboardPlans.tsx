// import React, { useState, useMemo } from 'react';
// import { Head, router, useForm, usePage } from '@inertiajs/react';
// import AppLayout from '@/layouts/app-layout';
// import { EditorContent, useEditor } from '@tiptap/react';
// import StarterKit from '@tiptap/starter-kit';

// interface SubscriptionPlan {
//   id: number;
//   title: string;
//   sub_title: string;
//   icon: string | null;
//   monthly_price: number;
//   annual_price: number;
//   features: string;
//   is_most_popular: boolean;
//   message: string | null;
// }

// interface PageProps {
//   plans?: SubscriptionPlan[];
//   flash?: { success?: string; error?: string };
// }

// interface BreadcrumbItem {
//   title: string;
//   href: string;
// }

// const breadcrumbs: BreadcrumbItem[] = [{ title: 'Plans', href: '/admin/subscription-plans' }];

// const TiptapToolbar: React.FC<{ editor: any }> = ({ editor }) => {
//   if (!editor) return null;
//   return (
//     <div className="mb-2 flex gap-2">
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleBold().run()}
//         className={`p-1 ${editor.isActive('bold') ? 'bg-gray-300' : 'bg-gray-100'} rounded`}
//       >
//         B
//       </button>
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleItalic().run()}
//         className={`p-1 ${editor.isActive('italic') ? 'bg-gray-300' : 'bg-gray-100'} rounded`}
//       >
//         I
//       </button>
//       <button
//         type="button"
//         onClick={() => editor.chain().focus().toggleBulletList().run()}
//         className={`p-1 ${editor.isActive('bulletList') ? 'bg-gray-300' : 'bg-gray-100'} rounded`}
//       >
//         • List
//       </button>
//     </div>
//   );
// };

// const PlansPage: React.FC = () => {
//   const { props } = usePage<PageProps>();
//   const plans = props.plans ?? [];
//   const flash = props.flash;

//   const [currentPage, setCurrentPage] = useState<number>(1);
//   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
//   const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
//   const itemsPerPage = 5;

//   const { data: createData, setData: setCreateData, post, processing: createProcessing, reset: resetCreate, errors: createErrors } = useForm({
//     title: '',
//     sub_title: '',
//     icon: '',
//     monthly_price: 0,
//     annual_price: 0,
//     features: '',
//     is_most_popular: false,
//     message: '',
//   });

//   const createEditor = useEditor({
//     extensions: [StarterKit],
//     content: createData.features,
//     onUpdate: ({ editor }) => setCreateData('features', editor.getHTML()),
//   });

//   const { data: updateData, setData: setUpdateData, put, processing: updateProcessing, reset: resetUpdate, errors: updateErrors } = useForm<SubscriptionPlan>({
//     id: 0,
//     title: '',
//     sub_title: '',
//     icon: '',
//     monthly_price: 0,
//     annual_price: 0,
//     features: '',
//     is_most_popular: false,
//     message: '',
//   });

//   const updateEditor = useEditor({
//     extensions: [StarterKit],
//     content: updateData.features,
//     onUpdate: ({ editor }) => setUpdateData('features', editor.getHTML()),
//   });

//   const handleEditClick = (plan: SubscriptionPlan) => {
//     setSelectedPlan(plan);
//     setUpdateData({ ...plan, icon: plan.icon || '', message: plan.message || '' });
//     updateEditor?.commands.setContent(plan.features);
//     setIsModalOpen(true);
//   };

//   const totalPages = Math.ceil(plans.length / itemsPerPage);
//   const paginatedPlans = useMemo(() => {
//     const start = (currentPage - 1) * itemsPerPage;
//     return plans.slice(start, start + itemsPerPage);
//   }, [plans, currentPage]);

//   const handlePageChange = (page: number) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   const stripHtml = (html: string): string => {
//     const tmp = document.createElement('div');
//     tmp.innerHTML = html;
//     return tmp.textContent || tmp.innerText || '';
//   };

//   const truncate = (text: string, length: number): string => {
//     return text.length > length ? text.substring(0, length) + '...' : text;
//   };

//   const handleCreateSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     post(route('admin.subscription-plans.store'), {
//       onSuccess: () => {
//         resetCreate();
//         createEditor?.commands.setContent('');
//       },
//       preserveScroll: true,
//     });
//   };

//   const handleUpdateSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     if (selectedPlan) {
//       put(route('admin.subscription-plans.update', selectedPlan.id), {
//         onSuccess: () => {
//           setIsModalOpen(false);
//           resetUpdate();
//           updateEditor?.commands.setContent('');
//         },
//         preserveScroll: true,
//       });
//     }
//   };

//   const handleDelete = (planId: number) => {
//     if (confirm('Are you sure you want to delete this plan?')) {
//       router.delete(route('admin.subscription-plans.destroy', planId), { preserveScroll: true });
//     }
//   };

//   return (
//     <AppLayout breadcrumbs={breadcrumbs}>
//       <Head title="Admin - Manage Subscription Plans" />
//       <div className="min-h-screen bg-gray-50 p-6">
//         <div className="max-w-6xl mx-auto">
//           <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Subscription Plans</h1>

//           {flash?.success && <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">{flash.success}</div>}
//           {flash?.error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">{flash.error}</div>}

//           <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
//             <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Plan</h2>
//             <form onSubmit={handleCreateSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">Title</label>
//                 <input
//                   type="text"
//                   value={createData.title}
//                   onChange={(e) => setCreateData('title', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//                 {createErrors.title && <p className="text-red-500 text-sm mt-1">{createErrors.title}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">Subtitle</label>
//                 <input
//                   type="text"
//                   value={createData.sub_title}
//                   onChange={(e) => setCreateData('sub_title', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//                 {createErrors.sub_title && <p className="text-red-500 text-sm mt-1">{createErrors.sub_title}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">Icon (optional)</label>
//                 <input
//                   type="text"
//                   value={createData.icon}
//                   onChange={(e) => setCreateData('icon', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   placeholder="e.g., fa-star"
//                 />
//                 {createErrors.icon && <p className="text-red-500 text-sm mt-1">{createErrors.icon}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">Monthly Price</label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   value={createData.monthly_price}
//                   onChange={(e) => setCreateData('monthly_price', e.target.valueAsNumber || 0)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//                 {createErrors.monthly_price && <p className="text-red-500 text-sm mt-1">{createErrors.monthly_price}</p>}
//               </div>
//               <div>
//                 <label className="block text-sm font-medium text-gray-600">Annual Price</label>
//                 <input
//                   type="number"
//                   step="0.01"
//                   value={createData.annual_price}
//                   onChange={(e) => setCreateData('annual_price', e.target.valueAsNumber || 0)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                   required
//                 />
//                 {createErrors.annual_price && <p className="text-red-500 text-sm mt-1">{createErrors.annual_price}</p>}
//               </div>
//               <div className="flex items-center">
//                 <label className="block text-sm font-medium text-gray-600 mr-2">Most Popular</label>
//                 <input
//                   type="checkbox"
//                   checked={createData.is_most_popular}
//                   onChange={(e) => setCreateData('is_most_popular', e.target.checked)}
//                   className="h-4 w-4"
//                 />
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-600">Message (optional)</label>
//                 <input
//                   type="text"
//                   value={createData.message}
//                   onChange={(e) => setCreateData('message', e.target.value)}
//                   className="w-full p-2 border border-gray-300 rounded-lg"
//                 />
//                 {createErrors.message && <p className="text-red-500 text-sm mt-1">{createErrors.message}</p>}
//               </div>
//               <div className="md:col-span-2">
//                 <label className="block text-sm font-medium text-gray-600">Features</label>
//                 <TiptapToolbar editor={createEditor} />
//                 <EditorContent editor={createEditor} className="w-full border border-gray-300 rounded-lg p-2" />
//                 {createErrors.features && <p className="text-red-500 text-sm mt-1">{createErrors.features}</p>}
//               </div>
//               <div className="md:col-span-2">
//                 <button
//                   type="submit"
//                   disabled={createProcessing}
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
//                 >
//                   {createProcessing ? 'Creating...' : 'Create Plan'}
//                 </button>
//               </div>
//             </form>
//           </div>

//           {plans.length > 0 && (
//             <div className="overflow-x-auto bg-white shadow-md rounded-lg">
//               <table className="w-full text-left">
//                 <thead>
//                   <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
//                     <th className="py-4 px-6">Title</th>
//                     <th className="py-4 px-6">Subtitle</th>
//                     <th className="py-4 px-6">Monthly Price</th>
//                     <th className="py-4 px-6">Annual Price</th>
//                     <th className="py-4 px-6 text-center">Most Popular</th>
//                     <th className="py-4 px-6">Features Summary</th>
//                     <th className="py-4 px-6 text-center">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {paginatedPlans.map((plan) => (
//                     <tr key={plan.id} className="border-b hover:bg-gray-50">
//                       <td className="py-4 px-6">{plan.title}</td>
//                       <td className="py-4 px-6">{plan.sub_title}</td>
//                       <td className="py-4 px-6">${plan.monthly_price.toFixed(2)}</td>
//                       <td className="py-4 px-6">${plan.annual_price.toFixed(2)}</td>
//                       <td className="py-4 px-6 text-center">{plan.is_most_popular ? 'Yes' : 'No'}</td>
//                       <td className="py-4 px-6">{truncate(stripHtml(plan.features), 50)}</td>
//                       <td className="py-4 px-6 text-center space-x-2">
//                         <button
//                           onClick={() => handleEditClick(plan)}
//                           className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
//                         >
//                           Edit
//                         </button>
//                         <button
//                           onClick={() => handleDelete(plan.id)}
//                           className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
//                         >
//                           Delete
//                         </button>
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//               <div className="flex justify-between items-center p-4 border-t">
//                 <button
//                   onClick={() => handlePageChange(currentPage - 1)}
//                   disabled={currentPage === 1}
//                   className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
//                 >
//                   Previous
//                 </button>
//                 <span>Page {currentPage} of {totalPages}</span>
//                 <button
//                   onClick={() => handlePageChange(currentPage + 1)}
//                   disabled={currentPage === totalPages}
//                   className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
//                 >
//                   Next
//                 </button>
//               </div>
//             </div>
//           )}

//           {isModalOpen && selectedPlan && (
//             <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//               <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
//                 <h2 className="text-xl font-semibold text-gray-700 mb-4">Update Plan</h2>
//                 <form onSubmit={handleUpdateSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">Title</label>
//                     <input
//                       type="text"
//                       value={updateData.title}
//                       onChange={(e) => setUpdateData('title', e.target.value)}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       required
//                     />
//                     {updateErrors.title && <p className="text-red-500 text-sm mt-1">{updateErrors.title}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">Subtitle</label>
//                     <input
//                       type="text"
//                       value={updateData.sub_title}
//                       onChange={(e) => setUpdateData('sub_title', e.target.value)}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       required
//                     />
//                     {updateErrors.sub_title && <p className="text-red-500 text-sm mt-1">{updateErrors.sub_title}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">Icon (optional)</label>
//                     <input
//                       type="text"
//                       value={updateData.icon || ''}
//                       onChange={(e) => setUpdateData('icon', e.target.value)}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       placeholder="e.g., fa-star"
//                     />
//                     {updateErrors.icon && <p className="text-red-500 text-sm mt-1">{updateErrors.icon}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">Monthly Price</label>
//                     <input
//                       type="number"
//                       step="0.01"
//                       value={updateData.monthly_price}
//                       onChange={(e) => setUpdateData('monthly_price', e.target.valueAsNumber || 0)}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       required
//                     />
//                     {updateErrors.monthly_price && <p className="text-red-500 text-sm mt-1">{updateErrors.monthly_price}</p>}
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-600">Annual Price</label>
//                     <input
//                       type="number"
//                       step="0.01"
//                       value={updateData.annual_price}
//                       onChange={(e) => setUpdateData('annual_price', e.target.valueAsNumber || 0)}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                       required
//                     />
//                     {updateErrors.annual_price && <p className="text-red-500 text-sm mt-1">{updateErrors.annual_price}</p>}
//                   </div>
//                   <div className="flex items-center">
//                     <label className="block text-sm font-medium text-gray-600 mr-2">Most Popular</label>
//                     <input
//                       type="checkbox"
//                       checked={updateData.is_most_popular}
//                       onChange={(e) => setUpdateData('is_most_popular', e.target.checked)}
//                       className="h-4 w-4"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-600">Message (optional)</label>
//                     <input
//                       type="text"
//                       value={updateData.message || ''}
//                       onChange={(e) => setUpdateData('message', e.target.value)}
//                       className="w-full p-2 border border-gray-300 rounded-lg"
//                     />
//                     {updateErrors.message && <p className="text-red-500 text-sm mt-1">{updateErrors.message}</p>}
//                   </div>
//                   <div className="md:col-span-2">
//                     <label className="block text-sm font-medium text-gray-600">Features</label>
//                     <TiptapToolbar editor={updateEditor} />
//                     <EditorContent editor={updateEditor} className="w-full border border-gray-300 rounded-lg p-2" />
//                     {updateErrors.features && <p className="text-red-500 text-sm mt-1">{updateErrors.features}</p>}
//                   </div>
//                   <div className="md:col-span-2 flex justify-end gap-2">
//                     <button
//                       type="button"
//                       onClick={() => setIsModalOpen(false)}
//                       className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
//                     >
//                       Cancel
//                     </button>
//                     <button
//                       type="submit"
//                       disabled={updateProcessing}
//                       className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
//                     >
//                       {updateProcessing ? 'Saving...' : 'Save Changes'}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           )}
//         </div>
//       </div>
//     </AppLayout>
//   );
// };

// export default PlansPage;
// resources/js/Pages/Admin/SubscriptionPlans/Index.tsx
import React, { useState, useMemo } from 'react';
import { Head, router, useForm, usePage } from '@inertiajs/react';
import AppLayout from '@/layouts/app-layout'; // Adjust path as needed
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

interface SubscriptionPlan {
  id: number;
  title: string;
  sub_title: string;
  icon: string | null;
  monthly_price: number;
  annual_price: number;
  features: string;
  is_most_popular: boolean;
  message: string | null;
}

interface PageProps {
  plans?: SubscriptionPlan[];
  flash?: { success?: string; error?: string };
}

interface BreadcrumbItem {
  title: string;
  href: string;
}

const breadcrumbs: BreadcrumbItem[] = [{ title: 'Plans', href: '/admin/subscription-plans' }];

const TiptapToolbar: React.FC<{ editor: any }> = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="mb-2 flex flex-wrap gap-2 bg-gray-100 p-2 rounded-t-lg">
      {/* Text Formatting */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1 ${editor.isActive('bold') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Bold"
      >
        <strong>B</strong>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-1 ${editor.isActive('italic') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Italic"
      >
        <em>I</em>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={`p-1 ${editor.isActive('strike') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Strikethrough"
      >
        <s>S</s>
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleCode().run()}
        className={`p-1 ${editor.isActive('code') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Code"
      >
        <code>〈/〉</code>
      </button>

      {/* Headings */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={`p-1 ${editor.isActive('heading', { level: 1 }) ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Heading 1"
      >
        H1
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={`p-1 ${editor.isActive('heading', { level: 2 }) ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Heading 2"
      >
        H2
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        className={`p-1 ${editor.isActive('heading', { level: 3 }) ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Heading 3"
      >
        H3
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        className={`p-1 ${editor.isActive('heading', { level: 4 }) ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Heading 4"
      >
        H4
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        className={`p-1 ${editor.isActive('heading', { level: 5 }) ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Heading 5"
      >
        H5
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        className={`p-1 ${editor.isActive('heading', { level: 6 }) ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Heading 6"
      >
        H6
      </button>

      {/* Lists */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1 ${editor.isActive('bulletList') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Bullet List"
      >
        • List
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1 ${editor.isActive('orderedList') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Ordered List"
      >
        1. List
      </button>

      {/* Block Elements */}
      <button
        type="button"
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={`p-1 ${editor.isActive('blockquote') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Blockquote"
      >
        ❝
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().setHorizontalRule().run()}
        className="p-1 bg-white rounded"
        title="Horizontal Rule"
      >
        —
      </button>

      {/* Paragraph */}
      <button
        type="button"
        onClick={() => editor.chain().focus().setParagraph().run()}
        className={`p-1 ${editor.isActive('paragraph') ? 'bg-gray-300' : 'bg-white'} rounded`}
        title="Paragraph"
      >
        P
      </button>

      {/* Undo/Redo */}
      <button
        type="button"
        onClick={() => editor.chain().focus().undo().run()}
        className="p-1 bg-white rounded"
        disabled={!editor.can().undo()}
        title="Undo"
      >
        ↺
      </button>
      <button
        type="button"
        onClick={() => editor.chain().focus().redo().run()}
        className="p-1 bg-white rounded"
        disabled={!editor.can().redo()}
        title="Redo"
      >
        ↻
      </button>
    </div>
  );
};

const PlansPage: React.FC = () => {
  const { props } = usePage<PageProps>();
  const plans = props.plans ?? [];
  const flash = props.flash;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedPlan, setSelectedPlan] = useState<SubscriptionPlan | null>(null);
  const itemsPerPage = 5;

  const {
    data: createData,
    setData: setCreateData,
    post,
    processing: createProcessing,
    reset: resetCreate,
    errors: createErrors,
  } = useForm({
    title: '',
    sub_title: '',
    icon: '',
    monthly_price: 0,
    annual_price: 0,
    features: '',
    is_most_popular: false,
    message: '',
  });

  const createEditor = useEditor({
    extensions: [StarterKit],
    content: createData.features,
    onUpdate: ({ editor }) => setCreateData('features', editor.getHTML()),
  });

  const {
    data: updateData,
    setData: setUpdateData,
    put,
    processing: updateProcessing,
    reset: resetUpdate,
    errors: updateErrors,
  } = useForm<SubscriptionPlan>({
    id: 0,
    title: '',
    sub_title: '',
    icon: '',
    monthly_price: 0,
    annual_price: 0,
    features: '',
    is_most_popular: false,
    message: '',
  });

  const updateEditor = useEditor({
    extensions: [StarterKit],
    content: updateData.features,
    onUpdate: ({ editor }) => setUpdateData('features', editor.getHTML()),
  });

  const handleEditClick = (plan: SubscriptionPlan) => {
    setSelectedPlan(plan);
    setUpdateData({ ...plan, icon: plan.icon || '', message: plan.message || '' });
    updateEditor?.commands.setContent(plan.features);
    setIsModalOpen(true);
  };

  const totalPages = Math.ceil(plans.length / itemsPerPage);
  const paginatedPlans = useMemo(() => {
    const start = (currentPage - 1) * itemsPerPage;
    return plans.slice(start, start + itemsPerPage);
  }, [plans, currentPage]);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  const stripHtml = (html: string): string => {
    const tmp = document.createElement('div');
    tmp.innerHTML = html;
    return tmp.textContent || tmp.innerText || '';
  };

  const truncate = (text: string, length: number): string => {
    return text.length > length ? text.substring(0, length) + '...' : text;
  };

  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    post(route('admin.subscription-plans.store'), {
      onSuccess: () => {
        resetCreate();
        createEditor?.commands.setContent('');
      },
      preserveScroll: true,
    });
  };

  const handleUpdateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedPlan) {
      put(route('admin.subscription-plans.update', selectedPlan.id), {
        onSuccess: () => {
          setIsModalOpen(false);
          resetUpdate();
          updateEditor?.commands.setContent('');
        },
        preserveScroll: true,
      });
    }
  };

  const handleDelete = (planId: number) => {
    if (confirm('Are you sure you want to delete this plan?')) {
      router.delete(route('admin.subscription-plans.destroy', planId), { preserveScroll: true });
    }
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Admin - Manage Subscription Plans" />
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Manage Subscription Plans</h1>

          {flash?.success && (
            <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg">{flash.success}</div>
          )}
          {flash?.error && <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-lg">{flash.error}</div>}

          <div className="mb-8 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700 mb-4">Create New Plan</h2>
            <form onSubmit={handleCreateSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-600">Title</label>
                <input
                  type="text"
                  value={createData.title}
                  onChange={(e) => setCreateData('title', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                {createErrors.title && <p className="text-red-500 text-sm mt-1">{createErrors.title}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Subtitle</label>
                <input
                  type="text"
                  value={createData.sub_title}
                  onChange={(e) => setCreateData('sub_title', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                {createErrors.sub_title && <p className="text-red-500 text-sm mt-1">{createErrors.sub_title}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Icon (optional)</label>
                <input
                  type="text"
                  value={createData.icon}
                  onChange={(e) => setCreateData('icon', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  placeholder="e.g., fa-star"
                />
                {createErrors.icon && <p className="text-red-500 text-sm mt-1">{createErrors.icon}</p>}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Monthly Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={createData.monthly_price}
                  onChange={(e) => setCreateData('monthly_price', e.target.valueAsNumber || 0)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                {createErrors.monthly_price && (
                  <p className="text-red-500 text-sm mt-1">{createErrors.monthly_price}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">Annual Price</label>
                <input
                  type="number"
                  step="0.01"
                  value={createData.annual_price}
                  onChange={(e) => setCreateData('annual_price', e.target.valueAsNumber || 0)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                  required
                />
                {createErrors.annual_price && (
                  <p className="text-red-500 text-sm mt-1">{createErrors.annual_price}</p>
                )}
              </div>
              <div className="flex items-center">
                <label className="block text-sm font-medium text-gray-600 mr-2">Most Popular</label>
                <input
                  type="checkbox"
                  checked={createData.is_most_popular}
                  onChange={(e) => setCreateData('is_most_popular', e.target.checked)}
                  className="h-4 w-4"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Message (optional)</label>
                <input
                  type="text"
                  value={createData.message}
                  onChange={(e) => setCreateData('message', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg"
                />
                {createErrors.message && <p className="text-red-500 text-sm mt-1">{createErrors.message}</p>}
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-600">Features</label>
                <TiptapToolbar editor={createEditor} />
                <EditorContent editor={createEditor} className="w-full border border-gray-300 rounded-lg p-2" />
                {createErrors.features && <p className="text-red-500 text-sm mt-1">{createErrors.features}</p>}
              </div>
              <div className="md:col-span-2">
                <button
                  type="submit"
                  disabled={createProcessing}
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:bg-gray-400"
                >
                  {createProcessing ? 'Creating...' : 'Create Plan'}
                </button>
              </div>
            </form>
          </div>

          {plans.length > 0 && (
            <div className="overflow-x-auto bg-white shadow-md rounded-lg">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-gray-100 text-gray-600 uppercase text-sm">
                    <th className="py-4 px-6">Title</th>
                    <th className="py-4 px-6">Subtitle</th>
                    <th className="py-4 px-6">Monthly Price</th>
                    <th className="py-4 px-6">Annual Price</th>
                    <th className="py-4 px-6 text-center">Most Popular</th>
                    <th className="py-4 px-6">Features Summary</th>
                    <th className="py-4 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {paginatedPlans.map((plan) => (
                    <tr key={plan.id} className="border-b hover:bg-gray-50">
                      <td className="py-4 px-6">{plan.title}</td>
                      <td className="py-4 px-6">{plan.sub_title}</td>
                      <td className="py-4 px-6">${plan.monthly_price.toFixed(2)}</td>
                      <td className="py-4 px-6">${plan.annual_price.toFixed(2)}</td>
                      <td className="py-4 px-6 text-center">{plan.is_most_popular ? 'Yes' : 'No'}</td>
                      <td className="py-4 px-6">{truncate(stripHtml(plan.features), 50)}</td>
                      <td className="py-4 px-6 text-center space-x-2">
                        <button
                          onClick={() => handleEditClick(plan)}
                          className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDelete(plan.id)}
                          className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-between items-center p-4 border-t">
                <button
                  onClick={() => handlePageChange(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
                >
                  Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                  onClick={() => handlePageChange(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md disabled:opacity-50"
                >
                  Next
                </button>
              </div>
            </div>
          )}

          {isModalOpen && selectedPlan && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-2xl max-h-[80vh] overflow-y-auto">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Update Plan</h2>
                <form onSubmit={handleUpdateSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Title</label>
                    <input
                      type="text"
                      value={updateData.title}
                      onChange={(e) => setUpdateData('title', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      required
                    />
                    {updateErrors.title && <p className="text-red-500 text-sm mt-1">{updateErrors.title}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Subtitle</label>
                    <input
                      type="text"
                      value={updateData.sub_title}
                      onChange={(e) => setUpdateData('sub_title', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      required
                    />
                    {updateErrors.sub_title && <p className="text-red-500 text-sm mt-1">{updateErrors.sub_title}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Icon (optional)</label>
                    <input
                      type="text"
                      value={updateData.icon || ''}
                      onChange={(e) => setUpdateData('icon', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      placeholder="e.g., fa-star"
                    />
                    {updateErrors.icon && <p className="text-red-500 text-sm mt-1">{updateErrors.icon}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Monthly Price</label>
                    <input
                      type="number"
                      step="0.01"
                      value={updateData.monthly_price}
                      onChange={(e) => setUpdateData('monthly_price', e.target.valueAsNumber || 0)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      required
                    />
                    {updateErrors.monthly_price && (
                      <p className="text-red-500 text-sm mt-1">{updateErrors.monthly_price}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-600">Annual Price</label>
                    <input
                      type="number"
                      step="0.01"
                      value={updateData.annual_price}
                      onChange={(e) => setUpdateData('annual_price', e.target.valueAsNumber || 0)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                      required
                    />
                    {updateErrors.annual_price && (
                      <p className="text-red-500 text-sm mt-1">{updateErrors.annual_price}</p>
                    )}
                  </div>
                  <div className="flex items-center">
                    <label className="block text-sm font-medium text-gray-600 mr-2">Most Popular</label>
                    <input
                      type="checkbox"
                      checked={updateData.is_most_popular}
                      onChange={(e) => setUpdateData('is_most_popular', e.target.checked)}
                      className="h-4 w-4"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600">Message (optional)</label>
                    <input
                      type="text"
                      value={updateData.message || ''}
                      onChange={(e) => setUpdateData('message', e.target.value)}
                      className="w-full p-2 border border-gray-300 rounded-lg"
                    />
                    {updateErrors.message && <p className="text-red-500 text-sm mt-1">{updateErrors.message}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600">Features</label>
                    <TiptapToolbar editor={updateEditor} />
                    <EditorContent editor={updateEditor} className="w-full border border-gray-300 rounded-lg p-2" />
                    {updateErrors.features && <p className="text-red-500 text-sm mt-1">{updateErrors.features}</p>}
                  </div>
                  <div className="md:col-span-2 flex justify-end gap-2">
                    <button
                      type="button"
                      onClick={() => setIsModalOpen(false)}
                      className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={updateProcessing}
                      className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-gray-400"
                    >
                      {updateProcessing ? 'Saving...' : 'Save Changes'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
};

export default PlansPage;