import _ from "lodash";

const newItems1 = [
  {
    _id: "1",
    img: `${process.env.PUBLIC_URL}/new-items/ni-a.png`,
    title: "A - Hydration Serum",
    size: "80ml",
    price: "$24",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "2",
    img: `${process.env.PUBLIC_URL}/new-items/ni-b.png`,
    title: "Hydration Face Oil",
    size: "90ml",
    price: "$28",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "3",
    img: `${process.env.PUBLIC_URL}/new-items/ni-c.png`,
    title: "Rose Hips Nourishing Oils",
    size: "60ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "4",
    img: `${process.env.PUBLIC_URL}/new-items/ni-d.png`,
    title: "Herbal Cannabis Seed Oil",
    size: "70ml",
    price: "$24",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
];

export const getNewItems1ByID = (nid) => _.find(newItems1, { _id: nid });

export const getNewItems1 = () => newItems1;
