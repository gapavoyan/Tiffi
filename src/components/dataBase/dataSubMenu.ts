import type { Category } from "@/hooks/useHeaderInfo";
const datasubMenu: Category[] = [
  {
    id: 1,
    title: "Одежда",
    parent_id: null,
    gender: "woman",
    img: null,
    subcategories: []
  },
  {
    id: 2,
    title: "Обувь",
    parent_id: null,
    gender: "woman",
    img: null,
    subcategories: [
      {
        id: 9,
        title: "ТУФЛИ",
        parent_id: 2,
        gender: "woman",
        img: "1706256976028--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 10,
        title: "БОТИЛЬОНЫ",
        parent_id: 2,
        gender: "woman",
        img: "1706259008008--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 11,
        title: "БОСОНОЖКИ",
        parent_id: 2,
        gender: "woman",
        img: "1706264791181--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 12,
        title: "БОТИНКИ ",
        parent_id: 2,
        gender: "woman",
        img: "1706278007557--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 13,
        title: "САПОГИ",
        parent_id: 2,
        gender: "woman",
        img: "1706604538095--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 14,
        title: "ЛОФЕРЫ",
        parent_id: 2,
        gender: "woman",
        img: "1706614971566--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 15,
        title: "КРОССОВКИ/КЕДЫ",
        parent_id: 2,
        gender: "woman",
        img: "1706617143928--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      }
    ]
  },
  {
    id: 3,
    title: "Сумки",
    parent_id: null,
    gender: "woman",
    img: null,
    subcategories: [
      {
        id: 18,
        title: "ARCADIA",
        parent_id: 3,
        gender: "woman",
        img: "1706968640350--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 19,
        title: "SALVATORE FERRAGAMO",
        parent_id: 3,
        gender: "woman",
        img: "1707214994957--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 21,
        title: "BIAGINI",
        parent_id: 3,
        gender: "woman",
        img: "1707289809263--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 22,
        title: "ERMANNO SCERVINO",
        parent_id: 3,
        gender: "woman",
        img: "1707294053713--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      }
    ]
  },
  {
    id: 4,
    title: "Аксессуары",
    parent_id: null,
    gender: "woman",
    img: null,
    subcategories: [
      {
        id: 20,
        title: "КОШЕЛЬКИ/ПОРТМОНЕ",
        parent_id: 4,
        gender: "woman",
        img: "1707218813220--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      }
    ]
  },
  {
    id: 5,
    title: "Одежда",
    parent_id: null,
    gender: "man",
    img: null,
    subcategories: []
  },
  {
    id: 6,
    title: "Обувь",
    parent_id: null,
    gender: "man",
    img: null,
    subcategories: [
      {
        id: 16,
        title: "КРОССОВКИ/КЕДЫ",
        parent_id: 6,
        gender: "man",
        img: "1706630258885--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      },
      {
        id: 17,
        title: "ЛОФЕРЫ",
        parent_id: 6,
        gender: "man",
        img: "1706947996814--a1a53539-9615-4d38-837e-5181aafa4345.webp",
        subcategories: []
      }
    ]
  },
  {
    id: 7,
    title: "Аксессуары",
    parent_id: null,
    gender: "man",
    img: null,
    subcategories: []
  },
  {
    id: 8,
    title: "Сумки",
    parent_id: null,
    gender: "man",
    img: null,
    subcategories: []
  }
];
export default datasubMenu;
