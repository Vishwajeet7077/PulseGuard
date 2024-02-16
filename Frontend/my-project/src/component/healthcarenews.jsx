import React, { useState, useEffect } from "react";

function HeartHealthNews() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        // Fetch news related to heart health
        fetchHeartHealthNews();
    }, []);

    const fetchHeartHealthNews = async () => {
        try {
            // Make an API call to fetch news related to heart health using NewsAPI
            const response = await fetch("https://newsapi.org/v2/everything?q=heart&apiKey=b41e3858a432466b92810434d12bab48");
            if (!response.ok) {
                throw new Error("Failed to fetch news");
            }
            const data = await response.json();
            setNews(data.articles);
        } catch (error) {
            console.error("Error fetching news:", error);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold mb-4">Heart Health News</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {news.map((article, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-4">
                        <img src={article.urlToImage} alt={article.title} className="w-full h-48 object-cover mb-4" />
                        <h3 className="text-lg font-semibold mb-2">{article.title}</h3>
                        <p className="text-gray-700">{article.description}</p>
                        <a href={article.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 block mt-2">Read more</a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default HeartHealthNews;
