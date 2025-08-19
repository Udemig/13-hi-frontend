import { IoMdClose } from "react-icons/io";

const Preview = ({ url, isLoading, close }) => {
  return (
    url && (
      <div className="relative mb-5">
        <button
          onClick={close}
          disabled={isLoading}
          type="button"
          className="absolute top-3 cursor-pointer end-3 text-2xl p-1 hover:bg-zinc-700 transition disabled:cursor-not-allowed bg-primary/90 rounded-lg"
        >
          <IoMdClose />
        </button>

        <img src={url} alt="preview" className="rounded-md" />
      </div>
    )
  );
};

export default Preview;
