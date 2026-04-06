import Link from 'next/link';

export default function Footer() {
  return (
    <footer className='border-t border-border-section pt-8 pb-8'>
      <div className='flex flex-col md:flex-row justify-between items-center text-sm text-text-faint'>
        <p>
          &copy; {new Date().getFullYear()} Md. Tonmoy Khan. All Right Reserved.
        </p>
        <div className='flex gap-6 mt-4 md:mt-0'>
          <a
            href='https://github.com/Tonmoy01'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-text-body transition-colors'
          >
            GitHub
          </a>
          <a
            href='https://www.linkedin.com/in/mdtonmoykhan/'
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-text-body transition-colors'
          >
            LinkedIn
          </a>
          <a
            href='mailto:mdtonmoykhan65@gmail.com'
            className='hover:text-text-body transition-colors'
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
