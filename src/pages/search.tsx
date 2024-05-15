import React from "react";
import CategoryProduct from "@/components/category-product/category-product";
import useCategoryInfo, { Product } from "@/hooks/useCategoryInfo";
import SearchInput from "@/components/search/searchInput";
import Head from "next/head";
import { GetServerSideProps } from "next";
import Api from "@/api";

interface Props {
  products: Product[];
  pagesCount: number;
}

function Search({ products, pagesCount }: Props) {
  const { onPageChange, currentPage, loading } = useCategoryInfo();

  return (
    <div className="px-[252px]  gap-10 max-sm:gap-6 mt-10  max-sm:mt-6 mb-10  max-lg:px-[142px] max-md:px-[73px] max-sm:px-[16px] flex flex-col items-center">
      <Head>
        <title>TIFFI</title>
      </Head>
      <div className="w-full flex flex-col gap-4">
        <SearchInput />
        <h2 className="font-lora">Результаты поиска</h2>
      </div>
      <CategoryProduct
        products={products}
        loading={loading}
        onPageChange={onPageChange}
        totalPages={pagesCount}
        currentPage={currentPage}
      />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { query: searchItem } = query;

  try {
    const products = await Api.product.GetSearchProduct(searchItem as string);

    return {
      props: {
        products: products.data.items,
        pagesCount: Math.ceil(products.data.count)
      }
    };
  } catch (error) {
    return {
      props: {
        error: "An error occurred while fetching data."
      }
    };
  }
};

export default Search;
