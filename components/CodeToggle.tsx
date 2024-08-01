// components/CodeToggle.tsx
import React, { useState } from 'react';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

interface CodeToggleProps {
  code: string;
  scope?: Record<string, any>;
}

const CodeToggle = ({ code, scope}: CodeToggleProps) => {
  const [showCode, setShowCode] = useState(false);

  const toggleCode = () => setShowCode(prev => !prev);

  return (
    <div className='my-4 border py-2 px-2 rounded-md bg-gray-100'>
      <button onClick={toggleCode} className='px-4 py-2 border bg-gray-300 rounded-md mb-2'>
        {showCode ? 'Hide Code' : 'Show Code'}
      </button>
      <LiveProvider code={code} scope={{ React, useState, ...scope }}>
        <LivePreview className="border px-2 py-2 rounded-md bg-white"/>
        {showCode && (
          <>
            <LiveEditor className="border px-2 py-2 rounded-md bg-white mt-2"/>
          </>
        )}
      </LiveProvider>
    </div>
  );
};

export default CodeToggle;
