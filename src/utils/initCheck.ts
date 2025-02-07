import type WebItemProps from "../type/webItemProps";
const initItems: WebItemProps[] = [
    {
        id: "1738915970110",
        title: "小碳二手平台",
        url: "http://www.reabao.icu/",
        icon: "noto:leaf-fluttering-in-wind",
    },
    {
        id: "1738915970111",
        title: "tailwindcss",
        url: "https://tailwindcss.com/",
        icon: "skill-icons:tailwindcss-light",
    },
    {
        id: "1738915970112",
        title: "vue",
        url: "https://vuejs.org/",
        icon: "skill-icons:vuejs-light",
    },
    {
        id: "1738915970113",
        title: "vercel",
        url: "https://vercel.com/",
        icon: "skill-icons:vercel-dark",
    },
    {
        id: "1738915970114",
        title: "bilibili",
        url: "https://www.bilibili.com/",
        icon: "ant-design:bilibili-filled",
    },
    {
        id: "1738915970115",
        title: "github",
        url: "https://github.com/",
        icon: "skill-icons:github-light",
    },
    {
        id: "1738915970116",
        title: "抖音",
        url: "https://www.douyin.com/",
        icon: "ic:baseline-tiktok",
    },
    {
        id: "1738915970117",
        title: "iconify",
        url: "https://icon-sets.iconify.design/",
        icon: "line-md:iconify2-static",
    },
    {
        id: "1738915970118",
        title: "mastergo",
        url: "https://mastergo.com/",
        icon: "fluent:design-ideas-16-filled",
    },
    {
        id: "1738920445273",
        title: "斗鱼",
        url: "https://www.douyu.com/",
        icon: "emojione:tropical-fish",
    },
];
const initCheck = () => {
    let stroage = localStorage.getItem("webItem");
    if (!stroage) {
        localStorage.setItem("webItem", JSON.stringify(initItems));
        return initItems;
    } else {
        return JSON.parse(stroage!);
    }
};

export default initCheck;
