import { CARD_URL } from "../utils/constants";

const RestroCards = (props) => {
    const {resData} = props;
    const {name, 
            cloudinaryImageId, 
            cuisines, 
            avgRatingString, 
            locality, 
            costForTwo
        } = resData?.info
      return(
          <div className="restro-cards">
              <img src={CARD_URL
                            + cloudinaryImageId
                    } className="restro-img"/>
              <h3>{name}</h3>
              <h4>{cuisines.join(", ")}</h4>
              <h4>{avgRatingString}</h4>
              <h5>{locality}</h5>
              <p>{costForTwo}</p>
          </div>
      )
  }

export default RestroCards