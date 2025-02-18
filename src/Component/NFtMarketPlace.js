import React, { useState } from "react";

const tabs = ["NFTs", "Collections", "Creators"];
const filters = ["All", "Art", "Music", "Gaming", "PFPs", "Photography"];
const sortingOptions = ["Price - Low to High", "Price - High to Low"];

const nfts = [
  { id: 1, name: "Corrupted Angel", price: 1.2, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 2, name: "Dark Lunatics", price: 1.5, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 3, name: "Neon Cyber", price: 2.0, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 4, name: "Mystic Realms", price: 1.8, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 5, name: "Pixel Dungeon", price: 1.1, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 6, name: "Ghost Shadows", price: 1.6, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 7, name: "Synth City", price: 2.3, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 8, name: "Anime Galaxy", price: 1.4, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
];
const collections = [
  { id: 1, name: "Corrupted Angel", price: 1.2, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 2, name: "Dark Lunatics", price: 1.5, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 3, name: "Neon Cyber", price: 2.0, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 4, name: "Mystic Realms", price: 1.8, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 5, name: "Pixel Dungeon", price: 1.1, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 6, name: "Ghost Shadows", price: 1.6, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 7, name: "Synth City", price: 2.3, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
  { id: 8, name: "Anime Galaxy", price: 1.4, image: "https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2021%2F10%2Fbored-ape-yacht-club-nft-3-4-million-record-sothebys-metaverse-1.jpg?q=90&w=1400&cbr=1&fit=max" },
];

const NFTMarketplace = () => {
  const [activeTab, setActiveTab] = useState("NFTs");
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [selectedSort, setSelectedSort] = useState(sortingOptions[0]);

  const filteredNFTs = nfts.filter((nft) => selectedFilter === "All" || nft.name.includes(selectedFilter));

  const sortedNFTs = [...filteredNFTs].sort((a, b) => {
    return selectedSort === "Price - Low to High" ? a.price - b.price : b.price - a.price;
  });

  return (
    <div className="bg-gray-50 min-h-screen py-10 w-full">
      {/* 🔹 Top Navigation Bar */}
     

      {/* 🔹 Main Section */}
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold my-6 text-center text-gray-900">
          Welcome to the NFT Marketplace 🎨✨
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Browse, collect, and own digital assets from the best creators around the world.
        </p>

        {/* 🔹 Filter & Sorting Section */}
        <div className="flex flex-wrap justify-between items-center mb-6">
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedFilter === filter
                    ? "bg-blue-500 text-white shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                }`}
                onClick={() => setSelectedFilter(filter)}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Sorting Dropdown */}
          <select
            className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium cursor-pointer shadow-sm hover:bg-gray-300"
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value)}
          >
            {sortingOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        {/* 🔹 NFT Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {sortedNFTs.map((nft) => (
            <div
              key={nft.id}
              className="bg-white shadow-lg rounded-2xl overflow-hidden p-4 transform transition-all hover:scale-105"
            >
              <img
                src={nft.image}
                alt={nft.name}
                className="w-full h-52 object-cover rounded-lg"
              />
              <div className="mt-4 text-center">
                <h3 className="text-lg font-semibold text-gray-900">{nft.name}</h3>
                <p className="text-sm text-gray-600">{nft.price} ETH</p>
                <button className="w-full mt-3 py-2 bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-all">
                  Buy Now 🚀
                </button>
              </div>
            </div>
          ))}
        </div>

        {sortedNFTs.length === 0 && (
          <div className="text-center text-gray-500 mt-10">No NFTs found. Try a different category! 🧐</div>
        )}
      </div>
    </div>
  );
};

export default NFTMarketplace;
