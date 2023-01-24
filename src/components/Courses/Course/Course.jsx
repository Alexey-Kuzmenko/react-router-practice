import React from "react";
import "./Course.scss"
import courses from "../../../data/courses";
import { useParams, Link, useNavigate } from "react-router-dom";
// import NotFound from "../../NotFound/NotFound";
import { useEffect } from "react";

function Course() {
    const { courseSlug } = useParams()
    const activeCourse = courses.find(({ slug }) => slug === courseSlug)
    const navigate = useNavigate()

    useEffect(() => {
        if (!activeCourse) {
            navigate('..', {
                relative: 'path'
            })
        }
    }, [activeCourse, navigate])

    // ? Simple solution
    // if (!activeCourse) {
    //     return <NotFound />
    // }

    return (
        <div className="Course">
            <h1 className="Course__title">{activeCourse?.title}</h1>
            <div className="Course__content">
                {activeCourse?.desc}
                <p>{activeCourse?.id}</p>
            </div>
            <Link to=".." relative="path" className="Course__button">Back to all courses</Link>
        </div>
    );
}

export default Course;