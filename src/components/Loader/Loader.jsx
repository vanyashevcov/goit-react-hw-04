const LoadMoreBtn = ({ children, onClick, disabled }) => {
  return (
    <div onClick={onClick} disabled={disabled}>
      {children}
    </div>
  );
};
export default LoadMoreBtn;
