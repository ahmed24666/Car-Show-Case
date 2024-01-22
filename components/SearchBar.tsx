"use client";
import React, { useState } from "react";
import { SearchManufacturer } from ".";
import Image from "next/image";
import { useRouter } from "next/navigation";

const SearchButton = ({ otherClasses }: { otherClasses: string }) => (
  <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
    <Image
      src="/magnifying-glass.svg"
      alt="glass"
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);
const SearchBar = () => {
  const [manufacturar, setmanufacturar] = useState("");
  const [model, setmodel] = useState("");
  const router = useRouter();
  const updateSearchParam = (model: string, manufacturar: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    if (model) {
      searchParams.set("model", model);
    } else {
      searchParams.delete("model");
    }
    if (manufacturar) {
      searchParams.set("manufacturar", manufacturar);
    } else {
      searchParams.delete("manufacturar");
    }
    const newPathQuery = window.location.pathname + "?" + searchParams.toString();
    router.push(newPathQuery);
  };
  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!manufacturar || !model) {
      return alert(`Please Fill the Search Bar`);
    }
    updateSearchParam(model.toLowerCase(), manufacturar.toLowerCase());
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturar}
          setManuFacturer={setmanufacturar}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <div className="searchbar__item">
        <Image
          src="/model-icon.png"
          alt="model"
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
        />
        <input
          type="text"
          name="model"
          value={model}
          placeholder="Tiguan"
          className="searchbar__input"
          onChange={(e) => setmodel(e.target.value)}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
};

export default SearchBar;
