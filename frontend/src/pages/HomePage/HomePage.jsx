import React, { useState, useEffect } from "react";
import "./HomePage.css";
import CardCategoryShop from "../../components/Card/CardCategoryShop";
import CardCategoryName from "../../components/Card/CardCategoryName";
import FlashSale from "../../components/FlashSale/FlashSale";
import CardItem from "../../components/Card/CardItem";
import SlideShow from "../../components/SlideShow/SlideShow";
import imgDefault from "../../datas/ImgDefault";
import productService from "../../services/ProductService";
import { fadeImages } from "../../datas/DATA";
import { loadingState } from "../../recoil/LoadingState";
import { useSetRecoilState, useRecoilState } from "recoil";
import ViewMore from "../../components/ViewMore/ViewMore";
import { NavLink } from "react-router-dom";

function HomePage() {
  const [data, setData] = useState([]);
  const setLoading = useSetRecoilState(loadingState);

  return (
    <div>
      <div style={{ backgroundColor: "var(--main-color)" }}>
        <SlideShow
          styleContainer={{
            width: "90%",
            marginLeft: "5%",
            marginRight: "5%",
          }}
          style={{ width: "100%", height: "400px" }}
          srcImg={fadeImages}
        />
      </div>
      <div className="homepage">
        <div className="category">
          <div className="category-title">Shop By Category</div>
          {/* <div className="category-shop">
            <CardCategoryShop img={imgDefault.imgMen} text="Men" path="/product/men" />
            <CardCategoryShop
              img={imgDefault.imgWomen}
              text="Women"
              path="/product/women"
            />
            <CardCategoryShop img={imgDefault.imgKid} text="Kids" path="/product/kids" />
            <CardCategoryShop img={imgDefault.imgLady} text="Women" path="/product/women" />
            <CardCategoryShop
              img={imgDefault.imgGentleman}
              text="Men"
              path="/product/men"
            />
          </div> */}
          <div className="category-name">
            <NavLink to={"/product/jean"}>
              <CardCategoryName img={imgDefault.imgJean} text="jean" />
            </NavLink>
            <NavLink to={"/product/hoodie"}>
            <CardCategoryName img={imgDefault.imgHoodie} text="hoodie" />
            </NavLink>
            <NavLink to={"/product/dress"}>
            <CardCategoryName img={imgDefault.imgDress} text="dress" />
            </NavLink>
            <NavLink to={"/product/shirt"}>
            <CardCategoryName img={imgDefault.imgShirt} text="shirt" />
            </NavLink>
            <NavLink to={"/product/t-shirt"}>
            <CardCategoryName img={imgDefault.imgTShirt} text="t-shirt" />
            </NavLink>
          </div>
        </div>
        <FlashSale />
        <ViewMore title="Discover More" max={6} isButton={true} />
      </div>
    </div>
  );
}

export default HomePage;
