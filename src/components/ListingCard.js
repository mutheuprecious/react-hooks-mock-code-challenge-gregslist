import React, { useState } from "react";

function ListingCard({
  listing: { description, image, location,id },
  onDeleteListing,
}) {
  const [favourite, setFavourite] = useState(false);
  function handleFavourite() {
    setFavourite((fav) => !fav);
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {
          <button
            onClick={handleFavourite}
            className={
              favourite
                ? "emoji-button favorite active"
                : "emoji-button favorite"
            }
          >
            {favourite ? "★" : "☆"}
          </button>
        }
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => onDeleteListing(id)} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
