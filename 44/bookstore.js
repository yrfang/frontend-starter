var bookdatas=[
  {
    name: "惡搞也能出頭天：Action！網路短劇天團這群人TGOP的幕後奇想、技藝、創作實驗室",
    author: "這群人TGOP",
    publish_house: "尖端",
    img: "http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/072/88/0010728840.jpg&v=57cfec46&w=348&h=348",
    price: 360,
    is_discount: true,
    discount: 0.79,
    link_book: "http://www.books.com.tw/products/0010728840?loc=P_003_001",
    link_author:
    "http://search.books.com.tw/exep/prod_search.php?key=%E9%80%99%E7%BE%A4%E4%BA%BATGOP&f=author",
    date: "2016/09/23"
  },{
    name: "寫字的力量限量超值套組：《寫字的力量》+《美字基本功》(加贈日本原裝Preppy本格鋼筆+專屬炫彩墨水2入)",
    author: "侯信永",
    publish_house: "遠流",
    img: "http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/070/99/0010709943_b_01.jpg&v=56eaa353&w=348&h=348",
    price: 540,
    is_discount: true,
    discount: 0.75,
    link_book: "http://www.books.com.tw/products/0010709943?loc=P_003_002",
    link_author:
    "http://search.books.com.tw/exep/prod_search.php?key=%E4%BE%AF%E4%BF%A1%E6%B0%B8&f=author",
    date: "2016/03/30"
  },{
    name: "好音樂的科學：破解基礎樂理和美妙旋律的音階秘密",
    author: "約翰‧包威爾",
    publish_house: "大寫出版 ",
    img: "http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/071/87/0010718777.jpg&v=5756a26b&w=348&h=348",
    price: 350,
    is_discount: false,
    discount: 0.79,
    link_book: "http://www.books.com.tw/products/0010718777?loc=P_003_003",
    link_author:
    "http://search.books.com.tw/exep/prod_search.php?key=%E7%B4%84%E7%BF%B0%E2%80%A7%E5%8C%85%E5%A8%81%E7%88%BE&f=author",
    date: "2016/06/21"
  },{
    name: "Design by wangzhihong.com：A Selection of Book Designs, 2001-2016(王志弘作品選2001-2016)",
    author: "王志弘",
    publish_house: "臉譜",
    img: "http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/072/55/0010725522.jpg&v=57b6fbcb&w=348&h=348",
    price: 3000,
    is_discount: true,
    discount: 0.79,
    link_book: "http://www.books.com.tw/products/0010725522?loc=P_003_004",
    link_author:
    "http://search.books.com.tw/exep/prod_search.php?key=%E7%8E%8B%E5%BF%97%E5%BC%98&f=author",
    date: "2016/09/01"
  },{
    name: "手寫英文書法聖經：從握筆、筆順到數字、符號，全方位掌握藝術美字書寫技法。",
    author: "Julien Chazal",
    publish_house: "野人",
    img: "http://im2.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/071/98/0010719843.jpg&v=57c7bcda&w=348&h=348",
    price: 665,
    is_discount: true,
    discount: 0.75,
    link_book: "http://www.books.com.tw/products/0010719843?loc=P_003_005",
    link_author:
    "http://search.books.com.tw/exep/prod_search.php?key=Julien+Chazal&f=author",
    date: "2016/09/07"
  },{
    name: "手寫美「行」：鋼筆字冠軍的日常行書超值套組《手寫美「行」》+《美「行」小練習》【博客來獨家德國e+m原木筆桿&日本NIKKO沾水筆尖&鋼筆紙箋（Conifer／珠友文化隨機出貨）】",
    author: "葉曄",
    publish_house: "遠流",
    img: "http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/072/35/0010723527_b_01.jpg&v=579b5a78&w=348&h=348",
    price: 520,
    is_discount: false,
    discount: 0.75,
    link_book: "http://www.books.com.tw/products/0010723527?loc=P_003_006",
    link_author:
    "http://search.books.com.tw/exep/prod_search.php?key=%E8%91%89%E6%9B%84&f=author",
    date: "2016/08/05"
  },{
    name: "Typography 字誌：Issue 02 來做LOGO吧！",
    author: "Graphic社編輯部",
    publish_house: "臉譜",
    img: "http://im1.book.com.tw/image/getImage?i=http://www.books.com.tw/img/001/072/92/0010729204.jpg&v=57e27d49&w=348&h=348",
    price: 420,
    is_discount: true,
    discount: 0.79,
    link_book: "http://www.books.com.tw/products/0010729204?loc=P_003_007",
    link_author:
    "http://search.books.com.tw/exep/prod_search.php?key=Graphic%E7%A4%BE%E7%B7%A8%E8%BC%AF%E9%83%A8&f=author",
    date: "2016/10/06"
  }
];

var vm = new Vue({
  el: "#app",
  data: {
    books: bookdatas
  }
});
