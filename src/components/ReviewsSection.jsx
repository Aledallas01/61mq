// src/components/ReviewsSection.jsx
import React, { useEffect, useState } from "react";
import { ApifyClient } from "apify-client";

const ReviewsSection = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      const client = new ApifyClient({
        token: "<YOUR_API_TOKEN>", // Sostituisci con il tuo API Token
      });

      const input = {
        searchStringsArray: ["61 MetriQuadri Vimercate"],
        maxPlaces: 1,
      };

      try {
        const run = await client
          .actor("tri_angle/restaurant-review-aggregator")
          .call(input);
        const { items } = await client
          .dataset(run.defaultDatasetId)
          .listItems();
        setReviews(items);
      } catch (error) {
        console.error("Errore nel recupero delle recensioni:", error);
      }
    };

    fetchReviews();
  }, []);

  return (
    <section id="recensioni">
      <h2>Recensioni dei Clienti</h2>
      <div className="recensioni-container">
        {reviews.map((review, index) => (
          <div key={index} className="recensione">
            <p className="testo">{review.text}</p>
            <p className="autore">- {review.reviewerName}</p>
            <p className="fonte">Fonte: {review.source}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection;
