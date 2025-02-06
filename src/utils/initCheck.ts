import type WebItemProps from "../type/webItemProps";
const initItems: WebItemProps[] = [
    {
        title: "小碳二手平台",
        url: "http://www.reabao.icu/",
        icon: "noto:leaf-fluttering-in-wind",
    },
    {
        title: "tailwindcss",
        url: "https://tailwindcss.com/",
        icon: "skill-icons:tailwindcss-light",
    },
    {
        title: "vue",
        url: "https://vuejs.org/",
        icon: "skill-icons:vuejs-light",
    },
    {
        title: "vercel",
        url: "https://vercel.com/",
        icon: "skill-icons:vercel-dark",
    },
    {
        title: "bilibili",
        url: "https://www.bilibili.com/",
        icon: "ant-design:bilibili-filled",
    },
    {
        title: "github",
        url: "https://github.com/",
        icon: "skill-icons:github-light",
    },
    {
        title: "抖音",
        url: "https://www.douyin.com/",
        icon: "ic:baseline-tiktok",
    },
    {
        title: "iconify",
        url: "https://icon-sets.iconify.design/",
        icon: "line-md:iconify2-static",
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
