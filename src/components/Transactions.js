import React, { useState, useEffect } from "react";
import styled from "styled-components";
// api.blockcypher.com/v1/btc/main
const Transactions = () => {
  const dummyData = [
    {
      id: "4hsv554fwehgng55jdc54644qwdbjd65655vaefhbafb54sdh675gszsf48sgd4g",
      timeStamp: "Sep-21-2022 02:14:08 PM + UTC",
      Amount: "0.022756004 BTC",
    },
    {
      id: "4hev554fwehgng55jdc54644qwdbjd65655vaefhbafb54sdh675gszsf48sgd4g",
      timeStamp: "Sep-21-2022 02:14:08 PM + UTC",
      Amount: "0.022756004 BTC",
    },
    {
      id: "5hsv554fwehgng55jdc54644qwdbjd65655vaefhbafb54sdh675gszsf48sgd4g",
      timeStamp: "Sep-22-2022 02:14:08 PM + UTC",
      Amount: "0.022756004 BTC",
    },
    {
      id: "5hte554fwehgng55jdc54644qwdbjd65655vaefhbafb54sdh675gszsf48sgd4g",
      timeStamp: "Sep-21-2022 02:14:08 PM + UTC",
      Amount: "0.022756004 BTC",
    },
    {
      id: "7hsv554fwehgng55jdc54644qwdbjd65655vaefhbafb54sdh675gszsf48sgd4g",
      timeStamp: "Sep-21-2022 02:14:08 PM + UTC",
      Amount: "2 BTC",
    },
    {
      id: "4hsv554fwehgng55jdc54644qwdbjd65655vaefhbafb54sdh675gszsf48sgd4g",
      timeStamp: "Sep-21-2022 02:14:08 PM + UTC",
      Amount: "0.022756004 BTC",
    },
  ];

  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("api.blockcypher.com/v1/btc/main").then((response) =>
      console.log(response)
    );
  }, []);

  const [value, setValue] = useState("");
  const [dataSource, setDataSource] = useState(dummyData);
  const [tableFilter, setTableFilter] = useState([]);

  const filterData = (e) => {
    if (e.target.value != "") {
      setValue(e.target.value);
      const filterTable = dataSource.filter((o) =>
        Object.keys(o).some((k) =>
          String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
        )
      );
      setTableFilter([...filterTable]);
    } else {
      setValue(e.target.value);
      setDataSource([...dataSource]);
    }
  };

  return (
    <MainTransaction>
      <Search>
        <label>
          Search:
          <input type="text" value={value} onChange={filterData} />
        </label>
      </Search>
      <TableContainer>
        <Table>
          <THead>
            <tr>
              <TH>TRANSACTION ID</TH>
              <TH>TIMESTAMP</TH>
              <TH>AMOUNT (BTC)</TH>
              <TH></TH>
            </tr>
          </THead>
          <TBody>
            {value.length > 0
              ? tableFilter.map((data) => {
                  return (
                    <tr>
                      <TD>{data.id}</TD>
                      <TD>{data.timeStamp}</TD>
                      <TD>{data.Amount}</TD>
                      <Button>View</Button>
                    </tr>
                  );
                })
              : dataSource.map((data) => {
                  return (
                    <tr>
                      <TD>{data.id}</TD>
                      <TD>{data.timeStamp}</TD>
                      <TD>{data.Amount}</TD>
                      <Button>View</Button>
                    </tr>
                  );
                })}
          </TBody>
        </Table>
      </TableContainer>
    </MainTransaction>
  );
};

const MainTransaction = styled.div`
  overflow: hidden;
`;
const Search = styled.div`
  position: absolute;
  padding-top: 15%;
  padding-left: 50%;
  width: 100px;
`;

const Button = styled.button`
  box-sizing: border-box;
  background: transparent;

  width: 128px;
  height: 36px;
  left: 1353px;
  top: 74px;
  background: rgba(0, 158, 247, 0.77);
  border: 1px solid #009ef7;
  border-radius: 7px;

  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
`;
const THeading = styled.div`
  position: absolute;
  margin-left: 10%;
  margin-top: 150px;
  font-size: 28px;
  font-family: Poppins;
  font-weight: 600;
  line-height: 50px;
  letter-spacing: 0em;
`;
const TableContainer = styled.div``;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  text-align: left;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border: none;
  margin-top: 30%;
  /* margin: 100px; */
  justify-content: space-between;
  /* max-width: 100vw; */
  max-height: 100vh;
`;

const THead = styled.thead`
  background-color: #f2f2f2;
`;

const TBody = styled.tbody`
  background-color: white;
`;

const TH = styled.th`
  padding: 12px;
  border: 1px solid #ddd;
  color: #009ef7;
`;

const TD = styled.td`
  padding: 12px;
  border: 1px solid #ddd;
`;

export default Transactions;
