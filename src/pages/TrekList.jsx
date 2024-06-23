import React from "react";
import Header from "../components/Header";
import SearchList from "../components/SearchList";
import { useLocation } from "react-router-dom";
import TempSpace from "../components/TempSpace";

function TrekList() {
  return (
    <div>
      <TempSpace />
      <Header type="list" />
      <SearchList />
    </div>
  );
}

export default TrekList;
