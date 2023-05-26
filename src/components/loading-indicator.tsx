import LoadingIcon from '../assets/icon/timer.svg'

const LoadingIndicator = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-slate-1 z-5">
      <img src={LoadingIcon} className='animate-spin w-10' alt="mealpad timer" />
    </div>
  );
}

export default LoadingIndicator;