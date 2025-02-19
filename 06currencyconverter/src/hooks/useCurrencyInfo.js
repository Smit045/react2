import { useEffect, useState } from 'react';

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return; // Prevent request if currency is empty

        const url = `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
                }
                return res.json();
            })
            .then((res) => setData(res[currency] || {})) // Ensure it handles missing data
            .catch((error) => console.error("Error fetching currency data:", error));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;