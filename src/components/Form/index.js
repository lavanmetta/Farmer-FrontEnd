import React, { useState } from "react";
import Axios from "axios";
import { ToastContainer, toast } from 'react-custom-alert';
import 'react-custom-alert/dist/index.css';
import "./index.css";

const Form = () => {
  const [user, setUser] = useState({
    phoneNumber: "",
    firstName: "",
    lastName: "",
    village: "",
    mandal: "",
    cropVariety: "",
    totalAcres: "",
    farmingIpm: "",
    farmingAcres: "",
    semiOrganics: "",
    semiAcres: "",
    organics: "",
    orgAcres: "",
    date: "",
    manureOrganic: "",
    drip: "",
    cropCondition: "",
    ageOfCrop: "",
    sprayingSerial: "",
    sprayingCombination: "",
    quantity: "",
    remarks: "",
    files: "",
  });

  // const getDetails = (e) => {

  //   if (phoneNumber.length === 10) {
  //     Axios.get("http://127.0.0.1:8000/api/get-user").then((response) => {
  //       const fetchedData = response.data.getuser;
  //       // eslint-disable-next-line
  //       fetchedData.map((each) => {
  //         if (parseInt(phoneNumber) === each.phoneNumber) {
  //           setUser({
  //             user,
  //             ...each,
  //           });
  //         }
  //       });
  //     });
  //   }
  // };


  const getDetails = (e) => {

    if (phoneNumber.length === 10) {
      Axios.get("http://127.0.0.1:8000/api/get-user").then((response) => {
        const fetchedData = response.data.getuser;
        const newFetchedData = fetchedData.map((each) => ({
          phoneNumber: each.phoneNumber,
          firstName: each.firstName,
          lastName: each.lastName,
          village: each.village,
          mandal: each.mandal,
          cropVariety: each.cropVariety,
          totalAcres: each.totalAcres,
          farmingIpm: each.farmingIpm,
          farmingAcres: each.farmingAcres,
          semiOrganics: each.semiOrganics,
          semiAcres: each.semiAcres,
          organics: each.organics,
          orgAcres: each.orgAcres,
          date: "",
          manureOrganic: "",
          drip: "",
          cropCondition: "",
          ageOfCrop: "",
          sprayingSerial: "",
          sprayingCombination: "",
          quantity: "",
          remarks: "",
          files: "",
        }));
        // eslint-disable-next-line
        newFetchedData.map((each) => {
          if (parseInt(phoneNumber) === each.phoneNumber) {
            setUser({
              user,
              ...each,
            });
          }
        });
      });
    }
  };

  const [error, SetError] = useState(false);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (
      phoneNumber.length === 0 ||
      firstName.length === 0 ||
      lastName.length === 0 ||
      village.length === 0 ||
      mandal.length === 0 ||
      cropVariety.length === 0 ||
      totalAcres.length === 0 ||
      farmingIpm.length === 0 ||
      farmingAcres.length === 0 ||
      semiOrganics.length === 0 ||
      semiAcres.length === 0 ||
      organics.length === 0 ||
      orgAcres.length === 0 ||
      date.length === 0 ||
      manureOrganic.length === 0 ||
      drip.length === 0 ||
      cropCondition.length === 0 ||
      ageOfCrop.length === 0 ||
      sprayingSerial.length === 0 ||
      sprayingCombination.length === 0 ||
      quantity.length === 0
    ) {
      SetError(true);
    } 
    else {
      const {
        phoneNumber,
        firstName,
        lastName,
        village,
        mandal,
        cropVariety,
        totalAcres,
        farmingIpm,
        farmingAcres,
        semiOrganics,
        semiAcres,
        organics,
        orgAcres,
        date,
        manureOrganic,
        drip,
        cropCondition,
        ageOfCrop,
        sprayingSerial,
        sprayingCombination,
        quantity,
        remarks,
        files,
      } = user;
      Axios.post("http://127.0.0.1:8000/api/add-user", {
        phoneNumber: phoneNumber,
        firstName: firstName,
        lastName: lastName,
        village: village,
        mandal: mandal,
        cropVariety: cropVariety,
        totalAcres: totalAcres,
        farmingIpm: farmingIpm,
        farmingAcres: farmingAcres,
        semiOrganics: semiOrganics,
        semiAcres: semiAcres,
        organics: organics,
        orgAcres: orgAcres,
        date: date,
        manureOrganic: manureOrganic,
        drip: drip,
        cropCondition: cropCondition,
        ageOfCrop: ageOfCrop,
        sprayingSerial: sprayingSerial,
        sprayingCombination: sprayingCombination,
        quantity: quantity,
        remarks: remarks,
        files: files,
      }).then(() => console.log("Success"));
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      // eslint-disable-next-line
      setTimeout(function(){
        window.location.reload();
     }, 4000);
      toast.success('Success');
    }
  };

  const {
    phoneNumber,
    firstName,
    lastName,
    village,
    mandal,
    cropVariety,
    totalAcres,
    farmingIpm,
    farmingAcres,
    semiOrganics,
    semiAcres,
    organics,
    orgAcres,
    date,
    manureOrganic,
    drip,
    cropCondition,
    ageOfCrop,
    sprayingSerial,
    sprayingCombination,
    quantity,
  } = user;

  return (
    <div className="container">
      <div className="img-container">
          <img alt="logo" src="https://i.postimg.cc/pd5sLV8s/LOG-GREENINDIA1024-1-removebg-preview.png" className="image" />
      </div>
        
      <div className="main-container">
        <form className="form-details">
          <div className="number-container">
            <label htmlFor="phone">Phone Number :</label>    
            <br />
            <input
              className={
                error && phoneNumber <= 0
                  ? "input-number focus red"
                  : "input-number focus"
              }
              type="tel"
              id="phone"
              pattern="[0-9]{3} [0-9]{3} [0-9]{4}"
              maxLength="10"
              placeholder={
                error && phoneNumber <= 0
                  ? ""
                  : "Enter your 10 digit mobile number"
              }
              value={phoneNumber}
              onKeyUp={getDetails}
              onChange={(e) =>
                setUser({ ...user, phoneNumber: e.target.value })
              }
            />
          </div>
          <div className="name-container">
            <div className="first-name-container">
              <label htmlFor="firstname">First Name : </label>
              <br />
              <input
                className={
                    error && firstName <= 0
                      ? "firstname-input focus red"
                      : "firstname-input focus"
                  }
                type="text"
                id="firstname"
                value={firstName}
                onChange={(e) =>
                  setUser({ ...user, firstName: e.target.value })
                }
              />
            </div>
            <div className="last-name-container">
              <label htmlFor="lastname">Last Name :</label>
              <br />
              <input
                className={
                    error && lastName <= 0
                      ? "secondname-input focus red"
                      : "secondname-input focus"
                  }
                type="text"
                id="lastname"
                value={lastName}
                onChange={(e) => setUser({ ...user, lastName: e.target.value })}
              />
            </div>
          </div>

          <div className="place-container">
            <div className="village-container">
              <label htmlFor="village">Village :</label>
              <br />
              <input
                className={
                    error && village <= 0
                      ? "village-input focus red"
                      : "village-input focus"
                  }
                type="text"
                id="village"
                value={village}
                onChange={(e) => setUser({ ...user, village: e.target.value })}
              />
            </div>
            <div className="mandal-container">
              <label htmlFor="mandal">Mandal/District :</label>
              <br />
              <input
                className={
                    error && mandal <= 0
                      ? "mandal-input focus red"
                      : "mandal-input focus"
                  }
                type="text"
                id="mandal"
                value={mandal}
                onChange={(e) => setUser({ ...user, mandal: e.target.value })}
              />
            </div>
          </div>

          <div className="crop-main-container">
            <div className="crop-acres-container">
              <div className="input-field">
                <label htmlFor="crop">Crop&variety :</label>
                <br />
                <input
                  className={
                    error && cropVariety <= 0
                      ? "crop-input focus red"
                      : "crop-input focus"
                  }
                  type="text"
                  id="crop"
                  value={cropVariety}
                  onChange={(e) =>
                    setUser({ ...user, cropVariety: e.target.value })
                  }
                />
              </div>
              <div className="acres">
                <label htmlFor="totalacres">Total Acres :</label>
                <br />
                <input
                  className={
                    error && totalAcres <= 0
                      ? "acres-input focus red"
                      : "acres-input focus"
                  }
                  type="number"
                  id="totalacres"
                  value={totalAcres}
                  onChange={(e) =>
                    setUser({ ...user, totalAcres: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="crop-acres-container-2">
              <div className="input-field">
                <label htmlFor="farming">Farming IPM :</label>
                <br />
                <input
                    className={
                    error && farmingIpm <= 0
                      ? "crop-input focus red"
                      : "crop-input focus"
                  }
                  type="text"
                  id="farming"
                  value={farmingIpm}
                  onChange={(e) =>
                    setUser({ ...user, farmingIpm: e.target.value })
                  }
                />
              </div>
              <div className="acres">
                <label htmlFor="acres1">Acres :</label>
                <br />
                <input
                  className={
                    error && farmingAcres <= 0
                      ? "acres-input focus red"
                      : "acres-input focus"
                  }
                  type="number"
                  id="acres1"
                  value={farmingAcres}
                  onChange={(e) =>
                    setUser({ ...user, farmingAcres: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="crop-acres-main-container">
            <div className="crop-acres-container">
              <div className="input-field">
                <label htmlFor="semiorganics">Semi Organics :</label>
                <br />
                <input
                  className={
                    error && semiOrganics <= 0
                      ? "crop-input focus red"
                      : "crop-input focus"
                  }
                  type="text"
                  id="semiorganics"
                  value={semiOrganics}
                  onChange={(e) =>
                    setUser({ ...user, semiOrganics: e.target.value })
                  }
                />
              </div>
              <div className="acres">
                <label htmlFor="acres2">Acres :</label>
                <br />
                <input
                   className={
                    error && semiAcres <= 0
                      ? "acres-input focus red"
                      : "acres-input focus"
                  }
                  type="number"
                  id="acres2"
                  value={semiAcres}
                  onChange={(e) =>
                    setUser({ ...user, semiAcres: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="crop-acres-container-2">
              <div className="input-field">
                <label htmlFor="organics">Organics :</label>
                <br />
                <input
                  className={
                    error && organics <= 0
                      ? "crop-input focus red"
                      : "crop-input focus"
                  }
                  type="text"
                  id="organics"
                  value={organics}
                  onChange={(e) =>
                    setUser({ ...user, organics: e.target.value })
                  }
                />
              </div>
              <div className="acres">
                <label htmlFor="acres3">Acres :</label>
                <br />
                <input
                  className={
                    error && orgAcres <= 0
                      ? "acres-input focus red"
                      : "acres-input focus"
                  }
                  type="number"
                  id="acres3"
                  value={orgAcres}
                  onChange={(e) =>
                    setUser({ ...user, orgAcres: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="date-container">
            <div>
              <label htmlFor="date">Date :</label>
              <br />
              <input
                className={
                    error && date <= 0
                      ? "date-input focus red"
                      : "date-input focus"
                  }
                type="Date"
                id="date"
                
                onChange={(e) => setUser({ ...user, date: e.target.value })}
              />
            </div>
          </div>

         {/* below classnames same as crop main container */}

<div className="crop-acres-main-container">
            <div className="crop-acres-container">
              <div className="input-field">
                <label htmlFor="semiorganics">Manure/Organic-Chemical:</label>
                <br />
                <input
                   className={
                    error && manureOrganic <= 0
                      ? "crop-input focus red"
                      : "crop-input focus"
                  }
                  type="text"
                  id="manure"
                  onChange={(e) =>
                    setUser({ ...user, manureOrganic: e.target.value })
                  }
                />
              </div>
              <div className="acres">
                <label htmlFor="acres2">Drip :</label>
                <br />
                <input
                    className={
                    error && drip <= 0
                      ? "acres-input focus red"
                      : "acres-input focus"
                  }
                  type="text"
                  id="drip"
                  onChange={(e) => setUser({ ...user, drip: e.target.value })}
                />
              </div>
            </div>

            <div className="crop-acres-container-2">
              <div className="input-field">
                <label htmlFor="organics">Crop Condition :</label>
                <br />
                <input
                  className={
                    error && cropCondition <= 0
                      ? "crop-input focus red"
                      : "crop-input focus"
                  }
                  type="text"
                  id="cropcondition"
                  onChange={(e) =>
                    setUser({ ...user, cropCondition: e.target.value })
                  }
                />
              </div>
              <div className="acres">
                <label htmlFor="acres3">Age of Crop :</label>
                <br />
                <input
                  className={
                    error && ageOfCrop <= 0
                      ? "acres-input-1 focus red"
                      : "acres-input-1 focus"
                  }
                  type="text"
                  id="ageofcrop"
                  onChange={(e) =>
                    setUser({ ...user, ageOfCrop: e.target.value })
                  }
                />
              </div>
            </div>
          </div>

          <div className="spray-container">
            <div>
              <label htmlFor="spray">Spraying Serial :</label>
              <br />
              <input
                required=""
                className={
                    error && sprayingSerial <= 0
                      ? "spray-input focus red"
                      : "spray-input focus"
                  }
                type="text"
                id="spray"
                onChange={(e) =>
                  setUser({ ...user, sprayingSerial: e.target.value })
                }
              />
            </div>
            <div className="spray-container-1">
              <label htmlFor="sparycombination">Spraying Combination :</label>
              <br />
              <input
                className={
                    error && sprayingCombination <= 0
                      ? "spray-input focus red"
                      : "spray-input focus"
                  }
                type="text"
                id="sparycombination"
                onChange={(e) =>
                  setUser({ ...user, sprayingCombination: e.target.value })
                }
              />
            </div>
            <div className="spray-container-1">
              <label htmlFor="quantity">Quantity :</label>
              <br />
              <input
                className={
                    error && quantity <= 0
                      ? "spray-input focus red"
                      : "spray-input focus"
                  }
                type="text"
                id="quantity"
                onChange={(e) => setUser({ ...user, quantity: e.target.value })}
              />
            </div>
          </div>

          <div className="remarks-container">
            <div>
              <label htmlFor="remarks">Remarks :</label>
              <br />
              <input
                type="text"
                id="remarks"
                className="remarks-input"
                onChange={(e) => setUser({ ...user, remarks: e.target.value })}
              />
            </div>
          </div>

          <div className="file-container">
            <div>
              <label htmlFor="file">Photo/Video :</label>
              <br />
              <input
                className="file-input"
                type="file"
                id="file"
                multiple
                onChange={(e) => setUser({ ...user, files: e.target.value })}
              />
            </div>
          </div>

          <div className="button-container">
            <button className="btn" type="submit" onClick={onSubmitForm}>
              Submit
            </button>
          </div>
        </form>
      </div>
      <ToastContainer floatingTime={5000} />
    </div>
  );
};

export default Form;
