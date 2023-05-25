const RunningText = ({ text }: { text: string }) => {
  return (
    <section className="py-4">
      <div className='running-wrapper'>
        <div className='running-item'>
          <h2 className='font-sans font-semibold uppercase text-lg'>
            {text}
          </h2>

          <h2 className='font-sans font-semibold uppercase text-lg'>
            {text}
          </h2>

          <h2 className='font-sans font-semibold uppercase text-lg'>
            {text}
          </h2>

          <h2 className='font-sans font-semibold uppercase text-lg'>
            {text}
          </h2>
        </div>
      </div>
    </section>
  );
}

export default RunningText;