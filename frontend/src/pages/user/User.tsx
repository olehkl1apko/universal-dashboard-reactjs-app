import { DescriptionItem } from "../../components";
import { descriptionUser } from "../../modules";

const User = () => {
  //Using API - fetch data and send to DescriptionItem

  return <DescriptionItem data={descriptionUser} />;
};

export default User;
