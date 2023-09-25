import { CategoryQuery, ProductQuery } from "@commercetools/types/query";

type GetProductQuery = {
	id?: string;
	sku?: string;
};

type ProductQueryQuery = Omit<
	ProductQuery,
	"filters" | "facets" | "sortAttributes" | "storeKey"
>;

type QueryProductCategoriesQuery = {
	limit?: number;
	cursor?: string;
	parentId?: string;
	slug?: string;
};

export { GetProductQuery, ProductQueryQuery, QueryProductCategoriesQuery };
