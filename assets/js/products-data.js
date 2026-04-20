const PRODUCTS = [
  {
    id: 51,
    sku: "PLUS-INDO",
    name: "Giấy in Plus Indonesia ĐL70",
    category: "Giấy in",
    description:
      "Dòng giấy in cao cấp từ Indonesia, độ trắng cao, bám mực tốt.",
    shortDescription: "Giấy in Plus Indonesia ĐL70 (A3, A4, A5)",
    fullDescription: `Giấy in Plus Indonesia là dòng giấy cao cấp được sản xuất tại Indonesia với công nghệ hiện đại. Giấy có độ trắng cao, bề mặt mịn, không bụi giấy, giúp bảo vệ máy in và cho bản in sắc nét. Phù hợp cho in văn bản, hợp đồng, tài liệu quan trọng.
Định lượng: 70gsm
Xuất xứ: Indonesia`,
    price: 34500,
    image: "assets/images/Giấy IK Plus A4 Indonesia ĐL70.png",
    images: [
      "assets/images/Dập ghim 10 Deli 238.jpg",
      "assets/images/Dập ghim 10 Deli 221.jpg",
      "assets/images/Dập ghim 10 Deli 229.jpg",
    ],
    featured: true,
    stock: 100,
    origin: "Indonesia",
    typeOptions: [
      {
        label: "Khổ A4 (5 Ram/Thùng)",
        name: "Giấy in A4 Plus Indonesia ĐL70 - A4PL70 5R/th",
        sku: "A4PL70",
        image: "/assets/images/Giấy IK Plus A4 Indonesia ĐL70.png",
        description: `Giấy in A4 Plus Indonesia ĐL70
Khổ: 210 x 297 mm
Định lượng: 70gsm
Độ trắng: 95 ISO
Quy cách: 5 Ram/Thùng
Đơn vị tính: Ram`,
        prices: [67000],
      },
      {
        label: "Khổ A5 (10 Ram/Thùng)",
        name: "Giấy in A5 Plus Indonesia ĐL70 - A5PL70 10R/th",
        sku: "A5PL70",
        image: "/assets/images/Giấy A5 plus Indonesia DL70.jpg",
        description: `Giấy in A5 Plus Indonesia ĐL70
Khổ: 148 x 210 mm
Định lượng: 70gsm
Độ trắng: 95 ISO
Quy cách: 10 Ram/Thùng
Đơn vị tính: Ram`,
        prices: [34500],
      },
      {
        label: "Khổ A3",
        name: "Giấy in A3 Plus Indonesia ĐL70",
        sku: "A3PL70",
        image: "/assets/images/Giấy A3 plus indonesia.jpg",
        description: `Giấy in A3 Plus Indonesia ĐL70
Khổ: 297 x 420 mm
Định lượng: 70gsm
Độ trắng: 95 ISO
Quy cách: Ram
Đơn vị tính: Ram`,
        prices: [132000],
      },
    ],
  },
  {
    id: 52,
    sku: "DB-THAI",
    name: "Giấy in Double A Thái Lan ĐL70",
    category: "Giấy in",
    description:
      "Giấy in cao cấp nhập khẩu từ Thái Lan, độ trắng 95%, bề mặt siêu mịn.",
    shortDescription: "Giấy in Double A Thái Lan ĐL70 (A3, A4, A5)",
    fullDescription: `Giấy in Double A Thái Lan là thương hiệu giấy cao cấp hàng đầu thế giới. Với công nghệ sản xuất hiện đại, bột giấy từ cây "Paper Tree" độc quyền, sản phẩm đảm bảo độ trắng tuyệt đối, bề mặt siêu mịn giúp hạn chế tối đa tình trạng kẹt giấy và bám mực hoàn hảo.
Định lượng: 70gsm
Xuất xứ: Thái Lan`,
    price: 39000,
    image: "assets/images/Giấy A5 Double A  Thailand 70gsm.png",
    images: ["assets/images/Giấy A5 Double A  Thailand 70gsm.png"],
    featured: true,
    stock: 200,
    origin: "Thái Lan",
    typeOptions: [
      {
        label: "Khổ A4 (5 Ram/Thùng)",
        name: "Giấy in A4 DoubleA Thái Lan ĐL70 - A4DB70 5R/th",
        sku: "A4DB70",
        image: "assets/images/Giấy Double A A4 Thailand ĐL70.png",
        description: `Giấy in A4 DoubleA Thái Lan ĐL70
Khổ: 210 x 297 mm
Định lượng: 70gsm
Quy cách: 5 Ram/Thùng
Đơn vị tính: Ram`,
        prices: [76000],
      },
      {
        label: "Khổ A5 (10 Ram/Thùng)",
        name: "Giấy in A5 DoubleA Thái Lan ĐL70 - A5DB70 10R/th",
        sku: "A5DB70",
        image: "assets/images/Giấy A5 Double A  Thailand 70gsm.png",
        description: `Giấy in A5 DoubleA Thái Lan ĐL70
Khổ: 148 x 210 mm
Định lượng: 70gsm
Quy cách: 10 Ram/Thùng
Đơn vị tính: Ram`,
        prices: [39000],
      },
      {
        label: "Khổ A3 (5 Ram/Thùng)",
        name: "Giấy in A3 DoubleA Thái Lan ĐL70 - A3DB70 5R/th",
        sku: "A3DB70",
        image: "assets/images/Giấy in A3 DoubleA ThailandĐL  70gram.png",
        description: `Giấy in A3 DoubleA Thái Lan ĐL70
Khổ: 297 x 420 mm
Định lượng: 70gsm
Quy cách: 5 Ram/Thùng
Đơn vị tính: Ram`,
        prices: [150000],
      },
    ],
  },
  {
    id: 53,
    sku: "PAGI-A4",
    name: "Giấy in A4 Pagi",
    category: "Giấy in",
    description:
      "Giấy in kinh tế, chất lượng ổn định, phù hợp in văn phòng thông dụng.",
    shortDescription: "Giấy in A4 Pagi (ĐL65, ĐL70)",
    fullDescription: `Giấy in Pagi là dòng giấy in kinh tế được ưa chuộng cho các công việc in ấn văn phòng thường ngày. Giấy có độ trắng khá, bề mặt phẳng, ít bụi, tương thích tốt với các dòng máy in và máy photocopy phổ biến.
Định lượng: 65gsm / 70gsm
Khổ: A4 (210 x 297 mm)`,
    price: 54000,
    image: "/assets/images/Giấy in A4 Pagi ĐL70.jpg",
    images: ["/assets/images/Giấy in A4 Pagi ĐL70.jpg"],
    featured: false,
    stock: 300,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Khổ A4 (ĐL65) - 5 Ram/Bó",
        name: "Giấy in A4 Pagi ĐL65 - A4PG65, 5R/bó",
        sku: "A4PG65",
        image: "/assets/images/Giấy in A4 Pagi DL65.jpeg",
        description: `Giấy in A4 Pagi ĐL65
Khổ: 210 x 297 mm
Định lượng: 65gsm
Quy cách: 5 Ram/Bó
Đơn vị tính: Ram`,
        prices: [54000],
      },
      {
        label: "Khổ A4 (ĐL70) - 5 Ram/Bó",
        name: "Giấy in A4 Pagi DL70 - A4PG70, 5R/bó",
        sku: "A4PG70",
        image: "assets/images/Giấy vve xanh.jpg",
        description: `Giấy in A4 Pagi ĐL70
Khổ: 210 x 297 mm
Định lượng: 70gsm
Quy cách: 5 Ram/Bó
Đơn vị tính: Ram`,
        prices: [59000],
      },
    ],
  },
  {
    id: 54,
    sku: "A4GST70",
    name: "Giấy A4 Gold Star ĐL70",
    category: "Giấy in",
    description:
      "Giấy in Gold Star chất lượng ổn định, độ trắng cao, phù hợp cho mọi loại máy văn phòng.",
    shortDescription: "Giấy in A4 Gold Star ĐL70 (55.000 ₫)",
    fullDescription: `Giấy in A4 Gold Star ĐL70 là dòng giấy in văn phòng đáng tin cậy với độ trắng tốt và bề mặt mịn. Giấy giúp bản in rõ nét, ít bị nhòe mực và bảo vệ máy in bền lâu.
Định lượng: 70gsm
Khổ: A4 (210 x 297 mm)
Đơn vị tính: Ram`,
    price: 55000,
    image: "assets/images/Giấy Golden Star A4 70gsm.png",
    images: ["assets/images/Giấy Golden Star A4 70gsm.png"],
    featured: false,
    stock: 150,
    origin: "Việt Nam",
  },
  {
    id: 55,
    sku: "GK-SUMMER",
    name: "Giấy in màu Pgrand SUMMER",
    category: "Giấy bìa màu",
    description:
      "Giấy in màu Pgrand SUMMER rực rỡ, bề mặt mịn, bám mực tốt, phù hợp cho in ấn sáng tạo.",
    shortDescription: "Giấy in màu Pgrand SUMMER (A3, A4)",
    fullDescription: `Giấy in màu Pgrand SUMMER mang đến màu sắc rực rỡ và tươi mới cho các bản in của bạn. Giấy có độ dày vừa phải, bề mặt mịn màng, tương thích tốt với các dòng máy in phun và máy in laser. Thích hợp cho in tờ rơi, bìa báo cáo, thiệp chúc mừng và các dự án sáng tạo.
Quy cách: Tập`,
    price: 88000,
    image: "assets/images/Giấy in màu A4 pgrand SUMMER.jpg",
    images: ["assets/images/Giấy in màu A4 pgrand SUMMER.jpg"],
    featured: false,
    stock: 200,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Khổ A4",
        name: "Giấy in màu A4 Pgrand SUMMER",
        sizes: ["Vàng", "Xanh biển", "Xanh lá", "Hồng"],
        skus: ["GK046", "GK047", "GK048", "GK049"],
        prices: [88000, 88000, 88000, 88000],
        image: "assets/images/Giấy in màu A4 pgrand SUMMER.jpg",
        description: `Giấy in màu A4 Pgrand SUMMER
Khổ: 210 x 297 mm
Đơn vị tính: Tập`,
      },
      {
        label: "Khổ A3 Vàng",
        name: "Giấy in màu A3 Pgrand SUMMER (Vàng)",
        sku: "GK051",
        prices: [172000],
        image: "assets/images/Giấy in màu A3 pgrand SUMMER vàng.jpg",
        description: `Giấy in màu A3 Pgrand SUMMER
Khổ: 297 x 420 mm
Đơn vị tính: Tập`,
      },
      {
        label: "Khổ A3 Xanh biển",
        name: "Giấy in màu A3 Pgrand SUMMER (Xanh biển)",
        sku: "GK052",
        prices: [172000],
        image: "assets/images/Giấy in màu A3 pgrand SUMMER xanh dương.jpg",
        description: `Giấy in màu A3 Pgrand SUMMER
Khổ: 297 x 420 mm
Đơn vị tính: Tập`,
      },
      {
        label: "Khổ A3 Xanh lá",
        name: "Giấy in màu A3 Pgrand SUMMER (Xanh lá)",
        sku: "GK053",
        prices: [172000],
        image: "assets/images/Giấy in màu A3 pgrand SUMMER xanh lá.jpg",
        description: `Giấy in màu A3 Pgrand SUMMER
Khổ: 297 x 420 mm
Đơn vị tính: Tập`,
      },
      {
        label: "Khổ A3 Hồng",
        name: "Giấy in màu A3 Pgrand SUMMER (Hồng)",
        sku: "GK054",
        prices: [172000],
        image: "assets/images/Giấy in màu A3 pgrand SUMMER hồng.jpg",
        description: `Giấy in màu A3 Pgrand SUMMER
Khổ: 297 x 420 mm
Đơn vị tính: Tập`,
      },
    ],
  },
  {
    id: 56,
    sku: "BB-VOHONG",
    name: "Giấy in Bãi Bằng vỏ hồng ĐL70",
    category: "Giấy in",
    description:
      "Giấy in Bãi Bằng vỏ hồng truyền thống, nổi tiếng với độ bền và sự tin cậy qua nhiều thế kỷ tại Việt Nam.",
    shortDescription: "Giấy in Bãi Bằng vỏ hồng ĐL70 (A4, A5)",
    fullDescription: `Giấy in Bãi Bằng là biểu tượng của ngành giấy Việt Nam. Dòng "vỏ hồng" ĐL70 được sản xuất với tiêu chuẩn cao, bề mặt láng mịn, độ trắng tự nhiên, giúp bảo vệ mắt và máy in. Thích hợp cho photocopy và in ấn văn phòng số lượng lớn.
Định lượng: 70gsm
Quy cách: Tập`,
    price: 33000,
    image: "assets/images/Giấy in A4 bãi bằng vỏ hồng DL70.jpg",
    images: ["assets/images/Giấy in A4 bãi bằng vỏ hồng DL70.jpg"],
    featured: false,
    stock: 500,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Khổ A4",
        name: "Giấy in A4 Bãi Bằng vỏ hồng ĐL70",
        sku: "GK055",
        image: "assets/images/Giấy in A4 bãi bằng vỏ hồng DL70.jpg",
        description: `Giấy in A4 Bãi Bằng vỏ hồng ĐL70
Khổ: 210 x 297 mm
Định lượng: 70gsm
Đơn vị tính: Tập`,
        prices: [59000],
      },
      {
        label: "Khổ A5",
        name: "Giấy in A5 Bãi Bằng vỏ hồng ĐL70",
        sku: "GK058",
        image: "assets/images/Giấy in A5 bãi bằng vỏ hồng DL70.jpg",
        description: `Giấy in A5 Bãi Bằng vỏ hồng ĐL70
Khổ: 148 x 210 mm
Định lượng: 70gsm
Đơn vị tính: Tập`,
        prices: [33000],
      },
    ],
  },
  {
    id: 57,
    sku: "GISIN",
    name: "Giấy in màu Sinarspectra A4 DL80 Indo",
    category: "Giấy bìa màu",
    description:
      "Giấy in màu Sinarspectra cao cấp nhập khẩu từ Indonesia, định lượng 80gsm, 500 tờ/ram.",
    shortDescription: "Giấy in màu Sinarspectra A4 DL80 Indo (110,000 ₫)",
    fullDescription: `Giấy in màu Sinarspectra là dòng giấy in màu cao cấp từ Indonesia. Với định lượng 80gsm dày dặn, bề mặt cực mịn và khả năng bám mực tuyệt vời, sản phẩm mang lại màu sắc sống động và chuyên nghiệp cho các bản in.
Khổ: A4 (210 x 297 mm)
Định lượng: 80gsm
Quy cách: 500 tờ/ram
Xuất xứ: Indonesia`,
    price: 110000,
    image: "assets/images/Giấy in màu Sinarspectra A4 DL80 Indo.webp",
    images: ["assets/images/Giấy in màu Sinarspectra A4 DL80 Indo.webp"],
    featured: true,
    stock: 100,
    origin: "Indonesia",
  },
  {
    id: 58,
    sku: "GK081",
    name: "Giấy cuộn A0 (8kg) DL100",
    category: "Giấy in",
    description:
      "Giấy cuộn khổ A0 chuyên dụng cho in bản vẽ kỹ thuật, kiến trúc, định lượng 100gsm, trọng lượng 8kg.",
    shortDescription: "Giấy cuộn A0 (8kg) DL100 (250,000 ₫)",
    fullDescription: `Giấy cuộn A0 chất lượng cao với định lượng 100gsm dày dặn, phù hợp cho các dòng máy in phun khổ lớn. Bề mặt giấy trắng mịn, bám mực tốt, đảm bảo các đường nét kỹ thuật sắc nét, không bị nhòe.
Khổ giấy: A0 (841mm)
Trọng lượng: 8kg
Định lượng: 100gsm
Đơn vị tính: Cuộn`,
    price: 250000,
    image: "assets/images/Giấy cuộn A0 (8kg) DL100.png",
    images: ["assets/images/Giấy cuộn A0 (8kg) DL100.png"],
    featured: false,
    stock: 50,
    origin: "Việt Nam",
  },
  {
    id: 59,
    sku: "GK039",
    name: "Giấy ép ảnh Plastic",
    category: "Giấy ép plastic",
    description:
      "Sản phẩm giấy ép ảnh Plastic (Màng ép plastic) chuyên dùng để giữ gìn, bảo quản tài liệu.",
    shortDescription: "Giấy ép ảnh Plastic (2 kích thước: A4, A3)",
    fullDescription: `Sản phẩm giấy ép ảnh Plastic bao gồm:
Giấy ép ảnh A4 Plastic mỏng cp6 A4 Mic70x220x315
Giấy ép ảnh A3 Plastic mỏng CP11 Mic70x310x430

Kích thước: A4 và A3
Sử dụng màng ép plastic chất lượng cao giúp tài liệu, hình ảnh được bảo vệ tối ưu khỏi bụi bẩn, chống thấm nước, giữ nguyên độ trong suốt và màu sắc lâu bền theo thời gian.`,
    price: 65000,
    image: "assets/images/Giấy ép Plastic A4.png",
    images: ["assets/images/Giấy ép Plastic A4.png"],
    featured: false,
    stock: 100,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "A4 mỏng cp6 Mic70x220x315",
        name: "Giấy ép ảnh A4 Plastic mỏng cp6 A4 Mic70x220x315",
        sku: "GK039",
        image: "assets/images/Giấy ép Plastic A4.png",
        description: `Kích thước: A4
Phân loại: Mỏng cp6 Mic70x220x315
Đơn vị tính: tập`,
        prices: [65000],
      },
      {
        label: "A3 mỏng CP11 Mic70x310x430",
        name: "Giấy ép ảnh A3 Plastic mỏng CP11 Mic70x310x430",
        sku: "GK040",
        image: "assets/images/Giấy ép Plastic A3.png",
        description: `Kích thước: A3
Phân loại: Mỏng CP11 Mic70x310x430
Đơn vị tính: tập`,
        prices: [130000],
      },
    ],
  },
  {
    id: 60,
    sku: "DCVD",
    name: "Giấy đề can thái",
    category: "Giấy decal",
    description:
      "Giấy đề can thái chất lượng cao, độ bám dính tốt, bề mặt nhẵn mịn phù hợp cho in ấn và cắt dán.",
    shortDescription: "Giấy đề can thái (2 loại: Đế vàng, Đế xanh)",
    fullDescription: `Sản phẩm giấy đề can thái bao gồm 2 loại đế phổ biến phù hợp với nhiều nhu cầu in ấn và đóng gói:
- Giấy đề can thái Đế vàng dày
- Giấy đề can đế xanh dày

Độ bám dính cực tốt, chống phai màu, chịu nhiệt tốt qua máy in laser và máy in phun. Bề mặt giấy ăn mực, hiển thị màu sắc rõ nét và chân thực.
Đơn vị tính: Tập`,
    price: 76000,
    image: "assets/images/Giấy decal thái đế vàng.jpg",
    images: ["assets/images/Giấy decal thái đế vàng.jpg"],
    featured: false,
    stock: 100,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "Đế vàng dày",
        name: "Giấy đề can thái Đế vàng dày",
        sku: "DCVD",
        image: "assets/images/Giấy decal thái đế vàng.jpg",
        description: `Loại: Đế vàng
Phân loại: Dày
Đơn vị tính: Tập`,
        prices: [76000],
      },
      {
        label: "Đế xanh dày",
        name: "Giấy đề can đế xanh dày",
        sku: "DCXD",
        image: "assets/images/Giấy decal thái đế xanh.jpg",
        description: `Loại: Đế xanh
Phân loại: Dày
Đơn vị tính: Tập`,
        prices: [80000],
      },
    ],
  },
  {
    id: 61,
    sku: "BMOT",
    name: "Bìa màu One",
    category: "Giấy bìa màu",
    description:
      "Giấy bìa màu cứng cáp nhãn hiệu One, phù hợp đóng bìa sổ sách, làm thiệp, cắt dán craft.",
    shortDescription: "Bìa màu One (5 màu)",
    fullDescription: `Giấy Bìa màu One là sản phẩm giấy bìa cứng chất lượng cao, thường được dùng để đóng bìa hồ sơ, tài liệu, sổ sách hoặc làm hàng thủ công mỹ nghệ.
Màu sắc tươi sáng, chất giấy bền dai và không bị lem mực.

Quy cách: Tập
Các tùy chọn màu sắc:
- Trắng
- Vàng
- Blue (Xanh dương)
- Pink (Hồng)
- Green (Xanh lá)`,
    price: 35000,
    image: "assets/images/Bìa màu One.jpg",
    images: ["assets/images/Bìa màu One.jpg"],
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "Trắng",
        name: "Bìa màu One trắng",
        sku: "BMOT",
        image: "assets/images/Bìa màu One.jpg",
        description: "Màu sắc: Trắng\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Vàng",
        name: "Bìa màu One vàng",
        sku: "BMOV",
        image: "assets/images/Bìa màu One.jpg",
        description: "Màu sắc: Vàng\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Blue",
        name: "Bìa màu One blue",
        sku: "BMOB",
        image: "assets/images/Bìa màu One.jpg",
        description: "Màu sắc: Blue (Xanh dương)\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Pink",
        name: "Bìa màu One pink",
        sku: "BMOP",
        image: "assets/images/Bìa màu One.jpg",
        description: "Màu sắc: Pink (Hồng)\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Green",
        name: "Bìa màu One green",
        sku: "BMOG",
        image: "assets/images/Bìa màu One.jpg",
        description: "Màu sắc: Green (Xanh lá)\nĐơn vị tính: Tập",
        prices: [35000],
      },
    ],
  },
  {
    id: 62,
    sku: "BMPLST",
    name: "Bìa màu Plus",
    category: "Giấy bìa màu",
    description:
      "Giấy bìa màu thương hiệu Plus, bề mặt mịn đẹp, màu sắc sắc nét chuyên dùng cho đóng sổ sách cao cấp.",
    shortDescription: "Bìa màu Plus (5 màu, mặt mịn)",
    fullDescription: `Giấy Bìa màu Plus nổi tiếng với độ mịn và màu sắc chuẩn xác. Đây là lựa chọn hàng đầu cho các văn phòng cần sự chuyên nghiệp trong việc đóng tập tài liệu, hồ sơ.
Chất liệu giấy cứng cáp, chịu lực tốt, giữ form sổ bền đẹp lâu dài.

Quy cách: Tập
Các tùy chọn màu sắc:
- Trắng (BMPLST)
- Vàng (BMOV)
- Blue (BMOB)
- Pink (BMOP)
- Green (BMOG)`,
    price: 35000,
    image: "assets/images/Bìa màu plus.jpg",
    images: ["assets/images/Bìa màu plus.jpg"],
    featured: false,
    stock: 200,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "Trắng",
        name: "Bìa màu plus trắng",
        sku: "BMPLST",
        image:
          "/C:/Users/Admin/.gemini/antigravity/brain/8f968a00-929d-48e0-b3c8-1209f0cd4d2a/bia_mau_plus_trang_1776564175197.png",
        description: "Màu sắc: Trắng\nThương hiệu: Plus\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Vàng",
        name: "Bìa màu plus vàng",
        sku: "BMOV",
        image: "assets/images/Bìa màu plus.jpg",
        description: "Màu sắc: Vàng\nThương hiệu: Plus\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Blue",
        name: "Bìa màu plus blue",
        sku: "BMOB",
        image: "assets/images/Bìa màu plus.jpg",
        description:
          "Màu sắc: Blue (Xanh dương)\nThương hiệu: Plus\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Pink",
        name: "Bìa màu plus pink",
        sku: "BMOP",
        image: "assets/images/Bìa màu plus.jpg",
        description:
          "Màu sắc: Pink (Hồng)\nThương hiệu: Plus\nĐơn vị tính: Tập",
        prices: [35000],
      },
      {
        label: "Green",
        name: "Bìa màu plus green",
        sku: "BMOG",
        image: "assets/images/Bìa màu plus.jpg",
        description:
          "Màu sắc: Green (Xanh lá)\nThương hiệu: Plus\nĐơn vị tính: Tập",
        prices: [35000],
      },
    ],
  },
  {
    id: 63,
    sku: "BL55",
    name: "Bút ký PENTEL",
    category: "Bút ký",
    description:
      "Bút ký cao cấp PENTEL EnerGel với công nghệ mực gel tiên tiến, viết êm, mực ra đều và cực kỳ nhanh khô.",
    shortDescription: "Bút ký PENTEL EnerGel (0.5mm / 0.7mm)",
    fullDescription: `Bút ký PENTEL EnerGel là sự lựa chọn hoàn hảo cho những ai yêu thích cảm giác viết mượt mà và chuyên nghiệp. 
- Công nghệ mực EnerGel độc quyền giúp mực khô ngay tức thì, không bị lem hay nhòe, phù hợp cho cả người thuận tay trái.
- Thiết kế thân bút sang trọng, tay cầm bọc cao su êm ái giúp bạn viết lâu mà không mỏi tay.
- Có 2 kích cỡ ngòi phổ biến: 0.5mm và 0.7mm.

Quy cách: 10-12 chiếc/Hộp
Đơn vị tính: Chiếc`,
    price: 40000,
    image: "assets/images/Bút ký PENTEL 0.5.webp",
    images: ["assets/images/Bút ký PENTEL 0.5.webp"],
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "BL55 (0.5mm)",
        name: "Bút ký PENTEL 0.5 - BL55",
        sku: "BL55",
        image: "assets/images/Bút ký PENTEL 0.5.webp",
        description:
          "Kích thước ngòi: 0.5mm\nMã sản phẩm: BL55\nĐơn vị tính: Chiếc",
        prices: [40000],
      },
      {
        label: "BL57 (0.7mm)",
        name: "Bút ký PENTEL 0.7 - BL57",
        sku: "BL57",
        image: "assets/images/Bút ký PENTEL 0.7.jpg",
        description:
          "Kích thước ngòi: 0.7mm\nMã sản phẩm: BL57\nĐơn vị tính: Chiếc",
        prices: [45000],
      },
    ],
  },
  {
    id: 64,
    sku: "CP02",
    name: "Bút xóa Thiên Long",
    category: "Bút xoá",
    description:
      "Bút xóa nước Thiên Long chính hãng, độ che phủ tốt, khô nhanh và không gây mùi khó chịu.",
    shortDescription: "Bút xóa Thiên Long (CP02 / CP05)",
    fullDescription: `Bút xóa Thiên Long là vật dụng không thể thiếu cho học sinh, sinh viên và nhân viên văn phòng.
- Đầu bút bằng kim loại có lò xo giúp điều tiết lượng mực xóa ra đều.
- Mực xóa trắng mịn, độ bám dính cao và khô rất nhanh trên bề mặt giấy.
- Có 2 dòng sản phẩm phổ biến: CP02 (mẫu truyền thống) và CP05 (mẫu tròn cầm nắm thoải mái).

Quy cách: 10 chiếc/Hộp
Đơn vị tính: Chiếc`,
    price: 20000,
    image: "assets/images/Bút xoá.jpg",
    images: ["assets/images/Bút xóa TL CP02 - 05.png"],
    featured: false,
    stock: 1000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "CP02 (Mẫu dài)",
        name: "Bút Xóa Thiên Long CP02",
        sku: "CP02",
        image: "assets/images/Bút xóa TL CP02 - 05.png",
        description:
          "Mẫu sản phẩm: CP02\nQuy cách: 10 chiếc/hộp\nMã nội bộ: 820062",
        prices: [20000],
      },
      {
        label: "CP05 (Mẫu tròn)",
        name: "Bút Xóa tròn Thiên Long CP05",
        sku: "CP05",
        image: "assets/images/Bút xoá tròn thiên long.jpg",
        description:
          "Mẫu sản phẩm: CP05\nQuy cách: 10 chiếc/hộp\nMã nội bộ: 820765",
        prices: [16000],
      },
    ],
  },
  {
    id: 65,
    sku: "WH12",
    name: "Băng xóa Plus WH",
    category: "Bút xoá",
    description:
      "Băng xóa Plus (Correction Tape) dòng WH, thiết kế tiện dụng, kéo xóa êm, không làm rách giấy.",
    shortDescription: "Băng xóa Plus WH (12mm / mini 7mm)",
    fullDescription: `Băng xóa Plus WH là giải pháp thay thế hoàn hảo cho bút xóa nước.
- Xóa sạch màng mực, có thể viết đè lên ngay lập tức mà không cần chờ đợi.
- Thiết kế thân nhựa trong suốt dễ dàng kiểm tra lượng băng bên trong.
- Đầu kéo thông minh giúp dải băng bám dính chắc chắn và phẳng mịn trên giấy.

Đơn vị tính: Chiếc`,
    price: 20000,
    image: "assets/images/Băng xoá bìa.jpg",
    images: ["assets/images/Băng xoá Plus WH 12mm.jpeg"],
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "WH 12mm",
        name: "Băng xoá Plus WH 12mm",
        sku: "WH12",
        image: "assets/images/Băng xoá Plus WH 12mm.jpeg",
        description: "Độ dài băng: 12mm\nThương hiệu: Plus\nĐơn vị tính: Chiếc",
        prices: [20000],
      },
      {
        label: "WH mini 7mm",
        name: "Băng xoá Plus WH mini 7mm",
        sku: "WH7",
        image: "assets/images/Băng xoá Plus WH 7mm.png",
        description:
          "Độ dài băng: 7mm (Mini)\nThương hiệu: Plus\nĐơn vị tính: Chiếc",
        prices: [17000],
      },
    ],
  },
  {
    id: 66,
    sku: "RBX12M",
    name: "Ruột băng xóa Plus 12m",
    category: "Bút xoá",
    description:
      "Ruột thay thế cho băng xóa Plus, tiết kiệm chi phí và bảo vệ môi trường.",
    shortDescription: "Ruột băng xóa Plus 12m (10c/hộp)",
    fullDescription: `Dòng ruột thay thế chuyên dùng cho các loại vỏ băng xóa Plus tương ứng.
- Chiều dài dải băng 12m cho thời gian sử dụng lâu dài.
- Thao tác thay thế đơn giản, nhanh chóng.
- Chất lượng băng xóa tương đương với dải băng nguyên bản.

Quy cách: 10 chiếc/hộp
Đơn vị tính: Chiếc`,
    price: 14000,
    image: "assets/images/Ruột băng xóa Plus 12m.png",
    images: ["assets/images/Ruột băng xóa Plus 12m.png"],
    featured: false,
    stock: 300,
    origin: "Đang cập nhật",
  },
  {
    id: 67,
    sku: "HL03V",
    name: "Bút nhớ dòng Thiên Long - HL03",
    category: "Bút nhớ dòng",
    description:
      "Bút nhớ dòng Thiên Long HL03 thiết kế truyền thống, màu dạ quang tươi sáng, giúp làm nổi bật các nội dung quan trọng.",
    shortDescription: "Bút dạ quang HL03 (5 màu tươi sáng)",
    fullDescription: `Bút nhớ dòng HL03 (Highlighter) là sản phẩm quen thuộc của Thiên Long. 
- Mực sặc sỡ, độ phản quang cao, không làm lem chữ khi viết đè lên. 
- Đầu bút dẹt giúp kẻ được cả đường dày và mỏng.
- Có 5 màu sắc lựa chọn: Cam, Hồng, Vàng, Xanh biển, Xanh lá.

Quy cách: 10 cây/hộp
Đơn vị tính: Cây`,
    price: 8000,
    image: "assets/images/Bút nhớ dòng Thiên Long 10c HL03.jpg",
    images: ["assets/images/Bút nhớ dòng Thiên Long 10c HL03.jpg"],
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Vàng",
        name: "Bút nhớ dòng Thiên Long màu vàng - HL03V",
        sku: "HL03V",
        image: "assets/images/Bút nhớ dòng Thiên Long 10c HL03.jpg",
        description: "Màu: Vàng\nMã: HL03V\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Cam",
        name: "Bút nhớ dòng Thiên Long màu cam - HL03C",
        sku: "HL03C",
        image: "assets/images/Bút nhớ dòng Thiên Long 10c HL03.jpg",
        description: "Màu: Cam\nMã: HL03C\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Hồng",
        name: "Bút nhớ dòng Thiên Long màu hồng - HL03H",
        sku: "HL03H",
        image: "assets/images/Bút nhớ dòng Thiên Long 10c HL03.jpg",
        description: "Màu: Hồng\nMã: HL03H\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Xanh biển",
        name: "Bút nhớ dòng Thiên Long màu xanh biển - HL03XB",
        sku: "HL03XB",
        image: "assets/images/Bút nhớ dòng Thiên Long 10c HL03.jpg",
        description: "Màu: Xanh biển\nMã: HL03XB\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Xanh lá",
        name: "Bút nhớ dòng Thiên Long màu xanh lá - HL03XL",
        sku: "HL03XL",
        image: "assets/images/Bút nhớ dòng Thiên Long 10c HL03.jpg",
        description: "Màu: Xanh lá\nMã: HL03XL\nĐơn vị tính: Cây",
        prices: [8000],
      },
    ],
  },
  {
    id: 68,
    sku: "HL101V",
    name: "Bút nhớ dòng Thiên Long - HL101",
    category: "Bút nhớ dòng",
    description:
      "Bút nhớ dòng Thiên Long HL101 kiểu dáng hiện đại, mực gel cao cấp, độ bền màu lâu dài.",
    shortDescription: "Bút dạ quang HL101 (Kiểu dáng hiện đại)",
    fullDescription: `Bút nhớ dòng HL101 là sự nâng cấp về kiểu dáng cho dòng sản phẩm highlighter của Thiên Long.
- Kiểu dáng thon gọn, cầm nắm chắc tay.
- Mực chất lượng cao, sáp mịn, không thấm qua giấy.
- Có 5 màu sắc dạ quang bắt mắt.

Quy cách: 10 cây/hộp
Đơn vị tính: Cây`,
    price: 8000,
    image: "assets/images/Bút nhớ dòng Thiên Long HL101.jpg",
    images: ["assets/images/Bút nhớ dòng Thiên Long HL101.jpg"],
    featured: false,
    stock: 1500,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Vàng",
        name: "Bút nhớ dòng Thiên Long màu vàng - HL101V",
        sku: "HL101V",
        image: "assets/images/Bút nhớ dòng Thiên Long HL101.jpg",
        description: "Màu: Vàng\nMã: HL101V\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Cam",
        name: "Bút nhớ dòng Thiên Long màu cam - HL101C",
        sku: "HL101C",
        image: "assets/images/Bút nhớ dòng Thiên Long HL101.jpg",
        description: "Màu: Cam\nMã: HL101C\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Hồng",
        name: "Bút nhớ dòng Thiên Long màu hồng - HL101H",
        sku: "HL101H",
        image: "assets/images/Bút nhớ dòng Thiên Long HL101.jpg",
        description: "Màu: Hồng\nMã: HL101H\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Xanh biển",
        name: "Bút nhớ dòng Thiên Long màu xanh biển - HL101XB",
        sku: "HL101XB",
        image: "assets/images/Bút nhớ dòng Thiên Long HL101.jpg",
        description: "Màu: Xanh biển\nMã: HL101XB\nĐơn vị tính: Cây",
        prices: [8000],
      },
      {
        label: "Xanh lá",
        name: "Bút nhớ dòng Thiên Long màu xanh lá - HL101XL",
        sku: "HL101XL",
        image: "assets/images/Bút nhớ dòng Thiên Long HL101.jpg",
        description: "Màu: Xanh lá\nMã: HL101XL\nĐơn vị tính: Cây",
        prices: [8000],
      },
    ],
  },
  {
    id: 69,
    sku: "PM04D",
    name: "Bút dạ kính Thiên Long - PM04",
    category: "Bút dạ",
    description:
      "Bút dạ kính Thiên Long PM04 (Permanent Marker) mực đậm, bền màu, ghi tốt trên nhiều bề mặt như kính, gỗ, nhựa, kim loại.",
    shortDescription: "Bút dạ kính PM04 (3 màu, mỗi màu một ảnh riêng)",
    fullDescription: `Bút dạ kính PM04 là dòng bút lông dầu chuyên dụng của Thiên Long.
- Mực chất lượng cao, độ bám dính cực tốt, không phai màu và chống nước.
- Thiết kế đặc trưng giúp ghi chú bền bỉ trên các vật liệu trơn nhẵn như kính, túi nilon, linh kiện điện tử...

Quy cách: 10 cây/hộp
Đơn vị tính: Cây`,
    price: 9000,
    image: "assets/images/PM04 bìa.jpg",
    images: [
      "assets/images/Bút dạ kính thiên long màu đen - PM04D.jpg",
      "assets/images/Bút dạ kính thiên long màu đỏ - PM04DO.jpg",
      "assets/images/Bút dạ kính thiên long màu xanh - PM04X.jpg",
    ],
    featured: false,
    stock: 1200,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Đen",
        name: "Bút dạ kính Thiên Long màu đen - PM04D",
        sku: "PM04D",
        image: "assets/images/Bút dạ kính thiên long màu đen - PM04D.jpg",
        description: "Màu: Đen\nMã: PM04D (814559)\nĐơn vị tính: Cây",
        prices: [9000],
      },
      {
        label: "Đỏ",
        name: "Bút dạ kính Thiên Long màu đỏ - PM04DO",
        sku: "PM04DO",
        image: "assets/images/Bút dạ kính thiên long màu đỏ - PM04DO.jpg",
        description: "Màu: Đỏ\nMã: PM04DO (810339)\nĐơn vị tính: Cây",
        prices: [9000],
      },
      {
        label: "Xanh",
        name: "Bút dạ kính Thiên Long màu xanh - PM04X",
        sku: "PM04X",
        image: "assets/images/Bút dạ kính thiên long màu xanh - PM04X.jpg",
        description: "Màu: Xanh\nMã: PM04X (814535)\nĐơn vị tính: Cây",
        prices: [9000],
      },
    ],
  },
  {
    id: 70,
    sku: "PM09D",
    name: "Bút lông dầu Thiên Long - PM09",
    category: "Bút lông dầu",
    description:
      "Bút lông dầu Thiên Long PM09 bền màu, mực sặc sỡ, ghi tốt trên mọi bề mặt cứng như kim loại, nhựa, da, gỗ.",
    shortDescription: "Bút lông dầu PM09 (3 màu, mực đậm)",
    fullDescription: `Bút lông dầu PM09 của Thiên Long được thiết kế với thân bút lớn, mực nhiều hơn giúp sử dụng lâu bền.
- Mực chất lượng cao, độ bám dính tốt, không nhòe và không phai màu theo thời gian.
- Thân bút cầm nắm chắc chắn, phù hợp cho việc đánh dấu kho bãi, đóng gói hàng hóa.
- 3 màu sắc cơ bản: Đen, Đỏ, Xanh.

Quy cách: 10 cây/hộp
Đơn vị tính: Cây`,
    price: 9500,
    image: "assets/images/Bút lông dầu thiên long màu đen - PM09D.webp",
    images: [
      "assets/images/Bút lông dầu thiên long màu đen - PM09D.webp",
      "assets/images/Bút lông dầu thiên long màu đỏ - PM09DO.jpg",
      "assets/images/Bút lông dầu thiên long màu xanh - PM09X.webp",
    ],
    featured: true,
    stock: 1000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Đen",
        name: "Bút lông dầu thiên long màu đen - PM09D",
        sku: "PM09D",
        image: "assets/images/Bút lông dầu thiên long màu đen - PM09D.webp",
        description: "Màu: Đen\nMã: PM09D\nĐơn vị tính: Cây",
        prices: [9500],
      },
      {
        label: "Đỏ",
        name: "Bút lông dầu thiên long màu đỏ - PM09DO",
        sku: "PM09DO",
        image: "assets/images/Bút lông dầu thiên long màu đỏ - PM09DO.jpg",
        description: "Màu: Đỏ\nMã: PM09DO\nĐơn vị tính: Cây",
        prices: [9500],
      },
      {
        label: "Xanh",
        name: "Bút lông dầu thiên long màu xanh - PM09X",
        sku: "PM09X",
        image: "assets/images/Bút lông dầu thiên long màu xanh - PM09X.webp",
        description: "Màu: Xanh\nMã: PM09X (813972)\nĐơn vị tính: Cây",
        prices: [9500],
      },
    ],
  },
  {
    id: 71,
    sku: "TL023X",
    name: "Bút bi Thiên Long TL023",
    category: "Bút bi",
    description:
      "Bút bi Thiên Long TL023 là dòng bút bi truyền thống, thiết kế đơn giản, mực ra đều và êm tay.",
    shortDescription: "Bút bi TL023 (Màu: Xanh, Đen, Đỏ)",
    fullDescription: `Bút bi TL-023 là dòng bút văn phòng phổ thông của Thiên Long. 
- Thiết kế thon gọn, vỏ nhựa trong suốt giúp theo dõi lượng mực.
- Đầu bi 0.5mm cho nét viết thanh mảnh, mượt mà.
- Phù hợp cho ghi chép hàng ngày tại văn phòng và trường học.

Quy cách: 20 cây/hộp
Đơn vị tính: Cây`,
    price: 4200,
    image: "assets/images/Bút bi TL023.jpg",
    images: ["assets/images/Bút bi TL023.jpg"],
    featured: true,
    stock: 5000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Xanh",
        name: "Bút bi TL023X - Xanh",
        sku: "TL023X",
        image: "assets/images/Bút bi TL023.jpg",
        description: "Màu: Xanh\nQuy cách: 20 cây/hộp\nMã: TL023X",
        prices: [4200],
      },
      {
        label: "Đen",
        name: "Bút bi TL023 đen",
        sku: "TL023D",
        image: "assets/images/Bút bi TL023.jpg",
        description: "Màu: Đen\nQuy cách: 20 cây/hộp\nMã: TL023D",
        prices: [4200],
      },
      {
        label: "Đỏ",
        name: "Bút bi TL023 đỏ",
        sku: "TL023DO",
        image: "assets/images/Bút bi TL023.jpg",
        description: "Màu: Đỏ\nQuy cách: 20 cây/hộp\nMã: TL023DO",
        prices: [4200],
      },
    ],
  },
  {
    id: 72,
    sku: "TL093",
    name: "Bút bi Thiên Long TL093",
    category: "Bút bi",
    description:
      "Bút bi Thiên Long TL093 (Bút bấm) thiết kế năng động, tiện lợi với nút bấm nhẹ nhàng.",
    shortDescription: "Bút bi bấm TL093 (Siêu tiết kiệm)",
    fullDescription: `Bút bi bấm TL-093 là sự lựa chọn kinh tế cho mọi nhu cầu viết lách.
- Cơ chế bấm êm ái, bảo quản đầu bi tốt hơn.
- Mực chất lượng, viết êm, không bị chảy mực hay tắc nghẽn.
- Thân bút cứng cáp, bền bỉ.

Quy cách: 20 cây/hộp
Đơn vị tính: Cây`,
    price: 3500,
    image: "assets/images/Bút bi TL093.jpg",
    images: ["assets/images/Bút bi TL093.jpg"],
    featured: false,
    stock: 6000,
    origin: "Việt Nam",
  },
  {
    id: 73,
    sku: "TL024",
    name: "Bút bi FO024",
    category: "Bút bi",
    description:
      "Bút bi FlexOffice FO024 chất lượng quốc tế, kiểu dáng sang trọng, mực cao cấp.",
    shortDescription: "Bút bi FO024 (Xanh, Đen, Đỏ)",
    fullDescription: `Dòng sản phẩm bút bi cao cấp FO-024 từ thương hiệu FlexOffice của Thiên Long.
- Kiểu dáng hiện đại, đẳng cấp.
- Đầu bi nhập khẩu cho trải nghiệm viết siêu mượt.
- Màu mực đậm, tươi sáng và bền màu.

Quy cách: 20 cây/hộp
Đơn vị tính: Cây`,
    price: 4000,
    image: "assets/images/Bút bi FO024.jpg",
    images: ["assets/images/Bút bi FO024.jpg"],
    featured: false,
    stock: 3000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Xanh",
        name: "Bút bi FO024 - Xanh",
        sku: "TL024X",
        image: "assets/images/Bút bi FO024.jpg",
        description: "Màu: Xanh\nThương hiệu: FlexOffice\nĐơn vị tính: Cây",
        prices: [4000],
      },
      {
        label: "Đen",
        name: "Bút bi FO024 - Đen",
        sku: "TL024D",
        image: "assets/images/Bút bi FO024.jpg",
        description: "Màu: Đen\nThương hiệu: FlexOffice\nĐơn vị tính: Cây",
        prices: [4000],
      },
      {
        label: "Đỏ",
        name: "Bút bi FO024 - Đỏ",
        sku: "TL024DO",
        image: "assets/images/Bút bi FO024.jpg",
        description: "Màu: Đỏ\nThương hiệu: FlexOffice\nĐơn vị tính: Cây",
        prices: [4000],
      },
    ],
  },
  {
    id: 74,
    sku: "WB03X",
    name: "Bút lông bảng Thiên Long TL WB03",
    category: "Bút lông bảng",
    description:
      "Bút lông bảng Thiên Long WB03 chuyên dùng viết trên bảng trắng, mực đậm, dễ dàng xóa sạch bằng khăn ẩm.",
    shortDescription: "Bút lông bảng WB03 (Đen, Đỏ, Xanh)",
    fullDescription: `Bút lông bảng WB-03 là dòng sản phẩm chất lượng cao, thân thiện với người dùng.
- Mực tươi sáng, không độc hại theo tiêu chuẩn quốc tế.
- Đầu bút bền, không bị tòe ngòi khi viết lực mạnh.
- Dễ dàng bơm thêm mực khi hết.

Quy cách: 10 cây/hộp
Đơn vị tính: Cây`,
    price: 7200,
    image: "assets/images/Bút lông bảng TL WB03 xanh.webp",
    images: [
      "assets/images/Bút lông bảng TL WB03 xanh.webp",
      "assets/images/Bút lông bảng TL WB03 đen.jpg",
      "assets/images/Bút lông bảng TL WB03 đỏ.webp",
    ],
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Xanh",
        name: "Bút lông bảng WB03X",
        sku: "WB03X",
        image: "assets/images/Bút lông bảng TL WB03 xanh.webp",
        description: "Màu: Xanh\nMã nội bộ: 810087\nĐơn vị tính: Cây",
        prices: [7200],
      },
      {
        label: "Đen",
        name: "Bút lông bảng TL WB03 đen",
        sku: "WB03D",
        image: "assets/images/Bút lông bảng TL WB03 đen.jpg",
        description: "Màu: Đen\nQuy cách: 10 cây/hộp\nMã: WB03D",
        prices: [7200],
      },
      {
        label: "Đỏ",
        name: "Bút lông bảng TL WB03 đỏ",
        sku: "WB03DO",
        image: "assets/images/Bút lông bảng TL WB03 đỏ.webp",
        description: "Màu: Đỏ\nQuy cách: 10 cây/hộp\nMã: WB03DO",
        prices: [7200],
      },
    ],
  },
  {
    id: 75,
    sku: "HL101",
    name: "Bút dạ dầu Leaderart",
    category: "Bút dạ quang",
    description:
      "Bút dạ dầu Leaderart chất lượng cao, mực đậm, viết êm trên nhiều bề mặt.",
    shortDescription: "Bút dạ dầu Leaderart (10c/hộp)",
    fullDescription: `Bút dạ dầu Leaderart là dòng sản phẩm bền bỉ, mực sặc sỡ và không phai.
- Thiết kế chắc chắn, lượng mực nhiều.
- Ghi tốt trên bìa carton, gỗ, nhựa và kim loại.
- Phù hợp cho công việc đánh dấu trong kho bãi và đóng gói.

Quy cách: 10 cây/hộp
Đơn vị tính: Chiếc`,
    price: 7000,
    image: "assets/images/Lead Bìa bút.jpg",
    images: ["assets/images/Lead Bìa bút.jpg"],
    featured: false,
    stock: 1000,
    origin: "Đang cập nhật",
  },
  {
    id: 76,
    sku: "UB150N",
    name: "Bút UB-150 nhật",
    category: "Bút bi",
    description:
      "Bút bi nước Uni-ball UB-150 chính hãng Nhật Bản, nét viết siêu mượt, mực bền màu theo thời gian.",
    shortDescription: "Bút bi nước Uni-ball UB-150 (Nhật Bản)",
    fullDescription: `Uni-ball Eye UB-150 là dòng bút bi nước huyền thoại từ Nhật Bản.
- Công nghệ "Uni-flow System" giúp mực chảy đều đến giọt cuối cùng.
- Mực Pigment Ink chống nước và không phai màu.
- Thiết kế cổ điển, thanh lịch với cửa sổ hiển thị lượng mực.

Đơn vị tính: Chiếc`,
    price: 37000,
    image: "assets/images/Bút UB-150.png",
    images: ["assets/images/Bút UB-150.png"],
    featured: false,
    stock: 500,
    origin: "Nhật Bản",
  },
  {
    id: 77,
    sku: "2B37000",
    name: "Bút chì 2B 37000",
    category: "Bút chì",
    description:
      "Bút chì gỗ 2B mã 37000, thân gỗ bền, ruột chì mềm đậm, dễ gọt.",
    shortDescription: "Bút chì gỗ 2B 37000 (Chì mềm đậm)",
    fullDescription: `Bút chì gỗ 2B là dụng cụ học tập thiết yếu, phù hợp cho viết lách và vẽ phác thảo.
- Thân gỗ chất lượng cao, không bị nứt vỡ khi gọt.
- Ruột chì 2B cho nét vẽ đậm, mượt mà và dễ dàng tẩy sạch.

Đơn vị tính: Chiếc`,
    price: 4000,
    image: "assets/images/Bút chì 2B 37000.jpg",
    images: ["assets/images/Bút chì 2B 37000.jpg"],
    featured: false,
    stock: 3000,
    origin: "Việt Nam",
  },
  {
    id: 78,
    sku: "GBC",
    name: "Gọt chì Deli màu lẫn",
    category: "Bút chì",
    description:
      "Gọt chì Deli thiết kế nhỏ gọn, lưỡi dao sắc bén, nhiều màu sắc bắt mắt.",
    shortDescription: "Gọt chì Deli (Nhiều màu lẫn)",
    fullDescription: `Gọt chì Deli với lưỡi dao thép không gỉ, giúp gọt bút chì nhẹ nhàng và sắc nét.
- Thiết kế có hộp chứa vỏ chì tiện lợi, giữ vệ sinh khu vực làm việc.
- Màu sắc đa dạng, giao màu ngẫu nhiên.

Đơn vị tính: Chiếc`,
    price: 6000,
    image: "assets/images/Gọt chì  Deli  màu lẫn.webp",
    images: ["assets/images/Gọt chì  Deli  màu lẫn.webp"],
    featured: false,
    stock: 2000,
    origin: "Đang cập nhật",
  },
  {
    id: 79,
    sku: "RBL57X",
    name: "Ruột bút ký Pentel BL57 Xanh",
    category: "Ruột bút",
    description:
      "Ruột thay thế cho bút ký Pentel EnerGel BL57, mực xanh, nét 0.7mm.",
    shortDescription: "Ruột bút ký Pentel BL57 Xanh (0.7mm)",
    fullDescription: `Ruột thay thế chính hãng cho các dòng bút Pentel EnerGel BL57/BL77.
- Mực EnerGel khô nhanh, viết siêu mượt.
- Màu mực: Xanh.
- Kích thước ngòi: 0.7mm.

Đơn vị tính: Chiếc`,
    price: 21000,
    image: "assets/images/Ruột bút ký Pentel BL57 Xanh.webp",
    images: ["assets/images/Ruột bút ký Pentel BL57 Xanh.webp"],
    featured: false,
    stock: 1000,
    origin: "Nhật Bản",
  },
  {
    id: 80,
    sku: "ST010E1",
    name: "Dập ghim số 10 Plus",
    category: "Dập ghim & đục lỗ",
    description:
      "Máy dập ghim số 10 Plus bền bỉ, thiết kế nhỏ gọn, lực bấm nhẹ nhàng.",
    shortDescription: "Dập ghim Plus (ST010E1)",
    fullDescription: `Máy dập ghim Plus ST-010E1 là dụng cụ văn phòng phổ biến và đáng tin cậy.
- Chất liệu thép cao cấp sơn tĩnh điện bền đẹp.
- Cơ chế lò xo thông minh giúp bấm ghim nhẹ tay, không bị kẹt ghim.
- Phù hợp cho việc đóng tập tài liệu, hồ sơ học sinh, sinh viên.

Đơn vị tính: Chiếc`,
    price: 31000,
    image: "assets/images/Dập ghim số 10 Plus.png",
    images: ["assets/images/Dập ghim số 10 Plus.png"],
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
  },
  {
    id: 81,
    sku: "D221",
    name: "Dập ghim Deli",
    category: "Dập ghim & đục lỗ",
    description:
      "Các dòng máy dập ghim Deli thiết kế hiện đại, nhiều kích cỡ lựa chọn.",
    shortDescription: "Dập ghim Deli (D221, D229, D238)",
    fullDescription: `Dòng sản phẩm dập ghim chuyên nghiệp từ Deli.
- Thiết kế công thái học, cầm nắm thoải mái.
- Khả năng bấm được nhiều tờ cùng lúc một cách chính xác.
- Có nhiều model phù hợp cho nhu cầu văn phòng từ nhẹ đến trung bình.

Đơn vị tính: Chiếc`,
    price: 32000,
    image: "assets/images/Dập ghim số 10, D238.webp",
    images: [
      "assets/images/Dập ghim số 10, D238.webp",
      "assets/images/Dập ghim 10 Deli 221.jpg",
      "assets/images/Dập ghim 10 Deli 229.jpg",
    ],
    featured: true,
    stock: 400,
    origin: "Trung Quốc",
    typeOptions: [
      {
        label: "Deli 221",
        name: "Dập ghim 10 Deli 221",
        sku: "D221",
        image: "assets/images/Dập ghim 10 Deli 221.jpg",
        description: "Model: 221\nQuy cách: 1/12/192",
        prices: [32000],
      },
      {
        label: "Deli 229",
        name: "Dập ghim 10 Deli 229",
        sku: "D229",
        image: "assets/images/Dập ghim 10 Deli 229.jpg",
        description: "Model: 229\nQuy cách: 1/12/192\nMã: 002974",
        prices: [35000],
      },
      {
        label: "Deli 238",
        name: "Dập ghim số 10 Deli D238",
        sku: "D238",
        image: "assets/images/Dập ghim số 10, D238.webp",
        description: "Model: D238\nQuy cách: 1/12/192",
        prices: [37000],
      },
    ],
  },
  {
    id: 82,
    sku: "D0404",
    name: "Dao rọc giấy SDI",
    category: "Phụ kiện khác",
    description:
      "Dao rọc giấy SDI thương hiệu uy tín, lưỡi dao sắc bén, khóa tự động an toàn.",
    shortDescription: "Dao rọc giấy SDI (Nhỏ D0404 / To D0423)",
    fullDescription: `Dao rọc giấy SDI với thiết kế bọc nhựa bền chắc, giúp thao tác cắt giấy, bìa carton dễ dàng.
- Lưỡi dao bằng thép chống gỉ, độ sắc bén cao.
- Có lẫy khóa tự động giúp cố định lưỡi dao khi sử dụng.
- Đuôi dao tích hợp bộ phận bẻ lưỡi tiện lợi.

Đơn vị tính: Chiếc`,
    price: 9000,
    image: "assets/images/Dao rọc giấy SDI nhỏ D0404.jpg",
    images: [
      "assets/images/Dao rọc giấy SDI nhỏ D0404.jpg",
      "assets/images/Dao rọc giấy SDI nhỏ D0404.jpg",
    ],
    featured: false,
    stock: 800,
    origin: "Đài Loan",
    typeOptions: [
      {
        label: "Loại nhỏ D0404",
        name: "Dao rọc giấy SDI nhỏ D0404",
        sku: "D0404",
        image: "assets/images/Dao rọc giấy SDI nhỏ D0404.jpg",
        description: "Dòng dao nhỏ (D0404)\nQuy cách: 12 chiếc/hộp",
        prices: [9000],
      },
      {
        label: "Loại to D0423",
        name: "Dao rọc giấy SDI to D0423",
        sku: "D0423",
        image: "assets/images/Dao rọc giấy SDI nhỏ D0404.jpg",
        description: "Dòng dao to (D0423)\nQuy cách: 12 chiếc/hộp",
        prices: [13000],
      },
    ],
  },
  {
    id: 83,
    sku: "DG10PL",
    name: "Đạn ghim số 10 Plus",
    category: "Dập ghim & đục lỗ",
    description:
      "Đạn ghim (kim bấm) số 10 thương hiệu Plus, chất lượng ổn định, không gây kẹt máy.",
    shortDescription: "Đạn ghim số 10 Plus (1000 ghim/hộp)",
    fullDescription: `Kim bấm số 10 Plus chuyên dụng cho các loại máy dập ghim nhỏ.
- Làm từ thép mạ kẽm chống gỉ.
- Chân ghim sắc bén, dễ dàng xuyên qua nhiều tờ giấy.
- Đóng gói nhỏ gọn, tiện dụng.

Quy cách: Hộp nhỏ
Đơn vị tính: Hộp`,
    price: 3500,
    image: "assets/images/Đạn ghim số 10 plus.png",
    images: ["assets/images/Đạn ghim số 10 plus.png"],
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
  },
  {
    id: 84,
    sku: "2310",
    name: "Đạn ghim Trio",
    category: "Dập ghim & đục lỗ",
    description:
      "Các dòng đạn ghim đại Trio (23/xx), thép cứng, chịu lực tốt cho nhu cầu đóng tập dày.",
    shortDescription: "Đạn ghim Trio các kích cỡ (23/10 đến 23/24)",
    fullDescription: `Đạn ghim Trio dòng 23 là dòng kim bấm đại chuyên dùng cho các máy đóng sách, đóng tập hồ sơ dày.
- Chất liệu thép cao cấp, chân ghim cứng không bị quăn khi bấm qua tài liệu dày.
- Đa dạng về chiều dài chân ghim (từ 8mm đến 24mm) cho phép đóng từ 30 đến 200 tờ giấy.

Đơn vị tính: Hộp`,
    price: 17000,
    image: "assets/images/Đạn ghim TriO bìa.jpg",
    images: ["assets/images/Đạn ghim Trio 2381.jpg"],
    featured: false,
    stock: 1000,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "23/8",
        name: "Đạn ghim Trio 23/8 (2381)",
        sku: "2381",
        image: "assets/images/Đạn ghim trio.jpg",
        description: "Loại 23/8 (mã 2381)\nQuy cách: 1/20/240",
        prices: [16000],
      },
      {
        label: "23/10",
        name: "Đạn ghim Trio 23/10",
        sku: "2310",
        image: "assets/images/Đạn ghim trio.jpg",
        description: "Loại 23/10\nQuy cách: 1/20/200",
        prices: [17000],
      },
      {
        label: "23/13",
        name: "Đạn ghim Trio 23/13",
        sku: "2313",
        image: "assets/images/Đạn ghim trio.jpg",
        description: "Loại 23/13\nQuy cách: 1/15/150",
        prices: [19000],
      },
      {
        label: "23/15",
        name: "Đạn ghim Trio 23/15",
        sku: "2315",
        image: "assets/images/Đạn ghim trio.jpg",
        description: "Loại 23/15 (0023F)\nQuy cách: 1/15/150",
        prices: [24000],
      },
      {
        label: "23/20",
        name: "Đạn ghim Trio 23/20",
        sku: "2320",
        image: "assets/images/Đạn ghim trio.jpg",
        description: "Loại 23/20 (0023K)\nQuy cách: 1/20/120",
        prices: [27000],
      },
      {
        label: "23/23",
        name: "Đạn ghim Trio 23/23",
        sku: "2323",
        image: "assets/images/Đạn ghim trio.jpg",
        description: "Loại 23/23 (0023N)\nQuy cách: 1/20/120",
        prices: [39000],
      },
      {
        label: "23/24",
        name: "Đạn ghim Trio 23/24",
        sku: "2324",
        image: "assets/images/Đạn ghim trio.jpg",
        description: "Loại 23/24\nQuy cách: 1/20/120",
        prices: [55000],
      },
    ],
  },
  {
    id: 85,
    sku: "DL105",
    name: "Đục lỗ DELI",
    category: "Dập ghim & đục lỗ",
    description:
      "Máy đục lỗ Deli chịu lực tốt, lưỡi đục sắc bén, có thước căn chỉnh giấy tiện dụng.",
    shortDescription: "Đục lỗ Deli (Công suất 15 - 45 tờ)",
    fullDescription: `Máy đục lỗ chuyên dụng Deli với thiết kế thông minh, giúp đóng tập hồ sơ gọn gàng.
- Khoảng cách lỗ chuẩn quốc tế 80mm.
- Thước nhựa đi kèm giúp căn chỉnh giấy chính xác (A4, A5, B5...).
- Khay chứa vụn giấy dễ dàng tháo rời vệ sinh.

Đơn vị tính: Cái`,
    price: 75000,
    image: "assets/images/Đục lỗ đeli 15 tờ 0105.jpg",
    images: ["assets/images/Đục lỗ đeli 15 tờ 0105.jpg"],
    featured: false,
    stock: 300,
    origin: "Trung Quốc",
    typeOptions: [
      {
        label: "15 tờ (0105)",
        name: "Đục lỗ Deli 15 tờ 0105",
        sku: "DL105",
        image: "assets/images/Đục lỗ đeli 15 tờ 0105.jpg",
        description: "Công suất: 15 tờ\nModel: DL105 (0105)",
        prices: [75000],
      },
      {
        label: "35 tờ (117)",
        name: "Đục lỗ Deli 35 tờ 117",
        sku: "DL117",
        image: "assets/images/Đục lỗ đeli 35 tờ 117.jpg",
        description: "Công suất: 35 tờ\nModel: DL117 (117)",
        prices: [140000],
      },
      {
        label: "35 tờ (E0104)",
        name: "Đục lỗ Deli 35 tờ E0104",
        sku: "DL104",
        image: "assets/images/Đục lỗ đeli 35 tờ E0104.jpg",
        description: "Công suất: 35 tờ\nModel: DL104 (E0104)",
        prices: [125000],
      },
      {
        label: "45 tờ (E0143)",
        name: "Đục lỗ Deli 45 tờ E0143",
        sku: "DL143",
        image: "assets/images/Đục lỗ đeli 45 tờ E0143.jpg",
        description: "Công suất: 45 tờ\nModel: DL143 (E0143)",
        prices: [197000],
      },
    ],
  },
  {
    id: 86,
    sku: "6603",
    name: "Bìa lá Hồng Hà",
    category: "File lá",
    description:
      "Bìa lá Hồng Hà chất lượng cao, nhựa trong suốt, giúp bảo quản tài liệu sạch sẽ.",
    shortDescription: "Bìa lá Hồng Hà (20, 40, 60 lá)",
    fullDescription: `Bìa lá Hồng Hà (Clear Book) là sản phẩm lưu trữ hồ sơ tiện dụng cho học sinh và văn phòng.
- Chất liệu nhựa PP an toàn, độ bền cao.
- Các lá nhựa được ép chắc chắn, dễ dàng lật giở và chèn tài liệu.
- Phù hợp lưu trữ tài liệu khổ A4.

Đơn vị tính: Chiếc`,
    price: 25000,
    image: "assets/images/Bìa lá 20 lá Hồng Hà.webp",
    images: ["assets/images/Bìa lá 20 lá Hồng Hà.webp"],
    featured: false,
    stock: 500,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "20 lá",
        name: "Bìa lá 20 lá Hồng Hà",
        sku: "6603",
        image: "assets/images/Bìa lá 20 lá Hồng Hà.webp",
        description: "Số lá: 20\nMã: 6603\nQuy cách: 20 chiếc/thùng",
        prices: [25000],
      },
      {
        label: "40 lá",
        name: "Bìa lá 40 lá Hồng Hà",
        sku: "6604",
        image: "assets/images/Bìa lá 40 lá Hồng Hà.webp",
        description: "Số lá: 40\nMã: 6604\nQuy cách: 12 chiếc/thùng",
        prices: [36000],
      },
      {
        label: "60 lá",
        name: "Bìa lá 60 lá Hồng Hà",
        sku: "6605",
        image: "assets/images/Bìa lá 60 lá Hồng Hà.webp",
        description: "Số lá: 60\nMã: 6605\nQuy cách: 12 chiếc/thùng",
        prices: [46000],
      },
    ],
  },
  {
    id: 87,
    sku: "F40DB",
    name: "Bìa lá Double A",
    category: "File lá",
    description:
      "Bìa lá thương hiệu Double A cao cấp, nhựa dày, bề mặt mịn màng.",
    shortDescription: "Bìa lá Double A (40, 60 lá)",
    fullDescription: `Bìa lá Double A mang lại sự chuyên nghiệp cho việc lưu trữ tài liệu.
- Nhựa PP độ dày tiêu chuẩn, không dính tài liệu vào lá nhựa.
- Thiết kế gáy bìa chắc chắn, màu sắc trang nhã.

Đơn vị tính: Chiếc`,
    price: 39000,
    image: "assets/images/Bìa lá 40 Double A.webp",
    images: ["assets/images/Bìa lá 40 Double A.webp"],
    featured: false,
    stock: 300,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "40 lá",
        name: "Bìa lá 40 Double A",
        sku: "F40DB",
        image: "assets/images/Bìa lá 40 Double A.webp",
        description: "Số lá: 40\nMã: 2292\nQuy cách: 1/12/36",
        prices: [39000],
      },
      {
        label: "60 lá",
        name: "Bìa lá 60 Double A",
        sku: "F60DB",
        image: "assets/images/Bìa lá 60 Double A.webp",
        description: "Số lá: 60\nMã: 8782\nQuy cách: 1/6/24",
        prices: [52000],
      },
    ],
  },
  {
    id: 88,
    sku: "01932",
    name: "Bìa lá Deli",
    category: "File lá",
    description:
      "Bìa lá Deli thiết kế trẻ trung, nhiều ngăn chứa, thuận tiện phân loại hồ sơ.",
    shortDescription: "Bìa lá Deli (20, 40, 80 lá)",
    fullDescription: `Sản phẩm bìa lá từ Deli giúp tối ưu hóa không gian làm việc.
- Màu sắc tươi sáng, dễ nhìn.
- Nhựa dẻo dai, bảo vệ giấy tờ khỏi ẩm mốc và bụi bẩn.

Đơn vị tính: Chiếc`,
    price: 24000,
    image: "assets/images/Bìa lá 20 lá A4 Deli.jpg",
    images: ["assets/images/Bìa lá 20 lá A4 Deli.jpg"],
    featured: false,
    stock: 400,
    origin: "Trung Quốc",
    typeOptions: [
      {
        label: "20 lá",
        name: "Bìa lá 20 lá A4 Deli 01932",
        sku: "01932",
        image: "assets/images/Bìa lá 20 lá A4 Deli.jpg",
        description: "Mã: 01932\nQuy cách: 1/12/72",
        prices: [24000],
      },
      {
        label: "40 lá",
        name: "Bìa lá 40 lá Deli 02132",
        sku: "02132",
        image: "assets/images/Bìa lá 40 lá deli.jpg",
        description: "Mã: 02132\nQuy cách: 1/12/48",
        prices: [33000],
      },
      {
        label: "80 lá",
        name: "Bìa lá 80 lá A4 Deli 02332",
        sku: "02332",
        image: "assets/images/Bìa lá 80 lá a4 Deli.webp",
        description: "Mã: 02332\nQuy cách: 1/6/24",
        prices: [53000],
      },
    ],
  },
  {
    id: 89,
    sku: "PPFFA4",
    name: "Bìa Acor có lỗ TL - PPFFA4",
    category: "File lá",
    description:
      "Bìa Accor nhựa có lỗ Thiên Long, dùng kẹp tài liệu trong các tập file còng.",
    shortDescription: "Bìa Acor TL (500 cái/thùng)",
    fullDescription: `Bìa Accor (Acor) Thiên Long là giải pháp kẹp hồ sơ mỏng, nhẹ và linh hoạt.
- Có sẵn lỗ đục chuẩn để lắp vào file còng.
- Thanh kẹp chắc chắn, giữ giấy không bị rơi.

Đơn vị tính: Bìa`,
    price: 6000,
    image: "assets/images/Bìa Acor có lỗ TL.webp",
    images: ["assets/images/Bìa Acor có lỗ TL.webp"],
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
  },
  {
    id: 90,
    sku: "PLUS_LC",
    name: "File còng Plus",
    category: "File còng",
    description:
      "File còng bật Plus Nhật Bản, chất lượng cao, bền bỉ vượt thời gian.",
    shortDescription: "File còng Plus (A4/F4, gáy 5/7/9cm)",
    fullDescription: `File còng bật cao cấp từ thương hiệu Plus.
- Còng bật bằng thép không gỉ, lực kẹp mạnh, sử dụng hàng ngàn lần không hỏng.
- Bìa bọc Simili bền đẹp, bảo vệ tài liệu tối đa.
- Có đầy đủ kích cỡ cho khổ giấy A4 và F4.

Đơn vị tính: Chiếc`,
    price: 45000,
    image: "assets/images/File còng Plus 5cm F4.jpg",
    images: ["assets/images/File còng Plus 5cm F4.jpg"],
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "F4 5cm",
        name: "File còng PLUS F4 5cm",
        sku: "84V210",
        image: "assets/images/File còng PLUS 5cm F4.jpg",
        description: "Khổ giấy: F4\nĐộ dày gáy: 5cm",
        prices: [45000],
      },
      {
        label: "F4 7cm",
        name: "File còng PLUS F4 7cm",
        sku: "80V024",
        image: "assets/images/File còng Plus 7cm F4.jpg",
        description: "Khổ giấy: F4\nĐộ dày gáy: 7cm",
        prices: [45000],
      },
      {
        label: "F4 9cm",
        name: "File còng PLUS F4 9cm",
        sku: "84V18",
        image: "assets/images/File còng plus  9cm F4.jpg",
        description: "Khổ giấy: F4\nĐộ dày gáy: 9cm",
        prices: [60000],
      },
      {
        label: "A4 5cm",
        name: "File còng PLUS A4 5cm",
        sku: "84V214",
        image: "assets/images/File còng plus 5cm A4.jpg",
        description: "Khổ giấy: A4\nĐộ dày gáy: 5cm",
        prices: [45000],
      },
      {
        label: "A4 7cm",
        name: "File còng PLUS A4 7cm",
        sku: "84V204",
        image: "assets/images/File còng A4 7cm Plus.jpg",
        description: "Khổ giấy: A4\nĐộ dày gáy: 7cm",
        prices: [45000],
      },
      {
        label: "A4 9cm",
        name: "File còng PLUS A4 9cm",
        sku: "84V28",
        image: "assets/images/File còng Plus A4 9cm.jpg",
        description: "Khổ giấy: A4\nĐộ dày gáy: 9cm",
        prices: [60000],
      },
    ],
  },
  {
    id: 91,
    sku: "DELI_LC",
    name: "File còng Deli",
    category: "File còng",
    description:
      "File còng Deli thiết kế hiện đại, khóa còng chắc chắn, giá thành hợp lý.",
    shortDescription: "File còng Deli (A4/F4, gáy 5/7cm)",
    fullDescription: `Sản phẩm File còng Deli phù hợp cho nhu cầu lưu trữ hồ sơ văn phòng lớn.
- Khóa còng mượt mà, dễ vận hành.
- Bìa nhựa cứng cáp, chống thấm nước tốt.

Đơn vị tính: Chiếc`,
    price: 42000,
    image: "assets/images/File còng F4 7cm Deli 38169.jpg",
    images: ["assets/images/File còng F4 7cm Deli 38169.jpg"],
    featured: false,
    stock: 600,
    origin: "Trung Quốc",
    typeOptions: [
      {
        label: "Khổ F4",
        name: "File còng Deli khổ F4",
        sku: "38168",
        image: "assets/images/File còng F4 5cm Deli 38168.jpg",
        sizes: ["5cm", "7cm"],
        prices: [42000, 42000],
        skus: ["38168", "38169"],
      },
      {
        label: "Khổ A4",
        name: "File còng Deli khổ A4",
        sku: "38178",
        image: "assets/images/File còng A4 5cm Deli 38178.webp",
        sizes: ["5cm", "7cm"],
        prices: [42000, 42000],
        skus: ["38178", "38179"],
      },
    ],
  },
  {
    id: 92,
    sku: "LAF300",
    name: "File còng Kokuyo",
    category: "File còng",
    description:
      "File còng Kokuyo nổi tiếng với độ bền và thiết kế tối ưu cho lưu trữ dài hạn.",
    shortDescription: "File còng Kokuyo (A/F 9cm, F 7cm)",
    fullDescription: `Thương hiệu Kokuyo đến từ Nhật Bản bảo chứng cho chất lượng lưu trữ.
- Cơ chế bật mở còng nhẹ nhàng, chính xác.
- Khổ giấy đa dạng phù hợp với mọi loại hồ sơ doanh nghiệp.

Đơn vị tính: Chiếc`,
    price: 67000,
    image: "assets/images/File còng Kokuyo khổ A 9cm.jpg",
    images: ["assets/images/File còng Kokuyo khổ A 9cm.jpg"],
    featured: false,
    stock: 300,
    origin: "Nhật Bản",
    typeOptions: [
      {
        label: "Khổ A 9cm",
        name: "File còng Kokuyo khổ A 9cm",
        sku: "LAF300",
        image: "assets/images/File còng Kokuyo khổ A 9cm.jpg",
        description: "Mã: LAF300\nQuy cách: 40c/thùng",
        prices: [67000],
      },
      {
        label: "Khổ F 9cm",
        name: "File còng Kokuyo khổ F 9cm",
        sku: "LAF305",
        image: "assets/images/File còng Kokuyo khổ F 9cm.jpg",
        description: "Mã: LAF305\nQuy cách: 40c/thùng",
        prices: [67000],
      },
      {
        label: "Khổ F 7cm",
        name: "File còng bật Kokuyo khổ F 7cm",
        sku: "LAF295",
        image: "assets/images/File còng Kokuyo khổ F 7cm 295.jpg",
        description: "Mã: LAF295",
        prices: [53000],
      },
    ],
  },
  {
    id: 93,
    sku: "FLS25",
    name: "File hộp gấp simil",
    category: "File hộp",
    description:
      "File hộp gấp simili gọn gàng, bảo vệ hồ sơ khỏi bụi bẩn và tác động bên ngoài.",
    shortDescription: "File hộp gấp simil (25cm, 30cm)",
    fullDescription: `Giải pháp lưu trữ hồ sơ dạng đứng, giúp kệ sách/tủ hồ sơ luôn ngăn nắp.
- Chất liệu simili dán bền bỉ, dễ lau chùi.
- Có thể gấp gọn khi không sử dụng.

Đơn vị tính: Chiếc`,
    price: 58000,
    image: "assets/images/File hộp  gấp  simil 25cm.jpg",
    images: ["assets/images/File hộp  gấp  simil 25cm.jpg"],
    featured: false,
    stock: 200,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "25cm",
        name: "File hộp gấp simil 25cm",
        sku: "FLS25",
        image: "assets/images/File hộp  gấp  simil 25cm.jpg",
        prices: [58000],
      },
      {
        label: "30cm",
        name: "File hộp gấp simil 30cm",
        sku: "FLS30",
        image: "assets/images/File hộp  gấp  simil 30cm.jpg",
        prices: [68000],
      },
    ],
  },
  {
    id: 94,
    sku: "TK2",
    name: "Trình ký nhựa Thiên Long TL A4",
    category: "Túi khuy và sổ",
    description:
      "Trình ký nhựa Thiên Long bền chắc, kẹp inox không gỉ, kiểu dáng chuyên nghiệp.",
    shortDescription: "Trình ký nhựa TL A4 (Đơn, Đôi)",
    fullDescription: `Dụng cụ hỗ trợ ký kết và lưu giữ tài liệu tạm thời của Thiên Long.
- Nhựa cứng cao cấp không bị cong vênh.
- Kẹp inox lực kẹp mạnh, giữ được nhiều tờ giấy cùng lúc.

Đơn vị tính: Chiếc`,
    price: 24000,
    image: "assets/images/Trình ký nhựa đôi TL A4.jpg",
    images: ["assets/images/Trình ký nhựa đôi TL A4.jpg"],
    featured: false,
    stock: 600,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Trình ký đôi",
        name: "Trình ký nhựa đôi TL A4",
        sku: "TK2",
        image: "assets/images/Trình ký nhựa đôi TL A4.jpg",
        description: "Loại: Đôi (có nắp đậy)\nMã: TK2",
        prices: [24000],
      },
      {
        label: "Trình ký đơn",
        name: "Trình ký nhựa đơn TL A4",
        sku: "TK1",
        image: "assets/images/Trình ký nhựa đơn A4.jpg",
        description: "Loại: Đơn (không nắp)\nMã: TK1",
        prices: [18000],
      },
    ],
  },
  {
    id: 95,
    sku: "38566",
    name: "Kẹp đen DELI",
    category: "Phụ kiện khác",
    description:
      "Kẹp đen binder clips Deli chất lượng cao, độ đàn hồi tốt, kẹp tài liệu chắc chắn.",
    shortDescription: "Kẹp đen Deli các kích cỡ (15mm - 51mm)",
    fullDescription: `Kẹp đen Deli (Binder Clips) là vật dụng không thể thiếu cho việc kẹp giữ hồ sơ, tài liệu.
- Làm từ thép bền bỉ, sơn tĩnh điện chống gỉ sét.
- Lực kẹp mạnh, không làm biến dạng giấy liệu.
- Đa dạng kích cỡ phù hợp với nhiều độ dày tập tài liệu khác nhau.

Đơn vị tính: Hộp`,
    price: 5000,
    image: "assets/images/Kẹp đen bìa.jpg",
    images: ["assets/images/Kẹp đen Deli 25mm.jpg"],
    featured: false,
    stock: 5000,
    origin: "Trung Quốc",
    typeOptions: [
      {
        label: "15mm",
        name: "Kẹp đen Deli 15mm",
        sku: "38566",
        image: "assets/images/Kẹp đen Deli 15mm.jpg",
        description: "Kích thước: 15mm\nQuy cách: 1/12/360",
        prices: [5000],
      },
      {
        label: "19mm",
        name: "Kẹp đen Deli 19mm",
        sku: "38565",
        image: "assets/images/Kẹp đen Deli 19mm.jpg",
        description: "Kích thước: 19mm\nQuy cách: 1/12/300",
        prices: [6000],
      },
      {
        label: "25mm",
        name: "Kẹp đen Deli 25mm",
        sku: "38564",
        image: "assets/images/Kẹp đen Deli 25mm.jpg",
        description: "Kích thước: 25mm\nQuy cách: 1/12/240",
        prices: [9000],
      },
      {
        label: "32mm",
        name: "Kẹp đen Deli 32mm",
        sku: "38563",
        image: "assets/images/Kẹp đen Deli 32mm.webp",
        description: "Kích thước: 32mm\nQuy cách: 1/12/120",
        prices: [12000],
      },
      {
        label: "41mm",
        name: "Kẹp đen Deli 41mm",
        sku: "38562",
        image: "assets/images/Kẹp đen Deli 41mm.jpg",
        description: "Kích thước: 41mm\nQuy cách: 1/108",
        prices: [17000],
      },
      {
        label: "51mm",
        name: "Kẹp đen Deli 51mm",
        sku: "38561",
        image: "assets/images/Kẹp đen Deli 51mm.jpg",
        description: "Kích thước: 51mm\nQuy cách: 1/60",
        prices: [28000],
      },
    ],
  },
  {
    id: 96,
    sku: "KD41D",
    name: "Kẹp đen Echo DoubleA",
    category: "Phụ kiện khác",
    description:
      "Kẹp đen cao cấp Echo từ Double A, chất liệu thép cứng cáp, siêu bền.",
    shortDescription: "Kẹp đen Echo DoubleA (41mm, 51mm)",
    fullDescription: `Dòng sản phẩm kẹp đen Echo của Double A nổi tiếng với độ bền cao và tính thẩm mỹ.
- Thép tôi cứng chịu lực tốt.
- Tay kẹp linh hoạt, dễ sử dụng.

Đơn vị tính: Hộp`,
    price: 16000,
    image: "assets/images/Kẹp đen 41mm Echo DoubleA.jpg",
    images: ["assets/images/Kẹp đen 41mm Echo DoubleA.jpg"],
    featured: false,
    stock: 2000,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "41mm",
        name: "Kẹp đen 41mm Echo DoubleA",
        sku: "KD41D",
        image: "assets/images/Kẹp đen 41mm Echo DoubleA.jpg",
        description: "Kích thước: 41mm\nMã: KD41D\nQuy cách: 1/72",
        prices: [16000],
      },
      {
        label: "51mm",
        name: "Kẹp đen 51mm Echo Double A",
        sku: "KD51D",
        image: "assets/images/Kẹp đen 51mm Echo  Double A.png",
        description: "Kích thước: 51mm\nMã: KD51D\nQuy cách: 1/48",
        prices: [27000],
      },
    ],
  },
  {
    id: 97,
    sku: "CBDDL811",
    name: "Cắt băng dính để bàn DL811",
    category: "Băng dính",
    description:
      "Dụng cụ cắt băng dính để bàn Deli DL811, thiết kế nặng chắc, lưỡi cắt sắc bén.",
    shortDescription: "Cắt băng dính Deli (Mã DL811)",
    fullDescription: `Cắt băng dính Deli DL811 là trợ thủ đắc lực cho công việc văn phòng và đóng gói.
- Thân máy bằng nhựa ABS cao cấp, đế có lớp chống trượt giúp cố định máy khi kéo băng dính.
- Lưỡi cắt bằng thép không gỉ, sắc bén và bền bỉ.
- Phù hợp với các loại băng dính văn phòng phổ biến (lõi nhỏ).

Đơn vị tính: Cái`,
    price: 29000,
    image: "assets/images/Cắt băng dính để bàn DL811.jpg",
    images: ["assets/images/Cắt băng dính để bàn DL811.jpg"],
    featured: false,
    stock: 500,
    origin: "Trung Quốc",
  },
  {
    id: 98,
    sku: "BDVP12",
    name: "Băng dính văn phòng",
    category: "Băng dính",
    description:
      "Băng dính văn phòng vàng chanh, độ dính tốt, phù hợp cho kẹp giấy, dán phong bì.",
    shortDescription: "Băng dính VP (1.2cm / 1.8cm)",
    fullDescription: `Băng dính văn phòng loại nhỏ, màu vàng chanh trong suốt.
- Độ bám dính cao trên bề mặt giấy.
- Dễ dàng sử dụng với các loại đồ cắt băng dính cầm tay hoặc để bàn.

Đơn vị tính: Cuộn`,
    price: 2000,
    image: "assets/images/Băng dính vàng chanh VP.webp",
    images: [
      "assets/images/Băng dính vàng chanh VP.webp",
      "assets/images/Băng dính vàng chanh vp 1.webp",
    ],
    featured: false,
    stock: 5000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "1.2cm",
        name: "Băng dính vp 1.2cm 240g",
        sku: "BDVP12",
        image: "assets/images/Băng dính vàng chanh vp 1.webp",
        description: "Bản rộng: 1.2cm\nQuy cách: 12 cuộn/cây",
        prices: [2000],
      },
      {
        label: "1.8cm",
        name: "Băng dính vp 1.8cm 240g",
        sku: "BDVP18",
        image: "assets/images/Băng dính vàng chanh VP.webp",
        description: "Bản rộng: 1.8cm\nQuy cách: 10 cuộn/cây",
        prices: [3000],
      },
    ],
  },
  {
    id: 99,
    sku: "BDHS",
    name: "Băng dính 1kg/cuộn LN10li",
    category: "Băng dính",
    description:
      "Băng dính đóng thùng loại nặng 1kg/cuộn, lõi nhựa 10li, siêu dính.",
    shortDescription: "Băng dính 1kg (Hải sản / Trong / LN5li)",
    fullDescription: `Dòng băng dính đóng hàng chuyên nghiệp, tiết kiệm và chắc chắn.
- Khối lượng: 1kg/cuộn.
- Lõi nhựa: 10li (chống ẩm, chịu lực tốt).
- Phù hợp cho đóng hàng nặng, vận chuyển đi xa.

Đơn vị tính: Cuộn`,
    price: 45000,
    image: "assets/images/Băng dính.jpg",
    images: ["assets/images/Băng dính.jpg"],
    featured: true,
    stock: 1000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Hải sản 60",
        name: "Băng dính 1kg/cuộn Hải sản 60",
        sku: "BDHS",
        image: "assets/images/Băng dính.jpg",
        description: "Loại: Hải sản 60\nQuy cách: 6c/cây",
        prices: [45000],
      },
      {
        label: "Trong 60",
        name: "Băng dính 1kg/cuộn Trong 60",
        sku: "BDT10",
        image: "assets/images/Băng dính.jpg",
        description: "Loại: Trong 60\nQuy cách: 6c/cây",
        prices: [45000],
      },
      {
        label: "LN5li Trong 60",
        name: "Băng dính 1kg/cuộn LN5li Trong 60",
        sku: "BDT10.5li",
        image: "assets/images/Băng dính.jpg",
        description: "Loại: LN5li Trong 60\nQuy cách: 6c/cây",
        prices: [47500],
      },
    ],
  },
  {
    id: 100,
    sku: "BDT05.2",
    name: "Băng dính 0,5kg/cuộn 4.8cm",
    category: "Băng dính",
    description: "Băng dính đóng thùng 0.5kg/cuộn, bản rộng 4.8cm tiêu chuẩn.",
    shortDescription: "Băng dính 0.5kg (LN5li / LN3.6li)",
    fullDescription: `Băng dính đóng gói thông dụng, độ dài vừa phải, dễ thao tác.
- Khối lượng: 0.5kg/cuộn.
- Bản rộng: 4.8cm.
- Màu sắc: Trong.

Đơn vị tính: Cuộn`,
    price: 22000,
    image: "assets/images/Băng dính(1).jpg",
    images: ["assets/images/Băng dính(1).jpg"],
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "LN5li Trong 60",
        name: "Băng dính 0,5kg/cuộn LN5li Trong 60",
        sku: "BDT05.2",
        image: "assets/images/Băng dính(1).jpg",
        description: "Lõi nhựa: 5li\nQuy cách: 6 cuộn/cây",
        prices: [22000],
      },
      {
        label: "LN3.6li Trong 60",
        name: "Băng dính 0,5kg/cuộn LN3.6li Trong 60",
        sku: "BDT05.1",
        image: "assets/images/Băng dính(1).jpg",
        description: "Lõi nhựa: 3.6li\nQuy cách: 6 cuộn/cây",
        prices: [23000],
      },
    ],
  },
  {
    id: 101,
    sku: "BD80Y1",
    name: "Băng dính 72m vàng chanh",
    category: "Băng dính",
    description: "Băng dính màu vàng chanh, độ dài 72m màng 50 mic siêu dính.",
    shortDescription: "Băng dính 72m (3.6cm / 4cm)",
    fullDescription: `Băng dính màu vàng chanh giúp dễ dàng nhận biết vị trí dán.
- Độ dài: 72 mét.
- Độ dày màng: 50 mic.
- Thường dùng dán túi nilon, đóng gói hàng nhẹ.

Đơn vị tính: Cuộn`,
    price: 9000,
    image: "assets/images/Băng dính vàng chanh.jpg",
    images: [
      "assets/images/Băng dính vàng chanh.jpg",
      "assets/images/Băng dính vàng chanh (1).jpg",
    ],
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "3.6cm",
        name: "Băng dính 3.6cm x 72m vàng chanh",
        sku: "BD80Y1",
        image: "assets/images/Băng dính vàng chanh.jpg",
        description: "Bản rộng: 3.6cm\nQuy cách: 8 cuộn/cây",
        prices: [9000],
      },
      {
        label: "4cm",
        name: "Băng dính 4cm x 72m vàng chanh",
        sku: "BD80Y2",
        image: "assets/images/Băng dính vàng chanh (1).jpg",
        description: "Bản rộng: 4cm\nQuy cách: 8 cuộn/cây",
        prices: [10000],
      },
    ],
  },
  {
    id: 102,
    sku: "BD2M1",
    name: "Băng dính 2 mặt",
    category: "Băng dính",
    description:
      "Băng dính hai mặt đa năng, dính tốt trên nhiều bề mặt giấy, gỗ, nhựa.",
    shortDescription: "Băng dính 2 mặt (1cm - 7cm)",
    fullDescription: `Băng dính hai mặt trắng (màng mỏng) ứng dụng rộng rãi trong văn phòng và thủ công.
- Lớp keo Acrylic dính chắc ở cả hai mặt.
- Dễ xé bằng tay.
- Phù hợp dán ảnh, bao thư, trang trí.

Đơn vị tính: Cuộn`,
    price: 1500,
    image: "assets/images/Băng dính 2 mặt.webp",
    images: [
      "assets/images/Băng dính 2 mặt.webp",
      "assets/images/Băng dính 2 mặt (1).jpg",
      "assets/images/Băng dính 2 mặt 5cmx18m.jpg",
    ],
    featured: false,
    stock: 5000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "1cm",
        name: "Băng dính 2 mặt 1cm",
        sku: "BD2M1",
        image: "assets/images/Băng dính 2 mặt.webp",
        description: "Bản rộng: 1cm\nQuy cách: 30 cuộn/cây",
        prices: [1500],
      },
      {
        label: "2cm",
        name: "Băng dính 2 mặt 2cm",
        sku: "BD2M2",
        image: "assets/images/Băng dính 2 mặt (1).jpg",
        description: "Bản rộng: 2cm",
        prices: [7000],
      },
      {
        label: "5cm",
        name: "Băng dính 2 mặt 5cm x 18m",
        sku: "BD2M5",
        image: "assets/images/Băng dính 2 mặt 5cmx18m.jpg",
        description: "Bản rộng: 5cm\nChiều dài: 18m",
        prices: [15000],
      },
      {
        label: "7cm",
        name: "Băng dính 2 mặt 7cm",
        sku: "BD2M7",
        image: "assets/images/Băng dính 2 mặt (1).jpg",
        description: "Bản rộng: 7cm",
        prices: [16000],
      },
    ],
  },
  {
    id: 103,
    sku: "BDS3",
    name: "Băng dính simily",
    category: "Băng dính",
    description:
      "Băng dính simily (băng dính dán gáy sách) màu xanh dương, chịu lực và bền màu.",
    shortDescription: "Băng dính Simily Xanh (3cm, 5cm, 7cm)",
    fullDescription: `Băng dính Simily chuyên dụng cho việc đóng gáy sách, hồ sơ.
- Màu sắc: Xanh dương đậm.
- Bề mặt có gân giúp tăng độ bám và tính thẩm mỹ.
- Keo dính cực mạnh, bền bỉ theo thời gian.

Đơn vị tính: Cuộn`,
    price: 8000,
    image: "assets/images/Băng dính simily 3cm dầy.jpg",
    images: [
      "assets/images/Băng dính simily 3cm dầy.jpg",
      "assets/images/Băng dính simily 5cm.webp",
      "assets/images/Băng dính simily 7cm.jpg",
    ],
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "3cm",
        name: "Băng dính simily 3cm dầy",
        sku: "BDS3",
        image: "assets/images/Băng dính simily 3cm dầy.jpg",
        description: "Bản rộng: 3cm\nQuy cách: 10 cuộn/cây",
        prices: [8000],
      },
      {
        label: "5cm",
        name: "Băng dính simily 5cm dầy",
        sku: "BDS5",
        image: "assets/images/Băng dính simily 5cm.webp",
        description: "Bản rộng: 5cm\nQuy cách: 6 cuộn/cây",
        prices: [10000],
      },
      {
        label: "7cm",
        name: "Băng dính simily 7cm dầy",
        sku: "BDS7",
        image: "assets/images/Băng dính simily 7cm.jpg",
        description: "Bản rộng: 7cm\nQuy cách: 4 cuộn/cây",
        prices: [12000],
      },
    ],
  },
  {
    id: 104,
    sku: "GVL",
    name: "Giấy vila 280 tờ",
    category: "Phụ kiện khác",
    description: "Giấy vila 280 tờ chất lượng cao, mềm mại.",
    shortDescription: "Giấy vila 280 tờ (Gói)",
    price: 14000,
    unit: "gói",
    image: "assets/images/Giấy vila 280 tờ.webp",
    featured: false,
    stock: 1000,
    origin: "Việt Nam",
  },
  {
    id: 105,
    sku: "VSBOSS",
    name: "Giấy vệ sinh Boss 10c/túi",
    category: "Phụ kiện khác",
    description: "Giấy vệ sinh Boss cao cấp, 10 cuộn/túi.",
    shortDescription: "Giấy vệ sinh Boss 10c/túi (Cuộn)",
    price: 60000,
    unit: "cuộn",
    image: "assets/images/Giấy boss.jpg",
    featured: false,
    stock: 1000,
    origin: "Việt Nam",
  },
  {
    id: 106,
    sku: "VSCN",
    name: "Giấy vệ sinh công nghiệp 700g",
    category: "Phụ kiện khác",
    description: "Giấy vệ sinh công nghiệp chất lượng cao, trọng lượng 700g.",
    shortDescription: "Giấy vệ sinh công nghiệp 700g (2 loại)",
    price: 27000,
    image: "assets/images/Giấy vệ sinh công nghiệp 700g.jpg",
    featured: false,
    stock: 500,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "700g Tiêu chuẩn",
        name: "Giấy vệ sinh công nghiệp 700g",
        sku: "VSCN",
        image: "assets/images/Giấy vệ sinh công nghiệp 700g.jpg",
        description: "Trọng lượng: 700g\nĐơn vị tính: Cuộn",
        prices: [27000],
      },
      {
        label: "700g Nhập khẩu",
        name: "Giấy vệ sinh công nghiệp 700g (nhập khẩu)",
        sku: "VSCN2",
        image: "assets/images/Giấy công nghiệp 700g nhập khẩu.webp",
        description: "Trọng lượng: 700g (nhập khẩu)\nĐơn vị tính: Cuộn",
        prices: [23000],
      },
    ],
  },
  {
    id: 107,
    sku: "TZIP",
    name: "Túi zíp viền đỏ",
    category: "Phụ kiện khác",
    description: "Túi zíp viền đỏ bền đẹp, nhiều kích thước.",
    shortDescription: "Túi zíp viền đỏ (kg)",
    price: 80000,
    unit: "kg",
    image: "assets/images/túi zíp viền đỏ.jpg",
    featured: false,
    stock: 200,
    origin: "Việt Nam",
  },
  {
    id: 108,
    sku: "TBT60",
    name: "Túi bóng trắng 60 x 100cm",
    category: "Phụ kiện khác",
    description: "Túi bóng trắng kích thước 60 x 100cm.",
    shortDescription: "Túi bóng trắng 60 x 100cm (kg)",
    price: 45000,
    unit: "kg",
    image: "assets/images/Túi bóng trắng 60x100cm.jpg",
    featured: false,
    stock: 300,
    origin: "Việt Nam",
  },
  {
    id: 109,
    sku: "GTSD",
    name: "Găng tay bảo hộ các loại",
    category: "Phụ kiện khác",
    description:
      "Găng tay bảo hộ lao động nhiều chủng loại: sợi, sơn đỏ, sơn ngón, sơn bàn xanh.",
    shortDescription: "Găng tay bảo hộ (4 loại)",
    price: 4000,
    image: "assets/images/Găng tay sợi sơn đỏ.jpg",
    images: [
      "assets/images/Găng tay sợi sơn đỏ.jpg",
      "assets/images/Găng tay sợi.jpg",
      "assets/images/Găng tay trắng sơn ngón.webp",
      "assets/images/Găng tay sơn bàn xanh.jpg",
    ],
    featured: false,
    stock: 5000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Sợi sơn đỏ",
        name: "Găng tay sợi sơn đỏ",
        sku: "GTSD",
        image: "assets/images/Găng tay sợi sơn đỏ.jpg",
        description: "Loại: Sợi sơn đỏ\nĐơn vị tính: Đôi",
        prices: [4000],
      },
      {
        label: "Găng tay sợi",
        name: "Găng tay sợi",
        sku: "GTS",
        image: "assets/images/Găng tay sợi.jpg",
        description: "Loại: Găng tay sợi\nĐơn vị tính: Đôi",
        prices: [3500],
      },
      {
        label: "Trắng sơn ngón",
        name: "Găng tay trắng sơn ngón",
        sku: "GTTN",
        image: "assets/images/Găng tay trắng sơn ngón.webp",
        description: "Loại: Trắng sơn ngón\nĐơn vị tính: Đôi",
        prices: [5500],
      },
      {
        label: "Sơn bàn xanh",
        name: "Găng tay sơn bàn xanh",
        sku: "GTSX",
        image: "assets/images/Găng tay sơn bàn xanh.jpg",
        description: "Loại: Sơn bàn xanh\nĐơn vị tính: Đôi",
        prices: [6000],
      },
    ],
  },
  {
    id: 110,
    sku: "GLT",
    name: "Giẻ lau máy các loại",
    category: "Phụ kiện khác",
    description: "Giẻ lau máy đa năng phục vụ vệ sinh công nghiệp.",
    shortDescription: "Giẻ lau máy (2 loại: Trắng/Màu)",
    price: 43000,
    image: "assets/images/Giẻ lau cotton trắng.jpg",
    featured: false,
    stock: 1000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Cotton trắng",
        name: "Giẻ lau máy cotton trắng",
        sku: "GLT",
        image: "assets/images/Giẻ lau cotton trắng.jpg",
        description: "Chất liệu: Cotton trắng\nĐơn vị tính: kg",
        prices: [43000],
      },
      {
        label: "Giẻ lau màu",
        name: "Giẻ lau máy màu",
        sku: "GLM",
        image: "assets/images/Giẻ lau máy màu.webp",
        description: "Chất liệu: Giẻ lau màu\nĐơn vị tính: kg",
        prices: [17000],
      },
    ],
  },
  {
    id: 111,
    sku: "PA.AAA",
    name: "Pin Panasonic & Con thỏ",
    category: "Phụ kiện khác",
    description: "Các loại pin thông dụng cho thiết bị văn phòng.",
    shortDescription: "Pin AA / AAA (4 loại)",
    price: 28000,
    image: "assets/images/Pin panasonic AAA (2 viên).jpg",
    featured: false,
    stock: 2000,
    origin: "Indonesia/Việt Nam",
    typeOptions: [
      {
        label: "Panasonic AAA (2v/vỉ)",
        name: "Pin Panasonic AAA (2 viên/vỉ)",
        sku: "PA.AAA",
        image: "assets/images/Pin panasonic AAA (2 viên).jpg",
        description: "Quy cách: 2 viên/vỉ, 12 vỉ/hộp\nLoại: AAA",
        prices: [28000],
      },
      {
        label: "Panasonic AA (2v/vỉ)",
        name: "Pin Panasonic AA (2 viên/vỉ)",
        sku: "PA.AA",
        image: "assets/images/Pin panasonic AA ( 2 viên).jpg",
        description: "Quy cách: 2 viên/vỉ, 12 vỉ/hộp\nLoại: AA",
        prices: [28000],
      },
      {
        label: "Con thỏ AA (4v/vỉ)",
        name: "Pin con thỏ AA (4 viên/vỉ)",
        sku: "PT.AA",
        image: "assets/images/Pin con thỏ AA ( 4 viên).webp",
        description: "Quy cách: 4 viên/vỉ\nLoại: AA",
        prices: [8000],
      },
      {
        label: "Con thỏ AAA (4v/vỉ)",
        name: "Pin con thỏ AAA (4 viên/vỉ)",
        sku: "PT.AAA",
        image: "assets/images/Pin con thỏ AAA ( 4 viên).webp",
        description: "Quy cách: 4 viên/vỉ\nLoại: AAA",
        prices: [8000],
      },
    ],
  },
  {
    id: 112,
    sku: "MC25",
    name: "Màng chít (Stretch film)",
    category: "MÀNG CHÍT",
    description:
      "Màng chít (Stretch film) đa dạng kích thước và trọng lượng. \n Giá đã có VAT: 44.5k/kg màng, 12k/ lõi.",
    shortDescription: "Màng chít các loại (7 size)",
    price: 44500,
    image: "assets/images/Màng chít.jpg",
    featured: true,
    stock: 1000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "25cm x 1,2kg",
        name: "Màng chít 25cm x 1,2kg",
        sku: "MC25",
        image: "assets/images/Màng chít.jpg",
        description: "Quy cách: 25cm x 1,2kg\nĐơn vị tính: Cuộn",
        prices: [44500],
      },
      {
        label: "50cm x 2kg",
        name: "Màng chít 50cm x 2kg",
        sku: "MC50.2",
        image: "assets/images/Màng chít(1).jpg",
        prices: [44500],
      },
      {
        label: "50cm x 2,4kg",
        name: "Màng chít 50cm x 2,4kg",
        sku: "MC50.24",
        image: "assets/images/Màng chít(1).jpg",
        prices: [44500],
      },
      {
        label: "50cm x 3kg",
        name: "Màng chít 50cm x 3kg",
        sku: "MC50.3",
        image: "assets/images/Màng chít(1).jpg",
        prices: [44500],
      },
      {
        label: "50cm x 4,2kg",
        name: "Màng chít 50cm x 4,2kg",
        sku: "MC50.42",
        image: "assets/images/Màng chít(1).jpg",
        prices: [44500],
      },
      {
        label: "50cm x 4kg",
        name: "Màng chít 50cm x 4kg",
        sku: "MC50.4",
        image: "assets/images/Màng chít(1).jpg",
        prices: [44500],
      },
      {
        label: "50cm x 5kg",
        name: "Màng chít 50cm x 5kg",
        sku: "MC50.5",
        image: "assets/images/Màng chít(1).jpg",
        prices: [44500],
      },
    ],
  },
  {
    id: 113,
    sku: "K3TN",
    name: "Kệ 3 tầng NoBee chốt nhựa",
    category: "Phụ kiện khác",
    description:
      "Kệ 3 tầng NoBee chốt nhựa bền bỉ, giúp sắp xếp hồ sơ gọn gàng.",
    shortDescription: "Kệ 3 tầng NoBee (Chiếc)",
    price: 65000,
    unit: "Chiếc",
    image: "assets/images/Kệ 3 tầng NoBee chốt nhựa.webp",
    featured: false,
    stock: 200,
    origin: "Đang cập nhật",
  },
  {
    id: 114,
    sku: "9845",
    name: "File ngăn Deli các loại",
    category: "Phụ kiện khác",
    description:
      "File ngăn Deli 3 tầng hoặc 4 tầng giúp phân loại tài liệu dễ dàng.",
    shortDescription: "File ngăn Deli (3 ngăn / 4 ngăn)",
    price: 68000,
    image: "assets/images/File 3 ngăn Deli 9843.jpg",
    featured: false,
    stock: 500,
    origin: "Trung Quốc",
    typeOptions: [
      {
        label: "3 ngăn - 9843",
        name: "File 3 ngăn Deli 9843",
        sku: "9845",
        image: "assets/images/File 3 ngăn Deli 9843.jpg",
        description: "Quy cách: 1/12/36",
        prices: [68000],
      },
      {
        label: "4 ngăn - 9844",
        name: "File 4 ngăn đứng Deli 9844",
        sku: "9846",
        image: "assets/images/File 4 ngăn đứng Deli 9844.webp",
        description: "Quy cách: 1/12/36",
        prices: [83000],
      },
    ],
  },
  {
    id: 115,
    sku: "5548",
    name: "Nẹp tài liệu Deli nhựa/sắt",
    category: "Phụ kiện khác",
    description:
      "Nẹp tài liệu Deli dùng để đóng tập tài liệu, có loại nhựa và sắt.",
    shortDescription: "Nẹp tài liệu Deli (Nhựa / Sắt)",
    price: 34000,
    unit: "Hộp",
    image: "assets/images/Nẹp tài liệu nhựa 80mm Deli 5548.jpg",
    featured: false,
    stock: 1000,
    origin: "Trung Quốc",
    typeOptions: [
      {
        label: "Nẹp nhựa 80mm",
        name: "Nẹp tài liệu nhựa 80mm Deli 5548",
        sku: "5548",
        image: "assets/images/Nẹp tài liệu nhựa 80mm Deli 5548.jpg",
        description: "Mã: 5548\nQuy cách: 1/20/80",
        prices: [34000],
      },
      {
        label: "Nẹp sắt 80mm",
        name: "Nẹp tài liệu sắt 80mm Deli 5549",
        sku: "5549",
        image: "assets/images/Nẹp tài liệu sắt 80mm Deli 5549.webp",
        description: "Mã: 5549\nQuy cách: 1/20/80",
        prices: [46000],
      },
    ],
  },
  {
    id: 116,
    sku: "968",
    name: "Nẹp Acor màu 968",
    category: "Phụ kiện khác",
    description: "Nẹp Acor màu 968 dùng cho việc đóng tập hồ sơ.",
    shortDescription: "Nẹp Acor màu 968 (Hộp)",
    price: 17000,
    unit: "Hộp",
    image: "assets/images/Nẹp Acor màu 968.webp",
    featured: false,
    stock: 1000,
    origin: "Đang cập nhật",
  },
  {
    id: 117,
    sku: "Gili",
    name: "Nẹp acco sắt 8cm Gili 946",
    category: "Phụ kiện khác",
    description: "Nẹp acco sắt 8cm Gili 946 chất lượng cao.",
    shortDescription: "Nẹp acco sắt Gili (Hộp)",
    price: 17000,
    unit: "Hộp",
    image: "assets/images/Nẹp acco sắt 8cm, Gili, 946.jpg",
    featured: false,
    stock: 1000,
    origin: "Việt Nam",
  },
  {
    id: 118,
    sku: "CF10",
    name: "Chia File nhựa các loại",
    category: "Phụ kiện khác",
    description: "Chia file nhựa giúp trang trí và phân tách hồ sơ hiệu quả.",
    shortDescription: "Chia File nhựa (10m / 12m)",
    price: 8000,
    unit: "Tập",
    image: "assets/images/Chia File nhựa 10m - CF10.jpg",
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Nhựa 10m - CF10",
        name: "Chia File nhựa 10m - CF10",
        sku: "CF10",
        image: "assets/images/Chia File nhựa 10m - CF10.jpg",
        description: "Quy cách: 10 tập/lố",
        prices: [8000],
      },
      {
        label: "Nhựa 12m - CF12",
        name: "Chia File nhựa 12m",
        sku: "CF12",
        image: "assets/images/Chia File nhựa 12m.jpg",
        prices: [10000],
      },
    ],
  },
  {
    id: 119,
    sku: "TOMY",
    name: "Giấy Decal Tomy A5",
    category: "Giấy decal",
    description: "Giấy Decal Tomy A5 các cỡ từ 99 đến 124.",
    shortDescription: "Giấy Decal Tomy A5 (Tập)",
    price: 12000,
    unit: "tập",
    image: "assets/images/Giấy decal Tomy A5.png",
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
  },
  {
    id: 120,
    sku: "SD8496",
    name: "Sổ da & Business cao cấp",
    category: "Túi khuy và sổ",
    description:
      "Các loại sổ da Moment, Victory và sổ Business chất lượng cao.",
    shortDescription: "Sổ da & Business (3 loại)",
    price: 47000,
    unit: "Quyển",
    image: "assets/images/SỔ DA MOMENT 8496 240TR.jpg",
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
    typeOptions: [
      {
        label: "Sổ da MOMENT 8496",
        name: "SỔ DA MOMENT 8496 240TR",
        sku: "SD8496",
        image: "assets/images/SỔ DA MOMENT 8496 240TR.jpg",
        prices: [47000],
      },
      {
        label: "Sổ da VICTORY 7215",
        name: "SỔ DA VICTORY 240TR 7215",
        sku: "SDV2701",
        image: "assets/images/SỔ DA VICTORY 240TR 7215.webp",
        prices: [42000],
      },
      {
        label: "Sổ BUSINESS 4504",
        name: "SỔ BUSINESS 160TR 4504",
        sku: "SB4504",
        image: "assets/images/SỔ BUSINESS 160TR 4504.png",
        prices: [35000],
      },
    ],
  },
  {
    id: 121,
    sku: "SLXD2701",
    name: "SỔ LÒ XO DOKI 200TR 7109",
    category: "Túi khuy và sổ",
    description: "Sổ lò xo Doki 200 trang mã 7109 bền đẹp.",
    shortDescription: "Sổ lò xo Doki 200TR (Quyển)",
    price: 25000,
    unit: "Quyển",
    image: "assets/images/SỔ LÒ XO DOKI 200TR 7109.webp",
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
  },
  {
    id: 122,
    sku: "10602",
    name: "Giấy nhớ 5 màu nilông deli - A10602",
    category: "Phụ kiện khác",
    description: "Giấy nhớ 5 màu nilông deli - A10602, 24 tập/hộp.",
    shortDescription: "Giấy nhớ 5 màu nilông deli (Tập)",
    price: 14000,
    unit: "Tập",
    image: "assets/images/Giấy nhớ 5 màu nilông deli.webp",
    featured: false,
    stock: 500,
    origin: "Trung Quốc",
  },
  {
    id: 123,
    sku: "PRONOTI",
    name: "Giấy nhớ và phân trang Pronoti",
    category: "Phụ kiện khác",
    description:
      "Giấy nhớ và phân trang Pronoti các loại (nhựa, giấy, mũi tên).",
    shortDescription: "Giấy nhớ & Phân trang Pronoti (4 loại)",
    price: 11000,
    image: "assets/images/Phân trang Pronoti.png",
    featured: false,
    stock: 2000,
    origin: "Đài Loan",
    typeOptions: [
      {
        label: "5 màu nhựa Pronoti",
        name: "Giấy nhớ 5 màu nhựa Pronoti 45502",
        sku: "45502",
        image: "assets/images/Giấy nhớ 5 màu nhựa pronoti.png",
        description: "Quy cách: 48 tập/lố\nĐơn vị tính: Tập",
        prices: [11000],
      },
      {
        label: "Giấy nhớ 3x5 Pronoti",
        name: "Giấy nhớ 3x5 Pronoti 7.6 x12.7cm",
        sku: "N35P",
        image: "assets/images/Giấy nhớ 3x5 Promoti.webp",
        description: "Quy cách: 12t/lố, 12 lố/T\nĐơn vị tính: Tập",
        prices: [8000],
      },
      {
        label: "Phân trang 5 màu giấy",
        name: "Phân trang 5 mầu giấy Pronoti",
        sku: "PT5M",
        image: "assets/images/Phân trang Pronoti.png",
        description: "Đơn vị tính: Tập",
        prices: [12000],
      },
      {
        label: "Phân trang hình mũi tên",
        name: "Phân trang Pronoti Sign hình mũi tên",
        sku: "PTMT",
        image: "assets/images/Phân trang Pronoti sign hình mũi tên.png",
        description: "Đơn vị tính: Tập",
        prices: [29500],
      },
    ],
  },
  {
    id: 124,
    sku: "N33D",
    name: "Giấy nhớ 3x3 DoubleA (76x76) mm",
    category: "Phụ kiện khác",
    description: "Giấy nhớ DoubleA kích thước 3x3 (76x76 mm).",
    shortDescription: "Giấy nhớ 3x3 DoubleA (Tập)",
    price: 7000,
    unit: "Tập",
    image: "assets/images/Giấy nhớ 3x3 DoubleA (76x76) mm.jpg",
    featured: false,
    stock: 1000,
    origin: "Thái Lan",
  },
  {
    id: 125,
    sku: "N5MDL7154",
    name: "Note 5 màu giấy DeLi7154",
    category: "Phụ kiện khác",
    description: "Giấy nhớ (note) 5 màu giấy Deli mã 7154.",
    shortDescription: "Note 5 màu giấy DeLi7154 (Tập)",
    price: 16000,
    unit: "Tập",
    image: "assets/images/Note 5 màu giấy DeLi7154.webp",
    featured: false,
    stock: 1000,
    origin: "Trung Quốc",
  },
  {
    id: 126,
    sku: "MKA4T1",
    name: "Mika trung A4 đẹp GLoxy màu vàng",
    category: "Phụ kiện khác",
    description: "Mika trung A4 đẹp GLoxy MKA4T1 màu vàng cao cấp.",
    shortDescription: "Mika trung A4 GLoxy (Ram)",
    price: 73000,
    unit: "Ram",
    image: "assets/images/Mika trung A4 đẹp GLoxy MKA4T1 màu vàng.jpg",
    featured: false,
    stock: 50,
    origin: "Việt Nam",
  },
  {
    id: 127,
    sku: "DF120FM",
    name: "Máy tính DF 120FM",
    category: "Phụ kiện khác",
    description: "Máy tính Casio loại DF 120FM độ bền cao, tính năng đa dạng.",
    shortDescription: "Máy tính DF 120FM (Chiếc)",
    fullDescription: `Máy tính Casio DF-120FM mang đến hiệu suất vượt trội cho nhu cầu tính toán văn phòng và kinh doanh. Thiết kế kim loại sang trọng, phím bấm êm ái cùng màn hình lớn hiển thị rõ nét 12 chữ số giúp giảm thiểu sai sót. Sản phẩm cực kỳ bền bỉ và đáng tin cậy.

Đơn vị tính: Chiếc`,
    price: 380000,
    unit: "chiếc",
    image: "assets/images/Máy tính DF 120FM.jpg",
    images: ["assets/images/Máy tính DF 120FM.jpg"],
    featured: false,
    stock: 200,
    origin: "Nhật Bản",
  },
  {
    id: 128,
    sku: "9154",
    name: "Hộp cắm bút học sinh lưới sắt",
    category: "Phụ kiện khác",
    description:
      "Hộp cắm bút chất liệu lưới sắt bền đẹp cho học sinh, dân văn phòng.",
    shortDescription: "Hộp cắm bút lưới sắt (Chiếc)",
    price: 87000,
    unit: "Chiếc",
    image: "assets/images/Hộp cắm bút học sinh lưới sắt.jpeg",
    featured: false,
    stock: 500,
    origin: "Đang cập nhật",
  },
  {
    id: 129,
    sku: "9301",
    name: "Hộp cắm bút nhiều ngăn GuangBo WZ9301 nhựa",
    category: "Phụ kiện khác",
    description: "Hộp cắm bút nhiều ngăn GuangBo WZ9301 nhựa tiện dụng.",
    shortDescription: "Hộp cắm bút GuangBo nhựa (Cái)",
    price: 67000,
    unit: "Cái",
    image: "assets/images/Hộp cắm bút nhiều ngăn GuangBo WZ9301 nhựa.jpg",
    featured: false,
    stock: 500,
    origin: "Trung Quốc",
  },
  {
    id: 130,
    sku: "97A0",
    name: "Kìm TriO 97A0",
    category: "Dập ghim & đục lỗ",
    description: "Kìm dập ghim TriO 97A0 lực bấm nhẹ, độ bền cao.",
    shortDescription: "Kìm TriO 97A0 (Chiếc)",
    price: 32000,
    unit: "Chiếc",
    image: "assets/images/Kìm TriO 97A0.jpg",
    featured: false,
    stock: 500,
    origin: "Đài Loan",
  },
  {
    id: 131,
    sku: "GL10",
    name: "Keo khô Míc",
    category: "Phụ kiện khác",
    description: "Keo khô Míc an toàn, dính tốt, không làm lem bề mặt giấy.",
    shortDescription: "Keo khô Míc (Lọ)",
    price: 6000,
    unit: "Lọ",
    image: "assets/images/Keo khô MIC.webp",
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
  },
  {
    id: 132,
    sku: "K6009",
    name: "Kéo văn phòng / Kéo to Deli",
    category: "Phụ kiện khác",
    description: "Kéo Deli và kéo văn phòng sắc bén, độ bền cao.",
    shortDescription: "Kéo Deli / VP (2 loại)",
    price: 22000,
    image: "assets/images/Kéo to Deli 180mm K6009.jpg",
    featured: false,
    stock: 1000,
    origin: "Đa quốc gia",
    typeOptions: [
      {
        label: "Kéo to Deli 180mm",
        name: "Kéo to Deli 180mm K6009",
        sku: "K6009",
        image: "assets/images/Kéo to Deli 180mm K6009.jpg",
        description: "Mã: K6009\nĐơn vị tính: Chiếc",
        prices: [22000],
      },
      {
        label: "Kéo VP 210mm",
        name: "Kéo văn phòng 210mm",
        sku: "K6010",
        image: "assets/images/Kéo văn phòng 210mm.jpg",
        description: "Mã: 6010\nĐơn vị tính: Chiếc",
        prices: [31000],
      },
    ],
  },
  {
    id: 133,
    sku: "TK30",
    name: "Thước kẻ 30cm",
    category: "Phụ kiện khác",
    description: "Thước kẻ nhựa bền đẹp kích thước chuẩn 30cm.",
    shortDescription: "Thước kẻ 30cm (Chiếc)",
    price: 8000,
    unit: "chiếc",
    image: "assets/images/Thước kẻ 30cm.jpg",
    featured: false,
    stock: 2000,
    origin: "Việt Nam",
  },
  {
    id: 134,
    sku: "AT2",
    name: "Túi Khuy Trung TL02",
    category: "Túi khuy và sổ",
    description:
      "Túi khuy trung Thiên Long TL02 đựng tài liệu an toàn, chống ẩm.",
    shortDescription: "Túi Khuy Trung TL02 (Chiếc)",
    price: 2200,
    unit: "Chiếc",
    image: "assets/images/Túi Khuy Trung TL02.jpg",
    featured: false,
    stock: 5000,
    origin: "Việt Nam",
  },
  {
    id: 135,
    sku: "TCT020",
    name: "Túi khuy khổ F",
    category: "Túi khuy và sổ",
    description: "Túi khuy khổ F to, đựng được hồ sơ dày, giấy phẳng góc.",
    shortDescription: "Túi khuy khổ F (Chiếc)",
    price: 3200,
    unit: "Chiếc",
    image: "assets/images/Túi khuy khổ F.png",
    featured: false,
    stock: 5000,
    origin: "Đang cập nhật",
  },
  {
    id: 136,
    sku: "SML1807",
    name: "Túi sơ my lỗ Xifu 1807A4 5C",
    category: "Túi khuy và sổ",
    description:
      "Túi sơ mi lỗ Xifu 1807A4 bền đẹp, đóng gói dạng tập tiện dụng.",
    shortDescription: "Túi sơ my lỗ Xifu (Tập)",
    price: 50000,
    unit: "tập",
    image: "assets/images/Túi sơ my lỗ Xifu 1807A4 5C.webp",
    featured: false,
    stock: 1000,
    origin: "Trung Quốc",
  },
  {
    id: 137,
    sku: "SML301",
    name: "Túi sơ my 11 lỗ Lamy - nhật",
    category: "Túi khuy và sổ",
    description: "Túi sơ mi 11 lỗ Lamy (Nhật Bản) loại dày, 100 chiếc/tập.",
    shortDescription: "Túi sơ my 11 lỗ Lamy (Tập)",
    price: 58000,
    unit: "Tập",
    image: "assets/images/Túi sơ my 11 lỗ Lamy - nhật.jpg",
    featured: false,
    stock: 500,
    origin: "Nhật Bản",
  },
  {
    id: 138,
    sku: "SMLSC03",
    name: "Túi sơ my lỗ TL CS03 dày",
    category: "Túi khuy và sổ",
    description: "Túi sơ mi lỗ Thiên Long CS03 loại dày, quy cách 100 túi/tập.",
    shortDescription: "Túi sơ my lỗ TL CS03 (Tập)",
    price: 100000,
    unit: "Tập",
    image: "assets/images/túi sơ my lỗ TL CS03 dày.jpg",
    featured: false,
    stock: 500,
    origin: "Việt Nam",
  },
  {
    id: 139,
    sku: "LUOIDAO",
    name: "Lưỡi dao các loại",
    category: "Phụ kiện khác",
    description:
      "Lưỡi dao Deli và lưỡi dao SDI sắc bén, đa dạng kích cỡ nhỏ/to.",
    shortDescription: "Lưỡi dao Deli/SDI (3 loại)",
    price: 6000,
    image: "assets/images/Lưỡi dao deli 2011.png",
    featured: false,
    stock: 500,
    origin: "Đa quốc gia",
    typeOptions: [
      {
        label: "Deli 2011 (20 vỉ/hộp)",
        name: "Lưỡi dao deli 2011",
        sku: "LD2011",
        image: "assets/images/Lưỡi dao deli 2011.png",
        description: "Quy cách: 20 vỉ/hộp\nĐơn vị tính: Vỉ",
        prices: [22000],
      },
      {
        label: "SDI nhỏ LD1403",
        name: "Lưỡi dao SDI nhỏ LD1403",
        sku: "LD1403",
        image: "assets/images/Lưỡi dao SDI nhỏ LD1403.jpg",
        description: "Quy cách: 10H/lố\nĐơn vị tính: Hộp",
        prices: [6000],
      },
      {
        label: "SDI to 1404",
        name: "Lưỡi dao SDI to 1404",
        sku: "LD1404",
        image: "assets/images/Lưỡi dao SDI to 1404.png",
        description: "Quy cách: 10H/lố\nĐơn vị tính: Hộp",
        prices: [8000],
      },
    ],
  },
  {
    id: 140,
    sku: "C62",
    name: "Ghim cài C62",
    category: "Phụ kiện khác",
    description: "Ghim cài C62 tiện lợi kẹp giấy tờ, hồ sơ.",
    shortDescription: "Ghim cài C62 (Hộp)",
    price: 3000,
    unit: "Hộp",
    image: "assets/images/Ghim cài C62.png",
    featured: false,
    stock: 5000,
    origin: "Việt Nam",
  },
  {
    id: 141,
    sku: "DL9881",
    name: "Hộp đựng ghim DeLi9881",
    category: "Phụ kiện khác",
    description: "Hộp đựng ghim DeLi9881 có từ tính giúp lấy ghim dễ dàng.",
    shortDescription: "Hộp đựng ghim DeLi (Hộp)",
    price: 22000,
    unit: "hộp",
    image: "assets/images/Hộp đựng ghim DeLi9881.jpg",
    featured: false,
    stock: 200,
    origin: "Trung Quốc",
  },
  {
    id: 142,
    sku: "MSN",
    name: "Mực dấu shiny",
    category: "Phụ kiện khác",
    description: "Mực dấu Shiny màu tươi, đóng dấu rõ nét, mau khô.",
    shortDescription: "Mực dấu shiny (Lọ)",
    price: 38000,
    unit: "lọ",
    image: "assets/images/Mực dấu shiny.webp",
    featured: false,
    stock: 500,
    origin: "Đài Loan",
  },
  {
    id: 143,
    sku: "E7823",
    name: "Nam châm gắn bảng φ15mm Deli E7823",
    category: "Phụ kiện khác",
    description: "Nam châm gắn bảng màu sắc E7823 kích thước φ15mm.",
    shortDescription: "Nam châm gắn bảng φ15mm (Vỉ)",
    price: 19000,
    unit: "vỉ",
    image: "assets/images/E7823_Nam châm gắn bảng_φ15mm_hộp.jpg",
    featured: false,
    stock: 1000,
    origin: "Trung Quốc",
  },
  {
    id: 46,
    sku: "VPP-0046",
    name: "Bản đồ tráng gương 34 tỉnh thành",
    category: "ĐỒ TRANG TRÍ",
    description: "Tranh tráng gương bản đồ Việt Nam treo tường",
    shortDescription: "Bản đồ Việt Nam tráng gương, in UV sắc nét",
    fullDescription: `BẢNG MÔ TẢ SẢN PHẨM
Tên sản phẩm: Tranh tráng gương bản đồ Việt Nam treo tường
Chất liệu: Gỗ MDF dầy 8mm
Bề mặt: Mặt in UV tráng gương
Công nghệ in: In UV sắc nét, bền màu theo thời gian
Thiết kế: Bản đồ Việt Nam in 3D với các tỉnh thành được thể hiện chi tiết, màu sắc nổi bật
Kích thước: (có thể tùy chỉnh theo nhu cầu)
Màu sắc: Tráng gương sắc nét màu in đa sắc
Công dụng: Trang trí nhà cửa, văn phòng, quà tặng ý nghiệp
Đặc điểm nổi bật:
Chất liệu gỗ bền chắc, thân thiện môi trường
In UV cho hình ảnh sắc nét, không phai màu
Thiết kế tinh tế, mang đậm bản sắc Việt Nam
Dễ dàng treo và lắp đặt`,
    price: 56000,
    image: "IMG HOME/bản đồ màu xanh.jpg",
    images: [
      "IMG HOME/bản đồ màu xanh.jpg",
      "assets/images/Hướng dẫn lắp.webp",
    ],
    featured: true,
    stock: 10,
    origin: "Việt Nam",
    variants: ["200x300", "300x400", "400x600", "600x900", "800x1200"],
    variantPrices: [56000, 100000, 150000, 350000, 450000],
  },
  {
    id: 47,
    sku: "VPP-0047",
    name: "Tranh bản đồ Việt Nam treo tường",
    category: "ĐỒ TRANG TRÍ",
    description:
      "Gỗ MDF dầy 5mm không có đèn led, Gỗ MDF dầy 8mm bo viền không có đèn led, Tấm nhôm tổ ong có đèn led",
    shortDescription: "3 lựa chọn chất liệu, nhiều kích thước",
    fullDescription: `Chất liệu: Gỗ MDF dầy 5mm
Bề mặt: Tấm mặt gỗ plywood
Công nghệ in: In UV sắc nét, bền màu theo thời gian
Thiết kế: Bản đồ Việt Nam 3D với các tỉnh thành được thể hiện chi tiết, màu sắc nổi bật
Kích thước: (có thể tùy chỉnh theo nhu cầu)
Màu sắc: Tông gỗ tự nhiên kết hợp màu in đa sắc
Công dụng: Trang trí nhà cửa, văn phòng, quà tặng ý nghĩa
Đặc điểm nổi bật:
Chất liệu gỗ bền chắc, thân thiện môi trường
In UV cho hình ảnh sắc nét, không phai màu
Thiết kế tinh tế, mang đậm bản sắc Việt Nam
Dễ dàng treo và lắp đặt`,
    price: 52000,
    image: "IMG HOME/bản đồ màu vàng.jpg",
    images: [
      "IMG HOME/bản đồ màu vàng.jpg",
      "assets/images/Hướng dẫn lắp.webp",
    ],
    featured: false,
    stock: 10,
    origin: "Việt Nam",
    typeOptions: [
      {
        label: "Gỗ MDF dầy 5mm không có đèn led",
        name: "Tranh bản đồ Việt Nam treo tường",
        image: "IMG HOME/bản đồ màu vàng.jpg",
        description: `Chất liệu: Gỗ MDF dầy 5mm
Bề mặt: Tấm mặt gỗ plywood
Công nghệ in: In UV sắc nét, bền màu theo thời gian
Thiết kế: Bản đồ Việt Nam 3D với các tỉnh thành được thể hiện chi tiết, màu sắc nổi bật
Kích thước: (có thể tùy chỉnh theo nhu cầu)
Màu sắc: Tông gỗ tự nhiên kết hợp màu in đa sắc
Công dụng: Trang trí nhà cửa, văn phòng, quà tặng ý nghĩa
Đặc điểm nổi bật:
Chất liệu gỗ bền chắc, thân thiện môi trường
In UV cho hình ảnh sắc nét, không phai màu
Thiết kế tinh tế, mang đậm bản sắc Việt Nam
Dễ dàng treo và lắp đặt`,
        sizes: ["20cm x 30cm", "30cm x40cm", "40cm x60cm"],
        prices: [52000, 94000, 140000],
      },
      {
        label: "Gỗ MDF dầy 8mm bo viền không có đèn led",
        name: "Tranh bản đồ Việt Nam treo tường",
        image: "assets/images/Bản đồ 34 tỉnh thành 2.jpg",
        description: `Chất liệu: Gỗ MDF dầy 8mm bo viền
Bề mặt: Tấm mặt gỗ plywood
Công nghệ in: In UV sắc nét, bền màu theo thời gian
Thiết kế: Bản đồ Việt Nam 3D với các tỉnh thành được thể hiện chi tiết, màu sắc nổi bật
Kích thước: (có thể tùy chỉnh theo nhu cầu)
Màu sắc: Tông gỗ tự nhiên kết hợp màu in đa sắc
Công dụng: Trang trí nhà cửa, văn phòng, quà tặng ý nghĩa
Đặc điểm nổi bật:
Chất liệu gỗ kết hợp khung nhôm bền chắc, thân thiện môi trường
In UV cho hình ảnh sắc nét, không phai màu
Thiết kế tinh tế, mang đậm bản sắc Việt Nam
Dễ dàng treo và lắp đặt`,
        sizes: ["40cm x60cm", "60cm x90cm", "80cm x120cm"],
        prices: [160000, 350000, 450000],
      },
      {
        label: "Tấm nhôm tổ ong có đèn led",
        name: "Tranh bản đồ Việt Nam treo tường",
        image: "assets/images/Bản đồ 34 tỉnh thành 1.jpg",
        description: `Chất liệu: Tấm nhôm tổ ong - Khung hợp kim nhôm
Bề mặt: Tấm mặt gỗ plywood
Công nghệ in: In UV sắc nét, bền màu theo thời gian
Thiết kế: Bản đồ Việt Nam 3D với các tỉnh thành được thể hiện chi tiết, màu sắc nổi bật
Kích thước: (có thể tùy chỉnh theo nhu cầu)
Màu sắc: Tông gỗ tự nhiên kết hợp màu in đa sắc
Công dụng: Trang trí nhà cửa, văn phòng, quà tặng ý nghĩa
Đặc điểm nổi bật:
Chất liệu gỗ bền chắc, thân thiện môi trường
In UV cho hình ảnh sắc nét, không phai màu
Thiết kế tinh tế, mang đậm bản sắc Việt Nam
Dễ dàng treo và lắp đặt`,
        sizes: ["120cm x200cm"],
        prices: [5600000],
      },
    ],
    guideImage: "assets/images/Hướng dẫn lắp.webp",
  },
  {
    id: 48,
    sku: "VPP-0048",
    name: "Đồng hồ bản đồ tráng gương Deco in UV 5D cao cấp",
    category: "ĐỒ TRANG TRÍ",
    description: "Đồng hồ bản đồ tráng gương Deco in UV 5D cao cấp",
    shortDescription: "Tráng gương cao cấp, in UV 5D, kim trôi êm ái",
    fullDescription: `Chất liệu: Gỗ MDF dầy 8mm bo viền viền động cơ kim trôi êm ái
Thiết kế tinh tế, mang lại vẻ đẹp sang trọng cho không gian của bạn.
Công nghệ in UV 5D đảm bảo màu sắc sống động, bền lâu.
✨ Thông tin sản phẩm ✨
Chất liệu: Tráng gương cao cấp.
Công nghệ: In UV 5D.
Ứng dụng: Phù hợp cho nhiều không gian nội thất.
Tranh đồng hồ DECOR cao cấp giúp tô điểm cho ngôi nhà của bạn.
Mang lại cảm giác thoải mái và thẩm mỹ cao.`,
    price: 150000,
    image: "IMG HOME/đồng hồ màu xanh.jpg",
    images: [
      "IMG HOME/đồng hồ màu xanh.jpg",
      "assets/images/Hướng dẫn lắp.webp",
    ],
    featured: false,
    stock: 10,
    origin: "Việt Nam",
    variants: ["D300", "D350", "D450", "D500"],
    variantPrices: [150000, 180000, 220000, 250000],
  },
  {
    id: 49,
    sku: "VPP-0049",
    name: "Đồng hồ trống đồng",
    category: "ĐỒ TRANG TRÍ",
    description: "D300, D350, D450, D500",
    fullDescription: `Chất liệu: Gỗ MDF dầy 8mm bo viền viền động cơ kim trôi êm ái
Thiết kế tinh tế, mang lại vẻ đẹp sang trọng cho không gian của bạn.
Công nghệ in UV 5D đảm bảo màu sắc sống động, bền lâu.
✨ Thông tin sản phẩm ✨
Chất liệu: Tráng gương cao cấp.
Công nghệ: In UV 5D.
Ứng dụng: Phù hợp cho nhiều không gian nội thất.
Tranh đồng hồ DECOR cao cấp giúp tô điểm cho ngôi nhà của bạn.
Mang lại cảm giác thoải mái và thẩm mỹ cao.`,
    price: 150000,
    image: "IMG HOME/Đồng hồ trống đồng.jpeg",
    images: [
      "IMG HOME/Đồng hồ trống đồng.jpeg",
      "assets/images/Hướng dẫn lắp.webp",
    ],
    featured: true,
    stock: 10,
    origin: "Việt Nam",
    variants: ["D300", "D350", "D450", "D500"],
    variantPrices: [150000, 180000, 220000, 250000],
  },
  {
    id: 50,
    sku: "VPP-0050",
    name: "Tranh tráng gương đồng hồ ảnh",
    category: "ĐỒ TRANG TRÍ",
    description: "Tranh tráng gương đồng hồ Deco in UV 5D cao cấp",
    shortDescription: "Tráng gương cao cấp, in UV 5D, nhiều kích thước",
    fullDescription: `Tranh tráng gương đồng hồ Deco in UV 5D cao cấp
Chất liệu: Gỗ MDF dầy 8mm bo viền viền động cơ kim trôi êm ái
Thiết kế tinh tế, mang lại vẻ đẹp sang trọng cho không gian của bạn.
Công nghệ in UV 5D đảm bảo màu sắc sống động, bền lâu.
✨ Thông tin sản phẩm ✨
Chất liệu: Tráng gương cao cấp.
Công nghệ: In UV 5D.
Kích thước 40x60 giá 250.000, 40x80 giá 350.000, 50x100 giá 450.000, 60x120cm giá 550.000.
Ứng dụng: Phù hợp cho nhiều không gian nội thất.
Tranh đồng hồ DECO cao cấp giúp tô điểm cho ngôi nhà của bạn.
Mang lại cảm giác thoải mái và thẩm mỹ cao.`,
    price: 250000,
    image: "assets/images/Đồng hồ  Deco.jpg",
    images: [
      "assets/images/Đồng hồ  Deco.jpg",
      "assets/images/Đồng hồ  Deco 3.jpg",
      "assets/images/Đồng hồ  Deco 1.jpg",
      "assets/images/Đồng hồ  Deco 4.jpg",
      "assets/images/Hướng dẫn lắp.webp",
    ],
    featured: false,
    stock: 10,
    origin: "Việt Nam",
    variants: ["40x60", "40x80", "50x100", "60x120cm"],
    variantPrices: [250000, 350000, 450000, 550000],
  },
];
