const RunningItem = () => {
  return (
    <div className='flex items-center gap-4'>
      <div className='bg-slate-1 rounded-3xl aspect-square flex items-center p-4'>
        <img
          className='w-15 rotate-20'
          src="/bowl.png"
          alt=""
        />
      </div>
      <div className='font-sans'>
        <p className='font-bold text-xl underline mb-2'>Meal Pad</p>
        <p className='font-semibold'>2023 kholishafid</p>
      </div>
    </div>
  );
}

export default RunningItem;