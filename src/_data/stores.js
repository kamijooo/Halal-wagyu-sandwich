/**
 * 店舗データ定義(sandwich業態)
 * 新しい店舗を追加するときは、この配列に store オブジェクトを追加するだけ。
 * Eleventy が自動で /{region}/{slug}/index.html を生成します。
 */
module.exports = {
  brand: {
    domain: "sandwich.halal-food-wagyu.com",
    ga4_id: "G-1079Q8XEB9",
    brand_name: "Halal Wagyu Sandwich",
    brand_slug: "sandwich"
  },
  stores: [
    {
      // ===== URL/識別 =====
      region: "tokyo",
      slug: "asakusa-shotengai",
      // ===== 店名(フル・英中まとめて1つ・順番そのまま) =====
      name_full: "Asakusa Restaurant Wagyu Steak Sandwich (Halal Vegan Gluten Free) 浅草 和牛 餐厅",
      hero_place: "Tokyo's Asakusa",
      area_en: "Asakusa",
      area_jp: "浅草",
      // ===== 立地 =====
      city: "Asakusa, Tokyo",
      station_en: "Asakusa Station",
      address_en: "2-26-5 Asakusa, Taito-ku, Tokyo",
      address_postal: "111-0032",
      // ===== 連絡先 =====
      tel_display: "070-3515-2252",
      tel_raw: "+817035152252",
      // ===== 営業 =====
      hours: "11:00 — 23:00",
      hours_note: "Open Daily",
      // ===== 予約・地図 =====
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/wagyu-burger-steak-teriyaki-5w-tokyo/reserve/message",
      maps_link: "https://maps.app.goo.gl/Fm9S1AoxVKvdDdp96",
      maps_embed: "",
      // ===== 評価 =====
      rating: "4.8",
      rating_count: "254",
      rating_source: "Google Review"
    },
    {
      region: "osaka",
      slug: "ohatsu-tenjin",
      name_full: "Osaka Station Restaurant Steak Sandwich & Pizza (Halal Gluten Free) Umeda 大阪 梅田 和牛 餐厅",
      hero_place: "Osaka's Umeda",
      area_en: "Umeda",
      area_jp: "梅田",
      city: "Umeda, Osaka",
      station_en: "Higashi-Umeda Station",
      address_en: "MK Sonezaki Bldg. 2F, 2-14-6 Sonezaki, Kita-ku, Osaka",
      address_postal: "530-0057",
      tel_display: "090-6352-2034",
      tel_raw: "+819063522034",
      hours: "11:00 — 23:00",
      hours_note: "Open Daily",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/halal-wagyu-ohatsutennjin/reserve/message",
      maps_link: "https://maps.app.goo.gl/JfmeqPajkWKM5UL66",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d244.25086258062225!2d135.5012489!3d34.7009181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e77e37b73445%3A0x88bf5e7ac800f5de!2zT3Nha2EgU3RhdGlvbiBSZXN0YXVyYW50IFN0ZWFrIFNhbmR3aWNoICYgUGl6emEgKEhhbGFsIEdsdXRlbiBGcmVlICkgVW1lZGEg5aSn6ZiqIOaiheeUsCDlkozniZsg6aSQ5Y6F!5e1!3m2!1sja!2sjp!4v1780449791240!5m2!1sja!2sjp",
      rating: "4.8",
      rating_count: "309",
      rating_source: "Google Review"
    },
    {
      region: "tokyo",
      slug: "ginza",
      name_full: "Kobe Beef Wagyu Halal Hamburger Pizza & Steak Vegan Ginza Restaurant 东京餐厅",
      hero_place: "Tokyo's Ginza",
      area_en: "Ginza",
      area_jp: "銀座",
      city: "Ginza, Tokyo",
      station_en: "Ginza Station",
      address_en: "Hasegawa Bldg. B1F, 7-11-11 Ginza, Chuo-ku, Tokyo",
      address_postal: "104-0061",
      tel_display: "080-9018-8212",
      tel_raw: "+818090188212",
      hours: "11:00 — 23:00",
      hours_note: "Open Daily",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/halal-wagyu-ginza-sandwich-5w-tokyo/reserve/message",
      maps_link: "https://maps.app.goo.gl/XQbhE2pp1hMXt5C1A",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7801937349786!2d139.7631414!3d35.668061699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b1c748bfe75%3A0x41f222901408a66b!2zV2FneXUgSGFsYWwgSGFtYnVyZ2VyIFBpenphICYgU3RlYWsgU2FuZHdpY2ggKFZlZ2FuIEdsdXRlbiBGcmVlKSBHaW56YSBSZXN0YXVyYW50IOWSjOeJmyDkuJzkuqwg6ZO25bqnIOmkkOWOhQ!5e1!3m2!1sja!2sjp!4v1780449882693!5m2!1sja!2sjp",
      rating: "4.8",
      rating_count: "1,146",
      rating_source: "Google Review",
      // ===== 銀座限定: 追加メニュー(extra_menu)。この店舗だけに表示される =====
      extra_menu: [
        {
          img: "/assets/ginza/kobe-beef-burger.jpg",
          name: "Kobe Beef Burger",
          desc: "Triple-stacked Kobe Beef patties · Melted cheddar · Fresh tomato & lettuce · Branded brioche bun"
        },
        {
          img: "/assets/ginza/wagyu-steak-plate.jpg",
          name: "Kobe Beef Steak Plate",
          desc: "Premium Kobe Beef, lightly seared · Seasonal grilled vegetables · Served on charcoal stoneware"
        }
      ],
      // ===== 銀座限定: 追加コンセプト(extra_concept)。この店舗だけに表示される =====
      extra_concept: {
        label: "GINZA EXCLUSIVE",
        logo: "/assets/ginza/kobe-beef-logo.png",
        images: [
          "/assets/ginza/concept-burger.jpg",
          "/assets/ginza/concept-steak.jpg"
        ],
        heading: "Now Serving<br/>Kobe Beef",
        body: [
          "At our Ginza flagship, we proudly introduce Kobe Beef — one of the most celebrated names in Japanese Wagyu, prized for its delicate marbling, melt-in-the-mouth texture, and deep, refined umami.",
          "Each cut is prepared with the same craftsmanship that defines our kitchen: sourced through halal-certified processing, handled with care to preserve freshness, and cooked to bring out the natural character of the meat.",
          "Enjoy it stacked into our signature burger or served simply as a lightly seared steak — a true taste of Kobe, available only here in Ginza."
        ]
      }
    },
    {
      region: "kyoto",
      slug: "kiyomizudera",
      name_full: "Kyoto Wagyu Steak Sandwich Pizza (Halal Vegan Gluten Free) 和牛牛排 Kiyomizudera Restaurant 清水寺 餐厅",
      hero_place: "Kyoto's Kiyomizudera",
      area_en: "Kiyomizudera",
      area_jp: "清水寺",
      city: "Kiyomizudera, Kyoto",
      station_en: "Kiyomizu-Gojo Station",
      address_en: "4-143 Kiyomizu, Higashiyama-ku, Kyoto",
      address_postal: "605-0862",
      tel_display: "070-3525-2082",
      tel_raw: "+817035252082",
      hours: "9:00 — 21:00",
      hours_note: "Open Daily",
      reserve_system: "tablecheck",  // "tablecheck" | "form"
      tablecheck_url: "https://www.tablecheck.com/en/halal-wagyu-kiyomizuzaka/reserve/message",
      maps_link: "https://maps.app.goo.gl/3AjYanjvHYbsQfJe6",
      maps_embed: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d243.37231411001326!2d135.7774029!3d34.9974298!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600109d0b805cb83%3A0xcba3d855935756f6!2zS3lvdG8gV2FneXUgU3RlYWsgU2FuZHdpY2ggUGl6emEgKEhhbGFsIFZlZ2FuIEdsdXRlbiBGcmVlKSDlkozniZvniZvmjpIgS2l5b21penVkZXJhIFJlc3RhdXJhbnQg5riF5rC05a-6IOmkkOWOhQ!5e1!3m2!1sja!2sjp!4v1780450007119!5m2!1sja!2sjp",
      rating: "4.7",
      rating_count: "316",
      rating_source: "Google Review"
    }
  ]
};
