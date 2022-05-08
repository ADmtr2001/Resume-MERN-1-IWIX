import dayjs from "dayjs";

const formatDate = (date: string) => {
  return dayjs(date).format("MMM d, YYYY HH:mm:ss");
};

export default formatDate;
