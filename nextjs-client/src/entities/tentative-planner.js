export class TentativePlanner {
  constructor() {
    this._leftCourseItems = [];
    this._rightCourseItems = [];
    this._totalUnit = 0;
  }

  get droppables() {
    return [
      { droppableId: "tp-left", courseItems: this._leftCourseItems },
      { droppableId: "tp-right", courseItems: this._rightCourseItems },
    ];
  }

  findDroppable(droppableId) {
    if (droppableId === "tp-left") return this._leftCourseItems;
    else if (droppableId === "tp-right") return this._rightCourseItems;
  }

  updateDroppable(droppableId, newCourseItems) {
    if (droppableId === "tp-left") {
      this._leftCourseItems = newCourseItems;
    } else if (droppableId === "tp-right") {
      this._rightCourseItems = newCourseItems;
    }
  }

  addCourse(course) {
    if (this._leftCourseItems.length <= this._rightCourseItems.length) {
      this._leftCourseItems.push(course);
    } else {
      this._rightCourseItems.push(course);
    }
  }

  deleteCourse(courseId) {
    let foundIndex = this._leftCourseItems.findIndex(
      (course) => course.id === courseId
    );

    if (foundIndex !== -1) {
      this._leftCourseItems.splice(foundIndex, 1);
    } else {
      foundIndex = this._rightCourseItems.findIndex(
        (course) => course.id === courseId
      );

      if (foundIndex !== -1) {
        this._rightCourseItems.splice(foundIndex, 1);
      }
    }

    this.balanceCourseItems();
  }

  deleteAllCourses() {
    this._leftCourseItems = [];
    this._rightCourseItems = [];
  }

  updateCourseColor(courseId, newColor) {
    const foundCourse = this._findCourse(courseId);
    if (foundCourse) {
      foundCourse.color = newColor;
    }
  }

  balanceCourseItems() {
    let imbalanceCourses = [];

    if (this._leftCourseItems.length > this._rightCourseItems.length) {
      imbalanceCourses = this._leftCourseItems.splice(
        this._rightCourseItems.length
      );
    } else if (this._leftCourseItems.length < this._rightCourseItems.length) {
      imbalanceCourses = this._rightCourseItems.splice(
        this._leftCourseItems.length
      );
    }

    for (const course of imbalanceCourses) {
      this.addCourse(course);
    }
  }

  updateCustomUnit(courseId, newUnit) {
    const foundCourse = this._findCourse(courseId);
    if (foundCourse) {
      foundCourse.unit = newUnit.trim();
    }
  }

  isEmpty() {
    return (
      this._leftCourseItems.length === 0 && this._rightCourseItems.length === 0
    );
  }

  get leftCourseItems() {
    return this._leftCourseItems;
  }

  set leftCourseItems(newValue) {
    this._leftCourseItems = newValue;
  }

  get rightCourseItems() {
    return this._rightCourseItems;
  }

  set rightCourseItems(newValue) {
    this._rightCourseItems = newValue;
  }

  get bothCourseItems() {
    return [this._leftCourseItems, this._rightCourseItems];
  }

  get totalUnit() {
    this._calculateTotalUnit();

    return this._totalUnit;
  }

  _calculateTotalUnit() {
    let result = 0;

    for (const course of this._leftCourseItems) {
      if (!isNaN(parseFloat(course.unit))) {
        result += parseFloat(course.unit);
      }
    }

    for (const course of this._rightCourseItems) {
      if (!isNaN(parseFloat(course.unit))) {
        result += parseFloat(course.unit);
      }
    }

    this._totalUnit = result;
  }

  _findCourse(courseId) {
    let result;

    for (const course of this._leftCourseItems) {
      if (course.id === courseId) {
        result = course;
        break;
      }
    }

    for (const course of this._rightCourseItems) {
      if (course.id === courseId) {
        result = course;
        break;
      }
    }

    return result;
  }
}
