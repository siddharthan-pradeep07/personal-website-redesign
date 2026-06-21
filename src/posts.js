// POSTS
import post1 from "./posts/test.md?raw";
import post2 from "./posts/crabby_1.md?raw";
import post3 from "./posts/general.md?raw";
// GIFS
import gif8 from "./assets/videos/ex_8.gif";
import gif7 from "./assets/videos/ex_7.gif";
import gif6 from "./assets/videos/ex_6.gif";
import gif5 from "./assets/videos/ex_5.gif";
import gif4 from "./assets/videos/ex_4.gif";
import gif3 from "./assets/videos/ex_3.gif";
import gif2 from "./assets/videos/ex_2.gif";
import gif1 from "./assets/videos/ex_1.gif";
//IMAGES
import p2_i1 from "./assets/img/mofl_translater.png";
import p2_i2 from "./assets/img/pfp.jpeg";

const posts = [
    {
        slug: "third-post",
        title: "Working on crabby, a crawling robot",
        date: "20/6/2026",
        content: post2,
        gif: gif6,
    },
    {
        slug: "second-post",
        title: "Life update: We're up again",
        date: "18/6/2026",
        content: post3,
        gif: gif2,
        images: [p2_i1, p2_i2],
    },
    {
        slug: "first-post",
        title: "My First Post",
        date: "17/6/2026",
        content: post1,
        gif: gif1,
    },
];

export default posts;