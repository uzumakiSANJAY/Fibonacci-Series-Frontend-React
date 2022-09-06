import React, { useState } from "react";

const Fibonacci = () => {
  const [terms, setTerms] = useState("");
  const [firstnumber, setFirstnumber] = useState("");
  const [secondnumber, setSecondnumber] = useState("");
  const [series, setSeries] = useState(null);
  const handleSubmit=(e)=>{
    var myHeaders = new Headers();
    myHeaders.append(
      "Cookie",
      "csrftoken=EmLuPRUNkf6K6gJITHLqCb44GCBa3XdZbwQ9z0697rglSv3GfLbtztOqBKdfAxaB"
    );

    var formdata = new FormData();
    formdata.append("n", terms);
    formdata.append("firstnumber", firstnumber);
    formdata.append("secondnumber", secondnumber);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };
    fetch("https://fibonaccidjangobackend.herokuapp.com/api/fibo/fibonacci", requestOptions)
      .then((response) => response.text())
      .then((result) => setSeries(result))
      .catch((error) => console.log("error", error));
  };

  return (
    <>
    <div className="container">
      <h1> How many Fibonacci terms to display :</h1>
      <input
        type="text"
        onChange={(e) => {
          console.log("e.target.value", e.target.value);
          setTerms(e.target.value);
        }}
      />
      <h1> Give First Number :</h1>
      <input
        type="text"
        onChange={(e) => {
          console.log("e.target.value", e.target.value);
          setFirstnumber(e.target.value);
        }}
      />
      <h1> Give Second Number : </h1>
      <input
        type="text"
        onChange={(e) => {
          console.log("e.target.value", e.target.value);
          setSecondnumber(e.target.value);
        }}
      />
      <div><button className="btn-primary" onClick={handleSubmit} style={{marginTop:"15px"}}>Submit</button></div>
      <div> <h2>Your Desired Series : {series} </h2></div>
      </div>
    </>
  );
};

export default Fibonacci;
