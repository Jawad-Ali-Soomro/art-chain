import React, { useEffect, useState } from "react";
import "../styles/profile.scss";
import axios from "axios";
import { base_user_url } from "../constants/base_url";
import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import { Helmet } from "react-helmet";
import { BiCopy, BiDiamond, BiUserPlus } from "react-icons/bi";

const Profile = () => {
  const navigate = useNavigate();
  const id = useParams();
  const [user_data, set_user_data] = useState();
  const get_data = async () => {
    await axios
      .get(`${base_user_url}/get/user/${id.id}`)
      .then((res) => set_user_data(res.data.data));
  };
  useEffect(() => {
    get_data();
  });
  return (
    <div className="flex col">
      <Header />
      <Helmet>
        <title>{`${user_data?.username}`}'s Profile</title>
      </Helmet>
      <div className="profile-top flex">
        <div className="profile-left flex col">
          <div className="profile-main-information flex">
            <img src={user_data?.avatar} alt="" />
            <div className="profile-content flex col">
              <div className="username flex">
                <h3>{user_data?.username}</h3>
                <button className="flex">
                  follow
                </button>
              </div>
              <p>
                {user_data?.wallet_address.substring(0, 5)}...{" "}
                &nbsp;
                <BiCopy className="icon" />{" "}
              </p>
              <p>
                @{user_data?.handle} &nbsp;
                <BiCopy className="icon" />{" "}
              </p>
            </div>
          </div>
          <div className="follower-sect flex">
            <div className="flex">
              <h2>Followers</h2>
              <div className="line"></div>
              <h3>{user_data?.followers?.length}</h3>
            </div>
            <div className="flex">
              <h2>Following</h2>
              <div className="line"></div>
              <h3>{user_data?.following?.length}</h3>
            </div>
          </div>
          <div className="about-info flex col">
            <div className="top-info flex col">
              <h2 className="flex">
                <BiDiamond />
                Joined {user_data?.iat}
              </h2>
              <p>{user_data?.bio}</p>
            </div>
          </div>
        </div>
        <div
          className="profile-right flex"
          onClick={() => navigate(`/art/${user_data?.digital_art[0]?._id}`)}
        >
          <img src={user_data?.digital_art[0]?.ipfs_hash} alt="" />
        </div>
      </div>
      <div className="art-bottom flex col">
        <h1 data-after={`(${user_data?.digital_art?.length})`}>
          Art From <span>{user_data?.username}</span>
        </h1>
        <div className="art-main flex">
          {user_data?.digital_art?.map((art) => {
            return (
              <div
                className="card flex col"
                onClick={() => navigate(`/art/${art?._id}`)}
              >
                <img src={art?.ipfs_hash} alt="" />
                <h2>{art?.title}</h2>
                <div className="avatar-wrap flex">
                  <img src={user_data?.avatar} alt="" />
                  <p>{user_data?.username}</p>
                </div>
                <div className="line"></div>
                <div className="price-wrap flex">
                  <p>Price</p>
                  <div className="line"></div>
                  <p>{art?.price} eth</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Profile;
