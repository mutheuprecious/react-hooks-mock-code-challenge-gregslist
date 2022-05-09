import React, { useState, useEffect } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then((res) => res.json())
      .then((res) => setListings(res));
  }, []);
  function handleDeleteListing(listingId) {
    fetch(`http://localhost:6001/listings/${listingId}`, { method: "DELETE" })
      .then((res) => res.json())
      .then(() =>
        setListings(listings.filter((listing) => listing.id !== listingId))
      );
  }
  const listingsToShow = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearchListing={setSearch} />
      <ListingsContainer
        listings={listingsToShow}
        onDeleteListing={handleDeleteListing}
      />
    </div>
  );
}

export default App;
