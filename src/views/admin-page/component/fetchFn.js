import * as Api from "../../api.js";

export async function fetchData() {
    const res = await fetch('../../db/mockBooks_1.json');
    const data = await res.json();
    return data;
  }


export async function fetchOrders() {
    const orders = await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/order/");
    console.log(orders);
    return orders;
}


export async function fetchCategory() {
    const categories = await Api.get("https://eladin-lgurfdxfjq-du.a.run.app/api/category");
    console.log(categories);
    return categories;
}