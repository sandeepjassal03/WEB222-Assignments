/**
 * products.js
 *
 * The store's products are defined as an Array of product Objects.
 * Each product Object includes the following properties:
 *
 *  - id: String, a unique product identifier (e.g., "P1", "P2")
 *  - title: String, a short name for the product (e.g., "Gingerbread Cookie")
 *  - description: String, a description of the product
 *  - price: Number, the unit price of the item in whole cents (e.g., 100 = $1.00, 5379 = $53.79)
 *  - discontinued: Boolean, whether or not the product has been discontinued
 *  - categories: Array, the category id or ids to which this product belongs (e.g., ["c1"] or ["c1", "c2"])
 */
window.products = [
  {
    id: "50244",
    title: "iPhone 14 Pro Max",
    description:
      "The iPhone 14 Pro Max lets you use iPhone in completely new ways. Enjoy peace of mind with ground-breaking emergency features that keep you safe and use the 48MP main camera to capture stunning detail in photos and movies. You can use your phone more naturally than ever before because of features like the Always-On display and Dynamic Island.",
    price: 154900,
    discontinued: false,
    categories: ["APP-iOS"]
  },

  {
    id: "50243",
    title: "iPhone 14 Pro",
    description:
      "A whole new, lovely way to interact with iPhone. A crucial new safety feature created for enhanced safety. A revolutionary 48MP camera with astounding detail. Everything is powered by the best smartphone processor. Experience the all new Dynamic Island in the new iPhone 14 Pro with an always on-display.",
    price: 139900,
    discontinued: false,
    categories: ["APP-iOS"]
  },

  {
    id: "50242",
    title: "iPhone 14 Plus",
    description:
      "With the Apple iPhone 14 Plus, think big. It has a 6.7-inch screen that is bigger and a day-long battery life. Additionally, the new dual-camera technology produces beautiful images in both bright and low light. With ground-breaking safety features, experience peace of mind.",
    price: 124900,
    discontinued: false,
    categories: ["APP-iOS"]
  },

  {
    id: "50241",
    title: "iPhone 14",
    description:
      "The new series got a big and a bigger. The all-new iPhone 14 offers a 6.1 inch OLED technology display for bright whites and true blacks. It also features the longest battery life ever on an iPhone, with upto 20 hours of video playback on a single charge. The new Main Camera and image processing lets you capture shots like never before: especially in low light.",
    price: 109900,
    discontinued: false,
    categories: ["APP-iOS"]
  },

  {
    id: "45981",
    title: "iPhone 13 Pro Max",
    description:
      'With the iPhone 13 Pro Max, get your phone to perform smartly and effectively in everything you do. A dazzling 6.7" Super Retina XDR display with ProMotion, lightning-fast 5G for downloading and streaming high-quality video, the potent A15 Bionic CPU, and Ceramic Shield for improved drop performance are all included. Additional features include an extraordinary battery life, a pro camera system with new 12MP telephoto sensors, and more.',
    price: 154900,
    discontinued: true,
    categories: ["APP-iOS"]
  },

  {
    id: "45980",
    title: "iPhone 13 Pro",
    description:
      'With the iPhone 13 Pro, explore limitless possibilities. It is equipped with the powerful A15 Bionic CPU, lightning-fast 5G for streaming and downloading high-quality video, a dazzling 6.1" Super Retina XDR display with ProMotion, and Ceramic Shield for improved drop performance. Pro camera system with new 12MP telephoto, wide, and ultra wide cameras, extraordinary battery life, and many more features are included.',
    price: 139900,
    discontinued: true,
    categories: ["APP-iOS"]
  },

  {
    id: "45979",
    title: "iPhone 13",
    description:
      'Display your abilities and stand out with the iPhone 13. It has the potent A15 Bionic CPU for increased processing power, lightning-fast 5G for streaming and downloading high-definition video, a dazzling 6.1" Super Retina XDR display, and Ceramic Shield for improved drop performance. Additional features include a modern and complex dual-camera system with Night mode, 4K Dolby Vision HDR recording, an extraordinary battery life, and many more.',
    price: 99900,
    discontinued: false,
    categories: ["APP-iOS"]
  },

  {
    id: "45978",
    title: "iPhone 13 mini",
    description:
      'Get the wonderful iPhone 13 small, which is packed with strong smartphone features. A dazzling 5.4" Super Retina XDR display, blazing-fast 5G for downloading and streaming high-quality video, the powerful A15 Bionic CPU, and Ceramic Shield for improved drop performance are all included. Additional features include a sophisticated dual-camera system with Night mode, 4K Dolby Vision HDR recording, an extraordinary battery life, and many more.',
    price: 84900,
    discontinued: false,
    categories: ["APP-iOS"]
  },
  {
    id: "40560",
    title: "iPhone 12",
    description:
      'Start having fun with the iPhone 12! A dazzling 6.1" Super Retina XDR display, 5G for downloading and streaming high-quality video, the potent A14 Bionic CPU, and Ceramic Shield for improved drop performance are all included. Additional features include cinema-grade Dolby Vision, new MagSafe accessories for wireless charging, outstanding low-light photography with Night mode on both cameras, and much more.',
    price: 89900,
    discontinued: false,
    categories: ["APP-iOS"]
  },

  {
    id: "20458",
    title: "Galaxy S22 Ultra 5G",
    description:
      "With the creative Samsung Galaxy S22 Ultra 5G smartphone, bring the ordinary to life. This smartphone is designed to capture the memories that are important to you, with 108MP photo resolution and 8K video. It has a night mode for crystal-clear night photography, a 48-hour battery for unrelenting action, and an integrated S Pen for more creativity.",
    price: 137900,
    discontinued: false,
    categories: ["SAM-aOS"]
  },

  {
    id: "20457",
    title: "Galaxy S22+ 5G",
    description:
      "With the Samsung Galaxy S22+ 5G smartphone, you can perform and bring strong capabilities to everything you do. With its 8K video and 50MP photo resolution, adaptive 120Hz display, and sophisticated blue light control, you can produce high-quality content on the fly. It offers co-watching with Google Duo, an all-day battery to let you get more done, and Night Mode for incredibly clear night photography.",
    price: 107900,
    discontinued: false,
    categories: ["SAM-aOS"]
  },

  {
    id: "20456",
    title: "Galaxy S22 5G",
    description:
      "Rethink how you collaborate and work with the Samsung Galaxy S22 5G smartphone. You can make professional-quality material on the fly thanks to its 8K video and 50MP photo resolution, as well as its smooth and adaptable 120Hz display with clever blue light control. It offers co-watching with Google Duo, an all-day battery to let you get more done, and Night Mode for incredibly clear night photography.",
    price: 85900,
    discontinued: false,
    categories: ["SAM-aOS"]
  },

  {
    id: "15498",
    title: "Galaxy Z Fold4 5G",
    description:
      "The Samsung Galaxy Z Fold4 5G smartphone offers unique flexibility wherever you go. You can easily go from your pocket to a table thanks to this innovative device, which unfolds into a tablet and supports hands-free reading. Utilize the Multi-Window feature to multitask, and take advantage of the brilliant display and strong, water-resistant construction to play games and watch films without interruption.",
    price: 190900,
    discontinued: false,
    categories: ["SAM-aOS"]
  },
  {
    id: "15498",
    title: "Galaxy Z Flip4 5G",
    description:
      "Everything you require is included in the small smartphone called as the Galaxy Z Flip4. You can do more on one screen thanks to its ultra-thin, foldable full-screen display. On the top screen, keep up with friends, and on the bottom, find a selfie worth posting. Additionally, it has a Flexcam feature that enables hands-free selfie taking, ensuring that everyone is in the picture.",
    price: 99900,
    discontinued: false,
    categories: ["SAM-aOS"]
  },
  {
    id: "12879",
    title: "Galaxy S21 FE 5G",
    description:
      "With the creatively designed Samsung Galaxy S21 FE 5G, you may be future-ready. This smartphone has HyperFast processing capabilities with a 128GB internal memory and 6GB of RAM, allowing you to multitask without any hiccups. Its fast-charging, all-day intelligent battery keeps your phone running all day, while the 120Hz display provides fluid scrolling and smooth action.",
    price: 73000,
    discontinued: false,
    categories: ["SAM-aOS"]
  },

  {
    id: "9021",
    title: "Galaxy S9+",
    description:
      "You can capture, share, and experience the world in new ways with the Samsung Galaxy S9+ in your hand. With a Dual Aperture camera equipped with DSLR technology and Optical Image Stabilization, capture stunning images. Take in the sounds over two potent virtual surround sound speakers for a full, immersive experience. And see how much life your videos have on a beautiful Infinity Display.",
    price: 69900,
    discontinued: true,
    categories: ["SAM-aOS"]
  },

  {
    id: "9021",
    title: "Galaxy A53 5G",
    description:
      "Take advantage of amazing daily experiences with the robust Samsung Galaxy A53 5G 128GB. Your apps, pictures, and videos will be clear, crisp, and easy to watch thanks to its big screen and Full HD graphics. There is plenty of inbuilt storage and high-performance front and rear cameras, so you won't have to worry about running out of space.",
    price: 39900,
    discontinued: false,
    categories: ["SAM-aOS"]
  },
  {
    id: "9021",
    title: "Galaxy A12 5G",
    description:
      'The Samsung Galaxy A12 smartphone provides lightning-fast performance for work, staying connected, and entertainment. With 4G, you may experience faster movie downloads, less lag, and fluid video chats. This smartphone has a sleek, modern appearance and a 6.3" screen with an Infinity-V display that displays everything in vivid colours and fine detail.',
    price: 31900,
    discontinued: true,
    categories: ["SAM-aOS"]
  },
  {
    id: "68795",
    title: "Pixel 7 Pro",
    description:
      "The Google Pixel 7 Pro is a phone that offers the best of everything. It has a fast, secure Google Tensor G2 processor, an immersive display, and incredible battery life. It has a professional-level camera system with a telephoto lens and cutting-edge capabilities like Macro Focus. Additionally, it helps safeguard your personal data with built-in VPN and next-generation security measures.",
    price: 87900,
    discontinued: false,
    categories: ["GOOGLE-aOS"]
  },
  {
    id: "68793",
    title: "Pixel 7",
    description:
      "An all best smartphone is the Google Pixel 7. It is a quick and dependable gadget that uses Google Tensor G2 technology and has numerous security levels to safeguard your phone and private data. Utilize Real Tone and Cinematic Blur to capture beautiful images and movies with its cutting-edge Pixel Camera. It has everything you need and a battery life that is amazing—up to 72 hours.",
    price: 64900,
    discontinued: false,
    categories: ["GOOGLE-aOS"]
  },
  {
    id: "65892",
    title: "Pixel 6a",
    description:
      "The Google Pixel 6a is a responsive and quick phone. This phone is intelligent, secure, and powerful since it is equipped with Google Tensor, a potent chip made specifically for Pixel. With the aid of intelligent photography, which enables you to capture and enhance images, you may rapidly load pages or images and launch apps in addition to taking stunning pictures. It offers a fantastic performance that is tailored to everything you are.",
    price: 49900,
    discontinued: false,
    categories: ["GOOGLE-aOS"]
  },
  {
    id: "65885",
    title: "Pixel 6 Pro",
    description:
      "Stay in the moment with Google Pixel 6 Pro, a completely redesigned, fully loaded Google 5G phone. With a powerful camera system, next-gen Titan M2 security, and the custom-built Google Tensor processor, it's the smartest and fastest Pixel yet. With faster apps and pages, an all-day battery and proactive help, it delivers what you need when you need it.",
    price: 77900,
    discontinued: true,
    categories: ["GOOGLE-aOS"]
  }
];
