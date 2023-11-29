import React, { useState, useEffect } from "react";
import "./FlashSale.css";
import CardItem from "../Card/CardItem";
import productService from "../../services/ProductService";
import { loadingState } from "../../recoil/LoadingState";
import { userState } from "../../recoil/UserState";
import { useSetRecoilState, useRecoilValue } from "recoil";

function Suggestion() {
  const setLoading = useSetRecoilState(loadingState);
  const user = useRecoilValue(userState);
  const [isViewMore, setIsViewMore] = useState(false);
  const [datas, setDatas] = useState([]);

  const getData = async () => {
    setLoading(true);
    const res = await productService.getProductSuggestions(user?.gender, user?.age);
    // console.log(res.data)
    if(res?.data?.length > 6) {
      setDatas(res?.data?.filter((data, idx) => {
        if(idx < 6) {
          return data
        }
      }));
    } else {
      setDatas(res?.data);
    }
  };

  useEffect(() => {
    getData();
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  return (
    <div className="sale">
      <div className="sale-title">SUGGESTION</div>
      <div className="sale-item">
        {datas?.map((data) => {
          return (
            <CardItem
              data={data}
              name="suggestions"
            />
          );
        })}
      </div>
    </div>
  );
}

export default Suggestion;
