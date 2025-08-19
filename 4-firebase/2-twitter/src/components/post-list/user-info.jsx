import { getUserName } from "../../utils/helper";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import "dayjs/locale/tr";
import { MdEdit } from "react-icons/md";

// dayjs kurulum
dayjs.extend(relativeTime);

const UserInfo = ({ tweet }) => {
  // tarihi date formatına çevir
  let date = tweet.createdAt?.toDate();

  // tarihin bugünden uzaklığını hespala
  date = dayjs(date).locale("tr").fromNow();

  return (
    <div className="flex gap-2 items-center whitespace-nowrap text-gray-400">
      <p className="text-white font-semibold">{tweet.user.name}</p>
      <p className="text-sm">{getUserName(tweet.user.name)}</p>
      <p className="text-sm">{date}</p>

      {tweet.isEdited && (
        <div>
          <MdEdit className="md:hidden" />
          <span className="max-md:hidden text-sm">* düzenlendi</span>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
