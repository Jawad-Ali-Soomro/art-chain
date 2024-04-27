import React, { useState, useEffect } from "react";
import "../styles/explore.scss";
import { base_art_url } from "../constants/base_url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BiFilter, BiMedal } from "react-icons/bi";

const Explore = () => {
  const navigate = useNavigate();
  const [coming_data, set_data] = useState([]);
  const get_data = async () => {
    await axios
      .get(`${base_art_url}/get/arts`)
      .then((res) => set_data(res.data.data));
  };
  useEffect(() => {
    get_data();
  });
  return (
    <div className="explore-wrap flex col">
      <div className="bottom flex">
        <p className="found-text">{coming_data?.length} results found</p>
        <div className="right flex">
          {coming_data?.map((art) => {
            return (
              <div
                className="card"
                onClick={() => navigate(`/art/${art._id}`)}
                key={art?._id}
              >
                <img className="main-img" src={art.ipfs_hash} alt="" />
                <div className="details-wrap">
                  <h2>{art?.title}</h2>
                  <div className="price-wrap flex col">
                    <p>Price</p>
                    <h3>{art?.price} ETH</h3>
                    {art?.price >= 100 ? (
                      <div className="tag flex">
                        <p>RARE</p>
                      </div>
                    ) : (
                      this
                    )}
                  </div>
                  <div className="owner-wrap flex">
                    <img src={art?.owner?.avatar} alt="" />
                    <p>{art?.owner?.username}</p>
                    <div
                      className="medal flex"
                      style={{
                        background: `${
                          art?.owner?.digital_art?.length <= 5
                            ? "#d7d7d7"
                            : art?.owner?.digital_art?.length > 5
                            ? "goldenrod"
                            : ""
                        }`,
                        color: `${
                          art?.owner?.digital_art?.length <= 5
                            ? "black"
                            : "white"
                        }`,
                      }}
                    >
                      <BiMedal />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Explore;
