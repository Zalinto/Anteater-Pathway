import { Badge, Box } from "@chakra-ui/layout";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const backgroundColor = {
  success: "green.500",
  failure: "red.500",
};

const icon = {
  success: <FontAwesomeIcon icon={["fas", "check-circle"]} />,
  failure: <FontAwesomeIcon icon={["fas", "exclamation-circle"]} />,
};

const badgeColorScheme = {
  success: "teal",
  failure: "orange",
};

export const ToastBox = ({ status, dataOfInterest, message, ...rest }) => {
  return (
    <Box
      fontSize="1.8rem"
      bg={backgroundColor[status]}
      color="white"
      borderRadius="10px"
      padding="1.5rem"
      w="100%"
      letterSpacing=".1rem"
      display="flex"
      {...rest}
    >
      <div style={{ marginRight: "1.5rem" }}>{icon[status]}</div>
      <div>
        <div style={{ marginBottom: ".5rem" }}>{message}</div>
        <div style={{ display: "flex", maxWidth: "30rem", flexWrap: "wrap" }}>
          {dataOfInterest.map((item, index) => (
            <Badge
              colorScheme={badgeColorScheme[status]}
              key={index}
              fontSize="1.6rem"
              borderRadius="5px"
              pt=".3rem"
              pr=".4rem"
              pl=".4rem"
              mb=".5rem"
              mr=".5rem"
            >
              {item}
            </Badge>
          ))}
        </div>
      </div>
    </Box>
  );
};
