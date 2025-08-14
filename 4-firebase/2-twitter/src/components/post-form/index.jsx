import FormActions from "./form-actions";
import Preview from "./preview";
import TextArea from "./text-area";
import UserAvatar from "./user-avatar";

const PostForm = ({ user }) => {
  return (
    <div className="border-b border-tw-gray p-4 flex gap-3">
      <UserAvatar photo={user?.photoURL} name={user?.displayName} />

      <form className="w-full pt-1">
        <TextArea />
        <Preview />
        <FormActions />
      </form>
    </div>
  );
};

export default PostForm;
