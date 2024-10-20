import { useState } from 'react';

const ClickToCopy = ({ text }) => {
  const [copySuccess, setCopySuccess] = useState(false); // Track copy success
  const [isJiggling, setIsJiggling] = useState(false); // Track jiggle animation

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(text); // Copy text to clipboard
      setCopySuccess(true); // Set success state to show the checkmark
      setIsJiggling(true); // Trigger jiggle animation
      setTimeout(() => {
        setIsJiggling(false); // Stop jiggle after animation ends
      }, 300); // Animation duration (300ms)

      // Optional: Reset the checkmark back to the copy icon after some time (e.g., 2 seconds)
      setTimeout(() => {
        setCopySuccess(false);
      }, 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
      setCopySuccess(false); // Handle error
    }
  };

  return (
    <div className='flex flex-row items-center'>
      <button
        onClick={handleCopyClick}
        className={`flex items-center justify-center p-2 rounded transition-transform duration-200 ${
          isJiggling ? 'animate-jiggle' : ''
        } hover:scale-110`} // Apply scaling on hover
        aria-label='Copy to clipboard'
      >
        <p className='mr-2'>{text}</p>
        {/* Conditional rendering of the icon based on copy success */}
        {copySuccess ? (
          // Checkmark Icon
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M5 12l5 5l10 -10' />
          </svg>
        ) : (
          // Copy Icon (shown initially and restored after reset)
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='20'
            height='20'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path stroke='none' d='M0 0h24v24H0z' fill='none' />
            <path d='M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z' />
            <path d='M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1' />
          </svg>
        )}
      </button>
    </div>
  );
};

export default ClickToCopy;
