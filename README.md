Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
      // eslint-disable-next-line
      setTimeout(function(){
        window.location.reload();
     }, 4000);
      toast.success('Success');








      import React, { useState } from "react";
import Axios from "axios";
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

  const getDetails = (e) => {

    if (phoneNumber.length === 10) {
    //   e.target.blur();
      // console.log(typeof(parseInt(phoneNumber)))
      Axios.get("http://127.0.0.1:8000/api/get-user").then((response) => {
        console.log(response.data.getuser)
        const fetchedData = response.data.getuser;
        // const updatedData = fetchedData.map((each) => ({
        //   phoneNumber: each.number,
        //   firstName: each.first_name,
        //   lastName: each.last_name,
        //   village: each.village,
        //   mandal: each.mandal,
        //   cropVariety: each.crop_variety,
        //   totalAcres: each.total_acres,
        //   farmingIpm: each.farming_ipm,
        //   farmingAcres: each.farming_acres,
        //   semiOrganics: each.semi_organics,
        //   semiAcres: each.semi_acres,
        //   organics: each.organics,
        //   orgAcres: each.org_acres,
        //   date: "",
        //   manureOrganic: "",
        //   drip: "",
        //   cropCondition: "",
        //   ageOfCrop: "",
        //   sprayingSerial: "",
        //   sprayingCombination: "",
        //   quantity: "",
        //   remarks: "",
        //   files: "",
        // }));
        // console.log(updatedData);
        // eslint-disable-next-line
        fetchedData.map((each) => {
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
    } else {
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
      // console.log(phoneNumber+firstName+lastName+village+mandal)
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
      window.location.reload(false);
      alert("Data Submitted Successfullly");
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
                  type="text"
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
                  type="text"
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
                  type="text"
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
                  type="text"
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

          {/* <div className="manure-crop-main-container">
            <div className="manure-container">
              <div className="manure-input-container">
                <label htmlFor="manure">Manure/Organic-Chemical :</label>
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
              <div className="drip-input-container">
                <label htmlFor="drip">Drip :</label>
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

            <div className="crop-condition-container">
              <div>
                <label htmlFor="cropcondition">Crop Condition :</label>
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
              <div className="age-crop-container">
                <label htmlFor="ageofcrop">Age of Crop :</label>
                <br />
                <input
                  className={
                    error && ageOfCrop <= 0
                      ? "acres-input focus red"
                      : "acres-input focus"
                  }
                  type="text"
                  id="ageofcrop"
                  onChange={(e) =>
                    setUser({ ...user, ageOfCrop: e.target.value })
                  }
                />
              </div>
            </div>
          </div> */}
          
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
                      ? "acres-input focus red"
                      : "acres-input focus"
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
    </div>
  );
};

export default Form;






















/* background-image: url("https://www.xmple.com/wallpaper/gradient-green-yellow-linear-1334x750-c2-ffff00-008b8b-a-330-f-14.svg"); */




* {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 15px;
  box-sizing: border-box;
}
html,
body {
  overflow-x: hidden;
  scroll-behavior: smooth;
}
label{
  color: 
  #040607
  ;
  font-weight: 500;
}

.img-container{
  display: flex;
  width: 100%;
  align-items: left;
  justify-self: left;
  justify-content: left;
  margin-bottom: 20px;
  background-color: white;
  padding: 10px;
  padding-left: 10%;
}

.image {
  width: 220px;
  align-self: left;
}

.focus:focus {
  outline: 0.1em solid rgb(0, 0, 0);
  outline-offset: -0.1em;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* background-color: #5bb7e6; */
  background-image: url("https://images.ctfassets.net/co0pvta7hzrh/1HOajBVHsh7xunfUnjpDNE/c94d271e8f90a6bf6016fc1d275d7a74/e_commerce_registration_form_template_thumb.png");
  min-height: 100vh;
  background-size: cover;
  background-image: url("https://www.xmple.com/wallpaper/gradient-green-yellow-linear-1334x750-c2-ffff00-008b8b-a-330-f-14.svg");
}

.main-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  padding: 20px;
  margin: 30px;
  width: 80%;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px,
   rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
}

.form-details{
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: center;
}
.number-container {
    margin: 5px;
    
}

.input-number {
  width: 50%;
  height: 35px;
  border-radius: 4px;
  margin-top: 5px;
  padding-left: 15px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;

}
.input-number:focus {
  outline: 0.01em solid rgb(0, 0, 0);
  outline-offset: -0.1em;
}
.name-container,
.place-container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
  
.first-name-container,
.last-name-container,
.village-container,
.mandal-container {
  margin: 5px;
} 
.last-name-container,
.mandal-container {
 margin-left: 3%;
} 
.firstname-input,
.secondname-input,
.village-input,
.mandal-input{
  width: 250px;
  max-width: 300px;
  height: 32px;
  border-radius: 4px;
  margin-top: 5px;
  padding-left: 15px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
  
}
.village-input,
.mandal-input,
.secondname-input{
  width: 250px;
  max-width: 300px;
}
.crop-acres-container {
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: space-between;
  align-items: space-between;
}
.crop-acres-container-2 {
  display: flex;
  flex-direction: row;
  margin: 5px;
  justify-content: space-between;
  align-items: space-between;
}

.input-field{
  margin-right: 5px;
}
.acres {
  margin-left: 20px;
}
.crop-input {
  width: 180%;
  height: 32px;
  border-radius: 4px;
  margin-top: 5px;
  padding-left: 15px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
}
.acres-input {
  width: 90%;
  height: 32px;
  border-radius: 4px;
  margin-top: 5px;
  padding-left: 15px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
}

.date-container {
  display: flex;
  margin: 5px;
}
.date-input {
  width: 100%;
  height: 32px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 5px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
}

.manure-container {
  display: flex;
  flex-direction: row;
  margin: 5px;
}
.manure-input-container {
   width: 280px;
}
.drip-input  {
  width: 50%;
  height: 32px;
  border-radius: 4px;
  margin-top: 5px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
}
.crop-condition-container {
  display: flex;
  flex-direction: row;
  margin: 5px;
  margin-top: 17px;
  
}
.age-crop-container {
  margin-left: 30%;
  margin-top: 0;
  
}
.drip-input-container {
   margin-left: -10px;
   
}
.crop-acres-main-container {
  display: flex;
  flex-direction: row;
 
}
.spray-container-1 {
  margin-left: 7%;
}
.crop-main-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

}
.manure-crop-main-container {
  display: flex;
  flex-direction: row;
  margin-top: 20px;
  align-items: center;
}
.agecrop-input {
  width: 50%;
  height: 32px;
  border-radius: 4px;
  margin-top: 5px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
}
.spray-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 5px;
}
.spray-input {
  width: 100%;
  height: 32px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 5px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
  padding-left: 15px;
}
.remarks-container {
  display: flex;
  flex-direction: row;
  margin: 5px;
  width: 100%;
}
.remarks-input {
  width: 600px;
  max-width: 100%;
  height: 45px;
  border-radius: 4px;
  margin-top: 5px;
  padding: 5px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
  padding-left: 15px;
}
.file-container {
  display: flex;
  flex-direction: row;
  margin: 5px;
} 
.file-input {
  width: max-content;
  height: max-content;
  border-radius: 5px;
  margin-top: 5px;
  padding: 5px;
  border: solid 1.5px rgba(128, 128, 128, 0.719) ;
}
.button-container {
  display: flex;
  flex-direction: row;
  margin: 5px;
  margin-top: 20px;
}
.btn {
   background-color:  #5bb7e6;
   width: 100px;
   height: 35px;
   border: none;
   border-radius: 5px;
   color: white;
   font-weight: bold;
   letter-spacing: 1px;
   cursor: pointer;
}
  
.red {
  background-color: #fce4e4;
  border: 1px solid #cc0033;
  outline: none;
 
}
.focus .red {
  display: inline-block;
}
.crop-input .input-number .acres-input  .red {
  display: none;
}

@media only screen and (max-width: 750px)  {
    .main-container {
    padding: 20px;
    margin: 30px;
    width: 90%;
      }
      .image{
        width: 180px;
      }
      .firstname-input,
      .secondname-input,
      .village-input,
      .mandal-input{
        width: 90%;
        height: 28px;
        border-radius: 5px;
        margin-top: 5px;
        padding-left: 15px;
      }
      .last-name-container,
      .mandal-container {
       margin-left: -10px;
    } 
    .input-number {
      width: 80%;
      height: 28px;
    }
    .crop-input {
      width: 90%;
      height: 28px;
    }
   
    .acres {
      margin-left: -10px;
    }
    .crop-acres-main-container {
      display: flex;
      flex-direction: column;
      
     
    }
    .crop-main-container {
      display: flex;
      flex-direction: column;
     
    }
    .acres-input {
      width: 90%;
      height: 28px;
    }
    .crop-acres-container-2 {
      margin: 5px;
    }
    .date-input {
      width: 320px;
      height: 28px;
     
    }
    .manure-crop-main-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
       padding: -10px;
    }
    .drip-input  {
      width: 88%;
      height: 28px;
      
    }
    .manure-container {
      margin-bottom: -10px;
    }
    .age-crop-container {
      margin-left: -8px;
      /* margin-top: 0; */
      
    }
    .drip-input-container {
      margin-left: -8px;
     
     
   }
   .agecrop-input {
    width: 88%;
   }
   .spray-container-1 {
    margin-left: 0;
    
  }
  .spray-input{
    height: 28px;
    
  }
  .remarks-input {
    width: 100%;
  }
  .spray-container{
    display: flex;
    flex-direction: column;
  }
  .file-input {
    width: max-content;
    height: min-content;
  }
  .spray-container-1 {
    margin-top: 10px;
    margin-bottom: 5px;
  }
}
  

