import {NextResponse} from 'next/server';
const FeatureProduct =[
    {
    id: 1,
    name: "Herbal Tooth Powder",
    description:"Natural tooth cleanser with clove, mint, and activated charcoal.",
    image:"/image/toothpowder.jpg"
    },
     {
    id: 2,
    name: "Mosquito Repellent Balm",
    description:"Natural balm with citronella and neem oil to repel mosquitoes safely.",
    image:"/image/mosquitobalm.jpg"
    },
     {
    id: 3,
    name: "Herbal Candle",
    description:"Scented herbal candle with rosemary and lemongrass for aromatherapy at home. ",
    image:"/image/candle.jpg"
    },
      {
    id: 4,
    name: "Herbal Toner ",
    description:" Refreshing toner with witch hazel and rose water to tighten pores and balance skin. ",
    image:"/image/toner.jpg"
    },
      {
    id: 5,
    name: "Blood Pressure Balance Tea",
    description:"Herbal tea for regulating blood pressure naturally. ",
    image:"/image/teabag.jpg"
    },
      {
    id: 6,
    name: "Rose Water Mist ",
    description:"Pure rose water toner and face refresher. ",
    image:"/image/rosewater.jpg"
    },
      {
    id: 7,
    name: "Black Seed & Olive Oil Soap ",
    description:"Antibacterial and nourishing. ",
    image:"/image/blackseed.jpg"
    },
      {
    id: 8,
    name: "Natural Hand Sanitizer Gel",
    description:"Herbal formula with aloe and essential oils. ",
    image:"/image/sanitizer.jpg"
    },
]

export async function GET(){
    return NextResponse.json(FeatureProduct);
}