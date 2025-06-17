import "./FormButtonTest.css";

export const FormButtonTest = () => {
  return (
    <div>                                      
      <button
        type="button"
        className="form-button relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-md bg-[#e9905a] px-4 py-2 text-white"
      >
        Press Me!
      </button>
    </div>     
  );
};