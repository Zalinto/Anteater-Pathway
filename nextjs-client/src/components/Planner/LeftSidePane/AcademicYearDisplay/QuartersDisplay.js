import { Draggable, Droppable } from "react-beautiful-dnd";
import { QuartersDisplayContainer } from "./styled";
import CourseItem from "@components/Planner/CourseItem";

export const QuartersDisplay = ({ academicYear, accordionOpenEvent }) => {
  return (
    <QuartersDisplayContainer>
      {academicYear.quarters.map((quarter, index) => (
        <div className="quarter-box" key={index}>
          <div className="header">{quarter.header}</div>
          <Droppable droppableId={quarter.droppableId}>
            {(provided) => (
              <div
                className="course-list"
                ref={provided.innerRef}
                {...provided.droppableProps}
              >
                {quarter.plannedCourses.map((course, index) => (
                  <Draggable
                    key={course.id}
                    draggableId={course.id}
                    index={index}
                  >
                    {(provided) => (
                      <div
                        className="course-item-wrapper"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <CourseItem
                          courseInfo={course}
                          accordionOpenEvent={accordionOpenEvent}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          {quarter.totalUnit > 0 ? (
            <div className="footer">{`${quarter.totalUnit} ${
              parseFloat(quarter.totalUnit) !== 1 ? "units" : "unit"
            }`}</div>
          ) : null}
        </div>
      ))}
    </QuartersDisplayContainer>
  );
};
