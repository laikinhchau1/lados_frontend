const mainNav = [
    {
        display: "Trang chủ",
        path: "/"
    },
    {
        display: "Sản phẩm mới",
        path: "/san-pham-moi"
    },
    {
        display: "Sản phẩm khuyến mãi",
        path: "/san-pham-khuyen-mai"
    },
    {
        display: "Flash sale",
        path: "/flash-sale"
    },
    {
        display: "Áo nam",
        path: "/ao-nam",
        children:[
          {
            display: "Áo sơ mi nam",
            path: "/ao-so-mi-nam"
          },
          {
            display: "Áo thun cổ tròn",
            path: "/ao-thun-co-tron"
          },
          {
            display: "Áo thun polo",
            path: "/ao-thun-polo"
          },
          {
            display: "Áo khoác",
            path: "/ao-khoac"
          },
        ]
    },
    {
        display: "Quần nam",
        path: "/quan-nam",
        children:[
          {
            display: 'Quần tây',
            path: '/quan-tay',
          },
          {
            display: 'Quần kaki',
            path: '/quan-kaki',
          },
          {
            display: 'Quần Jean',
            path: '/quan-jean',
          },
          {
            display: 'Quần short',
            path: '/quan-short',
          },
          {
            display: 'Jogger',
            path: '/jogger',
          },
        ]
    },
    {
        display: "Phụ kiện",
        path: "/phu-kien",
        children: [
          {
            display: 'Quần lót',
            path: '/quan-lot',
          },
          {
            display: 'Quần ngủ',
            path: '/quan-ngu',
          },
          {
            display: 'Ví',
            path: '/vi',
          },
          {
            display: 'Nón',
            path: '/non',
          },
          {
            display: 'Phụ kiện khác',
            path: '/phu-kien-khac',
          },
        ]
    },
    {
        display: "Tin tức",
        path: "/tin-tuc"
    },
    {
        display: "Liên hệ",
        path: "/lien-he"
    },
    {
        display: "Đồ thể thao",
        path: "/do-the-thao"
    }
  ]

  export default mainNav