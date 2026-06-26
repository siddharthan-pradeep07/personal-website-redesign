// POSTS
import post1 from "./posts/test.md?raw";
import post2 from "./posts/crabby_1.md?raw";
import post3 from "./posts/general.md?raw";
import post4 from "./posts/general2.md?raw";

// GIFS
import gif10 from "./assets/videos/ex_10.gif";
import gif9 from "./assets/videos/ex_9.gif";
import gif8 from "./assets/videos/ex_8.gif";
import gif7 from "./assets/videos/ex_7.gif";
import gif6 from "./assets/videos/ex_6.gif";
import gif5 from "./assets/videos/ex_5.gif";
import gif4 from "./assets/videos/ex_4.gif";
import gif3 from "./assets/videos/ex_3.gif";
import gif2 from "./assets/videos/ex_2.gif";
import gif1 from "./assets/videos/ex_1.gif";
import song1 from "./assets/videos/song.mp4";

//IMAGES

//POST 2
import p2_i1 from "./assets/img/mofl_translater.png";
import p2_i2 from "./assets/img/pfp.jpeg";
import p2_i3 from "./assets/img/blahaj.jpg";
import p2_i4 from "./assets/img/pocketmage.jpg";
//POST 3
import p3_i1 from "./assets/img/crabby/image_1.png";
import p3_i2 from "./assets/img/crabby/image_2.jpeg";
import p3_i3 from "./assets/img/crabby/image_3.jpeg";
import p3_i4 from "./assets/img/crabby/image_4.jpeg";
//POST 4
import p4_i1 from "./assets/img/claude.png";
import p4_i2 from "./assets/img/strandbeest_2.png";
import p4_i3 from "./assets/img/strandbeest.jpg";


const posts = [
    {
        slug: "forth-post",
        title: "OOO till 2/7",
        date: "26/6/2026",
        content: post4,
        gif: gif10,
        images: [p4_i1, p4_i2, p4_i3],
    },
    {
        slug: "third-post",
        title: "Working on crabby, a crawling robot",
        date: "20/6/2026",
        content: post2,
        gif: gif6,
        images: [p3_i1, p3_i2, p3_i3, p3_i4],
    },
    {
        slug: "second-post",
        title: "Life update: We're up again",
        date: "18/6/2026",
        content: post3,
        gif: gif2,
        images: [p2_i1, p2_i3, p2_i4],
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