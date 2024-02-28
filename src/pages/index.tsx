import * as React from "react";
import "../styles/style.css";
import "../styles/reset.css";
import { type PageProps } from "gatsby";
import Header from "../components/Header";
import MainWithImage from "../components/MainWithImage";
import Seperator from "../components/Seperator";
import TotalAmount from "../components/TotalAmount";
import Sponsors from "../components/Sponsors";
import LibyaInfo from "../components/LibyaInfo";
import LibyaStatus from "../components/LibyaStatus";
import Footer from "../components/Footer";
import TwitterNews from "../components/TwitterNews";

const IndexPage: React.FC<PageProps> = () => {
  // const [isKorea, setIsKorea] = React.useState(false);

  // const KOREA_BOUNDS = {
  //   lat: { min: 33, max: 38 },
  //   lng: { min: 125, max: 131 },
  // };

  // // 사용자의 위치가 한국 내에 있는지 확인하는 함수
  // function isInKorea(lat: number, lng: number) {
  //   return (
  //     lat >= KOREA_BOUNDS.lat.min &&
  //     lat <= KOREA_BOUNDS.lat.max &&
  //     lng >= KOREA_BOUNDS.lng.min &&
  //     lng <= KOREA_BOUNDS.lng.max
  //   );
  // }

  // // 위치 정보를 얻는 함수
  // function getLocation() {
  //   if (navigator.geolocation) {
  //     navigator.geolocation.getCurrentPosition((position) => {
  //       const { latitude, longitude } = position.coords;
  //       if (isInKorea(latitude, longitude)) {
  //         setIsKorea(true);
  //       } else {
  //         setIsKorea(false);
  //       }
  //     });
  //   } else {
  //     console.log("Geolocation is not supported by this browser.");
  //   }
  // }

  // // 위치 정보 얻기 함수 호출
  // React.useEffect(() => {
  //   getLocation();
  // }, []);

  return (
    <>
      <Header />
      <MainWithImage />
      <Seperator text="지금까지 기부된 금액" />
      <TotalAmount amount={400000} />
      <Sponsors />
      <LibyaInfo />
      <Seperator text="리비아에서 무슨 일이 일어났나요?" />
      <LibyaStatus />
      <Seperator text="최신 뉴스" />
      <TwitterNews />
      <Footer />
    </>
  );
};

export default IndexPage;
