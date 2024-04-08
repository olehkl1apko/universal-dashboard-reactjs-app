import { GridColDef } from "@mui/x-data-grid";

import "./addItem.scss";
// import { useMutation, useQueryClient } from "@tanstack/react-query";

type Props = {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddItem = (props: Props) => {
  // Using API
  // const queryClient = useQueryClient();
  // const mutation = useMutation({
  //   mutationFn: () => {
  //     return fetch(`http://localhost:8800/api/${props.slug}s`, {
  //       method: "post",
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         id: 111,
  //         img: "",
  //         lastName: "Test",
  //         firstName: "Testovich",
  //         email: "test123@gmail.com",
  //         phone: "067 111 22 33",
  //         createdAt: "01.04.2024",
  //         verified: true,
  //       }),
  //     });
  //   },
  //   onSuccess: () => {
  //     queryClient.invalidateQueries([`all${props.slug}s`]);
  //   },
  // });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const formDataObject: any = {};
    formData.forEach((value, key) => {
      formDataObject[key] = value;
    });
    formDataObject.id = Math.floor(Math.random() * 10000);
    formDataObject.inStock = true;

    console.log(`Product ${formDataObject.title} was added in the stock`);

    //add new item
    // mutation.mutate();
    props.setOpen(false);
  };

  return (
    <div className="add">
      <div className="modal">
        <span className="close" onClick={() => props.setOpen(false)}>
          X
        </span>
        <h1>Add new {props.slug}</h1>
        <form onSubmit={handleSubmit}>
          {props.columns
            .filter(
              (item) =>
                item.field !== "id" &&
                item.field !== "img" &&
                item.field !== "inStock"
            )
            .map((column) => (
              <div className="item" key={column.headerName}>
                <label>{column.headerName}</label>
                <input
                  type={column.type}
                  name={column.field}
                  placeholder={column.field}
                />
              </div>
            ))}
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default AddItem;
