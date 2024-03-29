import ForWomen from "./for-woman";
import ForMen from "../../components/GenderPage";
import { Category } from "@/hooks/useHeaderInfo";
interface Gender {
  gender: string;
  categories: Category[];
}
const GenderPage = ({ gender, categories }: Gender) => {
  return (
    <div>
      <ForMen categories={categories} gender={gender} />
    </div>
  );
};
export async function getStaticPaths() {
  return {
    paths: [{ params: { gender: "woman" } }, { params: { gender: "man" } }],
    fallback: false
  };
}

export async function getStaticProps({ params }: any) {
  const { gender } = params;

  const rspJson = await fetch(`https://api.tiffi.store/categories/tree?gender=${gender}`);
  const rsp = await rspJson.json();

  return {
    props: {
      gender,
      categories: rsp.data.items
    }
  };
}
export default GenderPage;
