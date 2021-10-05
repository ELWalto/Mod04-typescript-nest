import { useState, useEffect } from "react";
import { Api } from "../../api/api";

export const ProdutosList = () => {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const response = await Api.buildApiGetRequest(Api.readAllUrl());

      const results = await response.json();

      setProdutos(results);
    };

    loadData();
  }, []);

  // return <div>ProdutosList - {produtos.length}</div>;
  return (
    <div>
      {produtos.map((produtos, index) => (
        <div key={"produtos_" + index}>{produtos.name}</div>
      ))}
    </div>
  );
};


