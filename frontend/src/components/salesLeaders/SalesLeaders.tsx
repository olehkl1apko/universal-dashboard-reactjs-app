import "./salesLeaders.scss";
import { ISalesLeader } from "../../modules/salesLeaders.ts";

type Props = {
  data: ISalesLeader[];
};

const SalesLeaders = ({ data }: Props) => {
  return (
    <div className="sales-leaders">
      <h1>Top Deals</h1>
      <div className="list">
        {data.map((user) => (
          <div className="listItem" key={user.id}>
            <div className="user">
              <img src={user.img} alt="" />
              <div className="userTexts">
                <span className="username">{user.username}</span>
                <span className="email">{user.email}</span>
              </div>
            </div>
            <span className="amount">${user.amount}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalesLeaders;
