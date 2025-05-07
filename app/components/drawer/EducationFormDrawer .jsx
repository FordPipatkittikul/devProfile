"use client"

import React from 'react';

const EducationFormDrawer = ({
  isEdit,
  isOpen,
  closeMenu,
  onSubmit,
  onDelete,
  isLoading,
  formTitle,
  submitButtonLabel
}) => {
  return (
    <div
      className={`fixed right-0 top-0 w-[5in] h-screen bg-white shadow-lg transition-all duration-300 z-20 overflow-y-auto ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold">{formTitle}</h2>
          <button onClick={closeMenu} className="text-gray-500 hover:text-gray-700">
            <svg
              className="cursor-pointer"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-xl font-medium mb-1">Degree type</label>
              <p className="text-gray-500 text-sm mb-2">
                Example: Bachelor of Science in Computer Science or PhD in Computer Science
              </p>
              <input
                type="text"
                name="degree"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-xl font-medium mb-1">Institution</label>
              <input
                type="text"
                name="institute"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-xl font-medium mb-1">GPA</label>
              <input
                type="number"
                name="gpa"
                step="any"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
            <div>
              <label className="block text-xl font-medium mb-1">Graduation</label>
              <p className="text-gray-500 text-sm mb-2">
                Example: Expected May 2030 
              </p>
              <input
                type="text"
                name="graduation"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
              />
            </div>
          </div>

          <div>
            <label className="block text-xl font-medium mb-1">Related courseworks</label>
            <p className="text-gray-500 text-sm mb-2">
              Example: Intro to python, Intro to javascript, Intro to react
            </p>
            <textarea
              name="relatedCourseWorks"
              rows="4"
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--primary)]"
            />
          </div>

          <div className="flex justify-start space-x-3 pt-4">
            <button type="button" onClick={closeMenu} className="cursor-pointer btn btn-outline">
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="cursor-pointer btn"
            >
              {submitButtonLabel}
            </button>
            {
              isEdit ? (
                <button 
                  className="p-2 text-red-500 hover:text-red-700 cursor-pointer ml-auto"
                  disabled={isLoading}
                  onClick={ () => {
                    onDelete()
                  }
                }
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="3 6 5 6 21 6"></polyline>
                      <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      <line x1="10" y1="11" x2="10" y2="17"></line>
                      <line x1="14" y1="11" x2="14" y2="17"></line>
                  </svg>
                </button>
              ) : (
                <></>
              )
            }

          </div>
        </form>
      </div>
    </div>
  );
};

export default EducationFormDrawer;
