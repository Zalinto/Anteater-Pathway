import { useGlobalObjects } from "@components/GlobalContextProvider";
import { DragDropContext } from "react-beautiful-dnd";

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

export const DragDropContextProvider = ({
  children,
  isCourseDragging,
  setIsCourseDragging,
}) => {
  const { appUser, updateAppUser } = useGlobalObjects();

  const onDragStart = () => {
    if (!isCourseDragging) {
      setIsCourseDragging(true);
    }
  };

  const onDragEnd = (result) => {
    setIsCourseDragging(false);
    const { source, destination } = result;
    console.log(source);
    console.log(destination);

    if (!destination) {
      return;
    }

    const sId = source.droppableId;
    const dId = destination.droppableId;

    if (sId.startsWith("tp") && dId.startsWith("tp")) {
      // tentative planner -> tentative planner
      if (sId === dId) {
        // reorder
        const newCourseItems = reorder(
          appUser.tentativePlanner.findDroppable(sId),
          source.index,
          destination.index
        );

        appUser.tentativePlanner.updateDroppable(sId, newCourseItems);
      } else {
        // move
        const result = move(
          appUser.tentativePlanner.findDroppable(sId),
          appUser.tentativePlanner.findDroppable(dId),
          source,
          destination
        );

        appUser.tentativePlanner.updateDroppable(sId, result[sId]);
        appUser.tentativePlanner.updateDroppable(dId, result[dId]);
      }
    } else if (sId.startsWith("tp") && dId.startsWith("p")) {
      // tentative planner -> planner
    } else if (sId.startsWith("p") && dId.startsWith("tp")) {
      // planner -> tentative planner
    } else if (sId.startsWith("p") && dId.startsWith("p")) {
      // planner -> planner
      if (sId === dId) {
        // reorder
      } else {
        // move
      }
    }

    updateAppUser(appUser);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd} onDragStart={onDragStart}>
      {children}
    </DragDropContext>
  );
};
