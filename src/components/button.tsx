const Button = ({ children, display }: { children: React.ReactNode, display?: 'inline' }) => {

  const displayVariant = () => {
    return display == 'inline' ? 'w-fit inline' : 'block mx-auto'
  }

  return (
    <button
      className={`bg-black text-white font-sans uppercase px-4 py-2 my-2 
      font-semibold rounded-sm border border-2 border-transparent
      active:(text-black bg-transparent border-black)
      hover:(text-black bg-white) ` + displayVariant()}
    >
      {children}
    </button >
  );
}

export default Button;