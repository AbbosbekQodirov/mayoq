import React from "react";
import { Link } from "react-router-dom";
import "./Table.css"

function Table({datas}) {
    const data = Object.values(datas[0]?.emergency_calls);
    console.log(data);
    const column = [
      {
        title: "No",
        key: "no",
      },
      {
        title: " Ism familiya",
        key: "name",
      },
      {
        title: "Kassalik tarixi",
        key: "history",
      },
      {
        title: "Telefon raqam",
        key: "number",
      },
      {
        title: "Sana",
        key: "date",
      },
    ];
    // const data = [
    //   {
    //     no: 1,        
    //     name: "Ali Akbarov",
    //     history: "Qon bosimi ko’tarilishi",
    //     number: "+998936408640",
    //     date: "12.06.2023",
    //   },
    //   {
    //     no: 2,        
    //     name: "Ali Akbarov",
    //     history: "Qon bosimi ko’tarilishi",
    //     number: "+998936408640",
    //     date: "12.06.2023",
    //   },
    //   {
    //     no: 3,        
    //     name: "Ali Akbarov",
    //     history: "Qon bosimi ko’tarilishi",
    //     number: "+998936408640",
    //     date: "12.06.2023",
    //   },

      
    // ];

  return (
    <div>
      {data ? (
        <div className="table">
          <div className="table_nav">
            <Link to={"/map"}>xaritaga qaytish</Link>
            <div>
              <select name="" id="">
                <option value="">May oyida 1023 ta chaqiruv</option>
                <option value="">May oyida 1023 ta chaqiruv</option>
                <option value="">May oyida 1023 ta chaqiruv</option>
                <option value="">May oyida 1023 ta chaqiruv</option>
                <option value="">May oyida 1023 ta chaqiruv</option>
              </select>
            </div>
          </div>
          <table>
            <thead>
              <tr>
                {column?.map((elem, index) => (
                  <th key={index}> {elem.title}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {data?.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.ism_familiya}</td>
                  <td>{item.medical_history}</td>
                  <td>{item.user_id}</td>
                  <td>{item.start_time}</td>

                  {/* {column?.map((elem, index) => (
                <>
                  {!elem.render ? (
                    <td key={index}> {item[elem.key]}</td>
                  ) : (
                    <td key={index}> {elem.render(item[elem.key], item)}</td>
                  )}
                </>
              ))} */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h1>ERROR</h1>
      )}
    </div>
  );
}

export default Table;
