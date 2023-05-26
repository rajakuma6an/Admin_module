import React,{useState} from "react";
import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";
import TableComp from "../Table/TableComp";

const DataManagementComp = () => {
  const [data, setData] = useState([
    {
      ProductId: "51322",
      ProductStatus: "inactive",
      ProductName: "Bedfordshire",
      ProductDescription: "Nemo dolorem eum aliquam non.",
    },
    {
      ProductId: "99751",
      ProductStatus: "active",
      ProductName: "innovative",
      ProductDescription: "Nesciunt et voluptas a illo voluptates commodi.",
    },
    {
      ProductId: "21548",
      ProductStatus: "active",
      ProductName: "Markets",
      ProductDescription:
        "Quod et architecto consequatur ducimus sit sit facilis.",
    },
  ]);
  const [search, setSearch] = useState("");
  const [pageCount, setPageCount] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const includedKeys = [
    {
      label: "Product Id",
      value: "ProductId",
    },
    {
      label: "Product Status",
      value: "ProductStatus",
    },
    {
      label: "Product Name",
      value: "ProductName",
    },
    {
      label: "Product Description",
      value: "ProductDescription",
    },
  ];
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="px-5 py-5">
      <h4>Data Management</h4>
      <div className="row my-4">
        <div className="col-4 my-3">
          <SearchBar />
        </div>
        <div className="col-4"></div>
        <div className="col-4">
          <DropDown />
        </div>
      </div>
      <div>
        <TableComp
          data={data}
          isCheck={true}
          EditAction={false}
          DeleteAction={false}
          includedKeys={includedKeys}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          setCurrentPage={setCurrentPage}
          // editRouteName={"/admin/product-management/add-product"}
        />
      </div>
    </div>
  );
};

export default DataManagementComp;
