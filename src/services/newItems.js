import _ from "lodash";

const newItems = [
  {
    _id: "1",
    img: `${process.env.PUBLIC_URL}/new-items/ni-a.png`,
    title: "TYPE A",
    size: "70ml",
    price: "$20",
  },
  {
    _id: "2",
    img: `${process.env.PUBLIC_URL}/new-items/ni-b.png`,
    title: "TYPE B",
    size: "70ml",
    price: "$20",
  },
  {
    _id: "3",
    img: `${process.env.PUBLIC_URL}/new-items/ni-c.png`,
    title: "TYPE C",
    size: "70ml",
    price: "$20",
  },
  {
    _id: "4",
    img: `${process.env.PUBLIC_URL}/new-items/ni-d.png`,
    title: "TYPE D",
    size: "70ml",
    price: "$20",
  },
];

export const getNewItemsByID = (nid) => _.find(newItems, { _id: nid });

export const getNewItems = () => newItems;
