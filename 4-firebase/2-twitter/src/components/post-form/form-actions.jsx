import { IoImageOutline as Image } from "react-icons/io5";
import { MdOutlineGifBox as Gif } from "react-icons/md";
import { FaRegSmile as Smile } from "react-icons/fa";
import Loader from "../loader";

const FormActions = ({ isLoading, fileInputRef, handleImageChange }) => {
  return (
    <div className="flex justify-between">
      <div className="text-tw-blue text-xl flex gap-4">
        <label htmlFor="image" className="form-icon">
          <input
            ref={fileInputRef}
            name="image"
            id="image"
            type="file"
            className="hidden"
            onChange={handleImageChange}
          />
          <Image />
        </label>
        <button className="form-icon">
          <Gif />
        </button>
        <button className="form-icon">
          <Smile />
        </button>
      </div>

      <button disabled={isLoading} className="submit-button">
        {isLoading ? <Loader /> : "Gönder"}
      </button>
    </div>
  );
};

export default FormActions;
