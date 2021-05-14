export const handleIsActive = (router): number => {

  switch (router.pathname) {
    case "/":
      return 0;

    case "/dashboard/consumption":
      return 1;

    case "/dashboard/fuel":
      return 2;

    case "/dashboard/course":
      return 3;

    default:
      return 4;
  }
};