@media only screen and (max-width: 375px) {
   .form-details {
    margin-left: 20px;
   }
   .date-input {
    width: max-content;
   }
   .spray-input {
    width: auto;
   }
   .image{
    width: 130px;
  }
}

@media only screen and (min-width: 768px) {
   .main-container {
    width: 65%;
   }
 
   .crop-input {
    width: 180px;
   }
   .acres-input {
    width: 60%;
   }
   
  .drip-input-container {
   margin-left: 20px;
  }
  .age-crop-container {
    margin-left: 10px;
  }
  
}
 
@media only screen and (max-width: 320px) {
  .form-details {
    margin: 30px;
    padding: 20px;
   }
   .image{
    width: 130px;
  }
   
   .spray-input {
    width: auto;
   }
   .file-input {
    width: 100%;
   }
   .input-number {
    width: auto;
   }
   .acres-input{
    width: 40%;

   }
   .crop-input {
    width: 120%;
   }
   .name-container {
    display: flex;
    flex-direction: column;
   }
   .place-container {
    display: flex;
    flex-direction: column;
   }
   .number-container {
    margin-top: -40px;
   }
   .last-name-container,
   .mandal-container {
    margin: 0px;
   }
   .crop-input {
    width: 100%;
   }
   .manure-container {
    display: flex;
    flex-direction: column;
   }
  
   .crop-acres-container {
    display: flex;
    flex-direction: column;
   }
   .crop-acres-container-2 {
    display: flex;
    flex-direction: column;
   }
   .crop-condition-container {
    display: flex;
    flex-direction: column;
   }
   .acres {
    margin-left: 2px;
   }
   .drip-input-container {
        margin-left: 2px;
        margin-top: 3px;
   }
   .age-crop-container {
      margin-left: 2px;
   }

   
} 
  
  
@media only screen and (max-width: 950px) {
  .main-container {
    width: 80%;
   }
} 
  
   
    
    