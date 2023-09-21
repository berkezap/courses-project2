import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];

  const checkIndex = (index) => {
    if (index < 0) {
      return courses.length - 1;
    }
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };

  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };

  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>
      <div className="CardDiv">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="Card">
          <div className="CardtTtlePrice">
            <h2 className="CardTitle">{title}</h2>
            <h4 className="CardPrice">{price}TL</h4>
          </div>
          <p className="CardContent"> {content}</p>
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/*   {courses.map((course) => {
          return (
            <Course
              key={course.id}
              {...course}
              removeOneCourse={removeCourse}
            />
          );
        })} */}
      </div>
    </div>
  );
}
export default Courses;
