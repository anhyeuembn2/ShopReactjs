import { instance } from "./config";
export const SearchProducts = (value, id, sort) => {
    let url = `/products?q=${value}`;

    if (id) {
        url += `&categoryId=${id}`;
    }

    if (sort === "-sortPriceAsc") {
        url += "&_sort=price&_order=asc";
    } else if (sort === "-sortPriceDsc") {
        url += "&_sort=price&_order=desc";
    } else if (sort === "-sortNameAsc") {
        url += "&_sort=name&_order=asc";
    } else if (sort === "-sortNameDsc") {
        url += "&_sort=name&_order=desc";
    }

    return instance.get(url);
}