export default async function GetProducts() {
    const cachedData = localStorage.getItem("products");
    if (cachedData) {
        return JSON.parse(cachedData);
    }

    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();

    localStorage.setItem("products", JSON.stringify(data));
    return data;
}