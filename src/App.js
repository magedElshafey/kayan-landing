import React, { useState, useRef } from "react";
import IntlTelInput from "react-intl-tel-input";
import "react-intl-tel-input/dist/main.css";
const App = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [salary, setSalary] = useState("");
  const [question, setQuestion] = useState("");
  // const ref = useRef();
  // const [isOpen, setIsOpen] = useState(false);
  // const [selectedOption, setSelectedOption] = useState("");

  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };

  // const handleOptionSelect = (option) => {
  //   setSelectedOption(option);
  //   setIsOpen(false); // Close the dropdown when an option is selected
  // };
  const handlePhoneNumberChange = (
    isValid,
    value,
    selectedCountryData,
    fullNumber,
    extension
  ) => {
    setPhone(value);
    // You can perform additional actions when the phone number changes here
  };
  const sendData = async (e) => {
    e.preventDefault();
    console.log("this is the  name", name);
    console.log("this is the  phone", phone);
    console.log("this is the  salary", salary);
    console.log("this is the  question", question);
    const res = await fetch(`https://kayanhillscrm.com/api/client/store`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        phone,
        salary,
        supportHousing: question,
      }),
    });
    const data = await res.json();
    console.log("this is the res", data);
    if (data.status) {
      alert(data.message);
    } else {
      alert(data.message);
    }
  };
  return (
    <div dir="rtl">
      <div className="d-none d-md-block">
        <div className="row">
          <div className="col-12 col-md-7 mb-3 mb-md-0">
            <div className="container mt-5 pe-3">
              <h1>سجل اهتمامك</h1>
              <form onSubmit={sendData} className="mt-5 form">
                <div className="input-container mb-5">
                  <label htmlFor="name" className="top-label">
                    الاسم
                  </label>
                  <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    className="top-label-input"
                  />
                </div>

                <div className="input-container mb-5">
                  <label htmlFor="phone" className="top-label">
                    رقم الهاتف
                  </label>
                  <IntlTelInput
                    value={phone}
                    containerClassName="intl-tel-input top-label-input"
                    inputClassName="phone"
                    placeholder=""
                    defaultCountry="sa"
                    onPhoneNumberChange={handlePhoneNumberChange}
                  />
                </div>

                <div class="input-container mb-5">
                  <label for="q" class="top-label">
                    هل انت مستحق للدعم السكني
                  </label>
                  <select
                    onChange={(e) => setQuestion(e.target.value)}
                    id="q"
                    class="top-label-input"
                  >
                    <option value="worthy">نعم</option>
                    <option value="not_worthy">لا</option>
                    <option value="nothing">لا اعلم</option>
                  </select>
                </div>
                <div class="input-container mb-5">
                  <label for="time" class="top-label">
                    {" "}
                    نطاق الراتب{" "}
                  </label>
                  <select
                    onChange={(e) => setSalary(e.target.value)}
                    class="top-label-input"
                    id="time"
                  >
                    <option value="3000">من 3000 إلى6999</option>
                    <option value="5000">من7000 إلى 9999</option>
                    <option value="7000">من 10000 إلى 14000</option>
                    <option value="8000">من 14 الف فما فوق</option>
                    <option value="100000">غير ذلك</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input id="keep" type="checkbox" />
                  <label htmlFor="keep" className="d-inline-block me-2 label">
                    ابقى علي تواصل بأحدث المستجدات
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button type="submit" className="btn">
                    أرسل
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-12 col-md-5 mb-3 mb-md-0 justify-content-start heroImg"></div>
        </div>
      </div>
      <div className="d-md-none">
        <div className="container mt-4">
          <div className="row">
            <div className="col-12">
              <h1>سجل اهتمامك</h1>
              <form onSubmit={sendData} className="mt-5">
                <div className="input-container mb-5">
                  <label htmlFor="name" className="top-label">
                    الاسم
                  </label>
                  <input
                    value={name}
                    name="name"
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type="text"
                    className="top-label-input"
                  />
                </div>

                <div className="input-container mb-5">
                  <label htmlFor="phone" className="top-label">
                    رقم الهاتف
                  </label>
                  <IntlTelInput
                    containerClassName="intl-tel-input top-label-input"
                    inputClassName="phone"
                    placeholder=""
                    defaultCountry="sa"
                  />
                </div>

                <div class="input-container mb-5">
                  <label for="q" class="top-label">
                    هل انت مستحق للدعم السكني
                  </label>
                  <select id="q" class="top-label-input ">
                    <option>نعم</option>
                    <option>لا</option>
                    <option>غير ذلك</option>
                  </select>
                </div>
                <div class="input-container mb-5">
                  <label for="time" class="top-label">
                    {" "}
                    نطاق الراتب{" "}
                  </label>
                  <select class="top-label-input " id="time">
                    <option>من 3000 إلى6999</option>
                    <option>من7000 إلى 9999</option>
                    <option>من 10000 إلى 14000</option>
                    <option>من 14 الف فما فوق</option>
                    <option>غير ذلك</option>
                  </select>
                </div>
                <div className="mb-4">
                  <input id="keep" type="checkbox" />
                  <label htmlFor="keep" className="d-inline-block me-2 label">
                    ابقى علي تواصل بأحدث المستجدات
                  </label>
                </div>
                <div className="d-flex justify-content-center">
                  <button className="btn">أرسل</button>
                </div>
              </form>
            </div>
            <div className="col-12 heroImg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
