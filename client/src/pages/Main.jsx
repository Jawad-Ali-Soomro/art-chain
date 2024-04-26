import React, { useEffect, useState } from "react";
import "../styles/main.scss";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { base_art_url } from "../constants/base_url";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { BiBullseye, BiHappyHeartEyes, BiStreetView } from "react-icons/bi";

const Main = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [show_image, set_show_image] = useState(false);
  const [data, set_data] = useState();
  const get_data = async () => {
    await axios
      .get(`${base_art_url}/get/single/${id.id}`)
      .then((res) => set_data(res.data.data));
  };
  useEffect(() => {
    get_data();
  });
  return (
    <div className="flex col">
      <Helmet>
        <title>{`${data?.owner?.username}'s ${data?.title}`}</title>
      </Helmet>
      <Header />
      <div className="top flex">
        <div className="right flex col">
          <div className="views"></div>
          <h1>{data?.title}</h1>
          <div
            className="owner-info flex"
            onClick={() => navigate(`/profile/${data?.owner?._id}`)}
          >
            <div className="main flex">
              <img src={data?.owner?.avatar} alt="" />
              <p className="flex">
                {data?.owner?.username} <span>Owner</span>
              </p>
            </div>
          </div>
          <div className="price-info flex col">
            <p>Price</p>
            <h2>{data?.price} ETH</h2>
          </div>
          <button>BUY</button>
          <button>CHAT</button>
        </div>
        <div className="left flex" onClick={() => set_show_image(true)}>
          <img src={data?.ipfs_hash} alt="" />
        </div>
      </div>
      <div className="bottom">
        <div className="content flex col">
          <h2>Description</h2>
          <p>{data?.description}</p>
        </div>
        <div className="previous_owner_details flex col">
          <h1>Previous Owners</h1>
          <div className="flex" style={{ gap: "20px" }}>
            {data?.previous_owners?.map((image) => {
              return (
                <div
                  className="wrap flex"
                  key={image._id}
                  onClick={() => navigate(`/profile/${image?._id}`)}
                >
                  <img src={image?.avatar} alt="" />
                  <div className="line"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {show_image == true ? (
        <div className="fullscreen flex" onClick={() => set_show_image(false)}>
          <img src={data?.ipfs_hash} alt="" />
          <div className="icon" onClick={() => set_show_image(false)}>
            <div></div>
            <div></div>
          </div>
        </div>
      ) : (
        this
      )}
    </div>
  );
};

export default Main;
