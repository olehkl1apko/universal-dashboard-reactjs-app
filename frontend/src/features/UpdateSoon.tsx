import { useLocation } from "react-router-dom";

export const UpdateSoon = () => {
  const location = useLocation();
  const pathParts = location.pathname.split("/");
  const slug = pathParts[pathParts.length - 1];
  const capitalizedSlug = slug.charAt(0).toUpperCase() + slug.slice(1);

  return (
    <div
      style={{
        fontSize: "28px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <span>{`${capitalizedSlug} functionality at work. Expect an update soon!`}</span>
    </div>
  );
};
