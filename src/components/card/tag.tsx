const Tag = ({ children }: { children: React.ReactNode }) => {
  return (
    <span
      className='pr-2'
    >
      # {children}
    </span>
  );
}

export default Tag;