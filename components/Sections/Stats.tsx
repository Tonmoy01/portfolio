export default function Stats() {
  return (
    <section className='mb-24 animate-enter delay-75 border-y border-zinc-900 py-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
        <div>
          <span className='block text-3xl font-semibold text-white tracking-tight mb-1'>
            5+
          </span>
          <span className='text-xs text-zinc-500 font-medium uppercase tracking-wide'>
            Years Experience
          </span>
        </div>
        <div>
          <span className='block text-3xl font-semibold text-white tracking-tight mb-1'>
            42
          </span>
          <span className='text-xs text-zinc-500 font-medium uppercase tracking-wide'>
            Projects Shipped
          </span>
        </div>
        <div>
          <span className='block text-3xl font-semibold text-white tracking-tight mb-1'>
            100%
          </span>
          <span className='text-xs text-zinc-500 font-medium uppercase tracking-wide'>
            Job Success
          </span>
        </div>
        <div>
          <span className='block text-3xl font-semibold text-white tracking-tight mb-1'>
            20k+
          </span>
          <span className='text-xs text-zinc-500 font-medium uppercase tracking-wide'>
            Lines of Code
          </span>
        </div>
      </div>
    </section>
  );
}
