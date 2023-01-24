
function createId(idLength) {
    return Math.floor(Math.random() * idLength)
}

const courses = [
    {
        title: "Complete React Guide",
        slug: "react",
        id: createId(11),
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero saepe debitis culpa itaque eveniet laborum architecto commodi, quidem ea. Asperiores perspiciatis voluptates eos! Cumque inventore dolor, similique praesentium modi ipsam.
        Voluptatibus qui at commodi, quam facere deleniti beatae alias assumenda, mollitia nihil eum ipsum eligendi ea neque iste excepturi maiores soluta explicabo ullam molestiae, quidem voluptatem aliquid. Quod, ullam quidem!
        Quibusdam ab repellendus non et nam a, placeat laboriosam officiis laborum modi autem deleniti ipsam qui corporis pariatur possimus, corrupti, in enim maiores vel velit itaque praesentium.`
    },
    {
        title: "Redux For Professionals",
        slug: "redux",
        id: createId(11),
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero saepe debitis culpa itaque eveniet laborum architecto commodi, quidem ea. Asperiores perspiciatis voluptates eos! Cumque inventore dolor, similique praesentium modi ipsam.
        Voluptatibus qui at commodi, quam facere deleniti beatae alias assumenda, mollitia nihil eum ipsum eligendi ea neque iste excepturi maiores soluta explicabo ullam molestiae, quidem voluptatem aliquid. Quod, ullam quidem!
        Quibusdam ab repellendus non et nam a, placeat laboriosam officiis laborum modi autem deleniti ipsam qui corporis pariatur possimus, corrupti, in enim maiores vel velit itaque praesentium.`
    },
    {
        title: "JavaScript For Beginners",
        slug: "javascript",
        id: createId(11),
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero saepe debitis culpa itaque eveniet laborum architecto commodi, quidem ea. Asperiores perspiciatis voluptates eos! Cumque inventore dolor, similique praesentium modi ipsam.
        Voluptatibus qui at commodi, quam facere deleniti beatae alias assumenda, mollitia nihil eum ipsum eligendi ea neque iste excepturi maiores soluta explicabo ullam molestiae, quidem voluptatem aliquid. Quod, ullam quidem!
        Quibusdam ab repellendus non et nam a, placeat laboriosam officiis laborum modi autem deleniti ipsam qui corporis pariatur possimus, corrupti, in enim maiores vel velit itaque praesentium.`
    },
    {
        title: "Complete Next.Js Guide",
        slug: "next.js",
        id: createId(11),
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero saepe debitis culpa itaque eveniet laborum architecto commodi, quidem ea. Asperiores perspiciatis voluptates eos! Cumque inventore dolor, similique praesentium modi ipsam.
        Voluptatibus qui at commodi, quam facere deleniti beatae alias assumenda, mollitia nihil eum ipsum eligendi ea neque iste excepturi maiores soluta explicabo ullam molestiae, quidem voluptatem aliquid. Quod, ullam quidem!
        Quibusdam ab repellendus non et nam a, placeat laboriosam officiis laborum modi autem deleniti ipsam qui corporis pariatur possimus, corrupti, in enim maiores vel velit itaque praesentium.`
    },
    {
        title: "TypeScript Professional Guide",
        slug: "typescript",
        id: createId(11),
        desc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vero saepe debitis culpa itaque eveniet laborum architecto commodi, quidem ea. Asperiores perspiciatis voluptates eos! Cumque inventore dolor, similique praesentium modi ipsam.
        Voluptatibus qui at commodi, quam facere deleniti beatae alias assumenda, mollitia nihil eum ipsum eligendi ea neque iste excepturi maiores soluta explicabo ullam molestiae, quidem voluptatem aliquid. Quod, ullam quidem!
        Quibusdam ab repellendus non et nam a, placeat laboriosam officiis laborum modi autem deleniti ipsam qui corporis pariatur possimus, corrupti, in enim maiores vel velit itaque praesentium.`
    },
]

export default courses