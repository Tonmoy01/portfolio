export default function Stats() {
  return (
    <section className='mb-24 animate-enter delay-75 border-y border-zinc-900 py-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        <div>
          <span className='block text-4xl font-bold text-white tracking-tight mb-2'>
            2+
          </span>
          <span className='text-base text-zinc-500 font-medium uppercase tracking-wide'>
            Years Frontend Development
          </span>
        </div>
        <div>
          <span className='block text-4xl font-bold text-white tracking-tight mb-2'>
            20+
          </span>
          <span className='text-base text-zinc-500 font-medium uppercase tracking-wide'>
            Projects Deployed to Production
          </span>
        </div>
        <div>
          <span className='block text-4xl font-bold text-white tracking-tight mb-2'>
            5+
          </span>
          <span className='text-base text-zinc-500 font-medium uppercase tracking-wide'>
            Live Products Actively Used
          </span>
        </div>
        <div>
          <span className='block text-4xl font-bold text-white tracking-tight mb-2'>
            3+
          </span>
          <span className='text-base text-zinc-500 font-medium uppercase tracking-wide'>
            Tech Stacks · React · Next · Node
          </span>
        </div>
      </div>
    </section>
  );
}
