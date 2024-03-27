import { useRouter } from "next/router";
import Woman from "./for-woman";
import Man from "./for-man";

const GenderPage = () => {
  const router = useRouter();
  const { gender } = router.query;
  return (
    <div>
      <h1>
        {gender === "woman" ? (
          <div>
            <Woman />
          </div>
        ) : (
          <div>
            <Man />
          </div>
        )}
      </h1>
    </div>
  );
};

export default GenderPage;
