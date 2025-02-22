import React from 'react';

export default function ResourceCard({ resource }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <h2 className="text-2xl font-bold text-primary mb-2">{resource.title}</h2>
      <p className="text-gray-600 mb-2">Creator: {resource.creator}</p>
      <p className="text-gray-700 mb-4 line-clamp-3">{resource.description}</p>
      <div className="flex justify-between items-center">
        <div className="flex flex-col gap-1">
          <span className="text-sm text-gray-500">Type: {resource.mediatype}</span>
          {resource.collection && (
            <span className="text-sm text-gray-500">
              Collection: {Array.isArray(resource.collection) ? resource.collection[0] : resource.collection}
            </span>
          )}
        </div>
        <a
          href={resource.url}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/90 transition-colors"
        >
          View Resource
        </a>
      </div>
    </div>
  );
}
