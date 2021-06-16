import _ from "lodash";

const allItems = [
  {
    _id: "1",
    img: `${process.env.PUBLIC_URL}/all-items/ai-1.png`,
    title: "A - Hydration Serum",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "2",
    img: `${process.env.PUBLIC_URL}/all-items/ai-2.png`,
    title: "Hydration Face Oi",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "3",
    img: `${process.env.PUBLIC_URL}/all-items/ai-3.png`,
    title: "Rose Hips Nourishing Oils",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "4",
    img: `${process.env.PUBLIC_URL}/all-items/ai-4.png`,
    title: "Herbal Cannabis Seed Oil",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "5",
    img: `${process.env.PUBLIC_URL}/all-items/ai-5.png`,
    title: "TYPE A",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "6",
    img: `${process.env.PUBLIC_URL}/all-items/ai-6.png`,
    title: "TYPE B",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "7",
    img: `${process.env.PUBLIC_URL}/all-items/ai-7.png`,
    title: "TYPE C",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "8",
    img: `${process.env.PUBLIC_URL}/all-items/ai-8.png`,
    title: "TYPE D",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "9",
    img: `${process.env.PUBLIC_URL}/all-items/ai-9.png`,
    title: "TYPE A",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "10",
    img: `${process.env.PUBLIC_URL}/all-items/ai-10.png`,
    title: "TYPE B",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "11",
    img: `${process.env.PUBLIC_URL}/all-items/ai-11.png`,
    title: "TYPE C",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
  {
    _id: "12",
    img: `${process.env.PUBLIC_URL}/all-items/ai-12.png`,
    title: "TYPE D",
    size: "70ml",
    price: "$20",
    desc: "This 100% Pure Fruit Pigmented® Full Coverage Water Foundation is a hydrating, smooth-to-apply foundation, formulated to be ultra-blendable and give lasting and flawless full coverage. Designed for normal to dry skin types, this nourishing foundation provides a satin to slightly dewy finish and feels light and comfortable to wear, without feeling sticky or heavy.",
  },
];

export const getAllItemsByID = (aid) => _.find(allItems, { _id: aid });

export const getAllItems = () => allItems;
