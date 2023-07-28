import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { GallaryContainer, GallaryWrapper } from "../../styles/view/gallary";
import galler1 from "../../assets/images/gallery1.jpg"
import galler2 from "../../assets/images/gallery2.jpg"
import galler3 from "../../assets/images/gallery3.jpg"
import galler4 from "../../assets/images/gallery4.jpg"
import galler5 from "../../assets/images/gallery5.jpg"
import galler6 from "../../assets/images/gallery6.jpg"

export default function MasonryImageList() {
  return (
    <GallaryContainer>
      <GallaryWrapper>
        <ImageList variant="masonry" cols={3} gap={8}>
          {itemData.map((item) => (
            <ImageListItem key={item.img}>
              <img
                src={`${item.img}?w=248&fit=crop&auto=format`}
                // srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                // alt={}
                alt=""
                loading="lazy"
              />
            </ImageListItem>
          ))}
        </ImageList>
      </GallaryWrapper>
    </GallaryContainer>
  );
}

const itemData = [
  {
    img: galler1,
    // title: "Bed",
  },
  {
    img: galler2,
    // title: "Books",
  },
  {
    img: galler3,
    // title: "Sink",
  },
  {
    img: galler4,
    // title: "Kitchen",
  },
  {
    img: galler5,
    // title: "Blinds",
  },
  {
    img: galler6,
    // title: "Chairs",
  },
  // {
  //   img: "https://images.unsplash.com/photo-1530731141654-5993c3016c77",
  //   // title: "Laptop",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
  //   // title: "Doors",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7",
  //   // title: "Coffee",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee",
  //   // title: "Storage",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62",
  //   // title: "Candle",
  // },
  // {
  //   img: "https://images.unsplash.com/photo-1519710164239-da123dc03ef4",
  //   // title: "Coffee table",
  // },
];
