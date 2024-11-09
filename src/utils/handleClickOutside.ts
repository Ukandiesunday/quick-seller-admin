export const handleClickOutside = (event: any, ref: any, close: any) => {
  if (ref.current && !ref.current.contains(event.target)) {
    close(false); // Close the modal
  }
};
