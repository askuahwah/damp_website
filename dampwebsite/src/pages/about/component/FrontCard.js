import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin, faTwitter, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import style from "../component/../about.module.css";
import data from "../../../data/photodata";

const FrontCard = () => {
  const redirectToInstagram = (instagramId) => {
    window.open(`https://www.instagram.com/${instagramId}/`, "_blank");
  };

  const redirectToLinkedIn = (linkedinProfile) => {
    window.open(`https://www.linkedin.com/in/${linkedinProfile}/`, "_blank");
  };

  const redirectToTwitter = (TwitterProfile) => {
    window.open(`https://twitter.com/${TwitterProfile}/`, "_blank");
  }

  return (
    <div>
      <div className={style.card_list}>
        {data.map((profile) => (
          <div className={style.card} key={profile.id}>
            <img
              src={profile.image}
              alt="Profile"
              className={style.profile_image}
            />
            <div className={style.card_content}>
            <p className={style.name}>{profile.name}</p>
            <p className={style.position_name}>{profile.position}</p>
              <div className={style.card_content_a}>
                <p
                  className={style.instagram_id}
                  onClick={() => redirectToInstagram(profile.instagramId)}
                >
                  <FontAwesomeIcon icon={faWhatsapp} size="2x" />
                </p>
                <p
                  className={style.linkedin_link}
                  onClick={() => redirectToLinkedIn(profile.linkedinProfile)}
                >
                  <FontAwesomeIcon icon={faLinkedin} size="2x" />
                </p>
                <p
                  className={style.linkedin_link}
                  onClick={() => redirectToTwitter(profile.twitterProfile)}
                >
                  <FontAwesomeIcon icon={faTwitter} size="2x" />
                </p>
              </div>
              <p className={style.email_id}>{profile.emailId}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontCard;
