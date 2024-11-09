export interface TextInputProps {
  placeholder?: string;
  id?: string;
  register?: {};
  isError?: boolean | undefined;
  errorMessage?: string;
  type?: string;
}

const TextInput = ({
  placeholder,
  id,
  register,
  isError,
  errorMessage,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <input
        className="border border-[#E6E9EC] h-[50px] px-[25px] py-[10px] rounded-[10px] w-full block outline-none"
        type="text"
        id={id}
        name=""
        placeholder={placeholder}
        {...register}
      />
      {isError && (
        <p className="text-red-400 text-[14px] mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default TextInput;
