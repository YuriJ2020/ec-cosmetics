import _ from "lodash";

const newItems = [
  {
    _id: "1",
    img: `${process.env.PUBLIC_URL}/new-items/ni-a.png`,
    title: "TYPE 1",
    size: "70ml",
    price: "$20",
    desc:
      "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "2",
    img: `${process.env.PUBLIC_URL}/new-items/ni-b.png`,
    title: "TYPE 2",
    size: "70ml",
    price: "$20",
    desc:
      "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "3",
    img: `${process.env.PUBLIC_URL}/new-items/ni-c.png`,
    title: "TYPE 3",
    size: "70ml",
    price: "$20",
    desc:
      "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "4",
    img: `${process.env.PUBLIC_URL}/new-items/ni-d.png`,
    title: "TYPE 4",
    size: "70ml",
    price: "$20",
    desc:
      "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
];

export const getNewItemsByID = (nid) => _.find(newItems, { _id: nid });

export const getNewItems = () => newItems;
