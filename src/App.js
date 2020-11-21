import React, { useState } from "react";
import axios from "axios";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [filter, setFilter] = useState([]);
  const [disabled, setDisabled] = useState(false);
  const [id, setId] = useState("");
  const [text, setText] = useState("");
  const handleClick = (value, title, id) => {
    console.log(id);
    let data = "";
    let url =
      "https://api.crossref.org/works?sort=score&order=desc&rows=20&query.bibliographic=" +
      value;
    // console.log(url, "url");

    axios
      .get(url)
      .then(function (response) {
        console.log(response);
        if (response.status === 200) {
          // console.log(response.data.message.items);
          data =
            response &&
            response.data &&
            response.data.message &&
            response.data.message.items
              ? response.data.message.items
              : [];
          // console.log(data, "data");
          const filter = data.filter((item) => item.title[0] === title);
          console.log(filter.length, "filter");
          if (filter.length) {
            setDisabled(true);
            setId(id);
            setText("");
          } else {
            setDisabled(false);
            setText("No-Data");
            setId(id);
          }
          setFilter(filter);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  const content = `Barnes RJ, Dhanoa MS, Lister SJ (1989) Standard normal variate
  transformation and de-trending of near-infrared diffuse reflectance
  spectra. Appl Spectrosc 43(5):777`;
  const title = `Standard normal variate transformation and de-trending of near-infrared diffuse reflectance spectra`;
  const content1 = `Brùndum J, Munck L, Henckel P, Karlsson A, Tornberg E, Engelsen SB
  (2000) Prediction of water-holding capacity and composition of porcine
  meat by comparative spectroscopy. Meat Sci 55(2):185`;
  const title1 = `Prediction of water-holding capacity and composition of porcine meat by comparative spectroscopy`;
  const content2 = `Lazarescu C, Hart F, Pirouz Z, Panagiotidis K, Mansfield SD, Barrett JD,
  Avramidis S (2017) Wood species identification by near-infrared
  spectroscopy. International Wood Products Journal 8(1):32–35`;
  const title2 = `FT-NIR spectroscopy and wood identification.`;
  const content3 = ` Lazarescu C, Hart F, Pirouz Z, Panagiotidis K, Mansfield SD, Barrett JD,
  Avramidis S (2017) Wood species identification by near-infrared
  spectroscopy. International Wood Products Journal 8(1):32–35`;
  const title3 = `Wood species identification by near-infrared spectroscopy.`;
  const content4 = `Dawson-Andoh B, Adedipe OE (2012) Rapid spectroscopic separation of
  three Canadian softwoods. Wood Sci Technol 46(6):1202`;
  const title4 = "Rapid spectroscopic separation of three Canadian softwoods";
  const content5 = ` Fujimoto T, Kurata Y, Matsumoto K, Tsuchikawa S (2010) Feasibility of
  near-infrared spectroscopy for online multiple trait assessment of sawn
  lumber. J Wood Sci 56(6):459`;
  const title5 = `Feasibility of near-infrared spectroscopy for online multiple trait assessment of sawn lumber`;

  // console.log(filter, "filter");
  // console.log(disabled, "-----", id, "-------", text, "disabled");

  return (
    //getting response from api is too late so please wait for untill the response come
    <div class="main">
      <div class="para" id="par1" title={title}>
        {content} {" : "}
        {disabled && id === "par1" ? (
          <button class="disabled">CrossRef Check</button>
        ) : (
          <button
            class="button"
            onClick={() => handleClick(content, title, "par1")}
          >
            CrossRef Check
          </button>
        )}
      </div>

      {disabled && id === "par1" ? (
        <div class="para" id="par1" title={title}>
          {content} {filter && filter[0] && filter[0].DOI}
        </div>
      ) : null}
      {text && (id === "par1") === "No-Data" ? <p> No-Data Availble</p> : null}

      <div class="para" id="par2" title={title1}>
        {content1}
        {" : "}
        {disabled && id === "par2" ? (
          <button class="disabled">CrossRef Check</button>
        ) : (
          <button
            class="button"
            onClick={() => handleClick(content1, title1, "par2")}
          >
            CrossRef Check
          </button>
        )}
      </div>

      {disabled && id === "par2" ? (
        <div class="para" id="par2" title={title1}>
          {content1} {filter && filter[0] && filter[0].DOI}
        </div>
      ) : null}
      {id === "par2" && text === "No-Data" ? <p> No-Data Availble</p> : null}

      <div class="para" id="par3" title={title2}>
        {content2}
        {" : "}
        {disabled && id === "par3" ? (
          <button class="disabled">CrossRef Check</button>
        ) : (
          <button
            class="button"
            onClick={() => handleClick(content2, title2, "par3")}
          >
            CrossRef Check
          </button>
        )}
      </div>
      {disabled && id === "par3" ? (
        <div class="para" id="par3" title={title2}>
          {content2} {filter && filter[0] && filter[0].DOI}
        </div>
      ) : null}
      {id === "par3" && text === "No-Data" ? <p> No-Data Availble</p> : null}

      <div class="para" id="par4" title={title3}>
        {content3}
        {" : "}
        {disabled && id === "par4" ? (
          <button class="disabled">CrossRef Check</button>
        ) : (
          <button
            class="button"
            onClick={() => handleClick(content3, title3, "par4")}
          >
            CrossRef Check
          </button>
        )}
      </div>
      {disabled && id === "par4" ? (
        <div class="para" id="par4" title={title3}>
          {content2} {filter && filter[0] && filter[0].DOI}
        </div>
      ) : null}
      {id === "par4" && text === "No-Data" ? <p> No-Data Availble</p> : null}

      <div class="para" id="par5" title={title4}>
        {content4}
        {" : "}
        {disabled && id === "par5" ? (
          <button class="disabled">CrossRef Check</button>
        ) : (
          <button
            class="button"
            onClick={() => handleClick(content4, title4, "par5")}
          >
            CrossRef Check
          </button>
        )}
      </div>
      {disabled && id === "par5" ? (
        <div class="para" id="par5" title={title4}>
          {content4} {filter && filter[0] && filter[0].DOI}
        </div>
      ) : null}
      {id === "par5" && text === "No-Data" ? <p> No-Data Availble</p> : null}

      <div class="para" id="par6" title={title5}>
        {content5}
        {" : "}
        {disabled && id === "par6" ? (
          <button class="disabled">CrossRef Check</button>
        ) : (
          <button
            class="button"
            onClick={() => handleClick(content5, title5, "par6")}
          >
            CrossRef Check
          </button>
        )}
      </div>
      {disabled && id === "par6" ? (
        <div class="para" id="par6" title={title5}>
          {content5} {filter && filter[0] && filter[0].DOI}
        </div>
      ) : null}
      {id === "par6" && text === "No-Data" ? <p> No-Data Availble</p> : null}
    </div>
  );
}

export default App;
