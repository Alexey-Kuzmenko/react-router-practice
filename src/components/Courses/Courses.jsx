import "./Courses.scss"
import { useState } from "react";
import courses from "../../data/courses";
import { Link, useLocation, useNavigate } from "react-router-dom";
import queryString from "query-string";
import { useEffect } from "react";

const SORT_KEYS = Object.keys(courses[0])

function sortCourses(courses, key) {
    const sortedCourses = [...courses]
    if (!key || !SORT_KEYS.includes(key)) {
        return sortedCourses
    }

    sortedCourses.sort((a, b) => a[key] > b[key] ? 1 : -1)
    return sortedCourses
}

function Courses() {
    const location = useLocation()
    const navigate = useNavigate()
    const query = queryString.parse(location.search)
    const [sortKey, setSortKey] = useState(query.sort)
    // * add array wich return sortCourses in state when component first time render
    const [sortedCourses, setSortedCourses] = useState(sortCourses(courses, sortKey))

    const coursesLinks = sortedCourses.map(({ title, slug }, index) => {
        return (
            <Link to={slug} key={index} className="Courses__link">{title}</Link>
        )
    })

    useEffect(() => {
        if (!sortKey || !SORT_KEYS.includes(sortKey)) {
            /*  
                !component will rerender twice
                * first time when call function navigate
                * second time when chenged state via setSortKey 
            */
            navigate('.')
            setSortKey()
            setSortedCourses([...courses])
        }
    }, [sortKey, navigate])

    return (
        <div className="Courses">
            <h1 className="Courses__title">Available Courses</h1>
            <p className="Courses__sub-text"><strong>{sortKey ? `Courses sorted by ${sortKey}` : null}</strong></p>
            <div className="Courses__inner-container">
                {coursesLinks}
            </div>
        </div>
    );
}

export default Courses;