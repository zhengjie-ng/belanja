import styles from "./RewardRedeemSuccessPage.module.css";
import { useParams } from "react-router-dom";
import rewardsData from "../data/Rewards";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

function RewardRedeemSuccessPage() {
  const { rewardId } = useParams();
  const reward = rewardsData.find((reward) => reward.rewardId === rewardId);
  const navigate = useNavigate();

  return (
    <div className={styles.divMain}>
      <h2 className={styles.h2BelanjaPay}>Redeem Successful</h2>
      <h2 className={styles.h2MerchantName}>{reward.name}</h2>
      <motion.p
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        className={styles.pTick}
      >
        ✔
      </motion.p>
      <button
        className={styles.buttonBelanja}
        onClick={() => navigate("/myRewards/")}
      >
        Go to My Rewards
      </button>
      <button
        className={styles.buttonSplit}
        onClick={() => navigate("/rewards/")}
      >
        Back
      </button>
    </div>
  );
}

export default RewardRedeemSuccessPage;
