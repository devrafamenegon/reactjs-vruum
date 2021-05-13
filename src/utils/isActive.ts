export const handleIsActive = (router): boolean => {
  switch (router.pathname) {
    case "/":
      return true;

    case "/dashboard/consumption":
      return true;

    case "/dashboard/fuel":
      return true;

    case "/dashboard/course":
      return true;

    default:
      return false;
  }
};
